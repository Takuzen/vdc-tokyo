"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";

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
    bio: "Has been working as an artist creating 3D paintings in VR space since 2016. Received art commissions and live painting requests from 13 countries worldwide. Her solo exhibition in the metaverse attracted many visitors from around the world and was selected for the VR category at the Venice International Film Festival. Her first NFT artwork was sold for approximately 13 million yen, making headlines. Selected as one of the “Forbes Japan 100” in 2021. Officially recognized as an artist by the Dubai government.",
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
    name: "Shinobu Takahashi",
    title: "Unity Technologies Japan",
    description: "Solution Architect",
    bio: "He proposes the development of applications utilizing 3D and XR technologies with Unity for clients in various industrial sectors, and also serves as a PLATEAU Advocate for the Ministry of Land, Infrastructure, Transport and Tourism.",
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
    bio: "2024-2025 Microsoft MVP / A strong advocate for WebXR and visionOS! Hosting the monthly “LODGE XR Talk” at the open collaboration hub LODGE, featuring discussions and hands-on experiences on the latest XR trends.",
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
          {/* Circular Image 1 - Top Left */}
          <div className="absolute top-[-20px] left-4 w-40 h-40 sm:w-48 sm:h-48 lg:w-80 lg:h-80 overflow-hidden rounded-full">
            <img
              src="/PANA6841.jpg"
              alt="decorative"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Circular Image 2 - Bottom Right */}
          <div className="absolute bottom-[-20px] right-4 w-40 h-40 sm:w-48 sm:h-48 lg:w-80 lg:h-80 overflow-hidden rounded-full">
            <img
              src="/PANA6691.jpg"
              alt="decorative"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-6xl font-bold text-center mt-[100px] sm:mt-0">
            VisionDevCamp <span className="text-red-500">Tokyo</span> 2025
          </h1>

          <p className="text-lg sm:text-xl underline mt-4 text-start">
            The historic hackathon that has continued in Silicon Valley since
            2007 is coming to Japan for the first time!
          </p>

          <p className="text-md sm:text-lg mt-4 text-center font-medium">
            Whether you’re working individually or in a team, let’s bring Vision
            Pro ideas to life together!
          </p>

          <div className="mt-8 text-center">
            <p className="text-4xl sm:text-5xl font-bold text-red-400">
              04.11 <span className="text-2xl sm:text-3xl">Fri</span> - 13{" "}
              <span className="text-2xl sm:text-3xl">Sun</span>, 2025
            </p>
          </div>

          <div className="mt-4 mb-[100px] sm:mb-0 text-center">
            <p className="text-lg sm:text-xl font-bold">
              Venue
              <span className="underline decoration-[1px]">
                <a
                  href="https://www.z-lodge.com/#space"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white"
                >
                  {" ︎Open Collaboration Hub LODGE "}
                </a>
              </span>
              <span className="ml-1">& Online</span>
            </p>
          </div>
        </section>

        <section id="news" className="w-full bg-[#e75b10] py-12">
          <div className="container">
            <h2 className="text-2xl md:text-3xl  font-bold text-left mb-6 sm:text-base text-white">
              News
            </h2>

            <div className="text-white space-y-6 mb-8">
              <NewsItem
                linkText="Added judges and sponsor information!"
                link="#judges"
              />
            </div>

            <p className="text-white">Past Event Highlights</p>

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
              Uniqueness
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
                  Developers gathering to create apps for Apple Vision Pro
                </h2>
                <ul className="list-disc pl-5 mt-4 space-y-2">
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
                  One of the world’s largest visionOS developer communities
                </h2>
                <p className="mt-4">
                  The first VisionDevCamp in March 2024 attracted visionOS
                  developers from around the world.
                </p>
                <p className="mt-2">
                  Despite the product’s recent launch, over 100 Vision Pro
                  devices and developers participated in the hackathon.
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
                  Nonprofit, volunteer-run operation
                </h2>
                <p className="mt-4">
                  A nonprofit event operated by volunteers, funded by both
                  sponsors and participants.
                </p>
                <p className="mt-2">
                  Aims to keep participation costs low while providing space,
                  meals, power, internet, and networking opportunities to help
                  participants focus on building great applications.
                </p>
              </div>
            </div>

            <a
              href="/history"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-12 border border-white text-black bg-white py-2 px-6 rounded-full hover:bg-orange-300 transition"
            >
              Learn More →
            </a>
          </div>
        </section>

        <section
          id="schedule"
          className="w-full min-h-screen flex flex-col bg-gradient-to-b from-blue-500 to-blue-300 text-white px-4 sm:px-8 py-12"
        >
          <div className="container">
            <h3 className="text-2xl md:text-3xl font-bold text-left mb-6">
              Schedule
            </h3>

            <div className="space-y-6">
              <ScheduleItem
                dateRange="2025.02.01 - 2025.03.23"
                title="Pre-Event"
                dimmed={false}
              />
              <ScheduleItem
                dateRange="2025.03.04"
                title="Lecture"
                dimmed={false}
              >
                <div className="mt-4 p-4 bg-[#2a294b] text-white rounded-lg">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center">
	  	      <a href="https://www.1101.com/n/s/boshu_sm/index.html">
                      <img
                        src="/hobonichi-logo.png"
                        alt="Hobinichi Logo"
                        className="w-16 h-16 sm:w-20 sm:h-20 object-cover mr-4 rounded-lg"
                      />
	  	      </a>
                      <div className="flex flex-col">
                        <h4 className="text-base block sm:hidden sm:text-xl font-bold tracking-wide">
                          VisionDevCamp
                          <br />
                          Lecture:
                          <br />
                          How to Craft a Vision?
                        </h4>
                        <h4 className="text-base hidden sm:block sm:text-xl font-bold tracking-wide leading-tight">
                          VisionDevCamp Lecture:
                          <br />
                          How to Craft a Vision?
                        </h4>
                        <span className="text-xs sm:text-sm block mt-2 text-gray-300">
                          supported by Hobonichi Science & Magic Club
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4 items-center pt-4 pb-2 sm:flex-row sm:items-center">
                    <SpeakerCard
                      image="/koyama-san-profile-image.png"
                      name="Junichiro Koyama"
                      title="Nihon Kogakuin College"
                      description="Vision Craft Executive Producer"
                      bio="During his tenure at Bandai Namco Group, he developed over 100 projects, including &#8220;The Idolmaster&#8221;, &#8220;Mobile Suit Gundam: Bonds of the Battlefield&#8221;, and &#8220;Fishing Spirits&#8221;, and produced &#8220;VR ZONE&#8221;. Currently, he leads the educational innovation project &#8220;Vision Craft&#8221; at Japan Engineering College."
                      socialMediaLink1="https://x.com/mayanmoyan"
                      socialMediaLink2="https://bandainamco-am.co.jp/others/vrzone-portal/"
                    />
                    <SpeakerCard
                      image="/yaseinootoko-san-profile-image.png"
                      name="Wildman"
                      title="Wildman Inc."
                      description="CEO"
                      bio="In 2012, he debated between Sony&#8242;s HMZ-T2 and the Oculus Rift DK1 crowdfunding and chose the Oculus Rift DK1. Since spring 2013, he has been developing VR games as a doujin creator, distributing and exhibiting them at events such as Comic Market, BitSummit, and Digital Game Expo. Since 2015, he has transitioned to VR as his main profession, working at gumi Inc. and SHOWROOM Inc. before assuming his current role. Currently, he is engaged in the production of &#8220;Panzer Dragoon Voyage Record&#8221; at Wildman Inc."
                      socialMediaLink1="https://x.com/yasei_no_otoko"
                      socialMediaLink2="https://www.wildman.co.jp/"
                    />
                  </div>

                  <div className="mt-4 flex justify-center sm:justify-end">
                    <a
                      href="https://visiondevcamp.connpass.com/event/344662/"
                      className="pt-2 pb-2 px-4 sm:px-6 bg-gray-500 text-white font-bold rounded-full tracking-wide text-sm sm:text-base hover:cursor"
                    >
	  	      Ended
                    </a>
                  </div>
                </div>
              </ScheduleItem>
              <ScheduleItem
                dateRange="2025.03.16"
                title="Ideathon"
                dimmed={false}
              >
                <div className="mt-4 p-5 sm:p-6 bg-[#2a294b] text-white rounded-2xl shadow-md">
	          <div className="flex items-center">
	  <a href="https://devx.jp/">
	              <img
                        src="/devx-logo.png"
                        alt="DevX Logo"
                        className="w-16 h-16 sm:w-20 sm:h-20 object-cover ml-[-8px] mr-14 md:mr-3 rounded-lg"
                      />
	  </a>
	  <div className="flex flex-col">
                  <h4 className="text-base block sm:hidden sm:text-xl font-bold tracking-wide">
                    VisionDevCamp
                    <br />
                    Ideathon:
                    <br />
                    Creating the Next-Generation Lifestyle with Spatial
                    Computing × AI{" "}
                  </h4>
                  <h4 className="text-base hidden sm:block sm:text-xl font-bold tracking-wide leading-tight">
                    VisionDevCamp Ideathon:
                    <br />
                    Creating the Next-Generation Lifestyle with Spatial
                    Computing × AI
                  </h4>
                  <span className="text-xs sm:text-sm block mt-2 text-gray-300">
                    supported by DevX
                  </span>
	  </div>
	  </div>

                  <div className="mt-4 flex justify-center sm:justify-end">
                    <a
                      href="https://lu.ma/7zomrwt6"
                      className="py-2 px-4 sm:px-6 bg-white text-black font-bold rounded-full hover:bg-orange-300 transition tracking-wide text-sm sm:text-base shadow-lg"
                    >
                      Event Details Page →
                    </a>
                  </div>
                </div>
              </ScheduleItem>
	      <ScheduleItem
                dateRange="2025.03.20"
                title="Development Environment Setup"
                dimmed={false}
              >
                <div className="mt-4 p-5 sm:p-6 bg-[#2a294b] text-white rounded-2xl shadow-md">
	          <div className="flex items-center">
	  <a href="https://melting-hack.tokyo/">
	              <img
                        src="/meltinghack-logo.png"
                        alt="MeltingHack Logo"
                        className="w-16 h-16 sm:w-20 sm:h-20 object-contain ml-[-8px] mr-4 rounded-lg"
                      />
	  </a>
	          <div className="flex flex-col">
                  <h4 className="text-base block sm:hidden sm:text-xl font-bold tracking-wide">
                    Vision Pro Development Environment Setup Event
	          </h4>
                  <h4 className="text-base hidden sm:block sm:text-xl font-bold tracking-wide leading-tight">
                    Vision Pro Development Environment Setup Event
                  </h4>
                  <span className="text-xs sm:text-sm block mt-2 text-gray-300">
                    with MeltingHack
                  </span>
	  </div>
	  	  </div>

                  <div className="mt-4 flex justify-center sm:justify-end">
                    <a
                      href="https://melting-hack.connpass.com/event/347737/"
                      className="py-2 px-4 sm:px-6 bg-white text-black font-bold rounded-full hover:bg-orange-300 transition tracking-wide text-sm sm:text-base shadow-lg"
                    >
                      Event Details Page →
                    </a>
                  </div>
                </div>
              </ScheduleItem>
              <ScheduleItem
                date="2025.04.10"
                title="Entry Deadline"
                dimmed={true}
              />
              <ScheduleItem
                dateRange="2025.04.11"
                title="Team Building"
                dimmed={false}
              />
              <ScheduleItem
                dateRange="2025.04.12 - 13"
                title="Hackathon"
                dimmed={false}
              >
                <div className="mt-4 flex justify-center sm:justify-end">
                  <a
                    href="https://lu.ma/wsqwzm4s"
                    className="py-2 px-4 sm:px-6 bg-[#2a294b] text-white font-bold rounded-full hover:bg-orange-300 transition tracking-wide text-sm sm:text-base"
                  >
                    Purchase Ticket →
                  </a>
                </div>
              </ScheduleItem>
            </div>
          </div>
        </section>
        <section className="w-full flex flex-col bg-pink-500 text-gray-900 px-8 py-12">
          <div className="container">
            <h3 className="text-2xl md:text-3xl font-bold text-left mb-6 text-white">
              Judges
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
              Sponsors
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <SponsorCard
                logo="/unity-logo-black.png"
                name="Unity Technologies Japan"
                link="https://unity3d.jp/"
              />
              <SponsorCard
                logo="/styly-logo.png"
                name="STYLY"
                link="https://styly.inc/"
                className="mt-5"
              />
              <h4 className="text-lg font-bold mb-4">Venue Partner</h4>
              <SponsorCard
                logo="/lodge-logo.svg"
                name="︎Open Collaboration Hub LODGE"
                link="https://www.z-lodge.com/"
                badgeStyle="venue"
              />
	      <h4 className="text-lg font-bold mb-4">Filming Partner</h4>
              <SponsorCard
                logo="/crossdevice-logo.png"
                name="︎Crossdevice Inc."
                link="https://www.crossdevice.co.jp/"
	  	badgeStyle="venue"
              />
	      <div className="col-span-2">
	      <h4 className="text-lg font-bold mb-4">Community Partners</h4>
	      </div>
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
            </div>
          </div>

          <div className="flex flex-col items-center mt-16">
            <h4 className="text-xl font-bold text-purple-700 mb-4">
              Sponsorship Opportunities Available!
            </h4>
            <a
              href="https://forms.gle/rkd5RQrNtSU4fYxF9"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-black py-2 px-6 rounded-full hover:bg-orange-300 transition"
            >
              Apply Here →
            </a>
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
            className="text-black bg-white py-2 px-6 rounded-full hover:bg-orange-300 transition"
          >
            Purchase here →
          </a>
        </section>

        <section
          id="contact"
          className="min-h-screen flex flex-col items-center justify-center bg-white text-black px-8 py-12"
        >
          <h3 className="text-3xl sm:text-5xl font-bold mb-4">Contact</h3>
          <a
            href="https://forms.gle/UAUzjzJvSmNtKthg6"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-black text-black py-2 px-6 rounded-full hover:bg-orange-300 transition"
          >
            Contact Form →
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
            className="block md:hidden text-2xl text-black focus:outline-none mt-[-1px]"
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
              <a href="#top" className="hover:underline font-bold">
                Top
              </a>
            </li>
            <li className="mb-2">
              <a href="#news" className="hover:underline font-bold">
                News
              </a>
            </li>
            <li className="mb-2">
              <a href="#uniqueness" className="hover:underline font-bold">
                Uniqueness
              </a>
            </li>
            <li className="mb-2">
              <a href="/en/history" className="hover:underline font-bold">
                History
              </a>
            </li>
            <li className="mb-2">
              <a href="/en/schedule" className="hover:underline font-bold">
                Schedule
              </a>
            </li>
            <li className="mb-2">
              <a href="#judges" className="hover:underline font-bold">
                Judges
              </a>
            </li>
            <li className="mb-2">
              <a href="#sponsors" className="hover:underline font-bold">
                Sponsors
              </a>
            </li>
            <li className="mb-2">
              <a href="/en/press" className="hover:underline font-bold">
                Press
              </a>
            </li>
            <li className="mb-2">
              <a href="#tickets" className="hover:underline font-bold">
                Ticket Purchase
              </a>
            </li>
            <li className="mb-2">
              <a href="#contact" className="hover:underline font-bold">
                Contact
              </a>
            </li>
          </ul>
        )}

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-4 text-sm text-black mt-2">
          <li>
            <a href="#top" className="hover:underline font-bold">
              Top
            </a>
          </li>
          <li>
            <a href="#news" className="hover:underline font-bold">
              News
            </a>
          </li>
          <li>
            <a href="#uniqueness" className="hover:underline font-bold">
              Uniqueness
            </a>
          </li>
          <li>
            <a href="/en/history" className="hover:underline font-bold">
              History
            </a>
          </li>
          <li>
            <a href="/en/schedule" className="hover:underline font-bold">
              Schedule
            </a>
          </li>
          <li>
            <a href="#judges" className="hover:underline font-bold">
              Judges
            </a>
          </li>
          <li>
            <a href="#sponsors" className="hover:underline font-bold">
              Sponsors
            </a>
          </li>
          <li>
            <a href="/en/press" className="hover:underline font-bold">
              Press
            </a>
          </li>
          <li>
            <a href="#tickets" className="hover:underline font-bold">
              Ticket Purchase
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:underline font-bold">
              Contact
            </a>
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
          <p className="text-sm">Speaker</p>
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
        <p className="text-xs md:text-sm text-gray-700">{title}</p>
        {description && (
          <p className="text-[11px] text-gray-600">{description}</p>
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
          Official Website →
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

