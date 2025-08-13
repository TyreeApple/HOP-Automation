import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Terms = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-8">
        <Link to="/" className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">Terms of Service</h1>
          <div className="prose prose-invert max-w-none">
            <p className="text-lg mb-6">Last updated: January 2025</p>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
              <p className="mb-4">
                By accessing and using HOP Automation's Lillie AI services ("Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. Description of Service</h2>
              <p className="mb-4">
                Lillie AI is an artificial intelligence-powered virtual assistant designed specifically for medical spas and aesthetic practices. The Service provides automated customer service, appointment scheduling, lead qualification, and customer engagement through voice and text interactions.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. User Responsibilities</h2>
              <ul className="list-disc pl-6 mb-4">
                <li>You must provide accurate and complete information when using our Service</li>
                <li>You are responsible for maintaining the confidentiality of your account credentials</li>
                <li>You agree to use the Service only for lawful purposes and in accordance with these Terms</li>
                <li>You will not attempt to interfere with or disrupt the Service or servers</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. Service Availability</h2>
              <p className="mb-4">
                While we strive to provide continuous service availability, HOP Automation does not guarantee uninterrupted access to Lillie AI. We reserve the right to modify, suspend, or discontinue the Service at any time with or without notice.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. Data and Privacy</h2>
              <p className="mb-4">
                Your privacy is important to us. Our collection and use of personal information is governed by our Privacy Policy, which is incorporated into these Terms by reference. By using our Service, you consent to the collection and use of information as outlined in our Privacy Policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">6. Intellectual Property</h2>
              <p className="mb-4">
                All content, features, and functionality of Lillie AI, including but not limited to text, graphics, logos, software, and AI models, are owned by HOP Automation and are protected by copyright, trademark, and other intellectual property laws.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">7. Limitation of Liability</h2>
              <p className="mb-4">
                HOP Automation shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the Service. Our total liability shall not exceed the amount paid by you for the Service in the twelve months preceding the claim.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">8. Termination</h2>
              <p className="mb-4">
                Either party may terminate this agreement at any time. Upon termination, your right to use the Service will cease immediately. Provisions that by their nature should survive termination shall survive, including ownership provisions, warranty disclaimers, and limitations of liability.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">9. Governing Law</h2>
              <p className="mb-4">
                These Terms shall be governed by and construed in accordance with the laws of the State of Florida, without regard to its conflict of law provisions. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts of Florida.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">10. Changes to Terms</h2>
              <p className="mb-4">
                HOP Automation reserves the right to modify these Terms at any time. We will notify users of any material changes by posting the new Terms on our website. Your continued use of the Service after such modifications constitutes acceptance of the updated Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">11. Contact Information</h2>
              <p className="mb-4">
                If you have any questions about these Terms of Service, please contact us at:
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

export default Terms;