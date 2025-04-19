"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import React from "react";

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
        url: "https://amc.geidai.ac.jp/",
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
    bio: "昔、ダグラス・エンゲルバートにお会いしたことがあります。彼のチームは、マウスや画面上のテキストを発明しました。今日では、コードを駆使しながら、マウスがどのように手のジェスチャーへと進化していったのか、そして画面が私たちの目の延長として機能するようになったのかを探求しています。",
    socialMedia: [
      {
        platform: "LinkedIn",
        url: "https://www.linkedin.com/in/warrenstringer/",
        icon: "/linkedin-logo.png",
      },
    ],
  },
  {
    image: "/gianrocco_di_tomaso.png",
    name: "Gianrocco Di Tomaso",
    title: "Vision Os UX/UIデザイン | グラフィックデザイナー | 3Dアーティスト",
    description: "",
    bio: "視覚コミュニケーションを基盤とし、没入型テクノロジー、空間コンピューティング、3D環境デザインを専門とする多分野にわたるデザイナーです。創造性と技術的専門知識を組み合わせ、Apple Vision Proなどの新興プラットフォームやミックスドリアリティ環境における革新的なデジタル体験を創造しています。XRプロトタイピング、インタラクティブな空間の作成、直感的な空間インターフェースのデザインに関する実践的な経験を持っています。",
    socialMedia: [
      {
        platform: "LinkedIn",
        url: "https://www.linkedin.com/in/gianrocco-di-tomaso-5895a0165/",
        icon: "/linkedin-logo.png",
      },
      {
        platform: "Behance",
        url: "https://www.behance.net/gianrocditoma",
        icon: "/behance-logo.svg",
      },
    ],
  },
  {
    image: "/rosa_laura_vernieri.jpg",
    name: "Rosa Laura Vernieri",
    title: "visionOS、iOS UX/UIデザイナー | 認知人間工学専門家",
    description: "",
    bio: "ユーザー体験研究、インタラクションデザイン、アクセシビリティ、AR、VR、XRを専門とする2年の経験を持つUX/UIデザイナーです。認知心理学者および認知人間工学専門家としての学術的タイトルを持ち、それにより私たちの脳がテクノロジーとどのように相互作用し反応するかを理解し、その結果、アプリや製品の最適な構造をデザインすることができます。",
    socialMedia: [
      {
        platform: "LinkedIn",
        url: "https://www.linkedin.com/in/rosalauravernieri/",
        icon: "/linkedin-logo.png",
      },
      {
        platform: "Behance",
        url: "https://www.behance.net/rosalavernier",
        icon: "/behance-logo.svg",
      },
    ],
  },
  {
    image: "/davide_castaldi.png",
    name: "Davide Castaldi",
    title: "visionOSおよびAppleエコシステム開発者、ソフトウェアエンジニア",
    description: "",
    bio: "Appleエコシステム内でXRを専門とするソフトウェア開発者です。visionOS、SwiftUI、Reality Composerに強い基盤を持ち、次世代プラットフォーム向けの没入型AR/VR/MR体験を創造しています。MetalからC++相互運用性まで幅広い技術的専門知識を持ち、アクセシブルでスケーラブルなUI/UXデザインを提供します。主なプロジェクトには、Astral Wilds（visionOS）、オープンソースパッケージVisionTextArc（visionOS）、Tria Tactics（iOS/iPadOS）などのクリエイティブプロジェクトがあります。",
    socialMedia: [
      {
        platform: "LinkedIn",
        url: "https://www.linkedin.com/in/davide-castaldi",
        icon: "/linkedin-logo.png",
      },
      {
        platform: "GitHub",
        url: "https://github.com/Dave-Ed-Cast",
        icon: "/github-logo.png",
      },
    ],
  },
  {
    image: "/giuseppe_rocco.jpg",
    name: "Giuseppe Rocco",
    title: "仮想化エンスージアスト | UNIXスペシャリスト | Apple開発者",
    description: "",
    bio: "macOS開発とUNIXシステム管理に精通した多才な開発者で、複雑なフレームワークに習熟し、Mac App Storeでのリリースを含むAppleエコシステムを対象とした高品質なソフトウェア構築の経験があります。オープンソースソフトウェアに情熱を持ち、複数のSwiftパッケージを公開しています。データベースエンジニアリングやスケーラブルなシステム統合のスキルを持ち、チャレンジングな技術アーキテクチャを独自に解決しつつ、協力的なチームでも活躍する自主的な問題解決者です。",
    socialMedia: [
      {
        platform: "LinkedIn",
        url: "https://www.linkedin.com/in/giusepperocco",
        icon: "/linkedin-logo.png",
      },
      {
        platform: "GitHub",
        url: "https://github.com/iOmega8561",
        icon: "/github-logo.png",
      },
    ],
  },
  {
    image: "/alessandro_ricci.png",
    name: "Alessandro Ricci",
    title: "iOS＆visionOS開発者",
    description: "",
    bio: "自然とアクセシビリティに深い情熱を持つ経験豊富なVisionOS、iOS、Unity開発者です。SwiftUI、UIKit、ARKit、RealityKitの強力な専門知識を活かし、Appleエコシステム全体のユーザーフレンドリーなデジタル体験を創造しています。視覚障害者が新しくアクセシブルな方法で芸術を体験できるよう支援する革新的なスタートアップ「Parts」の共同創設者であり、複数の著名な記事で認められています。彼の仕事は創造性と技術的スキルを融合させ、包括的なテクノロジーとインタラクティブな3D体験に強くコミットしています。",
    socialMedia: [
      {
        platform: "LinkedIn",
        url: "https://www.linkedin.com/in/itsalessandroricci/",
        icon: "/linkedin-logo.png",
      },
      {
        platform: "GitHub",
        url: "https://github.com/itsalessandroricci",
        icon: "/github-logo.png",
      },
    ],
  },
  {
    image: "/marzia_pirozzi.png",
    name: "Marzia Pirozzi",
    title: "ソフトウェア開発者 | Apple開発者",
    description: "",
    bio: "モバイルおよび没入型テクノロジーに強い経験を持つフルスタック開発者。ユーザーに焦点を当てたアプリケーションの提供と、技術的な専門知識と創造性、および部門横断的なコラボレーションを組み合わせることに長けています。コンピュータサイエンスの学位を取得した後、現在は人工知能の修士課程を追求しています。",
    socialMedia: [
      {
        platform: "LinkedIn",
        url: "https://linkedin.com/in/marzia-pirozzi",
        icon: "/linkedin-logo.png",
      },
      {
        platform: "GitHub",
        url: "https://github.com/Marziap",
        icon: "/github-logo.png",
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

const organizers = [
  {
    image: "/takuzen-toh.jpg",
    name: "登卓然 / Takuzen Toh",
    title: "VisionDevCamp Tokyo共同主催者",
    description: "Engineer / エンジニア",
    bio: "VisionDevCamp最実用アプリ賞受賞・Let's Vision 2025登壇者・Apple Vision Pro向けのイマーシブビデオアプリ「Caspy」開発者",
    socialMedia: [
      {
        platform: "X",
        url: "https://x.com/takuzentoh",
        icon: "/x-logo.png",
      },
    ],
  },
  {
    image: "/yugoatobe.jpg",
    name: "Yugo Atobe",
    title: "VisionDevCamp Tokyo共同主催者",
    description: "",
    bio: "2023年よりvisionOS勉強会を主催しています。DevCampを設計・開発しました。オープンソース、オープンスタンダードにインセンティブを与える開発組織のモデルや資金調達機構の構築に関心があります。",
    socialMedia: [
      {
        platform: "Website",
        url: "https://yugoatobe.com/",
        icon: "/globe-outline.svg",
      },
    ],
  },
];

const tokyoTeam = [
  {
    image: "/kazuhiro-hara.jpg",
    name: "Kara_d / Kazuhiro Hara",
    title: "",
    description: "",
    bio: "よりひろいフロントエンド主催。XR Developer。Apple Vision Pro Holder。カンソクインダストリーズ代表のフリーランス。XREAL主催のARJAM入賞。VisionDevCamp Tokyo 共同主催者。",
    socialMedia: [
      {
        platform: "X",
        url: "https://x.com/kara_d",
        icon: "/x-logo.png",
      },
    ],
  },
  {
    image: "/munenori-koyasu.jpg",
    name: "小安宗徳",
    title: "Designer / デザイナー",
    description: "",
    bio: "東京都を拠点に活動するUXデザイナー。WebシステムのUX設計や、Webサイトのデザインを行なっている。東京電機大学社会人博士課程に在籍し、UXについての知見を深めている。",
    socialMedia: [
      {
        platform: "Website",
        url: "https://uxkys-pf.studio.site/",
        icon: "/globe-outline.svg",
      },
    ],
  },
  {
    image: "/morinosuke.jpg",
    name: "Morinosuke / Seinosuke Saito",
    title: "",
    description: "",
    bio: "東京大学工学部4年。ソフトウェアエンジニア。Vision Dev Camp Tokyo 2025 オンライン会場であるApple Vision Pro向けアプリ「DevCamp」を開発。",
    socialMedia: [
      {
        platform: "X",
        url: "https://x.com/morinosuke361",
        icon: "/x-logo.png",
      },
    ],
  },
  {
    image: "/bankie-icon.png",
    name: "Bankie",
    title: "Data Platform Engineer",
    description: "",
    bio: "データプラットフォームエンジニア。",
    socialMedia: [
      {
        platform: "Website",
        url: "https://connpass.com/user/TreradeshBankie/",
        icon: "/globe-outline.svg",
      },
    ],
  },
];

const fukuokaTeam = [
  {
    image: "/david_kordsmeier.jpg",
    name: "David Kordsmeier",
    title: "",
    description: "",
    bio: "David Kordsmeierは大手テック企業でJavaやモバイル、組み込みシステムを担当するキャリアをスタートさせました。現在は、30社以上のスタートアップクライアントを持つブティックコンサルティング会社を運営し、スタートアップ企業のイノベーションに注力しています。現在は福岡を拠点に、AR/VR/IoTスタートアップベンチャー「IoTone Japan」の立ち上げに取り組んでいます。",
    socialMedia: [
      {
        platform: "LinkedIn",
        url: "https://www.linkedin.com/in/dkords/",
        icon: "/linkedin-logo.png",
      },
    ],
  },
  {
    image: "/kanako_nagiri.jpg",
    name: "名切加奈子",
    title: "",
    description: "",
    bio: "株式会社六に所属し、福岡を拠点にWebアプリケーションの開発を行っています。特にイーコマース分野を得意としており、ECサイトの構築から関連アプリの開発まで幅広く携わっています。",
    socialMedia: [
      {
        platform: "LinkedIn",
        url: "https://www.linkedin.com/in/kanako-nagiri-387791295/",
        icon: "/linkedin-logo.png",
      },
    ],
  },
  {
    image: "/laurie.png",
    name: "Laurie",
    title: "Software Engineer",
    description: "",
    bio: "ソフトウェアエンジニアであり、福岡エンジニアカフェのコミュニティマネージャーでもあります。",
    socialMedia: [],
  },
];

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({
    time: "",
    speaker: "",
    title: "",
    description: "",
    duration: ""
  });
  
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
              Schedule
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

                {/* Vertical Timeline Layout */}
                <div className="space-y-12">
                  {/* Day 1 - April 11 */}
                  <div className="relative">
                    <div className="flex items-center mb-6">
                      <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-white font-bold">1</span>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-2xl font-bold text-white">DAY 1: 4月11日(金)</h4>
                        <p className="text-vibrant font-medium">チームビルディング</p>
                      </div>
                    </div>

                    <div className="ml-5 pl-10 border-l-2 border-white/20 space-y-6">
                      {/* Timeline items for Day 1 */}
                      <div className="flex">
                        <div className="mr-4 relative">
                          <div className="w-4 h-4 rounded-full bg-white/30"></div>
                        </div>
                        <div className="bg-gray-800 backdrop-blur-sm rounded-xl p-4 flex-grow">
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                            <h5 className="font-medium text-white">開場</h5>
                            <span className="text-sm font-mono text-vibrant bg-vibrant/10 px-2 py-1 rounded-full">18:30</span>
                          </div>
                          <p className="text-white/70 text-sm mt-1">参加者受付開始</p>
                        </div>
                      </div>

                      <div className="flex">
                        <div className="mr-4 relative">
                          <div className="w-4 h-4 rounded-full bg-white/30"></div>
                        </div>
                        <div className="bg-gray-800 backdrop-blur-sm rounded-xl p-4 flex-grow">
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                            <h5 className="font-medium text-white">オープニング</h5>
                            <span className="text-sm font-mono text-vibrant bg-vibrant/10 px-2 py-1 rounded-full">19:00-19:15</span>
                          </div>
                          <p className="text-white/70 text-sm mt-1">オーガナイザーからの歓迎挨拶、福岡会場の紹介(LAURIE)</p>
                        </div>
                      </div>

                      <div className="flex">
                        <div className="mr-4 relative">
                          <div className="w-4 h-4 rounded-full bg-white/30"></div>
                        </div>
                        <div className="bg-gray-800 backdrop-blur-sm rounded-xl p-4 flex-grow">
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                            <h5 className="font-medium text-white">ショートキーノート</h5>
                            <span className="text-sm font-mono text-vibrant bg-vibrant/10 px-2 py-1 rounded-full">19:15-19:45</span>
                          </div>
                          <p className="text-white/70 text-sm mt-1">リードスポンサー企業からのショートキーノート(Raven、LODGE、STYLY、キヤノン)</p>
                        </div>
                      </div>

                      <div className="flex">
                        <div className="mr-4 relative">
                          <div className="w-4 h-4 rounded-full bg-white/30"></div>
                        </div>
                        <div className="bg-gray-800 backdrop-blur-sm rounded-xl p-4 flex-grow">
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                            <h5 className="font-medium text-white">自己紹介</h5>
                            <span className="text-sm font-mono text-vibrant bg-vibrant/10 px-2 py-1 rounded-full">19:45-20:30</span>
                          </div>
                          <p className="text-white/70 text-sm mt-1">参加者（個人/事前登録チーム）が開発したいアイデアを30秒~1分程度で簡易ピッチする</p>
                        </div>
                      </div>

                      <div className="flex">
                        <div className="mr-4 relative">
                          <div className="w-4 h-4 rounded-full bg-white/30"></div>
                        </div>
                        <div className="bg-gray-800 backdrop-blur-sm rounded-xl p-4 flex-grow">
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                            <h5 className="font-medium text-white">チーム編成(食事付き交流会)</h5>
                            <span className="text-sm font-mono text-vibrant bg-vibrant/10 px-2 py-1 rounded-full">20:30-21:45</span>
                          </div>
                          <p className="text-white/70 text-sm mt-1">立食形式で参加者同士が交流</p>
                        </div>
                      </div>

                      <div className="flex">
                        <div className="mr-4 relative">
                          <div className="w-4 h-4 rounded-full bg-white/30"></div>
                        </div>
                        <div className="bg-gray-800 backdrop-blur-sm rounded-xl p-4 flex-grow">
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                            <h5 className="font-medium text-white">閉場</h5>
                            <span className="text-sm font-mono text-vibrant bg-vibrant/10 px-2 py-1 rounded-full">22:00</span>
                          </div>
                          <p className="text-white/70 text-sm mt-1">初日終了</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Day 2 - April 12 */}
                  <div className="relative">
                    <div className="flex items-center mb-6">
                      <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-white font-bold">2</span>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-2xl font-bold text-white">DAY 2: 4月12日(土)</h4>
                        <p className="text-vibrant font-medium">開発 & スピーカーセッション</p>
                      </div>
                    </div>

                    <div className="ml-5 pl-10 border-l-2 border-white/20 space-y-6">
                      {/* Timeline items for Day 2 */}
                      <div className="flex">
                        <div className="mr-4 relative">
                          <div className="w-4 h-4 rounded-full bg-white/30"></div>
                        </div>
                        <div className="bg-gray-800 backdrop-blur-sm rounded-xl p-4 flex-grow">
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                            <h5 className="font-medium text-white">朝食</h5>
                            <span className="text-sm font-mono text-vibrant bg-vibrant/10 px-2 py-1 rounded-full">9:00~</span>
                          </div>
                          <p className="text-white/70 text-sm mt-1">参加者同士・スポンサー企業のエンジニアなどと軽めの朝食をとりながらカジュアルに交流できる</p>
                        </div>
                      </div>

                      <div className="flex">
                        <div className="mr-4 relative">
                          <div className="w-4 h-4 rounded-full bg-white/30"></div>
                        </div>
                        <div className="bg-gray-800 backdrop-blur-sm rounded-xl p-4 flex-grow">
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                            <h5 className="font-medium text-white">アイデアの共有&フィードバック</h5>
                            <span className="text-sm font-mono text-vibrant bg-vibrant/10 px-2 py-1 rounded-full">09:30~</span>
                          </div>
                          <p className="text-white/70 text-sm mt-1">チームごとに、簡単に「これから何をつくるか」を1分程度で共有。前日に合流できなかったメンバーや追加参加者をフォローアップ</p>
                        </div>
                      </div>

                      {/* Development Time Block with nested activities */}
                      <div className="flex flex-col">
                        <div className="flex">
                          <div className="mr-4 relative">
                            <div className="w-4 h-4 rounded-full bg-secondary"></div>
                            <div className="absolute top-4 left-2 bottom-0 w-0.5 bg-white/20"></div>
                          </div>
                          <div className="bg-gray-800 backdrop-blur-sm rounded-xl p-4 flex-grow">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                              <h5 className="font-medium text-white">開発作業時間</h5>
                              <span className="text-sm font-mono text-vibrant bg-vibrant/10 px-2 py-1 rounded-full">10:00~22:00</span>
                            </div>
                            <p className="text-white/70 text-sm mt-1">以下のスピーカーセッションや食事の時間は並行して行われます。開発作業・セッション参加・休憩はご自由に選択できます。</p>
                          </div>
                        </div>

                        <div className="ml-8 space-y-4 mt-4">
                          {/* Minji Lee's Session */}
                          <div className="flex" onClick={() => {
                            setModalContent({
                              time: "10:00-10:20",
                              speaker: "Minji Lee",
                              title: "Making Better visionOS Apps, Guided by HIG",
                              description: "Sharing useful tips for developing visionOS apps, based on real development experience, and guided by Apple&apos;s Human Interface Guidelines (HIG).",
                              duration: "20 minutes"
                            });
                            setModalOpen(true);
                            document.body.style.overflow = "hidden";
                          }}>
                            <div className="mr-4 relative">
                              <div className="w-3 h-3 rounded-full bg-accent"></div>
                            </div>
                            <div className="bg-gray-800 backdrop-blur-sm rounded-xl p-3 flex-grow cursor-pointer border border-transparent hover:border-accent/50">
                              <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                                <div>
                                  <span className="text-xs font-semibold text-accent/80 uppercase tracking-wider">Speaker Session</span>
                                  <h5 className="font-medium text-white">Making Better visionOS Apps, Guided by HIG</h5>
                                  <p className="text-white/90 text-sm">By Minji Lee</p>
                                </div>
                                <span className="text-sm font-mono text-vibrant bg-vibrant/10 px-2 py-1 rounded-full mt-2 sm:mt-0">10:00-10:20</span>
                              </div>
                            </div>
                          </div>

                          {/* Mikaela Caron's Session */}
                          <div className="flex" onClick={() => {
                            setModalContent({
                              time: "10:25-10:50",
                              speaker: "Mikaela Caron",
                              title: "Let&apos;s Table That: Creating Games with TabletopKit for visionOS",
                              description: "Let&apos;s learn about Apple&apos;s newest framework TabletopKit for visionOS! You will learn what is TabletopKit and how you can get started using it to build games for visionOS. We&apos;ll review the basics of the framework and what it gives you, as opposed to building a game without it. We&apos;ll then explore how we would build Monopoly using TabletopKit. No visionOS experience is necessary for getting started! By the end of the talk you&apos;ll be able to begin building your own tabletop games.",
                              duration: "25 minutes"
                            });
                            setModalOpen(true);
                            document.body.style.overflow = "hidden";
                          }}>
                            <div className="mr-4 relative">
                              <div className="w-3 h-3 rounded-full bg-accent"></div>
                            </div>
                            <div className="bg-gray-800 backdrop-blur-sm rounded-xl p-3 flex-grow cursor-pointer border border-transparent hover:border-accent/50">
                              <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                                <div>
                                  <span className="text-xs font-semibold text-accent/80 uppercase tracking-wider">Speaker Session</span>
                                  <h5 className="font-medium text-white">Let&apos;s Table That: Creating Games with TabletopKit for visionOS</h5>
                                  <p className="text-white/90 text-sm">By Mikaela Caron</p>
                                </div>
                                <span className="text-sm font-mono text-vibrant bg-vibrant/10 px-2 py-1 rounded-full mt-2 sm:mt-0">10:25-10:50</span>
                              </div>
                            </div>
                          </div>

                          {/* Raven Zachary's Session */}
                          <div className="flex" onClick={() => {
                            setModalContent({
                              time: "10:55-11:20",
                              speaker: "Raven Zachary",
                              title: "The Apple Vision",
                              description: "VisionDevCamp Founder Raven Zachary presents a short talk on Apple&apos;s vision for their spatial computing platform - visionOS. Learn about where Apple Vision Pro is finding succes in the market today and where it&apos;s headed in the future. We are just at the beginning of Apple&apos;s journey into spatial computing.",
                              duration: "25 minutes"
                            });
                            setModalOpen(true);
                            document.body.style.overflow = "hidden";
                          }}>
                            <div className="mr-4 relative">
                              <div className="w-3 h-3 rounded-full bg-accent"></div>
                            </div>
                            <div className="bg-gray-800 backdrop-blur-sm rounded-xl p-3 flex-grow cursor-pointer border border-transparent hover:border-accent/50">
                              <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                                <div>
                                  <span className="text-xs font-semibold text-accent/80 uppercase tracking-wider">Speaker Session</span>
                                  <h5 className="font-medium text-white">The Apple Vision</h5>
                                  <p className="text-white/90 text-sm">By Raven Zachary</p>
                                </div>
                                <span className="text-sm font-mono text-vibrant bg-vibrant/10 px-2 py-1 rounded-full mt-2 sm:mt-0">10:55-11:20</span>
                              </div>
                            </div>
                          </div>

                          {/* Oliver Weidlich's Session */}
                          <div className="flex" onClick={() => {
                            setModalContent({
                              time: "11:25-11:40",
                              speaker: "Oliver Weidlich",
                              title: "Top 5 things to create a great visionOS User Experience",
                              description: "Having created two visionOS utilities, spoken about visionOS UX at conferences around the world, lectured for the visionOS Apple Foundation Program and mentored at MIT Reality Hack on visionOS UX Design, Oliver will share the five key aspects for a great visionOS app. He&apos;ll show best practice examples you can learn from and think about how you can apply in your application.",
                              duration: "15 minutes"
                            });
                            setModalOpen(true);
                            document.body.style.overflow = "hidden";
                          }}>
                            <div className="mr-4 relative">
                              <div className="w-3 h-3 rounded-full bg-accent"></div>
                            </div>
                            <div className="bg-gray-800 backdrop-blur-sm rounded-xl p-3 flex-grow cursor-pointer border border-transparent hover:border-accent/50">
                              <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                                <div>
                                  <span className="text-xs font-semibold text-accent/80 uppercase tracking-wider">Speaker Session</span>
                                  <h5 className="font-medium text-white">Top 5 things to create a great visionOS User Experience</h5>
                                  <p className="text-white/90 text-sm">By Oliver Weidlich</p>
                                </div>
                                <span className="text-sm font-mono text-vibrant bg-vibrant/10 px-2 py-1 rounded-full mt-2 sm:mt-0">11:25-11:40</span>
                              </div>
                            </div>
                          </div>

                          {/* Warren Stringer's Session */}
                          <div className="flex" onClick={() => {
                            setModalContent({
                              time: "11:45-12:05",
                              speaker: "Warren Stringer",
                              title: "Immersive Performances",
                              description: "Personas - how the AVP mixes with creators and their tools\nScripting - how I&apos;m using a data flow script to wire up a demo\nDemo - Lumi, Lightpad, Immersion, handpose, and Kusama dots\nFuture - The \"deep\" part -- scripting as another language model",
                              duration: "20 minutes"
                            });
                            setModalOpen(true);
                            document.body.style.overflow = "hidden";
                          }}>
                            <div className="mr-4 relative">
                              <div className="w-3 h-3 rounded-full bg-accent"></div>
                            </div>
                            <div className="bg-gray-800 backdrop-blur-sm rounded-xl p-3 flex-grow cursor-pointer border border-transparent hover:border-accent/50">
                              <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                                <div>
                                  <span className="text-xs font-semibold text-accent/80 uppercase tracking-wider">Speaker Session</span>
                                  <h5 className="font-medium text-white">Immersive Performances</h5>
                                  <p className="text-white/90 text-sm">By Warren Stringer</p>
                                </div>
                                <span className="text-sm font-mono text-vibrant bg-vibrant/10 px-2 py-1 rounded-full mt-2 sm:mt-0">11:45-12:05</span>
                              </div>
                            </div>
                          </div>

                          {/* Lunch */}
                          <div className="flex">
                            <div className="mr-4 relative">
                              <div className="w-3 h-3 rounded-full bg-vibrant"></div>
                            </div>
                            <div className="bg-gray-800 backdrop-blur-sm rounded-xl p-3 flex-grow">
                              <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                                <h5 className="font-medium text-white">昼食</h5>
                                <span className="text-sm font-mono text-vibrant bg-vibrant/10 px-2 py-1 rounded-full">13:00~</span>
                              </div>
                              <p className="text-white/70 text-sm mt-1">食事 & 交流</p>
                            </div>
                          </div>

                          {/* Dinner */}
                          <div className="flex">
                            <div className="mr-4 relative">
                              <div className="w-3 h-3 rounded-full bg-vibrant"></div>
                            </div>
                            <div className="bg-gray-800 backdrop-blur-sm rounded-xl p-3 flex-grow">
                              <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                                <h5 className="font-medium text-white">夕食</h5>
                                <span className="text-sm font-mono text-vibrant bg-vibrant/10 px-2 py-1 rounded-full">19:00~</span>
                              </div>
                              <p className="text-white/70 text-sm mt-1">食事 & 交流</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex">
                        <div className="mr-4 relative">
                          <div className="w-4 h-4 rounded-full bg-white/30"></div>
                        </div>
                        <div className="bg-gray-800 backdrop-blur-sm rounded-xl p-4 flex-grow">
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                            <h5 className="font-medium text-white">閉場</h5>
                            <span className="text-sm font-mono text-vibrant bg-vibrant/10 px-2 py-1 rounded-full">22:00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Day 3 - April 13 */}
                  <div className="relative">
                    <div className="flex items-center mb-6">
                      <div className="w-10 h-10 bg-success rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-white font-bold">3</span>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-2xl font-bold text-white">DAY 3: 4月13日(日)</h4>
                        <p className="text-vibrant font-medium">デモ & 審査</p>
                      </div>
                    </div>

                    <div className="ml-5 pl-10 border-l-2 border-white/20 space-y-6">
                      {/* Timeline items for Day 3 */}
                      <div className="flex">
                        <div className="mr-4 relative">
                          <div className="w-4 h-4 rounded-full bg-white/30"></div>
                        </div>
                        <div className="bg-gray-800 backdrop-blur-sm rounded-xl p-4 flex-grow">
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                            <h5 className="font-medium text-white">朝食</h5>
                            <span className="text-sm font-mono text-vibrant bg-vibrant/10 px-2 py-1 rounded-full">09:00-09:30</span>
                          </div>
                          <p className="text-white/70 text-sm mt-1">参加者同士・スポンサー企業エンジニアとの交流</p>
                        </div>
                      </div>

                      {/* Development Time Block - Day 3 */}
                      <div className="flex flex-col">
                        <div className="flex">
                          <div className="mr-4 relative">
                            <div className="w-4 h-4 rounded-full bg-success"></div>
                            <div className="absolute top-4 left-2 bottom-0 w-0.5 bg-white/20"></div>
                          </div>
                          <div className="bg-gray-800 backdrop-blur-sm rounded-xl p-4 flex-grow">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                              <h5 className="font-medium text-white">開発作業時間</h5>
                              <span className="text-sm font-mono text-vibrant bg-vibrant/10 px-2 py-1 rounded-full">9:30-15:00</span>
                            </div>
                            <p className="text-white/70 text-sm mt-1">最終プレゼン準備（以下の食事の時間は並行して行われます）</p>
                          </div>
                        </div>

                        <div className="ml-8 space-y-4 mt-4">
                          {/* Lunch - Day 3 */}
                          <div className="flex">
                            <div className="mr-4 relative">
                              <div className="w-3 h-3 rounded-full bg-vibrant"></div>
                            </div>
                            <div className="bg-gray-800 backdrop-blur-sm rounded-xl p-3 flex-grow">
                              <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                                <h5 className="font-medium text-white">昼食</h5>
                                <span className="text-sm font-mono text-vibrant bg-vibrant/10 px-2 py-1 rounded-full">13:00~</span>
                              </div>
                              <p className="text-white/70 text-sm mt-1">食事 & 交流</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex">
                        <div className="mr-4 relative">
                          <div className="w-4 h-4 rounded-full bg-white/30"></div>
                        </div>
                        <div className="bg-gray-800 backdrop-blur-sm rounded-xl p-4 flex-grow">
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                            <h5 className="font-medium text-white">最終成果発表</h5>
                            <span className="text-sm font-mono text-vibrant bg-vibrant/10 px-2 py-1 rounded-full">15:00-17:00</span>
                          </div>
                          <p className="text-white/70 text-sm mt-1">1チーム3~5分で発表</p>
                        </div>
                      </div>

                      <div className="flex">
                        <div className="mr-4 relative">
                          <div className="w-4 h-4 rounded-full bg-white/30"></div>
                        </div>
                        <div className="bg-gray-800 backdrop-blur-sm rounded-xl p-4 flex-grow">
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                            <h5 className="font-medium text-white">審査時間</h5>
                            <span className="text-sm font-mono text-vibrant bg-vibrant/10 px-2 py-1 rounded-full">17:00-18:00</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex">
                        <div className="mr-4 relative">
                          <div className="w-4 h-4 rounded-full bg-white/30"></div>
                        </div>
                        <div className="bg-gray-800 backdrop-blur-sm rounded-xl p-4 flex-grow">
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                            <h5 className="font-medium text-white">結果発表</h5>
                            <span className="text-sm font-mono text-vibrant bg-vibrant/10 px-2 py-1 rounded-full">18:00~</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex">
                        <div className="mr-4 relative">
                          <div className="w-4 h-4 rounded-full bg-white/30"></div>
                        </div>
                        <div className="bg-gray-800 backdrop-blur-sm rounded-xl p-4 flex-grow">
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                            <h5 className="font-medium text-white">懇親会</h5>
                            <span className="text-sm font-mono text-vibrant bg-vibrant/10 px-2 py-1 rounded-full">19:00~</span>
                          </div>
                          <p className="text-white/70 text-sm mt-1">夕食 & お祝い</p>
                        </div>
                      </div>

                      <div className="flex">
                        <div className="mr-4 relative">
                          <div className="w-4 h-4 rounded-full bg-white/30"></div>
                        </div>
                        <div className="bg-gray-800 backdrop-blur-sm rounded-xl p-4 flex-grow">
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                            <h5 className="font-medium text-white">閉場</h5>
                            <span className="text-sm font-mono text-vibrant bg-vibrant/10 px-2 py-1 rounded-full">21:00</span>
                          </div>
                        </div>
                      </div>
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

        {/* Modal for Session Details */}
        {modalOpen && (
          <div
            className="fixed inset-0 flex items-center justify-center z-[9999] px-4"
            onClick={() => {
              setModalOpen(false);
              document.body.style.overflow = "auto";
            }}
            style={{ isolation: "isolate" }}
          >
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
            <div
              className="gradient-accent rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative z-10"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => {
                  setModalOpen(false);
                  document.body.style.overflow = "auto";
                }}
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

              <div className="flex flex-col p-6">
                <span className="text-sm font-semibold text-accent/80 uppercase tracking-wider">{modalContent.time}</span>
                <h3 className="text-2xl font-bold text-white mt-2">{modalContent.title}</h3>
                <p className="text-secondary font-semibold mt-1">By {modalContent.speaker}</p>
                <div className="flex items-center mt-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-vibrant mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  <span className="text-white/80">{modalContent.duration}</span>
                </div>
                
                <div className="h-px w-full bg-white/20 my-4"></div>
                
                <div className="mt-4">
                  <h4 className="font-medium text-white mb-2">Session Description:</h4>
                  <p className="text-white/90 text-sm leading-relaxed whitespace-pre-line">{modalContent.description}</p>
                </div>
              </div>
            </div>
          </div>
        )}

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
                <SponsorCard
                  logo="/logo_yappli_rgb.png"
                  name="株式会社ヤプリ"
                  link="https://yappli.co.jp/"
                />
                <SponsorCard
                  logo="/Flitto_02_Logo_RGB.png"
                  name="フリットジャパン株式会社"
                  link="https://flitto.jp/"
                />
	  	<SponsorCard
                  logo="/techworld-logo.jpg"
                  name="︎TECH WORLD"
                  link="https://www.youtube.com/@TECHWORLD111"
                />
                <SponsorCard
                  logo="/nihonkougakuin.jpg"
                  name="日本工学院"
                  link="https://www.neec.ac.jp/vision_craft/"
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
                  logo="/xr-tokyo-logo.png"
                  name="︎XR Tokyo"
                  link="https://www.xrtokyo.com/"
                />
                <SponsorCard
                  logo="/spatial-developers-korea-logo.png"
                  name="Spatial Developers Korea"
                  link="https://x.com/spatialdevs"
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
          id="faq"
          className="w-full gradient-secondary text-white px-8 py-20 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-vibrant rounded-full filter blur-3xl opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary rounded-full filter blur-3xl opacity-20 transform -translate-x-1/2 translate-y-1/2"></div>

          <div className="container mx-auto max-w-5xl relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-12 relative inline-block">
              よくあるお問い合わせ
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-vibrant"></span>
            </h3>

            <div className="space-y-6">
              {/* FAQ Item 1 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-white/10 hover:border-accent/50 transition-colors duration-300">
                <details className="group">
                  <summary className="flex justify-between items-center font-semibold p-5 cursor-pointer">
                    <span className="text-lg">開発経験がないのですが、ハッカソンは初心者でも参加できますか？</span>
                    <span className="transition group-open:rotate-180">
                      <svg fill="none" height="24" width="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24">
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <div className="px-5 pb-5 text-white/90">
                    <p>もちろん参加いただけます。ハッカソンには必ずしも開発経験が豊富なエンジニアだけが参加するわけではありません。例えば、3Dモデラーやデザイナー、PM、映像関係の方など、コードを書いたことがない方でもご参加いただけますし、最低限コンピュータを扱うのに抵抗がない方であればどなたでも歓迎しています。</p>
                    <p className="mt-3">開発未経験でもApple Vision ProやvisionOSに興味があれば参加可能ですが、1人またはチームで力を合わせてアプリケーションを完成させようとする自発的な姿勢が求められます。会場では経験豊富なボランティアスタッフやメンターが開発をサポートしてくれるため、安心して取り組める環境が用意されています。</p>
                  </div>
                </details>
              </div>

              {/* FAQ Item 2 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-white/10 hover:border-accent/50 transition-colors duration-300">
                <details className="group">
                  <summary className="flex justify-between items-center font-semibold p-5 cursor-pointer">
                    <span className="text-lg">MacBookなどのMacを持っておらず、Windows PCしかありません。それでもvisionOS向けの開発は技術的に可能ですか？</span>
                    <span className="transition group-open:rotate-180">
                      <svg fill="none" height="24" width="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24">
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <div className="px-5 pb-5 text-white/90">
                    <p>残念ながら、基本的にWindows PCのみの環境ではvisionOS向けの開発は行えません。Appleの公式ドキュメントにもあるように、visionOSの開発にはAppleシリコン搭載のMacと、macOS上で動作するXcodeが必須です。Macをお持ちでない場合は、チーム内でMac環境を共有するなどの対応が必要となります。</p>
                  </div>
                </details>
              </div>

              {/* FAQ Item 3 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-white/10 hover:border-accent/50 transition-colors duration-300">
                <details className="group">
                  <summary className="flex justify-between items-center font-semibold p-5 cursor-pointer">
                    <span className="text-lg">Unityを使用して開発する場合、個人でUnity Proのライセンスを持っている必要がありますか？</span>
                    <span className="transition group-open:rotate-180">
                      <svg fill="none" height="24" width="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24">
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <div className="px-5 pb-5 text-white/90">
                    <p>Vision Proアプリ開発におけるUnityのvisionOSサポート(PolySpatial)は、Unity Pro／Enterprise／Industryプランの利用者向けに提供されています。そのため、無料のUnity Personalでは公式にサポートされていません。もしまだライセンスをお持ちでなければ、<a href="https://unity.com/ja/products/unity-pro" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">30日間の体験版でUnity Pro</a>をご利用いただくか、Apple純正のSDK（SwiftUIやRealityKitなど）を利用する方法もご検討ください。</p>
                  </div>
                </details>
              </div>

              {/* FAQ Item 4 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-white/10 hover:border-accent/50 transition-colors duration-300">
                <details className="group">
                  <summary className="flex justify-between items-center font-semibold p-5 cursor-pointer">
                    <span className="text-lg">個人(1人)で申し込んだ場合、ハッカソン当日はずっと一人で開発することになるのでしょうか？</span>
                    <span className="transition group-open:rotate-180">
                      <svg fill="none" height="24" width="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24">
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <div className="px-5 pb-5 text-white/90">
                    <p>個人参加でも、イベント初日の自己紹介やアイデア共有のセッションを通じて、他の参加者とチームを組むことが可能です。VisionDevCampではイベント初日に参加者同士の自己紹介やアイデアを共有する時間が設けられており、そこでチームビルディングが行われます。参加者が無事にチームを組み、ベストな状態で臨めるようにスタッフが全力でサポートします！</p>
                    <p className="mt-3">もちろん個人で開発することも可能ですが、基本的にはチームを編成して開発することを推奨しています(その方がアプリを開発しやすいし、何より楽しいです！)。</p>
                  </div>
                </details>
              </div>

              {/* FAQ Item 5 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-white/10 hover:border-accent/50 transition-colors duration-300">
                <details className="group">
                  <summary className="flex justify-between items-center font-semibold p-5 cursor-pointer">
                    <span className="text-lg">1日目の4月11日(金)だけ予定があり、どうしても参加できません。土日のみの参加でも問題ないでしょうか？</span>
                    <span className="transition group-open:rotate-180">
                      <svg fill="none" height="24" width="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24">
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <div className="px-5 pb-5 text-white/90">
                    <p>はい、土日のみでも参加いただくことは可能です。ただしチーム編成は1日目の夜〜2日目のアイデア共有時に行われることが多いので、事前にDiscordなどでアイデアや興味のある領域を表明し、参加者同士でチームを組めるように準備しておくとスムーズです。1日目に参加できない旨を事前アンケートなどで連絡していただければ、運営ができる限りサポートします。詳細はメールまたはDiscordをご確認ください。</p>
                  </div>
                </details>
              </div>

              {/* FAQ Item 6 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-white/10 hover:border-accent/50 transition-colors duration-300">
                <details className="group">
                  <summary className="flex justify-between items-center font-semibold p-5 cursor-pointer">
                    <span className="text-lg">チームはどのように決まりますか？Discordにてチーム募集はありますがどのようにしてチームを作るのかが分かりません。</span>
                    <span className="transition group-open:rotate-180">
                      <svg fill="none" height="24" width="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24">
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <div className="px-5 pb-5 text-white/90">
                    <p>1日目の夜に自己紹介とアイデアの共有があり、その後の時間で参加者同士が自由に声を掛け合いながらチームを作ります。主催者やスタッフもサポートに入りますので、1人で参加された方でも安心してチームを組むことができます。また、あえて個人で開発を進める選択も可能です。必ずしも当日にチームを編成しなければいけないわけではなく、予めチームで参加したり事前に<a href="https://discord.gg/t5X6KZruQQ" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Discord</a>等でチームを組むことも可能です。</p>
                    <p className="mt-3">事前にチーム形成を始めたい場合は、まず<a href="https://discord.gg/t5X6KZruQQ" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Discord</a>で自己紹介をして、アイデアを共有するのが第一歩です。自分が作ってみたいものを表明したり、メンバーを募集したりするのに「#team-formation・チーム編成」チャンネルを活用してください。他の参加者のアイデアや技術スタックを確認して、興味のあるプロジェクトに参加することもできます。</p>
                  </div>
                </details>
              </div>

              {/* FAQ Item 7 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-white/10 hover:border-accent/50 transition-colors duration-300">
                <details className="group">
                  <summary className="flex justify-between items-center font-semibold p-5 cursor-pointer">
                    <span className="text-lg">ハッカソン未経験で不安ですが、Apple Vision ProやXRに興味があり「勢いで参加」しても大丈夫でしょうか？</span>
                    <span className="transition group-open:rotate-180">
                      <svg fill="none" height="24" width="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24">
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <div className="px-5 pb-5 text-white/90">
                    <p>大歓迎です！VisionDevCamp Tokyo 2025は初心者・未経験者も積極的に受け入れています。メンターや経験豊富なスタッフが常駐しており、疑問点や技術的な課題を相談できる環境があります。チームビルディングやアイデアソンを通じて参加者同士が協力し合い、楽しみながら学んでいくことが目的の一つになっています。</p>
                  </div>
                </details>
              </div>

              {/* FAQ Item 8 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-white/10 hover:border-accent/50 transition-colors duration-300">
                <details className="group">
                  <summary className="flex justify-between items-center font-semibold p-5 cursor-pointer">
                    <span className="text-lg">外部モニタの貸し出しはありますか？</span>
                    <span className="transition group-open:rotate-180">
                      <svg fill="none" height="24" width="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24">
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <div className="px-5 pb-5 text-white/90">
                    <p>ございません。必要な方はご自身でお持ち込みください。</p>
                  </div>
                </details>
              </div>

              {/* FAQ Item 9 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-white/10 hover:border-accent/50 transition-colors duration-300">
                <details className="group">
                  <summary className="flex justify-between items-center font-semibold p-5 cursor-pointer">
                    <span className="text-lg">決済先の会社とVisionDevCamp Tokyoの関係性は何でしょうか？</span>
                    <span className="transition group-open:rotate-180">
                      <svg fill="none" height="24" width="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24">
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <div className="px-5 pb-5 text-white/90">
                    <p>決済先である株式会社IoTone Japanは、本イベントの共同運営者の一人が所有する法人で、<strong>決済処理の管理</strong>を行う主体として利用されています。そのため、支払い等の事務手続きはIoTone Japan経由で行われます。</p>
                  </div>
                </details>
              </div>

              {/* FAQ Item 10 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-white/10 hover:border-accent/50 transition-colors duration-300">
                <details className="group">
                  <summary className="flex justify-between items-center font-semibold p-5 cursor-pointer">
                    <span className="text-lg">チケットの譲渡はできますか？</span>
                    <span className="transition group-open:rotate-180">
                      <svg fill="none" height="24" width="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24">
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <div className="px-5 pb-5 text-white/90">
                    <p>lumaの規則に従ってください。運営として個別対応は致しかねますので、譲渡を希望される場合はlumaの規定に沿ってお手続きください。</p>
                  </div>
                </details>
              </div>

              {/* FAQ Item 11 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-white/10 hover:border-accent/50 transition-colors duration-300">
                <details className="group">
                  <summary className="flex justify-between items-center font-semibold p-5 cursor-pointer">
                    <span className="text-lg">当日の持ち物は何が必要ですか？</span>
                    <span className="transition group-open:rotate-180">
                      <svg fill="none" height="24" width="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24">
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <div className="px-5 pb-5 text-white/90">
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Mac(Appleシリコン搭載)</li>
                      <li>もしお持ちであればVision Pro本体や関連アクセサリー</li>
                      <li>各自必要なもの（延長コードや充電器など）</li>
                    </ul>
                  </div>
                </details>
              </div>

              {/* FAQ Item 12 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-white/10 hover:border-accent/50 transition-colors duration-300">
                <details className="group">
                  <summary className="flex justify-between items-center font-semibold p-5 cursor-pointer">
                    <span className="text-lg">カンファレンスはどの言語で開催されますか？</span>
                    <span className="transition group-open:rotate-180">
                      <svg fill="none" height="24" width="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24">
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <div className="px-5 pb-5 text-white/90">
                    <p><strong>基本的には日本語</strong>で行われますが、英語話者の参加者も多いため、登壇時は英語の字幕がつく予定です。また、英語を話せるスタッフも常時いますので、英語での質問や相談も可能です。</p>
                  </div>
                </details>
              </div>

              {/* FAQ Item 13 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-white/10 hover:border-accent/50 transition-colors duration-300">
                <details className="group">
                  <summary className="flex justify-between items-center font-semibold p-5 cursor-pointer">
                    <span className="text-lg">会場は飲食可能ですか？</span>
                    <span className="transition group-open:rotate-180">
                      <svg fill="none" height="24" width="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24">
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <div className="px-5 pb-5 text-white/90">
                    <p>はい、飲食可です。チケットに7食分が含まれており、軽食やドリンクなども自由に持ち込んでいただいて構いません。</p>
                  </div>
                </details>
              </div>

              {/* FAQ Item 14 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-white/10 hover:border-accent/50 transition-colors duration-300">
                <details className="group">
                  <summary className="flex justify-between items-center font-semibold p-5 cursor-pointer">
                    <span className="text-lg">チケットのキャンセルポリシーについて教えてください</span>
                    <span className="transition group-open:rotate-180">
                      <svg fill="none" height="24" width="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24">
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <div className="px-5 pb-5 text-white/90">
                    <p>イベント開催の2週間前を過ぎてからのキャンセルはご遠慮いただいています。詳しくはチケット販売ページの規約やlu.maの利用規約をお確かめください。</p>
                  </div>
                </details>
              </div>

              {/* FAQ Item 15 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-white/10 hover:border-accent/50 transition-colors duration-300">
                <details className="group">
                  <summary className="flex justify-between items-center font-semibold p-5 cursor-pointer">
                    <span className="text-lg">領収書・請求書は発行できますか？</span>
                    <span className="transition group-open:rotate-180">
                      <svg fill="none" height="24" width="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24">
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <div className="px-5 pb-5 text-white/90">
                    <p>個別の発行には対応しておりませんが、<a href="https://lu.ma/settings/payment" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Lumaの決済履歴画面</a>からご自身で領収書を作成することが可能です。宛名を変更したい場合は、<a href="https://lu.ma/settings" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Lumaの設定</a>でアカウント名を一時的に変更し、再度領収書を作成してください。</p>
                  </div>
                </details>
              </div>

              {/* FAQ Item 16 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-white/10 hover:border-accent/50 transition-colors duration-300">
                <details className="group">
                  <summary className="flex justify-between items-center font-semibold p-5 cursor-pointer">
                    <span className="text-lg">当日までにやることはありますか？</span>
                    <span className="transition group-open:rotate-180">
                      <svg fill="none" height="24" width="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24">
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <div className="px-5 pb-5 text-white/90">
                    <ul className="list-disc pl-5 space-y-2">
                      <li>VisionDevCamp Tokyoの<a href="https://discord.gg/t5X6KZruQQ" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Discordサーバー</a>に参加する</li>
                      <li>事前に自己紹介スライドを作成する</li>
                      <li>チーム参加を希望する方は、<a href="https://discord.gg/t5X6KZruQQ" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Discordサーバー</a>の[#self-introduction・自己紹介]や[#team-formation・チーム編成]チャンネルなどでアイデアの共有や情報収集を行う</li>
                      <li>Unityを使う方はUnity Proの体験版準備や必要なSDKのインストール</li>
                      <li>Mac環境のセットアップ(Xcodeや必要なライブラリのダウンロードなど)</li>
                      <li><strong>以下の公式ドキュメントを一読しておくと開発がスムーズになります：</strong>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                          <li><a href="https://developer.apple.com/jp/visionos/pathway/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">visionOS Pathway</a> - visionOSアプリを作り始めるための参考ドキュメント等をまとめたページ</li>
                          <li><a href="https://developer.apple.com/documentation/visionos/introductory-visionos-samples" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Introductory visionOS samples</a> - 基本的な要素ごとのサンプルコード</li>
                          <li><a href="https://developer.apple.com/learn/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Swift開発のチュートリアル</a> - SwiftUI等アップルのプラットフォームに慣れてない方が基本を学ぶチュートリアル</li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </details>
              </div>

              {/* FAQ Item 17 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-white/10 hover:border-accent/50 transition-colors duration-300">
                <details className="group">
                  <summary className="flex justify-between items-center font-semibold p-5 cursor-pointer">
                    <span className="text-lg">電源タップは必要ですか？</span>
                    <span className="transition group-open:rotate-180">
                      <svg fill="none" height="24" width="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24">
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <div className="px-5 pb-5 text-white/90">
                    <p>会場にも用意はありますが、数に限りがある場合もございます。複数のデバイスを同時に充電する場合は、各自電源タップをご持参いただくとより快適です。</p>
                  </div>
                </details>
              </div>

              {/* FAQ Item 18 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-white/10 hover:border-accent/50 transition-colors duration-300">
                <details className="group">
                  <summary className="flex justify-between items-center font-semibold p-5 cursor-pointer">
                    <span className="text-lg">開発環境構築を含むプレイベントに欠席してしまったのですが、参加できますか？</span>
                    <span className="transition group-open:rotate-180">
                      <svg fill="none" height="24" width="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24">
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <div className="px-5 pb-5 text-white/90">
                    <p>問題ありません。当日はメンターが会場にいますので、わからないところでつまずいたらその場で質問できます。ただし、時間短縮のためにも、できる範囲で事前にXcodeやUnityのセットアップを済ませておくと良いでしょう。</p>
                  </div>
                </details>
              </div>

              {/* FAQ Item 19 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-white/10 hover:border-accent/50 transition-colors duration-300">
                <details className="group">
                  <summary className="flex justify-between items-center font-semibold p-5 cursor-pointer">
                    <span className="text-lg">本イベントでは宿泊のサポートはありますか？</span>
                    <span className="transition group-open:rotate-180">
                      <svg fill="none" height="24" width="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24">
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <div className="px-5 pb-5 text-white/90">
                    <p>申し訳ございませんが、宿泊施設の手配は各自でお願いしております。必要に応じてホテルなどをご予約ください。</p>
                  </div>
                </details>
              </div>

              {/* FAQ Item 20 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-white/10 hover:border-accent/50 transition-colors duration-300">
                <details className="group">
                  <summary className="flex justify-between items-center font-semibold p-5 cursor-pointer">
                    <span className="text-lg">チームは絶対に作らなければいけないのでしょうか？チームビルディングへの参加は必須ですか？</span>
                    <span className="transition group-open:rotate-180">
                      <svg fill="none" height="24" width="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24">
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <div className="px-5 pb-5 text-white/90">
                    <p><strong>必須ではありません。個人での参加も可能</strong>です。しかしながら、チーム開発は多角的な視点やアイデアが得られるほか、技術や作業量を分担できるため、結果としてより完成度の高いプロダクトを目指しやすい傾向があります。何より、仲間と協力して開発に没頭できる楽しさや学びはチームならではの醍醐味なので、できる限りチーム参加を検討してみることをおすすめします。</p>
                  </div>
                </details>
              </div>
            </div>
          </div>
        </section>

        <section
          id="organizers"
          className="w-full gradient-secondary text-white px-8 py-20 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-vibrant rounded-full filter blur-3xl opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary rounded-full filter blur-3xl opacity-20 transform -translate-x-1/2 translate-y-1/2"></div>

          <div className="container mx-auto max-w-5xl relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-12 relative inline-block">
              主催者
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-vibrant"></span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {organizers.map((organizer, index) => (
                <OrganizerCard key={index} {...organizer} />
              ))}
            </div>

            <h4 className="text-2xl font-bold text-white mb-8 relative inline-block">
              東京メンバー
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-vibrant"></span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
              {tokyoTeam.map((member, index) => (
                <TeamMemberCard key={index} {...member} />
              ))}
            </div>

            <h4 className="text-2xl font-bold text-white mb-8 relative inline-block">
              福岡メンバー
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-vibrant"></span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {fukuokaTeam.map((member, index) => (
                <TeamMemberCard key={index} {...member} />
              ))}
            </div>
          </div>
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
                  href="#organizers"
                  className="hover:text-red-400 transition-colors"
                >
                  主催者
                </Link>
                <Link
                  href="#team"
                  className="hover:text-red-400 transition-colors"
                >
                  チーム
                </Link>
                <Link
                  href="#sponsors"
                  className="hover:text-red-400 transition-colors"
                >
                  スポンサー
                </Link>
                <Link
                  href="#faq"
                  className="hover:text-red-400 transition-colors"
                >
                  よくある質問
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
              <Link href="#organizers" className="hover:underline font-bold">
                主催者
              </Link>
            </li>
            <li className="mb-2">
              <Link href="#team" className="hover:underline font-bold">
                チーム
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
              <Link href="#faq" className="hover:underline font-bold">
                よくある質問
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
            <Link href="#organizers" className="hover:underline font-bold">
              主催者
            </Link>
          </li>
          <li>
            <Link href="#team" className="hover:underline font-bold">
              チーム
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
            <Link href="#faq" className="hover:underline font-bold">
              よくある質問
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

  const openModal = () => {
    setModalOpen(true);
    // Prevent scrolling when modal is open
    document.body.style.overflow = "hidden";
  };
  
  const closeModal = (e) => {
    if (e) {
      e.stopPropagation();
    }
    setModalOpen(false);
    // Re-enable scrolling when modal is closed
    document.body.style.overflow = "auto";
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
          className="fixed inset-0 flex items-center justify-center z-[9999] px-4"
          onClick={closeModal}
          style={{ isolation: "isolate" }}
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
                  <div className="mt-6 flex space-x-3 justify-center md:justify-start">
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

  const openModal = () => {
    setModalOpen(true);
    // Prevent scrolling when modal is open
    document.body.style.overflow = "hidden";
  };
  
  const closeModal = (e) => {
    if (e) {
      e.stopPropagation();
    }
    setModalOpen(false);
    // Re-enable scrolling when modal is closed
    document.body.style.overflow = "auto";
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
          className="fixed inset-0 flex items-center justify-center z-[9999] px-4"
          onClick={closeModal}
          style={{ isolation: "isolate" }}
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
                  <div className="mt-6 flex space-x-3 justify-center md:justify-start">
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

// Add these components at the bottom of the file
function TimelineItem({ time, title, subtitle }) {
  return (
    <div className="flex group">
      <div className="mr-4 relative">
        <div className="w-4 h-4 rounded-full bg-white/30 group-hover:bg-vibrant transition-colors duration-300"></div>
        <div className="absolute top-0 left-2 h-full w-px bg-white/10 group-hover:bg-white/30 transition-colors duration-300"></div>
      </div>
      <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 flex-grow transform transition-all duration-300 group-hover:bg-white/10 group-hover:translate-x-1">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between">
          <h5 className="font-medium text-white">{title}</h5>
          <span className="text-sm font-mono text-vibrant bg-vibrant/10 px-2 py-1 rounded-full">{time}</span>
        </div>
        {subtitle && <p className="text-white/70 text-sm mt-1">{subtitle}</p>}
      </div>
    </div>
  );
}

function SessionItem({ time, speaker, title, description, duration }) {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
    document.body.style.overflow = "hidden";
  };
  
  const closeModal = (e) => {
    if (e) {
      e.stopPropagation();
    }
    setModalOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      <div className="flex group">
        <div className="mr-4 relative">
          <div className="w-4 h-4 rounded-full bg-accent group-hover:bg-vibrant transition-colors duration-300"></div>
          <div className="absolute top-0 left-2 h-full w-px bg-white/10 group-hover:bg-white/30 transition-colors duration-300"></div>
        </div>
        <div 
          onClick={openModal}
          className="bg-white/5 backdrop-blur-sm rounded-xl p-4 flex-grow transform transition-all duration-300 group-hover:bg-white/10 group-hover:translate-x-1 cursor-pointer border border-transparent hover:border-accent/50"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between">
            <div>
              <span className="text-xs font-semibold text-accent/80 uppercase tracking-wider">Speaker Session</span>
              <h5 className="font-medium text-white">{title}</h5>
              <p className="text-white/90 text-sm">By {speaker}</p>
            </div>
            <span className="text-sm font-mono text-vibrant bg-vibrant/10 px-2 py-1 rounded-full mt-2 sm:mt-0">{time}</span>
          </div>
        </div>
      </div>

      {modalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center z-[9999] px-4"
          onClick={closeModal}
          style={{ isolation: "isolate" }}
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

            <div className="flex flex-col p-6">
              <span className="text-sm font-semibold text-accent/80 uppercase tracking-wider">{time}</span>
              <h3 className="text-2xl font-bold text-white mt-2">{title}</h3>
              <p className="text-secondary font-semibold mt-1">By {speaker}</p>
              <div className="flex items-center mt-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-vibrant mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                <span className="text-white/80">{duration}</span>
              </div>
              
              <div className="h-px w-full bg-white/20 my-4"></div>
              
              <div className="mt-4">
                <h4 className="font-medium text-white mb-2">Session Description:</h4>
                <p className="text-white/90 text-sm leading-relaxed whitespace-pre-line">{description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function OrganizerCard({ image, name, title, description, bio, socialMedia = [] }) {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
    document.body.style.overflow = "hidden";
  };
  
  const closeModal = (e) => {
    if (e) {
      e.stopPropagation();
    }
    setModalOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      <div
        onClick={openModal}
        className="bg-white/10 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden transform transition-transform hover:scale-105 duration-300 h-full cursor-pointer hover:shadow-glow"
      >
        <div className="flex flex-col md:flex-row h-full items-center p-6">
          <div className="w-32 h-32 flex-shrink-0 rounded-full overflow-hidden border-4 border-white/20 shadow-xl mb-4 md:mb-0">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4 flex-grow text-center md:text-left">
            <h3 className="text-white text-xl font-bold">{name}</h3>
            <p className="text-white/90 text-sm">{title}</p>
            {description && (
              <p className="text-white/80 text-xs mt-1">{description}</p>
            )}
            <p className="text-white/80 text-sm mt-2 line-clamp-3">{bio.split('\n')[0]}</p>
          </div>
        </div>
      </div>

      {modalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center z-[9999] px-4"
          onClick={closeModal}
          style={{ isolation: "isolate" }}
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

            <div className="flex flex-col md:flex-row md:items-start p-6 gap-6">
              <div className="md:w-1/3 flex justify-center">
                <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white/20 shadow-xl mb-6 md:mb-0">
                  <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="md:w-2/3 text-center md:text-left">
                <h3 className="text-2xl font-bold text-white mb-1">{name}</h3>
                <p className="text-secondary font-semibold mb-1">{title}</p>
                {description && (
                  <p className="text-white/80 mb-4">{description}</p>
                )}
                <div className="h-px w-full bg-white/20 my-4"></div>
                <div className="text-white/90 text-sm leading-relaxed max-w-xl whitespace-pre-line">
                  {bio.split('\n').map((line, i) => (
                    <p key={i} className="mb-2">
                      {line.includes('[') && line.includes('](') 
                        ? line.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (match, text, url) => (
                            React.createElement(React.Fragment, {}, 
                              line.split(/\[([^\]]+)\]\(([^)]+)\)/).map((part, index, array) => {
                                if (index % 3 === 0) {
                                  return part;
                                } else if (index % 3 === 1) {
                                  const url = array[index + 1];
                                  return React.createElement('a', {
                                    href: url,
                                    key: index,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "text-accent hover:underline"
                                  }, part);
                                }
                                return null;
                              }).filter(Boolean)
                            )
                          ))
                        : line}
                    </p>
                  ))}
                </div>

                {socialMedia.length > 0 && (
                  <div className="mt-6 flex space-x-3 md:justify-start">
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

function TeamMemberCard({ image, name, title, description, bio, socialMedia = [] }) {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
    document.body.style.overflow = "hidden";
  };
  
  const closeModal = (e) => {
    if (e) {
      e.stopPropagation();
    }
    setModalOpen(false);
    document.body.style.overflow = "auto";
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
            {title && <p className="text-white/90 text-sm">{title}</p>}
            {description && (
              <p className="text-white/80 text-xs mt-1">{description}</p>
            )}
          </div>
          <div className="p-4 pt-0 flex-grow">
            <p className="text-white/80 text-sm line-clamp-3">
              {typeof bio === 'string' && bio.includes('\n') 
                ? bio.split('\n')[0] 
                : bio}
            </p>
          </div>
        </div>
      </div>

      {modalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center z-[9999] px-4"
          onClick={closeModal}
          style={{ isolation: "isolate" }}
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
                {title && <p className="text-vibrant font-semibold mb-1">{title}</p>}
                {description && (
                  <p className="text-white/80 mb-4">{description}</p>
                )}
                <div className="h-px w-full bg-white/20 my-4"></div>
                <div className="text-white/90 text-sm leading-relaxed max-w-xl text-left whitespace-pre-line">
                  {typeof bio === 'string' && bio.includes('\n') 
                    ? bio.split('\n').map((line, i) => (
                        <p key={i} className="mb-2">
                          {line.includes('[') && line.includes('](') 
                            ? line.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (match, text, url) => (
                                React.createElement(React.Fragment, {}, 
                                  line.split(/\[([^\]]+)\]\(([^)]+)\)/).map((part, index, array) => {
                                    if (index % 3 === 0) {
                                      return part;
                                    } else if (index % 3 === 1) {
                                      const url = array[index + 1];
                                      return React.createElement('a', {
                                        href: url,
                                        key: index,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "text-accent hover:underline"
                                      }, part);
                                    }
                                    return null;
                                  }).filter(Boolean)
                                )
                              ))
                            : line}
                        </p>
                      ))
                    : bio}
                </div>

                {socialMedia.length > 0 && (
                  <div className="mt-6 flex space-x-3 md:justify-start">
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

