import fs from 'node:fs';
import http from 'node:http';
import readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import { google } from 'googleapis';

const scopes = [
    'https://www.googleapis.com/auth/documents',
    'https://www.googleapis.com/auth/drive',
];

function readRequiredEnv(name) {
    const value = process.env[name];

    if (!value) {
        throw new Error(`Missing required environment variable: ${name}`);
    }

    return value;
}

function loadDotEnv() {
    if (!fs.existsSync('.env')) {
        return;
    }

    const envText = fs.readFileSync('.env', 'utf8');

    for (const rawLine of envText.split(/\r?\n/)) {
        const line = rawLine.trim();
        if (!line || line.startsWith('#')) continue;
        const idx = line.indexOf('=');
        if (idx === -1) continue;
        const key = line.slice(0, idx).trim();
        const value = line.slice(idx + 1);
        if (!(key in process.env)) {
            process.env[key] = value;
        }
    }
}

async function main() {
    loadDotEnv();

    const clientId = readRequiredEnv('GOOGLE_OAUTH_CLIENT_ID');
    const clientSecret = readRequiredEnv('GOOGLE_OAUTH_CLIENT_SECRET');
    const redirectUri = process.env.GOOGLE_OAUTH_REDIRECT_URI || 'http://127.0.0.1:3333/oauth2callback';

    const oauth2Client = new google.auth.OAuth2(clientId, clientSecret, redirectUri);

    const authUrl = oauth2Client.generateAuthUrl({
        access_type: 'offline',
        prompt: 'consent',
        include_granted_scopes: true,
        scope: scopes,
    });

    output.write('\nOpen this URL in your browser and complete the Google consent flow:\n\n');
    output.write(`${authUrl}\n\n`);

    let code = '';

    if (redirectUri.startsWith('http://127.0.0.1:') || redirectUri.startsWith('http://localhost:')) {
        const url = new URL(redirectUri);

        code = await new Promise((resolve, reject) => {
            const server = http.createServer((req, res) => {
                const requestUrl = new URL(req.url || '/', redirectUri);
                const returnedCode = requestUrl.searchParams.get('code');
                const error = requestUrl.searchParams.get('error');

                if (error) {
                    res.writeHead(400, { 'Content-Type': 'text/plain' });
                    res.end(`Google returned an error: ${error}`);
                    server.close();
                    reject(new Error(`Google returned an error: ${error}`));
                    return;
                }

                if (!returnedCode) {
                    res.writeHead(400, { 'Content-Type': 'text/plain' });
                    res.end('No authorization code found in the callback.');
                    return;
                }

                res.writeHead(200, { 'Content-Type': 'text/plain' });
                res.end('Google authorization received. You can close this tab and return to the terminal.');
                server.close();
                resolve(returnedCode);
            });

            server.on('error', reject);
            server.listen(Number(url.port), url.hostname, () => {
                output.write(`Waiting for Google callback on ${redirectUri} ...\n\n`);
            });
        });
    } else {
        const rl = readline.createInterface({ input, output });
        code = (await rl.question('Paste the authorization code here: ')).trim();
        rl.close();

        if (!code) {
            throw new Error('No authorization code provided.');
        }
    }

    const { tokens } = await oauth2Client.getToken(code);

    if (!tokens.refresh_token) {
        throw new Error(
            'Google did not return a refresh token. Revoke the app access and rerun this helper with prompt=consent.'
        );
    }

    output.write('\nRefresh token:\n\n');
    output.write(`${tokens.refresh_token}\n\n`);
    output.write('Add it to .env as:\n\n');
    output.write(`GOOGLE_OAUTH_REFRESH_TOKEN=${tokens.refresh_token}\n`);
}

main().catch((error) => {
    console.error(`\nError: ${error instanceof Error ? error.message : String(error)}\n`);
    process.exit(1);
});
