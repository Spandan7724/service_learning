import React from 'react';
// Import the image from the images folder
import GetInvolvedImage from '../images/Screenshot 2024-07-08 192401.png';

function Sections() {
    return (
        <>
            <section id="about" className="about">
                <div className="container">
                    <h2>About Us</h2>
                    <div className="element">
                        <p>Climate Troopers Foundation is a Section 8 company committed to sustainable solutions for our
                            planet’s most pressing environmental challenges. Our holistic approach focuses on five critical
                            elements: <span className="highlight">water, waste, energy, biodiversity, and air quality</span>.
                            Together, we can create a balanced and sustainable world for future generations.</p>
                    </div>
                </div>
            </section>

            <section id="vision-mission" className="vision-mission">
                <div className="container">
                    <h2>Our Vision & Mission</h2>
                    <div className="element">
                        <div className="vision">
                            <h3>Vision</h3>
                            <p>A world where humanity and nature can coexist in harmony through sustainable practices and
                                environmental stewardship.</p>
                        </div>
                        <div className="mission">
                            <h3>Mission</h3>
                            <p>To drive impactful and sustainable social change by addressing key environmental issues through
                                innovative projects, strategic partnerships, and active community involvement.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="core-elements" className="core-elements">
                <div className="container">
                    <h2>Core Elements</h2>
                    <div className="elements">
                        <div className="element">
                            <i className="icon-water"></i>
                            <h3>Water</h3>
                            <p>Ensure access to clean water and promote conservation.</p>
                        </div>
                        <div className="element">
                            <i className="icon-waste"></i>
                            <h3>Waste</h3>
                            <p>Minimize environmental impact through effective waste management.</p>
                        </div>
                        <div className="element">
                            <i className="icon-energy"></i>
                            <h3>Energy</h3>
                            <p>Champion renewable energy and sustainable practices.</p>
                        </div>
                        <div className="element">
                            <i className="icon-biodiversity"></i>
                            <h3>Biodiversity</h3>
                            <p>Protect and conserve biodiversity and natural habitats.</p>
                        </div>
                        <div className="element">
                            <i className="icon-air"></i>
                            <h3>Air Quality</h3>
                            <p>Enhance air quality for healthier communities.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="projects" className="projects">
                <div className="container">
                    <h2>Our Projects</h2>
                    <div className="project-list">
                        <div className="project">
                            <h3>Water Conservation Campaigns</h3>
                            <p>Implement rainwater harvesting and educate communities on sustainable water use.</p>
                        </div>
                        <div className="project">
                            <h3>Waste Management Programs</h3>
                            <p>Promote recycling, composting, and waste reduction through community-driven initiatives.</p>
                        </div>
                        <div className="project">
                            <h3>Renewable Energy Projects</h3>
                            <p>Install solar panels and conduct workshops to promote the benefits of renewable energy.</p>
                        </div>
                        <div className="project">
                            <h3>Biodiversity Conservation</h3>
                            <p>Engage in reforestation, wildlife protection, and habitat restoration projects.</p>
                        </div>
                        <div className="project">
                            <h3>Air Quality Improvement</h3>
                            <p>Develop urban green spaces, promote clean transportation, and monitor air quality.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="get-involved" className="get-involved">
                <div className="container">
                    <h2>Get Involved</h2>
                    <div className="involvement-options">
                        <div className="option">
                            <h3>Volunteer</h3>
                            <p>Join our hands-on projects and be a part of the solution.</p>
                            <a href="#" className="btn-secondary">Learn More</a>
                        </div>
                        <div className="option">
                            <h3>Donate</h3>
                            <p>Support our mission financially or with resources to help expand our initiatives.</p>
                            <a href="#" className="btn-secondary">Learn More</a>
                        </div>
                        <div className="option">
                            <h3>Partner</h3>
                            <p>Collaborate with us on projects, campaigns, or events to enhance our collective impact.</p>
                            <a href="#" className="btn-secondary">Learn More</a>
                        </div>
                    </div>
                    <div className="get-involved-image-container">
                        <img src={GetInvolvedImage} alt="Get Involved Image" className="get-involved-image" />
                    </div>
                </div>
            </section>
        </>
    );
}

export default Sections;
