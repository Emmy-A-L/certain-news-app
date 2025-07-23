import { Link } from "react-router-dom";

const PrivacyPage = () => (
  <div className="privacy-page min-h-screen bg-gradient-to-br from-gray-50 to-white py-10 px-4 md:px-0 flex flex-col items-center">
    <section className="max-w-3xl w-full bg-white/90 rounded-xl shadow-lg p-8 mb-10 flex flex-col items-center text-center">
      <h1 className="text-4xl md:text-5xl font-extrabold text-blue-700 mb-4 drop-shadow-lg">
        Privacy Policy
      </h1>
      <p className="text-lg md:text-xl text-gray-700 font-medium mb-6">
        At <span className="font-bold text-blue-600">Certain News</span>, your
        privacy is important to us. This Privacy Policy outlines the types of
        information we collect, how we use it, and the choices you have
        regarding your data.
      </p>
      <img
        src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80"
        alt="Privacy"
        className="w-full h-56 object-cover rounded-lg mb-6 shadow-md"
      />
    </section>

    <section className="max-w-2xl w-full bg-blue-50 rounded-lg shadow p-6 mb-8">
      <h2 className="text-2xl font-bold text-blue-800 mb-2">
        Information We Collect
      </h2>
      <ul className="list-disc list-inside text-gray-800 text-lg space-y-2">
        <li>
          Personal information you provide (such as name, email, etc.) when
          contacting us or subscribing to updates.
        </li>
        <li>
          Non-personal information such as browser type, device, and usage data
          collected automatically for analytics and site improvement.
        </li>
        <li>
          Ad-related data collected through Google AdSense, including cookies and web beacons to serve relevant ads.
        </li>
      </ul>
    </section>

    <section className="max-w-2xl w-full bg-white/80 rounded-lg shadow p-6 mb-8">
      <h2 className="text-2xl font-bold text-blue-800 mb-2">
        How We Use Your Information
      </h2>
      <ul className="list-disc list-inside text-gray-800 text-lg space-y-2">
        <li>To provide, maintain, and improve our services.</li>
        <li>
          To communicate with you about updates, news, or responses to your
          inquiries.
        </li>
        <li>To analyze site usage and enhance user experience.</li>
        <li>
          To serve personalized ads via Google AdSense, as per Google's advertising policies.
        </li>
        <li>
          We do not sell or share your personal information with third parties
          except as required by law.
        </li>
      </ul>
    </section>

    <section className="max-w-2xl w-full bg-blue-100/60 rounded-lg shadow p-6 mb-8">
      <h2 className="text-2xl font-bold text-blue-800 mb-2">Cookies</h2>
      <p className="text-gray-800 text-lg">
        We use cookies and similar technologies, including those provided by Google AdSense,
        to enhance your browsing experience and deliver personalized ads.
        You can disable cookies via your browser settings, but some features
        of the site may not function properly.
      </p>
    </section>

    <section className="max-w-2xl w-full bg-white/80 rounded-lg shadow p-6 mb-8">
      <h2 className="text-2xl font-bold text-blue-800 mb-2">
        Third-Party Links
      </h2>
      <p className="text-gray-800 text-lg">
        Our website may contain links to third-party sites. We are not
        responsible for the privacy practices or content of those sites. Please
        review their privacy policies before providing any personal information.
      </p>
    </section>

    <section className="max-w-2xl w-full bg-blue-50 rounded-lg shadow p-6 mb-8">
      <h2 className="text-2xl font-bold text-blue-800 mb-2">
        Children's Privacy
      </h2>
      <p className="text-gray-800 text-lg">
        Certain News does not knowingly collect personal information from
        children under 13. If you believe a child has provided us with personal
        information, please contact us and we will promptly remove it.
      </p>
    </section>

    <section className="max-w-2xl w-full bg-white/80 rounded-lg shadow p-6 mb-8">
      <h2 className="text-2xl font-bold text-blue-800 mb-2">Disclaimer</h2>
      <p className="text-gray-800 text-lg">
        This site is not intended to infringe on any rights. All
        content is for informational purposes only. If you believe any
        content violates your rights, please contact us for prompt resolution.
      </p>
    </section>

    <footer className="max-w-2xl w-full text-center mt-8">
      <p className="text-gray-600 text-lg font-medium">
        For questions or concerns about this Privacy Policy, please contact us
        via our{' '}
        <Link to={"/contact"} className="text-blue-800">
          contact page
        </Link>
        .
      </p>
      
    </footer>
  </div>
);

export default PrivacyPage;
