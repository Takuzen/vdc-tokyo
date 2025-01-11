import React from "react";

const Schedule = () => {
  return (
    <section id="schedule" style={styles.section}>
      <h1 style={styles.title}>スケジュール</h1>

      {/* Pre-event Table */}
      <div style={styles.tableWrapper}>
        <h2 style={styles.tableTitle}>プレイベント</h2>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.tableHeader}>期間</th>
              <th style={styles.tableHeader}>内容</th>
              <th style={styles.tableHeader}>コンテンツ</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.tableCell}>1月中旬~3月中旬</td>
              <td style={styles.tableCell}>募集イベント</td>
              <td style={styles.tableCell}>
                技術ワークショップ
                <ul style={styles.list}>
                  <li>visionOS開発スキル習得を支援するオンライン/オフラインワークショップ</li>
                  <li>開発者が本番ハッカソン前に実際にハンズオン形式で理解を深めます。</li>
                </ul>

	        海外開発者やコミュニティによるゲストトーク
	  	<ul style={styles.list}>
	  	  <li>第1回VisionDevCamp参加者や先行して米国や欧州でvisionOS向け開発を行っている開発者をゲストスピーカーに招き、事例紹介やTipsを共有するオンライントークイベントを開催。</li>
	        </ul>

	        スポンサー紹介・ネットワーキング
	  	<ul style={styles.list}>
	  	  <li>スポンサー企業の技術やビジョンを紹介するオンライン説明会＋ライトな懇親会。スポンサー企業が提供可能なリソースやAPI、SDKなどを事前に知ってもらい、ハッカソン参加者が開発計画に組み込めるようにします。</li>
	        </ul>
              </td>
            </tr>
            <tr>
              <td style={styles.tableCell}>3月中旬</td>
              <td style={styles.tableCell}>キックオフイベント</td>
              <td style={styles.tableCell}>
                VisionDevCamp Tokyoに関する説明会。visionOSやApple Vision Pro開発の基本コンセプト、エコシステム、ハッカソンの目的、参加方法、当日の流れなどをオンラインで紹介。
              </td>
            </tr>
            <tr>
              <td style={styles.tableCell}>3/11 - 4/10</td>
              <td style={styles.tableCell}>アイデアソン & チームビルディング</td>
              <td style={styles.tableCell}>
	  	オンライン形式で、参加希望者同士がアイデア出しを行う場を提供。事前に出されたテーマや課題に対し、visionOSアプリのコンセプトを自由に議論する。
                <ul style={styles.list}>
                  <li>少人数ブレークアウトルームでのディスカッション</li>
                  <li>終了後、参加者のアイデア共有会</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Day 1 Table */}
      <div style={styles.tableWrapper}>
        <h2 style={styles.tableTitle}>Day 1 タイムテーブル</h2>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.tableHeader}>時間</th>
              <th style={styles.tableHeader}>セクション</th>
              <th style={styles.tableHeader}>詳細</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.tableCell}>15:00-17:00</td>
              <td style={styles.tableCell}>準備ミーティング</td>
              <td style={styles.tableCell}>
	        スタッフ間での最終的な役割分担確認や会場レイアウトの再点検、スポンサー提供の機材やグッズの確認・陳列準備、オンライン参加者のための配信設定・テスト（カメラアングル、マイク音量、スクリーン共有テスト） など
              </td>
            </tr>
            <tr>
              <td style={styles.tableCell}>17:00~</td>
              <td style={styles.tableCell}>開場</td>
              <td style={styles.tableCell}>参加者受付開始</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>17:00-19:00</td>
              <td style={styles.tableCell}>食事付き交流会</td>
              <td style={styles.tableCell}>立食形式で参加者同士が交流</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>19:00-19:30</td>
              <td style={styles.tableCell}>ウェルカム & 自己紹介</td>
              <td style={styles.tableCell}>
	        オーガナイザーからの歓迎挨拶、リードスポンサー企業からのショートキーノート（なぜvisionOSに注目しているかや、このイベントへの期待、支援内容
	      </td>
            </tr>
            <tr>
              <td style={styles.tableCell}>19:30-21:00</td>
              <td style={styles.tableCell}>チーム編成 & アイデアピッチ</td>
              <td style={styles.tableCell}>参加者（個人/事前登録チーム）が開発したいアイデアを1分程度で簡易ピッチするなど
	      </td>
            </tr>
            <tr>
              <td style={styles.tableCell}>22:00</td>
              <td style={styles.tableCell}>閉場</td>
              <td style={styles.tableCell}>初日終了</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Day 2 & 3 Table */}
      <div style={styles.tableWrapper}>
        <h2 style={styles.tableTitle}>Day 2・3 タイムテーブル</h2>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.tableHeader}>時間</th>
              <th style={styles.tableHeader}>セクション</th>
              <th style={styles.tableHeader}>詳細</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.tableCell}>9:00~</td>
              <td style={styles.tableCell}>朝食</td>
              <td style={styles.tableCell}>
	        参加者同士・スポンサー企業のエンジニアなどと軽めの朝食をとりながらカジュアルに交流できる。
              </td>
            </tr>
            <tr>
              <td style={styles.tableCell}>09:30~</td>
              <td style={styles.tableCell}>オープンマイク</td>
              <td style={styles.tableCell}>
	        チームごとに、簡単に「現状何を作っているか」を1分程度で共有。前日に合流できなかったメンバーや追加参加者（オンラインからオフライン参加へ切り替え、または土曜から参加の方）をフォローアップ
              </td>
            </tr>
            <tr>
              <td style={styles.tableCell}>10:00~</td>
              <td style={styles.tableCell}>基調講演 & トーク</td>
              <td style={styles.tableCell}>
	        AppleのVisionOS関連テクノロジーに通するゲストスピーカーやスポンサーによる「空間コンピューティングの最前線」のようなトークやvisionOS開発に役立つTips
              </td>
            </tr>
            <tr>
              <td style={styles.tableCell}>10:30-13:00</td>
              <td style={styles.tableCell}>開発作業時間</td>
              <td style={styles.tableCell}>
	        有志が「ハンズオンミニセッション」をブースサイドで随時開催。スポンサー企業は技術相談ブースを常時開放
	      </td>
            </tr>
            <tr>
              <td style={styles.tableCell}>13:00~</td>
              <td style={styles.tableCell}>ランチ</td>
              <td style={styles.tableCell}>
                開発者同士やスポンサーとの交流
              </td>
            </tr>
            <tr>
              <td style={styles.tableCell}>14:00-19:00</td>
              <td style={styles.tableCell}>開発作業時間</td>
              <td style={styles.tableCell}>
	        ＊3日目はこの時間に作品デモと審査、表彰を行います。
	      </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

const styles = {
  section: {
    textAlign: "center",
    margin: "50px 0",
    padding: "0 20px",
  },
  title: {
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  tableWrapper: {
    marginBottom: "40px",
    overflowX: "auto",
  },
  tableTitle: {
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    margin: "0 auto",
    fontSize: "16px",
  },
  tableHeader: {
    backgroundColor: "#000",
    color: "#fff",
    padding: "10px",
    textAlign: "left",
  },
  tableCell: {
    border: "1px solid #ddd",
    padding: "10px",
    textAlign: "left",
    verticalAlign: "top",
  },
  list: {
    paddingLeft: "20px",
    margin: "0",
    listStyle: "disc",
  },
};

export default Schedule;
