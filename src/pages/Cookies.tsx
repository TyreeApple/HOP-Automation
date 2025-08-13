import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Cookies = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-8">
        <Link to="/" className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">Cookies Policy</h1>
          <div className="prose prose-invert max-w-none">
            <p className="text-lg mb-6">Last updated: January 2025</p>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. What Are Cookies</h2>
              <p className="mb-4">
                Cookies are small text files that are placed on your computer or mobile device when you visit our website. They are widely used to make websites work more efficiently and to provide information to website owners.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. How We Use Cookies</h2>
              <p className="mb-4">
                HOP Automation uses cookies to enhance your experience on our website and to improve our Lillie AI services. We use cookies for the following purposes:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Essential website functionality</li>
                <li>Remembering your preferences and settings</li>
                <li>Analyzing website traffic and usage patterns</li>
                <li>Improving user experience and website performance</li>
                <li>Providing personalized content and recommendations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. Types of Cookies We Use</h2>
              
              <h3 className="text-xl font-semibold mb-3">3.1 Essential Cookies</h3>
              <p className="mb-4">
                These cookies are necessary for the website to function properly. They enable basic functions like page navigation, access to secure areas, and form submissions. The website cannot function properly without these cookies.
              </p>

              <h3 className="text-xl font-semibold mb-3">3.2 Performance Cookies</h3>
              <p className="mb-4">
                These cookies collect information about how visitors use our website, such as which pages are visited most often and if users get error messages. This information helps us improve how our website works.
              </p>

              <h3 className="text-xl font-semibold mb-3">3.3 Functionality Cookies</h3>
              <p className="mb-4">
                These cookies allow the website to remember choices you make (such as your user name, language, or region) and provide enhanced, more personal features.
              </p>

              <h3 className="text-xl font-semibold mb-3">3.4 Analytics Cookies</h3>
              <p className="mb-4">
                We use analytics cookies to understand how visitors interact with our website. This helps us analyze data about web page traffic and improve our website to tailor it to customer needs.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. Third-Party Cookies</h2>
              <p className="mb-4">
                We may use third-party services that place cookies on your device. These include:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>Google Analytics:</strong> For website analytics and performance monitoring</li>
                <li><strong>Calendly:</strong> For appointment scheduling functionality</li>
                <li><strong>Social Media Platforms:</strong> For social sharing features</li>
              </ul>
              <p className="mb-4">
                These third parties have their own privacy policies and cookie policies, which we encourage you to review.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. Cookie Duration</h2>
              <p className="mb-4">We use both session and persistent cookies:</p>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>Session Cookies:</strong> These are temporary cookies that expire when you close your browser</li>
                <li><strong>Persistent Cookies:</strong> These remain on your device for a set period or until you delete them</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">6. Managing Your Cookie Preferences</h2>
              <p className="mb-4">
                You have several options for managing cookies:
              </p>
              
              <h3 className="text-xl font-semibold mb-3">6.1 Browser Settings</h3>
              <p className="mb-4">
                Most web browsers allow you to control cookies through their settings. You can:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>View what cookies are stored on your device</li>
                <li>Delete existing cookies</li>
                <li>Block cookies from being set</li>
                <li>Set preferences for specific websites</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">6.2 Opt-Out Links</h3>
              <p className="mb-4">
                For analytics cookies, you can opt out using these links:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Google Analytics: <a href="https://tools.google.com/dlpage/gaoptout" className="text-blue-400 hover:underline">Google Analytics Opt-out</a></li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">7. Impact of Disabling Cookies</h2>
              <p className="mb-4">
                Please note that disabling cookies may affect the functionality of our website. Some features may not work properly or may not be available if you choose to disable cookies.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">8. Local Storage and Similar Technologies</h2>
              <p className="mb-4">
                In addition to cookies, we may use other similar technologies such as:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Local Storage (HTML5)</li>
                <li>Session Storage</li>
                <li>Web Beacons</li>
                <li>Pixel Tags</li>
              </ul>
              <p className="mb-4">
                These technologies serve similar purposes to cookies and are subject to the same principles outlined in this policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">9. Updates to This Policy</h2>
              <p className="mb-4">
                We may update this Cookies Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the updated policy on our website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">10. Contact Us</h2>
              <p className="mb-4">
                If you have any questions about our use of cookies or this Cookies Policy, please contact us:
              </p>
              <p className="mb-2">HOP Automation</p>
              <p className="mb-2">Phone: +1 (954) 697-4756</p>
              <p className="mb-2">Email: joseph@hopautomation.com</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">11. Consent</h2>
              <p className="mb-4">
                By continuing to use our website, you consent to our use of cookies as described in this policy. If you do not agree to our use of cookies, please adjust your browser settings or discontinue use of our website.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cookies;