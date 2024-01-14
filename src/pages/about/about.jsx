import React, { Component } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import missionimgabout from '../../assets/images/missionimgabout.jpg';
import img1 from '../../assets/images/img1.jpg';
import './about.css'; 
import { yourContent } from './constants';
import { Helmet } from 'react-helmet';
import partners from './partners';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visibleNamesCount: 200, // Initially display 200 names
      names: [], // Names will be fetched and stored here
    };
  }

  showMoreNames = () => {
    this.setState((prevState) => ({
      visibleNamesCount: prevState.visibleNamesCount + 20, // Load 20 more names
    }));
  }
  
  
  async componentDidMount() {
    const sheetID = process.env.REACT_APP_SHEET_ID;
    const sheetName = process.env.REACT_APP_SHEET_NAME;
    const url = `https://docs.google.com/spreadsheets/d/${sheetID}/gviz/tq?tqx=out:csv&sheet=${sheetName}`;
    const keywords = "education, community, empowerment, NGO, Heeds Foundation";
        const keywordsArray = keywords.split(', ');
        console.log(keywordsArray);
    const response = await fetch(url);
    const csvData = await response.text();
    const rows = csvData.split("\n");
    const names = rows.slice(1).map(row => {
        const columns = row.split(",");
        const name = columns[1]; // Assuming names are in the second column
        
        // Removing quotation marks if they exist
        return name.startsWith('"') && name.endsWith('"') ? name.slice(1, -1) : name;
    });

    this.setState({ names });
}
  render() {
    const { visibleNamesCount, names } = this.state;
    const visibleNames = names.slice(0, visibleNamesCount);

    const googleDriveEmbedLink = "https://drive.google.com/embeddedfolderview?id=1IWJDVxKTNzXn8NcKlyNfO7iqod3sq0ON#grid";
    return (
      <div className='about-container' data-keywords="education, community, empowerment, NGO, Heeds Foundation">
        <Helmet>
        <h1><title>About Us - Heeds Foundation</title></h1>
                    <meta name="description" content="Learn about our mission as the top NGO in Nagpur, focused on healthcare, education, and community development." />
                    <meta name="keywords" content="Nagpur NGO, Ngo in nagpur, Ngo in nagpur list, Top 10 ngo in nagpur, Top 10 ngo in nagpur for students, Kuch acha krte hai, Kuch acha kuch khas krte hai, Top 10 ngo in nagpur for internship, ngo in nagpur list, ngo in nagpur for job, how to join ngo in nagpur, nagpur ngo contact number, ngo in nagpur for internship, Top ngo in nagpur, ngo in nagpur list, Ngo in nagpur for students, ngo in nagpur for job, ngo in nagpur for internship, how to join ngo in nagpur, ngo in nagpur to volunteer, Ayush Namdap, Pratik Meshram, Shivam Sontakke, Gaurav Borghare, Kartik Bhandari, Bhavesh vaidya, Anish Jha" />
                    {/* You can add more meta tags as needed */}
                </Helmet>
        <div className='about-header'>ABOUT US</div>
        <ul className='about-nav'>
          <li>
            <ScrollLink
              to='section-mission'
              spy={true}
              smooth={true}
              offset={-60} // Adjust this value to align with your fixed main navbar
              duration={500}
              className='about-nav-btn'
            >
              Mission & Vision
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to='section-work'
              spy={true}
              smooth={true}
              offset={-60}
              duration={500}
              className='about-nav-btn'
            >
              Our Work
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to='section-principles'
              spy={true}
              smooth={true}
              offset={-60}
              duration={500}
              className='about-nav-btn'
            >
              Our Principles
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to='section-who'
              spy={true}
              smooth={true}
              offset={-60}
              duration={500}
              className='about-nav-btn'
            >
              Who We Are
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to='section-reports'
              spy={true}
              smooth={true}
              offset={-60}
              duration={500}
              className='about-nav-btn'
            >
              Reports
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to='section-partners'
              spy={true}
              smooth={true}
              offset={-60}
              duration={500}
              className='about-nav-btn'
            >
              Our Partners
            </ScrollLink>
          </li>
        </ul>
        
        {/* Content Sections */}
        <section id='section-mission' className='mission-section' data-keywords="education, community, empowerment, NGO, Heeds Foundation">
        <img className='mission-image' src={missionimgabout} alt='mission' />
        <div className='content-div'>
        <div className='content-mission'>
        <h2 className='mission-heading'>OUR MISSION</h2>
        <div class="line"></div>
        <p className='mission-details'>To uplift the society in the field of healthcare, education and development of society.</p>
        </div>
        <div className='content-vision'>
        <h2 className='vision-heading'>OUR VISION</h2>
        <div class="line"></div>
        <p className='vision-details'>To create a world where every individual, regardless of their background or circumstances, has the opportunity to access quality education, healthcare, and support for their overall development.</p>
        </div>
        </div>
        </section>
        
        <section id='section-work' className='work-section'>
      <div className='work-mission' data-keywords="education, community, empowerment, NGO, Heeds Foundation">
        <h3 className='work-heading'>OUR WORK</h3>
        <div class="line"></div>
        <p className='work-details'>Our organization is dedicated to empowering communities through education, improving healthcare access, fostering sustainability, providing humanitarian aid, raising awareness, and collaborating for lasting change. Volunteers play a vital role in our mission to make a positive impact on people's lives.</p>
      </div>
      <img className='work-image' src={img1} alt='Work' />
    </section>
        
        <section id='section-principles' className='principles-section'> 
          <h3 className='principles-heading'>OUR PRINCIPLES</h3>
          <div class="line"></div>
          <div className='principles-data'>
          {yourContent.map((item, index) => (
        <div className="principles-card" key={index}>
          <h3 className="principles-card-heading">{item.title}</h3>
          <p className="principles-card-details">{item.description}</p>
        </div>
      ))}
          </div>
        </section>
        
         <section id='section-who' className='who-section'>
          <h2 className='section-who-heading'>WHO WE ARE</h2>
        <h4 className='section-who-subheading1'>VOLUNTEERS</h4>
          <div class="line"></div>
          <div className='names-grid'>
            {visibleNames.map((name, index) => (
              <div key={index} className='name-item'>
                {name}
              </div>
            ))}
          </div>
          {visibleNamesCount < names.length && (
            <button className='readme' onClick={this.showMoreNames}>Read More</button>
          )}
        </section>
        
        <section id='section-reports' className='reports-section'>
          <h2 className='report-heading'>REPORTS</h2>
          <div class="line"></div>
          <iframe className='report-drive' frameborder="0" src={googleDriveEmbedLink} title="Google Drive Folder">
        </iframe>
        </section>
        <section id='section-partners' className='partners-section'>
          <h2 className='partner-heading'>PARTNERS</h2>
          <div class="line"></div>
          <div className='partners-class'>
        {partners.map((partner, index) => (
          <div key={index} className='partners-classes'>
            <img src={partner.photoUrl} alt={`${partner.name}'`} />
            <h3 className='member-name'>{partner.name}</h3>
            <p className='member-designation'>{partner.designation}</p>
          </div>
        ))}
      </div>
      
        </section>
      </div>
    );
  }
}

export default About;
