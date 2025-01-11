import { useState } from "react";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className={`${geistSans.variable} ${geistMono.variable} font-[family-name:var(--font-geist-sans)]`}>
      <Header />
      {/* Main Sections */}
      <main className="mt-16">
        {/* Section 1 */}
        <section
          id="top"
          className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-black text-white px-8 py-12"
        >
          <h1 className="text-4xl sm:text-6xl font-bold">VisionDevCamp <span className="text-red-500">Tokyo</span> 2025</h1>
          <p className="text-lg sm:text-xl underline mt-4 text-center">
            シリコンバレーの2007年より続く歴史あるハッカソンが初めての日本開催！

	</p>
	  {/* Subtitle */}
  	  <p className="text-md sm:text-lg mt-4 text-center font-medium">
    	    Apple Vision Pro 特化回！ <br />
    	    個人でもチームでも、共にアイデアを形にしよう！ 
 	  </p>

  	  {/* Date */}
  	  <div className="mt-8 text-center">
    	  <p className="text-4xl sm:text-5xl font-bold text-red-400">
      	    04.11 <span className="text-2xl sm:text-3xl">金</span> - 13 <span className="text-2xl sm:text-3xl">日</span>, 2025
    	  </p>
  	  </div>

  	  {/* Venue */}
  	  <div className="mt-4 text-center">
    	  <p className="text-lg sm:text-xl font-bold">
      	    会場：<span className="text-white">日本科学未来館, 東京</span>
          </p>
          </div>

  	  {/* Event Format */}
  	  <div className="mt-4 text-center">
    	  <p className="text-lg sm:text-xl font-bold">
      	    開催方式：<span className="text-white">現地＆オンラインのハイブリッド開催</span>
    	  </p>
  	  </div>
        </section>

	<section
  	  id="news"
  	  className="flex flex-col bg-[#e75b10] text-white px-8 py-12"
	>
	{/* News Title */}
  	<h2 className="text-sm font-bold text-left mb-6 sm:text-base">お知らせ</h2>
	
  	{/* News Items */}
  	<div className="space-y-6 mb-8">
    	<NewsItem text="公式サイトを公開しました！" link="#top" />
  	</div>

	<p>過去のイベントの様子</p>

  	{/* Responsive YouTube Embed */}
  	<div className="relative mt-2 w-full" style={{ paddingBottom: "56.25%" }}>
    	<iframe
      	  className="absolute top-0 left-0 w-full h-full"
      	  src="https://www.youtube.com/embed/KTIVdrXbJ_Q"
      	  title="YouTube video player"
      	  frameBorder="0"
      	  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      	  allowFullScreen
    	></iframe>
  	</div>
	</section>

	{/* Section 3
        <section
          id="history"
          className="min-h-screen flex flex-col items-center justify-center bg-green-500 text-white px-8 py-12"
        >
          <h3 className="text-3xl sm:text-5xl font-bold">歴史</h3>
          <p className="text-md sm:text-lg mt-4 text-center max-w-3xl">
            Relax with a calming purple design for the final section.
          </p>
        </section>
	*/}

        {/* Section 4 */}
        <section
        id="schedule"
        className="min-h-screen flex flex-col bg-gradient-to-b from-blue-500 to-blue-300 text-white px-8 py-12"
      >
        {/* Schedule Title */}
        <h3 className="text-sm font-bold text-left mb-6 sm:text-base">
          スケジュール
        </h3>

        {/* Schedule Items */}
        <div className="space-y-6">
          {/* Modular Schedule Item */}
          <ScheduleItem
            date="2025.02.01"
            title="エントリー申し込み 受付スタート"
            dimmed={false}
          />
          <ScheduleItem
            dateRange="2024.02.01 - 2024.03.23"
            title="募集イベント"
            subDates={[
              "2025.2月前半枠",
	      "02.01, 02.02, 02.08, 02.09, 02.15, 02.16",
              "2025.3月前半枠",
	      "03.08, 03.09, 03.15, 03.16",
              "2025.3月後半枠",
	      "03.22, 03.23",
            ]}
	    linkText="募集中"
	    link="#sponsors"
            dimmed={false}
          />
	   <ScheduleItem
            dateRange="2024.03.11"
            title="キックオフイベント"
            subDates={[
              "03.08, 03.09, 03.15, 03.16"
            ]}
	    linkText="募集中"
	    link="#sponsors"
            dimmed={false}
          />
	   <ScheduleItem
            dateRange="2024.03.11 - 2024.04.10"
            title="アイデアソン"
            subDates={[
              "03.08, 03.09, 03.15, 03.16, 03.22, 03.23"
            ]}
	    linkText="募集中"
	    link="#sponsors"
            dimmed={false}
          />
          <ScheduleItem
            date="2024.04.10"
            title="エントリー申し込み 締め切り"
            dimmed={true}
          />
	   <ScheduleItem
            dateRange="2024.04.11"
            title="チームビルディング"
            dimmed={false}
          />
        </div>
      </section>

	{/* Section 5 */}
        <section
          id="judges"
          className="flex flex-col bg-pink-500 text-white px-8 py-12"
        >
          <h3 className="text-sm sm:text-base font-bold mb-6">審査員</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <JudgeCard
              image="/default_profile_400x400.png"
              name="順次 公開"
	      title="開発者枠"
              description="お楽しみに"
            />
            <JudgeCard
              image="/default_profile_400x400.png"
              name="順次 公開"
	      title="アカデミア枠"
              description="お楽しみに"
            />
            <JudgeCard
              image="/default_profile_400x400.png"
              name="順次 公開"
	   　 title="アーティスト枠"
              description="お楽しみに"
            />
            <JudgeCard
              image="/default_profile_400x400.png"
              name="順次 公開"
	  　  title="未定"
              description="お楽しみに"
            />
            <JudgeCard
              image="/default_profile_400x400.png"
              name="順次 公開"
	      title="未定"
              description="お楽しみに"
            />
            <JudgeCard
              image="/default_profile_400x400.png"
              name="順次 公開"
	      title="未定"
              description="お楽しみに"
            />
          </div>
        </section>

	{/* Section 6 */}
        <section
          id="sponsors"
          className="min-h-screen flex flex-col bg-yellow-400 text-gray-900 px-8 py-12"
        >
          {/* Sponsors Title */}
          <h3 className="text-sm font-bold text-left mb-6 sm:text-base">スポンサー</h3>
	  <p>見本例</p>
          {/* Premium Sponsors */}
          <div className="mb-12">
            <h4 className="text-lg font-bold mb-4">プレミアム・スポンサー</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <SponsorCard
                logo="/default_profile_400x400.png"
                name="募集中"
                description="企業紹介"
                link="#"
                badge="premium"
              />
              <SponsorCard
                logo="/default_profile_400x400.png"
                name="募集中"
                description="企業紹介"
                link="#"
                badge="premium"
              />
            </div>
          </div>

          {/* Basic Sponsors */}
          <div className="mb-12">
            <h4 className="text-lg font-bold mb-4">ベーシック・スポンサー</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <SponsorCard
                logo="/default_profile_400x400.png"
                name="募集中"
                link="https://example.com/"
                badge="basic"
              />
              <SponsorCard
                logo="/default_profile_400x400.png"
                name="募集中"
                link="https://example.com/"
                badge="basic"
              />
              <SponsorCard
                logo="/default_profile_400x400.png"
                name="募集中"
                link="https://example.com/"
                badge="basic"
              />
              <SponsorCard
                logo="/default_profile_400x400.png"
                name="募集中"
                link="https://example.com/"
                badge="basic"
              />
            </div>
          </div>

          {/* Venue Sponsor */}
          <div className="mb-12">
            <h4 className="text-lg font-bold mb-4">会場スポンサー</h4>
            <div className="grid grid-cols-1">
              <SponsorCard
                logo="/default_profile_400x400.png"
                name="募集中"
                description="詳細情報や説明文をここに記載します。"
                link="https://example.com/"
                badge="venue"
              />
            </div>
          </div>

          {/* Broadcast Sponsor */}
          <div>
            <h4 className="text-lg font-bold mb-4">配信スポンサー</h4>
            <div className="grid grid-cols-1">
              <SponsorCard
                logo="/default_profile_400x400.png"
                name="募集中"
                description="詳細情報や説明文をここに記載します。"
                link="https://example.com/"
                badge="broadcast"
              />
            </div>
          </div>

	  {/* Sponsor Recruitment Section */}
          <div className="flex flex-col items-center mt-16">
            <h4 className="text-xl font-bold text-purple-700 mb-4">スポンサー募集中！</h4>
	  {/*
            <img
              src="/visiondevcamplogo.png"
              alt="Sponsor Recruitment Illustration"
              className="w-40 h-40 object-contain mb-6"
            />
	  */}
            <a
              href="https://forms.gle/rkd5RQrNtSU4fYxF9"
              target="_blank"
              rel="noopener noreferrer"
              className="border-4 border-white text-purple-700 font-bold py-2 px-6 rounded-full hover:bg-orange-100 transition"
            >
              スポンサー応募フォーム
            </a>
          </div>
        </section>

	{/* Section 7
        <section
          id="press"
          className="min-h-screen flex flex-col items-center justify-center bg-[#7a7fde] text-white px-8 py-12"
        >
          <h3 className="text-3xl sm:text-5xl font-bold">報道</h3>
          <p className="text-md sm:text-lg mt-4 text-center max-w-3xl">
            Relax with a calming purple design for the final section.
          </p>
        </section>
	*/}

	{/* Section 8 */}
        <section
          id="tickets"
          className="min-h-screen flex flex-col items-center justify-center bg-purple-600 text-white px-8 py-12"
        >
          <h3 className="text-3xl sm:text-5xl font-bold">チケット購入</h3>
          <p className="text-md sm:text-lg underline mt-4 text-center max-w-3xl">
           2025年2月より募集開始！ 
          </p>
        </section>

	{/* Section 9 */}
        <section
          id="contact"
          className="min-h-screen flex flex-col items-center justify-center bg-white text-black px-8 py-12"
        >
          <h3 className="text-3xl sm:text-5xl font-bold mb-6">お問い合わせ</h3>
          <a
              href="https://forms.gle/UAUzjzJvSmNtKthg6"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-black text-black py-2 px-6 rounded-full hover:bg-orange-100 transition"
            >
              お問い合わせフォーム →
        </a>

        </section>


      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-6">
        <p>
          Built with ❤️  using <a href="https://nextjs.org" className="underline hover:text-blue-400">Next.js</a>.
        </p>
	<p>
	  Copyright ©︎ VisionDevCamp Tokyo 2025 All Rights Reserved.
	</p>
      </footer>
    </div>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="fixed top-0 w-full bg-white shadow-md z-50">
      <nav className="flex justify-between items-center px-4 md:px-8 py-3 md:py-4">
        {/* Logo */}
        <div className="text-xl font-bold text-black flex items-center">
          VisionDevCamp
          <span className="text-xl font-bold text-red-500 flex items-center pl-1">
            Tokyo
          </span>
        </div>

        {/* Hamburger Icon */}
        <button
          onClick={toggleMenu}
          className="block md:hidden text-2xl text-black focus:outline-none"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        {/* Mobile/Tablet Navigation */}
        {menuOpen && (
          <ul className="md:hidden bg-white text-black shadow-md p-4 absolute w-full top-full z-50">
            <li className="mb-2">
              <a href="#top" className="hover:underline font-bold">
                トップ
              </a>
            </li>
            <li className="mb-2">
              <a href="#news" className="hover:underline font-bold">
                お知らせ
              </a>
            </li>
            <li className="mb-2">
              <a href="/history-and-uniqueness" className="hover:underline font-bold">
                歴史と特徴
              </a>
            </li>
            <li className="mb-2">
              <a href="/schedule" className="hover:underline font-bold">
                スケジュール
              </a>
            </li>
            <li className="mb-2">
              <a href="#judges" className="hover:underline font-bold">
                審査員
              </a>
            </li>
            <li className="mb-2">
              <a href="#sponsors" className="hover:underline font-bold">
                スポンサー
              </a>
            </li>
            <li className="mb-2">
              <a href="/press" className="hover:underline font-bold">
                報道
              </a>
            </li>
	    <li className="mb-2">
            <a href="#tickets" className="hover:underline font-bold">
              チケット購入
            </a>
          </li>
	  <li className="mb-2">
            <a href="#contact" className="hover:underline font-bold">
              お問い合わせ
            </a>
          </li>
          </ul>
        )}

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-4 text-sm text-black">
          <li>
            <a href="#top" className="hover:underline font-bold">
              トップ
            </a>
          </li>
          <li>
            <a href="#news" className="hover:underline font-bold">
              お知らせ
            </a>
          </li>
          <li>
            <a href="/history-and-uniqueness" className="hover:underline font-bold">
              歴史と特徴
            </a>
          </li>
          <li>
            <a href="/schedule" className="hover:underline font-bold">
              スケジュール
            </a>
          </li>
          <li>
            <a href="#judges" className="hover:underline font-bold">
              審査員
            </a>
          </li>
          <li>
            <a href="#sponsors" className="hover:underline font-bold">
              スポンサー
            </a>
          </li>
          <li>
            <a href="/press" className="hover:underline font-bold">
              報道
            </a>
          </li>
	  <li>
            <a href="#tickets" className="hover:underline font-bold">
              チケット購入
            </a>
          </li>
	  <li>
            <a href="#contact" className="hover:underline font-bold">
              お問い合わせ
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

function ScheduleItem({ date, dateRange, title, linkText, link, subDates, dimmed }) {
  return (
    <div
      className={`rounded-lg shadow-lg p-6 ${
        dimmed ? "bg-gray-400 text-gray-800" : "bg-white text-gray-900"
      }`}
    >
      <div className="flex items-start justify-between">
        <div>
          {date ? (
            <p className="font-bold text-lg">{date}</p>
          ) : (
            <p className="font-bold text-lg">{dateRange}</p>
          )}
          <h4 className="mt-2 font-semibold text-base">{title}</h4>
        </div>
        {linkText && link && (
<a
  href={link}
  className={`${
    dimmed
      ? "bg-gray-500 text-gray-300"
      : "bg-blue-800 text-white hover:bg-blue-900"
  } text-sm font-medium py-2 px-6 rounded-full whitespace-nowrap`}
>
  {linkText}
</a>
        )}
      </div>
      {subDates && (
        <div className="mt-4 space-y-1">
          {subDates.map((subDate, index) => (
            <p key={index} className="text-sm font-medium">
              {subDate}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}

function JudgeCard({ image, name, title, description }) {
  return (
    <div className="bg-white text-gray-900 rounded-lg shadow-lg p-6 flex flex-col items-center">
      <img
        src={image}
        alt={name}
        className="w-20 h-20 rounded-full mb-4 object-cover"
      />
      <h4 className="font-bold text-lg">{name}</h4>
      <p className="text-sm">{title}</p>
      <p className="text-sm mt-1 text-center">{description}</p>
    </div>
  );
}

function SponsorCard({ logo, name, description, link, badge }) {
  const badgeStyles = {
    premium: "bg-gradient-to-r from-yellow-500 to-red-500 text-white",
    basic: "bg-gray-100 text-gray-900",
    venue: "bg-gradient-to-r from-green-400 to-blue-400 text-white",
    broadcast: "bg-gradient-to-r from-pink-500 to-red-500 text-white",
  };

  return (
    <div
      className={`relative rounded-lg shadow-lg p-6 flex flex-col items-center ${
        badge ? badgeStyles[badge] : "bg-white"
      }`}
    >
      {/* Badge */}
      {badge && (
        <div
          className={`absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2 p-2 rounded-full ${
            badgeStyles[badge]
          }`}
        >
          {badge === "premium" ? "💎" : badge === "broadcast" ? "🎥" : "⭐"}
        </div>
      )}

      {/* Logo */}
      <img src={logo} alt={name} className="w-32 h-32 object-contain mb-4" />

      {/* Name */}
      <h5 className="font-bold text-lg">{name}</h5>

      {/* Description */}
      {description && <p className="text-sm text-center mt-2">{description}</p>}

      {/* Link */}
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 text-blue-500 underline font-bold"
        >
          企業公式サイト →
        </a>
      )}
    </div>
  );
}

function NewsItem({ text, link }) {
  return (
    <div className="flex items-center space-x-4">
      {/* Icon */}
      <div className="text-xl font-bold">›</div>

      {/* Text with Link */}
      <a
        href={link}
        className="text-lg sm:text-xl font-medium underline hover:no-underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        {text}
      </a>
    </div>
  );
}
