import styled from "styled-components";

export const FeaturesSection = styled.section`
  padding-top: 84px;
  padding-bottom: 84px;
  background: #e5e5e5;

  @media screen and (min-width: 768px) {
    padding-top: 100px;
    padding-bottom: 100px;
  }

  @media screen and (min-width: 1024px) {
    padding-top: 130px;
    padding-bottom: 130px;
  }
`;

export const FeaturesText = styled.p`
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
`;

export const FeaturesTitle = styled.p`
  margin-bottom: 20px;
  font-size: 34px;
  line-height: 1.16;
  font-weight: 700;
  letter-spacing: 0.05em;
  color: #303030;
`;

export const FeaturesSecondText = styled.p`
  margin-bottom: 44px;
  font-size: 18px;
  line-height: 1.66;
  letter-spacing: 0.02em;
  color: #555555;
`;

export const FeaturesWrapper = styled.div`
  @media screen and (min-width: 1024px) {
    display: flex;
    flex-direction: row-reverse;
  }
`;

export const FeaturesList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  color: #303030;

  @media screen and (min-width: 1024px) {
    margin-right: 50px;
  }
`;

export const FeaturesListItem = styled.li`
  width: calc((100% - 2 * 70px) / 2);
  height: 133px;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 32px;
  padding-right: 32px;
  background-color: #f7f7f7;

  &: nth-child(2n) {
    margin-top: 30px;
  }

  @media screen and (min-width: 768px) {
    width: calc((100% - 2 * 95px) / 2);
    padding-bottom: 10px;
  }
`;

export const FeaturesListItemWrapper = styled.span`
  display: block;
  font-weight: bold;
  font-size: 42px;
  line-height: 57px;
  text-align: center;
  letter-spacing: 0.05em;

  &:after {
    content: "+";
    vertical-align: top;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    color: #ff6c00;
  }
`;

export const FeaturesListItemText = styled.p`
  text-align: center;
`;
