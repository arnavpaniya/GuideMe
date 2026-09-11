import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  CheckCircle2,
  ChevronRight,
  Lock,
  Mail,
  Shield,
  Sparkles,
} from "lucide-react";

import { HomepageHeader } from "@/components/brand/HomepageHeader";
import { HomepageFooter } from "@/components/brand/HomepageFooter";

export const metadata: Metadata = {
  title: "Privacy Policy | Mentra",
  description:
    "Learn how Mentra protects student and mentor privacy, secures personal data, and complies with data protection regulations.",
};

export default function PrivacyPolicyPage() {
  const lastUpdated = "September 11, 2026";

  const sections = [
    { id: "information-we-collect", title: "1. Information We Collect" },
    { id: "how-we-use-information", title: "2. How We Use Information" },
    { id: "student-safety", title: "3. Student Privacy & Safety" },
    { id: "data-security", title: "4. Data Security & DPDP Compliance" },
    { id: "third-parties", title: "5. Payments & Third-Party Processors" },
    { id: "user-rights", title: "6. Your Rights & Data Erasure" },
    { id: "grievance-contact", title: "7. Grievance Redressal & Contact" },
  ];

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <HomepageHeader />

      {/* Hero Header Section */}
      <section
        className="relative overflow-hidden border-b border-violet-100/80 px-4 py-12 sm:px-6 sm:py-16 lg:px-8"
      >
        <div
          className="pointer-events-none absolute -left-20 top-0 h-72 w-72 rounded-full bg-[#7C3AED]/[0.08] blur-[90px]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -right-20 top-10 h-72 w-72 rounded-full bg-[#EC4899]/[0.06] blur-[90px]"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-4xl">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="mb-6 flex items-center gap-2 text-xs font-medium text-slate-500"
          >
            <Link href="/" className="transition hover:text-[#7C3AED]">
              Home
            </Link>
            <ChevronRight className="size-3 text-slate-400" />
            <span className="text-slate-400">Legal</span>
            <ChevronRight className="size-3 text-slate-400" />
            <span className="font-semibold text-[#7C3AED]">Privacy Policy</span>
          </nav>

          <div
            className="inline-flex items-center gap-2 rounded-full border border-violet-200/80 bg-white/90 px-3.5 py-1.5 text-xs font-semibold text-[#6D28D9] shadow-xs backdrop-blur-sm"
          >
            <Shield className="size-3.5 text-[#7C3AED]" />
            <span>Privacy & Data Protection</span>
          </div>

          <h1
            className="mt-4 text-balance text-3xl font-extrabold tracking-tight text-[var(--foreground)] sm:text-4xl lg:text-5xl"
          >
            Privacy Policy
          </h1>

          <p
            className="mt-4 text-base leading-7 text-[color:rgb(75,88,117)] sm:text-lg"
          >
            At Mentra, we believe college guidance should be honest, personal, and strictly confidential. This Privacy Policy details how we protect your personal information, respect your academic confidentiality, and honor data protection rights under the Digital Personal Data Protection (DPDP) Act, 2023.
          </p>

          <div
            className="mt-6 flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-500"
          >
            <span
              className="rounded-md bg-violet-100/70 px-2.5 py-1 text-[#6D28D9]"
            >
              Effective Date: {lastUpdated}
            </span>
            <span>Version 2.4</span>
            <span>·</span>
            <span>Applicable to all Mentra platforms & apps</span>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section
        className="relative px-4 py-12 sm:px-6 sm:py-16 lg:px-8"
      >
        <div className="mx-auto grid max-w-4xl gap-10 lg:grid-cols-[240px_1fr] lg:gap-14">
          {/* Sticky Table of Contents Sidebar for Desktop */}
          <aside className="hidden lg:block">
            <div
              className="sticky top-28 rounded-2xl border border-violet-100/80 bg-white/80 p-4 shadow-xs backdrop-blur-md"
            >
              <p
                className="mb-3 text-xs font-bold uppercase tracking-wider text-[#7C3AED]"
              >
                On This Page
              </p>
              <nav
                className="flex flex-col space-y-2 text-xs font-medium text-slate-600"
              >
                {sections.map((sec) => (
                  <a
                    key={sec.id}
                    href={`#${sec.id}`}
                    className="rounded-lg px-2.5 py-1.5 transition hover:bg-violet-50 hover:text-[#7C3AED]"
                  >
                    {sec.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Legal Body Articles */}
          <div className="space-y-10 text-slate-700 leading-relaxed">
            {/* Quick Summary Box */}
            <div
              className="rounded-2xl border border-violet-200/80 bg-white p-6 shadow-xs sm:p-7"
            >
              <div
                className="flex items-center gap-2.5 font-bold text-[var(--foreground)]"
              >
                <Sparkles className="size-5 text-[#7C3AED]" />
                <h2 className="text-lg">Key Commitments at a Glance</h2>
              </div>
              <ul className="mt-4 space-y-2.5 text-sm text-slate-600">
                <li
                  className="flex items-start gap-2"
                >
                  <CheckCircle2
                    className="mt-0.5 size-4 shrink-0 text-emerald-600"
                  />
                  <span>
                    <strong>Zero-Spam Guarantee:</strong> We never sell or rent
                    your mobile number, email, or test scores to coaching institutes,
                    banks, or telemarketers.
                  </span>
                </li>
                <li
                  className="flex items-start gap-2"
                >
                  <CheckCircle2
                    className="mt-0.5 size-4 shrink-0 text-emerald-600"
                  />
                  <span>
                    <strong>Controlled Contact:</strong> Mentors and students
                    connect only through verified session links; personal contact
                    details are never exposed without consent.
                  </span>
                </li>
                <li
                  className="flex items-start gap-2"
                >
                  <CheckCircle2
                    className="mt-0.5 size-4 shrink-0 text-emerald-600"
                  />
                  <span>
                    <strong>RBI-Compliant Payments:</strong> All payment
                    transactions are encrypted via certified gateway partners
                    (Razorpay / Stripe) without storing raw card or UPI PIN data.
                  </span>
                </li>
              </ul>
            </div>

            {/* Section 1 */}
            <article
              id="information-we-collect"
              className="scroll-mt-28 space-y-4"
            >
              <h2
                className="text-xl font-bold text-[var(--foreground)] sm:text-2xl"
              >
                1. Information We Collect
              </h2>
              <p
                className="text-sm sm:text-base"
              >
                To provide authentic college mentorship matching and verify
                institutional affiliations, we collect the following categories of
                information:
              </p>
              <div
                className="space-y-3 pl-2 text-sm sm:text-base"
              >
                <div>
                  <h3
                    className="font-semibold text-[var(--foreground)]"
                  >
                    A. Information You Provide directly:
                  </h3>
                  <ul
                    className="mt-1.5 list-disc space-y-1 pl-5 text-slate-600"
                  >
                    <li>
                      Basic identifiers such as your full name, email address,
                      and phone number for OTP authentication.
                    </li>
                    <li>
                      Academic details (current class, stream, targeted
                      competitive exams like JEE, NEET, CLAT, CUET, CA, or
                      target universities).
                    </li>
                    <li>
                      For Mentors: Institutional proof (college student ID,
                      alumni email verification, entrance exam rank cards, or
                      degree certificates).
                    </li>
                    <li>
                      Session notes, questions submitted during booking, and
                      mutual ratings/reviews.
                    </li>
                  </ul>
                </div>
                <div>
                  <h3
                    className="font-semibold text-[var(--foreground)]"
                  >
                    B. Automatically Collected Data:
                  </h3>
                  <p
                    className="mt-1 text-slate-600"
                  >
                    Device identifiers, browser user agent, IP address for
                    fraud detection, and session performance diagnostics.
                  </p>
                </div>
              </div>
            </article>

            {/* Section 2 */}
            <article
              id="how-we-use-information"
              className="scroll-mt-28 space-y-4"
            >
              <h2
                className="text-xl font-bold text-[var(--foreground)] sm:text-2xl"
              >
                2. How We Use Information
              </h2>
              <p
                className="text-sm sm:text-base"
              >
                We use the collected information solely to power the Mentra
                ecosystem and deliver senior-to-junior guidance:
              </p>
              <ul
                className="list-disc space-y-2 pl-5 text-sm text-slate-600 sm:text-base"
              >
                <li>
                  Matching students with relevant college seniors based on
                  target colleges, streams, and prep hurdles.
                </li>
                <li>
                  Facilitating seamless booking calendar invites and instant
                  WhatsApp/SMS session reminders.
                </li>
                <li>
                  Verifying and accrediting mentor profiles to maintain
                  platform trust.
                </li>
                <li>
                  Processing mentor payouts and student session fees securely.
                </li>
                <li>
                  Detecting and mitigating abusive behavior, harassment, or
                  unauthorized commercial solicitation.
                </li>
              </ul>
            </article>

            {/* Section 3 */}
            <article
              id="student-safety"
              className="scroll-mt-28 space-y-4"
            >
              <h2
                className="text-xl font-bold text-[var(--foreground)] sm:text-2xl"
              >
                3. Student Privacy & Safety
              </h2>
              <p
                className="text-sm sm:text-base"
              >
                Many of our mentees are high school students (Class 9-12) or
                young undergraduates navigating high-pressure decisions. We
                enforce strict safety standards:
              </p>
              <div
                className="rounded-xl border border-emerald-100 bg-emerald-50/60
                          p-4 text-sm text-emerald-950"
              >
                <p
                  className="font-semibold text-emerald-900"
                >
                  Guardian Access for Minors
                </p>
                <p
                  className="mt-1 text-emerald-800"
                >
                  Parents and guardians of students under 18 may request session
                  attendance or review booking transcripts upon written request
                  to safety@mentra.in.
                </p>
              </div>
              <p
                className="text-sm sm:text-base"
              >
                Mentors are prohibited from soliciting off-platform private
                tuition, requesting personal contact numbers without student
                initiation, or providing fraudulent exam score representations.
              </p>
            </article>

            {/* Section 4 */}
            <article
              id="data-security"
              className="scroll-mt-28 space-y-4"
            >
              <h2
                className="text-xl font-bold text-[var(--foreground)] sm:text-2xl"
              >
                4. Data Security & DPDP Act, 2023 Compliance
              </h2>
              <p
                className="text-sm sm:text-base"
              >
                We implement industry-grade technical and organizational measures
                to safeguard your personal data:
              </p>
              <ul
                className="list-disc space-y-2 pl-5 text-sm text-slate-600 sm:text-base"
              >
                <li>
                  All data in transit is encrypted using Transport Layer
                  Security (TLS 1.3).
                </li>
                <li>
                  Database records and backups are encrypted at rest using
                  AES-256 standards.
                </li>
                <li>
                  Access to user data is strictly limited to authorized engineers
                  on a principle of least privilege.
                </li>
                <li>
                  We comply with all notification requirements and consent
                  protocols stipulated under the Digital Personal Data
                  Protection Act, 2023 (India).
                </li>
              </ul>
            </article>

            {/* Section 5 */}
            <article
              id="third-parties"
              className="scroll-mt-28 space-y-4"
            >
              <h2
                className="text-xl font-bold text-[var(--foreground)] sm:text-2xl"
              >
                5. Payments & Third-Party Processors
              </h2>
              <p
                className="text-sm sm:text-base"
              >
                Mentra does not store sensitive banking data, debit/credit card
                CVVs, or UPI credentials. Payments are processed through
                PCI-DSS Level 1 compliant gateway partners (Razorpay / Stripe)
                licensed by the Reserve Bank of India (RBI).
              </p>
            </article>

            {/* Section 6 */}
            <article
              id="user-rights"
              className="scroll-mt-28 space-y-4"
            >
              <h2
                className="text-xl font-bold text-[var(--foreground)] sm:text-2xl"
              >
                6. Your Rights & Data Erasure
              </h2>
              <p
                className="text-sm sm:text-base"
              >
                Under applicable Indian privacy legislation, you have the right
                to:
              </p>
              <ul
                className="list-disc space-y-2 pl-5 text-sm text-slate-600 sm:text-base"
              >
                <li>
                  Access and obtain a summary of personal data held about you.
                </li>
                <li>
                  Request rectification of inaccurate or outdated
                  academic/profile records.
                </li>
                <li>
                  Request erasure of your account and related data ("Right
                  to be Forgotten"), subject to statutory audit
                  retention obligations.
                </li>
                <li>
                  Withdraw consent for optional communications and promotional
                  updates at any time.
                </li>
              </ul>
            </article>

            {/* Section 7 */}
            <article
              id="grievance-contact"
              className="scroll-mt-28 space-y-4"
            >
              <h2
                className="text-xl font-bold text-[var(--foreground)] sm:text-2xl"
              >
                7. Grievance Redressal & Contact
              </h2>
              <p
                className="text-sm sm:text-base"
              >
                In accordance with the Information Technology Act, 2000 and
                DPDP Act, 2023, the details of the Grievance Redressal Officer
                are provided below:
              </p>
              <div
                className="rounded-2xl border border-violet-200 bg-white/90
                          p-5 shadow-xs sm:p-6"
              >
                <div
                  className="flex items-center gap-3"
                >
                  <div
                    className="flex size-10 items-center justify-center
                             rounded-full bg-violet-100 text-[#7C3AED]"
                  >
                    <Mail className="size-5" />
                  </div>
                  <div>
                    <h3
                      className="font-bold text-[var(--foreground)]"
                    >
                      Grievance & Privacy Officer
                    </h3>
                    <p
                      className="text-xs text-slate-500"
                    >
                      Mentra EdTech Private Limited
                    </p>
                  </div>
                </div>
                <div
                  className="mt-4 space-y-1 text-sm text-slate-600"
                >
                  <p>
                    <strong>Email:</strong> privacy@mentra.in / grievance@mentra.in
                  </p>
                  <p>
                    <strong>Support Window:</strong> Mon - Sat, 10:00 AM - 6:00 PM
                    IST
                  </p>
                  <p>
                    <strong>Resolution SLA:</strong> Acknowledged within 24
                    hours, resolved within 15 working days.
                  </p>
                </div>
              </div>
            </article>

            {/* Bottom Navigation Link */}
            <div
              className="border-t border-violet-100 pt-8"
            >
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-sm font-semibold
                         text-[#7C3AED] transition hover:text-[#6D28D9]"
              >
                <ArrowLeft className="size-4" />
                Back to Mentra Home
              </Link>
            </div>
          </div>
        </div>
      </section>

      <HomepageFooter />
    </main>
  );
}