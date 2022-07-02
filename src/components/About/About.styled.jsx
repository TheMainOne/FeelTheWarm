import styled from "styled-components";

export const AboutSectionStyled = styled.section`
  padding-top: 84px;
  padding-bottom: 84px;

  @media screen and (min-width: 768px) {
    padding-top: 100px;
    padding-bottom: 100px;
  }

  @media screen and (min-width: 1024px) {
    padding-top: 130px;
    padding-bottom: 130px;
  }
`;

export const AboutSectionWrapper = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

export const AboutSectionTitle = styled.h2`
  display: flex;
  align-items: center;
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
`;

export const AboutSectionText = styled.p`
  margin-top: 20px;
  font-size: 28px;
  font-weight: 700;
  line-height: 1.17;
  letter-spacing: 0.05em;
  color: #303030;

  @media screen and (min-width: 1024px) {
    font-size: 42px;
    line-height: 1.16;
  }
`;

export const AboutSectionSecondText = styled.p`
  margin-top: 20px;
  font-size: 16px;
  line-height: 1.62;
  letter-spacing: 0.02em;
  color: #555555;

  @media screen and (min-width: 1024px) {
    font-size: 18px;
    line-height: 1.66;
  }
`;

export const AboutSectionThirdText = styled.p`
  margin-top: 20px;
  margin-bottom: 40px;
  font-size: 14px;
  line-height: 1.85;
  letter-spacing: 0.02em;
  color: #555555;
`;

export const AboutSectionButton = styled.a`
  width: 160px;
  color: #000000;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 10px;
  padding-right: 10px;
  text-align: center;
  border: 1px solid rgba(208, 164, 137, 0.95);
  background-color: transparent;
  border-radius: 25px;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.09em;
  text-transform: uppercase;
  cursor: pointer;

  &:hover,
  :focus {
    color: #fff;
    background-color: rgba(208, 164, 137, 0.95);
  }
`;

export const AboutSectionImageList = styled.ul`
  margin-right: 30px;

  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export const AboutSectionImageItem = styled.li`
  width: 330px;
  height: 235px;

  &:not(:last-of-type) {
    margin-bottom: 30px;
  }
`;
