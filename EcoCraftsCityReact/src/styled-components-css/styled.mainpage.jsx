import styled from 'styled-components/macro';
import DivPhoto from '../img/MainPagePhotos.svg';
import DivMasters from '../img/MainPagePeople.svg';
import { Link } from 'react-router-dom';
export const DivMainPageWrapSC = styled.div`
  display: grid;
  grid-template-rows: 800px 2400px auto auto auto;
  row-gap: 100px;
  //border: 2px solid red;
  height: fit-content;
  width: 100%;

  @media (max-width: 1000px) {
    grid-template-rows: 670px 1260px auto auto auto;
    row-gap: 50px;
  }
  @media (max-width: 768px) {
    grid-template-rows: 512px 960px auto auto auto;
    row-gap: 30px;
  }
  @media (max-width: 480px) {
    grid-template-rows: 320px 2400px auto auto auto;
    row-gap: 20px;
  }
  @media (max-width: 360px) {
    grid-template-rows: 240px 1800px auto auto auto;
    row-gap: 10px;
  }
`;
export const DivLogoBlockSC = styled.div`
  display: grid;
  grid-template-columns: 0px 100%;
  overflow: hidden;
  transition: 0.6s 0.7s;
  @media (max-width: 1000px) {
    grid-template-columns: 0px 100%;
    transition: 0s;
    border-radius: 32px;
  }
  @media (max-width: 768px) {
    grid-template-columns: 100%;
  }
`;
export const DivLogoTextBlockSC = styled.div`
//border: 1px solid blue;
  z-index: 1;
  width: 100%;
  background: #fafafa;
  box-shadow: 30px 0px 1500px 500px #fafafa;
  -moz-box-shadow:30px 0px 1500px 500px #fafafa;
-webkit-box-shadow:30px 0px 1500px 500px #fafafa;
  transition: 1s;
  @media (max-width: 1000px) {
    box-shadow: none;
    -moz-box-shadow:none;
    -webkit-box-shadow:none;
    transition: 1s;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
export const DivLogoTextBlockShowSC = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
  //border: 1PX solid Red;
  display: grid;
  justify-content: center;
  align-content: center;
  z-index: 1;
  width: 100%;
  height: 100%;
`;
export const DivInfoBlockSC = styled.div`
  //border:1px solid red;
  background: ${({ Color }) => (Color ? `${Color}` : 'none')};
  ${({ LeftTop }) => LeftTop && `border-top-left-radius: 32px;`};
  ${({ LeftBottom }) => LeftBottom && `border-bottom-left-radius: 32px;`};
  ${({ RightTop }) => RightTop && `border-top-right-radius: 32px;`};
  ${({ RightBottom }) => RightBottom && `border-bottom-right-radius: 32px;`};
  display: grid;
  grid-template-columns: 50% 50%;
  /* min-width: 480px; */
  @media (max-width: 480px) {
    grid-template-columns: 100%;
    ${({ LeftBottom }) => LeftBottom && `border-bottom-left-radius: 0px;`};
    ${({ RightBottom }) => RightBottom && `border-bottom-right-radius: 0px;`};
  }
`;
export const ImgInfoBlockLogoSC = styled.div`
  z-index: 0;
  background-image: ${({ Photo }) => Photo && `url(${Photo})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  ${({ RightTop }) => RightTop && `border-top-right-radius: 32px;`};
  ${({ RightBottom }) => RightBottom && `border-bottom-right-radius: 32px;`};
  width: 100%;
  height: 100%;
`;
export const ImgInfoBlockSC = styled.div`
  //border: 1px solid green;
  @media (max-width: 480px) {
    display: none;
  }
  z-index: 0;
  background-image: ${({ Photo }) => Photo && `url(${Photo})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  ${({ RightTop }) => RightTop && `border-top-right-radius: 32px;`};
  ${({ RightBottom }) => RightBottom && `border-bottom-right-radius: 32px;`};
  width: 100%;
  height: 100%;
`;
export const ImgInfoBlockShowSC = styled.div`
  @media (min-width: 481px) {
    display: none;
  }
  z-index: 0;
  background-image: ${({ Photo }) => Photo && `url(${Photo})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  ${({ RightTop }) => RightTop && `border-top-right-radius: 32px;`};
  ${({ RightBottom }) => RightBottom && `border-bottom-right-radius: 32px;`};
  ${({ LeftTop }) => LeftTop && `border-top-left-radius: 32px;`};
  ${({ LeftBottom }) => LeftBottom && `border-bottom-left-radius: 32px;`};
  width: 100%;
  height: 100%;
`;
export const PlayButton = styled.button`
  border-radius: 32px;
  z-index: 0;
  background: none;
  border: none;
  background-image: ${({ Photo }) => Photo && `url(${Photo})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 55px;
  height: 55px;
  align-self: center;
  cursor: pointer;
  @media (max-width: 1000px) {
    display: none;
  }
`;
export const ImgSocialIcons = styled(Link)`
  //border: 2px solid red;
  z-index: 0;
  background-image: ${({ Photo }) => Photo && `url(${Photo})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
  width: 85px;
  height: 85px;

  @media (max-width: 1000px) {
    width: 85px;
    height: 85px;
  }
  @media (max-width: 768px) {
    width: 75px;
    height: 75px;
  }
  @media (max-width: 480px) {
    width: 55px;
    height: 55px;
  }
  @media (max-width: 360px) {
    width: 45px;
    height: 45px;
  }
`;
export const ImgMastersBlockSC = styled.div`
  //border: 1px solid red;
  z-index: 0;
  background-image: ${({ Photo }) => Photo && `url(${Photo})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-size: 100%;
  width: 710px;
  height: 540px;
  justify-self: center;
  //align-self: end;
  @media (max-width: 1000px) {
    width: 677px;
    height: 515px;
  }
  @media (max-width: 768px) {
    width: 419px;
    height: 319px;
  }
  @media (max-width: 480px) {
    width: 356px;
    height: 270px;
  }
  @media (max-width: 360px) {
    width: 290px;
    height: 221px;
  }
`;
export const DivInfoTextBlockSC = styled.div`
  //border: 1px solid red;
  display: grid;
  grid-template-rows: auto auto;
  row-gap: 10px;
  justify-self: center;
  align-self: center;
  width: 470px;
  height: fit-content;
  
  @media (max-width: 1000px) {
    width: auto;
    margin-left: ${({ MarginL }) => MarginL && `${MarginL}`};
    margin-right: ${({ MarginR }) => MarginR && `${MarginR}`};
    text-align: ${({ Right }) => Right ? `right`:`left`};
  }
  @media (max-width: 480px) {
    width: auto;
    margin-left: ${({ MarginL }) => MarginL && `${MarginL}`};
    margin-right: ${({ MarginR }) => MarginR && `${MarginR}`};
    text-align: left;
  }
`;
export const DivTextBlockLogo = styled.div`
  z-index: 1;
  //border: 1px solid red;
  display: grid;
  grid-template-rows: auto auto auto;
  gap: 30px;
  width: 580px;
  height: fit-content;

  @media (max-width: 1000px) {
    margin-left: 20px;
  }
`;
export const DivTextBlockLogoShow = styled.div`
  z-index: 1;
  //border: 1px solid yellow;
  display: grid;
  grid-template-rows: auto auto auto;
  gap: 30px;
  width: auto;
  height: fit-content;
  text-align: center;
`;
export const DivPlug = styled.div`
  @media (max-width: 1000px) {
    display: none;
  }
`;
export const DivWrapTextLogoSC = styled.div`
  z-index: 1;
 // border: 1px solid yellow;
  display: grid;
  grid-template-columns: 15vw 580px;
  margin-top: 250px;
  width: auto;

  @media (max-width: 1000px) {
    grid-template-columns: 0px 580px;
    margin-top: 150px;
  }
`;
export const DivInfoWrapSC = styled.div`
  //border: 2px solid blue;
  display: grid;
  grid-template-rows: repeat(3, 800px);
  @media (max-width: 1000px) {
    grid-template-rows: repeat(3, 420px);
  }
  @media (max-width: 768px) {
    grid-template-rows: repeat(3, 320px);
  }
  @media (max-width: 480px) {
    grid-template-rows: repeat(6, 400px);
  }
  @media (max-width: 360px) {
    grid-template-rows: repeat(6, 300px);
  }
`;
export const DivMastersBlockSC = styled.div`
  //border: 2px solid blue;
  z-index: -1;
  display: grid;
  grid-template-rows: auto auto;
  gap: 5%;
  height: 780px;
  background: #fafafa;
  border-radius: 32px;
  /* width: 99vw; */
  align-content: end;

  @media (max-width: 1000px) {
    height: 743px;
  }
  @media (max-width: 768px) {
    height: 509px;
  }
  @media (max-width: 480px) {
    height: 400px;
  }
  @media (max-width: 360px) {
    height: 300px;
    min-width: 360px;
  }
`;
export const DivSocialsBlockSC = styled.div`
  //border: 2px solid blue;
  display: grid;
  grid-template-rows: auto auto;
  gap: 35px;
  height: 250px;
  background: none;
  width: 100%;
  align-content: center;
  margin-bottom: 200px;
  @media (max-width: 1000px) {
    //height: 250px;
  }
`;
export const DivSocialsIconsBlock = styled.div`
  //border: 2px solid blue;
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 75px;
  background: none;
  justify-content: center;
  align-content: center;
  @media (max-width: 1000px) {
    gap: 75px;
  }
  @media (max-width: 768px) {
    gap: 75px;
  }
  @media (max-width: 480px) {
    gap: 55px;
  }
  @media (max-width: 360px) {
    gap: 45px;
  }
`;
export const H1InfoTitleSC = styled.h1`
  pointer-events: none;
  //border: 2px solid blue;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 44px;
  /* Вторичный */
  color: #252525;
  @media (max-width: 1000px) {
    font-size: 24px;
    line-height: 29px;
  }
  @media (max-width: 768px) {
    font-size: 20px;
    line-height: 24px;
  }
  @media (max-width: 480px) {
    font-size: 20px;
    line-height: 24px;
  }
  @media (max-width: 360px) {
    font-size: 16px;
    line-height: 20px;
  }
`;
export const H1MasterTitleSC = styled.h1`
  //border: 2px solid blue;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 49px;
  /* identical to box height */
  text-align: center;
  justify-self: center;
  /* Вторичный */
  color: #252525;

  width: 580px;
  @media (max-width: 1000px) {
    font-size: 36px;
    line-height: 44px;
    width: 500px;
  }
  @media (max-width: 1000px) {
    font-size: 36px;
    line-height: 44px;
  }
  @media (max-width: 768px) {
    font-size: 34px;
    line-height: 44px;
    width: 470px;
  }
  @media (max-width: 480px) {
    font-size: 24px;
    line-height: 29px;
    width: 350px;
  }
  @media (max-width: 360px) {
    font-size: 18px;
    line-height: 22px;
  }
`;
export const H1SocialsTitleSC = styled.h1`
  //border: 2px solid blue;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 49px;
  /* identical to box height */
  text-align: center;
  /* Вторичный */
  color: #252525;
  /* identical to box height */
  text-align: center;
  justify-self: center;
  /* Вторичный */

  width: auto;
  @media (max-width: 1000px) {
    font-size: 40px;
    line-height: 49px;
  }
  @media (max-width: 768px) {
    font-size: 32px;
    line-height: 39px;
  }
  @media (max-width: 480px) {
    font-size: 20px;
    line-height: 24px;
  }
  @media (max-width: 360px) {
    font-size: 16px;
    line-height: 20px;
  }
`;
export const H1InfoTitleLogoSC = styled.h1`
  pointer-events: none;
  //border: 2px solid blue;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 96px;
  line-height: 117px;
  /* identical to box height */
  /* Вторичный */
  color: #252525;
  transition: 1s;
  @media (max-width: 1000px) {
    box-shadow: none;
    color: #ffffff;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
export const H1InfoTitleShowSC = styled.h1`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 64px;
  line-height: 78px;
  transition: 0s;
  pointer-events: none;
  //border: 2px solid blue;
  /* identical to box height */
  /* Вторичный */
  color: #ffffff;
  @media (max-width: 480px) {
    font-size: 40px;
    line-height: 49px;
    /* identical to box height */
    color: #ffffff;
  }
  @media (max-width: 360px) {
    font-size: 32px;
    line-height: 39px;
    /* identical to box height */
    color: #ffffff;
  }
`;
export const PInfoTextSC = styled.p`
  pointer-events: none;
  //border: 2px solid blue;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 300;
  font-size: 28px;
  line-height: 34px;
  /* Вторичный */
  color: #252525;

  @media (max-width: 1000px) {
    font-size: 20px;
    line-height: 24px;
  }
  @media (max-width: 768px) {
    font-size: 18px;
    line-height: 22px;
  }
  @media (max-width: 480px) {
    font-size: 18px;
    line-height: 22px;
  }
  @media (max-width: 360px) {
    font-size: 14px;
    line-height: 17px;
  }
`;
export const PInfoTextLogoSC = styled.p`
  pointer-events: none;
  //border: 2px solid blue;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 300;
  font-size: 32px;
  line-height: 39px;

  /* Вторичный */
  transition: 1s;
  color: #252525;

  @media (max-width: 1000px) {
    color: #ffffff;
  }
  @media (max-width: 768px) {
    font-size: 22px;
    line-height: 29px;
    transition: 0s;
    width: 500px;
  }
  @media (max-width: 480px) {
    font-size: 16px;
    line-height: 20px;
    width: 350px;
  }
  @media (max-width: 360px) {
    font-size: 12px;
    line-height: 15px;
    width: 300px;
  }
`;
export const DivTwoColumns = styled.p`
  width: 300px;
  display: grid;
  //border:1px solid red;
  gap: 25px;
  grid-template-columns: auto auto;
  align-content: center;
  @media (max-width: 1000px) {
    grid-template-columns: auto;
    width: auto;
  }
  @media (max-width: 768px) {
    justify-self: center;
  }
`;
export const ProductCardButtonSC = styled(Link)`
  /* Кнопка (первичная) */
  /* Auto layout */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  /* identical to box height */
  text-align: center;
  color: #ffffff;
  /* Акцент */
  text-decoration: none;
  background: #85cb33;
  border-radius: 20px;
  width: 230px;
  height: 60px;
  justify-self: start;
  border-radius: 20px;
  border: none;
  :hover {
    background-color: #76b42e;
  }
  @media (max-width: 768px) {
    width: 230px;
    height: 56px;
  }
  @media (max-width: 480px) {
    width: 209px;
    height: 50px;
    font-size: 14px;
    line-height: 17px;
  }
  @media (max-width: 360px) {
    width: 162px;
    height: 35px;
    font-size: 12px;
    line-height: 15px;
  }
`;
