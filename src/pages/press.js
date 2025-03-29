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
                            プレス
                            <span className="absolute -bottom-2 left-0 w-full h-1 bg-vibrant"></span>
                        </h1>
                        
                        {/* Press Inquiries Section */}
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 shadow-lg mb-12">
                            <h2 className="text-2xl font-bold mb-6">プレス関係者の方へ</h2>
                            <p className="mb-6">
                                VisionDevCamp Tokyo 2025に関する取材や情報提供については、以下のお問い合わせフォームよりご連絡ください。
                            </p>
                            <div className="flex justify-center">
                                <a 
                                    href="https://docs.google.com/forms/d/e/1FAIpQLSf3lzhgMm-RZ_YexT_8lEzDx8W8N-B2aeZd_gdadvGdNhaNow/viewform?usp=header" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="bg-vibrant hover:bg-white text-primary-dark font-bold py-3 px-8 rounded-full transform transition-transform hover:scale-105 shadow-lg"
                                >
                                    お問い合わせフォーム
                                </a>
                            </div>
                        </div>
                        
                        {/* Press Coverage Section */}
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 shadow-lg mb-12">
                            <h2 className="text-2xl font-bold mb-6">VisionDevCamp Tokyo 2025 プレス掲載情報</h2>
                            <p className="mb-6">
                                以下はVisionDevCamp Tokyo 2025についての記事の一覧です。
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
                            <h2 className="text-2xl font-bold mb-6">VisionDevCamp プレス掲載情報</h2>
                            <p className="mb-6">
                                以下は米国で開催されたVisionDevCamp 2024に関する記事の一覧です。
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
                                    className="w-10 h-10 mr-3 object-fit rounded-full"
                                />
                                <div className="text-xl font-bold">
                                    VisionDevCamp <span className="text-red-500">Tokyo</span> 2025
                                </div>
                            </div>
                            
                            <div className="flex flex-wrap justify-center gap-6">
                                <Link href="/#top" className="hover:text-red-400 transition-colors">トップ</Link>
                                <Link href="/#overview" className="hover:text-red-400 transition-colors">概要</Link>
                                <Link href="/#uniqueness" className="hover:text-red-400 transition-colors">特徴</Link>
                                <Link href="/#venues" className="hover:text-red-400 transition-colors">会場</Link>
                                <Link href="/#schedule" className="hover:text-red-400 transition-colors">スケジュール</Link>
                                <Link href="/#judges" className="hover:text-red-400 transition-colors">審査員</Link>
                                <Link href="/#speakers" className="hover:text-red-400 transition-colors">スピーカー</Link>
                                <Link href="/#sponsors" className="hover:text-red-400 transition-colors">スポンサー</Link>
                                <Link href="/#contact" className="hover:text-red-400 transition-colors">お問い合わせ</Link>
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
                <Link href="/" className="flex items-center">
                    <img
                        src="/visiondevcamp-logo-only.png"
                        alt="VisionDevCamp Logo"
                        className="w-8 h-8 md:w-10 md:h-10 mr-2 object-fit rounded-full"
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
                            <Link href="/#top" className="hover:underline font-bold">
                                トップ
                            </Link>
                        </li>
                        <li className="mb-2">
                            <Link href="/#overview" className="hover:underline font-bold">
                                概要
                            </Link>
                        </li>
                        <li className="mb-2">
                            <Link href="/#uniqueness" className="hover:underline font-bold">
                                特徴
                            </Link>
                        </li>
                        <li className="mb-2">
                            <Link href="/#venues" className="hover:underline font-bold">
                                開催会場
                            </Link>
                        </li>
                        <li className="mb-2">
                            <Link href="/#schedule" className="hover:underline font-bold">
                                スケジュール
                            </Link>
                        </li>
                        <li className="mb-2">
                            <Link href="/#judges" className="hover:underline font-bold">
                                審査員
                            </Link>
                        </li>
                        <li className="mb-2">
                            <Link href="/#speakers" className="hover:underline font-bold">
                                スピーカー
                            </Link>
                        </li>
                        <li className="mb-2">
                            <Link href="/#sponsors" className="hover:underline font-bold">
                                スポンサー
                            </Link>
                        </li>
                        <li className="mb-2">
                            <Link href="/press" className="hover:underline font-bold">
                                プレス
                            </Link>
                        </li>
                        <li className="mb-2">
                            <Link href="/#contact" className="hover:underline font-bold">
                                お問い合わせ
                            </Link>
                        </li>
                    </ul>
                )}

                {/* Desktop Navigation */}
                <ul className="hidden md:flex gap-4 text-sm text-black mt-2">
                    <li>
                        <Link href="/#top" className="hover:underline font-bold">
                            トップ
                        </Link>
                    </li>
                    <li>
                        <Link href="/#overview" className="hover:underline font-bold">
                            概要
                        </Link>
                    </li>
                    <li>
                        <Link href="/#uniqueness" className="hover:underline font-bold">
                            特徴
                        </Link>
                    </li>
                    <li>
                        <Link href="/#venues" className="hover:underline font-bold">
                            会場
                        </Link>
                    </li>
                    <li>
                        <Link href="/#schedule" className="hover:underline font-bold">
                            スケジュール
                        </Link>
                    </li>
                    <li>
                        <Link href="/#judges" className="hover:underline font-bold">
                            審査員
                        </Link>
                    </li>
                    <li>
                        <Link href="/#speakers" className="hover:underline font-bold">
                            スピーカー
                        </Link>
                    </li>
                    <li>
                        <Link href="/#sponsors" className="hover:underline font-bold">
                            スポンサー
                        </Link>
                    </li>
                    <li>
                        <Link href="/press" className="hover:underline font-bold">
                            プレス
                        </Link>
                    </li>
                    <li>
                        <Link href="/#contact" className="hover:underline font-bold">
                            お問い合わせ
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
        title: "「Apple Vision Pro」の開発をテーマにした大規模ハッカソンが日本で初開催！",
        url: "https://www.moguravr.com/visiondevcamp-tokyo-2025/",
        date: "2025.03.25",
    },
    {
        source: "PANORA",
        title: "Apple Vision ProとvisionOSのアプリケーション開発者向けのイベント「VisionDevCamp Tokyo 2025」が開催",
        url: "https://panora.tokyo/archives/103788",
        date: "2025.03.10",
    },
    {
        source: "Mac OTAKARA",
        title: "2025年4月11日〜4月13日にApple Vision Pro向けアプリ開発ハッカソン「VisionDevCamp Tokyo 2025」開催",
        url: "https://www.macotakara.jp/news/entry-48602.html",
        date: "2025.03.22",
    },
    {
        source: "IGDA日本",
        title: "Apple Vision Proむけハッカソン「VisionDevCamp Tokyo 2025」が開催(4/11-13)",
        url: "https://www.igda.jp/2025/03/25/15396/",
        date: "2025.03.25",
    },
    {
        source: "Reinforz Insight",
        title: "Vision Proの未来を創る – 世界が注目するハッカソン、VisionDevCampが東京初開催",
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
        date: "3 March 2024",
    },
    {
        source: "9to5Mac",
        title: "VisionDevCamp offers $100 Vision Pro hackathon event in Santa Clara",
        url: "https://9to5mac.com/2024/02/28/vision-pro-hackathon/",
        date: "28 February 2024",
    },
    {
        source: "AppleInsider",
        title: "VisionDevCamp is a three-day hackathon for Vision Pro Devs",
        url: "https://appleinsider.com/articles/24/02/28/visiondevcamp-is-a-three-day-hackathon-for-vision-pro-devs",
        date: "28 February 2024",
    },
    {
        source: "MacHash",
        title: "VisionDevCamp is a three-day hackathon for Vision Pro Devs",
        url: "https://machash.com/appleinsider/367644/visiondevcamp-three-day-hackathon-vision-pro-devs/",
        date: "28 February 2024",
    },
    {
        source: "MacTech",
        title: "VisionDevCamp Hackathon-Style Event for visionOS Coming Next Month",
        url: "https://www.mactech.com/2024/02/28/visiondevcamp-hackathon-style-event-for-visionos-coming-next-month/",
        date: "28 February 2024",
    },
    {
        source: "Voices of VR Podcast",
        title: "#1320: Plans for VisionDevCamp, an Apple Vision Pro Hackathon after Q1 2024 Launch",
        url: "https://voicesofvr.com/1320-plans-for-visiondevcamp-an-apple-vision-pro-hackathon-after-q1-2024-launch/",
        date: "7 December 2023",
    },
    {
        source: "UploadVR",
        title: "VisionDevCamp To Jumpstart Apple Vision Pro Developers In Early 2024",
        url: "https://www.uploadvr.com/visiondevcamp-vision-pro-developer-event-2024/",
        date: "15 November 2023",
    },
];

export default Press;
