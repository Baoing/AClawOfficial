import LegalDocumentLayout from '@/src/components/legal/legal-document-layout'
import { generateMetadata } from '@/src/utils/generateMetaData'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  ...generateMetadata(),
  title: 'Privacy Policy | AI Clawers',
  description:
    'How AI Clawers collects, uses, and protects personal data when you use our website or contact us about Shopify services.',
}

const EFFECTIVE_DISPLAY = '2026.01.01'
const EFFECTIVE_ISO = '2026-01-01'

const page = () => {
  return (
    <LegalDocumentLayout
      title="Privacy Policy"
      effectiveDateDisplay={EFFECTIVE_DISPLAY}
      effectiveDateIso={EFFECTIVE_ISO}
    >
      <p className="text-tagline-3 text-white/50">
        This Policy describes how AI Clawers (&quot;we&quot;, &quot;us&quot;) handles personal data
        in connection with this website and routine business contact. It is provided for transparency
        and does not replace legal advice for your own compliance program.
      </p>

      <section aria-labelledby="privacy-controller">
        <h2 id="privacy-controller">1. Who we are</h2>
        <p>
          AI Clawers provides Shopify-related professional services. For privacy inquiries, contact{' '}
          <a href="mailto:contact@aiclawers.com">contact@aiclawers.com</a>.
        </p>
      </section>

      <section aria-labelledby="privacy-data">
        <h2 id="privacy-data">2. Data we collect</h2>
        <p>Depending on how you interact with us, we may process:</p>
        <ul>
          <li>
            <strong>Contact and account data:</strong> name, email address, company name, phone
            number, and message content you submit via forms or email.
          </li>
          <li>
            <strong>Technical data:</strong> IP address, device and browser type, general location
            derived from IP, and timestamps—typically through logs or analytics tools.
          </li>
          <li>
            <strong>Engagement data:</strong> pages viewed and referral URLs, to understand Site
            performance and demand for our services.
          </li>
        </ul>
      </section>

      <section aria-labelledby="privacy-use">
        <h2 id="privacy-use">3. How we use data</h2>
        <p>We use personal data to:</p>
        <ul>
          <li>Respond to inquiries and operate sales and delivery conversations.</li>
          <li>Provide, secure, and improve the Site.</li>
          <li>Comply with law, enforce our terms, and protect rights and safety.</li>
          <li>Analyze aggregated or de-identified usage trends.</li>
        </ul>
      </section>

      <section id="cookies" aria-labelledby="privacy-cookies">
        <h2 id="privacy-cookies">4. Cookies and similar technologies</h2>
        <p>
          We may use cookies or similar technologies for essential Site operation, preferences,
          analytics, or marketing, depending on your choices and applicable law. You can control many
          cookies through your browser settings. Where required, we will seek consent before
          non-essential cookies are set.
        </p>
      </section>

      <section aria-labelledby="privacy-sharing">
        <h2 id="privacy-sharing">5. Sharing</h2>
        <p>We may share data with:</p>
        <ul>
          <li>Service providers who host the Site, deliver email, or provide analytics—under contracts that require appropriate safeguards.</li>
          <li>Professional advisers (lawyers, accountants) when necessary.</li>
          <li>Authorities when required by law or to protect legitimate interests.</li>
        </ul>
        <p>We do not sell personal data in the conventional sense of selling lists to data brokers.</p>
      </section>

      <section aria-labelledby="privacy-transfers">
        <h2 id="privacy-transfers">6. International transfers</h2>
        <p>
          We may process data in countries other than your own. Where GDPR or UK GDPR applies, we
          rely on appropriate safeguards such as Standard Contractual Clauses or other mechanisms
          recognized by regulators, in addition to technical and organizational measures.
        </p>
      </section>

      <section aria-labelledby="privacy-retention">
        <h2 id="privacy-retention">7. Retention</h2>
        <p>
          We retain personal data only as long as needed for the purposes above, including resolving
          disputes and maintaining legitimate business records, unless a longer period is required by
          law.
        </p>
      </section>

      <section aria-labelledby="privacy-rights">
        <h2 id="privacy-rights">8. Your rights</h2>
        <p>
          Depending on your location, you may have rights to access, correct, delete, restrict, or
          object to certain processing, and to lodge a complaint with a supervisory authority. To
          exercise rights, contact us at the email above. We may need to verify your request.
        </p>
      </section>

      <section aria-labelledby="privacy-children">
        <h2 id="privacy-children">9. Children</h2>
        <p>
          The Site is not directed to children under 16, and we do not knowingly collect their
          personal data.
        </p>
      </section>

      <section aria-labelledby="privacy-changes">
        <h2 id="privacy-changes">10. Changes</h2>
        <p>
          We may update this Policy by posting a new version and updating the effective date shown at
          the top of this page.
        </p>
      </section>
    </LegalDocumentLayout>
  )
}

export default page
