import styled, {css} from "styled-components";


export const CardStyled = styled.div`
  color: #ABB3BA;
  font-size: 12px;
`
type CardItemsPropsType = {
    theme?: 'dark' | 'light'
}
export const CardItems = styled.div<CardItemsPropsType>`
  display: grid;
  grid-template-rows: auto 1fr 1fr 1fr;
  border-radius: 15px;
  //background: #FFF;
  //background: #131111;
  box-shadow: 0 4px 20px 5px rgba(0, 0, 0, 0.10);

  ${props => props.theme === 'dark' && css<CardItemsPropsType>`
    background: #131111;
  `}

  ${props => props.theme === 'light' && css<CardItemsPropsType>`
    background: #FFF;
  `}


`