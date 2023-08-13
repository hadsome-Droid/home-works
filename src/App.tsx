import React from 'react';
import './App.css';
import styled from "styled-components";
import {ItemsImage} from "./img/Image.styled";
import Rectangle from "./Rectangle1.svg"

function App() {
    return (<Wrapper>
            <Card>
                Card
                <Items>
                    <ItemsImage>
                        <img alt='#' src={Rectangle}/>
                    </ItemsImage>
                    <ItemsTitle>Headline</ItemsTitle>
                    <ItemsText>
                        Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut.
                        Sit molestie ornare in venen.
                    </ItemsText>
                    <ItemsWrapperBtn>
                        <ItemsBtn>See more</ItemsBtn>
                        <ItemsBtn>Save</ItemsBtn>
                    </ItemsWrapperBtn>
                </Items>
            </Card>
            <Card>
                Card
                <Items>
                    <ItemsImage>
                        <img alt='#' src={Rectangle}/>
                    </ItemsImage>
                    <ItemsTitle>Headline</ItemsTitle>
                    <ItemsText>
                        Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut.
                        Sit molestie ornare in venen.
                    </ItemsText>
                    <ItemsWrapperBtn>
                        <ItemsBtn>See more</ItemsBtn>
                        <ItemsBtn>Save</ItemsBtn>
                    </ItemsWrapperBtn>
                </Items>
            </Card> <Card>
            Card
            <Items>
                <ItemsImage>
                    <img alt='#' src={Rectangle}/>
                </ItemsImage>
                <ItemsTitle>Headline</ItemsTitle>
                <ItemsText>
                    Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut.
                    Sit molestie ornare in venen.
                </ItemsText>
                <ItemsWrapperBtn>
                    <ItemsBtn>See more</ItemsBtn>
                    <ItemsBtn>Save</ItemsBtn>
                </ItemsWrapperBtn>
            </Items>
        </Card> <Card>
            Card
            <Items>
                <ItemsImage>
                    <img alt='#' src={Rectangle}/>
                </ItemsImage>
                <ItemsTitle>Headline</ItemsTitle>
                <ItemsText>
                    Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut.
                    Sit molestie ornare in venen.
                </ItemsText>
                <ItemsWrapperBtn>
                    <ItemsBtn>See more</ItemsBtn>
                    <ItemsBtn>Save</ItemsBtn>
                </ItemsWrapperBtn>
            </Items>
        </Card> <Card>
            Card
            <Items>
                <ItemsImage>
                    <img alt='#' src={Rectangle}/>
                </ItemsImage>
                <ItemsTitle>Headline</ItemsTitle>
                <ItemsText>
                    Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut.
                    Sit molestie ornare in venen.
                </ItemsText>
                <ItemsWrapperBtn>
                    <ItemsBtn>See more</ItemsBtn>
                    <ItemsBtn>Save</ItemsBtn>
                </ItemsWrapperBtn>
            </Items>
        </Card> <Card>
            Card
            <Items>
                <ItemsImage>
                    <img alt='#' src={Rectangle}/>
                </ItemsImage>
                <ItemsTitle>Headline</ItemsTitle>
                <ItemsText>
                    Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut.
                    Sit molestie ornare in venen.
                </ItemsText>
                <ItemsWrapperBtn>
                    <ItemsBtn>See more</ItemsBtn>
                    <ItemsBtn>Save</ItemsBtn>
                </ItemsWrapperBtn>
            </Items>
        </Card>
        </Wrapper>
    )
}

export default App;
const Wrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(auto-fit, minmax(350px, 1fr));
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  padding: 30px 15% 0;
`
const Card = styled.div`
  color: #ABB3BA;
  font-size: 12px;
`

const Items = styled.div`
  display: grid;
  grid-template-rows: auto 1fr 1fr 1fr;
  border-radius: 15px;
  background: #FFF;
  box-shadow: 0 4px 20px 5px rgba(0, 0, 0, 0.10);
`
const ItemsTitle = styled.h1`
  color: #000;
  font-family: ${'Inter'};
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding-left: 20px;
  padding-top: 15px;
`
const ItemsText = styled.p`
  max-width: 260px;
  display: block;
  color: #ABB3BA;
  font-family: ${'Inter'};
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  padding-left: 20px;
`
const ItemsWrapperBtn = styled.div`
  display: grid;
  grid-template-columns: 90px 90px;
  column-gap: 12px;
  align-items: center;
  padding-left: 20px;
`

const ItemsBtn = styled.button`
  border: 0;
  width: 86px;
  height: 30px;
  border-radius: 5px;
  background: #4E71FE;
  color: #FFF;
  font-family: ${'Inter'};
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
`