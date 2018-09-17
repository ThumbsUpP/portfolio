import React from 'react';
import styled from 'styled-components';
import InterpolSVG from '../../Components/InterpolSVG/InterpolSVG';

const Home = () => {
        return (
            <Layout>
                <InterpolSVG />
                <Title>PIERRE CAYOL</Title>
                <SubTitle>from marketer to web developer</SubTitle>
                <IconContainer href="#roadmap">
                    <IconStyled className="fas fa-chevron-circle-down"></IconStyled>
                </IconContainer>
                
                <LineBox>
                    <Line topMin = {'-5em'} top={'-15em'}/>
                    <Line topMin = {'-2em'} top={'-9em'}/>
                    <Line topMin = {'1em'} top={'-3em'}/>
                    <Line topMin = {'4em'} top={'3em'}/>
                    <Line topMin = {'7em'} top={'9em'}/>
                    <Line topMin = {'10em'} top={'15em'}/>
                    <Line topMin = {'13em'} top={'21em'}/>
                    <Line topMin = {'16em'} top={'27em'}/>
                    <Line topMin = {'19em'} top={'33em'}/>
                    <Line topMin = {'22em'} top={'39em'}/>
                    <Line topMin = {'25em'} top={'45em'}/>
                    <Line topMin = {'28em'} top={'51em'}/>
                    <Line topMin = {'32em'} top={'57em'}/>
                    <Line topMin = {'35em'} top={'63em'}/>
                </LineBox>
            </Layout>
        );
    }

export default Home;

const IconContainer = styled.a`
align-self: center;
position: absolute;
bottom: 2rem;`


const IconStyled = styled.i`
color: #39393c;
transform: scale(2.5);

animation-duration: 2s;
animation-name: colorSchift;
animation-iteration-count: infinite;
animation-direction: alternate;
  @keyframes colorSchift {
    from {
    }
    to {
        color: #616161;
    }
  }`

const Line = styled.div`
width: 100%;
height: 1px;
background: #39393c;
position: absolute;
top: ${props=> props.top};
margin-top: 0em;
transform: rotate(-30deg);
z-index: 1;
@media (max-width: 700px) {
    top: ${props=> props.topMin};
}
animation-duration: 3s;
animation-name: slidein;
animation-iteration-count: infinite;
animation-direction: alternate;
  @keyframes slidein {
    from {
    }
    to {
        margin-top: 3em;
    }
  }
`
const Layout = styled.div`
height: 100vh;
width: 100vw;
background : #252934;
display: flex;
justify-content: center;
align-content: center;
flex-flow: column;
`

const Title = styled.div`
font-family : 'Roboto';
font-size: 5rem;
color: white;
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
color: #D90770;
text-align: center;
align-self: center;
z-index: 10;
    @media (max-width: 700px) {
        font-size: 1.5rem;
    }
`
const LineBox = styled.div`
width: 80vw;
height: 80vh;
align-self: center;
justify-self: center;
position: Absolute;
flex-flow: column wrap;
overflow: hidden;
`