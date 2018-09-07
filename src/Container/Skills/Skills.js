import React, { Component } from 'react';
import styled from 'styled-components';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './Skills.css';
import coinalert from '../../Pictures/coinAlert.png';
import faceApp from '../../Pictures/Serguei.png';

class Skills extends Component {
    render() {



        return (
            <Layout>
                <Title>MY ROADMAP</Title>
                <SubTitle>A one-year journey to master web development</SubTitle>
                <VerticalTimeline>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="July 2017"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', display: 'flex', alignContent: 'center', justifyContent: 'center' }}
                        icon={<i className="fas fa-bolt IconCustom "></i>}
                    >
                        <h3 className="vertical-timeline-element-title">Resignation as CMO</h3>
                        <h4 className="vertical-timeline-element-subtitle">FoodTech Startup</h4>
                        <p>"The stakes are real now !"</p>
                    </VerticalTimelineElement>


                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="September 2017"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', display: 'flex', alignContent: 'center', justifyContent: 'center' }}
                        icon={<i className="far fa-eye IconCustom "></i>}
                    >
                        <h3 className="vertical-timeline-element-title">Intro to computer Science</h3>
                        <h4 className="vertical-timeline-element-subtitle">Udacity.com</h4>
                        <p>"So this is how it all works ! Who knew ? "<br />
                            <a href="https://eu.udacity.com/course/intro-to-computer-science--cs101">Course link</a>
                        </p>



                    </VerticalTimelineElement>


                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="October 2017"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', display: 'flex', alignContent: 'center', justifyContent: 'center' }}
                        icon={<i className="fab fa-python IconCustom "></i>}
                    >
                        <h3 className="vertical-timeline-element-title">The complete Python developer course</h3>
                        <h4 className="vertical-timeline-element-subtitle">Udemy.com</h4>
                        <p>"Ok, I can do this !"<br />
                            <a href="https://www.udemy.com/python-for-complete-beginners-learn-step-by-step/">Course link</a>
                        </p>
                    </VerticalTimelineElement>


                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="October-ish 2017"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', display: 'flex', alignContent: 'center', justifyContent: 'center' }}
                        icon={<i className="fas fa-server IconCustom "></i>}
                    >
                        <h3 className="vertical-timeline-element-title">Intro to Machine Learning</h3>
                        <h4 className="vertical-timeline-element-subtitle">Udacity.com</h4>
                        <p>"Good lord, it's going to take me years to be good at this... Let's switch to JS"<br />
                            <a href="https://eu.udacity.com/course/intro-to-machine-learning--ud120">Course link</a>
                        </p>
                    </VerticalTimelineElement>


                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="November 2017"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', display: 'flex', alignContent: 'center', justifyContent: 'center' }}
                        icon={<i className="fab fa-js-square IconCustom "></i>}
                    >
                        <h3 className="vertical-timeline-element-title">JavaScript for beginners - A Complete Guide</h3>
                        <h4 className="vertical-timeline-element-subtitle">Udemy.com</h4>
                        <p>
                            "That's more like it !"<br />
                            <a href="https://www.udemy.com/javascript-a-complete-guide/">Course link</a><br/>
                            <a href="https://github.com/ThumbsUpP/Budgety.js">Project</a>
                        </p>
                    </VerticalTimelineElement>


                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="December 2017"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', display: 'flex', alignContent: 'center', justifyContent: 'center' }}
                        icon={<i className="fab fa-html5 IconCustom "></i>}

                    >
                        <h3 className="vertical-timeline-element-title">The Complete Web Developer in 2018</h3>
                        <h4 className="vertical-timeline-element-subtitle">Udemy.com</h4>
                        <p>
                            "HTML5, CSS, Javascript, React & Node.js, sounds good"<br />
                            <a href="https://www.udemy.com/the-complete-web-developer-in-2018/">Course link</a><br />
                            <a href="https://thumbsupp.github.io/FaceRecoFront/">Demo</a><br />
                            <a href="https://thumbsupp.github.io/coinalert/" target="_blank" without rel="noopener noreferrer"><img style={{width: "50%"}} src={faceApp} alt="faceApp" /></a> 

                    </p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="January 2018"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', display: 'flex', alignContent: 'center', justifyContent: 'center' }}
                        icon={<i className="fab fa-react IconCustom "></i>}

                    >
                        <h3 className="vertical-timeline-element-title">React 16 - The Complete Guide</h3>
                        <h4 className="vertical-timeline-element-subtitle">Udemy.com</h4>
                        <p>
                            "Reactjs, Redux, React Routing, Animations, now we're talking !"<br />
                            <a href="https://www.udemy.com/react-the-complete-guide-incl-redux/">Course link</a><br />


                            project : link
                    </p>
                    </VerticalTimelineElement>


                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="Febuary 2018"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', display: 'flex', alignContent: 'center', justifyContent: 'center' }}
                        icon={<i className="fab fa-bitcoin IconCustom "></i>}

                    >
                        <h3 className="vertical-timeline-element-title">CoinsAlert</h3>
                        <h4 className="vertical-timeline-element-subtitle">Personal project</h4>
                        <p>
                            "Time to put to the test my new knowledge !"
                        <br/>
                         </p>
                         <a href="https://thumbsupp.github.io/coinalert/" target="_blank" without rel="noopener noreferrer"><img style={{width: "50%"}} src={coinalert} alt="CoinAlert" /></a><br /> 
                         <a href="https://thumbsupp.github.io/coinalert/">Demo</a><br /> 
                         <a href="https://github.com/ThumbsUpP/coinalert">Git</a>
                    </VerticalTimelineElement>


                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="March 2018"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', display: 'flex', alignContent: 'center', justifyContent: 'center' }}
                        icon={<i className="fab fa-react IconCustom "></i>}

                    >
                        <h3 className="vertical-timeline-element-title">Festies</h3>
                        <h4 className="vertical-timeline-element-subtitle">Freelance project</h4>
                        <p>
                            "Sorry Pierre, the project is canceled... %$@*£$ !!"

                            Photo + link
                    </p>
                    </VerticalTimelineElement>


                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="May 2018 - July 2018"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', display: 'flex', alignContent: 'center', justifyContent: 'center' }}
                        icon={<i className="fas fa-rocket IconCustom "></i>}

                    >
                        <h3 className="vertical-timeline-element-title">Startup Prototyping</h3>
                        <h4 className="vertical-timeline-element-subtitle">Personal project</h4>
                        <p>
                            "What if there was an app that can change the way we \...insert random idea ...\"

                            ReactJs, Redux, Firebase Cloud Functions,

                            Photo + link
                    </p>
                    </VerticalTimelineElement>
                </VerticalTimeline>

            </Layout>
        );
    }
}

export default Skills;

const Layout = styled.div`
padding-top: 85px;
padding-bottom: 69px;
width: 98vw;
background : #ecf0fb;
display: flex;
justify-content: center;
align-content: center;
flex-flow: column;
`

const Title = styled.div`
font-family : 'Roboto';
font-size: 5rem;
color: #D90770;
text-align: center;
align-self: center;
z-index: 10;
    @media (max-width: 700px) {
        font-size: 3rem
    }
`
const SubTitle = styled.div`
font-family : 'Roboto';
font-size: 2.5rem;
color: #252934
text-align: center;
align-self: center;
z-index: 10;
    @media (max-width: 700px) {
        font-size: 1.5rem;
    }
`