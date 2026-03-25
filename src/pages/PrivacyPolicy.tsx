/**
 * Product: Fagom Professional Template
 * Author: Fagom
 * License: Single Use License (EULA)
 * Copyright (c) 2026 Fagom. All rights reserved.
 */

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-10">
    <h2 className="font-heading text-xl md:text-2xl text-foreground mb-3">{title}</h2>
    <div className="text-body text-sm text-muted-foreground leading-[1.9] space-y-3">
      {children}
    </div>
  </div>
);

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">

      {/* Header */}
      <div className="bg-secondary/40 border-b border-border py-16 md:py-24 text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="heading-display text-4xl md:text-5xl text-foreground mb-4"
        >
          Privacy Policy
        </motion.h1>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="gold-line"
        />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="text-body text-xs text-muted-foreground mt-6"
        >
          Last updated: March 2026
        </motion.p>
      </div>

      {/* Content */}
      <div className="container max-w-3xl py-16 md:py-24 px-6">

        <Section title="1. Who we are">
          <p>
            <strong className="text-foreground">[Your Business Name]</strong> is responsible for the
            personal data collected through this website. For any privacy-related questions, please
            contact us via the contact form on our site or directly through WhatsApp.
          </p>
        </Section>

        <Section title="2. Data we collect">
          <p>We collect only the data strictly necessary to provide our services:</p>
          <ul className="list-disc list-inside space-y-1 pl-2">
            <li>
              <strong className="text-foreground">Contact form:</strong> full name, email address,
              and the message you voluntarily submit.
            </li>
            <li>
              <strong className="text-foreground">Advertising cookies</strong> (only with your
              explicit consent): anonymous identifiers used by Google Ads to display relevant
              advertisements.
            </li>
          </ul>
          <p>
            We do not collect health data, payment data, data from minors under 18, or any sensitive
            information through this website.
          </p>
        </Section>

        <Section title="3. Purpose and legal basis">
          <p>Your data is used exclusively to:</p>
          <ul className="list-disc list-inside space-y-1 pl-2">
            <li>
              <strong className="text-foreground">Respond to your enquiry</strong> — legal basis:
              pre-contractual steps / legitimate interest (GDPR Art. 6(1)(b)/(f)).
            </li>
            <li>
              <strong className="text-foreground">Personalised advertising via Google Ads</strong> —
              legal basis: explicit consent (GDPR Art. 6(1)(a)). You may withdraw consent at any
              time via the cookie banner.
            </li>
          </ul>
        </Section>

        <Section title="4. Sharing with third parties">
          <p>Your data is never sold. It is shared only with the following service providers:</p>
          <ul className="list-disc list-inside space-y-2 pl-2">
            <li>
              <strong className="text-foreground">EmailJS</strong> (emailjs.com) — email delivery
              service used to forward contact form messages. EmailJS processes data as a
              sub-processor under its{" "}
              <a
                href="https://www.emailjs.com/legal/privacy-policy/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-foreground transition-colors"
              >
                privacy policy
              </a>
              .
            </li>
            <li>
              <strong className="text-foreground">Google Ads / Google LLC</strong> — used to display
              ads only with your consent. Google may use cookies to measure conversions and show
              personalised ads. See{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-foreground transition-colors"
              >
                Google's privacy policy
              </a>
              .
            </li>
          </ul>
        </Section>

        <Section title="5. Cookies">
          <p>
            We use only cookies essential to site functionality and, with your consent, Google Ads
            advertising cookies. We do not use analytics cookies without consent.
          </p>
          <p>
            You can accept or decline cookies via the banner shown on your first visit. Your
            preference is stored in your browser and can be changed at any time by clearing your
            browsing data for this site.
          </p>
        </Section>

        <Section title="6. Data retention">
          <p>
            Data submitted through the contact form is kept only for as long as necessary to respond
            to your message and, if applicable, to establish a service relationship. We do not
            maintain marketing databases or email lists.
          </p>
        </Section>

        <Section title="7. Your rights">
          <p>Under applicable data protection law (including GDPR), you have the right to:</p>
          <ul className="list-disc list-inside space-y-1 pl-2">
            <li><strong className="text-foreground">Access</strong> — know what data we hold about you.</li>
            <li><strong className="text-foreground">Rectification</strong> — correct inaccurate data.</li>
            <li><strong className="text-foreground">Erasure</strong> — request deletion of your data.</li>
            <li><strong className="text-foreground">Portability</strong> — receive your data in a readable format.</li>
            <li><strong className="text-foreground">Objection</strong> — object to processing based on legitimate interest.</li>
            <li><strong className="text-foreground">Withdraw consent</strong> — revoke cookie consent at any time.</li>
          </ul>
          <p>
            To exercise any of these rights, contact us via the site's contact form or through
            WhatsApp.
          </p>
        </Section>

        <Section title="8. Security">
          <p>
            This site uses HTTPS to encrypt all communications. Form data is transmitted securely
            via EmailJS and is not stored on our own servers.
          </p>
        </Section>

        <Section title="9. Changes to this policy">
          <p>
            We may update this policy periodically. For significant changes, we will publish the
            new version on this page with an updated date. We recommend checking this page
            regularly.
          </p>
        </Section>

        {/* Back link */}
        <div className="mt-12 pt-8 border-t border-border text-center">
          <Link
            to="/"
            className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-md text-sm font-body tracking-wider hover:bg-primary/90 transition-colors duration-300"
          >
            Back to home
          </Link>
        </div>

      </div>
    </div>
  );
};

export default PrivacyPolicy;
