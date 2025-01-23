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
	
	<section
          id="uniqueness"
          className="min-h-screen flex flex-col bg-yellow-400 text-gray-900 px-8 py-12"
        >
	  <h3 className="text-sm sm:text-base font-bold mb-6">特徴</h3>
	              <div style={styles.sectionRow}>
	        <div style={styles.imageColumn}>
                  <img
                    src="/visiondevcamp2025-group-photo.jpg"
                    alt="VisionDevCamp Group"
                    style={styles.image}
                  />
                </div>
                <div style={styles.textColumn}>
                    <h2 style={styles.subtitle}>開発者が集まりApple Vision Proで動作するアプリを作る</h2>
                    <ul style={styles.list}>
                        <li>VisionDevCampは、Apple Vision ProとvisionOS向けのアプリケーション開発に焦点を当てた、非営利の開発者向けイベントです。</li>
                        <li>経験豊富なボランティアチームがApple Vision ProとvisionOSの開発者、デザイナー、起業家、および愛好家の方々をサポートします。</li>
                        <li>イベントは金曜日から日曜日まで開催され、参加者は週末にかけて共同作業を行います。開発プロジェクトには、個人での作業とチームでの作業の両方が含まれます。</li>
                    </ul>
                </div>
                <div style={styles.imageColumn}>
                    <img
                        src="/raven-photo.png"
                        alt="Raven Photo"
                        style={styles.image}
                    />
                </div>
	        <blockquote style={styles.quote}>
                  <p>"VisionDevCampは、Apple Vision ProとvisionOS向けのアプリケーション開発に焦点を当てた非営利の開発者向けイベントです。" </p>
                  <footer>– Raven Zachary、DevCamp共同主催者</footer>
                </blockquote>

            </div>
            <div style={styles.sectionRow}>
                <div style={styles.textColumn}>
                    <h2 style={styles.subtitle}>世界最大級のvisionOS開発者コミュニティ</h2>
                    <p>2024年の3月に開催された第1回目のVisionDevCampは世界中からvisionOS開発者が集まりました。</p>
                    <p>発売直後にも関わらず、100台以上のVision Proと150人以上の開発者が週末に集まりハッカソンを楽しみました。</p>
                </div>
                <div style={styles.imageColumn}>
                    <img
                        src="/largest-vos-community-photo.jpg"
                        alt="VisionDevCamp 2024"
                        style={styles.image}
                    />
                </div>
            </div>

            {/* Section 4 */}
            <div style={styles.sectionRow}>
                <div style={styles.textColumn}>
                    <h2 style={styles.subtitle}>非営利のボランティアによる運営</h2>
                    <p>ボランティアによって運営され、スポンサーと参加者の両方によって費用が賄われる非営利イベントです。</p>
                    <p>参加者が素晴らしいアプリケーションの開発に集中できるよう、スペース、食事、電源、インターネット、ネットワーキングの機会を提供し、参加費をできるだけ低く抑えることを目標としています。</p>
                </div>
                <div style={styles.imageColumn}>
                    <img
                        src="/volunteer-operation-photo.png"
                        alt="Volunteer Team"
                        style={styles.image}
                    />
                </div>
	      	<a
                  href="/history"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-black text-black py-2 px-6 mt-6 rounded-full hover:bg-orange-100 transition"
            	>
                  もっと詳しく知る →
        	</a>
            </div>
	</section>

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

            <ScheduleItem
              dateRange="2025.02.01 - 2025.03.23"
              title="キックオフイベント"
              subDates={[
		"2025.03.04",
              ]}
              linkText="募集中"
              link="#sponsors"
              dimmed={false}
            >
	  {/*
              <div className="mt-4 p-4 bg-orange-500 text-white rounded-lg">
                <div className="flex items-center justify-between">

                  <div className="flex items-center">
                    <img
                      src="/hobonichi-logo.png"
                      alt="Logo"
                      className="w-20 h-20 object-contain mr-4"
                    />
                    <h4 className="text-lg font-bold">と行う<span className="text-2xl ml-2">一日アイデアソン「テーマ：〇 △ ◻︎」</span></h4>
                  </div>
                </div>
                <p className="text-sm mt-4 text-left mb-4">
                  何は生涯いよいよそんな譴責団というもののところへ勧めらしいた。ことに十月を病気方はもっともその準備でうだってをいうばみるなにも評ぶつかったいないで、こうには教えましなですあり。人にすれない事もいくらほかに同時にないますあり。同時に大森さんよりお話し程度少し吟味から引けるです主意この世間私か採用をとしてお永続なたでしょないて、その時分は私か風他をやまて、岡田さんの事から学校のあなたが多分ご奨励とできるば私先生がご学問からあるくように同時にお［＃「に出さべきますから、いかにいやいや批評で向いでからくれでしょのを云いたろます。
                </p>
	    <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img
                      src="/default_profile_400x400.png"
                      alt="Judge"
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <p className="text-sm font-bold">審査員</p>
                      <p className="text-sm">ほぼ日 CTO 清水昌</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <a
                      href="/details-page"
                      className="py-2 px-6 mr-4 bg-white text-black font-bold rounded-full hover:bg-orange-300 transition"
                    >
                      詳細を見る
                    </a>
                    <a
                      href="/details-page"
                      className="py-2 px-6 bg-white text-blue-700 font-bold rounded-full hover:bg-orange-300 transition"
                    >
                      参加する
                    </a>
		  </div>
	  </div>
              </div>
	      		  	  */}

            </ScheduleItem>

          <ScheduleItem
            dateRange="2025.03.04"
            title="募集イベント"
            subDates={[
	      "Coming Soon",
            ]}
            dimmed={false}
          />
	   <ScheduleItem
            dateRange="2025.03.16"
            title="アイデアソン"
            subDates={[
	      "Coming Soon"
            ]}
            dimmed={false}
          />
          <ScheduleItem
            date="2025.04.10"
            title="エントリー申し込み 締め切り"
            dimmed={true}
          />
	   <ScheduleItem
            dateRange="2025.04.11"
            title="チームビルディング"
            dimmed={false}
          />
        </div>
      </section>

	{/* Section 5
        <section
          id="judges"
          className="flex flex-col bg-pink-500 text-white px-8 py-12"
        >
          <h3 className="text-sm sm:text-base font-bold mb-6">審査員</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    <JudgeCard
      image="/satoshi-san-profile-image.png"
      name="服部 智"
      title="Cyber AI Productions"
      description="XR エンジニア"
      bio="サイバーエージェント所属。AbemaTVにてアプリ開発に従事後、AICG事業部にてバーチャル撮影スタジオツールなど開発。社内認定 AR Expert。visionOS書籍執筆。国内外で登壇多数。"
    />
            <JudgeCard
              image="/default_profile_400x400.png"
              name="順次 公開"
              description="Coming Soon"
            />
            <JudgeCard
              image="/default_profile_400x400.png"
              name="順次 公開"
              description="Coming Soon"
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

	*/}


	{/* Section 6
	<section
          id="sponsors"
          className="min-h-screen flex flex-col bg-white text-gray-900 px-8 py-12"
        >
          <h3 className="text-sm font-bold text-left mb-6 sm:text-base">スポンサー</h3>

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

          <div className="flex flex-col items-center mt-16">
            <h4 className="text-xl font-bold text-purple-700 mb-4">スポンサー募集中！</h4>

            <a
              href="https://forms.gle/rkd5RQrNtSU4fYxF9"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-black py-2 px-6 rounded-full hover:bg-orange-100 transition"
            >
              スポンサー応募フォーム
            </a>
          </div>
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
        {/* Logo and Title */}
        <div className="flex items-center">
          {/* Logo Image */}
          <img
            src="/visiondevcamp-logo-only.png"
            alt="VisionDevCamp Logo"
            className="w-8 h-8 md:w-10 md:h-10 mr-2 object-contain"
          />
          {/* Title */}
          <div className="text-xl font-bold text-black flex items-center">
            VisionDevCamp
            <span className="text-xl font-bold text-red-500 pl-1">Tokyo</span>
          </div>
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
              <a href="#uniqueness" className="hover:underline font-bold">
                特徴
              </a>
            </li>
            <li className="mb-2">
              <a href="/history" className="hover:underline font-bold">
                歴史
              </a>
            </li>
            <li className="mb-2">
              <a href="/schedule" className="hover:underline font-bold">
                スケジュール
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline font-bold text-gray-400">
                審査員
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline font-bold text-gray-400">
                スポンサー
              </a>
            </li>
            <li className="mb-2">
              <a href="/press" className="hover:underline font-bold">
                プレス
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
            <a href="#uniqueness" className="hover:underline font-bold">
              特徴
            </a>
          </li>
          <li>
            <a href="/history" className="hover:underline font-bold">
              歴史
            </a>
          </li>
          <li>
            <a href="/schedule" className="hover:underline font-bold">
              スケジュール
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline font-bold text-gray-400">
              審査員
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline font-bold text-gray-400">
              スポンサー
            </a>
          </li>
          <li>
            <a href="/press" className="hover:underline font-bold">
              プレス
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

function ScheduleItem({ date, dateRange, title, linkText, link, subDates, dimmed, children }) {
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
      {children}
    </div>
  );
}

function JudgeCard({ image, name, title, description, bio }) {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <>
      {/* Judge Card */}
      <div
        onClick={openModal}
        className="bg-white text-gray-900 rounded-lg shadow-lg p-6 flex flex-col items-center cursor-pointer hover:shadow-2xl transition"
      >
        <img
          src={image}
          alt={name}
          className="w-20 h-20 rounded-full mb-4 object-cover"
        />
        <h4 className="font-bold text-lg hover:underline">{name}</h4>
        <p className="text-sm">{title}</p>
        <p className="text-sm mt-1 text-center">{description}</p>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center"
          onClick={closeModal}
        >
          <div
            className="relative bg-white rounded-lg shadow-lg p-6 w-11/12 max-w-lg"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              className="absolute top-2 right-4 text-gray-500 hover:text-black"
              onClick={closeModal}
              aria-label="Close Modal"
            >
              ✕
            </button>
            <div className="flex flex-col items-center">
              <img
                src={image}
                alt={name}
                className="w-24 h-24 rounded-full mb-4 object-cover"
              />
              <h4 className="font-bold text-xl text-black">{name}</h4>
              <p className="text-md font-medium text-gray-700 mt-2">{title}</p>
              <p className="text-sm text-gray-600 text-center">
                {description}
              </p>
              {bio && <p className="mt-4 text-gray-800 text-center font-serif">{bio}</p>}
            </div>
          </div>
        </div>
      )}
    </>
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

const styles = {
	sectionRow: {
	    display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginBottom: '40px',
            gap: '20px',
	},
	subtitle: {
        fontSize: '24px',
        marginBottom: '10px',
    	},
	imageColumn: {
        flex: '1',
        display: 'flex',
        justifyContent: 'center',
    	},
	image: {
        width: '100%',
        maxWidth: '500px',
        height: 'auto',
        borderRadius: '10px',
    	},
	textColumn: {
        flex: '1',
        textAlign: 'left',
        maxWidth: '650px',
    	},
	list: {
        listStyle: 'disc',
        paddingLeft: '20px',
        lineHeight: '1.8',
    	},
	quote: {
        fontStyle: 'italic',
        borderLeft: '4px solid #ddd',
        paddingLeft: '10px',
        marginTop: '20px',
    	},
};
	 

