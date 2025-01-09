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
      {/* Header */}
      <header className="fixed top-0 w-full bg-white shadow-md z-50">
        <nav className="flex justify-between items-center px-4 sm:px-8 py-3 sm:py-4">
          <div className="text-xl font-bold text-black">VisionDevCamp <span className="text-red-500">Tokyo</span></div>
          <ul className="flex gap-4 text-sm text-black">
            <li>
              <a href="#top" className="hover:underline text-black font-bold">トップ</a>
            </li>
            <li>
              <a href="#news" classname="hover:underline text-[#e75b10] font-bold">お知らせ</a>
            </li>
	  {/*
	    <li>
	      <a href="#history" classname="hover:underline text-green-500 font-bold">歴史</a>
	    </li>
	  */}
            <li>
              <a href="#schedule" classname="hover:underline text-blue-400 font-bold">スケジュール</a>
            </li>
            <li>
              <a href="#judges" classname="hover:underline text-pink-500 font-bold">審査員</a>
            </li>
            <li>
              <a href="#sponsors" classname="hover:underline text-yellow-400 font-bold">スポンサー</a>
            </li>
	  {/*
	    <li>
              <a href="#press" classname="hover:underline text-[#7a7fde] font-bold">報道</a>
            </li>
	  */}
	    <li>
              <a href="#tickets" classname="hover:underline text-purple-600 font-bold">チケット購入</a>
            </li>
	    <li>
	      <a href="#contact" className="hover:underline text-black font-bold">お問い合わせ</a>
	    </li>
          </ul>
        </nav>
      </header>

      {/* Main Sections */}
      <main className="mt-16">
        {/* Section 1 */}
        <section
          id="top"
          className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-black text-white px-8 py-12"
        >
          <h1 className="text-4xl sm:text-6xl font-bold">VisionDevCamp <span className="text-red-500">Tokyo</span> 2025</h1>
          <p className="text-lg sm:text-xl mt-4 text-center">
            シリコンバレーの2007年より続く歴史あるハッカソンが初めての日本開催！

	  </p>
        </section>

	<section
          id="news"
          className="min-h-screen flex flex-col bg-[#e75b10] text-white px-8 py-12"
        >
          {/* News Title */}
          <h2 className="text-sm font-bold text-left mb-6 sm:text-base">お知らせ</h2>

          {/* News Items */}
          <div className="space-y-6">
            <NewsItem
              text="公式サイト公開しました！"
              link="#"
            />
            <NewsItem
              text="明けましておめでとうございます！いよいよVisionDevCamp Tokyo初開催の年です！"
              link="#"
            />
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
            linkText="エントリー申し込みページ"
            link="#tickets"
            dimmed={false}
          />
          <ScheduleItem
            dateRange="2024.02.01 - 2024.03.23"
            title="募集イベント"
            subDates={[
              "2025.2月前半枠",
              "2025.2月後半枠",
              "2025.3月前半枠",
              "2025.3月後半枠",
            ]}
            linkText="募集イベントページ詳細 →"
            link="#"
            dimmed={false}
          />
          <ScheduleItem
            date="2024.04.10"
            title="エントリー申し込み 締め切り"
            dimmed={true}
          />
        </div>
      </section>

	{/* Section 5 */}
        <section
          id="judges"
          className="min-h-screen flex flex-col bg-pink-500 text-white px-8 py-12"
        >
          <h3 className="text-sm sm:text-base font-bold mb-6">審査員</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <JudgeCard
              image="/default_profile_400x400.png"
              name="井原 正博"
              title="一般財団法人"
              description="GovTech東京 業務執行理事"
            />
            <JudgeCard
              image="/default_profile_400x400.png"
              name="奥田 浩美"
              title="株式会社ウィズグループ"
              description="代表取締役 CEO&Founder"
            />
            <JudgeCard
              image="/default_profile_400x400.png"
              name="戸倉 彩"
              title="日本アイ・ビー・エム株式会社"
              description="テクノロジー事業本部 カスタマーサクセス部長"
            />
            <JudgeCard
              image="/default_profile_400x400.png"
              name="宮坂 学"
              title="東京都"
              description="副知事"
            />
            <JudgeCard
              image="/default_profile_400x400.png"
              name="山田 忠輝"
              title="東京都"
              description="デジタルサービス局 局長"
            />
            <JudgeCard
              image="/default_profile_400x400.png"
              name="渡邊 英徳"
              title="東京大学大学院"
              description="情報学環 教授"
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
            <h4 className="text-lg font-bold mb-4">Premium Sponsors</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <SponsorCard
                logo="/default_profile_400x400.png"
                name="Fenrir"
                description="ウェブブラウザ「Sleipnir」などの自社プロダクトや共同開発事業を展開。"
                link="https://www.fenrir-inc.com/"
                badge="premium"
              />
              <SponsorCard
                logo="/default_profile_400x400.png"
                name="Yumemi"
                description="大手企業や急成長スタートアップと協創型でWeb/スマホのサービス作りを支援。"
                link="https://www.yumemi.co.jp/"
                badge="premium"
              />
            </div>
          </div>

          {/* Basic Sponsors */}
          <div className="mb-12">
            <h4 className="text-lg font-bold mb-4">Basic Sponsors</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <SponsorCard
                logo="/default_profile_400x400.png"
                name="STORES 株式会社"
                link="https://example.com/"
                badge="basic"
              />
              <SponsorCard
                logo="/default_profile_400x400.png"
                name="MagicPod"
                link="https://example.com/"
                badge="basic"
              />
              <SponsorCard
                logo="/default_profile_400x400.png"
                name="サイボウズ株式会社"
                link="https://example.com/"
                badge="basic"
              />
              <SponsorCard
                logo="/default_profile_400x400.png"
                name="株式会社サイバーエージェント"
                link="https://example.com/"
                badge="basic"
              />
            </div>
          </div>

          {/* Venue Sponsor */}
          <div className="mb-12">
            <h4 className="text-lg font-bold mb-4">Venue Sponsor</h4>
            <div className="grid grid-cols-1">
              <SponsorCard
                logo="/default_profile_400x400.png"
                name="Venue Sponsor Name"
                description="詳細情報や説明文をここに記載します。"
                link="https://example.com/"
                badge="venue"
              />
            </div>
          </div>

          {/* Broadcast Sponsor */}
          <div>
            <h4 className="text-lg font-bold mb-4">Broadcast Sponsor</h4>
            <div className="grid grid-cols-1">
              <SponsorCard
                logo="/default_profile_400x400.png"
                name="Dwango"
                description="Live Streaming Support provided by Dwango."
                link="https://example.com/"
                badge="broadcast"
              />
            </div>
          </div>

	  {/* Sponsor Recruitment Section */}
          <div className="flex flex-col items-center mt-16">
            <h4 className="text-xl font-bold text-purple-700 mb-4">スポンサー募集</h4>
            <img
              src="/"
              alt="Sponsor Recruitment Illustration"
              className="w-40 h-40 object-contain mb-6"
            />
            <a
              href="https://productive-fear-c6e.notion.site/174cc332b048804f9a5fdae32d5ec224?pvs=105"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-orange-500 text-purple-700 font-bold py-2 px-6 rounded-full hover:bg-orange-100 transition"
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
          <p className="text-md sm:text-lg mt-4 text-center max-w-3xl">
           2025年2月より募集開始！ 
          </p>
        </section>

	{/* Section 9 */}
        <section
          id="contact"
          className="min-h-screen flex flex-col items-center justify-center bg-white text-black px-8 py-12"
        >
          <h3 className="text-3xl sm:text-5xl font-bold">お問い合わせ</h3>
          <p className="text-md sm:text-lg mt-4 text-center max-w-3xl">
            yugoatobe0330@gmail.com 
          </p>
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
            } text-sm font-medium py-2 px-4 rounded-full`}
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
          className="mt-4 text-blue-500 underline"
        >
          Visit Website →
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
