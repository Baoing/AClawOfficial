import LegalDocumentLayout from '@/src/components/legal/legal-document-layout'
import { generateMetadata } from '@/src/utils/generateMetaData'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  ...generateMetadata(),
  title: 'GDPR information | AI Clawers',
  description:
    'How AI Clawers approaches GDPR for visitors and clients in the EEA and UK: legal bases, rights, and how to contact us.',
}

const EFFECTIVE_DISPLAY = '2026.01.01'
const EFFECTIVE_ISO = '2026-01-01'

const page = () => {
  return (
    <LegalDocumentLayout
      title="GDPR information"
      effectiveDateDisplay={EFFECTIVE_DISPLAY}
      effectiveDateIso={EFFECTIVE_ISO}
    >
      <p className="text-tagline-3 text-white/50">
        This page summarizes how the EU General Data Protection Regulation (GDPR) and the UK GDPR
        typically apply to personal data we process as a controller when you use our Site or engage
        us as a prospective or current client. It is informational and not legal advice for your
        organization.
      </p>

      <section aria-labelledby="gdpr-scope">
        <h2 id="gdpr-scope">1. Scope</h2>
        <p>
          If you are located in the European Economic Area (EEA) or the United Kingdom, and we process
          your personal data in relation to our own business activities (for example, marketing our
          Shopify services or responding to your inquiry), we act as a <strong>controller</strong> for
          that processing unless a written contract states otherwise.
        </p>
        <p>
          When we process personal data <strong>on your instructions</strong> as part of delivering
          services to your Shopify business (for example, configuring your customer data in your
          systems), you are typically the controller and we act as a <strong>processor</strong>. That
          relationship should be documented in a data processing agreement where required.
        </p>
      </section>

      <section aria-labelledby="gdpr-bases">
        <h2 id="gdpr-bases">2. Legal bases (controller activities)</h2>
        <p>Common legal bases include:</p>
        <ul>
          <li>
            <strong>Legitimate interests</strong>—operating the Site, measuring interest in our
            services, securing our infrastructure, and following up on business inquiries, balanced
            against your rights.
          </li>
          <li>
            <strong>Contract</strong>—steps prior to a contract or performance of a contract when you
            engage us for paid work.
          </li>
          <li>
            <strong>Consent</strong>—where we rely on consent (for example, certain marketing cookies
            or optional communications), you may withdraw consent at any time without affecting
            prior processing that was lawful.
          </li>
          <li>
            <strong>Legal obligation</strong>—where we must retain or disclose records to comply with
            law.
          </li>
        </ul>
      </section>

      <section aria-labelledby="gdpr-rights">
        <h2 id="gdpr-rights">3. Your rights</h2>
        <p>Subject to conditions and exemptions in GDPR / UK GDPR, you may have the right to:</p>
        <ul>
          <li>Access your personal data and receive certain information about processing.</li>
          <li>Rectify inaccurate data or complete incomplete data.</li>
          <li>Request erasure, restriction, or objection in specific circumstances.</li>
          <li>Data portability, where processing is based on consent or contract and is automated.</li>
          <li>Not be subject to solely automated decisions with legal or similarly significant effects, where applicable.</li>
          <li>Lodge a complaint with a supervisory authority in your country or region.</li>
        </ul>
        <p>
          To exercise rights, email{' '}
          <a href="mailto:contact@aiclawers.com">contact@aiclawers.com</a>. We may need to verify your identity
          before responding.
        </p>
      </section>

      <section aria-labelledby="gdpr-transfers">
        <h2 id="gdpr-transfers">4. Transfers outside the EEA/UK</h2>
        <p>
          If we transfer personal data from the EEA or UK to countries not covered by an adequacy
          decision, we use appropriate safeguards such as the UK International Data Transfer Agreement
          or the EU Standard Contractual Clauses, supplemented by technical and organizational
          measures where appropriate.
        </p>
      </section>

      <section aria-labelledby="gdpr-retention">
        <h2 id="gdpr-retention">5. Retention</h2>
        <p>
          We retain personal data only as long as necessary for the purposes described in our Privacy
          Policy and this page, including statutory, tax, and dispute-resolution needs.
        </p>
      </section>

      <section aria-labelledby="gdpr-dpa">
        <h2 id="gdpr-dpa">6. Processor engagements</h2>
        <p>
          For client projects where we act as a processor, we implement instructions documented in
          your statement of work or order, assist with security and breach notification where contractually
          agreed, and support your response to data subject requests that relate to our processing on
          your behalf.
        </p>
      </section>

      <section aria-labelledby="gdpr-contact">
        <h2 id="gdpr-contact">7. Contact</h2>
        <p>
          GDPR-related questions:{' '}
          <a href="mailto:contact@aiclawers.com">contact@aiclawers.com</a>
        </p>
        <p>
          For more general information about categories of data and cookies, see our{' '}
          <a href="/privacy">Privacy Policy</a>.
        </p>
      </section>
    </LegalDocumentLayout>
  )
}

export default page
