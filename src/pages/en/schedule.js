import React from "react";

const Schedule = () => {
  return (
    <section id="schedule" style={styles.section}>
      <h1 style={styles.title}>Schedule</h1>

      {/* Pre-event Table */}
      <div style={styles.tableWrapper}>
        <h2 style={styles.tableTitle}>Pre-Event Schedule</h2>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.tableHeader}>Period</th>
              <th style={styles.tableHeader}>Content</th>
              <th style={styles.tableHeader}>Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.tableCell}>Mid-January to Mid-March</td>
              <td style={styles.tableCell}>Recruitment Events</td>
              <td style={styles.tableCell}>
                Technical Workshops
                <ul style={styles.list}>
                  <li>Online/offline workshops supporting the acquisition of visionOS development skills.</li>
                  <li>Developers can deepen their understanding through hands-on practice before the main hackathon.</li>
                </ul>

	        Guest Talks by International Developers and Communities
	  	<ul style={styles.list}>
	  	  <li>Online talk events featuring guest speakers from the first VisionDevCamp or developers already building for visionOS in the US and Europe, sharing their experiences and tips.</li>
	        </ul>

	        Sponsor Introductions & Networking
	  	<ul style={styles.list}>
	  	  <li>Online sessions introducing sponsor companies’ technology and vision, followed by a casual networking event. Participants can learn about resources, APIs, and SDKs provided by sponsors in advance to integrate them into their development plans.</li>
	        </ul>
              </td>
            </tr>
            <tr>
              <td style={styles.tableCell}>March 11 - April 10</td>
              <td style={styles.tableCell}>Ideathon & Team Building</td>
              <td style={styles.tableCell}>
	  	Online brainstorming sessions where participants discuss ideas based on pre-set themes or challenges for visionOS apps.
                <ul style={styles.list}>
                  <li>Breakout room discussions with small groups</li>
                  <li>Post-discussion idea-sharing session</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Day 1 Table */}
      <div style={styles.tableWrapper}>
        <h2 style={styles.tableTitle}>Day 1 Timetable</h2>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.tableHeader}>Time</th>
              <th style={styles.tableHeader}>Section</th>
              <th style={styles.tableHeader}>Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.tableCell}>15:00-17:00</td>
              <td style={styles.tableCell}>Preparation Meeting</td>
              <td style={styles.tableCell}>
	        Final role confirmations among staff, venue layout checks, sponsor-provided equipment and merchandise setup, and online streaming setup/testing for remote participants (camera angles, mic volume, screen sharing tests).
              </td>
            </tr>
            <tr>
              <td style={styles.tableCell}>17:00~</td>
              <td style={styles.tableCell}>Doors Open</td>
              <td style={styles.tableCell}>Participant check-in begins.</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>17:00-19:00</td>
              <td style={styles.tableCell}>Networking Dinner</td>
              <td style={styles.tableCell}>A casual standing buffet where participants can interact.</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>19:00-19:30</td>
              <td style={styles.tableCell}>Welcome & Introductions</td>
              <td style={styles.tableCell}>
	        Organizer’s welcome speech, followed by a keynote from a lead sponsor discussing why they focus on visionOS, expectations for this event, and available support.
	      </td>
            </tr>
            <tr>
              <td style={styles.tableCell}>19:30-21:00</td>
              <td style={styles.tableCell}>Team Formation & Idea Pitches</td>
              <td style={styles.tableCell}>Participants (individuals or pre-formed teams) pitch their development ideas in about 1 minute.	      </td>
            </tr>
            <tr>
              <td style={styles.tableCell}>22:00</td>
              <td style={styles.tableCell}>Venue Closes</td>
              <td style={styles.tableCell}>End of the first day.</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Day 2 & 3 Table */}
      <div style={styles.tableWrapper}>
        <h2 style={styles.tableTitle}>Day 2 & 3 Timetable</h2>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.tableHeader}>Time</th>
              <th style={styles.tableHeader}>Section</th>
              <th style={styles.tableHeader}>Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.tableCell}>9:00~</td>
              <td style={styles.tableCell}>Breakfast</td>
              <td style={styles.tableCell}>
	         Casual networking over breakfast with participants and sponsor engineers.              </td>
            </tr>
            <tr>
              <td style={styles.tableCell}>09:30~</td>
              <td style={styles.tableCell}>Open Mic</td>
              <td style={styles.tableCell}>
	        Each team shares a brief 1-minute update on their current development status, providing a follow-up for those who joined later (e.g., online-to-offline switchers or Saturday-only participants).              </td>
            </tr>
            <tr>
              <td style={styles.tableCell}>10:00~</td>
              <td style={styles.tableCell}>Keynote & Talks</td>
              <td style={styles.tableCell}>
	        Guest speakers well-versed in Apple VisionOS technology or sponsors share insights on “The Future of Spatial Computing” and tips for visionOS development.              </td>
            </tr>
            <tr>
              <td style={styles.tableCell}>10:30-13:00</td>
              <td style={styles.tableCell}>Development Work Time</td>
              <td style={styles.tableCell}>
	        Hands-on mini-sessions hosted by volunteers at booth sides. Sponsor companies will keep technical consultation booths open.	      </td>
            </tr>
            <tr>
              <td style={styles.tableCell}>13:00~</td>
              <td style={styles.tableCell}>Lunch</td>
              <td style={styles.tableCell}>
                Networking and interaction with fellow developers and sponsors.
              </td>
            </tr>
            <tr>
              <td style={styles.tableCell}>14:00-19:00</td>
              <td style={styles.tableCell}>Development Work Time</td>
              <td style={styles.tableCell}>
	        (On Day 3, this time includes project demos, judging, and awards.)
	      </td>
            </tr>
          </tbody>
        </table>
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

