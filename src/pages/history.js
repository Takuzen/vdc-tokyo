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

const History = () => {
    return (
        <div className={`${geistSans.variable} ${geistMono.variable} font-[family-name:var(--font-geist-sans)]`}>
            <Header />
            
            <main className="pt-20">
                <section id="history" className="w-full gradient-primary text-black px-8 py-20 relative overflow-hidden">
                    <div className="container relative z-10 max-w-5xl mx-auto">
                        <h1 className="text-3xl md:text-4xl font-bold mb-12 relative inline-block">
                            歴史
                            <span className="absolute -bottom-2 left-0 w-full h-1 bg-red-500"></span>
                        </h1>
                        
                        {/* Section: シリコンバレー発祥の歴史あるハッカソン */}
                        <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-lg mb-12">
                            <h2 className="text-2xl font-bold mb-6">シリコンバレー発祥の歴史あるハッカソン</h2>
                            <p className="mb-4">2007年のiPhoneの発売を起源とし、16年の長い歴史を有しています。</p>
                            <p className="mb-6">iPhoneDevCamp (2007, 2008, 2009)から始まり、iPadDevCamp (2010)、iOSDevCamp (2010, 2011, 2012, 2013)と、規模と参加者を拡大していきました。</p>
                            
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
                                <div className="text-center">
                                    <img
                                        src="/iPhoneDevCamp07.png"
                                        alt="iPhoneDevCamp (2007)"
                                        className="w-full h-auto rounded-lg shadow-md mb-2"
                                    />
                                    <p className="text-sm text-gray-600">iPhoneDevCamp (2007)</p>
                                </div>
                                <div className="text-center">
                                    <img
                                        src="/dom-promoting-iPhoneDevCamp-2.png"
                                        alt="Dom Promoting iphoneDevCamp 2 Photo"
                                        className="w-full h-auto rounded-lg shadow-md mb-2"
                                    />
                                    <p className="text-sm text-gray-600">Dom promoting iPhoneDevCamp 2 in 2008</p>
                                </div>
                                <div className="text-center">
                                    <img
                                        src="/iPhoneDevCamp-2-08.png"
                                        alt="iPhoneDevCamp 2 (2008)"
                                        className="w-full h-auto rounded-lg shadow-md mb-2"
                                    />
                                    <p className="text-sm text-gray-600">iPhoneDevCamp 2 (2008)</p>
                                </div>
                                <div className="text-center">
                                    <img
                                        src="/iPhoneDevCamp-3-09.png"
                                        alt="iPhoneDevCamp 3 (2009)"
                                        className="w-full h-auto rounded-lg shadow-md mb-2"
                                    />
                                    <p className="text-sm text-gray-600">iPhoneDevCamp 3 (2009)</p>
                                </div>
                                <div className="text-center">
                                    <img
                                        src="/iPadDevCamp-10.png"
                                        alt="iPadDevCamp (2010)"
                                        className="w-full h-auto rounded-lg shadow-md mb-2"
                                    />
                                    <p className="text-sm text-gray-600">iPadDevCamp (2010)</p>
                                </div>
                                <div className="text-center">
                                    <img
                                        src="/iOSDevCamp-10.png"
                                        alt="iOSDevCamp 2010"
                                        className="w-full h-auto rounded-lg shadow-md mb-2"
                                    />
                                    <p className="text-sm text-gray-600">iOSDevCamp 2010</p>
                                </div>
                                <div className="text-center">
                                    <img
                                        src="/iOSDevCamp-11.png"
                                        alt="iOSDevCamp 2011"
                                        className="w-full h-auto rounded-lg shadow-md mb-2"
                                    />
                                    <p className="text-sm text-gray-600">iOSDevCamp 2011</p>
                                </div>
                                <div className="text-center">
                                    <img
                                        src="/iOSDevCamp-12.png"
                                        alt="iOSDevCamp 2012"
                                        className="w-full h-auto rounded-lg shadow-md mb-2"
                                    />
                                    <p className="text-sm text-gray-600">iOSDevCamp 2012</p>
                                </div>
                                <div className="text-center">
                                    <img
                                        src="/iOSDevCamp-13.png"
                                        alt="iOSDevCamp 2013"
                                        className="w-full h-auto rounded-lg shadow-md mb-2"
                                    />
                                    <p className="text-sm text-gray-600">iOSDevCamp 2013</p>
                                </div>
                            </div>
                        </div>
                        
                        {/* Section: 多数の成功プロジェクトを輩出 */}
                        <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-lg mb-12">
                            <h2 className="text-2xl font-bold mb-6">多数の成功プロジェクトを輩出</h2>
                            <p className="mb-4">
                                開発者コミュニティにおけるインクルージョン、多様性、エンパワーメントを促進しており、毎年、何百人もの開発者、デザイナー、愛好家が集まり、iPhone、iPad、iOS向けのアプリを作成してきました。
                            </p>
                            <ul className="list-disc pl-6 mb-8 space-y-2">
                                <li>Oauthのような著名なオープンソースプロジェクトから、Block(旧Square)のような上場企業に至るまで、多くのものを生み出してきました。</li>
                                <li>Getaround、Obama &apos;08アプリ、AppleのTestFlightなどもすべてここから生まれました。</li>
                            </ul>
                            
                            <div className="flex flex-wrap justify-center gap-6 mb-8">
                                <img src="/oauth-logo.png" alt="Oauth Logo" className="h-16 object-contain" />
                                <img src="/square-block-logo.png" alt="Square/Block Logo" className="h-16 object-contain" />
                                <img src="/gatearound-logo.png" alt="Gateround Logo" className="h-16 object-contain" />
                                <img src="/obama-08-logo.png" alt="Obama &apos;08 Logo" className="h-16 object-contain" />
                                <img src="/testflight-logo.png" alt="TestFlight Logo" className="h-16 object-contain" />
                            </div>
                            
                            <div className="flex flex-col md:flex-row items-center bg-gray-100 rounded-lg p-6 mt-8">
                                <div className="md:w-1/4 mb-4 md:mb-0 md:mr-6">
                                    <img
                                        src="/dom-photo.png"
                                        alt="Dom Photo"
                                        className="w-full h-auto rounded-full shadow-md"
                                    />
                                </div>
                                <div className="md:w-3/4">
                                    <p className="text-lg italic mb-2">
                                        &ldquo;共同創業者を見つけて、チームを作り、あなたの夢を現実にするための絶好の機会です。&rdquo;
                                    </p>
                                    <footer className="text-right font-semibold">– Dom Sagolla、DevCamp共同主催者</footer>
                                </div>
                            </div>
                        </div>
                        
                        {/* Section: そして、VisionDevCampへ */}
                        <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-lg">
                            <h2 className="text-2xl font-bold mb-6">VisionDevCamp(2024)</h2>
                            <ul className="list-disc pl-6 mb-8 space-y-2">
                                <li>Vision Proが発売された翌月末に、第1回目のVisionDevCampがアメリカのサンタクララで開催されました。</li>
                                <li>100台以上のVision Proと150人以上の開発者が集まり、週末を含め3日間のハッカソンを楽しみました。</li>
                            </ul>
                            
                            <div className="mt-8 text-center">
                                <img
                                    src="/visiondevcamp-zoomup-photo.png"
                                    alt="VisionDevCamp Group Photo Zoomup"
                                    className="w-full max-w-3xl h-auto rounded-lg shadow-md mx-auto"
                                />
                            </div>
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
                        className="w-8 h-8 md:w-10 md:h-10 mr-2 object-contain"
                    />
                    <div className="text-xl font-bold text-black flex items-center">
                        VisionDevCamp
                        <span className="text-xl font-bold text-red-500 pl-1">Tokyo</span>
                    </div>
                </Link>

                {/* Desktop Navigation - Hidden on Mobile */}
                <div className="hidden md:flex items-center space-x-8">
                    <Link href="/#top" className="hover:text-red-500 transition-colors">トップ</Link>
                    <Link href="/#overview" className="hover:text-red-500 transition-colors">概要</Link>
                    <Link href="/#uniqueness" className="hover:text-red-500 transition-colors">特徴</Link>
                    <Link href="/#venues" className="hover:text-red-500 transition-colors">会場</Link>
                    <Link href="/#schedule" className="hover:text-red-500 transition-colors">スケジュール</Link>
                    <Link href="/#judges" className="hover:text-red-500 transition-colors">審査員</Link>
                    <Link href="/#speakers" className="hover:text-red-500 transition-colors">スピーカー</Link>
                    <Link href="/#sponsors" className="hover:text-red-500 transition-colors">スポンサー</Link>
                </div>

                <div className="flex">
                    {/* Hamburger Icon */}
                    <button
                        onClick={toggleMenu}
                        className="block md:hidden text-2xl text-black focus:outline-none"
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
                            <Link href="/#contact" className="hover:underline font-bold">
                                お問い合わせ
                            </Link>
                        </li>
                    </ul>
                )}
            </nav>
        </header>
    );
}

export default History;
