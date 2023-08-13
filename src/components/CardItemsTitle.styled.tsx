import styled, {css} from "styled-components";

type CardItemsTitleStyledPropsType = {
    colorTitle?: string
    theme?: 'dark' | 'light'
}
export const CardItemsTitleStyled = styled.h1<CardItemsTitleStyledPropsType>`
  //color: #000;#ABB3BA
  font-family: ${'Inter'};
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding-left: 20px;
  padding-top: 15px;

  ${props => props.theme === 'dark' && css<CardItemsTitleStyledPropsType>`
    color: ${props => props.colorTitle || '#ABB3BA'}
  `}

  ${props => props.theme === 'light' && css<CardItemsTitleStyledPropsType>`
    color: ${props => props.colorTitle || '#000'}

  `}
`