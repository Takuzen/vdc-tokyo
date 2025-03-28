import React from 'react';
import Link from 'next/link';
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const Press = () => {
    return (
        <div className={`${geistSans.variable} ${geistMono.variable} font-[family-name:var(--font-geist-sans)]`}>
            <Header />
            
            <main className="pt-20">
                <section id="press" className="w-full gradient-primary text-white px-8 py-20 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-secondary rounded-full filter blur-3xl opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent rounded-full filter blur-3xl opacity-20 transform -translate-x-1/2 translate-y-1/2"></div>
                    
                    <div className="container relative z-10 max-w-5xl mx-auto">
                        <h1 className="text-3xl md:text-4xl font-bold text-white mb-12 relative inline-block">
                            Press
                            <span className="absolute -bottom-2 left-0 w-full h-1 bg-vibrant"></span>
                        </h1>
                        
                        {/* Press Inquiries Section */}
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 shadow-lg mb-12">
                            <h2 className="text-2xl font-bold mb-6">Press Inquiries</h2>
                            <p className="mb-6">
                                For press inquiries and information about VisionDevCamp Tokyo 2025, please contact us through the form below.
                            </p>
                            <div className="flex justify-center">
                                <a 
                                    href="https://docs.google.com/forms/d/e/1FAIpQLSf3lzhgMm-RZ_YexT_8lEzDx8W8N-B2aeZd_gdadvGdNhaNow/viewform?usp=header" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="bg-accent hover:bg-accent/90 text-white font-bold py-3 px-8 rounded-full transform transition-transform hover:scale-105 shadow-lg"
                                >
                                    Contact Form
                                </a>
                            </div>
                        </div>
                        
                        {/* Press Coverage Section */}
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 shadow-lg mb-12">
                            <h2 className="text-2xl font-bold mb-6">VisionDevCamp Tokyo 2025 Press Coverage</h2>
                            <p className="mb-6">
                                Below is a list of articles about VisionDevCamp Tokyo 2025.
                            </p>
                            <ul className="space-y-4">
                                {tokyoPressLinks.map((item, index) => (
                                    <li key={index} className="border-l-4 border-accent pl-4 py-2 hover:bg-white/5 transition-colors">
                                        <div className="text-sm text-white/70 mb-1">{item.date}</div>
                                        <a
                                            href={item.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-white hover:text-vibrant transition-colors"
                                        >
                                            <span className="font-semibold">{item.source}:</span> {item.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        
                        {/* Original VisionDevCamp Press Coverage */}
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 shadow-lg">
                            <h2 className="text-2xl font-bold mb-6">VisionDevCamp Press Coverage</h2>
                            <p className="mb-6">
                                Below is a list of articles about VisionDevCamp 2024 held in the United States.
                            </p>
                            <ul className="space-y-4">
                                {originalPressLinks.map((item, index) => (
                                    <li key={index} className="border-l-4 border-secondary pl-4 py-2 hover:bg-white/5 transition-colors">
                                        <div className="text-sm text-white/70 mb-1">{item.date}</div>
                                        <a
                                            href={item.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-white hover:text-vibrant transition-colors"
                                        >
                                            <span className="font-semibold">{item.source}:</span> {item.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>
            </main>
            
            <footer className="bg-black text-white py-12 px-8">
                <div className="container mx-auto">
                    <div className="max-w-6xl mx-auto">
                        <div className="flex flex-col md:flex-row items-center justify-between mb-10">
                            <div className="flex items-center mb-6 md:mb-0">
                                <img
                                    src="/visiondevcamp-logo-only.png"
                                    alt="VisionDevCamp Logo"
                                    className="w-10 h-10 mr-3 object-contain"
                                />
                                <div className="text-xl font-bold">
                                    VisionDevCamp <span className="text-red-500">Tokyo</span> 2025
                                </div>
                            </div>
                            
                            <div className="flex flex-wrap justify-center gap-6">
                                <Link href="/en/#top" className="hover:text-red-400 transition-colors">Top</Link>
                                <Link href="/en/#overview" className="hover:text-red-400 transition-colors">Overview</Link>
                                <Link href="/en/#uniqueness" className="hover:text-red-400 transition-colors">Features</Link>
                                <Link href="/en/#venues" className="hover:text-red-400 transition-colors">Venues</Link>
                                <Link href="/en/#schedule" className="hover:text-red-400 transition-colors">Schedule</Link>
                                <Link href="/en/#judges" className="hover:text-red-400 transition-colors">Judges</Link>
                                <Link href="/en/#speakers" className="hover:text-red-400 transition-colors">Speakers</Link>
                                <Link href="/en/#sponsors" className="hover:text-red-400 transition-colors">Sponsors</Link>
                                <Link href="/en/#contact" className="hover:text-red-400 transition-colors">Contact</Link>
                            </div>
                        </div>
                        
                        <div className="border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
                            <p>Copyright ©︎ VisionDevCamp Tokyo 2025 All Rights Reserved.</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

function Header() {
    const [menuOpen, setMenuOpen] = React.useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="fixed top-0 w-full bg-white shadow-md z-50">
            <nav className="flex justify-between items-center px-4 md:px-8 py-3 md:py-4">
                {/* Logo and Title */}
                <Link href="/en" className="flex items-center">
                    <img
                        src="/visiondevcamp-logo-only.png"
                        alt="VisionDevCamp Logo"
                        className="w-8 h-8 md:w-10 md:h-10 mr-2 object-contain"
                    />
                    <div className="text-xl font-bold text-black flex items-center">
                        VisionDevCamp
                        <span className="text-xl font-bold text-red-500 pl-1">Tokyo</span>
                    </div>
                </Link>

                <div className="flex">
                    {/* Hamburger Icon */}
                    <button
                        onClick={toggleMenu}
                        className="block md:hidden text-2xl text-black focus:outline-none mt-[1px]"
                    >
                        {menuOpen ? "✕" : "☰"}
                    </button>
                </div>

                {/* Mobile/Tablet Navigation */}
                {menuOpen && (
                    <ul className="md:hidden bg-white text-black shadow-md p-4 absolute w-full top-full left-0 z-50">
                        <li className="mb-2">
                            <Link href="/en/#top" className="hover:underline font-bold">
                                Top
                            </Link>
                        </li>
                        <li className="mb-2">
                            <Link href="/en/#overview" className="hover:underline font-bold">
                                Overview
                            </Link>
                        </li>
                        <li className="mb-2">
                            <Link href="/en/#uniqueness" className="hover:underline font-bold">
                                Features
                            </Link>
                        </li>
                        <li className="mb-2">
                            <Link href="/en/#venues" className="hover:underline font-bold">
                                Venues
                            </Link>
                        </li>
                        <li className="mb-2">
                            <Link href="/en/#schedule" className="hover:underline font-bold">
                                Schedule
                            </Link>
                        </li>
                        <li className="mb-2">
                            <Link href="/en/#judges" className="hover:underline font-bold">
                                Judges
                            </Link>
                        </li>
                        <li className="mb-2">
                            <Link href="/en/#speakers" className="hover:underline font-bold">
                                Speakers
                            </Link>
                        </li>
                        <li className="mb-2">
                            <Link href="/en/#sponsors" className="hover:underline font-bold">
                                Sponsors
                            </Link>
                        </li>
                        <li className="mb-2">
                            <Link href="/en/press" className="hover:underline font-bold">
                                Press
                            </Link>
                        </li>
                        <li className="mb-2">
                            <Link href="/en/#contact" className="hover:underline font-bold">
                                Contact
                            </Link>
                        </li>
                    </ul>
                )}

                {/* Desktop Navigation */}
                <ul className="hidden md:flex gap-4 text-sm text-black mt-2">
                    <li>
                        <Link href="/en/#top" className="hover:underline font-bold">
                            Top
                        </Link>
                    </li>
                    <li>
                        <Link href="/en/#overview" className="hover:underline font-bold">
                            Overview
                        </Link>
                    </li>
                    <li>
                        <Link href="/en/#uniqueness" className="hover:underline font-bold">
                            Features
                        </Link>
                    </li>
                    <li>
                        <Link href="/en/#venues" className="hover:underline font-bold">
                            Venues
                        </Link>
                    </li>
                    <li>
                        <Link href="/en/#schedule" className="hover:underline font-bold">
                            Schedule
                        </Link>
                    </li>
                    <li>
                        <Link href="/en/#judges" className="hover:underline font-bold">
                            Judges
                        </Link>
                    </li>
                    <li>
                        <Link href="/en/#speakers" className="hover:underline font-bold">
                            Speakers
                        </Link>
                    </li>
                    <li>
                        <Link href="/en/#sponsors" className="hover:underline font-bold">
                            Sponsors
                        </Link>
                    </li>
                    <li>
                        <Link href="/en/press" className="hover:underline font-bold">
                            Press
                        </Link>
                    </li>
                    <li>
                        <Link href="/en/#contact" className="hover:underline font-bold">
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

// Tokyo Press Coverage Links
const tokyoPressLinks = [
    {
        source: "Mogura VR News",
        title: "Major hackathon focused on Apple Vision Pro development to be held in Japan for the first time!",
        url: "https://www.moguravr.com/visiondevcamp-tokyo-2025/",
        date: "2025.03.25",
    },
    {
        source: "PANORA",
        title: "VisionDevCamp Tokyo 2025, an event for Apple Vision Pro and visionOS application developers, to be held",
        url: "https://panora.tokyo/archives/103788",
        date: "2025.03.10",
    },
    {
        source: "Mac OTAKARA",
        title: "Apple Vision Pro app development hackathon 'VisionDevCamp Tokyo 2025' to be held April 11-13, 2025",
        url: "https://www.macotakara.jp/news/entry-48602.html",
        date: "2025.03.22",
    },
    {
        source: "IGDA Japan",
        title: "Apple Vision Pro hackathon 'VisionDevCamp Tokyo 2025' to be held (4/11-13)",
        url: "https://www.igda.jp/2025/03/25/15396/",
        date: "2025.03.25",
    },
    {
        source: "Reinforz Insight",
        title: "Creating the future of Vision Pro – VisionDevCamp, a globally recognized hackathon, makes its Tokyo debut",
        url: "https://reinforz.co.jp/bizmedia/76451/",
        date: "2025.03.26",
    },
];

// Original VisionDevCamp Press Coverage Links
const originalPressLinks = [
    {
        source: "Mixed Reality News",
        title: "Apple Vision Pro: VisionDevCamp connects developers and experts",
        url: "https://mixed-news.com/en/apple-vision-pro-visiondevcamp-connects-developers-and-experts/#google_vignette",
        date: "2024.03.03",
    },
    {
        source: "9to5Mac",
        title: "VisionDevCamp offers $100 Vision Pro hackathon event in Santa Clara",
        url: "https://9to5mac.com/2024/02/28/vision-pro-hackathon/",
        date: "2024.02.28",
    },
    {
        source: "AppleInsider",
        title: "VisionDevCamp is a three-day hackathon for Vision Pro Devs",
        url: "https://appleinsider.com/articles/24/02/28/visiondevcamp-is-a-three-day-hackathon-for-vision-pro-devs",
        date: "2024.02.28",
    },
    {
        source: "MacHash",
        title: "VisionDevCamp is a three-day hackathon for Vision Pro Devs",
        url: "https://machash.com/appleinsider/367644/visiondevcamp-three-day-hackathon-vision-pro-devs/",
        date: "2024.02.28",
    },
    {
        source: "MacTech",
        title: "VisionDevCamp Hackathon-Style Event for visionOS Coming Next Month",
        url: "https://www.mactech.com/2024/02/28/visiondevcamp-hackathon-style-event-for-visionos-coming-next-month/",
        date: "2024.02.28",
    },
    {
        source: "Voices of VR Podcast",
        title: "#1320: Plans for VisionDevCamp, an Apple Vision Pro Hackathon after Q1 2024 Launch",
        url: "https://voicesofvr.com/1320-plans-for-visiondevcamp-an-apple-vision-pro-hackathon-after-q1-2024-launch/",
        date: "2023.12.07",
    },
    {
        source: "UploadVR",
        title: "VisionDevCamp To Jumpstart Apple Vision Pro Developers In Early 2024",
        url: "https://www.uploadvr.com/visiondevcamp-vision-pro-developer-event-2024/",
        date: "2023.11.15",
    },
];

export default Press;

