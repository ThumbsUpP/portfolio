import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import coinalert from '../../Pictures/coinAlert.png';
import faceApp from '../../Pictures/Serguei.png';
import ProfilPict from '../../Pictures/ProfilPict.jpg';

class Skills extends Component {
    render() {

        return (
            <Layout id="roadmap">
                <Title>MY ROADMAP</Title>
                <SubTitle>A one-year journey to master web development</SubTitle>
                <VerticalTimeline>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="July 2017"
                        iconStyle={{ background: '#ff5252', color: '#fff', display: 'flex', alignContent: 'center', justifyContent: 'center' }}
                        icon={<I scale={'scale(1.6)'} className="fas fa-bolt"></I>}
                    >
                        <h3 className="vertical-timeline-element-title">Resignation as CMO</h3>
                        <h4 className="vertical-timeline-element-subtitle">FoodTech Startup</h4>

                        <Messenger>
                            <Text>The stakes are real now !</Text>
                            <Miniature src={ProfilPict} alt="ProfilPict" />
                        </Messenger>
                    </VerticalTimelineElement>


                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="September 2017"
                        iconStyle={{ background: '#04C2C9', color: '#fff', display: 'flex', alignContent: 'center', justifyContent: 'center' }}
                        icon={<I scale={'scale(1.6)'} className="fas fa-graduation-cap"></I>}
                    >
                        <h3 className="vertical-timeline-element-title">Intro to computer Science</h3>
                        <h4 className="vertical-timeline-element-subtitle">Udacity.com</h4>
                        <Button target="_blank" without rel="noopener noreferrer" href="https://eu.udacity.com/course/intro-to-computer-science--cs101">Course link</Button>
                        <p>Build a Search Engine & a Social Network in Python</p>

                        <Messenger>
                            <Text>So this is how it all works ! Who knew ?</Text>
                            <Miniature src={ProfilPict} alt="ProfilPict" />
                        </Messenger>




                    </VerticalTimelineElement>


                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="October 2017"
                        iconStyle={{ background: '#04C2C9', color: '#fff', display: 'flex', alignContent: 'center', justifyContent: 'center' }}
                        icon={<I scale={'scale(1.6)'} className="fas fa-graduation-cap"></I>}
                    >
                        <h3 className="vertical-timeline-element-title">The complete Python developer course</h3>
                        <h4 className="vertical-timeline-element-subtitle">Udemy.com</h4>
                        <Button target="_blank" without rel="noopener noreferrer" href="https://www.udemy.com/python-for-complete-beginners-learn-step-by-step">Course link</Button>
                        <p>Python 3 complete course </p>
                        <Messenger>
                            <Text>I'm hooked now, I need to get better !</Text>
                            <Miniature src={ProfilPict} alt="ProfilPict" />
                        </Messenger>


                    </VerticalTimelineElement>


                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="October-ish 2017"
                        iconStyle={{ background: '#ff5252', color: '#fff', display: 'flex', alignContent: 'center', justifyContent: 'center' }}
                        icon={<I scale={'scale(1.6)'} className="fas fa-exclamation-triangle"></I>}
                    >
                        <h3 className="vertical-timeline-element-title">Intro to Machine Learning</h3>
                        <h4 className="vertical-timeline-element-subtitle">Udacity.com</h4>

                        <Button target="_blank" without rel="noopener noreferrer" href="https://eu.udacity.com/course/intro-to-machine-learning--ud120">Course link</Button>
                        <p>Pattern Recognition for Fun and Profit</p>
                        <Messenger>
                            <Text>Maybe a bit too ambitious... Let's switch to JS</Text>
                            <Miniature src={ProfilPict} alt="ProfilPict" />
                        </Messenger>

                    </VerticalTimelineElement>


                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="November 2017"
                        iconStyle={{ background: '#04C2C9', color: '#fff', display: 'flex', alignContent: 'center', justifyContent: 'center' }}
                        icon={<I scale={'scale(1.6)'} className="fas fa-graduation-cap"></I>}
                    >
                        <h3 className="vertical-timeline-element-title">JavaScript for beginners - A Complete Guide</h3>
                        <h4 className="vertical-timeline-element-subtitle">Udemy.com</h4>

                        <Button target="_blank" without rel="noopener noreferrer" href="https://www.udemy.com/javascript-a-complete-guide/">Course link</Button>
                        <Button target="_blank" without rel="noopener noreferrer" primary href="https://github.com/ThumbsUpP/Budgety.js">Project</Button>
                        <p>ES5 complete guide</p>

                        <Messenger>
                            <Text>That's more like it !<br /></Text>
                            <Miniature src={ProfilPict} alt="ProfilPict" />
                        </Messenger>


                    </VerticalTimelineElement>


                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="December 2017"
                        iconStyle={{ background: '#04C2C9', color: '#fff', display: 'flex', alignContent: 'center', justifyContent: 'center' }}
                        icon={<I scale={'scale(1.6)'} className="fas fa-graduation-cap"></I>}

                    >
                        <h3 className="vertical-timeline-element-title">The Complete Web Developer in 2018</h3>
                        <h4 className="vertical-timeline-element-subtitle">Udemy.com</h4>

                        <Button target="_blank" without rel="noopener noreferrer" href="https://www.udemy.com/the-complete-web-developer-in-2018">Course link</Button>
                        <Button target="_blank" without rel="noopener noreferrer" primary href="https://thumbsupp.github.io/FaceRecoFront/">Demo</Button>
                        <img style={{ width: "50%", display: 'block' }} src={faceApp} alt="faceApp" />
                        <p>35h of online course covering front and back-end</p>

                        <Messenger>
                            <Text>HTML5/CSS, React, Node.js, PostgerSQL, sounds good</Text>
                            <Miniature src={ProfilPict} alt="ProfilPict" />
                        </Messenger>



                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="January 2018"
                        iconStyle={{ background: '#04C2C9', color: '#fff', display: 'flex', alignContent: 'center', justifyContent: 'center' }}
                        icon={<I scale={'scale(1.6)'} className="fas fa-graduation-cap"></I>}

                    >
                        <h3 className="vertical-timeline-element-title">React 16 - The Complete Guide</h3>
                        <h4 className="vertical-timeline-element-subtitle">Udemy.com</h4>

                        <Button target="_blank" without rel="noopener noreferrer" href="https://www.udemy.com/react-the-complete-guide-incl-redux/">Course link</Button>
                        <Button target="_blank" without rel="noopener noreferrer" primary href="https://github.com/ThumbsUpP/Burger-Builder">GitHub</Button>
                        <p>40+ hours of online video with a great teacher</p>

                        <Messenger>
                            <Text>Redux, ReactRouting, Animations, NOW we're talking !</Text>
                            <Miniature src={ProfilPict} alt="ProfilPict" />
                        </Messenger><br />

                    </VerticalTimelineElement>


                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="Febuary 2018"
                        iconStyle={{ background: '#04C2C9', color: '#fff', display: 'flex', alignContent: 'center', justifyContent: 'center' }}
                        icon={<I scale={'scale(1.6)'} className="fab fa-bitcoin"></I>}

                    >
                        <h3 className="vertical-timeline-element-title">CoinsAlert</h3>
                        <h4 className="vertical-timeline-element-subtitle">Personal project</h4>
                        <Button target="_blank" without rel="noopener noreferrer" primary href="https://thumbsupp.github.io/coinalert/">Demo</Button>
                        <Button target="_blank" without rel="noopener noreferrer" href="https://github.com/ThumbsUpP/coinalert">GitHub</Button>
                        <a href="https://thumbsupp.github.io/coinalert/" style={{ display: 'inline-block' }} target="_blank" without rel="noopener noreferrer"><img style={{ width: "50%" }} src={coinalert} alt="CoinAlert" /></a><br />
                        <p>ReactJs App using material-ui.</p>


                        <Messenger>
                            <Text>Time to put my new knowledge to the test !</Text>
                            <Miniature src={ProfilPict} alt="ProfilPict" />
                        </Messenger>
                    </VerticalTimelineElement>


                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="March 2018"
                        iconStyle={{ background: '#04C2C9', color: '#fff', display: 'flex', alignContent: 'center', justifyContent: 'center' }}
                        icon={<I scale={'scale(1.6)'} className="fab fa-react"></I>}

                    >
                        <h3 className="vertical-timeline-element-title">Festies</h3>
                        <h4 className="vertical-timeline-element-subtitle">Freelance project</h4>
                        <Button target="_blank" without rel="noopener noreferrer" primary href="https://thumbsupp.github.io/festies-miniJeu/">Try One Game</Button>
                        <Button target="_blank" without rel="noopener noreferrer" href="https://github.com/ThumbsUpP/festies-miniJeu/">GitHub</Button>

                        <p>ReactJs landing page with mini-games</p>



                        <Messenger>
                            <Text>I know Animation now !</Text>
                            <Miniature src={ProfilPict} alt="ProfilPict" />
                        </Messenger>

                    </VerticalTimelineElement>


                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="May 2018 - July 2018"
                        iconStyle={{ background: '#04C2C9', color: '#fff', display: 'flex', alignContent: 'center', justifyContent: 'center' }}
                        icon={<I scale={'scale(1.6)'} className="fas fa-rocket"></I>}

                    >
                        <h3 className="vertical-timeline-element-title">Startup Prototyping</h3>
                        <h4 className="vertical-timeline-element-subtitle">Personal project</h4>
                        <p>Prototype App with ReactJs, Redux, Firebase Cloud Functions</p>

                        <Messenger>
                            <Text>What if there was an app that can change the way we...</Text>
                            <Miniature src={ProfilPict} alt="ProfilPict" />
                        </Messenger>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </Layout>
        );
    }
}

export default Skills;

const Button = styled.a`
border: 2px solid #fff;
box-sizing: inherit;
display: inline-block;
font-size: 13pt;
transition: all .5s;
cursor: pointer;
color: white;
background: #616161;
padding: 10px;
border-radius: 4px;
margin-top: 10px;
margin-bottom: 10px;
text-decoration: none;
&:hover {
    background: #04C2C9
}
${props => props.primary && css`
    background: #D90770;
    color: white;
  `}
`

const I = styled.i`
transform: scale(2);
align-items: center;
display: flex;
@media (max-width: 1050px) {
    transform: ${props => props.scale};
}`

const Miniature = styled.img`    
border-radius: 50%;
display: inline-block;
height: 15px;
margin-left: 3px;
vertical-align: middle;
width: 15px;
align-self: flex-end;`


const Text = styled.div`float: right;
background: #0084ff;
color: #fff;
display: inline-block;
clear: both;
padding: 8px;
margin: 20px 0px 20px 20px;
border-radius: 30px;
margin-bottom: 2px;
font-family: Helvetica, Arial, sans-serif;
font-size: 1em;`

const Messenger = styled.div`
float: right;
display: flex;
flex-flow: row;
margin-top: 1rem;
`


const Layout = styled.div`
padding-top: 85px;
padding-bottom: 69px;
width: 100vw;
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