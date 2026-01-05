import { useState, useEffect } from 'react';

const CookieConsent = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookieConsent');
        if (!consent) {
            // Show banner after a small delay for better UX
            const timer = setTimeout(() => setIsVisible(true), 1000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookieConsent', 'true');
        setIsVisible(false);
    };

    const handleDecline = () => {
        localStorage.setItem('cookieConsent', 'false');
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 animate-in slide-in-from-bottom duration-500">
            <div className="max-w-7xl mx-auto">
                <div className="bg-white/90 backdrop-blur-md border border-gray-200 shadow-2xl rounded-2xl p-6 md:flex md:items-center md:justify-between gap-6">
                    <div className="mb-4 md:mb-0">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                            We value your privacy
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed max-w-2xl">
                            We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic.
                            By clicking "Accept All", you consent to our use of cookies.
                        </p>
                    </div>
                    <div className="flex items-center gap-3">
                        <button
                            onClick={handleDecline}
                            className="whitespace-nowrap px-6 py-2.5 rounded-xl text-gray-700 hover:bg-gray-100 font-medium text-sm transition-colors duration-200"
                        >
                            Decline
                        </button>
                        <button
                            onClick={handleAccept}
                            className="whitespace-nowrap px-6 py-2.5 rounded-xl bg-purple-700 hover:bg-purple-800 text-white font-medium text-sm shadow-lg shadow-purple-700/20 transition-all duration-200 transform hover:scale-105"
                        >
                            Accept All
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CookieConsent;
