import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import ProfilPictLarge from "../../Pictures/ProfilPictLarge.jpg";
import { Exp } from '../../Components/MarketingExp/Exp'
import MarketingExp from '../../Components/MarketingExp/MarketingExp'

class MySelf extends Component {
    render() {


        return (
            <section>
                <Layout>
                    <Block1>
                        <Text>
                            <Title>ABOUT ME</Title>
                            <SubTitle>The last 5 years in early stage startups gave me a strong grasp on sales and digital marketing. During these experiences, I developed a passionate interest about the tech behind, and decided to learn to code </SubTitle>
                        </Text>
                        <ProfilPict src={ProfilPictLarge} alt="ProfilPict" />
                    </Block1>

                    <Block2>
                        <Title second>
                            WORK EXPERIENCES
                        </Title>
                        <Ul style={{ lisStyle: 'none' }}>
                            {Exp.map(exp => {
                                return (<MarketingExp
                                    co={exp[0]}
                                    pos={exp[1]}
                                    year={exp[2]}
                                    des={exp[3]}
                                    key={exp[0]}
                                    img={exp[4]}
                                />)

                            })}
                        </Ul>



                    </Block2>
                </Layout>
            </section>

        );
    }
}

export default MySelf;

const Ul = styled.ul`
list-style: none;
-webkit-padding-start: 0px;
`

const Layout = styled.div`
padding-top: 5rem;
padding-bottom: 5rem;
width: 100vw;
background: #585d69;
display: flex;
justify-content: center;
flex-flow: column;
align-items: center;
/* &:after{
    position: absolute;
    content: '';
    pointer-events: none;    
    top: 100%;
    background-image: -webkit-gradient(linear, 0 0, 300% 100%, color-stop(0.25, #3498db), color-stop(0.25, #2980b9));
    background-image: linear-gradient(135deg, #3498db 25%, transparent 25%), linear-gradient(225deg, #3498db 25%, transparent   25%);
    background-position: 50%;
    right: 0;
    left: 0;
    z-index: 10;
    display: block;
    height: 90px;
    background-size: 50px 100%;} */

`

const Block1 = styled.div`
display: flex;
justify-content: center;
flex-flow: row-reverse;
width: 80%;
margin-bottom: 4rem;
align-items: center;
    @media (max-width: 1050px){
        flex-flow: column-reverse;
    }
`
const Block2 = styled.div`
display: flex;
flex-flow: column;
width: 93%;
background-color: #252934;
border-radius: 50px;
align-items: center;

`

const ProfilPict = styled.img`    
border-radius: 50%;
display: inline-block;
height: 13rem;
vertical-align: middle;
width: 13rem;
align-self: center;
margin: 2rem;
border: 5px solid;
border-color: white;
animation: bounce-left .6s;


@keyframes bounce-left {
    0% {
    opacity: 0;
    transform: translateX(-100px);
    }

    60% {
    opacity: 1;
    transform: translateX(20px);
    }
    100% {
    transform: translateX(0);
    }
}
    
`

const Text = styled.div`
font-size: 1em;
display: block;
width: 31rem;
margin: 2rem;
@media (max-width: 700px) {
    width: 20rem;
}

animation: bounce-right .6s;

@keyframes bounce-right {
    0% {
    opacity: 0;
    transform: translateX(100px);
    }

    60% {
    opacity: 1;
    transform: translateX(-20px);
    }
    100% {
    transform: translateX(0);
    }
}
`

const Title = styled.div`
font-family : 'Roboto';
font-size: 5rem;
color: #D90770;
align-self: center;
z-index: 10;
${props => props.second && css`
font-size: 3rem;
color: white;
padding-bottom: 20px;
padding-top: 20px`}
    @media (max-width: 700px) {
        font-size: 3rem;
        text-align: center;
    }
`
const SubTitle = styled.div`
font-family : 'Roboto';
font-size: 1.1rem;
color: white;
align-self: center;
z-index: 10;
    @media (max-width: 700px) {
        font-size: 1rem;
    }
`
