import React from 'react'

const AboutMe = () => {
    return (
        <>
            <section className="about-me" id="about">
                <h1>ABOUT ME</h1>
                <div className="container">
                    <div className="about-me-container">
                        <div className="about-me-imga">
                            <img src="images/img2.png" alt="img..." className="about-me-img"/>
                        </div>
                        <div className="about-me-text">
                            <div className="abt">
                                Shaurya Agarwal
                            </div>
                            <div className="abt-about">
                                <br/>A third year under graduate pursuing my
                                B.E. degree in Computer Science and Engineering
                                from Sir MVIT College, Bengaluru.<br/>
                                <br/> I am very much interested in learning new
                                technologies and keen on participating in discussions 
                                analyzing product problems and their solutions and, 
                                thus, in building something better from current 
                                technologies available.<br/>
                                <br/>Some of the tools and framework that I have 
                                worked with to make websites and deploy them 
                                are listed below.
                            </div>
                            <div className="tool-icons">
                            <i class='fab fa-html5' style={{color: 'orange'}}/>
                            <i class='fab fa-css3' style={{color: 'blue'}}/>
                            <i class='fab fa-node' style={{color: 'green'}}/>
                            <i class='fab fa-js' style={{color: 'yellow'}}/>
                            <i class='fab fa-react' style={{color: 'aqua'}}/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutMe
