"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";

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
    image: "/shinobu-takahasi.jpg",
    name: "高橋 忍",
    title: "Unity Technologies Japan",
    description: "Solution Architect",
    bio: "日本マイクロソフトで主にテクニカルエバンジェリストとして Windows, Mobile, HoloLens などのアプリケーション開発技術の訴求に努める。現在は Unity Technologies で ソリューションアーキテクトとして産業分野向けに xR関連技術をはじめUnity製品や技術の訴求のために活動しています。",
    socialMedia: [
      { platform: "X", url: "https://x.com/shinoblogavi", icon: "/x-logo.png" },
      {
        platform: "Website",
        url: "https://unity3d.jp/",
        icon: "/globe-outline.svg",
      },
    ],
  },
  {
    image: "/koyama-san-profile-image.png",
    name: "コヤ所長",
    title: "日本工学院",
    description: "Vision Craft エグゼクティブプロデューサー",
    bio: "バンダイナムコグループ在籍中に『アイドルマスター』、『機動戦士ガンダム戦場の絆』、『釣りスピリッツ』など100以上を開発し『VR ZONE』をプロデュース。現在は日本工学院にて教育革新プロジェクト「Vision Craft」を指揮。",
    socialMedia: [
      { platform: "X", url: "https://x.com/mayanmoyan", icon: "/x-logo.png" },
      {
        platform: "Website",
        url: "https://bandainamco-am.co.jp/others/vrzone-portal/",
        icon: "/globe-outline.svg",
      },
    ],
  },
  {
    image: "/HEAVENchan.png",
    name: "諸星一行",
    title: "ONE SHOT STAR",
    description: "LODGE XR Talk",
    bio: "2024-2025 Microsoft MVP / WebXRとvisionOS推し! / ︎オープンコラボレーションハブ LODGE を会場として、XRトレンドウォッチ&体験会をテーマとした「LODGE XR Talk」を毎月開催しています。",
    socialMedia: [
      { platform: "X", url: "https://x.com/ikkou", icon: "/x-logo.png" },
      {
        platform: "Website",
        url: "https://mvp.microsoft.com/ja-JP/mvp/profile/079f69c6-5c01-eb11-a815-000d3a8ccaf5",
        icon: "/globe-outline.svg",
      },
    ],
  },
  {
    image: "/daigo-ushijima-image.png",
    name: "牛島大悟",
    title: "東京藝術大学",
    description: "先端芸術表現科 芸術情報センター",
    bio: "メディアアートやサウンドアートを専門とするアーティスト／研究者であり、2004年の文化庁メディア芸術祭において審査委員会推薦作品に選出されるなど初期から注目を集めた後、韓国や中国など国内外の展覧会で作品発表を重ねました。教育面では中国美術学院で講師を務めた後、現在に至るまで東京藝術大学で教育・研究に従事しております。",
    socialMedia: [
      {
        platform: "Website",
        url: "https://mvp.microsoft.com/ja-JP/mvp/profile/079f69c6-5c01-eb11-a815-000d3a8ccaf5",
        icon: "/globe-outline.svg",
      },
    ],
  },
];

const speakers = [
  {
    image: "/raven-zachary.jpg",
    name: "Raven Zachary",
    title: "ARound",
    description: "最高執行責任者(COO)",
    bio: "Raven ZacharyはARoundの最高執行責任者(COO)であり、ライブイベント向けの拡張現実体験に注力しています。2015年から空間コンピューティングの分野で、また2007年からApple関連技術に携わってきました。Apple Vision ProやvisionOSに関するAWEでのVision Workshopでの活動、そしてVisionDevCampの共同設立者としての取り組みに加え、彼はPortland Virtual Reality Meetupの共同設立者およびPortland HoloLens Meetupの創設者でもあります。Ravenは、ウェアラブル端末、スマートフォン、タブレットを用いて企業向けのカスタム拡張現実アプリケーションを制作するリーダーであるObject TheoryがStagwellに買収されたことで、ARoundに参加しました。",
    socialMedia: [
      {
        platform: "LinkedIn",
        url: "https://www.linkedin.com/in/ravenzachary/",
        icon: "/linkedin-logo.png",
      },
    ],
  },
  {
    image: "/degly.png",
    name: "Degly Sebastian Pava Pava",
    title: "Senior XR Engineer | Creator",
    description: "",
    bio: "Degly Sebastian Pava Pavaは、誰もが楽しめるARおよびVR体験の実現に向けて世界と協働しています。VisionProなどのプラットフォームを通じたXR体験の提供や、UnityおよびAR/VR技術を駆使してビジョンを没入型の現実に変換する取り組みを行っています。工学、コンピュータサイエンス、ライティング＆XRの三つの修士号と、光学、画像、コンピュータビジョン、マルチメディアの修士号(MSc)を取得しており、常に限界に挑戦し、顧客とのエンゲージメント向上と革新的な体験の提供に取り組んでいます。Unity、C#、C++に精通し、シェーダー、アニメーション、UI/UXデザインの専門知識を有し、英語、フランス語、日本語、スペイン語の多言語に対応しています。",
    socialMedia: [
      {
        platform: "LinkedIn",
        url: "https://www.linkedin.com/in/deglypava/",
        icon: "/linkedin-logo.png",
      },
    ],
  },
  {
    image: "/minji-lee.jpeg",
    name: "Minji Lee",
    title: "Apple Developer Academy @ POSTECH",
    description: "テクニカルメンター",
    bio: "Minji Leeは以前、AR企業でiOS開発者として勤務していました。現在はvisionOSの多様な側面を探求しており、韓国や海外の複数の会議でこのテーマについて講演を行っています。また、Udemyで教育コンテンツを公開し、Appleの空間コンピューティングに興味を持つ開発者やデザイナー向けのコミュニティを韓国で運営しています。これらの継続的な取り組みを通じ、得た知識や洞察をより広いコミュニティと共有することに努めています。",
    socialMedia: [
      {
        platform: "LinkedIn",
        url: "https://www.linkedin.com/in/minjimindi/",
        icon: "/linkedin-logo.png",
      },
    ],
  },
  {
    image: "/oliver-photo.png",
    name: "Oliver Weidlich",
    title: "Contxtual",
    description: "デザイン＆イノベーション ディレクター",
    bio: "OliverはUX分野で25年以上の経験を持ち、過去8年間にわたって拡張現実および空間コンピューティングの研究とデザインに取り組んできました。彼の会社Contxtualは、拡張現実ヘッドセットを用いたさまざまなプロトタイプを開発し、人々がどのように空間コンピューティングを活用するかを実験しています。同社のアプリ「Day Ahead」は、カレンダー情報を一目で確認できる情報視覚化ツールであり、昨年2月のApple Vision Pro発表日にApp Storeで公開されました。また、シドニー工科大学のApple Foundation Programの業界メンターとして、Apple Vision Pro上でのvisionOSデザインについて学生に教えています。",
    socialMedia: [
      {
        platform: "LinkedIn",
        url: "https://www.linkedin.com/in/oliverw/",
        icon: "/linkedin-logo.png",
      },
    ],
  },
  {
    image: "/mikaela-caron.jpg",
    name: "Mikaela Caron",
    title: "iOSエンジニア",
    description: "",
    bio: "Mikaela Caronは独立したiOSエンジニアで、ソーシャルメディアを通じてiOS開発、公開アプリの構築、フリーランスに関する知識を積極的に発信しています。彼女は、人々が会議で他者と繋がる手助けをする個人開発アプリ「Fruitful」の開発を続けながら、可能な限り多くの旅行も楽しんでいます。また、iOSDevHappyHourのオーガナイザーとしてコミュニティへの貢献にも力を入れています。",
    socialMedia: [
      {
        platform: "Website",
        url: "https://mikaelacaron.com/links/",
        icon: "/globe-outline.svg",
      },
    ],
  },
  {
    image: "/warren-stringer.jpg",
    name: "Warren Stringer",
    title: "DeepMuse",
    description: "創業者",
    bio: "Warren Stringerは、かつてコンテンツ配信の基礎を築いた先駆者であり、現在は没入型コンテンツと新たな関わり方を模索しています。",
    socialMedia: [
      {
        platform: "LinkedIn",
        url: "https://www.linkedin.com/in/warrenstringer/",
        icon: "/linkedin-logo.png",
      },
    ],
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

      <main className="mt-16 sm:mt-20">
        <section
          id="top"
          className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-red-900 to-black text-white px-8 py-12 overflow-hidden"
        >
          {/* Hero Image - Full width banner */}
          <div className="absolute inset-0 w-full h-full z-0">
            <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
            <img
              src="/visiondevcamp2024.jpg"
              alt="VisionDevCamp 2024 Event"
              className="w-full h-full object-cover object-center sm:object-top"
            />
          </div>

          {/* Content Overlay */}
          <div className="relative z-20 text-center w-full max-w-6xl mx-auto py-16">
            <div className="inline-block mb-6 p-2 bg-red-500 bg-opacity-90 rounded-lg transform -rotate-2">
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
                VisionDevCamp <span className="text-black">Tokyo</span> 2025
              </h1>
            </div>

            <div className="mt-6 bg-black bg-opacity-70 p-5 rounded-xl shadow-xl">
              <a
                href="https://visiondevcamp.org/"
                className="text-xl sm:text-2xl font-medium text-white hover:text-red-300 transition-colors"
              >
                シリコンバレーの2007年より続く歴史あるハッカソンが初めての日本開催！
              </a>

              <p className="text-xl sm:text-2xl mt-4 text-white font-medium">
                個人でもチームでも、共にVision Proのアイデアを形にしよう！
              </p>

              <div className="mt-8 text-center">
                <p className="text-4xl sm:text-5xl font-bold text-red-400">
                  2025年4月11日
                  <span className="text-2xl sm:text-3xl">（金）</span>～13日
                  <span className="text-2xl sm:text-3xl">（日）</span>
                </p>
              </div>

              <div className="mt-6 text-center">
                <p className="text-lg sm:text-xl font-bold">
                  会場：
                  <span className="underline decoration-[1px]">
                    <a
                      href="https://www.z-lodge.com/#space"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-red-300 transition-colors"
                    >
                      {" ︎オープンコラボレーションハブ LODGE "}
                    </a>
                  </span>
                  <span className="ml-1">& Online</span>
                </p>
              </div>

              <div className="mt-10">
                <a
                  href="https://lu.ma/wsqwzm4s"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-full transform transition-transform hover:scale-105 shadow-lg"
                >
                  参加登録はこちら →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Overview Section - New */}
        <section
          id="overview"
          className="w-full gradient-primary py-20 text-white"
        >
          <div className="container mx-auto px-8">
            <div className="max-w-5xl mx-auto">
              <div className="relative mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white relative inline-block">
                  VisionDevCamp Tokyo とは
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-accent"></span>
                </h2>
              </div>

              <div className="flex flex-col lg:flex-row gap-12 items-center">
                <div className="lg:w-1/2">
                  <div className="rounded-xl overflow-hidden shadow-2xl transform transition-transform hover:scale-105 duration-500 shadow-glow">
                    <img
                      src="/visiondevcamp2024-2.jpeg"
                      alt="VisionDevCamp 2024の参加者"
                      className="w-full object-cover"
                    />
                  </div>
                </div>

                <div className="lg:w-1/2">
                  <p className="text-xl leading-relaxed mb-6">
                    VisionDevCampは、Apple Vision
                    ProとvisionOS向けのアプリケーション開発に焦点を当てた、開発者、デザイナー、起業家が集まる非営利のハッカソンイベントです。
                  </p>

                  <p className="text-xl leading-relaxed mb-6">
                    2007年にシリコンバレーで始まり、今回が初の日本開催となります。週末の3日間、参加者はチームを組んでアイデアを形にし、最終日には審査員の前でデモンストレーションを行います。
                  </p>

                  <p className="text-xl leading-relaxed">
                    経験豊富なボランティアチームが皆さまの開発をサポートし、食事、電源、インターネット、ネットワーキングの機会などを提供いたします。
                  </p>

                  <div className="mt-8 flex">
                    <a
                      href="https://lu.ma/wsqwzm4s"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-red-500 hover:bg-opacity-90 text-white font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105 shadow-glow-accent pulse-shadow"
                    >
                      参加する →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="uniqueness"
          className="w-full min-h-screen py-20 gradient-secondary text-white"
        >
          <div className="container">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-12 relative">
              特徴
              <span className="absolute -bottom-2 left-0 w-20 h-1 bg-vibrant"></span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div className="transform transition-transform hover:scale-105 duration-300">
                <div className="overflow-hidden rounded-xl shadow-xl shadow-glow">
                  <img
                    src="/visiondevcamp2024.jpg"
                    alt="VisionDevCamp Group"
                    className="w-full h-[400px] object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl shadow-lg">
                <h2 className="text-2xl font-bold text-white">
                  開発者が集まりApple Vision Proで動作するアプリを作る
                </h2>
                <ul className="list-disc pl-5 mt-6 space-y-4 text-white">
                  <li>
                    VisionDevCampは、Apple Vision
                    ProとvisionOS向けのアプリケーション開発に焦点を当てた、非営利のハッカソンイベントです。
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

            <div className="flex flex-col md:grid md:grid-cols-2 gap-10 items-center mt-20">
              <div className="md:order-2 transform transition-transform hover:scale-105 duration-300">
                <div className="overflow-hidden rounded-xl shadow-xl relative shadow-glow">
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/70 to-transparent z-10"></div>
                  <img
                    src="/largest-vos-community-photo.jpg"
                    alt="VisionDevCamp 2024"
                    className="w-full h-[400px] object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>

              <div className="md:order-1 bg-white/10 backdrop-blur-sm p-8 rounded-xl shadow-lg">
                <h2 className="text-2xl font-bold text-white">
                  世界最大級のvisionOS開発者コミュニティ
                </h2>
                <p className="mt-6 text-white">
                  2024年の3月に開催された第1回目のVisionDevCampは世界中からvisionOS開発者が集まりました。
                </p>
                <p className="mt-4 text-white">
                  発売直後にも関わらず、100台以上のVision
                  Proと同数の開発者が週末に集まりハッカソンを楽しみました。
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mt-20">
              <div className="transform transition-transform hover:scale-105 duration-300">
                <div className="overflow-hidden rounded-xl shadow-xl shadow-glow">
                  <img
                    src="/volunteer-operation-photo.png"
                    alt="Volunteer Team"
                    className="w-full h-[400px] object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl shadow-lg">
                <h2 className="text-2xl font-bold text-white">
                  非営利のボランティアによる運営
                </h2>
                <p className="mt-6 text-white">
                  ボランティアによって運営され、スポンサーと参加者の両方によって費用が賄われる非営利イベントです。
                </p>
                <p className="mt-4 text-white">
                  参加者が素晴らしいアプリケーションの開発に集中できるよう、スペース、食事、電源、インターネット、ネットワーキングの機会を提供し、参加費をできるだけ低く抑えることを目標としています。
                </p>
              </div>
            </div>

            <div className="mt-16 text-center">
              <Link
                href="/history"
                className="inline-block text-primary bg-light py-3 px-8 rounded-full hover:bg-white/90 transition shadow-lg font-bold transform hover:scale-105 duration-300 pulse-shadow"
              >
                もっと詳しく知る →
              </Link>
            </div>
          </div>
        </section>

        {/* Venues Section - New */}
        <section
          id="venues"
          className="w-full py-20 gradient-accent text-white"
        >
          <div className="container mx-auto px-8">
            <div className="max-w-6xl mx-auto">
              <div className="relative mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white relative inline-block">
                  開催会場
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-vibrant"></span>
                </h2>
              </div>

              {/* Main Venues */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
                {/* Tokyo Venue */}
                <div className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl shadow-glow transition-transform hover:scale-105 duration-300">
                  <div className="h-64 overflow-hidden">
                    <img
                      src="/lodge.png"
                      alt="LODGE会場"
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                      <h3 className="text-2xl font-bold">メイン会場（東京）</h3>
                    </div>
                    <h4 className="text-xl font-semibold mb-3">
                      オープンコラボレーションハブ LODGE
                    </h4>
                    <p className="text-gray-300 mb-4">
                      最新の設備が整った開放的な空間で、他の開発者と対面で交流しながら開発に取り組めます。食事や電源、高速インターネットを完備し、開発に集中できる環境を提供します。
                    </p>
                    <div className="flex justify-between items-center mt-4">
                      <span className="text-sm text-gray-400"></span>
                      <a
                        href="https://www.z-lodge.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-red-300 font-bold"
                      >
                        詳細 →
                      </a>
                    </div>
                  </div>
                </div>

                {/* Online Venue */}
                <div className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl shadow-glow transition-transform hover:scale-105 duration-300">
                  <div className="h-64 overflow-hidden flex flex-col">
                    <img
                      src="/online_venue.png"
                      alt="オンライン会場"
                      className="w-full h-1/2 object-cover hover:scale-110 transition-transform duration-500"
                    />
                    <img
                      src="/online_venue2.png"
                      alt="オンライン会場"
                      className="w-full h-1/2 object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-3 h-3 bg-blue-500 rounded-full mr-2 animate-pulse"></div>
                      <h3 className="text-2xl font-bold">オンライン会場</h3>
                    </div>
                    <h4 className="text-xl font-semibold mb-3">DevCamp</h4>
                    <p className="text-gray-300 mb-4">
                      遠方からでも参加可能なオンライン会場では、場所を問わず他の参加者と協力して開発を進めることができます。
                    </p>
                    <div className="flex justify-between items-center mt-4">
                      <span className="text-sm text-gray-400"></span>
                      <a
                        href="https://github.com/visiondevcamptokyo/devcamp"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-red-300 font-bold"
                      >
                        詳細 →
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Satellite Venue */}
              <div className="max-w-2xl mx-auto">
                <div className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl shadow-glow">
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                      <h3 className="text-2xl font-bold">
                        サテライト会場（福岡）
                      </h3>
                    </div>
                    <h4 className="text-xl font-semibold mb-3">EngineerCafe</h4>
                    <p className="text-gray-300 mb-4">
                      有志のボランティアによって運営される福岡サテライト会場。メイン会場と同様に開発環境を整え、九州地方からの参加者をサポートします。
                    </p>
                    <div className="flex justify-between items-center mt-4">
                      <span className="text-sm text-gray-400"></span>
                      <a
                        href="https://engineercafe.connpass.com/event/348799/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-red-300 font-bold"
                      >
                        詳細 →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="schedule"
          className="w-full min-h-screen flex flex-col gradient-primary text-white px-4 sm:px-8 py-20 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-secondary rounded-full filter blur-3xl opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary-dark rounded-full filter blur-3xl opacity-20 transform -translate-x-1/2 translate-y-1/2"></div>

          <div className="container relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 relative">
              スケジュール
              <span className="absolute -bottom-2 left-0 w-20 h-1 bg-vibrant"></span>
            </h3>

            <div className="mb-16 mt-10">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-lg">
                <h2 className="text-2xl font-bold text-white mb-6 relative inline-block">
                  メインイベント：VisionDevCamp Tokyo 2025
                  <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-accent"></span>
                </h2>

                <div className="mb-8">
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-vibrant rounded-full animate-pulse mr-3"></div>
                    <p className="text-2xl font-bold text-white">
                      2025年4月11日（金）- 13日（日）
                    </p>
                  </div>
                  <p className="text-lg text-white ml-7 mt-2">
                    会場: オープンコラボレーションハブ LODGE & オンライン
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
                  {/* Day 1 */}
                  <div className="bg-black/50 backdrop-blur-sm p-5 rounded-xl shadow-lg border-l-4 border-accent">
                    <h4 className="text-xl font-bold mb-3 flex items-center">
                      <span className="w-3 h-3 bg-accent rounded-full mr-2 animate-pulse"></span>
                      DAY 1: 4月11日(金)
                    </h4>
                    <h5 className="font-semibold mb-3 text-vibrant">
                      チームビルディング
                    </h5>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <tbody>
                          <tr className="border-b border-white/10">
                            <td className="py-2 pr-3 whitespace-nowrap font-semibold">
                              18:30
                            </td>
                            <td className="py-2">
                              <div className="font-medium">開場</div>
                              <div className="text-white/70 text-xs">
                                参加者受付開始
                              </div>
                            </td>
                          </tr>
                          <tr className="border-b border-white/10">
                            <td className="py-2 pr-3 whitespace-nowrap font-semibold">
                              19:00-19:15
                            </td>
                            <td className="py-2">
                              <div className="font-medium">オープニング</div>
                              <div className="text-white/70 text-xs">
                                オーガナイザーからの歓迎挨拶
                              </div>
                            </td>
                          </tr>
                          <tr className="border-b border-white/10">
                            <td className="py-2 pr-3 whitespace-nowrap font-semibold">
                              19:15-19:45
                            </td>
                            <td className="py-2">
                              <div className="font-medium">
                                ショートキーノート
                              </div>
                              <div className="text-white/70 text-xs">
                                スポンサー企業からのショートキーノート
                              </div>
                            </td>
                          </tr>
                          <tr className="border-b border-white/10">
                            <td className="py-2 pr-3 whitespace-nowrap font-semibold">
                              19:45-20:30
                            </td>
                            <td className="py-2">
                              <div className="font-medium">自己紹介</div>
                              <div className="text-white/70 text-xs">
                                参加者が開発したいアイデアを1分程度で簡易ピッチ
                              </div>
                            </td>
                          </tr>
                          <tr className="border-b border-white/10">
                            <td className="py-2 pr-3 whitespace-nowrap font-semibold">
                              20:30-21:30
                            </td>
                            <td className="py-2">
                              <div className="font-medium">
                                チーム編成(食事付き交流会)
                              </div>
                              <div className="text-white/70 text-xs">
                                夕食
                                <br />
                                立食形式で参加者同士が交流
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="py-2 pr-3 whitespace-nowrap font-semibold">
                              22:00
                            </td>
                            <td className="py-2">
                              <div className="font-medium">閉場</div>
                              <div className="text-white/70 text-xs">
                                初日終了
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Day 2 */}
                  <div className="bg-black/50 backdrop-blur-sm p-5 rounded-xl shadow-lg border-l-4 border-secondary">
                    <h4 className="text-xl font-bold mb-3 flex items-center">
                      <span className="w-3 h-3 bg-secondary rounded-full mr-2 animate-pulse"></span>
                      DAY 2: 4月12日(土)
                    </h4>
                    <h5 className="font-semibold mb-3 text-vibrant">開発</h5>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <tbody>
                          <tr className="border-b border-white/10">
                            <td className="py-2 pr-3 whitespace-nowrap font-semibold">
                              9:00~
                            </td>
                            <td className="py-2">
                              <div className="font-medium">朝食</div>
                              <div className="text-white/70 text-xs">
                                参加者同士やスポンサー企業との交流
                              </div>
                            </td>
                          </tr>
                          <tr className="border-b border-white/10">
                            <td className="py-2 pr-3 whitespace-nowrap font-semibold">
                              9:30~
                            </td>
                            <td className="py-2">
                              <div className="font-medium">
                                アイデアの共有&フィードバック
                              </div>
                              <div className="text-white/70 text-xs">
                                チームごとに「現状何を作っているか」を1分程度で共有
                              </div>
                            </td>
                          </tr>
                          <tr className="border-b border-white/10">
                            <td className="py-2 pr-3 whitespace-nowrap font-semibold">
                              10:00~
                            </td>
                            <td className="py-2">
                              <div className="font-medium">
                                スピーカーセッション
                              </div>
                              <div className="text-white/70 text-xs">
                                ゲストスピーカーによるトークセッション
                              </div>
                            </td>
                          </tr>
                          <tr className="border-b border-white/10">
                            <td className="py-2 pr-3 whitespace-nowrap font-semibold">
                              10:30~22:00
                            </td>
                            <td className="py-2">
                              <div className="font-medium">開発作業時間</div>
                              <div className="text-white/70 text-xs">
                                13:00~ 昼食
                                <br />
                                19:00~ 夕食
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="py-2 pr-3 whitespace-nowrap font-semibold">
                              22:00
                            </td>
                            <td className="py-2">
                              <div className="font-medium">閉場</div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Day 3 */}
                  <div className="bg-black/50 backdrop-blur-sm p-5 rounded-xl shadow-lg border-l-4 border-success">
                    <h4 className="text-xl font-bold mb-3 flex items-center">
                      <span className="w-3 h-3 bg-success rounded-full mr-2 animate-pulse"></span>
                      DAY 3: 4月13日(日)
                    </h4>
                    <h5 className="font-semibold mb-3 text-vibrant">
                      デモ & 審査
                    </h5>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <tbody>
                          <tr className="border-b border-white/10">
                            <td className="py-2 pr-3 whitespace-nowrap font-semibold">
                              9:00~
                            </td>
                            <td className="py-2">
                              <div className="font-medium">朝食</div>
                              <div className="text-white/70 text-xs">
                                参加者同士・スポンサー企業エンジニアとの交流
                              </div>
                            </td>
                          </tr>
                          <tr className="border-b border-white/10">
                            <td className="py-2 pr-3 whitespace-nowrap font-semibold">
                              9:30~15:00
                            </td>
                            <td className="py-2">
                              <div className="font-medium">開発作業時間</div>
                              <div className="text-white/70 text-xs">
                                13:00~ 昼食
                              </div>
                            </td>
                          </tr>
                          <tr className="border-b border-white/10">
                            <td className="py-2 pr-3 whitespace-nowrap font-semibold">
                              15:00~17:00
                            </td>
                            <td className="py-2">
                              <div className="font-medium">最終成果発表</div>
                              <div className="text-white/70 text-xs">
                                1チーム3~5分で発表
                              </div>
                            </td>
                          </tr>
                          <tr className="border-b border-white/10">
                            <td className="py-2 pr-3 whitespace-nowrap font-semibold">
                              17:00~18:00
                            </td>
                            <td className="py-2">
                              <div className="font-medium">審査</div>
                            </td>
                          </tr>
                          <tr className="border-b border-white/10">
                            <td className="py-2 pr-3 whitespace-nowrap font-semibold">
                              18:00~
                            </td>
                            <td className="py-2">
                              <div className="font-medium">結果発表</div>
                            </td>
                          </tr>
                          <tr className="border-b border-white/10">
                            <td className="py-2 pr-3 whitespace-nowrap font-semibold">
                              19:00~
                            </td>
                            <td className="py-2">
                              <div className="font-medium">懇親会</div>
                              <div className="text-white/70 text-xs">夕食</div>
                            </td>
                          </tr>
                          <tr>
                            <td className="py-2 pr-3 whitespace-nowrap font-semibold">
                              21:00
                            </td>
                            <td className="py-2">
                              <div className="font-medium">閉場</div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold text-white mb-6">
                プレイベント{" "}
                <span className="text-white/70 text-base font-normal">
                  (終了)
                </span>
              </h4>

              <p className="text-white mb-6">
                ※プレイベントへの参加はハッカソン参加の必須条件ではありません。どなたでもハッカソン本編にご参加いただけます。
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <a
                  href="https://visiondevcamp.connpass.com/event/344662/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-gray-500/30 backdrop-blur-sm text-white/70 rounded-xl shadow-lg p-4 border-l-4 border-gray-400 hover:bg-gray-500/40 transition-colors"
                >
                  <h5 className="text-lg font-semibold mb-2">
                    講演会 <span className="text-sm font-normal">(終了)</span>
                  </h5>
                  <p className="text-sm">
                    VisionDevCamp講演会: ビジョンをクラフトするには？
                  </p>
                  <div className="text-xs mt-2">2025.03.04</div>
                </a>

                <a
                  href="https://lu.ma/7zomrwt6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-gray-500/30 backdrop-blur-sm text-white/70 rounded-xl shadow-lg p-4 border-l-4 border-gray-400 hover:bg-gray-500/40 transition-colors"
                >
                  <h5 className="text-lg font-semibold mb-2">
                    アイデアソン{" "}
                    <span className="text-sm font-normal">(終了)</span>
                  </h5>
                  <p className="text-sm">
                    空間コンピューティング×AIで創る次世代ライフスタイル
                  </p>
                  <div className="text-xs mt-2">2025.03.16</div>
                </a>

                <a
                  href="https://melting-hack.connpass.com/event/347737/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-gray-500/30 backdrop-blur-sm text-white/70 rounded-xl shadow-lg p-4 border-l-4 border-gray-400 hover:bg-gray-500/40 transition-colors"
                >
                  <h5 className="text-lg font-semibold mb-2">
                    環境構築セッション{" "}
                    <span className="text-sm font-normal">(終了)</span>
                  </h5>
                  <p className="text-sm">Vision Pro開発環境構築イベント</p>
                  <div className="text-xs mt-2">2025.03.20</div>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section
          id="judges"
          className="w-full flex flex-col gradient-secondary text-white px-8 py-20 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-64 h-64 bg-accent rounded-full filter blur-3xl opacity-20 transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-vibrant rounded-full filter blur-3xl opacity-20 transform translate-x-1/2 translate-y-1/2"></div>

          <div className="container relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-12 relative">
              審査員
              <span className="absolute -bottom-2 left-0 w-20 h-1 bg-vibrant"></span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {judges.map((judge, index) => (
                <div key={index} className="mb-10">
                  <JudgeCard {...judge} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="speakers"
          className="w-full flex flex-col gradient-accent text-white px-8 py-20 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary rounded-full filter blur-3xl opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-vibrant rounded-full filter blur-3xl opacity-20 transform -translate-x-1/2 translate-y-1/2"></div>

          <div className="container relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-12 relative">
              スピーカー
              <span className="absolute -bottom-2 left-0 w-20 h-1 bg-vibrant"></span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {speakers.map((speaker, index) => (
                <div key={index} className="mb-10">
                  <SpeakerCard {...speaker} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="sponsors"
          className="w-full gradient-secondary text-white px-8 py-20 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-vibrant rounded-full filter blur-3xl opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary rounded-full filter blur-3xl opacity-20 transform -translate-x-1/2 translate-y-1/2"></div>

          <div className="container relative z-10 mx-auto">
            <div className="max-w-6xl mx-auto">
              <div className="relative mb-12">
                <h3 className="text-3xl md:text-4xl font-bold text-white relative inline-block">
                  スポンサー
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-vibrant"></span>
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <SponsorCard
                  logo="/unity-logo-black.png"
                  name="ユニティ・テクノロジーズ・ジャパン株式会社"
                  link="https://unity3d.jp/"
                />
                <SponsorCard
                  logo="/styly-logo.png"
                  name="株式会社STYLY"
                  link="https://styly.inc/"
                />
                <SponsorCard
                  logo="/beautiful-things-logo.png"
                  name="︎Beautiful Things"
                  link="https://www.beautifulthings.xyz/"
                />
                <SponsorCard
                  logo="/Reinforz-Insight-logo.png"
                  name="Reinforz Insight"
                  link="https://reinforz.co.jp/bizmedia/"
                />
              </div>

              <h4 className="text-xl font-bold mt-16 mb-8 text-white">
                会場協力
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <SponsorCard
                  logo="/lodge-logo.svg"
                  name="︎オープンコラボレーションハブ LODGE"
                  link="https://www.z-lodge.com/"
                />
              </div>

              <h4 className="text-xl font-bold mt-16 mb-8 text-white">
                撮影協力
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <SponsorCard
                  logo="/crossdevice-logo.png"
                  name="︎株式会社クロスデバイス"
                  link="https://www.crossdevice.co.jp/"
                />
                <SponsorCard
                  logo="/techworld-logo.jpg"
                  name="︎TECH WORLD"
                  link="https://www.youtube.com/@TECHWORLD111"
                />
              </div>

              <h4 className="text-xl font-bold mt-16 mb-8 text-white">
                コミュニティ・パートナー
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                <SponsorCard
                  logo="/iwaken-lab-logo.png"
                  name="︎Iwaken Lab."
                  link="https://x.com/iwakenlab"
                />
                <SponsorCard
                  logo="/kwdc25-logo.png"
                  name="︎KWDC"
                  link="https://kwdc.dev/"
                />
                <SponsorCard
                  logo="/awe-asia-logo.png"
                  name="︎AWE Asia"
                  link="https://www.aweasia.com/"
                />
                <SponsorCard
                  logo="/xr-tokyo-logo.png"
                  name="︎XR Tokyo"
                  link="https://www.xrtokyo.com/"
                />
              </div>

              <div className="flex flex-col items-center mt-16">
                <h4 className="text-xl font-bold text-white mb-6">
                  スポンサー募集中！
                </h4>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSeCHHuGLjmH_vxy6apuSrb9fIgeTaIq75-QQeQ21Pf4Y3JVRQ/viewform?usp=dialog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-vibrant hover:bg-white text-primary-dark font-bold py-3 px-8 rounded-full transform hover:scale-105 duration-300 shadow-glow-accent pulse-shadow"
                >
                  スポンサー応募フォーム →
                </a>
              </div>
            </div>
          </div>
        </section>

        <section
          id="tickets"
          className="min-h-screen flex flex-col items-center justify-center bg-purple-600 text-white px-8 py-12"
        >
          <h3 className="text-3xl sm:text-5xl font-bold mb-4">参加チケット</h3>

          <a
            href="https://lu.ma/wsqwzm4s"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black bg-red-500 text-white font-bold py-2 px-6 rounded-full hover:bg-orange-300 transition"
          >
            購入はこちら →
          </a>
        </section>

        <section
          id="contact"
          className="w-full gradient-primary text-white px-8 py-20 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-secondary rounded-full filter blur-3xl opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent rounded-full filter blur-3xl opacity-20 transform -translate-x-1/2 translate-y-1/2"></div>

          <div className="container mx-auto max-w-4xl relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-12 relative inline-block">
              お問い合わせ
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-vibrant"></span>
            </h3>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-bold text-white mb-4">
                    お問い合わせ先
                  </h4>
                  <p className="text-white mb-6">
                    VisionDevCamp
                    Tokyoに関するお問い合わせは以下のフォームからお願いします。
                  </p>
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSf3lzhgMm-RZ_YexT_8lEzDx8W8N-B2aeZd_gdadvGdNhaNow/viewform?usp=dialog"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-vibrant hover:bg-white text-primary-dark font-bold py-2 px-6 rounded-full transition"
                  >
                    お問い合わせフォーム →
                  </a>

                  <div className="mt-8">
                    <h5 className="font-bold text-white mb-2">
                      ソーシャルメディア
                    </h5>
                    <div className="flex space-x-4 mt-4">
                      <a
                        href="https://x.com/devcamptokyo"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/30 p-3 rounded-full hover:bg-accent transition-colors shadow-md"
                      >
                        <img
                          src="/x-logo.png"
                          alt="Twitter"
                          className="w-7 h-7"
                        />
                      </a>
                      <a
                        href="https://discord.gg/t5X6KZruQQ"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/30 p-3 rounded-full hover:bg-accent transition-colors shadow-md"
                      >
                        <img
                          src="/discord-logo.svg"
                          alt="Discord"
                          className="w-7 h-7 filter brightness-0 invert"
                        />
                      </a>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-white mb-4">
                    スポンサー申し込み
                  </h4>
                  <p className="text-white mb-6">
                    VisionDevCamp
                    Tokyoのスポンサーとしてサポートいただける企業様は、以下のフォームからお申し込みください。
                  </p>
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSeCHHuGLjmH_vxy6apuSrb9fIgeTaIq75-QQeQ21Pf4Y3JVRQ/viewform?usp=dialog"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-sm sm:text-base py-2 px-4 sm:py-3 sm:px-6 rounded-full shadow-lg transform transition hover:scale-105 whitespace-nowrap"
                  >
                    スポンサー申し込みフォーム →
                  </a>

                  <div className="mt-8">
                    <h5 className="font-bold text-white mb-2">主催</h5>
                    <p className="text-white">VisionDevCamp Tokyo</p>
                  </div>
                </div>
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
                  className="w-10 h-10 mr-3 object-fit rounded-full"
                />
                <div className="text-xl font-bold">
                  VisionDevCamp <span className="text-red-500">Tokyo</span> 2025
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-6">
                <Link
                  href="#top"
                  className="hover:text-red-400 transition-colors"
                >
                  トップ
                </Link>
                <Link
                  href="#overview"
                  className="hover:text-red-400 transition-colors"
                >
                  概要
                </Link>
                <Link
                  href="#uniqueness"
                  className="hover:text-red-400 transition-colors"
                >
                  特徴
                </Link>
                <Link
                  href="#venues"
                  className="hover:text-red-400 transition-colors"
                >
                  会場
                </Link>
                <Link
                  href="#schedule"
                  className="hover:text-red-400 transition-colors"
                >
                  スケジュール
                </Link>
                <Link
                  href="#judges"
                  className="hover:text-red-400 transition-colors"
                >
                  審査員
                </Link>
                <Link
                  href="#speakers"
                  className="hover:text-red-400 transition-colors"
                >
                  スピーカー
                </Link>
                <Link
                  href="#sponsors"
                  className="hover:text-red-400 transition-colors"
                >
                  スポンサー
                </Link>
                <Link
                  href="#contact"
                  className="hover:text-red-400 transition-colors"
                >
                  お問い合わせ
                </Link>
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
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("ja");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentLang(window.location.pathname.startsWith("/en") ? "en" : "ja");
    }
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleLanguage = () => {
    const newLang = currentLang === "ja" ? "en" : "ja";
    const newUrl =
      newLang === "ja"
        ? "https://www.vdctokyo.org/"
        : "https://www.vdctokyo.org/en";
    window.location.href = newUrl;
  };

  return (
    <header className="fixed top-0 w-full bg-white shadow-md z-50">
      <nav className="flex justify-between items-center px-4 md:px-8 py-3 md:py-4">
        {/* Logo and Title */}
        <div className="flex items-center">
          <img
            src="/visiondevcamp-logo-only.png"
            alt="VisionDevCamp Logo"
            className="w-8 h-8 md:w-10 md:h-10 mr-2 object-contain"
          />
          <div className="text-xl font-bold text-black flex items-center">
            VisionDevCamp
            <span className="text-xl font-bold text-red-500 pl-1">Tokyo</span>
          </div>
        </div>

        <div className="flex">
          {/* Hamburger Icon */}
          <button
            onClick={toggleMenu}
            className="block md:hidden text-2xl text-black focus:outline-none mt-[1px]"
          >
            {menuOpen ? "✕" : "☰"}
          </button>

          {/* Language Toggle (Mobile) */}
          <div className="sm:block md:hidden pl-4 pt-3">
            <button
              onClick={toggleLanguage}
              className="hover:opacity-75 transition"
            >
              <Image
                src="/language.svg"
                alt="Language Toggle"
                width={22}
                height={22}
              />
            </button>
          </div>
        </div>

        {/* Mobile/Tablet Navigation */}
        {menuOpen && (
          <ul className="md:hidden bg-white text-black shadow-md p-4 absolute w-full top-full z-50">
            <li className="mb-2">
              <Link href="#top" className="hover:underline font-bold">
                トップ
              </Link>
            </li>
            <li className="mb-2">
              <Link href="#overview" className="hover:underline font-bold">
                概要
              </Link>
            </li>
            <li className="mb-2">
              <Link href="#uniqueness" className="hover:underline font-bold">
                特徴
              </Link>
            </li>
            <li className="mb-2">
              <Link href="#venues" className="hover:underline font-bold">
                開催会場
              </Link>
            </li>
            <li className="mb-2">
              <Link href="#schedule" className="hover:underline font-bold">
                スケジュール
              </Link>
            </li>
            <li className="mb-2">
              <Link href="#judges" className="hover:underline font-bold">
                審査員
              </Link>
            </li>
            <li className="mb-2">
              <Link href="#speakers" className="hover:underline font-bold">
                スピーカー
              </Link>
            </li>
            <li className="mb-2">
              <Link href="#sponsors" className="hover:underline font-bold">
                スポンサー
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/press" className="hover:underline font-bold">
                プレス
              </Link>
            </li>
            <li className="mb-2">
              <Link href="#contact" className="hover:underline font-bold">
                お問い合わせ
              </Link>
            </li>
          </ul>
        )}

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-4 text-sm text-black mt-2">
          <li>
            <Link href="#top" className="hover:underline font-bold">
              トップ
            </Link>
          </li>
          <li>
            <Link href="#overview" className="hover:underline font-bold">
              概要
            </Link>
          </li>
          <li>
            <Link href="#uniqueness" className="hover:underline font-bold">
              特徴
            </Link>
          </li>
          <li>
            <Link href="#venues" className="hover:underline font-bold">
              会場
            </Link>
          </li>
          <li>
            <Link href="#schedule" className="hover:underline font-bold">
              スケジュール
            </Link>
          </li>
          <li>
            <Link href="#judges" className="hover:underline font-bold">
              審査員
            </Link>
          </li>
          <li>
            <Link href="#speakers" className="hover:underline font-bold">
              スピーカー
            </Link>
          </li>
          <li>
            <Link href="#sponsors" className="hover:underline font-bold">
              スポンサー
            </Link>
          </li>
          <li>
            <Link href="/press" className="hover:underline font-bold">
              プレス
            </Link>
          </li>
          <li>
            <Link href="#contact" className="hover:underline font-bold">
              お問い合わせ
            </Link>
          </li>
          <li>
            {/* Language Toggle (Desktop) */}
            <div className="hidden sm:block pl-4 mt-[-1px]">
              <button
                onClick={toggleLanguage}
                className="hover:opacity-75 transition"
              >
                <Image
                  src="/language.svg"
                  alt="Language Toggle"
                  width={22}
                  height={22}
                />
              </button>
            </div>
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
  customClass,
  children,
}) {
  return (
    <div
      className={`rounded-xl shadow-lg p-6 ${
        dimmed
          ? "bg-gray-400/70 backdrop-blur-sm text-gray-800"
          : "bg-white/20 backdrop-blur-sm text-white"
      } ${customClass || ""}`}
    >
      <div className="flex items-start justify-between">
        <div>
          {date ? (
            <p className="font-bold text-xl">{date}</p>
          ) : (
            <p className="font-bold text-xl">{dateRange}</p>
          )}
          <h4 className="mt-2 font-semibold text-lg">{title}</h4>
        </div>
        {linkText && link && (
          <a
            href={link}
            className={`${
              dimmed
                ? "bg-gray-500 text-gray-300"
                : "bg-blue-700 text-white hover:bg-blue-800"
            } text-sm font-medium py-2 px-6 rounded-full whitespace-nowrap shadow-md transform hover:scale-105 transition-transform`}
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

function JudgeCard({ image, name, title, description, bio, socialMedia = [] }) {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = (e) => {
    if (e) {
      e.stopPropagation();
    }
    setModalOpen(false);
  };

  return (
    <>
      <div
        onClick={openModal}
        className="bg-white/10 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden transform transition-transform hover:scale-105 duration-300 h-full cursor-pointer hover:shadow-glow"
      >
        <div className="flex flex-col h-full items-center pt-6">
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white/20 shadow-xl">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4 text-center">
            <h3 className="text-white text-xl font-bold">{name}</h3>
            <p className="text-white/90 text-sm">{title}</p>
            {description && (
              <p className="text-white/80 text-xs mt-1">{description}</p>
            )}
          </div>
          <div className="p-4 pt-0 flex-grow">
            <p className="text-white/80 text-sm line-clamp-3">{bio}</p>
          </div>
        </div>
      </div>

      {modalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 px-4"
          onClick={closeModal}
        >
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
          <div
            className="gradient-primary rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white bg-white/20 p-2 rounded-full hover:bg-accent transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="flex flex-col items-center p-6">
              <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white/20 shadow-xl mb-6">
                <img
                  src={image}
                  alt={name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-1">{name}</h3>
                <p className="text-secondary font-semibold mb-1">{title}</p>
                {description && (
                  <p className="text-white/80 mb-4">{description}</p>
                )}
                <div className="h-px w-full bg-white/20 my-4"></div>
                <p className="text-white/90 text-sm leading-relaxed max-w-xl">
                  {bio}
                </p>

                {socialMedia.length > 0 && (
                  <div className="mt-6 flex space-x-3 justify-center">
                    {socialMedia.map((platform, index) => (
                      <a
                        key={index}
                        href={platform.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/10 rounded-full hover:bg-accent text-white transition-colors"
                      >
                        <img
                          src={platform.icon}
                          alt={platform.platform}
                          className="w-5 h-5"
                        />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function SpeakerCard({
  image,
  name,
  title,
  description,
  bio,
  socialMedia = [],
}) {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = (e) => {
    if (e) {
      e.stopPropagation();
    }
    setModalOpen(false);
  };

  return (
    <>
      <div
        onClick={openModal}
        className="bg-white/10 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden transform transition-transform hover:scale-105 duration-300 h-full cursor-pointer hover:shadow-glow"
      >
        <div className="flex flex-col h-full items-center pt-6">
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white/20 shadow-xl">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4 text-center">
            <h3 className="text-white text-xl font-bold">{name}</h3>
            <p className="text-white/90 text-sm">{title}</p>
            {description && (
              <p className="text-white/80 text-xs mt-1">{description}</p>
            )}
          </div>
          <div className="p-4 pt-0 flex-grow">
            <p className="text-white/80 text-sm line-clamp-3">{bio}</p>
          </div>
        </div>
      </div>

      {modalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 px-4"
          onClick={closeModal}
        >
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
          <div
            className="gradient-accent rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white bg-white/20 p-2 rounded-full hover:bg-vibrant transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="flex flex-col items-center p-6">
              <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white/20 shadow-xl mb-6">
                <img
                  src={image}
                  alt={name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-1">{name}</h3>
                <p className="text-vibrant font-semibold mb-1">{title}</p>
                {description && (
                  <p className="text-white/80 mb-4">{description}</p>
                )}
                <div className="h-px w-full bg-white/20 my-4"></div>
                <p className="text-white/90 text-sm leading-relaxed max-w-xl">
                  {bio}
                </p>

                {socialMedia.length > 0 && (
                  <div className="mt-6 flex space-x-3 justify-center">
                    {socialMedia.map((platform, index) => (
                      <a
                        key={index}
                        href={platform.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/10 rounded-full hover:bg-vibrant text-white transition-colors"
                      >
                        <img
                          src={platform.icon}
                          alt={platform.platform}
                          className="w-5 h-5"
                        />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function SponsorCard({ logo, name, link, tier }) {
  return (
    <div className="bg-white/20 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg transform transition-all hover:scale-105 duration-300 hover:shadow-glow border border-white/10 hover:border-accent group">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="block p-5"
      >
        <div className="h-32 flex items-center justify-center bg-white rounded-lg p-4 mb-2 overflow-hidden">
          <img
            src={logo}
            alt={name}
            className="max-h-full max-w-full object-contain transition-transform hover:scale-110 duration-300"
          />
        </div>
        <div className="mt-4 text-center">
          <p className="font-medium text-white transition-colors group-hover:text-accent">
            {name}
          </p>
        </div>
      </a>
    </div>
  );
}

function NewsItem({ linkText, link, noLinkText }) {
  if (linkText && link) {
    return (
      <div className="border-l-4 border-accent pl-4 py-2 hover:bg-white/5 transition-colors">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-secondary transition-colors block"
        >
          <p className="font-semibold">{linkText}</p>
        </a>
      </div>
    );
  }

  return (
    <div className="border-l-4 border-white/30 pl-4 py-2">
      <p className="text-white/70 font-medium">{noLinkText}</p>
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
