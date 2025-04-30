"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";

const judges = [
  {
    image: "/satoshi-san-profile-image.png",
    name: "Satoshi Hattori",
    title: "Cyber AI Productions",
    description: "XR Engineer",
    bio: "Works at CyberAgent. Previously engaged in app development at AbemaTV, later developing virtual shooting studio tools at the AICG division. Certified in-house AR Expert. Author of visionOS books. Frequently speaks at conferences both domestically and internationally.",
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
    name: "Aimi Sekiguchi",
    title: "XR / Spatial Artist",
    description: "",
    bio: 'Has been working as an artist creating 3D paintings in VR space since 2016. Received art commissions and live painting requests from 13 countries worldwide. Her solo exhibition in the metaverse attracted many visitors from around the world and was selected for the VR category at the Venice International Film Festival. Her first NFT artwork was sold for approximately 13 million yen, making headlines. Selected as one of the "Forbes Japan 100" in 2021. Officially recognized as an artist by the Dubai government.',
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
    name: "Shinobu Takahashi",
    title: "Unity Technologies Japan",
    description: "Solution Architect",
    bio: "Previously worked at Microsoft Japan primarily as a Technical Evangelist, promoting application development technologies for Windows, Mobile, HoloLens, and more. Currently at Unity Technologies as a Solution Architect, focusing on promoting Unity products and technologies, including XR-related technologies, for the industrial sector.",
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
    name: "Junichiro Koyama",
    title: "Nihon Kogakuin College",
    description: "Vision Craft Executive Producer",
    bio: "During his tenure at Bandai Namco Group, he developed over 100 titles, including The Idolmaster, Mobile Suit Gundam: Bonds of the Battlefield, and Fishing Spirits, and produced VR ZONE. Currently, He leads the educational innovation project Vision Craft at Nihon Kogakuin College.",
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
    name: "Ikkou Morohoshi",
    title: "ONE SHOT STAR",
    description: "LODGE XR Talk",
    bio: '2024-2025 Microsoft MVP / A strong advocate for WebXR and visionOS! Hosting the monthly "LODGE XR Talk" at the open collaboration hub LODGE, featuring discussions and hands-on experiences on the latest XR trends.',
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
    name: "Daigo Ushijima",
    title: "Tokyo University of the Arts",
    description: "Intermedia Art Art Media Center",
    bio: "A media artist and researcher, they gained early recognition when their work was selected as a Jury Recommended Work at the 2004 Japan Media Arts Festival by the Agency for Cultural Affairs. Since then, they have continued to present their works at exhibitions both domestically and internationally, including in South Korea and China. In the field of education, after serving as a lecturer at the China Academy of Art, they have been engaged in education and research at Tokyo University of the Arts to this day.",
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
    description: "Chief Operating Officer (COO)",
    bio: "Raven Zachary is the Chief Operating Officer (COO) at ARound, focused on augmented reality experiences for live events. He has been working professionally with spatial computing since 2015 and Apple technology since 2007. In addition to his work concerning Apple Vision Pro and visionOS with AWE for the Vision Workshop and as the co-founder of VisionDevCamp, he was the co-founder of the Portland Virtual Reality Meetup and the founder of the Portland HoloLens Meetup. Raven joins ARound through Stagwell's acquisition of Object Theory, a leader in creating custom augmented reality applications for businesses using wearables, smartphones, and tablets.",
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
    bio: "Working with the world to make AR and VR experiences for everyone. Bringing XR experiences through VisionPro and other platforms. Transforming visions into immersive realities using Unity and AR/VR technologies. Triple Master's degrees in Engineering, Computer Science, Lighting & XR, and a MSc in Optics, Image, Computer Vision, and Multimedia. Committed to pushing boundaries, enhancing customer engagement, and delivering innovative experiences. Proficient in Unity, C#, and C++, with expertise in shaders, animations, and UI/UX design. Multilingual: English, French, Japanese, and Spanish.",
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
    description: "Tech Mentor",
    bio: "Previously worked at an AR company as an iOS developer. Currently exploring various aspects of visionOS and has given talks on the topic at multiple conferences in Korea and abroad. Also published educational content on Udemy and runs a community in Korea for developers and designers interested in Apple's Spatial Computing. Through these ongoing explorations, is committed to sharing the knowledge and insights gained from experience with the broader community.",
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
    description: "Director of Design & Innovation",
    bio: "With over 25 years in UX, Oliver has been exploring the research and design of Augmented Reality and Spatial Computing for the last 8 years. His company, Contxtual, has created a range of prototypes with Augmented Reality headsets to experiment with how people will use Spatial Computing. Their app, Day Ahead, is a glanceable information visualisation of your calendar information and was in the App Store for the launch day of the Apple Vision Pro launch in February last year. He is an Industry Mentor for the Apple Foundation Program at the University of Technology Sydney, including teaching students about how to design for visionOS on the Apple Vision Pro.",
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
    title: "Independent iOS Engineer",
    description: "",
    bio: "Mikaela Caron is an independent iOS Engineer who actively shares her expertise on social media, focusing on iOS development, building apps in public, and freelancing. She's continuing to work on her indie app Fruitful, which helps people connect with others at conferences, while also traveling as much as she can. She's also an organizer for iOSDevHappyHour and loves giving back to the community.",
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
    description: "Founder",
    bio: "A long time ago, I met up with Doug Engelbart — his team invented the mouse and text on screen. Today, I'm exploring (with code) how the mouse has evolved into hand pose. And of how screens have become an extension of our eyes.",
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
    title: "Vision Os UX/UI Design | Graphic Designer | 3D Artist",
    description: "",
    bio: "Multidisciplinary designer with a strong background in visual communication and a specialization in immersive technologies, spatial computing, and 3D environment design. I combine creativity with technical expertise to craft innovative digital experiences on emerging platforms such as Apple Vision Pro and within mixed reality environments. I have hands-on experience in XR prototyping, creating interactive spaces, and designing intuitive spatial interfaces.",
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
    title: "visionOS, iOS UX/UI Designer | Cognitive Ergonomist",
    description: "",
    bio: "UX/UI Designer, with 2 years of experience specialised in User Experience Research, Interaction Design, Accessibility, AR, VR, and XR. The academical titles as cognitive psychologist and cognitive ergonomist allow me to understand how our brain interacts and reacts to technologies, and consequently how to design the best structure of apps and products.",
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
    title: "visionOS and Apple ecosystem developer, software engineer",
    description: "",
    bio: "Software developer specializing in XR within the Apple ecosystem. With a strong foundation in visionOS, SwiftUI, and Reality Composer, creating immersive AR/VR/MR experiences designed for next-gen platforms. Big technical expertise ranging from Metal integration to C++ interoperability, with accessible and scalable UI/UX design. My greatest projects include apps like Astral Wilds (visionOS), an open-source package VisionTextArc (visionOS), and creative projects such as Tria Tactics (iOS/iPadOS).",
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
    title: "Virtualization Enthusiast | UNIX Specialist | Apple Developer",
    description: "",
    bio: "Versatile Developer with expertise in macOS development and UNIX systems administration, proficient in complex frameworks and experienced in building high-quality software targeting the Apple ecosystem, including a Mac App Store release. Passionate about open-source software, with multiple published Swift packages. Skilled in database engineering and scalable system integration. A self-driven problem solver who tackles challenging technical architectures independently while thriving in collaborative teams.",
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
    title: "iOS & visionOS Developer",
    description: "",
    bio: "Experienced VisionOS, iOS and Unity developer with a deep passion for nature and accessibility. Creates user-friendly digital experiences for the entire Apple ecosystem, leveraging strong expertise in SwiftUI, UIKit, ARKit and RealityKit. Co-founder of \"Parts,\" an innovative startup dedicated to helping visually impaired people experience art in new and accessible ways, recognized by several prominent articles. His work blends creativity and technical skills, with a strong commitment to inclusive technologies and interactive 3D experiences.",
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
    title: "Software Developer | Apple Developer",
    description: "",
    bio: "Full-stack developer with strong experience in mobile and immersive technologies. Skilled in delivering user-focused applications and in combining technical expertise with creativity and cross-functional collaboration. Currently pursuing a master's in Artificial Intelligence after completing a Computer Science degree.",
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
  {
    image: "/default_profile_400x400.png",
    name: "Dario Laverde",
    title: "Sr Creative Technologist",
    description: "XR Specialist/developer/advisor, former Dir Developer Relations, HTC",
    bio: "He will give a talk titled \"Using Unity to Develop for AVP (in a cross-platform way)\", where he will cover how to port Unity content from Android-based headsets (e.g. Quest, Vive, Pico) to Vision Pro, and how to use Unity’s XR Interaction Toolkit, XR Hands, and Multiplayer templates to build new projects.",
    socialMedia: [
      {
        platform: "LinkedIn",
        url: "https://linkedin.com/in/dariony",
        icon: "/linkedin-logo.png",
      },
      {
        platform: "Bluesky",
        url: "https://bsky.app/profile/virtualdario.bsky.social",
        icon: "/bluesky-logo.png",
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
    name: "Takuzen Toh",
    title: "Co-organizer of VisionDevCamp Tokyo",
    description: "Engineer",
    bio: (
  <>
    Winner of Most Useful App at VisionDevCamp · Speaker at Let's Vision 2025 · Creator of <em>Caspy</em>, an immersive video app built for Apple Vision Pro
  </>),
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
    title: "Co-organizer of VisionDevCamp Tokyo",
    description: "",
    bio: "Organizing visionOS Study Group since 2023. Designer and developer of DevCamp. Interested in development organization models and funding mechanisms that incentivize open source and open standards.",
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
    bio: "Organizer of Yorihiroi Frontend. XR Developer and Apple Vision Pro holder. Freelance developer and founder of Kansock Industries. ARJAM award winner (hosted by XREAL). Co-organizer of VisionDevCamp Tokyo.",
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
    name: "Koyasu Munenori",
    title: "Designer",
    description: "",
    bio: "UX designer based in Tokyo. Engaged in UX design for web systems and website design. Currently enrolled in the doctoral program at Tokyo Denki University, deepening his knowledge of UX.",
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
    bio: "4th-year engineering student at the University of Tokyo. Software engineer. Developed 'DevCamp', an Apple Vision Pro app that serves as the online venue for Vision Dev Camp Tokyo 2025.",
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
    bio: "Data Platform Engineer.",
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
    bio: "David Kordsmeier is a software developer with experience working for a large tech company early in his career on Java and mobile and embedded systems. David currently runs a boutique consultancy focused on startup company innovation, with over 30 startup clients in the company portfolio. He currently is focused on launching a new AR/VR/IoT startup venture in called IoTone Japan, based in Fukuoka.",
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
    name: "Kanako Nakiri",
    title: "",
    description: "",
    bio: "She is a member of Roku inc. and is based in Fukuoka, where she develops web applications. She is particularly skilled in the e-commerce field, and has been involved in a wide range of projects, from building e-commerce sites to developing related apps.",
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
    description: "Community Manager - Fukuoka Engineer Cafe",
    bio: "Software Engineer and Community Manager of Fukuoka Engineer Cafe.",
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
              className="w-full h-full object-cover object-center"
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
                The historic hackathon that has continued in Silicon Valley
                since 2007 is coming to Japan for the first time!
              </a>

              <p className="text-xl sm:text-2xl mt-4 text-white font-medium">
                Whether you&apos;re working individually or in a team,
                let&apos;s bring Vision Pro ideas to life together!
              </p>

              <div className="mt-8 text-center">
                <p className="text-4xl sm:text-5xl font-bold text-red-400">
                  April 11<span className="text-2xl sm:text-3xl"> (Fri)</span> -
                  13<span className="text-2xl sm:text-3xl"> (Sun)</span>, 2025
                </p>
              </div>

              <div className="mt-6 text-center">
                <p className="text-lg sm:text-xl font-bold">
                  Venue:
                  <span className="underline decoration-[1px]">
                    <a
                      href="https://www.z-lodge.com/#space"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-red-300 transition-colors"
                    >
                      {" ︎Open Collaboration Hub LODGE "}
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
                  Register Here →
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
                  What is VisionDevCamp Tokyo
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-accent"></span>
                </h2>
              </div>

              <div className="flex flex-col lg:flex-row gap-12 items-center">
                <div className="lg:w-1/2">
                  <div className="rounded-xl overflow-hidden shadow-2xl transform transition-transform hover:scale-105 duration-500 shadow-glow">
                    <img
                      src="/visiondevcamp2024-2.jpeg"
                      alt="VisionDevCamp 2024 Participants"
                      className="w-full object-cover"
                    />
                  </div>
                </div>

                <div className="lg:w-1/2">
                  <p className="text-xl leading-relaxed mb-6">
                    VisionDevCamp is a nonprofit developer event focused on app
                    development for Apple Vision Pro and visionOS, bringing
                    together developers, designers, entrepreneurs, and
                    enthusiasts.
                  </p>

                  <p className="text-xl leading-relaxed mb-6">
                    Started in Silicon Valley in 2007, this is the first time it
                    will be held in Japan. Over three days, participants will
                    form teams to bring ideas to life, culminating in
                    demonstrations in front of judges on the final day.
                  </p>

                  <p className="text-xl leading-relaxed">
                    An experienced team of volunteers will support your
                    development, providing meals, power, internet, and
                    networking opportunities.
                  </p>

                  <div className="mt-8 flex">
                    <a
                      href="https://lu.ma/wsqwzm4s"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-red-500 hover:bg-opacity-90 text-white font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105 shadow-glow-accent pulse-shadow"
                    >
                      Participate →
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
              Uniqueness
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
                  Developers gathering to create apps for Apple Vision Pro
                </h2>
                <ul className="list-disc pl-5 mt-6 space-y-4 text-white">
                  <li>
                    VisionDevCamp is a nonprofit developer event focused on app
                    development for Apple Vision Pro and visionOS.
                  </li>
                  <li>
                    A team of experienced volunteers supports developers,
                    designers, entrepreneurs, and enthusiasts working on Vision
                    Pro and visionOS.
                  </li>
                  <li>
                    The event takes place from Friday to Sunday, where
                    participants collaborate on projects both individually and
                    in teams.
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
                  One of the world&apos;s largest visionOS developer communities
                </h2>
                <p className="mt-6 text-white">
                  The first VisionDevCamp in March 2024 attracted visionOS
                  developers from around the world.
                </p>
                <p className="mt-4 text-white">
                  Despite the product&apos;s recent launch, over 100 Vision Pro
                  devices and developers participated in the hackathon.
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
                  Nonprofit, volunteer-run operation
                </h2>
                <p className="mt-6 text-white">
                  A nonprofit event operated by volunteers, funded by both
                  sponsors and participants.
                </p>
                <p className="mt-4 text-white">
                  Aims to keep participation costs low while providing space,
                  meals, power, internet, and networking opportunities to help
                  participants focus on building great applications.
                </p>
              </div>
            </div>

            <div className="mt-16 text-center">
              <Link
                href="/en/history"
                className="inline-block text-primary bg-light py-3 px-8 rounded-full hover:bg-white/90 transition shadow-lg font-bold transform hover:scale-105 duration-300 pulse-shadow"
              >
                Learn More →
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
                  Venues
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
                      alt="LODGE Venue"
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                      <h3 className="text-2xl font-bold">Main Venue (Tokyo)</h3>
                    </div>
                    <h4 className="text-xl font-semibold mb-3">
                      Open Collaboration Hub LODGE
                    </h4>
                    <p className="text-gray-300 mb-4">
                      An open space with the latest facilities where you can
                      develop while interacting face-to-face with other
                      developers. Equipped with meals, power, and high-speed
                      internet to provide an environment where you can
                      concentrate on development.
                    </p>
                    <div className="flex justify-between items-center mt-4">
                      <span className="text-sm text-gray-400"></span>
                      <a
                        href="https://www.z-lodge.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-red-300 font-bold"
                      >
                        Details →
                      </a>
                    </div>
                  </div>
                </div>

                {/* Online Venue */}
                <div className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl shadow-glow transition-transform hover:scale-105 duration-300">
                  <div className="h-64 overflow-hidden flex flex-col">
                    <img
                      src="/online_venue.png"
                      alt="Online Venue"
                      className="w-full h-1/2 object-cover hover:scale-110 transition-transform duration-500"
                    />
                    <img
                      src="/online_venue2.png"
                      alt="Online Venue"
                      className="w-full h-1/2 object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-3 h-3 bg-blue-500 rounded-full mr-2 animate-pulse"></div>
                      <h3 className="text-2xl font-bold">Online Venue</h3>
                    </div>
                    <h4 className="text-xl font-semibold mb-3">DevCamp</h4>
                    <p className="text-gray-300 mb-4">
                      In the online venue accessible from anywhere, you can
                      collaborate with other participants and progress your
                      development regardless of location.
                    </p>
                    <div className="flex justify-between items-center mt-4">
                      <span className="text-sm text-gray-400"></span>
                      <a
                        href="https://github.com/visiondevcamptokyo/devcamp"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-red-300 font-bold"
                      >
                        Details →
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
                        Satellite Venue (Fukuoka)
                      </h3>
                    </div>
                    <h4 className="text-xl font-semibold mb-3">EngineerCafe</h4>
                    <p className="text-gray-300 mb-4">
                      Fukuoka satellite venue operated by volunteer enthusiasts.
                      It provides a development environment similar to the main
                      venue and supports participants from the Kyushu region.
                    </p>
                    <div className="flex justify-between items-center mt-4">
                      <span className="text-sm text-gray-400"></span>
                      <a
                        href="https://engineercafe.connpass.com/event/348799/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-red-300 font-bold"
                      >
                        Details →
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
                  Main Event: VisionDevCamp Tokyo 2025
                  <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-accent"></span>
                </h2>

                <div className="mb-8">
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-vibrant rounded-full animate-pulse mr-3"></div>
                    <p className="text-2xl font-bold text-white">
                      April 11 (Fri) - 13 (Sun), 2025
                    </p>
                  </div>
                  <p className="text-lg text-white ml-7 mt-2">
                    Venue: Open Collaboration Hub LODGE & Online
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
                        <h4 className="text-2xl font-bold text-white">DAY 1: April 11 (Fri)</h4>
                        <p className="text-vibrant font-medium">Team Building</p>
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
                            <h5 className="font-medium text-white">Doors Open</h5>
                            <span className="text-sm font-mono text-vibrant bg-vibrant/10 px-2 py-1 rounded-full">18:30</span>
                          </div>
                          <p className="text-white/70 text-sm mt-1">Registration starts</p>
                        </div>
                      </div>

                      <div className="flex">
                        <div className="mr-4 relative">
                          <div className="w-4 h-4 rounded-full bg-white/30"></div>
                        </div>
                        <div className="bg-gray-800 backdrop-blur-sm rounded-xl p-4 flex-grow">
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                            <h5 className="font-medium text-white">Opening</h5>
                            <span className="text-sm font-mono text-vibrant bg-vibrant/10 px-2 py-1 rounded-full">19:00-19:15</span>
                          </div>
                          <p className="text-white/70 text-sm mt-1">Welcome address from organizers, introduction of Fukuoka venue (LAURIE)</p>
                        </div>
                      </div>

                      <div className="flex">
                        <div className="mr-4 relative">
                          <div className="w-4 h-4 rounded-full bg-white/30"></div>
                        </div>
                        <div className="bg-gray-800 backdrop-blur-sm rounded-xl p-4 flex-grow">
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                            <h5 className="font-medium text-white">Short Keynotes</h5>
                            <span className="text-sm font-mono text-vibrant bg-vibrant/10 px-2 py-1 rounded-full">19:15-19:45</span>
                          </div>
                          <p className="text-white/70 text-sm mt-1">Short keynotes from lead sponsor companies (Raven, LODGE, STYLY, Canon)</p>
                        </div>
                      </div>

                      <div className="flex">
                        <div className="mr-4 relative">
                          <div className="w-4 h-4 rounded-full bg-white/30"></div>
                        </div>
                        <div className="bg-gray-800 backdrop-blur-sm rounded-xl p-4 flex-grow">
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                            <h5 className="font-medium text-white">Self-introductions</h5>
                            <span className="text-sm font-mono text-vibrant bg-vibrant/10 px-2 py-1 rounded-full">19:45-20:30</span>
                          </div>
                          <p className="text-white/70 text-sm mt-1">Participants (individuals/pre-registered teams) briefly pitch their ideas in about 30 seconds to 1 minute</p>
                        </div>
                      </div>

                      <div className="flex">
                        <div className="mr-4 relative">
                          <div className="w-4 h-4 rounded-full bg-white/30"></div>
                        </div>
                        <div className="bg-gray-800 backdrop-blur-sm rounded-xl p-4 flex-grow">
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                            <h5 className="font-medium text-white">Team Formation (with dinner)</h5>
                            <span className="text-sm font-mono text-vibrant bg-vibrant/10 px-2 py-1 rounded-full">20:30-21:45</span>
                          </div>
                          <p className="text-white/70 text-sm mt-1">Standing buffet style networking</p>
                        </div>
                      </div>

                      <div className="flex">
                        <div className="mr-4 relative">
                          <div className="w-4 h-4 rounded-full bg-white/30"></div>
                        </div>
                        <div className="bg-gray-800 backdrop-blur-sm rounded-xl p-4 flex-grow">
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                            <h5 className="font-medium text-white">Venue Closes</h5>
                            <span className="text-sm font-mono text-vibrant bg-vibrant/10 px-2 py-1 rounded-full">22:00</span>
                          </div>
                          <p className="text-white/70 text-sm mt-1">End of Day 1</p>
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
                        <h4 className="text-2xl font-bold text-white">DAY 2: April 12 (Sat)</h4>
                        <p className="text-vibrant font-medium">Development</p>
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
                            <h5 className="font-medium text-white">Breakfast</h5>
                            <span className="text-sm font-mono text-vibrant bg-vibrant/10 px-2 py-1 rounded-full">9:00~</span>
                          </div>
                          <p className="text-white/70 text-sm mt-1">Networking with participants and sponsors</p>
                        </div>
                      </div>

                      <div className="flex">
                        <div className="mr-4 relative">
                          <div className="w-4 h-4 rounded-full bg-white/30"></div>
                        </div>
                        <div className="bg-gray-800 backdrop-blur-sm rounded-xl p-4 flex-grow">
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                            <h5 className="font-medium text-white">Ideas & Feedback</h5>
                            <span className="text-sm font-mono text-vibrant bg-vibrant/10 px-2 py-1 rounded-full">9:30~</span>
                          </div>
                          <p className="text-white/70 text-sm mt-1">Teams share what they&apos;re working on in about 1 minute</p>
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
                              <h5 className="font-medium text-white">Development Time</h5>
                              <span className="text-sm font-mono text-vibrant bg-vibrant/10 px-2 py-1 rounded-full">10:00~22:00</span>
                            </div>
                            <p className="text-white/70 text-sm mt-1">The following speaker sessions and meals will take place in parallel. You can freely choose between development work, attending sessions, and taking breaks.</p>
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
                                <h5 className="font-medium text-white">Lunch</h5>
                                <span className="text-sm font-mono text-vibrant bg-vibrant/10 px-2 py-1 rounded-full">13:00~</span>
                              </div>
                              <p className="text-white/70 text-sm mt-1">Meal & Networking</p>
                            </div>
                          </div>

                          {/* Dinner */}
                          <div className="flex">
                            <div className="mr-4 relative">
                              <div className="w-3 h-3 rounded-full bg-vibrant"></div>
                            </div>
                            <div className="bg-gray-800 backdrop-blur-sm rounded-xl p-3 flex-grow">
                              <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                                <h5 className="font-medium text-white">Dinner</h5>
                                <span className="text-sm font-mono text-vibrant bg-vibrant/10 px-2 py-1 rounded-full">19:00~</span>
                              </div>
                              <p className="text-white/70 text-sm mt-1">Meal & Networking</p>
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
                            <h5 className="font-medium text-white">Venue Closes</h5>
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
                        <h4 className="text-2xl font-bold text-white">DAY 3: April 13 (Sun)</h4>
                        <p className="text-vibrant font-medium">Demos & Judging</p>
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
                            <h5 className="font-medium text-white">Breakfast</h5>
                            <span className="text-sm font-mono text-vibrant bg-vibrant/10 px-2 py-1 rounded-full">9:00~</span>
                          </div>
                          <p className="text-white/70 text-sm mt-1">Networking with participants and sponsor engineers</p>
                        </div>
                      </div>

                      <div className="flex">
                        <div className="mr-4 relative">
                          <div className="w-4 h-4 rounded-full bg-white/30"></div>
                        </div>
                        <div className="bg-gray-800 backdrop-blur-sm rounded-xl p-4 flex-grow">
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                            <h5 className="font-medium text-white">Development Time</h5>
                            <span className="text-sm font-mono text-vibrant bg-vibrant/10 px-2 py-1 rounded-full">9:30~15:00</span>
                          </div>
                          <p className="text-white/70 text-sm mt-1">Final presentation preparation (meals will take place in parallel)</p>
                        </div>
                      </div>

                      <div className="flex">
                        <div className="mr-4 relative">
                          <div className="w-4 h-4 rounded-full bg-white/30"></div>
                        </div>
                        <div className="bg-gray-800 backdrop-blur-sm rounded-xl p-4 flex-grow">
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                            <h5 className="font-medium text-white">Final Presentations</h5>
                            <span className="text-sm font-mono text-vibrant bg-vibrant/10 px-2 py-1 rounded-full">15:00~17:00</span>
                          </div>
                          <p className="text-white/70 text-sm mt-1">3-5 minutes per team</p>
                        </div>
                      </div>

                      <div className="flex">
                        <div className="mr-4 relative">
                          <div className="w-4 h-4 rounded-full bg-white/30"></div>
                        </div>
                        <div className="bg-gray-800 backdrop-blur-sm rounded-xl p-4 flex-grow">
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                            <h5 className="font-medium text-white">Judging</h5>
                            <span className="text-sm font-mono text-vibrant bg-vibrant/10 px-2 py-1 rounded-full">17:00~18:00</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex">
                        <div className="mr-4 relative">
                          <div className="w-4 h-4 rounded-full bg-white/30"></div>
                        </div>
                        <div className="bg-gray-800 backdrop-blur-sm rounded-xl p-4 flex-grow">
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                            <h5 className="font-medium text-white">Results Announcement</h5>
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
                            <h5 className="font-medium text-white">Networking Party</h5>
                            <span className="text-sm font-mono text-vibrant bg-vibrant/10 px-2 py-1 rounded-full">19:00~</span>
                          </div>
                          <p className="text-white/70 text-sm mt-1">Dinner & Celebration</p>
                        </div>
                      </div>

                      <div className="flex">
                        <div className="mr-4 relative">
                          <div className="w-4 h-4 rounded-full bg-white/30"></div>
                        </div>
                        <div className="bg-gray-800 backdrop-blur-sm rounded-xl p-4 flex-grow">
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                            <h5 className="font-medium text-white">Venue Closes</h5>
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
                Pre-Events{" "}
                <span className="text-white/70 text-base font-normal">
                  (Completed)
                </span>
              </h4>

              <p className="text-white mb-6">
                Note: Participation in pre-events is not mandatory. Anyone can
                join the main hackathon regardless of whether they attended the
                pre-events.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <a
                  href="https://visiondevcamp.connpass.com/event/344662/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-gray-500/30 backdrop-blur-sm text-white/70 rounded-xl shadow-lg p-4 border-l-4 border-gray-400 hover:bg-gray-500/40 transition-colors"
                >
                  <h5 className="text-lg font-semibold mb-2">
                    Lecture{" "}
                    <span className="text-sm font-normal">(Completed)</span>
                  </h5>
                  <p className="text-sm">
                    VisionDevCamp Lecture: How to Craft a Vision?
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
                    Ideathon{" "}
                    <span className="text-sm font-normal">(Completed)</span>
                  </h5>
                  <p className="text-sm">
                    Creating the Next-Generation Lifestyle with Spatial
                    Computing × AI
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
                    Setup Session{" "}
                    <span className="text-sm font-normal">(Completed)</span>
                  </h5>
                  <p className="text-sm">
                    Vision Pro Development Environment Setup Event
                  </p>
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
              Judges
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
              Speakers
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
                  Sponsors
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-vibrant"></span>
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <SponsorCard
                  logo="/unity-logo-black.png"
                  name="Unity Technologies Japan"
                  link="https://unity3d.jp/"
                />
                <SponsorCard
                  logo="/styly-logo.png"
                  name="STYLY"
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
                  name="Yappli, Inc."
                  link="https://yappli.co.jp/en/"
                />
                <SponsorCard
                  logo="/Flitto_02_Logo_RGB.png"
                  name="Flitto Japan Inc."
                  link="https://flitto.jp/en/"
                />
		<SponsorCard
                  logo="/techworld-logo.jpg"
                  name="︎TECH WORLD"
                  link="https://www.youtube.com/@TECHWORLD111"
                />
                <SponsorCard
                  logo="/nihonkougakuin.jpg"
                  name="Nihon Kogakuin"
                  link="https://www.neec.ac.jp/vision_craft/"
                />
		<SponsorCard
                  logo="/eos-vr-system-logo.png"
                  name="Canon Inc."
                  link="https://personal.canon.jp/product/camera/rf/rf-lensworld/vr-lens"
                />
              </div>

              <h4 className="text-xl font-bold mt-16 mb-8 text-white">
                Venue Partner
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <SponsorCard
                  logo="/lodge-logo.svg"
                  name="︎Open Collaboration Hub LODGE"
                  link="https://www.z-lodge.com/"
                />
              </div>

              <h4 className="text-xl font-bold mt-16 mb-8 text-white">
                Filming Partner
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <SponsorCard
                  logo="/crossdevice-logo.png"
                  name="︎Crossdevice Inc."
                  link="https://www.crossdevice.co.jp/"
                />
              </div>

              <h4 className="text-xl font-bold mt-16 mb-8 text-white">
                Community Partners
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
                  Sponsorship Opportunities Available!
                </h4>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSeCHHuGLjmH_vxy6apuSrb9fIgeTaIq75-QQeQ21Pf4Y3JVRQ/viewform?usp=dialog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-vibrant hover:bg-white text-primary-dark font-bold py-3 px-8 rounded-full transform hover:scale-105 duration-300 shadow-glow-accent pulse-shadow"
                >
                  Apply Here →
                </a>
              </div>
            </div>
          </div>
        </section>

        <section
          id="tickets"
          className="min-h-screen flex flex-col items-center justify-center bg-purple-600 text-white px-8 py-12"
        >
          <h3 className="text-3xl sm:text-5xl font-bold mb-4">
            Ticket Purchase
          </h3>

          <a
            href="https://lu.ma/wsqwzm4s"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white font-bold bg-red-500 py-2 px-6 rounded-full hover:bg-orange-300 transition"
          >
            Purchase here →
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
              Frequently Asked Questions
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-vibrant"></span>
            </h3>

            <div className="space-y-6">
              {/* FAQ Item 1 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-white/10 hover:border-accent/50 transition-colors duration-300">
                <details className="group">
                  <summary className="flex justify-between items-center font-semibold p-5 cursor-pointer">
                    <span className="text-lg">I have no development experience. Can beginners participate in the hackathon?</span>
                    <span className="transition group-open:rotate-180">
                      <svg fill="none" height="24" width="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24">
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <div className="px-5 pb-5 text-white/90">
                    <p>Yes, you can definitely participate. Hackathons aren&apos;t just for experienced engineers. For example, 3D modelers, designers, project managers, and professionals from media-related fields can participate even without coding experience. We welcome anyone who is comfortable working with computers.</p>
                    <p className="mt-3">Even if you have no development experience, you can participate if you&apos;re interested in Apple Vision Pro or visionOS. You&apos;ll need a proactive attitude to complete an application either individually or as part of a team. Experienced volunteer staff and mentors will be available at the venue to support your development, providing a comfortable environment to work in.</p>
                  </div>
                </details>
              </div>

              {/* FAQ Item 2 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-white/10 hover:border-accent/50 transition-colors duration-300">
                <details className="group">
                  <summary className="flex justify-between items-center font-semibold p-5 cursor-pointer">
                    <span className="text-lg">I don&apos;t have a Mac, only a Windows PC. Is it still technically possible to develop for visionOS?</span>
                    <span className="transition group-open:rotate-180">
                      <svg fill="none" height="24" width="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24">
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <div className="px-5 pb-5 text-white/90">
                    <p>Unfortunately, visionOS development cannot be done solely with a Windows PC. As stated in Apple&apos;s official documentation, visionOS development requires a Mac with Apple Silicon and Xcode running on macOS. If you don&apos;t have a Mac, you&apos;ll need to share resources with a team member who does have a Mac environment.</p>
                  </div>
                </details>
              </div>

              {/* FAQ Item 3 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-white/10 hover:border-accent/50 transition-colors duration-300">
                <details className="group">
                  <summary className="flex justify-between items-center font-semibold p-5 cursor-pointer">
                    <span className="text-lg">Do I need a personal Unity Pro license to develop using Unity?</span>
                    <span className="transition group-open:rotate-180">
                      <svg fill="none" height="24" width="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24">
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <div className="px-5 pb-5 text-white/90">
                    <p>Unity&apos;s visionOS support (PolySpatial) for Vision Pro app development is available for Unity Pro/Enterprise/Industry plan subscribers. It is not officially supported on the free Unity Personal edition. If you don&apos;t have a license yet, you can use the <a href="https://unity.com/ja/products/unity-pro" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">30-day trial of Unity Pro</a> or consider using Apple&apos;s native SDKs (SwiftUI, RealityKit, etc.).</p>
                  </div>
                </details>
              </div>

              {/* FAQ Item 4 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-white/10 hover:border-accent/50 transition-colors duration-300">
                <details className="group">
                  <summary className="flex justify-between items-center font-semibold p-5 cursor-pointer">
                    <span className="text-lg">If I register as an individual, will I be developing alone throughout the hackathon?</span>
                    <span className="transition group-open:rotate-180">
                      <svg fill="none" height="24" width="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24">
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <div className="px-5 pb-5 text-white/90">
                    <p>Even if you register individually, you can form a team with other participants through the self-introduction and idea sharing sessions on the first day. VisionDevCamp has dedicated time for participant introductions and idea sharing on the first day, which is when team building takes place. Our staff will do their best to ensure that participants successfully form teams and can perform at their best!</p>
                    <p className="mt-3">While it&apos;s possible to develop individually, we generally recommend forming a team (it&apos;s easier to develop an app that way, and more fun!).</p>
                  </div>
                </details>
              </div>

              {/* FAQ Item 5 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-white/10 hover:border-accent/50 transition-colors duration-300">
                <details className="group">
                  <summary className="flex justify-between items-center font-semibold p-5 cursor-pointer">
                    <span className="text-lg">I can&apos;t attend the first day (April 11, Friday) due to prior commitments. Is it okay to participate only on Saturday and Sunday?</span>
                    <span className="transition group-open:rotate-180">
                      <svg fill="none" height="24" width="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24">
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <div className="px-5 pb-5 text-white/90">
                    <p>Yes, you can still participate on just Saturday and Sunday. However, since team formation usually happens on the first night through the second day&apos;s idea sharing session, it&apos;s advisable to express your ideas and areas of interest in advance on Discord to facilitate team formation with other participants. If you let us know about your absence on the first day through the pre-event survey, the organizing team will provide as much support as possible. Please check your email or Discord for more details.</p>
                  </div>
                </details>
              </div>

              {/* FAQ Item 6 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-white/10 hover:border-accent/50 transition-colors duration-300">
                <details className="group">
                  <summary className="flex justify-between items-center font-semibold p-5 cursor-pointer">
                    <span className="text-lg">How are teams formed? I see team recruitment in Discord but I&apos;m not sure how to create a team.</span>
                    <span className="transition group-open:rotate-180">
                      <svg fill="none" height="24" width="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24">
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <div className="px-5 pb-5 text-white/90">
                    <p>On the first evening, there will be self-introductions and idea sharing, after which participants will freely interact and form teams. The organizers and staff will provide support, so even if you attend alone, you can confidently join a team. You can also choose to develop individually if you prefer. It&apos;s not mandatory to form teams on the day of the event - you can participate with a pre-existing team or form one in advance through <a href="https://discord.gg/t5X6KZruQQ" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Discord</a>.</p>
                    <p className="mt-3">If you want to start team formation before the event, the first step is to introduce yourself and share your ideas on <a href="https://discord.gg/t5X6KZruQQ" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Discord</a>. Use the &quot;#team-formation&quot; channel to express what you&apos;d like to create or to recruit members for your team. You can also check other participants&apos; ideas and tech stacks, and reach out to join projects that interest you.</p>
                  </div>
                </details>
              </div>

              {/* FAQ Item 7 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-white/10 hover:border-accent/50 transition-colors duration-300">
                <details className="group">
                  <summary className="flex justify-between items-center font-semibold p-5 cursor-pointer">
                    <span className="text-lg">I&apos;ve never been to a hackathon before and I&apos;m nervous, but I&apos;m interested in Apple Vision Pro and XR. Is it okay to just jump in?</span>
                    <span className="transition group-open:rotate-180">
                      <svg fill="none" height="24" width="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24">
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <div className="px-5 pb-5 text-white/90">
                    <p>Absolutely! VisionDevCamp Tokyo 2025 actively welcomes beginners and those with no prior experience. Mentors and experienced staff will be on site to help with any questions or technical challenges. Team building and ideation sessions are designed to help participants collaborate and learn from each other while having fun.</p>
                  </div>
                </details>
              </div>

              {/* FAQ Item 8 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-white/10 hover:border-accent/50 transition-colors duration-300">
                <details className="group">
                  <summary className="flex justify-between items-center font-semibold p-5 cursor-pointer">
                    <span className="text-lg">Will external monitors be available for participants?</span>
                    <span className="transition group-open:rotate-180">
                      <svg fill="none" height="24" width="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24">
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <div className="px-5 pb-5 text-white/90">
                    <p>No, we don&apos;t provide monitors. Please bring your own if needed.</p>
                  </div>
                </details>
              </div>

              {/* FAQ Item 9 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-white/10 hover:border-accent/50 transition-colors duration-300">
                <details className="group">
                  <summary className="flex justify-between items-center font-semibold p-5 cursor-pointer">
                    <span className="text-lg">What is the relationship between the payment processor company and VisionDevCamp Tokyo?</span>
                    <span className="transition group-open:rotate-180">
                      <svg fill="none" height="24" width="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24">
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <div className="px-5 pb-5 text-white/90">
                    <p>IoTone Japan, the company handling payments, is a corporation owned by one of the co-organizers of this event and serves as the entity managing <strong>payment processing</strong>. Therefore, administrative procedures for payments are conducted through IoTone Japan.</p>
                  </div>
                </details>
              </div>

              {/* FAQ Item 10 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-white/10 hover:border-accent/50 transition-colors duration-300">
                <details className="group">
                  <summary className="flex justify-between items-center font-semibold p-5 cursor-pointer">
                    <span className="text-lg">Can tickets be transferred to someone else?</span>
                    <span className="transition group-open:rotate-180">
                      <svg fill="none" height="24" width="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24">
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <div className="px-5 pb-5 text-white/90">
                    <p>Please follow Luma&apos;s regulations. The organizers cannot provide individual support, so if you wish to transfer your ticket, please follow Luma&apos;s procedures.</p>
                  </div>
                </details>
              </div>

              {/* FAQ Item 11 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-white/10 hover:border-accent/50 transition-colors duration-300">
                <details className="group">
                  <summary className="flex justify-between items-center font-semibold p-5 cursor-pointer">
                    <span className="text-lg">What should I bring on the day of the event?</span>
                    <span className="transition group-open:rotate-180">
                      <svg fill="none" height="24" width="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24">
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <div className="px-5 pb-5 text-white/90">
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Your laptop (Mac with Apple Silicon is required for visionOS development)</li>
                      <li>Charger and any necessary adapters</li>
                      <li>Headphones/earbuds (if you want to work with audio without disturbing others)</li>
                      <li>Water bottle</li>
                      <li>Comfortable clothes (the venue will be air-conditioned, so layers are recommended)</li>
                      <li>Any special equipment you need for your project (e.g., additional monitors, peripherals)</li>
                    </ul>
                  </div>
                </details>
              </div>

              {/* FAQ Item 12 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-white/10 hover:border-accent/50 transition-colors duration-300">
                <details className="group">
                  <summary className="flex justify-between items-center font-semibold p-5 cursor-pointer">
                    <span className="text-lg">What language will the conference be conducted in?</span>
                    <span className="transition group-open:rotate-180">
                      <svg fill="none" height="24" width="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24">
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <div className="px-5 pb-5 text-white/90">
                    <p>The conference will <strong>primarily be conducted in Japanese</strong>, but since there will be many English-speaking participants, presentations will have English subtitles. English-speaking staff will also be available at all times to answer questions and provide assistance in English.</p>
                  </div>
                </details>
              </div>

              {/* FAQ Item 13 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-white/10 hover:border-accent/50 transition-colors duration-300">
                <details className="group">
                  <summary className="flex justify-between items-center font-semibold p-5 cursor-pointer">
                    <span className="text-lg">Will food be provided at the event?</span>
                    <span className="transition group-open:rotate-180">
                      <svg fill="none" height="24" width="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24">
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <div className="px-5 pb-5 text-white/90">
                    <p>Yes, meals will be provided at the venue according to the schedule. If you have any dietary restrictions or allergies, please inform us in advance through the pre-event questionnaire.</p>
                  </div>
                </details>
              </div>

              {/* FAQ Item 14 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-white/10 hover:border-accent/50 transition-colors duration-300">
                <details className="group">
                  <summary className="flex justify-between items-center font-semibold p-5 cursor-pointer">
                    <span className="text-lg">Can I cancel my registration? Is there a refund policy?</span>
                    <span className="transition group-open:rotate-180">
                      <svg fill="none" height="24" width="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24">
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <div className="px-5 pb-5 text-white/90">
                    <p>Please follow Luma&apos;s cancellation and refund policy. The organizers cannot provide individual support for refunds, so please check Luma&apos;s terms and conditions regarding cancellations.</p>
                  </div>
                </details>
              </div>

              {/* FAQ Item 15 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-white/10 hover:border-accent/50 transition-colors duration-300">
                <details className="group">
                  <summary className="flex justify-between items-center font-semibold p-5 cursor-pointer">
                    <span className="text-lg">Can I get a receipt or invoice?</span>
                    <span className="transition group-open:rotate-180">
                      <svg fill="none" height="24" width="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24">
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <div className="px-5 pb-5 text-white/90">
                    <p>We don&apos;t provide individual receipts, but you can create your own receipt from <a href="https://lu.ma/settings/payment" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Luma&apos;s payment history screen</a>. If you need to change the name on the receipt, you can temporarily change your account name in <a href="https://lu.ma/settings" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Luma&apos;s settings</a> and create the receipt again.</p>
                  </div>
                </details>
              </div>

              {/* FAQ Item 16 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-white/10 hover:border-accent/50 transition-colors duration-300">
                <details className="group">
                  <summary className="flex justify-between items-center font-semibold p-5 cursor-pointer">
                    <span className="text-lg">What should I do before the event?</span>
                    <span className="transition group-open:rotate-180">
                      <svg fill="none" height="24" width="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24">
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <div className="px-5 pb-5 text-white/90">
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Join the VisionDevCamp Tokyo <a href="https://discord.gg/t5X6KZruQQ" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Discord server</a></li>
                      <li>Prepare a self-introduction slide in advance</li>
                      <li>If you&apos;re looking for a team, share ideas and gather information in the <a href="https://discord.gg/t5X6KZruQQ" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Discord server</a>&apos;s [#self-introduction] and [#team-formation] channels</li>
                      <li>If you&apos;re using Unity, prepare the Unity Pro trial version and install necessary SDKs</li>
                      <li>Set up your Mac environment (download Xcode and necessary libraries)</li>
                      <li><strong>Reading the following official documentation will help make development smoother:</strong>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                          <li><a href="https://developer.apple.com/jp/visionos/pathway/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">visionOS Pathway</a> - A collection of reference documents for getting started with visionOS app development</li>
                          <li><a href="https://developer.apple.com/documentation/visionos/introductory-visionos-samples" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Introductory visionOS samples</a> - Sample code for basic elements</li>
                          <li><a href="https://developer.apple.com/learn/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Swift development tutorials</a> - Basic tutorials for those unfamiliar with Apple platforms like SwiftUI (English only)</li>
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
                    <span className="text-lg">Do I need to bring a power strip?</span>
                    <span className="transition group-open:rotate-180">
                      <svg fill="none" height="24" width="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24">
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <div className="px-5 pb-5 text-white/90">
                    <p>The venue will have power strips available, but the quantity may be limited. If you need to charge multiple devices simultaneously, bringing your own power strip would be more comfortable.</p>
                  </div>
                </details>
              </div>

              {/* FAQ Item 18 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-white/10 hover:border-accent/50 transition-colors duration-300">
                <details className="group">
                  <summary className="flex justify-between items-center font-semibold p-5 cursor-pointer">
                    <span className="text-lg">I missed the pre-event that included development environment setup. Can I still participate?</span>
                    <span className="transition group-open:rotate-180">
                      <svg fill="none" height="24" width="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24">
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <div className="px-5 pb-5 text-white/90">
                    <p>Yes, absolutely. Mentors will be available at the venue to answer questions if you encounter any issues. However, to save time, it&apos;s best to set up Xcode and Unity in advance if possible.</p>
                  </div>
                </details>
              </div>

              {/* FAQ Item 19 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-white/10 hover:border-accent/50 transition-colors duration-300">
                <details className="group">
                  <summary className="flex justify-between items-center font-semibold p-5 cursor-pointer">
                    <span className="text-lg">Is there accommodation support for this event?</span>
                    <span className="transition group-open:rotate-180">
                      <svg fill="none" height="24" width="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24">
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <div className="px-5 pb-5 text-white/90">
                    <p>We apologize, but accommodation arrangements are the responsibility of each participant. Please book hotels or other lodging as needed.</p>
                  </div>
                </details>
              </div>

              {/* FAQ Item 20 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-white/10 hover:border-accent/50 transition-colors duration-300">
                <details className="group">
                  <summary className="flex justify-between items-center font-semibold p-5 cursor-pointer">
                    <span className="text-lg">Do I have to form or join a team? Is participating in team building mandatory?</span>
                    <span className="transition group-open:rotate-180">
                      <svg fill="none" height="24" width="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24">
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <div className="px-5 pb-5 text-white/90">
                    <p><strong>It&apos;s not mandatory. Individual participation is possible.</strong> However, team development tends to yield more comprehensive products as it brings diverse perspectives and ideas, and allows for sharing technical responsibilities and workload. Most importantly, the joy and learning experience of collaborating with teammates to immerse yourself in development is a unique pleasure of team participation, so we recommend considering a team if possible.</p>
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
              Organizers
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-vibrant"></span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {organizers.map((organizer, index) => (
                <OrganizerCard key={index} {...organizer} />
              ))}
            </div>

            <h4 className="text-2xl font-bold text-white mb-8 relative inline-block">
              Tokyo Team
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-vibrant"></span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
              {tokyoTeam.map((member, index) => (
                <TeamMemberCard key={index} {...member} />
              ))}
            </div>

            <h4 className="text-2xl font-bold text-white mb-8 relative inline-block">
              Fukuoka Team
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
              Contact
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-vibrant"></span>
            </h3>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-bold text-white mb-4">
                    Contact Us
                  </h4>
                  <p className="text-white mb-6">
                    For inquiries about VisionDevCamp Tokyo, please use the form
                    below.
                  </p>
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSf3lzhgMm-RZ_YexT_8lEzDx8W8N-B2aeZd_gdadvGdNhaNow/viewform?usp=dialog"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-vibrant hover:bg-white text-primary-dark font-bold py-2 px-6 rounded-full transition"
                  >
                    Contact Form →
                  </a>

                  <div className="mt-8">
                    <h5 className="font-bold text-white mb-2">Social Media</h5>
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
                    Sponsorship Inquiries
                  </h4>
                  <p className="text-white mb-6">
                    If your company would like to support VisionDevCamp Tokyo as
                    a sponsor, please apply using the form below.
                  </p>
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSeCHHuGLjmH_vxy6apuSrb9fIgeTaIq75-QQeQ21Pf4Y3JVRQ/viewform?usp=dialog"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-vibrant hover:bg-white text-primary-dark font-bold text-sm sm:text-base py-2 px-6 sm:py-3 sm:px-6 rounded-full shadow-lg transform transition hover:scale-105 whitespace-nowrap"
                  >
                    Sponsorship Application →
                  </a>

                  <div className="mt-8">
                    <h5 className="font-bold text-white mb-2">Organizer</h5>
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
                  Top
                </Link>
                <Link
                  href="#overview"
                  className="hover:text-red-400 transition-colors"
                >
                  Overview
                </Link>
                <Link
                  href="#uniqueness"
                  className="hover:text-red-400 transition-colors"
                >
                  Uniqueness
                </Link>
                <Link
                  href="#venues"
                  className="hover:text-red-400 transition-colors"
                >
                  Venues
                </Link>
                <Link
                  href="#schedule"
                  className="hover:text-red-400 transition-colors"
                >
                  Schedule
                </Link>
                <Link
                  href="#judges"
                  className="hover:text-red-400 transition-colors"
                >
                  Judges
                </Link>
                <Link
                  href="#speakers"
                  className="hover:text-red-400 transition-colors"
                >
                  Speakers
                </Link>
                <Link
                  href="#organizers"
                  className="hover:text-red-400 transition-colors"
                >
                  Organizers
                </Link>
                <Link
                  href="#sponsors"
                  className="hover:text-red-400 transition-colors"
                >
                  Sponsors
                </Link>
                <Link
                  href="#faq"
                  className="hover:text-red-400 transition-colors"
                >
                  FAQ
                </Link>
                <Link
                  href="#contact"
                  className="hover:text-red-400 transition-colors"
                >
                  Contact
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
  const [currentLang, setCurrentLang] = useState("en");

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
                Top
              </Link>
            </li>
            <li className="mb-2">
              <Link href="#overview" className="hover:underline font-bold">
                Overview
              </Link>
            </li>
            <li className="mb-2">
              <Link href="#uniqueness" className="hover:underline font-bold">
                Uniqueness
              </Link>
            </li>
            <li className="mb-2">
              <Link href="#venues" className="hover:underline font-bold">
                Venues
              </Link>
            </li>
            <li className="mb-2">
              <Link href="#schedule" className="hover:underline font-bold">
                Schedule
              </Link>
            </li>
            <li className="mb-2">
              <Link href="#judges" className="hover:underline font-bold">
                Judges
              </Link>
            </li>
            <li className="mb-2">
              <Link href="#speakers" className="hover:underline font-bold">
                Speakers
              </Link>
            </li>
            <li className="mb-2">
              <Link href="#organizers" className="hover:underline font-bold">
                Organizers
              </Link>
            </li>
            <li className="mb-2">
              <Link href="#sponsors" className="hover:underline font-bold">
                Sponsors
              </Link>
            </li>
            <li className="mb-2">
              <Link href="#faq" className="hover:underline font-bold">
                FAQ
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/en/press" className="hover:underline font-bold">
                Press
              </Link>
            </li>
            <li className="mb-2">
              <Link href="#contact" className="hover:underline font-bold">
                Contact
              </Link>
            </li>
          </ul>
        )}

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-4 text-sm text-black mt-2">
          <li>
            <Link href="#top" className="hover:underline font-bold">
              Top
            </Link>
          </li>
          <li>
            <Link href="#overview" className="hover:underline font-bold">
              Overview
            </Link>
          </li>
          <li>
            <Link href="#uniqueness" className="hover:underline font-bold">
              Uniqueness
            </Link>
          </li>
          <li>
            <Link href="#venues" className="hover:underline font-bold">
              Venues
            </Link>
          </li>
          <li>
            <Link href="#schedule" className="hover:underline font-bold">
              Schedule
            </Link>
          </li>
          <li>
            <Link href="#judges" className="hover:underline font-bold">
              Judges
            </Link>
          </li>
          <li>
            <Link href="#speakers" className="hover:underline font-bold">
              Speakers
            </Link>
          </li>
          <li>
            <Link href="#organizers" className="hover:underline font-bold">
              Organizers
            </Link>
          </li>
          <li>
            <Link href="#sponsors" className="hover:underline font-bold">
              Sponsors
            </Link>
          </li>
          <li>
            <Link href="#faq" className="hover:underline font-bold">
              FAQ
            </Link>
          </li>
          <li>
            <Link href="/en/press" className="hover:underline font-bold">
              Press
            </Link>
          </li>
          <li>
            <Link href="#contact" className="hover:underline font-bold">
              Contact
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
            <div className="mt-2">
              <p className="text-white/80 text-sm line-clamp-3">{bio}</p>
            </div>
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
                <div className="text-white/90 text-sm leading-relaxed max-w-xl text-left whitespace-pre-line">
                  {typeof bio === 'string' && bio.includes('\n') 
                    ? bio.split('\n').map((line, i) => (
                        <p key={i} className="mb-2">
                          {line.includes('[') && line.includes('](') 
                            ? line.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (match, text, url) => (
                                <>
                                  <a href={url} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                                    {text}
                                  </a>
                                </>
                              ))
                            : line}
                        </p>
                      ))
                    : bio}
                </div>

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
                                <>
                                  <a href={url} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                                    {text}
                                  </a>
                                </>
                              ))
                            : line}
                        </p>
                      ))
                    : bio}
                </div>

                {socialMedia.length > 0 && (
                  <div className="mt-6 flex space-x-3 justify-center md:justify-start">
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

