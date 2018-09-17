import React from 'react';
import styled from 'styled-components';
import Smartly from '../../Pictures/smartly.png'
import FoodMeup from '../../Pictures/foodmeup.png'
import FruitSalad from '../../Pictures/fruitsalad.png'
import Redcastle from '../../Pictures/redcastle.png'


const MarketingExp = (props) => {

    let img = Smartly;
    switch (props.img) {
        case "foodmeup":
            img = FoodMeup;
            break
        case "smartly":
            img = Smartly;
            break
        case "fruitsalad":
            img = FruitSalad;
            break
        case "redcastle":
            img = Redcastle;
            break
        default:
            img = FoodMeup;
            break
    }

    return (
        <li>
            <Block>
                <Img src={img} alt={props.co} />
                <TextBlock>
                    <H1 >{props.pos}</H1>
                    <H2>{props.co}</H2>
                    <H3>{props.year}</H3>
                    <H4>{props.des}</H4>
                </TextBlock>
            </Block>
        </li>

    );
};

export default MarketingExp;

const Img = styled.img`
border-radius: 50%;
width: 100px;
height: 100px;
position: relative;
margin: 10px;
border: 2px solid #252934;
`
const TextBlock = styled.div`
display: block;
    margin-top: 1em;
    margin-bottom: 1em;
    border-bottom-right-radius: 50px;
    border-top-right-radius: 50px;
`

const H1 = styled.h1`
font-size: 1.3rem;
color: #D90770;
margin-bottom: 0.1rem;
-webkit-margin-before: 0em;
-webkit-margin-after: 0em;
margin-top: 0;
@media (max-width: 700px) {
    font-size: 1rem;
}

`
const H2 = styled.h2`
display: block;
-webkit-margin-before: 0;
-webkit-margin-after: 0;
font-size: 1em;
color: white;
font-weight: 500;
font-family: 'roboto';
@media (max-width: 700px) {
    font-size: 0.7rem;
}
`
const H3 = styled.h3`
font-size: 0.8em;
-webkit-margin-before: 0.1em;
-webkit-margin-after: 0.1em;
color: lightgray;
@media (max-width: 700px) {
    font-size: 0.6rem;
}
}
`
const H4 = styled.h4`
display: block;
-webkit-margin-before: 0.33em;
-webkit-margin-after: 1em;
color: white;
@media (max-width: 700px) {
    font-size: 0.8rem;
}
`
const Block = styled.div`
display: flex;
flex-flow: row;
align-items: center;

`