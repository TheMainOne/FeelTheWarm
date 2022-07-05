import styled from "styled-components";

export const Goods = styled.section`
  padding-top: 84px;
  padding-bottom: 84px;
  background: #f7f7f7;

  @media screen and (min-width: 768px) {
    padding-top: 100px;
    padding-bottom: 100px;
  }

  @media screen and (min-width: 1024px) {
    padding-top: 130px;
    padding-bottom: 130px;
  }
`;

export const AboutSectionThirdText = styled.p`
  margin-top: 20px;
  margin-bottom: 40px;
  font-size: 16px;
  line-height: 1.62;
  letter-spacing: 0.02em;
  color: #555555;

  @media screen and (min-width: 1024px) {
    font-size: 18px;
    line-height: 1.66;
  }
`;

export const GoodsWrapper = styled.li`
  transition: transform 250ms linear;
  ${
    "" /* 
  &:hover {
    transform: scale(1.01);
  } */
  }

  @media screen and (max-width: 767px) {
    &:not(:last-of-type) {
      margin-bottom: 64px;
    }
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    width: 450px;

    &:not(:last-of-type) {
      margin-bottom: 64px;
    }
  }

  @media screen and (min-width: 1024px) and (max-width: 1439px) {
    width: 290px;

    & img {
      height: 290px;
    }

    &:hover {
      transform: scale(1.05);
    }

    &:not(:last-of-type) {
      margin-bottom: 0px;
      margin-right: 22px;
    }
  }

  @media screen and (min-width: 1440px) {
    width: 320px;

    &:hover {
      transform: scale(1.05);
    }

    & img {
      height: 320px;
    }
  }
`;

export const GoodsList = styled.ul`
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media screen and (min-width: 1024px) {
    display: flex;
  }

  @media screen and (min-width: 1440px) {
    justify-content: space-between;
  }
`;

export const GoodsText = styled.p`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  font-size: 11px;
  line-height: 1.36;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #303030;

  &:before {
    content: "";
    display: inline-block;
    width: 60px;
    height: 1px;
    background-color: currentColor;
    margin-right: 20px;
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    margin-left: 118px;
  }
`;

export const GoodsTitle = styled.h3`
  margin-bottom: 33px;
  font-size: 42px;
  line-height: 1.16;
  font-weight: 700;
  letter-spacing: 0.05em;
  color: #303030;

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    margin-left: 118px;
  }
`;

export const GoodsThumb = styled.div`
  text-align: center;
  padding: 30px 82px 0 82px;
  cursor: pointer;
`;

export const GoodsItemTitle = styled.h4`
  margin-bottom: 8px;
  font-size: 18px;
  line-height: 1.38;
  letter-spacing: 0.02em;
  color: #303030;
`;

export const GoodsItemText = styled.p`
  margin-bottom: 30px;
  font-size: 14px;
  line-height: 1.35;
  letter-spacing: 0.02em;
  color: #ff6c00;
`;

export const GoodsItemSocialMediasList = styled.ul`
  display: flex;
  justify-content: center;
`;

export const GoodsItemSocialMediasListItem = styled.li`
  &:not(:last-of-type) {
    margin-right: 10px;
  }
`;

export const GoodsItemSocialMediasListLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #fff;
`;

export const GoodsButton = styled.a`
  display: block;
  color: #000000;
  margin: 0 auto;
  width: 160px;
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: center;
  border: 1px solid #ff6c00;
  background-color: transparent;
  border-radius: 25px;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.09em;
  text-transform: uppercase;
  cursor: pointer;

  &:hover,
  focus {
    color: #ffffff;
    background-color: #ff6c00;
  }
`;
