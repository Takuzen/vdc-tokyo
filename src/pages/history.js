import React from 'react';

const History = () => {
    return (
        <section id="history" style={styles.section}>
          <h1 style={styles.title}>歴史</h1>

{/* Section 2 */}
<div style={styles.sectionRow}>
    <div style={styles.textColumn}>
        <h2 style={styles.subtitle}>シリコンバレー発祥の歴史あるハッカソン</h2>
        <p>2007年のiPhoneの発売を起源とし、16年の長い歴史を有しています。</p>
        <p>iPhoneDevCamp (2007, 2008, 2009)から始まり、iPadDevCamp (2010)、iOSDevCamp (2010, 2011, 2012, 2013)と、規模と参加者を拡大していきました。</p>
    </div>
    <div style={styles.image}>
        <div style={styles.imageWithCaption}>
            <img
                src="iPhoneDevCamp07.png"
                alt="iPhoneDevCamp (2007)"
                style={styles.image}
            />
            <p style={styles.caption}>iPhoneDevCamp (2007)</p>
        </div>
	<div style={styles.imageWithCaption}>
          <img
            src="dom-promoting-iPhoneDevCamp-2.png"
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
            {/* Section 3 */}
            <div style={styles.sectionRow}>
                <div style={styles.textColumn}>
                    <h2 style={styles.subtitle}>世界最大級のvisionOS開発者コミュニティ</h2>
                    <p>2024年の3月に開催された第1回目のVisionDevCampは世界中からvisionOS開発者が集まりました。</p>
                    <p>発売直後にも関わらず、100台以上のVision Proと150人以上の開発者が週末に集まりハッカソンを楽しみました。</p>
                </div>
                <div style={styles.imageColumn}>
                    <img
                        src="/largest-vos-community-photo.jpg"
                        alt="VisionDevCamp 2024"
                        style={styles.image}
                    />
                </div>
            </div>

            {/* Section 4 */}
            <div style={styles.sectionRow}>
                <div style={styles.textColumn}>
                    <h2 style={styles.subtitle}>非営利のボランティアによる運営</h2>
                    <p>ボランティアによって運営され、スポンサーと参加者の両方によって費用が賄われる非営利イベントです。</p>
                    <p>参加者が素晴らしいアプリケーションの開発に集中できるよう、スペース、食事、電源、インターネット、ネットワーキングの機会を提供し、参加費をできるだけ低く抑えることを目標としています。</p>
                </div>
                <div style={styles.imageColumn}>
                    <img
                        src="/volunteer-operation-photo.png"
                        alt="Volunteer Team"
                        style={styles.image}
                    />
                </div>
            </div>
	    {/* Section 5 */}
	    <div style={styles.sectionRow}>
  	    <h2 style={styles.subtitle}>多数の成功プロジェクトを輩出</h2>
            <p style={styles.text}>
    	      開発者コミュニティにおけるインクルージョン、多様性、エンパワーメントを促進しており、毎年、何百人もの開発者、デザイナー、愛好家が集まり、iPhone、iPad、iOS向けのアプリを作成してきました。
	    </p>
  	    <ul style={styles.list}>
    	      <li>Oauthのような著名なオープンソースプロジェクトから、Block（旧Square）のような上場企業に至るまで、多くのものを生み出してきました。</li>
    	      <li>Getaround、Obama ’08アプリ、AppleのTestFlightなどもすべてここから生まれました。</li>
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
      <p>
        "共同創業者を見つけて、チームを作り、あなたの夢を現実にするための絶好の機会です。"
      </p>
      <footer>– Dom Sagolla、DevCamp共同主催者</footer>
　　　<div style={styles.imageColumn}>
        <img
          src="/dom-photo.png"
          alt="Dom Photo"
          style={styles.image}
        />
      </div>
      </div>
      </div>
    </div>

      	    {/* Section 5 */}
	    <div style={styles.sectionRow}>
  	      <h2 style={styles.subtitle}>そして、VisionDevCampへ</h2>
	    <ul style={styles.list}>
    	      <li>Vision Proが発売された翌月末に、第1回目のVisionDevCampがアメリカのサンタクララで開催されました。</li>
    	      <li>100台以上のVision Proと150人以上の開発者が集まり、週末を含め3日間のハッカソンを楽しみました。
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
