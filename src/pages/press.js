import React from 'react';

const Press = () => {
    return (
        <section id="press" style={styles.section}>
            <h1 style={styles.title}>報道</h1>

            {/* Press Releases Section */}
            <div style={styles.pressReleases}>
                <h2 style={styles.subtitle}>プレスリリース</h2>
                <ul style={styles.list}>
                    <li style={styles.listItem}>
                        <a
                            href="https://visiondevcamp.org/wp-content/uploads/2024/02/VisionDevCamp-Press-Release-2.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={styles.link}
                        >
                            VisionDevCamp, a developer event for Apple Vision Pro and visionOS, to be held in Santa Clara, CA — March 29-31, 2024
                        </a>{" "}
                        (28 February 2024)
                    </li>
                    <li style={styles.listItem}>
                        <a
                            href="https://visiondevcamp.org/wp-content/uploads/2023/11/VisionDevCamp-Press-Release.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={styles.link}
                        >
                            VisionDevCamp to Launch in Early 2024, Bringing Developers Together to Create Innovative Apps for Apple Vision Pro and visionOS
                        </a>{" "}
                        (15 November 2023)
                    </li>
                </ul>
            </div>

            {/* Press Coverage Section */}
            <div style={styles.pressCoverage}>
                <h2 style={styles.subtitle}>VisionDevCamp プレス掲載情報</h2>
                <p style={styles.text}>
	          以下はVisionDevCampについてのブログ、記事、そしてポッドキャストの一覧である。
                </p>
                <ul style={styles.list}>
                    {pressCoverageLinks.map((item, index) => (
                        <li key={index} style={styles.listItem}>
                            <a
                                href={item.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={styles.link}
                            >
                                {item.source}: {item.title}
                            </a>{" "}
                            ({item.date})
                        </li>
                    ))}
                </ul>
            </div>

	{/* Footer */}
      	<footer className="bg-gray-800 text-white text-center py-6 mt-20">
        <p>
          Built with ❤️  using <a href="https://nextjs.org" className="underline hover:text-blue-400">Next.js</a>.
        </p>
	<p>
	  Copyright ©︎ VisionDevCamp Tokyo 2025 All Rights Reserved.
	</p>
      </footer>
        </section>
    );
};

// Press Coverage Links
const pressCoverageLinks = [
    {
        source: "Mixed Reality News",
        title: "Apple Vision Pro: VisionDevCamp connects developers and experts",
        url: "https://mixed-news.com/en/apple-vision-pro-visiondevcamp-connects-developers-and-experts/#google_vignette",
        date: "3 March 2024",
    },
    {
        source: "9to5Mac",
        title: "VisionDevCamp offers $100 Vision Pro hackathon event in Santa Clara",
        url: "https://9to5mac.com/2024/02/28/vision-pro-hackathon/",
        date: "28 February 2024",
    },
    {
        source: "AppleInsider",
        title: "VisionDevCamp is a three-day hackathon for Vision Pro Devs",
        url: "https://appleinsider.com/articles/24/02/28/visiondevcamp-is-a-three-day-hackathon-for-vision-pro-devs",
        date: "28 February 2024",
    },
    {
        source: "MacHash",
        title: "VisionDevCamp is a three-day hackathon for Vision Pro Devs",
        url: "https://machash.com/appleinsider/367644/visiondevcamp-three-day-hackathon-vision-pro-devs/",
        date: "28 February 2024",
    },
    {
        source: "MacTech",
        title: "VisionDevCamp Hackathon-Style Event for visionOS Coming Next Month",
        url: "https://www.mactech.com/2024/02/28/visiondevcamp-hackathon-style-event-for-visionos-coming-next-month/",
        date: "28 February 2024",
    },
    {
        source: "Voices of VR Podcast",
        title: "#1320: Plans for VisionDevCamp, an Apple Vision Pro Hackathon after Q1 2024 Launch",
        url: "https://voicesofvr.com/1320-plans-for-visiondevcamp-an-apple-vision-pro-hackathon-after-q1-2024-launch/",
        date: "7 December 2023",
    },
    {
        source: "UploadVR",
        title: "VisionDevCamp To Jumpstart Apple Vision Pro Developers In Early 2024",
        url: "https://www.uploadvr.com/visiondevcamp-vision-pro-developer-event-2024/",
        date: "15 November 2023",
    },
];

const styles = {
    section: {
        padding: '20px',
        maxWidth: '1200px',
        margin: '40px 0 40px 0',
        textAlign: 'left',
    },
    title: {
        fontSize: '24px',
        textAlign: 'center',
        marginBottom: '40px',
    },
    subtitle: {
        fontSize: '20px',
	marginTop: '40px',
        marginBottom: '10px',
    },
    text: {
        fontSize: '16px',
        lineHeight: '1.6',
        marginBottom: '20px',
    },
    list: {
        listStyleType: 'none',
        paddingLeft: '0',
    },
    listItem: {
        fontSize: '16px',
        marginBottom: '10px',
    },
    link: {
        color: '#0070f3',
        textDecoration: 'none',
        wordWrap: 'break-word',
    },
};

const mediaQueryStyles = `
@media (max-width: 768px) {
  h1 {
    font-size: 20px;
    margin-bottom: 30px;
  }
  h2 {
    font-size: 18px;
  }
  ul {
    padding-left: 10px;
  }
  li {
    font-size: 14px;
  }
}
`;

export default Press;
