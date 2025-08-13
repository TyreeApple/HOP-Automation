import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-8">
        <Link to="/" className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">Privacy Policy</h1>
          <div className="prose prose-invert max-w-none">
            <p className="text-lg mb-6">Last updated: January 2025</p>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
              <p className="mb-4">
                HOP Automation ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our Lillie AI service and visit our website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
              
              <h3 className="text-xl font-semibold mb-3">2.1 Personal Information</h3>
              <p className="mb-4">We may collect the following personal information:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Name and contact information (phone number, email address)</li>
                <li>Business information (company name, industry, role)</li>
                <li>Communication preferences</li>
                <li>Appointment and scheduling information</li>
                <li>Voice recordings and transcripts from interactions with Lillie AI</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">2.2 Technical Information</h3>
              <ul className="list-disc pl-6 mb-4">
                <li>IP address and device information</li>
                <li>Browser type and version</li>
                <li>Usage data and analytics</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
              <p className="mb-4">We use your information for the following purposes:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Providing and improving Lillie AI services</li>
                <li>Processing appointments and customer inquiries</li>
                <li>Training and improving our AI models</li>
                <li>Communicating with you about our services</li>
                <li>Analyzing usage patterns to enhance user experience</li>
                <li>Complying with legal obligations</li>
                <li>Preventing fraud and ensuring security</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. Information Sharing and Disclosure</h2>
              <p className="mb-4">We do not sell, trade, or rent your personal information. We may share your information in the following circumstances:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>With your explicit consent</li>
                <li>With service providers who assist in our operations</li>
                <li>To comply with legal requirements or court orders</li>
                <li>To protect our rights, property, or safety</li>
                <li>In connection with a business transfer or merger</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. Data Security</h2>
              <p className="mb-4">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security assessments and updates</li>
                <li>Access controls and authentication measures</li>
                <li>Employee training on data protection</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">6. Data Retention</h2>
              <p className="mb-4">
                We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required by law. Voice recordings and transcripts are typically retained for up to 2 years for quality assurance and AI training purposes.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">7. Your Rights</h2>
              <p className="mb-4">Depending on your location, you may have the following rights:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Access to your personal information</li>
                <li>Correction of inaccurate information</li>
                <li>Deletion of your personal information</li>
                <li>Restriction of processing</li>
                <li>Data portability</li>
                <li>Objection to processing</li>
                <li>Withdrawal of consent</li>
              </ul>
              <p className="mb-4">
                To exercise these rights, please contact us using the information provided below.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">8. Cookies and Tracking Technologies</h2>
              <p className="mb-4">
                We use cookies and similar technologies to enhance your experience on our website. For detailed information about our use of cookies, please refer to our Cookies Policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">9. Third-Party Services</h2>
              <p className="mb-4">
                Our website and services may contain links to third-party websites or integrate with third-party services. We are not responsible for the privacy practices of these third parties. We encourage you to review their privacy policies.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">10. Children's Privacy</h2>
              <p className="mb-4">
                Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If we become aware that we have collected such information, we will take steps to delete it promptly.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">11. International Data Transfers</h2>
              <p className="mb-4">
                Your information may be transferred to and processed in countries other than your own. We ensure that such transfers comply with applicable data protection laws and implement appropriate safeguards.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">12. Changes to This Privacy Policy</h2>
              <p className="mb-4">
                We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on our website and updating the "Last updated" date.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">13. Contact Us</h2>
              <p className="mb-4">
                If you have any questions about this Privacy Policy or our privacy practices, please contact us:
              </p>
              <p className="mb-2">HOP Automation</p>
              <p className="mb-2">Phone: +1 (954) 697-4756</p>
              <p className="mb-2">Email: joseph@hopautomation.com</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;