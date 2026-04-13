export type HeroConfig = {
    badge: string;
    title: string;
    description: string;
    proofChips: string[];
    scenarioTitle: string;
    scenarioBody: string;
};

export type FitCard = {
    title: string;
    body: string;
};

export type StoryVideo = {
    youtubeId?: string;
    placeholderTitle: string;
    recordingBrief: string;
    durationLabel: string;
};

export type StoryChapter = {
    id: string;
    stepNumber: number;
    title: string;
    engineerAction: string;
    rapiddraftReturn: string;
    managementValue: string;
    artifactsIn?: string[];
    artifactsOut?: string[];
    video: StoryVideo;
};

export type CapabilityCard = {
    title: string;
    body: string;
};

export type RolloutPhase = {
    phase: string;
    title: string;
    body: string;
};

export type DemoCtaConfig = {
    buttonLabel: string;
    buttonHref: string;
    panelTitle: string;
    needs: string[];
    note?: string;
};

export type CompanyDemoConfig = {
    slug: string;
    companyName: string;
    hostnames: string[];
    accessLabel: string;
    summary: string;
    hero: HeroConfig;
    fitCards: FitCard[];
    chapters: StoryChapter[];
    capabilities: CapabilityCard[];
    nonClaims: string[];
    rolloutPhases: RolloutPhase[];
    cta: DemoCtaConfig;
};
