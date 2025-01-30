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
    <div
      className={`${geistSans.variable} ${geistMono.variable} font-[family-name:var(--font-geist-sans)]`}
    >
      <Header />
      {/* Main Sections */}
      <main className="mt-16">
        {/* Section 1 */}
        <section
          id="top"
          className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-black text-white px-8 py-12"
        >
          <h1 className="text-4xl sm:text-6xl font-bold">
            VisionDevCamp <span className="text-red-500">Tokyo</span> 2025
          </h1>
          <p className="text-lg sm:text-xl underline mt-4 text-center">
            The historic hackathon originating in Silicon Valley in 2007 is coming to
            Japan for the first time!
          </p>
          {/* Subtitle */}
          <p className="text-md sm:text-lg mt-4 text-center font-medium">
            Special focus on Apple Vision Pro! <br />
            Collaborate as an individual or a team to bring your ideas to life!
          </p>

          {/* Date */}
          <div className="mt-8 text-center">
            <p className="text-4xl sm:text-5xl font-bold text-red-400">
              04.11 <span className="text-2xl sm:text-3xl">Fri</span> - 13
              <span className="text-2xl sm:text-3xl">Sun</span>, 2025
            </p>
          </div>

          {/* Venue */}
          <div className="mt-4 text-center">
            <p className="text-lg sm:text-xl font-bold">
              Venue: <span className="text-white">Miraikan, Tokyo, Japan</span>
            </p>
          </div>

          {/* Event Format */}
          <div className="mt-4 text-center">
            <p className="text-lg sm:text-xl font-bold">
              Format: <span className="text-white">Hybrid (On-site & Online)</span>
            </p>
          </div>
        </section>

        {/* News Section */}
        <section
          id="news"
          className="flex flex-col bg-[#e75b10] text-white px-8 py-12"
        >
          <h2 className="text-sm font-bold text-left mb-6 sm:text-base">News</h2>
          <div className="space-y-6 mb-8">
            <NewsItem text="Official site has been launched!" link="#top" />
          </div>
          <p>Past event highlights</p>
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

        {/* Features Section */}
        <section
          id="uniqueness"
          className="min-h-screen flex flex-col bg-yellow-400 text-gray-900 px-8 py-12"
        >
          <h3 className="text-sm sm:text-base font-bold mb-6">Features</h3>
          <div style={styles.sectionRow}>
            <div style={styles.imageColumn}>
              <img
                src="/visiondevcamp2025-group-photo.jpg"
                alt="VisionDevCamp Group"
                style={styles.image}
              />
            </div>
            <div style={styles.textColumn}>
              <h2 style={styles.subtitle}>Developers gather to create apps for Apple Vision Pro</h2>
              <ul style={styles.list}>
                <li>VisionDevCamp is a nonprofit event focusing on app development for Apple Vision Pro and visionOS.</li>
                <li>Supported by an experienced volunteer team, we bring together developers, designers, entrepreneurs, and enthusiasts.</li>
                <li>The event spans from Friday to Sunday, fostering both individual and team projects over the weekend.</li>
              </ul>
            </div>
            <div style={styles.imageColumn}>
              <img
                src="/raven-photo.png"
                alt="Raven Photo"
                style={styles.image}
              />
            </div>
          </div>
          <div style={styles.sectionRow}>
            <div style={styles.textColumn}>
              <h2 style={styles.subtitle}>The world's largest visionOS developer community</h2>
              <p>The inaugural VisionDevCamp in March 2024 attracted visionOS developers from around the globe.</p>
              <p>Despite the recent release, over 100 Vision Pro devices and 150 developers participated in the weekend hackathon.</p>
            </div>
            <div style={styles.imageColumn}>
              <img
                src="/largest-vos-community-photo.jpg"
                alt="VisionDevCamp 2024"
                style={styles.image}
              />
            </div>
          </div>
          <div style={styles.sectionRow}>
            <div style={styles.textColumn}>
              <h2 style={styles.subtitle}>Nonprofit and volunteer-driven</h2>
              <p>Run by volunteers, the event is funded by sponsors and participants.</p>
              <p>We aim to keep fees low while providing space, meals, power, internet, and networking opportunities for a focus on creating amazing applications.</p>
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
              Learn More →
            </a>
          </div>
        </section>

        {/* Tickets Section */}
        <section
          id="tickets"
          className="min-h-screen flex flex-col items-center justify-center bg-purple-600 text-white px-8 py-12"
        >
          <h3 className="text-3xl sm:text-5xl font-bold">Buy Tickets</h3>
          <p className="text-md sm:text-lg underline mt-4 text-center max-w-3xl">
            Ticket sales start in February 2025!
          </p>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="min-h-screen flex flex-col items-center justify-center bg-white text-black px-8 py-12"
        >
          <h3 className="text-3xl sm:text-5xl font-bold mb-6">Contact Us</h3>
          <a
            href="https://forms.gle/UAUzjzJvSmNtKthg6"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-black text-black py-2 px-6 rounded-full hover:bg-orange-100 transition"
          >
            Contact Form →
          </a>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-6">
        <p>Copyright ©︎ VisionDevCamp Tokyo 2025 All Rights Reserved.</p>
      </footer>
    </div>
  );
}



function NewsItem({ text, link }) {
  return (
    <div className="flex items-center space-x-4">
      <div className="text-xl font-bold">›</div>
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



function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [languageModalOpen, setLanguageModalOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const toggleLanguageModal = () => {
    setLanguageModalOpen(!languageModalOpen);
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
	
	{/* Language Switcher Icon */}
        <button
          onClick={toggleLanguageModal}
          className="block text-2xl md:mr-4 focus:outline-none"
          aria-label="Language Switcher"
        >
          <img
	    src="/globe-outline.svg"
	    alt="globe icon"
	    className="w-5 h-5"
	  />
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

	{/* Language Modal */}
        {languageModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
            <div className="bg-white rounded-lg shadow-lg p-6 w-10/12 max-w-sm">
              <h2 className="text-lg font-bold mb-4">Select Language</h2>
              <ul className="space-y-4">
                <li>
                  <button className="w-full text-left">English</button>
                </li>
                <li>
                  <button className="w-full text-left">日本語</button>
                </li>
              </ul>
              <button
                onClick={toggleLanguageModal}
                className="mt-6 w-full py-2 px-4 border border-black rounded-lg text-black hover:bg-gray-200"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
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
};
