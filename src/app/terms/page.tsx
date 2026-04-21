import LegalDocumentLayout from '@/src/components/legal/legal-document-layout'
import { generateMetadata } from '@/src/utils/generateMetaData'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  ...generateMetadata(),
  title: 'Terms & Conditions | AI Clawers',
  description:
    'Terms governing use of the AI Clawers website and general framework for Shopify-related professional services.',
}

const EFFECTIVE_DISPLAY = '2026.01.01'
const EFFECTIVE_ISO = '2026-01-01'

const page = () => {
  return (
    <LegalDocumentLayout
      title="Terms & Conditions"
      effectiveDateDisplay={EFFECTIVE_DISPLAY}
      effectiveDateIso={EFFECTIVE_ISO}
    >
      <p className="text-tagline-3 text-white/50">
        These Terms explain how you may use this website and how we frame professional engagements.
        They are not a substitute for a signed statement of work or master services agreement for a
        specific project.
      </p>

      <section aria-labelledby="terms-accept">
        <h2 id="terms-accept">1. Agreement</h2>
        <p>
          By accessing or using the AI Clawers website (the &quot;Site&quot;), you agree to these
          Terms. If you do not agree, do not use the Site.
        </p>
      </section>

      <section aria-labelledby="terms-services">
        <h2 id="terms-services">2. Shopify professional services</h2>
        <p>
          AI Clawers provides Shopify-related consulting, implementation, theme and app development,
          integrations, and related technical services. Any engagement is subject to a separate written
          agreement (proposal, statement of work, or contract) that prevails over these Terms where
          they conflict.
        </p>
        <ul>
          <li>Deliverables, timelines, fees, and acceptance criteria are defined per engagement.</li>
          <li>Third-party platforms (including Shopify) have their own terms, policies, and acceptable use rules.</li>
          <li>You remain responsible for your store data, catalog accuracy, and compliance with applicable laws.</li>
        </ul>
      </section>

      <section aria-labelledby="terms-site">
        <h2 id="terms-site">3. Acceptable use of the Site</h2>
        <p>You agree not to:</p>
        <ul>
          <li>Attempt to gain unauthorized access to our systems, accounts, or data.</li>
          <li>Use the Site to distribute malware, scrape in a way that impairs availability, or reverse engineer where prohibited by law or contract.</li>
          <li>Misrepresent your identity or affiliation when contacting us.</li>
        </ul>
      </section>

      <section aria-labelledby="terms-ip">
        <h2 id="terms-ip">4. Intellectual property</h2>
        <p>
          The Site, branding, text, graphics, and underlying code are owned by AI Clawers or our
          licensors and are protected by intellectual property laws. Unless we grant a license in
          writing, you may not copy, modify, or redistribute Site materials for commercial purposes.
        </p>
      </section>

      <section aria-labelledby="terms-disclaimer">
        <h2 id="terms-disclaimer">5. Disclaimers</h2>
        <p>
          The Site is provided on an &quot;as is&quot; and &quot;as available&quot; basis. We may
          update content at any time. To the fullest extent permitted by law, we disclaim warranties
          of merchantability, fitness for a particular purpose, and non-infringement arising from use
          of the Site.
        </p>
      </section>

      <section aria-labelledby="terms-liability">
        <h2 id="terms-liability">6. Limitation of liability</h2>
        <p>
          To the fullest extent permitted by law, AI Clawers and its team will not be liable for any
          indirect, incidental, special, consequential, or punitive damages, or for loss of profits,
          revenue, goodwill, or data, arising from your use of the Site or reliance on Site content.
          Our aggregate liability for Site-related claims will not exceed the greater of one hundred
          (100) US dollars or the amount you paid us solely for Site-related services in the three (3)
          months preceding the claim, if any.
        </p>
      </section>

      <section aria-labelledby="terms-law">
        <h2 id="terms-law">7. Governing law</h2>
        <p>
          These Terms are governed by the laws applicable to AI Clawers&apos; operating jurisdiction,
          without regard to conflict-of-law principles, except where mandatory consumer protections
          apply in your country of residence.
        </p>
      </section>

      <section aria-labelledby="terms-changes">
        <h2 id="terms-changes">8. Changes</h2>
        <p>
          We may update these Terms by posting a revised version on the Site and updating the
          effective date. Material changes will be indicated by the new effective date at the top of
          this page.
        </p>
      </section>

      <section aria-labelledby="terms-contact">
        <h2 id="terms-contact">9. Contact</h2>
        <p>
          Questions about these Terms:{' '}
          <a href="mailto:contact@aiclawers.com">contact@aiclawers.com</a>
        </p>
      </section>
    </LegalDocumentLayout>
  )
}

export default page
