import React from 'react';

const History = () => {
    return (
        <section id="history" style={styles.section}>
          	    	<h1 style={styles.title}>歴史と特徴</h1>
            {/* Section 1 */}
            <div style={styles.sectionRow}>
	        <div style={styles.imageColumn}>
                  <img
                    src="/visiondevcamp2025-group-photo.jpg"
                    alt="VisionDevCamp Group"
                    style={styles.image}
                  />
                </div>
                <div style={styles.textColumn}>
                    <h2 style={styles.subtitle}>開発者が集まりApple Vision Proで動作するアプリを作る</h2>
                    <ul style={styles.list}>
                        <li>VisionDevCampは、Apple Vision ProとvisionOS向けのアプリケーション開発に焦点を当てた、非営利の開発者向けイベントです。</li>
                        <li>経験豊富なボランティアチームがApple Vision ProとvisionOSの開発者、デザイナー、起業家、および愛好家の方々をサポートします。</li>
                        <li>イベントは金曜日から日曜日まで開催され、参加者は週末にかけて共同作業を行います。開発プロジェクトには、個人での作業とチームでの作業の両方が含まれます。</li>
                    </ul>
                    <blockquote style={styles.quote}>
                        <p>"VisionDevCampは、Apple Vision ProとvisionOS向けのアプリケーション開発に焦点を当てた非営利の開発者向けイベントです。" </p>
                        <footer>– Raven Zachary、DevCamp共同主催者</footer>
                    </blockquote>
                </div>
                <div style={styles.imageColumn}>
                    <img
                        src="/raven-photo.png"
                        alt="Raven Photo"
                        style={styles.image}
                    />
                </div>
            </div>

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

	          {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-6">
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
    },
    imageColumn: {
        flex: '1',
        display: 'flex',
        justifyContent: 'center',
    },
    subtitle: {
        fontSize: '24px',
        marginBottom: '10px',
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
};

export default History;
