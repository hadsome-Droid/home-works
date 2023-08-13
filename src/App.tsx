import React from 'react';
import './App.css';
import styled from "styled-components";
import {CardItemsImage} from "./img/Image.styled";
import Rectangle from "./Rectangle1.svg"
import {CardStyled, CardItems} from './components/Card.styled';
import {CardItemsTitleStyled} from "./components/CardItemsTitle.styled";
import {CardItemsTextStyled} from "./components/CardItemsText.styled";
import {CardItemsBtn, CardItemsWrapperBtn} from "./components/CardButton.styled";

function App() {
    return (<Wrapper>
            <CardStyled>
                Card
                <CardItems theme={"dark"}>
                    <CardItemsImage>
                        <img alt='#' src={Rectangle}/>
                    </CardItemsImage>
                    <CardItemsTitleStyled theme={"dark"}>Headline</CardItemsTitleStyled>
                    <CardItemsTextStyled>
                        Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut.
                        Sit molestie ornare in venen.
                    </CardItemsTextStyled>
                    <CardItemsWrapperBtn>
                        <CardItemsBtn btnType={"outlined"}>See more</CardItemsBtn>
                        <CardItemsBtn btnType={"outlined"}>Save</CardItemsBtn>
                    </CardItemsWrapperBtn>
                </CardItems>
            </CardStyled>
            <CardStyled>
                Card
                <CardItems theme={"light"}>
                    <CardItemsImage>
                        <img alt='#' src={Rectangle}/>
                    </CardItemsImage>
                    <CardItemsTitleStyled theme={"light"}>Headline</CardItemsTitleStyled>
                    <CardItemsTextStyled>
                        Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut.
                        Sit molestie ornare in venen.
                    </CardItemsTextStyled>
                    <CardItemsWrapperBtn>
                        <CardItemsBtn btnType={"primary"}>See more</CardItemsBtn>
                        <CardItemsBtn btnType={"outlined"}>Save</CardItemsBtn>
                    </CardItemsWrapperBtn>
                </CardItems>
            </CardStyled>
            <CardStyled>
                Card
                <CardItems theme={"dark"}>
                    <CardItemsImage>
                        <img alt='#' src={Rectangle}/>
                    </CardItemsImage>
                    <CardItemsTitleStyled theme={"dark"}>Headline</CardItemsTitleStyled>
                    <CardItemsTextStyled>
                        Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut.
                        Sit molestie ornare in venen.
                    </CardItemsTextStyled>
                    <CardItemsWrapperBtn>
                        <CardItemsBtn btnType={"outlined"} color={'purple'}>See more</CardItemsBtn>
                        <CardItemsBtn btnType={"primary"} color={'purple'}>Save</CardItemsBtn>
                    </CardItemsWrapperBtn>
                </CardItems>
            </CardStyled>
            <CardStyled>
                Card
                <CardItems theme={"light"}>
                    <CardItemsImage>
                        <img alt='#' src={Rectangle}/>
                    </CardItemsImage>
                    <CardItemsTitleStyled theme={"light"}>Headline</CardItemsTitleStyled>
                    <CardItemsTextStyled>
                        Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut.
                        Sit molestie ornare in venen.
                    </CardItemsTextStyled>
                    <CardItemsWrapperBtn>
                        <CardItemsBtn btnType={"primary"} color={'green'}>See more</CardItemsBtn>
                        <CardItemsBtn btnType={"outlined"} color={'green'}>Save</CardItemsBtn>
                    </CardItemsWrapperBtn>
                </CardItems>
            </CardStyled>
            <CardStyled>
                Card
                <CardItems theme={"dark"}>
                    <CardItemsImage>
                        <img alt='#' src={Rectangle}/>
                    </CardItemsImage>
                    <CardItemsTitleStyled theme={"dark"}>Headline</CardItemsTitleStyled>
                    <CardItemsTextStyled>
                        Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut.
                        Sit molestie ornare in venen.
                    </CardItemsTextStyled>
                    <CardItemsWrapperBtn>
                        <CardItemsBtn btnType={"primary"} color={'orange'}>See more</CardItemsBtn>
                        <CardItemsBtn btnType={"outlined"} color={'orange'}>Save</CardItemsBtn>
                    </CardItemsWrapperBtn>
                </CardItems>
            </CardStyled>
            <CardStyled>
                Card
                <CardItems theme={"light"}>
                    <CardItemsImage>
                        <img alt='#' src={Rectangle}/>
                    </CardItemsImage>
                    <CardItemsTitleStyled theme={"light"}>Headline</CardItemsTitleStyled>
                    <CardItemsTextStyled>
                        Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut.
                        Sit molestie ornare in venen.
                    </CardItemsTextStyled>
                    <CardItemsWrapperBtn>
                        <CardItemsBtn btnType={"outlined"} color={'red'}>See more</CardItemsBtn>
                        <CardItemsBtn btnType={"primary"} color={'red'}>Save</CardItemsBtn>
                    </CardItemsWrapperBtn>
                </CardItems>
            </CardStyled>

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