import { Check } from 'lucide-react';
import { motion } from 'framer-motion';
import MediaFrame from '../MediaFrame';
import Reveal from './Reveal';

type FragmentCard = {
    title: string;
    description: string;
};

type CapabilityCard = {
    title: string;
    description: string;
    bullets: string[];
};

type ProblemSolutionStoryProps = {
    intro: string;
    bodyParagraphs: string[];
    fragments: FragmentCard[];
    launcher: {
        src: string;
        poster?: string;
        alt: string;
    };
    launcherTitle: string;
    launcherBody: string;
    capabilities: CapabilityCard[];
};

export default function ProblemSolutionStory({
    intro,
    bodyParagraphs,
    fragments,
    launcher,
    launcherTitle,
    launcherBody,
    capabilities,
}: ProblemSolutionStoryProps) {
    return (
        <div className="space-y-10 md:space-y-14 lg:space-y-[4.5rem]">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,0.52fr)_minmax(0,0.48fr)] lg:items-start">
                <Reveal className="max-w-[760px] lg:pt-4">
                    <div className="site-kicker">Why engineering context gets lost</div>
                    <h2 className="hero-title mt-5 max-w-[11ch] leading-[0.97] sm:max-w-[12.5ch] md:text-[3.6rem] lg:text-[4.15rem]">
                        Between design iterations, engineering decisions get lost
                    </h2>
                    <p className="section-copy mt-6 max-w-2xl text-[1.05rem] leading-8 sm:text-[1.15rem] sm:leading-9">{intro}</p>
                    <div className="mt-0 max-w-2xl space-y-0">
                        {bodyParagraphs.map((paragraph) => (
                            <p key={paragraph} className="section-copy">
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </Reveal>

                <div className="grid gap-4 sm:grid-cols-2">
                    {fragments.map((card, index) => (
                        <Reveal key={card.title} delay={index * 0.05}>
                            <motion.article
                                whileHover={{ y: -5 }}
                                transition={{ type: 'spring', stiffness: 260, damping: 24 }}
                                className="h-full rounded-[1.7rem] border border-stone-200/90 bg-white p-5 shadow-[0_18px_42px_-34px_rgba(17,24,39,0.16)] sm:p-6"
                            >
                                <div className="card-index">0{index + 1}</div>
                                <h3 className="card-title mt-4">
                                    {card.title}
                                </h3>
                                <p className="card-copy mt-4">
                                    {card.description}
                                </p>
                            </motion.article>
                        </Reveal>
                    ))}
                </div>
            </div>

            <div>
                <Reveal className="mx-auto max-w-4xl text-center">
                    <div className="site-kicker">How RapidDraft closes the gap</div>
                    <h3 className="hero-title mx-auto mt-5 max-w-[13ch] md:text-[3.6rem] lg:text-[4rem]">
                        {launcherTitle}
                    </h3>
                    <p className="section-copy mx-auto mt-5 max-w-4xl md:text-[1.2rem] md:leading-[1.65]">
                        {launcherBody}
                    </p>
                </Reveal>

                <Reveal className="mx-auto mt-8 max-w-[1120px] sm:mt-10">
                    <MediaFrame
                        src={launcher.src}
                        poster={launcher.poster}
                        alt={launcher.alt}
                        aspectClassName="aspect-[16/10]"
                        mediaClassName="object-cover"
                        frameClassName="warm-panel mx-auto p-3 sm:p-4"
                    />
                </Reveal>

                <div className="mt-8 grid gap-4 md:mt-10 md:grid-cols-2">
                    {capabilities.map((capability, index) => {
                        return (
                            <Reveal key={capability.title} delay={0.04 + index * 0.05}>
                                <motion.article
                                    whileHover={{ y: -5 }}
                                    transition={{ type: 'spring', stiffness: 260, damping: 24 }}
                                    className="h-full rounded-[1.7rem] border border-stone-200/90 bg-white p-5 shadow-[0_20px_50px_-38px_rgba(17,24,39,0.2)] sm:p-6"
                                >
                                    <div className="card-index">0{index + 1}</div>
                                    <h4 className="card-title mt-4">
                                        {capability.title}
                                    </h4>
                                    <p className="card-copy mt-3">
                                        {capability.description}
                                    </p>
                                    <ul className="mt-5 space-y-3">
                                        {capability.bullets.map((bullet) => (
                                            <li key={bullet} className="bullet-row">
                                                <span className="bullet-icon">
                                                    <Check className="h-3 w-3 text-primary" />
                                                </span>
                                                <span className="bullet-copy">{bullet}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.article>
                            </Reveal>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
