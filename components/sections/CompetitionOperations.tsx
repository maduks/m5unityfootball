'use client'

import Image from 'next/image'

export default function CompetitionOperations() {
  return (
    <div className="what-we-do">
      <div className="container">
        <div className="row section-row">
          <div className="col-lg-12">
            <div className="section-title section-title-center">
              <div className="section-bg-title wow fadeInUp">
                <span>Operations</span>
              </div>
              <h3 className="wow fadeInUp" data-wow-delay="0.2s">
                Competition Operations
              </h3>
              <h2 className="text-anime-style-2" data-cursor="-opaque">
                Comprehensive Management of <span>M5 Unity Football Cup</span>
              </h2>
              <p className="wow fadeInUp" data-wow-delay="0.4s">
                Our dedicated committees work together to ensure a smooth, fair, and successful competition every year.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="what-we-do-list">
              <div className="what-do-list-item wow fadeInUp">
                <div className="icon-box">
                  <Image src="/images/icon-what-we-do-1.svg" alt="Icon" width={50} height={50} />
                </div>
                <div className="what-do-item-content">
                  <h3>Annual Unity Football Cup Competition</h3>
                  <ul>
                    <li>Organizing competitive matches between six teams from five villages</li>
                    <li>Group stage, semi-finals, and final matches with third-place playoff</li>
                    <li>Ensuring fair play and strict adherence to competition rules</li>
                    <li>Live streaming matches to expose players to international scouts</li>
                  </ul>
                </div>
              </div>
              <div className="what-do-list-item wow fadeInUp" data-wow-delay="0.2s">
                <div className="icon-box">
                  <Image src="/images/icon-what-we-do-2.svg" alt="Icon" width={50} height={50} />
                </div>
                <div className="what-do-item-content">
                  <h3>Player Registration & Eligibility Management</h3>
                  <ul>
                    <li>Managing player registration with NIN verification</li>
                    <li>Ensuring players play only for their father or mother&apos;s village</li>
                    <li>Maintaining player eligibility records and documentation</li>
                    <li>Enforcing strict penalties for violations and ineligible players</li>
                  </ul>
                </div>
              </div>
              <div className="what-do-list-item wow fadeInUp" data-wow-delay="0.4s">
                <div className="icon-box">
                  <Image src="/images/icon-what-we-do-3.svg" alt="Icon" width={50} height={50} />
                </div>
                <div className="what-do-item-content">
                  <h3>Awards & Recognition Program</h3>
                  <ul>
                    <li>Selecting Best Player of the Tournament through Technical Committee</li>
                    <li>Recognizing Highest Goal Scorer, Best Goalkeeper, and Best Young Player</li>
                    <li>Awarding Best Coach and Best Behaved Team</li>
                    <li>Presenting prize money to all participating teams</li>
                  </ul>
                </div>
              </div>
              <div className="what-do-list-item wow fadeInUp" data-wow-delay="0.6s">
                <div className="icon-box">
                  <Image src="/images/icon-what-we-do-1.svg" alt="Icon" width={50} height={50} />
                </div>
                <div className="what-do-item-content">
                  <h3>Discipline & Security Management</h3>
                  <ul>
                    <li>Handling disciplinary cases through dedicated Disciplinary Committee</li>
                    <li>Providing water-tight security at all match venues</li>
                    <li>Preventing crowd violence and pitch encroachment</li>
                    <li>Ensuring match officials&apos; safety before, during, and after matches</li>
                  </ul>
                </div>
              </div>
              <div className="what-do-list-item wow fadeInUp" data-wow-delay="0.8s">
                <div className="icon-box">
                  <Image src="/images/icon-what-we-do-2.svg" alt="Icon" width={50} height={50} />
                </div>
                <div className="what-do-item-content">
                  <h3>Venue & Infrastructure Management</h3>
                  <ul>
                    <li>Maintaining the football pitch at Boys&apos; Secondary School, Mgbowo</li>
                    <li>Ensuring proper field marking and goalpost net maintenance</li>
                    <li>Setting up canopies, chairs, and facilities for ceremonies</li>
                    <li>Managing match day logistics and equipment</li>
                  </ul>
                </div>
              </div>
              <div className="what-do-list-item wow fadeInUp" data-wow-delay="1.0s">
                <div className="icon-box">
                  <Image src="/images/icon-what-we-do-3.svg" alt="Icon" width={50} height={50} />
                </div>
                <div className="what-do-item-content">
                  <h3>Media Coverage & Publicity</h3>
                  <ul>
                    <li>Publicizing all M5 activities through social media and media outlets</li>
                    <li>Providing live streaming coverage of matches</li>
                    <li>Creating and managing social media platforms for M5</li>
                    <li>Projecting Mgbowo Community positively to the outside world</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}



