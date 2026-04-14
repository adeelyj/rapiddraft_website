import { somicDemoConfig } from './configs/somic';
import { webastoDemoConfig } from './configs/webasto';
import type { CompanyDemoConfig } from './types';

const companyDemos: CompanyDemoConfig[] = [somicDemoConfig, webastoDemoConfig];

function normalizeHostname(hostname: string) {
    return hostname.trim().toLowerCase().replace(/\.$/, '');
}

export function getCompanyDemoBySlug(slug: string) {
    return companyDemos.find((demo) => demo.slug === slug);
}

export function getCompanyDemoByHostname(hostname: string) {
    const normalizedHostname = normalizeHostname(hostname);
    return companyDemos.find((demo) => demo.hostnames.some((candidate) => normalizeHostname(candidate) === normalizedHostname));
}

export function listCompanyDemos() {
    return companyDemos;
}
