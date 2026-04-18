# NDA + LOI Automation

This site can generate and email the NDA and LOI automatically from the combined `NDA + LOI` request form at `/deal-room_v3/nda-request`.

## Flow

1. Customer submits the form.
2. Netlify function `generate-nda-loi` copies both Google Docs templates.
3. The function fills the placeholders in each copied document.
4. The function exports both documents as PDF.
5. The PDFs are saved as:
   - `NDA_[company].pdf`
   - `LOI_[company].pdf`
6. The PDFs are emailed to the customer and copied to `info@rapiddraft.ai`.

## Required Setup

### 1. Choose an auth mode

The function supports two Google auth modes:

1. Preferred: OAuth using a real Google user account
2. Fallback: service account

#### OAuth mode

Set:

- `GOOGLE_OAUTH_CLIENT_ID`
- `GOOGLE_OAUTH_CLIENT_SECRET`
- `GOOGLE_OAUTH_REFRESH_TOKEN`
- `GOOGLE_OAUTH_REDIRECT_URI`
  - optional, defaults to `http://localhost`

In this mode, the generated copies and PDFs are created under the Google account that granted the refresh token.

To generate the refresh token locally:

1. Put `GOOGLE_OAUTH_CLIENT_ID` and `GOOGLE_OAUTH_CLIENT_SECRET` into `.env`
2. Optionally set `GOOGLE_OAUTH_REDIRECT_URI`
3. Run:
   - `npm run auth:google-refresh-token`
4. Open the printed Google consent URL
5. Approve access
6. Paste the returned authorization code back into the terminal
7. Copy the printed refresh token into `.env` as `GOOGLE_OAUTH_REFRESH_TOKEN`

#### Service account mode

Set:

- `GOOGLE_SERVICE_ACCOUNT_EMAIL`
- `GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY`

Then share these documents with the service account email:

- NDA template
- LOI template

If `GOOGLE_OUTPUT_FOLDER_ID` is set, also share that Drive folder with the same service account.

### 2. Environment variables

Set these in Netlify:

- `GOOGLE_OAUTH_CLIENT_ID`
- `GOOGLE_OAUTH_CLIENT_SECRET`
- `GOOGLE_OAUTH_REFRESH_TOKEN`
- `GOOGLE_OAUTH_REDIRECT_URI`
  - optional, defaults to `http://localhost`
- `GOOGLE_SERVICE_ACCOUNT_EMAIL`
- `GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY`
- `GOOGLE_NDA_TEMPLATE_ID`
  - optional, defaults to the current NDA template in code
- `GOOGLE_LOI_TEMPLATE_ID`
  - optional, defaults to the current LOI template in code
- `GOOGLE_OUTPUT_FOLDER_ID`
  - optional, where generated doc copies and PDFs should be stored
- `RAPIDDRAFT_LEGAL_ADDRESS`
- `RAPIDDRAFT_EFFECTIVE_DATE_TIMEZONE`
  - optional, defaults to `Europe/Berlin`
- `AUTOMATION_INTERNAL_RECIPIENT`
  - optional, defaults to `info@rapiddraft.ai`
- `AUTOMATION_TEST_MODE`
  - optional, set to `true` for local testing when you want document generation without SMTP email sending
- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_SECURE`
  - optional, inferred from port if omitted
- `SMTP_USER`
- `SMTP_PASS`
- `SMTP_FROM`

### 3. SMTP

The function uses SMTP to send the PDFs.

Typical options:

- Google Workspace SMTP
- Microsoft 365 SMTP
- SendGrid SMTP
- Resend SMTP-compatible endpoint

### 4. Save Sent Copy

If you want each sent NDA/LOI email to appear in the mailbox `Sent` folder, also set:

- `IMAP_HOST`
- `IMAP_PORT`
- `IMAP_SECURE`
- `IMAP_USER`
  - optional, defaults to `SMTP_USER`
- `IMAP_PASS`
  - optional, defaults to `SMTP_PASS`
- `IMAP_SENT_FOLDER`
  - optional, defaults to `Sent`

After the SMTP send succeeds, the function appends the sent RFC822 message into the configured IMAP sent mailbox.

## Current Placeholder Schema

The Google Docs templates have been normalized to these merge tags:

- `{{EFFECTIVE_DATE}}`
- `{{RAPIDDRAFT_ADDRESS}}`
- `{{RAPIDDRAFT_EMAIL}}`
- `{{CUSTOMER_LEGAL_NAME}}`
- `{{CUSTOMER_JURISDICTION}}`
- `{{CUSTOMER_ADDRESS}}`
- `{{CUSTOMER_SIGNER_NAME}}`
- `{{CUSTOMER_SIGNER_TITLE}}`
- `{{USE_CASE_WORKFLOW}}`
- `{{BUSINESS_UNIT_SITE}}`
- `{{SYSTEMS_ENVIRONMENT}}`

## Trigger

The frontend posts the combined NDA + LOI form directly to:

- `/.netlify/functions/generate-nda-loi`

## Notes

- The function creates filled Google Doc copies and PDF files.
- If OAuth credentials are present, the function uses your Google user account via refresh token.
- If OAuth credentials are not present, the function falls back to service-account auth.
- The filenames are sanitized from the submitted company name.
- `{{EFFECTIVE_DATE}}` is set from the form submission timestamp on the server, using `RAPIDDRAFT_EFFECTIVE_DATE_TIMEZONE`.
- `{{RAPIDDRAFT_EMAIL}}` is always set to `info@rapiddraft.ai`.
- If the service account cannot access the templates or output folder, the function will fail.
- If `AUTOMATION_TEST_MODE=true`, the function still generates the Google Docs and PDFs but skips the email send.

## Fast Local Test

1. Copy `.env.example` to `.env`.
2. Fill these values at minimum:
   - either:
     - `GOOGLE_OAUTH_CLIENT_ID`
     - `GOOGLE_OAUTH_CLIENT_SECRET`
     - `GOOGLE_OAUTH_REFRESH_TOKEN`
   - or:
     - `GOOGLE_SERVICE_ACCOUNT_EMAIL`
     - `GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY`
   - `RAPIDDRAFT_LEGAL_ADDRESS`
   - optionally `GOOGLE_OUTPUT_FOLDER_ID`
3. Set:
   - `AUTOMATION_TEST_MODE=true`
4. If using service-account mode, share the NDA template, LOI template, and output folder with the service account email.
5. Start the app with:
   - `npm run dev:netlify`
6. Open:
   - `http://localhost:8888/deal-room_v3/nda-request`
7. Submit the form.

In test mode, the success state will show direct links to:
- the generated NDA working doc
- the generated NDA PDF
- the generated LOI working doc
- the generated LOI PDF

That lets you verify placeholder filling, naming, and PDF generation before you wire SMTP.
