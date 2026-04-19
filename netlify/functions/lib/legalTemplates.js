export const RAPIDDRAFT_EMAIL = 'info@rapiddraft.ai';

export const RAPIDDRAFT_FOUNDERS = [
    'Adeel Yawar Jamil',
    'Dr. Hasan Raza',
    'Sreekar Reddy Sajjala',
];

// These templates are grounded in the source docs from:
// C:\Users\adeel\OneDrive\100_Knowledge\203_TextCAD\03_Legal\NDA
export const NDA_TEMPLATE = {
    title: 'MUTUAL NON-DISCLOSURE AGREEMENT',
    intro: [
        'This Mutual Non-Disclosure Agreement ("NDA") is entered into as of {{EFFECTIVE_DATE}} ("Effective Date") by and between:',
        'Adeel Yawar Jamil, Dr. Hasan Raza, and Sreekar Reddy Sajjala, acting jointly as founders of RapidDraft, a venture to be incorporated (collectively, "RapidDraft Founders"), with email: {{RAPIDDRAFT_EMAIL}};',
        'and',
        '{{CUSTOMER_LEGAL_NAME}}, a company organized under the laws of {{CUSTOMER_JURISDICTION}}, with its registered address at {{CUSTOMER_ADDRESS}} ("Customer").',
        'The RapidDraft Founders and Customer are each a "Party" and together the "Parties."',
    ],
    sections: [
        {
            heading: '1. Purpose',
            paragraphs: [
                'The Parties wish to exchange certain confidential information for the purpose of evaluating and potentially entering into a pilot, commercial relationship, or related collaboration concerning RapidDraft\'s software, services, and the Customer\'s engineering workflows (the "Purpose").',
            ],
        },
        {
            heading: '2. Confidential Information',
            paragraphs: [
                '"Confidential Information" means any non-public information disclosed by or on behalf of one Party ("Disclosing Party") to the other Party ("Receiving Party"), whether in written, oral, visual, electronic, or other form, that is designated as confidential or that reasonably should be understood to be confidential given the nature of the information and the circumstances of disclosure.',
                'Confidential Information includes, without limitation:',
            ],
            bullets: [
                'software, product designs, architecture, methods, models, know-how, technical documentation, and roadmaps;',
                'drawings, CAD files, engineering standards, specifications, templates, workflows, validation rules, sample outputs, and related technical materials;',
                'business, commercial, and financial information, including pricing, proposals, plans, and forecasts;',
                'notes, summaries, analyses, copies, or derivatives prepared by the Receiving Party that contain or reflect such information.',
            ],
        },
        {
            heading: '3. Exclusions',
            paragraphs: [
                'Confidential Information does not include information that the Receiving Party can demonstrate:',
            ],
            lettered: [
                'is or becomes publicly available through no breach of this Agreement;',
                'was lawfully known to the Receiving Party without restriction before disclosure;',
                'is lawfully received from a third party without breach of any confidentiality obligation; or',
                'is independently developed without use of or reference to the Disclosing Party\'s Confidential Information.',
            ],
        },
        {
            heading: '4. Use Restrictions',
            paragraphs: [
                'The Receiving Party shall:',
            ],
            lettered: [
                'use the Confidential Information solely for the Purpose;',
                'not disclose the Confidential Information except as expressly permitted under this Agreement; and',
                'protect the Confidential Information using at least the same degree of care it uses for its own confidential information of a similar nature, and in any event no less than reasonable care.',
            ],
        },
        {
            heading: '5. Permitted Disclosures',
            paragraphs: [
                'The Receiving Party may disclose Confidential Information only to its employees, officers, directors, affiliates, advisers, and contractors who have a strict need to know for the Purpose and who are bound by confidentiality obligations no less protective than those in this Agreement. The Receiving Party remains responsible for any breach of this Agreement by such persons.',
            ],
        },
        {
            heading: '6. No Reverse Engineering',
            paragraphs: [
                'Except to the extent prohibited by applicable law, the Receiving Party shall not reverse engineer, decompile, disassemble, analyze, benchmark for external publication, or otherwise attempt to derive the composition, structure, underlying ideas, models, or methods of any software, prototype, output, or materials disclosed by the Disclosing Party.',
            ],
        },
        {
            heading: '7. Compelled Disclosure',
            paragraphs: [
                'If the Receiving Party is required by law, regulation, or court order to disclose Confidential Information, it may do so only to the extent legally required and, where legally permitted, shall promptly notify the Disclosing Party so that the Disclosing Party may seek a protective order or other appropriate remedy.',
            ],
        },
        {
            heading: '8. Return or Deletion',
            paragraphs: [
                'Upon written request of the Disclosing Party, or upon termination of discussions between the Parties, the Receiving Party shall promptly return or securely delete the Disclosing Party\'s Confidential Information, except that the Receiving Party may retain:',
            ],
            bullets: [
                'one archival copy solely for legal, regulatory, or compliance purposes; and',
                'routine backup copies created automatically in the ordinary course of business,',
            ],
            paragraphsAfterList: [
                'provided that any retained information remains subject to this Agreement.',
            ],
        },
        {
            heading: '9. Ownership',
            paragraphs: [
                'All Confidential Information remains the property of the Disclosing Party. No license or other right in any intellectual property is granted or implied by this Agreement, except for the limited right to use the Confidential Information for the Purpose.',
            ],
        },
        {
            heading: '10. No Obligation',
            paragraphs: [
                'Nothing in this Agreement obligates either Party to proceed with any proposed transaction, pilot, or commercial relationship.',
            ],
        },
        {
            heading: '11. Pre-Incorporation / Replacement by Company',
            paragraphs: [
                'The Parties acknowledge that RapidDraft has not yet been incorporated as a legal entity and that this Agreement is being entered into by the RapidDraft Founders personally.',
                'If a RapidDraft legal entity is incorporated, the Parties intend in good faith to replace the RapidDraft Founders with that newly incorporated entity on substantially the same terms, by novation or a short replacement agreement, at the reasonable request of the RapidDraft Founders.',
            ],
        },
        {
            heading: '12. Term and Confidentiality Period',
            paragraphs: [
                'This Agreement begins on the Effective Date and continues for 2 years, unless terminated earlier by either Party upon written notice.',
                'The confidentiality obligations under this Agreement shall continue for 5 years from each disclosure; provided, however, that for information qualifying as a trade secret under applicable law, such obligations shall continue for so long as such information remains a trade secret.',
            ],
        },
        {
            heading: '13. Remedies',
            paragraphs: [
                'The Parties acknowledge that unauthorized disclosure or use of Confidential Information may cause irreparable harm for which damages may be an insufficient remedy. Accordingly, the Disclosing Party may seek injunctive or equitable relief in addition to any other remedies available at law.',
            ],
        },
        {
            heading: '14. Governing Law and Jurisdiction',
            paragraphs: [
                'This Agreement shall be governed by the laws of the Federal Republic of Germany, excluding its conflict-of-laws rules.',
                'The courts of Munich, Germany shall have exclusive jurisdiction over disputes arising out of or in connection with this Agreement, except that either Party may seek injunctive relief in any court of competent jurisdiction.',
            ],
        },
        {
            heading: '15. Entire Agreement',
            paragraphs: [
                'This Agreement constitutes the entire agreement between the Parties regarding its subject matter and supersedes all prior discussions on that subject. Any amendment must be in writing and signed by both Parties.',
            ],
        },
        {
            heading: '16. Counterparts and Electronic Signatures',
            paragraphs: [
                'This Agreement may be executed in counterparts, each of which is deemed an original, and all of which together constitute one instrument. Signatures exchanged electronically shall be deemed effective to the fullest extent permitted by applicable law.',
            ],
        },
    ],
};

export const LOI_TEMPLATE = {
    title: 'LETTER OF INTENT FOR PILOT COLLABORATION',
    intro: [
        'This Letter of Intent ("LOI") is entered into as of {{EFFECTIVE_DATE}} ("Effective Date") by and between:',
        'Adeel Yawar Jamil, Dr. Hasan Raza, and Sreekar Reddy Sajjala, acting jointly as founders of RapidDraft, a venture to be incorporated (collectively, "RapidDraft Founders"), with email: {{RAPIDDRAFT_EMAIL}};',
        'and',
        '{{CUSTOMER_LEGAL_NAME}}, a company organized under the laws of {{CUSTOMER_JURISDICTION}}, with its registered address at {{CUSTOMER_ADDRESS}} ("Customer").',
        'The RapidDraft Founders and Customer are each a "Party" and together the "Parties."',
    ],
    sections: [
        {
            heading: '1. Purpose',
            paragraphs: [
                'This LOI records the Parties\' intention to explore a pilot collaboration to evaluate RapidDraft\'s software and related services for a defined Customer workflow or use case.',
            ],
        },
        {
            heading: '2. Indicative Scope',
            paragraphs: [
                'The Parties currently intend to explore a pilot in relation to the following:',
            ],
            bullets: [
                'Use case / workflow: {{USE_CASE_WORKFLOW}}',
                'Business unit / site: {{BUSINESS_UNIT_SITE}}',
                'Systems / environment: {{SYSTEMS_ENVIRONMENT}}',
            ],
            paragraphsAfterList: [
                'The final scope, deliverables, timeline, assumptions, exclusions, and commercial terms will be defined in a separate Pilot Agreement or Statement of Work.',
            ],
        },
        {
            heading: '3. Confidentiality',
            paragraphs: [
                'Any exchange of confidential information under this LOI shall remain subject to the NDA or other confidentiality agreement in place between the Parties.',
            ],
        },
        {
            heading: '4. Non-Binding Nature',
            paragraphs: [
                'This LOI reflects the current intentions of the Parties and is non-binding, except for Sections 3 (Confidentiality), 4 (Non-Binding Nature), and 5 (Governing Law and Jurisdiction), which shall be binding to the extent permitted by applicable law.',
                'Nothing in this LOI obligates either Party to enter into a definitive agreement.',
            ],
        },
        {
            heading: '5. Governing Law and Jurisdiction',
            paragraphs: [
                'This LOI shall be governed by the laws of the Federal Republic of Germany, excluding its conflict-of-laws rules. The courts of Munich, Germany shall have exclusive jurisdiction over any disputes arising out of or in connection with this LOI.',
            ],
        },
        {
            heading: '6. Counterparts and Electronic Signatures',
            paragraphs: [
                'This Agreement may be executed in counterparts, each of which is deemed an original, and all of which together constitute one instrument. Signatures exchanged electronically shall be deemed effective to the fullest extent permitted by applicable law.',
            ],
        },
    ],
};
