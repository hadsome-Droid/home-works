import styled, {css} from "styled-components";

type CardItemsWrapperBtnPropsType = {
    color?: string
    btnType?: 'primary' | 'outlined'
}
export const CardItemsWrapperBtn = styled.div`
  display: grid;
  grid-template-columns: 90px 90px;
  column-gap: 12px;
  align-items: center;
  padding-left: 20px;
`

export const CardItemsBtn = styled.button<CardItemsWrapperBtnPropsType>`
  border: 0;
  width: 86px;
  height: 30px;
  border-radius: 5px;
  font-family: ${'Inter'};
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;

  ${props => props.btnType === 'outlined' && css<CardItemsWrapperBtnPropsType>`
    border: 2px solid ${props => props.color || '#4E71FE'};
    color: ${props => props.color || '#4E71FE'};
    background-color: transparent;
  `}

  ${props => props.btnType === 'primary' && css<CardItemsWrapperBtnPropsType>`
    background-color: ${props => props.color || '#4E71FE'};
    color: #FFF;
  `}
`