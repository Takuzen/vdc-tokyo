import { useState } from "react";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";

const judges = [
  {
    image: "/satoshi-san-profile-image.png",
    name: "服部 智",
    title: "Cyber AI Productions",
    description: "XR エンジニア",
    bio: "サイバーエージェント所属。AbemaTVにてアプリ開発に従事後、AICG事業部にてバーチャル撮影スタジオツールなど開発。社内認定 AR Expert。visionOS書籍執筆。国内外で登壇多数。",
    socialMedia: [
      { platform: "X", url: "https://x.com/shmdevelop", icon: "/x-logo.png" },
      {
        platform: "GitHub",
        url: "https://github.com/satoshi0212",
        icon: "/github-logo.png",
      },
    ],
  },
  {
    image: "/aimi-sekiguchi-400-400.png",
    name: "せきぐちあいみ",
    title: "XR / Spatial Artist",
    description: "",
    bio: "2016年からVR空間に3Dの絵を描くアーティストとして活動。アート制作やライブペイントのオファーを世界13カ国から受ける。メタバース上の個展会場には世界中から多くの人が訪れ、ヴェネチア国際映画祭VR部門に選出される。NFTアートの初作品が約1300万円で落札され話題となる。2021年「Forbes Japan 100」に選出される。ドバイ政府認定アーティスト",
    socialMedia: [
      {
        platform: "X",
        url: "https://x.com/sekiguchiaimi",
        icon: "/x-logo.png",
      },
      {
        platform: "Website",
        url: "https://aimimusou.com",
        icon: "/globe-outline.svg",
      },
    ],
  },
  {
    image: "/default_profile_400x400.png",
    name: "順次 公開",
    title: "",
    description: "お楽しみに",
    bio: "",
    socialMedia: [],
  },
];

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
    <div
      className={`${geistSans.variable} ${geistMono.variable} font-[family-name:var(--font-geist-sans)]`}
    >
      <Header />

      <main className="mt-16">
        <section
          id="top"
          className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-black text-white px-8 py-12"
        >
          <h1 className="text-4xl sm:text-6xl font-bold">
            VisionDevCamp <span className="text-red-500">Tokyo</span> 2025
          </h1>
          <p className="text-lg sm:text-xl underline mt-4 text-center">
            シリコンバレーの2007年より続く歴史あるハッカソンが初めての日本開催！
          </p>

          <p className="text-md sm:text-lg mt-4 text-center font-medium">
            個人でもチームでも、共にVision Proのアイデアを形にしよう！
          </p>

          <div className="mt-8 text-center">
            <p className="text-4xl sm:text-5xl font-bold text-red-400">
              04.11 <span className="text-2xl sm:text-3xl">金</span> - 13{" "}
              <span className="text-2xl sm:text-3xl">日</span>, 2025
            </p>
          </div>

          <div className="mt-4 text-center">
            <p className="text-lg sm:text-xl font-bold">
              会場：
              <span className="underline decoration-[1px]">
                <a
                  href="https://www.z-lodge.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white"
                >
                  {" ︎オープンコラボレーションハブ LODGE "}
                </a>
              </span>
              <span className="ml-1">& Online</span>
            </p>
          </div>
        </section>

        <section id="news" className="w-full bg-[#e75b10] py-12">
          <div className="container">
            <h2 className="text-2xl md:text-3xl  font-bold text-left mb-6 sm:text-base text-white">
              お知らせ
            </h2>

            <div className="text-white space-y-6 mb-8">
              <NewsItem noLinkText="公式サイトを公開しました！" />
            </div>

            <p className="text-white">過去のイベントの様子</p>

            <div
              className="relative mt-2 w-full"
              style={{ paddingBottom: "56.25%" }}
            >
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/KTIVdrXbJ_Q"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>

        <section
          id="uniqueness"
          className="w-full min-h-screen flex flex-col bg-[#059d9f] text-gray-900 py-12"
        >
          <div className="container">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              特徴
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div>
                <img
                  src="/visiondevcamp2025-group-photo.jpg"
                  alt="VisionDevCamp Group"
                  className="w-full h-[400px] object-cover rounded-lg"
                />
              </div>
              <div>
                <h2 className="text-2xl font-bold">
                  開発者が集まりApple Vision Proで動作するアプリを作る
                </h2>
                <ul className="list-disc pl-5 mt-4 space-y-2">
                  <li>
                    VisionDevCampは、Apple Vision
                    ProとvisionOS向けのアプリケーション開発に焦点を当てた、非営利の開発者向けイベントです。
                  </li>
                  <li>
                    経験豊富なボランティアチームがApple Vision
                    ProとvisionOSの開発者、デザイナー、起業家、および愛好家の方々をサポートします。
                  </li>
                  <li>
                    イベントは金曜日から日曜日まで開催され、参加者は週末にかけて共同作業を行います。開発プロジェクトには、個人での作業とチームでの作業の両方が含まれます。
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col md:grid md:grid-cols-2 gap-6 items-center mt-12">
              <div className="md:order-2">
                <img
                  src="/largest-vos-community-photo.jpg"
                  alt="VisionDevCamp 2024"
                  className="w-full h-[400px] object-cover rounded-lg"
                />
              </div>

              <div className="md:order-1">
                <h2 className="text-2xl font-bold">
                  世界最大級のvisionOS開発者コミュニティ
                </h2>
                <p className="mt-4">
                  2024年の3月に開催された第1回目のVisionDevCampは世界中からvisionOS開発者が集まりました。
                </p>
                <p className="mt-2">
                  発売直後にも関わらず、100台以上のVision
                  Proと150人以上の開発者が週末に集まりハッカソンを楽しみました。
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center mt-12">
              <div>
                <img
                  src="/volunteer-operation-photo.png"
                  alt="Volunteer Team"
                  className="w-full h-[400px] object-cover rounded-lg"
                />
              </div>
              <div>
                <h2 className="text-2xl font-bold">
                  非営利のボランティアによる運営
                </h2>
                <p className="mt-4">
                  ボランティアによって運営され、スポンサーと参加者の両方によって費用が賄われる非営利イベントです。
                </p>
                <p className="mt-2">
                  参加者が素晴らしいアプリケーションの開発に集中できるよう、スペース、食事、電源、インターネット、ネットワーキングの機会を提供し、参加費をできるだけ低く抑えることを目標としています。
                </p>
              </div>
            </div>

            <a
              href="/history"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-12 border border-black text-black py-2 px-6 rounded-full hover:bg-white transition"
            >
              もっと詳しく知る →
            </a>
          </div>
        </section>

        <section
          id="schedule"
          className="w-full min-h-screen flex flex-col bg-gradient-to-b from-blue-500 to-blue-300 text-white px-4 sm:px-8 py-12"
        >
          <div className="container">
            <h3 className="text-2xl md:text-3xl font-bold text-left mb-6">
              スケジュール
            </h3>

            <div className="space-y-6">
              <ScheduleItem
                dateRange="2025.02.01 - 2025.03.23"
                title="プレイベント"
                linkText="募集中"
                link="#contact"
                dimmed={false}
              />

              <ScheduleItem
                dateRange="2025.03.04"
                title="キックオフイベント"
                subDates={["詳細 Coming Soon"]}
                dimmed={false}
              >
                {/*
        <div className="mt-4 p-4 bg-[#2a294b] text-white rounded-lg">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center">
              <img src="/default_profile_400x400.png" alt="Hobinichi Logo" className="w-16 h-16 sm:w-20 sm:h-20 object-contain mr-4" />
              <h4 className="text-lg sm:text-2xl font-bold tracking-wide">
                VisionDevCamp講演会2025：「ビジョンをクラフトするには？」<br />
                <span className="text-sm sm:text-lg">supported by ほぼ日の學校</span>
              </h4>
            </div>
          </div>
          <p className="text-sm mt-4 text-left mb-4">
            こちらのプレイベントでは未来を創造するクリエイター方をお迎えして、Vision Proと掛け合わせた二重の意味での【ビジョン】について、それを作り出すための方程式について、みんなで学び・考える会を開催します。INTERACTIONシンポジウムのアフター会でもございます。シンポジウム会場の徒歩圏内に位置するほぼ日の學校の収録会場をお借りして現地ならびにオンラインにてお送りいたします。詳細および申し込みは右下ボタンよりconnpassへお進みください。
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <SpeakerCard
        image="/default_profile_400x400.png"
        name="コヤ所長"
        title="株式会社ホットスタッフ・プロモーション"
	description="エグゼクティブプロデューサー"
        bio="バンダイナムコグループ在籍中に『アイドルマスター』、『機動戦士ガンダム戦場の絆』、『釣りスピリッツ』など100以上を開発し『VR ZONE』をプロデュース。現在は日本工学院にて教育革新プロジェクト「Vision Craft」を指揮。"
        socialMediaLink1="https://x.com/example"
        socialMediaLink2="https://github.com/example"
      />
            <SpeakerCard
              image="/default_profile_400x400.png"
              name="野生の男"
              title="スピーカー"
              bio="野生の男は、VR・AR分野での先駆者として知られ、国内外で多くの登壇経験を持つ。..."
            />
            <a
              href="https://visiondevcamp.connpass.com/event/344662/preview/"
              className="mt-4 sm:mt-0 py-2 px-6 bg-white text-black font-bold rounded-full hover:bg-orange-300 transition tracking-wider"
            >
              イベント詳細ページ →
            </a>
          </div>
        </div>
	*/}
              </ScheduleItem>

              <ScheduleItem
                dateRange="2025.03.16"
                title="アイデアソン"
                subDates={["詳細 Coming Soon"]}
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
              <ScheduleItem
                dateRange="2025.04.12 - 13"
                title="ハッカソン本番"
                dimmed={false}
              />
            </div>
          </div>
        </section>
        <section
          id="judges"
          className="w-full flex flex-col bg-pink-500 text-gray-900 px-8 py-12"
        >
          <div className="container">
            <h3 className="text-2xl md:text-3xl font-bold text-left mb-6 text-white">
              審査員
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {judges.map((judge, index) => (
                <div key={index} className="flex flex-col items-center">
                  <JudgeCard
                    image={judge.image}
                    name={judge.name}
                    title={judge.title}
                    description={judge.description}
                    bio={judge.bio}
                    socialMedia={judge.socialMedia}
                  />
                </div>
              ))}
            </div>{" "}
          </div>
        </section>

        <section
          id="sponsors"
          className="w-full flex flex-col bg-white text-gray-900 px-8 py-12"
        >
          <div className="container">
            <h3 className="text-2xl md:text-3xl font-bold text-left mb-6">
              スポンサー
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <SponsorCard
                logo="/unity-logo-black.png"
                name="ユニティ・テクノロジーズ・ジャパン株式会社"
                link="https://unity3d.jp/"
              />
              <SponsorCard
                logo="/styly-logo.png"
                name="株式会社STYLY"
                link="https://styly.inc/"
                className="mt-5"
              />
              <h4 className="text-lg font-bold mb-4">会場協力</h4>
              <SponsorCard
                logo="/lodge-logo.svg"
                name="︎オープンコラボレーションハブ LODGE"
                link="https://www.z-lodge.com/"
                badgeStyle="venue"
              />
            </div>
          </div>

          <div className="flex flex-col items-center mt-16">
            <h4 className="text-xl font-bold text-purple-700 mb-4">
              スポンサー募集中！
            </h4>
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

        <section
          id="tickets"
          className="min-h-screen flex flex-col items-center justify-center bg-purple-600 text-white px-8 py-12"
        >
          <h3 className="text-3xl sm:text-5xl font-bold">チケット購入</h3>
          <p className="text-md sm:text-lg underline mt-4 text-center max-w-3xl">
            2025年2月より募集開始！
          </p>
        </section>

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

      <footer className="bg-gray-800 text-white text-center py-6">
        <p>Copyright ©︎ VisionDevCamp Tokyo 2025 All Rights Reserved.</p>
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

function ScheduleItem({
  date,
  dateRange,
  title,
  linkText,
  link,
  subDates,
  dimmed,
  children,
}) {
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

function SpeakerCard({
  image,
  name,
  title,
  description,
  bio,
  socialMediaLink1,
  socialMediaLink2,
}) {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <>
      {/* Clickable Speaker Profile */}
      <div
        onClick={openModal}
        className="flex items-center cursor-pointer hover:opacity-80 transition"
      >
        <img
          src={image}
          alt={name}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <p className="text-sm">スピーカー</p>
          <p className="text-sm font-bold">{name}</p>
        </div>
      </div>

      {/* Modal with Speaker Details */}
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

              {/* Description Section */}
              {description && (
                <p className="text-sm text-gray-600 text-center mt-1">
                  {description}
                </p>
              )}

              {/* Bio Section (Now Aligned to Start) */}
              {bio && (
                <p className="mt-4 text-gray-800 text-left leading-relaxed">
                  {bio}
                </p>
              )}

              {/* Social Media Links (Optional) */}
              <div className="flex space-x-4 mt-4">
                {socialMediaLink1 && (
                  <a
                    href={socialMediaLink1}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/x-logo.png"
                      alt="X"
                      className="w-6 h-6 hover:opacity-80 transition"
                    />
                  </a>
                )}
                {socialMediaLink2 && (
                  <a
                    href={socialMediaLink2}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/globe-outline.svg"
                      alt="GitHub"
                      className="w-6 h-6 hover:opacity-80 transition"
                    />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function JudgeCard({ image, name, title, description, bio, socialMedia = [] }) {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <>
      <div
        onClick={openModal}
        className="bg-white text-gray-900 rounded-lg shadow-lg p-6 flex flex-col items-center cursor-pointer hover:shadow-2xl transition w-64 h-58 sm:w-72 sm:h-52"
      >
        <img
          src={image}
          alt={name}
          className="w-20 h-20 rounded-full mb-4 object-cover"
        />
        <h4 className="font-bold text-lg hover:underline">{name}</h4>
        <p className={`text-sm ${!description ? "mt-2" : ""}`}>{title}</p>
        {description && (
          <p className="text-sm mt-1 text-center">{description}</p>
        )}
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center"
          onClick={closeModal}
        >
          <div
            className="relative bg-white rounded-lg shadow-lg p-6 w-11/12 max-w-lg"
            onClick={(e) => e.stopPropagation()}
          >
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
              {description && (
                <p className="text-sm text-gray-600 text-center">
                  {description}
                </p>
              )}

              {bio && (
                <p className="mt-4 text-gray-800 text-left leading-relaxed">
                  {bio}
                </p>
              )}

              {socialMedia?.length > 0 && (
                <div className="flex space-x-4 mt-4">
                  {socialMedia.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={link.icon}
                        alt={link.platform}
                        className="w-6 h-6 hover:opacity-80 transition"
                      />
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function SponsorCard({ logo, name, link, badgeStyle }) {
  return (
    <div
      className={`relative rounded-lg p-6 flex flex-col items-center ${
        badgeStyle === "venue" ? "w-full sm:col-span-2" : ""
      }`}
    >
      <img src={logo} alt={name} className="w-32 h-32 object-contain mb-4" />
      <h5 className="font-bold text-lg">{name}</h5>

      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 text-blue-500 underline font-bold"
        >
          公式サイト →
        </a>
      )}
    </div>
  );
}

function NewsItem({ linkText, link, noLinkText }) {
  return (
    <div className="flex items-center space-x-4">
      <div className="text-xl font-bold">›</div>

      <a
        href={link}
        className="text-lg sm:text-xl font-medium underline hover:no-underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        {linkText}
      </a>

      <p className="text-lg sm:text-xl font-medium">{noLinkText}</p>
    </div>
  );
}

const styles = {
  sectionRow: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "40px",
    gap: "20px",
  },
  subtitle: {
    fontSize: "24px",
    marginBottom: "10px",
  },
  imageColumn: {
    flex: "1",
    display: "flex",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    maxWidth: "500px",
    height: "auto",
    borderRadius: "10px",
  },
  textColumn: {
    flex: "1",
    textAlign: "left",
    maxWidth: "650px",
  },
  list: {
    listStyle: "disc",
    paddingLeft: "20px",
    lineHeight: "1.8",
  },
  quote: {
    fontStyle: "italic",
    borderLeft: "4px solid #ddd",
    paddingLeft: "10px",
    marginTop: "20px",
  },
};
