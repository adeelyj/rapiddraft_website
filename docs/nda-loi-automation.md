# NDA + LOI Automation

This site can capture, generate, and email the NDA and LOI automatically from the combined
`NDA + LOI` request form at `/deal-room/nda-request`.

## Flow

1. Customer submits the combined `nda-request` form.
2. Netlify Forms stores the submission as the intake record.
3. The frontend calls the Netlify function `generate-nda-loi`.
4. The function fills the repo-local NDA and LOI templates.
5. The function renders both documents as PDF inside the Netlify function.
6. The PDFs are generated as:
   - `NDA_[company].pdf`
   - `LOI_[company].pdf`
7. The PDFs are emailed to the customer and CC'd to `info@rapiddraft.ai`.

## Required Setup

### 1. Environment variables

Set these in Netlify.

Always set:

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

### 2. SMTP

The function uses SMTP to send the PDFs.

Recommended option for this workspace:

- Purelymail SMTP
  - host: `smtp.purelymail.com`
  - port: `465`
  - secure: `true`

## Current Placeholder Schema

The legal templates use these merge tags:

- `{{EFFECTIVE_DATE}}`
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

The combined form is captured in Netlify Forms under:

- `nda-request`

After capture, the frontend posts the same payload to:

- `/.netlify/functions/generate-nda-loi`

## Notes

- The source content is grounded in:
  - `C:\Users\adeel\OneDrive\100_Knowledge\203_TextCAD\03_Legal\NDA\NDA (EN) - General.docx`
  - `C:\Users\adeel\OneDrive\100_Knowledge\203_TextCAD\03_Legal\NDA\LOI (EN) - General.docx`
- The function generates PDFs directly in the Netlify function.
- The form submission is saved in Netlify Forms before document automation starts.
- The filenames are sanitized from the submitted company name.
- `{{EFFECTIVE_DATE}}` is set from the form submission timestamp on the server, using `RAPIDDRAFT_EFFECTIVE_DATE_TIMEZONE`.
- `{{RAPIDDRAFT_EMAIL}}` is always set to `info@rapiddraft.ai`.
- If `AUTOMATION_TEST_MODE=true`, the function still generates the PDFs but skips the email send.

## Fast Local Test

1. Copy `.env.example` to `.env`.
2. Fill these values at minimum:
   - `SMTP_HOST`
   - `SMTP_PORT`
   - `SMTP_USER`
   - `SMTP_PASS`
   - `SMTP_FROM`
3. Set:
   - `AUTOMATION_TEST_MODE=true`
4. Start the app with:
   - `npm run dev:netlify`
5. Open:
   - `http://localhost:8888/deal-room/nda-request`
6. Submit the form.

In test mode, you can verify that PDF generation completes without sending mail.
