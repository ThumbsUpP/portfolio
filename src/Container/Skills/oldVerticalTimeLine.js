import React, { Component } from 'react';
import styled from 'styled-components';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './Skills.css';
import {roadmap} from './roadmap';

class Skills extends Component {
    render() {
       
        let roadmapItems = roadmap.map( el => 
            <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date={el[0]}
                        iconStyle={{ background: el[1], color: '#fff', display: 'flex', alignContent: 'center', justifyContent: 'center' }}
                        icon={<i className={el[2]}></i>}
                    >
                        <h3 className="vertical-timeline-element-title">{el[3]}</h3>
                        <h4 className="vertical-timeline-element-subtitle">{el[4]}</h4>
                        <p>{el[5]}</p>
                    </VerticalTimelineElement>
        )


        return (
            <Layout>
                <Title>MY ROADMAP</Title>
                <SubTitle>A one-year journey to master the code</SubTitle>
                <VerticalTimeline>
                {roadmapItems}
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