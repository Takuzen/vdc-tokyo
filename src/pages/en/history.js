const History = () => {
    return (
        <section id="history" style={styles.section}>
          <h1 style={styles.title}>History</h1>

{/* Section 2 */}
<div style={styles.sectionRow}>
    <div style={styles.textColumn}>
        <h2 style={styles.subtitle}>A Historic Hackathon Originating from Silicon Valley</h2>
        <p>With its origins tracing back to the release of the iPhone in 2007, this hackathon boasts a 16-year-long history.</p>
        <p>It started as iPhoneDevCamp (2007, 2008, 2009) and later expanded in scale and participation, evolving into iPadDevCamp (2010) and then iOSDevCamp (2010, 2011, 2012, 2013).</p>
    </div>
    <div style={styles.image}>
        <div style={styles.imageWithCaption}>
            <img
                src="/iPhoneDevCamp07.png"
                alt="iPhoneDevCamp (2007)"
                style={styles.image}
            />
            <p style={styles.caption}>iPhoneDevCamp (2007)</p>
        </div>
	<div style={styles.imageWithCaption}>
          <img
            src="/dom-promoting-iPhoneDevCamp-2.png"
            alt="Dom Promoting iphoneDevCamp 2 Photo"
            style={styles.image}
          />
          <p style={styles.caption}>Dom promoting iPhoneDevCamp 2 in 2008</p>
        </div>
        <div style={styles.imageWithCaption}>
            <img
                src="/iPhoneDevCamp-2-08.png"
                alt="iPhoneDevCamp 2 (2008)"
                style={styles.image}
            />
            <p style={styles.caption}>iPhoneDevCamp 2 (2008)</p>
        </div>
        <div style={styles.imageWithCaption}>
            <img
                src="/iPhoneDevCamp-3-09.png"
                alt="iPhoneDevCamp 3 (2009)"
                style={styles.image}
            />
            <p style={styles.caption}>iPhoneDevCamp 3 (2009)</p>
        </div>
        <div style={styles.imageWithCaption}>
            <img
                src="/iPadDevCamp-10.png"
                alt="iPadDevCamp (2010)"
                style={styles.image}
            />
            <p style={styles.caption}>iPadDevCamp (2010)</p>
        </div>
        <div style={styles.imageWithCaption}>
            <img
                src="/iOSDevCamp-10.png"
                alt="iOSDevCamp 2010"
                style={styles.image}
            />
            <p style={styles.caption}>iOSDevCamp 2010</p>
        </div>
        <div style={styles.imageWithCaption}>
            <img
                src="/iOSDevCamp-11.png"
                alt="iOSDevCamp 2011"
                style={styles.image}
            />
            <p style={styles.caption}>iOSDevCamp 2011</p>
        </div>
        <div style={styles.imageWithCaption}>
            <img
                src="/iOSDevCamp-12.png"
                alt="iOSDevCamp 2012"
                style={styles.image}
            />
            <p style={styles.caption}>iOSDevCamp 2012</p>
        </div>
        <div style={styles.imageWithCaption}>
            <img
                src="/iOSDevCamp-13.png"
                alt="iOSDevCamp 2013"
                style={styles.image}
            />
            <p style={styles.caption}>iOSDevCamp 2013</p>
        </div>
    </div>
</div>

	    {/* Section 5 */}
	    <div style={styles.sectionRow}>
  	    <h2 style={styles.subtitle}>Producing Many Successful Projects</h2>
            <p style={styles.text}>
    	      This hackathon has promoted inclusion, diversity, and empowerment in the developer community. Every year, hundreds of developers, designers, and enthusiasts gather to create apps for the iPhone, iPad, and iOS.
	    </p>
  	    <ul style={styles.list}>
    	      <li>From well-known open-source projects like OAuth to publicly traded companies like Block (formerly Square), this hackathon has been a launchpad for many successful ventures.</li>
    	      <li>Projects such as Getaround, the Obama ’08 app, and Apple’s TestFlight all originated from here.</li>
  	    </ul>

    <div style={styles.projectContainer}>
    {/* Logos/Icons Section */}
    <div style={styles.projectRow}>
      <img src="/oauth-logo.png" alt="Oauth Logo" style={styles.projectImage} />
      <img src="/square-block-logo.png" alt="Square/Block Logo" style={styles.projectImage} />
      <img src="/gatearound-logo.png" alt="Gateround Logo" style={styles.projectImage} />
      <img src="/obama-08-logo.png" alt="Obama ’08 Logo" style={styles.projectImage} />
      <img src="/testflight-logo.png" alt="TestFlight Logo" style={styles.projectImage} />
    </div>

    {/* Additional Content */}
    <div style={styles.quote}>
　　　<div style={styles.imageColumn}>
        <img
          src="/dom-photo.png"
          alt="Dom Photo"
          style={styles.image}
        />
      </div>
	      <p className="mt-4">
        "It’s a great opportunity to find co-founders, build a team, and turn your dreams into reality."
      </p>
      <footer>— Dom Sagolla, Co-organizer of DevCamp</footer>
      </div>
      </div>
    </div>

      	    {/* Section 5 */}
	    <div style={styles.sectionRow}>
  	      <h2 style={styles.subtitle}>And Now, VisionDevCamp</h2>
	    <ul style={styles.list}>
    	      <li>The first VisionDevCamp was held in Santa Clara, USA, just one month after the launch of the Vision Pro.</li>
    	      <li>Around 100 developers gathered with more than 100 Vision Pro devices, enjoying a three-day hackathon including the weekend.
</li>
  	    </ul>
	      　　　<div style={styles.imageColumn}>
              <img
                src="/visiondevcamp-zoomup-photo.png"
                alt="VisionDevCamp Group Photo Zoomup"
                style={styles.image}
              />
      	      </div>　
	    </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-6">
	<p>
	  Copyright ©︎ VisionDevCamp Tokyo 2025 All Rights Reserved.
	</p>
      </footer>
        </section>
    );
};

const styles = {
    section: {
        padding: '20px',
        maxWidth: '1200px',
        margin: '0 auto',
    },
    title: {
        fontSize: '24px',
        textAlign: 'center',
        margin: '40px 0 40px 0',
    },
    sectionRow: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: '40px',
        gap: '20px',
    },
    textColumn: {
        flex: '1',
        textAlign: 'left',
        maxWidth: '650px',
	marginBottom: '20px',
    },
    imageColumn: {
        flex: '1',
        display: 'flex',
        justifyContent: 'center',
    },
    subtitle: {
	flex: '1',
        display: 'flex',
        justifyContent: 'center',
        fontSize: '24px',
        marginBottom: '20px',
    },
    text: {
        fontSize: '16px',
        lineHeight: '1.6',
        marginBottom: '10px',
    },
    image: {
        width: '100%',
        maxWidth: '500px',
        height: 'auto',
        borderRadius: '10px',
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
    imageGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
        gap: '20px',
        width: '100%',
        justifyContent: 'center',
    },
    imageWithCaption: {
        textAlign: 'center',
    },
    caption: {
        fontSize: '14px',
        color: '#666',
        marginBottom: '8px',
    },
	projectContainer: {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '20px',
  marginTop: '20px',
},

projectRow: {
  display: 'flex',
  justifyContent: 'center',
  gap: '20px',
  flexWrap: 'wrap',
},

projectImage: {
  width: '120px',
  height: 'auto',
  objectFit: 'contain',
  margin: '10px',
},

quote: {
  fontStyle: 'italic',
  textAlign: 'center',
  fontSize: '16px',
  marginTop: '20px',
  color: '#555',
},
};

export default History;
