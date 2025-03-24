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
    image: "/shinobu-takahashi-icon.png",
    name: "高橋 忍",
    title: "Unity Technologies Japan",
    description: "Solution Architect",
    bio: "産業分野のお客様向けにUnityを使った 3DやXR技術を利用したアプリケーションの開発等をご提案しています。国土交通省 PLATEAU Advocate。",
    socialMedia: [
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
    title: "日本工学院専門学校",
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
          className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-black text-white px-8 py-12 overflow-hidden"
        >
          {/* Hero Image - Full width banner */}
          <div className="absolute inset-0 w-full h-full z-0">
            <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
            <img
              src="/visiondevcamp2024.jpg"
              alt="VisionDevCamp 2024 Event"
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Content Overlay */}
          <div className="relative z-20 text-center max-w-4xl mx-auto px-4 py-16">
            <div className="inline-block mb-6 p-2 bg-red-500 bg-opacity-90 rounded-lg transform -rotate-2">
              <h1 className="text-5xl sm:text-7xl font-bold text-white leading-tight">
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
                  04.11 <span className="text-2xl sm:text-3xl">金</span> - 13{" "}
                  <span className="text-2xl sm:text-3xl">日</span>, 2025
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
                  href="#tickets"
                  className="inline-block bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-full transform transition-transform hover:scale-105 shadow-lg"
                >
                  参加登録はこちら →
                </a>
              </div>
            </div>
          </div>

          {/* Stylized decorative elements */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
            <div className="w-3 h-3 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
          </div>
        </section>

        {/* Overview Section - New */}
        <section id="overview" className="w-full bg-gradient-to-r from-[#2d3748] to-[#1a202c] py-20 text-white">
          <div className="container mx-auto px-8">
            <div className="max-w-5xl mx-auto">
              <div className="relative mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white relative inline-block">
                  VisionDevCamp Tokyo とは
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-red-500"></span>
                </h2>
              </div>
              
              <div className="flex flex-col lg:flex-row gap-12 items-center">
                <div className="lg:w-1/2">
                  <div className="rounded-xl overflow-hidden shadow-2xl transform transition-transform hover:scale-105 duration-500">
                    <img
                      src="/visiondevcamp2024-2.jpeg"
                      alt="VisionDevCamp 2024の参加者"
                      className="w-full object-cover"
                    />
                  </div>
                </div>
                
                <div className="lg:w-1/2">
                  <p className="text-xl leading-relaxed mb-6">
                    VisionDevCampは、Apple Vision ProとvisionOS向けのアプリケーション開発に焦点を当てた、開発者、デザイナー、起業家が集まる世界最大級の非営利ハッカソンです。
                  </p>
                  
                  <p className="text-xl leading-relaxed mb-6">
                    2007年にシリコンバレーで始まり、今回が初の日本開催となります。週末の3日間、参加者はチームを組んでアイデアを形にし、最終日には審査員の前でデモンストレーションを行います。
                  </p>
                  
                  <p className="text-xl leading-relaxed">
                    経験豊富なボランティアチームが皆さまの開発をサポートし、食事、電源、インターネット、ネットワーキングの機会などを提供いたします。
                  </p>
                  
                  <div className="mt-8 flex">
                    <a 
                      href="#tickets" 
                      className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg"
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
          className="w-full min-h-screen py-20 bg-gradient-to-b from-[#059d9f] to-[#05c7c9] text-white"
        >
          <div className="container">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-12 relative">
              特徴
              <span className="absolute -bottom-2 left-0 w-20 h-1 bg-white"></span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div className="transform transition-transform hover:scale-105 duration-300">
                <div className="overflow-hidden rounded-xl shadow-xl">
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

            <div className="flex flex-col md:grid md:grid-cols-2 gap-10 items-center mt-20">
              <div className="md:order-2 transform transition-transform hover:scale-105 duration-300">
                <div className="overflow-hidden rounded-xl shadow-xl relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
                  <img
                    src="/largest-vos-community-photo.jpg"
                    alt="VisionDevCamp 2024"
                    className="w-full h-[400px] object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute bottom-6 left-6 z-20">
                    <span className="bg-red-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                      世界最大級
                    </span>
                  </div>
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
                <div className="overflow-hidden rounded-xl shadow-xl">
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
                className="inline-block text-[#059d9f] bg-white py-3 px-8 rounded-full hover:bg-white/90 transition shadow-lg font-bold transform hover:scale-105 duration-300"
              >
                もっと詳しく知る →
              </Link>
            </div>
          </div>
        </section>

        {/* Venues Section - New */}
        <section id="venues" className="w-full py-20 bg-gradient-to-b from-[#4a5568] to-[#2d3748] text-white">
          <div className="container mx-auto px-8">
            <div className="max-w-6xl mx-auto">
              <div className="relative mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white relative inline-block">
                  開催会場
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-red-500"></span>
                </h2>
              </div>
              
              {/* Main Venues */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
                {/* Tokyo Venue */}
                <div className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl transition-transform hover:scale-105 duration-300">
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
                    <h4 className="text-xl font-semibold mb-3">オープンコラボレーションハブ LODGE</h4>
                    <p className="text-gray-300 mb-4">
                      最新の設備が整った開放的な空間で、他の開発者と対面で交流しながら開発に取り組めます。食事や電源、高速インターネットを完備し、開発に集中できる環境を提供します。
                    </p>
                    <div className="flex justify-between items-center mt-4">
                      <span className="text-sm text-gray-400">東京都千代田区神田練塀町300番地</span>
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
                <div className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl transition-transform hover:scale-105 duration-300">
                  <div className="h-64 overflow-hidden">
                    <img 
                      src="/online_venue.png" 
                      alt="オンライン会場" 
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-3 h-3 bg-blue-500 rounded-full mr-2 animate-pulse"></div>
                      <h3 className="text-2xl font-bold">オンライン会場</h3>
                    </div>
                    <h4 className="text-xl font-semibold mb-3">バーチャル開発空間</h4>
                    <p className="text-gray-300 mb-4">
                      遠方からでも参加可能なオンライン会場では、リアルタイムの配信やコミュニケーションツールを通じて、場所を問わず他の参加者と協力して開発を進めることができます。
                    </p>
                    <div className="flex justify-between items-center mt-4">
                      <span className="text-sm text-gray-400">Discord & オンラインコラボレーションツール</span>
                      <a 
                        href="https://discord.gg/visiondevcamp" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-white hover:text-red-300 font-bold"
                      >
                        参加する →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Satellite Venue */}
              <div className="max-w-2xl mx-auto">
                <div className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl">
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                      <h3 className="text-2xl font-bold">サテライト会場（福岡）</h3>
                    </div>
                    <h4 className="text-xl font-semibold mb-3">福岡サテライト</h4>
                    <p className="text-gray-300 mb-4">
                      有志のボランティアによって運営される福岡サテライト会場。メイン会場と同様に開発環境を整え、九州地方からの参加者をサポートします。
                    </p>
                    <div className="flex justify-between items-center mt-4">
                      <span className="text-sm text-gray-400">詳細は近日公開</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="schedule"
          className="w-full min-h-screen flex flex-col bg-gradient-to-b from-blue-600 to-blue-400 text-white px-4 sm:px-8 py-20 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-300 rounded-full filter blur-3xl opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-700 rounded-full filter blur-3xl opacity-20 transform -translate-x-1/2 translate-y-1/2"></div>
          
          <div className="container relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 relative">
              スケジュール
              <span className="absolute -bottom-2 left-0 w-20 h-1 bg-white"></span>
            </h3>

            <div className="mb-16 mt-10">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-lg">
                <h2 className="text-2xl font-bold text-white mb-6 relative inline-block">
                  メインイベント：VisionDevCamp Tokyo 2025
                  <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-red-400"></span>
                </h2>
                
                <div className="mb-8">
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse mr-3"></div>
                    <p className="text-2xl font-bold text-white">2025年4月11日（金）- 13日（日）</p>
                  </div>
                  <p className="text-lg text-white ml-7 mt-2">会場: オープンコラボレーションハブ LODGE & オンライン</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
                  {/* Day 1 */}
                  <div className="bg-white/5 backdrop-blur-sm p-5 rounded-xl shadow-lg border-l-4 border-pink-400">
                    <h4 className="text-xl font-bold mb-3">DAY 1: 4月11日(金)</h4>
                    <h5 className="font-semibold mb-2">チームビルディング</h5>
                    <ul className="space-y-2 text-sm">
                      <li><span className="font-semibold">17:00</span> - 開場・受付開始</li>
                      <li><span className="font-semibold">17:00-19:00</span> - 食事付き交流会</li>
                      <li><span className="font-semibold">19:00-19:30</span> - ウェルカム & 自己紹介</li>
                      <li><span className="font-semibold">19:30-21:00</span> - チーム編成 & アイデアピッチ</li>
                      <li><span className="font-semibold">22:00</span> - 閉場</li>
                    </ul>
                  </div>
                  
                  {/* Day 2 */}
                  <div className="bg-white/5 backdrop-blur-sm p-5 rounded-xl shadow-lg border-l-4 border-blue-400">
                    <h4 className="text-xl font-bold mb-3">DAY 2: 4月12日(土)</h4>
                    <h5 className="font-semibold mb-2">ハッカソン開発日</h5>
                    <ul className="space-y-2 text-sm">
                      <li><span className="font-semibold">9:00</span> - 朝食</li>
                      <li><span className="font-semibold">9:30</span> - オープンマイク</li>
                      <li><span className="font-semibold">10:00</span> - 基調講演 & トーク</li>
                      <li><span className="font-semibold">10:30-13:00</span> - 開発作業時間</li>
                      <li><span className="font-semibold">13:00</span> - ランチ</li>
                      <li><span className="font-semibold">14:00-19:00</span> - 開発作業時間</li>
                    </ul>
                  </div>
                  
                  {/* Day 3 */}
                  <div className="bg-white/5 backdrop-blur-sm p-5 rounded-xl shadow-lg border-l-4 border-green-400">
                    <h4 className="text-xl font-bold mb-3">DAY 3: 4月13日(日)</h4>
                    <h5 className="font-semibold mb-2">デモ & 審査</h5>
                    <ul className="space-y-2 text-sm">
                      <li><span className="font-semibold">9:00</span> - 朝食</li>
                      <li><span className="font-semibold">9:30-12:00</span> - 最終開発作業</li>
                      <li><span className="font-semibold">12:00</span> - ランチ</li>
                      <li><span className="font-semibold">13:00-16:00</span> - プロジェクトデモ & 審査</li>
                      <li><span className="font-semibold">16:30-17:30</span> - 表彰式</li>
                      <li><span className="font-semibold">17:30-19:00</span> - 閉会・ネットワーキング</li>
                    </ul>
                  </div>
                </div>
                
                <div className="flex justify-center mt-8">
                  <a
                    href="https://lu.ma/wsqwzm4s"
                    className="py-3 px-8 bg-white text-blue-600 font-bold rounded-full hover:bg-blue-100 transition tracking-wide shadow-lg transform hover:scale-105 duration-300"
                  >
                    チケット購入 →
                  </a>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-xl font-bold text-white mb-6">プレイベント <span className="text-white/70 text-base font-normal">(終了)</span></h4>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-gray-500/30 backdrop-blur-sm text-white/70 rounded-xl shadow-lg p-4 border-l-4 border-gray-400">
                  <h5 className="text-lg font-semibold mb-2">講演会 <span className="text-sm font-normal">(終了)</span></h5>
                  <p className="text-sm">VisionDevCamp講演会: ビジョンをクラフトするには？</p>
                  <div className="text-xs mt-2">2025.03.04</div>
                </div>
                
                <div className="bg-gray-500/30 backdrop-blur-sm text-white/70 rounded-xl shadow-lg p-4 border-l-4 border-gray-400">
                  <h5 className="text-lg font-semibold mb-2">アイデアソン <span className="text-sm font-normal">(終了)</span></h5>
                  <p className="text-sm">空間コンピューティング×AIで創る次世代ライフスタイル</p>
                  <div className="text-xs mt-2">2025.03.16</div>
                </div>
                
                <div className="bg-gray-500/30 backdrop-blur-sm text-white/70 rounded-xl shadow-lg p-4 border-l-4 border-gray-400">
                  <h5 className="text-lg font-semibold mb-2">環境構築セッション <span className="text-sm font-normal">(終了)</span></h5>
                  <p className="text-sm">Vision Pro開発環境構築イベント</p>
                  <div className="text-xs mt-2">2025.03.20</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section 
          id="judges" 
          className="w-full flex flex-col bg-gradient-to-b from-pink-500 to-purple-500 text-white px-8 py-20 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-64 h-64 bg-pink-300 rounded-full filter blur-3xl opacity-20 transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-700 rounded-full filter blur-3xl opacity-20 transform translate-x-1/2 translate-y-1/2"></div>
          
          <div className="container relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-12 relative">
              審査員
              <span className="absolute -bottom-2 left-0 w-20 h-1 bg-white"></span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {judges.map((judge, index) => (
                <div key={index} className="flex flex-col items-center transform transition-transform hover:scale-105 duration-300">
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
            </div>
          </div>
        </section>

        <section
          id="sponsors"
          className="w-full flex flex-col bg-gradient-to-b from-gray-100 to-white text-gray-900 px-8 py-20 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-gray-200 rounded-full filter blur-3xl opacity-50 transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gray-300 rounded-full filter blur-3xl opacity-50 transform -translate-x-1/2 translate-y-1/2"></div>
          
          <div className="container relative z-10 mx-auto">
            <div className="max-w-6xl mx-auto">
              <div className="relative mb-12">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-800 relative inline-block">
                  スポンサー
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-pink-500"></span>
                </h3>
              </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <SponsorCard
                logo="/unity-logo-black.png"
                name="ユニティ・テクノロジーズ・ジャパン株式会社"
                link="https://unity3d.jp/"
                tier="ゴールド"
              />
              <SponsorCard
                logo="/styly-logo.png"
                name="株式会社STYLY"
                link="https://styly.inc/"
                tier="ゴールド"
              />
              <SponsorCard
                logo="/BT_Logo.svg"
                name="︎Beautiful Things"
                link="https://www.beautifulthings.xyz/"
                tier="シルバー"
              />
            </div>
          
            <h4 className="text-xl font-bold mt-16 mb-8 text-gray-800">会場協力</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <SponsorCard
                logo="/lodge-logo.svg"
                name="︎オープンコラボレーションハブ LODGE"
                link="https://www.z-lodge.com/"
              />
            </div>
            
            <h4 className="text-xl font-bold mt-16 mb-8 text-gray-800">撮影協力</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <SponsorCard
                logo="/crossdevice-logo.png"
                name="︎株式会社クロスデバイス"
                link="https://www.crossdevice.co.jp/"
              />
            </div>

              <h4 className="text-xl font-bold mt-16 mb-8 text-gray-800">コミュニティ・パートナー</h4>
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
            </div>

            <div className="flex flex-col items-center mt-16">
              <h4 className="text-xl font-bold text-purple-700 mb-6">
                スポンサー募集中！
              </h4>
              <a
                href="https://forms.gle/rkd5RQrNtSU4fYxF9"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-purple-600 text-purple-700 font-bold py-3 px-8 rounded-full hover:bg-purple-600 hover:text-white transition-colors transform hover:scale-105 duration-300 shadow-lg"
              >
                スポンサー応募フォーム →
              </a>
            </div>
          </div>
        </section>

        <section
          id="tickets"
          className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-700 via-purple-600 to-indigo-700 text-white px-8 py-20 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-400 rounded-full filter blur-3xl opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-800 rounded-full filter blur-3xl opacity-20 transform -translate-x-1/2 translate-y-1/2"></div>
          
          <div className="relative z-10 text-center max-w-4xl">
            <h3 className="text-4xl sm:text-6xl font-bold mb-8">参加チケット</h3>
            
            <p className="text-xl text-white/90 mb-12">
              一緒にVision Proの可能性を探求し、革新的なアプリケーションを作り上げましょう。<br />
              以下から参加チケットをご購入いただけます。
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl shadow-xl mb-10">
              <h4 className="text-2xl font-bold mb-4">VisionDevCamp Tokyo 2025</h4>
              <p className="text-lg mb-6">2025年4月11日(金) - 13日(日)</p>
              
              <div className="flex justify-center gap-6 flex-wrap">
                <div className="bg-white/5 backdrop-blur-sm p-5 rounded-xl shadow-lg border-l-4 border-pink-400">
                  <h5 className="font-bold mb-2">一般参加</h5>
                  <p className="text-3xl font-bold mb-4">¥5,000 <span className="text-sm font-normal">(税込)</span></p>
                  <ul className="text-sm space-y-2 mb-6 text-left">
                    <li>• 3日間のイベント参加権</li>
                    <li>• 食事・ドリンク</li>
                    <li>• 公式グッズ</li>
                    <li>• ネットワーキング</li>
                  </ul>
                </div>
                
                <div className="bg-white/5 backdrop-blur-sm p-5 rounded-xl shadow-lg border-l-4 border-blue-400">
                  <h5 className="font-bold mb-2">学生参加</h5>
                  <p className="text-3xl font-bold mb-4">¥2,500 <span className="text-sm font-normal">(税込)</span></p>
                  <ul className="text-sm space-y-2 mb-6 text-left">
                    <li>• 3日間のイベント参加権</li>
                    <li>• 食事・ドリンク</li>
                    <li>• 公式グッズ</li>
                    <li>• ネットワーキング</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <a
              href="https://lu.ma/wsqwzm4s"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-800 bg-white py-4 px-12 rounded-full hover:bg-purple-100 transition font-bold text-xl shadow-2xl transform hover:scale-105 duration-300"
            >
              チケットを購入する →
            </a>
          </div>
        </section>

        <section
          id="contact"
          className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-black text-white px-8 py-20 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-gray-700 rounded-full filter blur-3xl opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gray-800 rounded-full filter blur-3xl opacity-20 transform -translate-x-1/2 translate-y-1/2"></div>
          
          <div className="relative z-10 text-center max-w-4xl">
            <h3 className="text-4xl sm:text-6xl font-bold mb-8">お問い合わせ</h3>
            <p className="text-xl mb-10 text-gray-300">
              VisionDevCamp Tokyoについてのお問い合わせや、スポンサー・メディア関係の方はこちらからご連絡ください。
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl shadow-lg">
                <h4 className="text-xl font-bold mb-4">一般のお問い合わせ</h4>
                <p className="text-base mb-6">
                  参加方法、イベント内容、その他のご質問など
                </p>
                <a
                  href="https://forms.gle/UAUzjzJvSmNtKthg6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block border-2 border-white text-white py-3 px-8 rounded-full hover:bg-white hover:text-black transition-colors font-bold shadow-lg transform hover:scale-105 duration-300"
                >
                  問い合わせフォーム →
                </a>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl shadow-lg">
                <h4 className="text-xl font-bold mb-4">コミュニティに参加</h4>
                <p className="text-base mb-6">
                  最新情報やイベント参加者との交流はこちら
                </p>
                <div className="flex justify-center space-x-6">
                  <a 
                    href="https://x.com/visiondevcamp" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white hover:text-red-300 transition-colors transform hover:scale-110"
                  >
                    <img src="/x-logo.png" alt="X" className="w-10 h-10" />
                  </a>
                  <a 
                    href="https://discord.gg/visiondevcamp" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white hover:text-blue-300 transition-colors transform hover:scale-110"
                  >
                    <img src="/discord-mark-white.svg" alt="Discord" className="w-10 h-10" />
                  </a>
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
                  className="w-10 h-10 mr-3 object-contain"
                />
                <div className="text-xl font-bold">
                  VisionDevCamp <span className="text-red-500">Tokyo</span> 2025
                </div>
              </div>
              
              <div className="flex flex-wrap justify-center gap-6">
                <Link href="#top" className="hover:text-red-400 transition-colors">トップ</Link>
                <Link href="#overview" className="hover:text-red-400 transition-colors">概要</Link>
                <Link href="#uniqueness" className="hover:text-red-400 transition-colors">特徴</Link>
                <Link href="#venues" className="hover:text-red-400 transition-colors">会場</Link>
                <Link href="#schedule" className="hover:text-red-400 transition-colors">スケジュール</Link>
                <Link href="#judges" className="hover:text-red-400 transition-colors">審査員</Link>
                <Link href="#sponsors" className="hover:text-red-400 transition-colors">スポンサー</Link>
                <Link href="#tickets" className="hover:text-red-400 transition-colors">チケット</Link>
                <Link href="#contact" className="hover:text-red-400 transition-colors">お問い合わせ</Link>
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
              <Link href="#tickets" className="hover:underline font-bold">
                チケット
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
            <Link href="#tickets" className="hover:underline font-bold">
              チケット
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
        dimmed ? "bg-gray-400/70 backdrop-blur-sm text-gray-800" : "bg-white/20 backdrop-blur-sm text-white"
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
          className="w-12 h-12 rounded-full object-cover mr-2"
        />
        <div>
          <p className="text-[8px] sm:text-sm">スピーカー</p>
          <p className="text-[11px] sm:text-sm font-bold">{name}</p>
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
        className="bg-white/10 backdrop-blur-sm text-white rounded-xl shadow-lg p-8 flex flex-col items-center cursor-pointer hover:shadow-2xl transition w-full h-full"
      >
        <img
          src={image}
          alt={name}
          className="w-24 h-24 rounded-full mb-6 object-cover shadow-md border-2 border-white/20"
        />
        <h4 className="font-bold text-xl hover:underline text-center">{name}</h4>
        <p className="text-sm md:text-base text-gray-200 mt-2 text-center">{title}</p>
        {description && (
          <p className="text-xs text-gray-300 mt-1 text-center">{description}</p>
        )}
        {socialMedia?.length > 0 && (
          <div className="flex space-x-3 mt-4">
            {socialMedia.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={link.icon}
                  alt={link.platform}
                  className="w-5 h-5 opacity-70 hover:opacity-100 transition"
                />
              </a>
            ))}
          </div>
        )}
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center"
          onClick={closeModal}
        >
          <div
            className="relative bg-white rounded-xl shadow-2xl p-8 w-11/12 max-w-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-black"
              onClick={closeModal}
              aria-label="Close Modal"
            >
              ✕
            </button>
            <div className="flex flex-col items-center">
              <img
                src={image}
                alt={name}
                className="w-28 h-28 rounded-full mb-6 object-cover shadow-lg border-4 border-gray-100"
              />
              <h4 className="font-bold text-2xl text-gray-900">{name}</h4>
              <p className="text-md font-medium text-gray-700 mt-2">{title}</p>

              {description && (
                <p className="text-sm text-gray-600 text-center mt-1">
                  {description}
                </p>
              )}

              {bio && (
                <p className="mt-6 text-gray-800 text-left leading-relaxed">
                  {bio}
                </p>
              )}

              {socialMedia?.length > 0 && (
                <div className="flex space-x-4 mt-6">
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

function SponsorCard({ logo, name, link, tier }) {
  return (
    <div className="relative rounded-xl p-6 flex flex-col items-center bg-white shadow-md hover:shadow-xl transition transform hover:scale-105 duration-300">
      {tier && (
        <div className="absolute top-3 right-3">
          <span className={`text-xs font-bold px-3 py-1 rounded-full ${
            tier === "ゴールド" ? "bg-yellow-400 text-yellow-900" :
            tier === "シルバー" ? "bg-gray-300 text-gray-700" :
            tier === "ブロンズ" ? "bg-amber-700 text-amber-100" : "bg-blue-100 text-blue-700"
          }`}>
            {tier}
          </span>
        </div>
      )}
      <div className="h-32 flex items-center justify-center">
        <img src={logo} alt={name} className="max-h-24 max-w-[200px] object-contain" />
      </div>
      <h5 className="font-bold text-gray-800 text-center mt-4">{name}</h5>

      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 text-blue-600 hover:text-blue-800 underline font-bold"
        >
          公式サイト →
        </a>
      )}
    </div>
  );
}

function NewsItem({ linkText, link, noLinkText }) {
  return (
    <div className="flex items-center space-x-4 hover:bg-white/10 p-3 rounded-lg transition-colors">
      <div className="text-2xl font-bold text-white">›</div>

      <Link
        href={link}
        className="text-lg sm:text-xl font-medium text-white hover:text-red-100 transition-colors"
      >
        {linkText}
      </Link>

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

