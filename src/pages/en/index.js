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

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
                  {/* Day 1 */}
                  <div className="bg-black/50 backdrop-blur-sm p-5 rounded-xl shadow-lg border-l-4 border-accent">
                    <h4 className="text-xl font-bold mb-3 flex items-center">
                      <span className="w-3 h-3 bg-accent rounded-full mr-2 animate-pulse"></span>
                      DAY 1: April 11 (Fri)
                    </h4>
                    <h5 className="font-semibold mb-3 text-vibrant">
                      Team Building
                    </h5>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <tbody>
                          <tr className="border-b border-white/10">
                            <td className="py-2 pr-3 whitespace-nowrap font-semibold">
                              18:30
                            </td>
                            <td className="py-2">
                              <div className="font-medium">Doors Open</div>
                              <div className="text-white/70 text-xs">
                                Registration starts
                              </div>
                            </td>
                          </tr>
                          <tr className="border-b border-white/10">
                            <td className="py-2 pr-3 whitespace-nowrap font-semibold">
                              19:00-19:15
                            </td>
                            <td className="py-2">
                              <div className="font-medium">Opening</div>
                              <div className="text-white/70 text-xs">
                                Welcome address from organizers
                              </div>
                            </td>
                          </tr>
                          <tr className="border-b border-white/10">
                            <td className="py-2 pr-3 whitespace-nowrap font-semibold">
                              19:15-19:45
                            </td>
                            <td className="py-2">
                              <div className="font-medium">Short Keynotes</div>
                              <div className="text-white/70 text-xs">
                                Short keynotes from sponsor companies
                              </div>
                            </td>
                          </tr>
                          <tr className="border-b border-white/10">
                            <td className="py-2 pr-3 whitespace-nowrap font-semibold">
                              19:45-20:30
                            </td>
                            <td className="py-2">
                              <div className="font-medium">
                                Self-introductions
                              </div>
                              <div className="text-white/70 text-xs">
                                Participants pitch their ideas in about 1 minute
                              </div>
                            </td>
                          </tr>
                          <tr className="border-b border-white/10">
                            <td className="py-2 pr-3 whitespace-nowrap font-semibold">
                              20:30-21:30
                            </td>
                            <td className="py-2">
                              <div className="font-medium">
                                Team Formation (with dinner)
                              </div>
                              <div className="text-white/70 text-xs">
                                Dinner
                                <br />
                                Standing buffet style networking
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="py-2 pr-3 whitespace-nowrap font-semibold">
                              22:00
                            </td>
                            <td className="py-2">
                              <div className="font-medium">Venue Closes</div>
                              <div className="text-white/70 text-xs">
                                End of Day 1
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
                      DAY 2: April 12 (Sat)
                    </h4>
                    <h5 className="font-semibold mb-3 text-vibrant">
                      Development
                    </h5>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <tbody>
                          <tr className="border-b border-white/10">
                            <td className="py-2 pr-3 whitespace-nowrap font-semibold">
                              9:00~
                            </td>
                            <td className="py-2">
                              <div className="font-medium">Breakfast</div>
                              <div className="text-white/70 text-xs">
                                Networking with participants and sponsors
                              </div>
                            </td>
                          </tr>
                          <tr className="border-b border-white/10">
                            <td className="py-2 pr-3 whitespace-nowrap font-semibold">
                              9:30~
                            </td>
                            <td className="py-2">
                              <div className="font-medium">
                                Ideas & Feedback
                              </div>
                              <div className="text-white/70 text-xs">
                                Teams share what they&apos;re working on in
                                about 1 minute
                              </div>
                            </td>
                          </tr>
                          <tr className="border-b border-white/10">
                            <td className="py-2 pr-3 whitespace-nowrap font-semibold">
                              10:00~
                            </td>
                            <td className="py-2">
                              <div className="font-medium">
                                Speaker Sessions
                              </div>
                              <div className="text-white/70 text-xs">
                                Talk sessions by guest speakers
                              </div>
                            </td>
                          </tr>
                          <tr className="border-b border-white/10">
                            <td className="py-2 pr-3 whitespace-nowrap font-semibold">
                              10:30~22:00
                            </td>
                            <td className="py-2">
                              <div className="font-medium">
                                Development Time
                              </div>
                              <div className="text-white/70 text-xs">
                                13:00~ Lunch
                                <br />
                                19:00~ Dinner
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="py-2 pr-3 whitespace-nowrap font-semibold">
                              22:00
                            </td>
                            <td className="py-2">
                              <div className="font-medium">Venue Closes</div>
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
                      DAY 3: April 13 (Sun)
                    </h4>
                    <h5 className="font-semibold mb-3 text-vibrant">
                      Demos & Judging
                    </h5>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <tbody>
                          <tr className="border-b border-white/10">
                            <td className="py-2 pr-3 whitespace-nowrap font-semibold">
                              9:00~
                            </td>
                            <td className="py-2">
                              <div className="font-medium">Breakfast</div>
                              <div className="text-white/70 text-xs">
                                Networking with participants and sponsor
                                engineers
                              </div>
                            </td>
                          </tr>
                          <tr className="border-b border-white/10">
                            <td className="py-2 pr-3 whitespace-nowrap font-semibold">
                              9:30~15:00
                            </td>
                            <td className="py-2">
                              <div className="font-medium">
                                Development Time
                              </div>
                              <div className="text-white/70 text-xs">
                                13:00~ Lunch
                              </div>
                            </td>
                          </tr>
                          <tr className="border-b border-white/10">
                            <td className="py-2 pr-3 whitespace-nowrap font-semibold">
                              15:00~17:00
                            </td>
                            <td className="py-2">
                              <div className="font-medium">
                                Final Presentations
                              </div>
                              <div className="text-white/70 text-xs">
                                3-5 minutes per team
                              </div>
                            </td>
                          </tr>
                          <tr className="border-b border-white/10">
                            <td className="py-2 pr-3 whitespace-nowrap font-semibold">
                              17:00~18:00
                            </td>
                            <td className="py-2">
                              <div className="font-medium">Judging</div>
                            </td>
                          </tr>
                          <tr className="border-b border-white/10">
                            <td className="py-2 pr-3 whitespace-nowrap font-semibold">
                              18:00~
                            </td>
                            <td className="py-2">
                              <div className="font-medium">
                                Results Announcement
                              </div>
                            </td>
                          </tr>
                          <tr className="border-b border-white/10">
                            <td className="py-2 pr-3 whitespace-nowrap font-semibold">
                              19:00~
                            </td>
                            <td className="py-2">
                              <div className="font-medium">
                                Networking Party
                              </div>
                              <div className="text-white/70 text-xs">
                                Dinner
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="py-2 pr-3 whitespace-nowrap font-semibold">
                              21:00
                            </td>
                            <td className="py-2">
                              <div className="font-medium">Venue Closes</div>
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
                <SponsorCard
                  logo="/techworld-logo.jpg"
                  name="︎TECH WORLD"
                  link="https://www.youtube.com/@TECHWORLD111"
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
                  href="#sponsors"
                  className="hover:text-red-400 transition-colors"
                >
                  Sponsors
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
              <Link href="#sponsors" className="hover:underline font-bold">
                Sponsors
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
            <Link href="#sponsors" className="hover:underline font-bold">
              Sponsors
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
