import { styled } from "styled-components";

const HeaderSytled = styled.header`
  width: 100%;
  height: 56px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  background: linear-gradient(to top, lightgray, gray, lightgray);
  padding: 0 2rem;
 
`;
const HeaderLogoTitleStyled = styled.p`
  color: transparent;
  background-color: #b3a125;
  font-family: "PkTitle";
  font-size: 52px;
  text-shadow: 2px 2px 3px #ffde00;
  -webkit-text-stroke: 2px #3b4cca;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
`;

export {
  HeaderSytled,
  HeaderLogoTitleStyled
};
