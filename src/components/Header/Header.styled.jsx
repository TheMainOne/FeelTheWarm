import styled from "styled-components";
import img from "../../images/hero/img.jpg";

export const Header = styled.header`
  height: 580px;
  padding-top: 60px;
  padding-bottom: 60px;
  background-image: linear-gradient(
      rgba(208, 164, 137, 0.95),
      rgba(208, 164, 137, 0.95)
    ),
    url(${img});
  background-size: cover;
  background-position: center;

  @media screen and (min-width: 768px) {
    padding-top: 40px;
    padding-bottom: 40px;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  margin-bottom: 112px;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const NavigationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 136px;

  @media screen and (max-width: 767px) {
    display: none;
  }

  @media screen and (min-width: 1024px) {
    margin-bottom: 184px;
  }
`;

export const NavigationLargeList = styled.ul`
  display: flex;
`;

export const NavigationLargeListItem = styled.li`
  font-size: 12px;
  line-height: 1.33px;
  letter-spacing: 0.1em;
  color: #303030;
  cursor: pointer;

  @media screen and (min-width: 1024px) {
    font-size: 14px;
  }

  &:hover,
  :focus {
    color: #ffffff;
  }

  &:not(:last-of-type) {
    margin-right: 24px;
  }
`;

export const NavigationContactsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 1024px) {
    flex-direction: row-reverse;
    align-items: inherit;
  }
`;

export const NavigationContactsButton = styled.a`
  width: 160px;
  margin-bottom: 20px;
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: center;
  border: 1px solid #303030;
  background-color: transparent;
  border-radius: 25px;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.09em;
  color: #303030;
  cursor: pointer;

  @media screen and (min-width: 1024px) {
    margin-left: 40px;
    margin-bottom: 0px;
    font-size: 14px;
    padding-left: 5px;
    padding-right: 5px;
  }

  &:hover,
  :focus {
    color: #ffffff;
    border: 1px solid #ffffff;
  }
`;

export const NavigationContactsLink = styled.a`
  font-size: 12px;
  line-height: 1.33px;
  letter-spacing: 0.1em;
  color: #303030;

  @media screen and (min-width: 1024px) {
    font-size: 14px;
  }

  &:hover,
  :focus {
    color: #ffffff;
  }
`;

export const NavigationTitleInformation = styled.div`
  @media screen and (min-width: 768px) {
    width: 350px;
    margin: 0 auto;
  }

  @media screen and (min-width: 1024px) {
    width: 470px;
    margin-left: 100px;
  }
`;

export const HeaderTitle = styled.h1`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  font-size: 11px;
  font-weight: 600;
  line-height: 1.36;
  letter-spacing: 0.1em;
  color: #303030;

  @media screen and (min-width: 1024px) {
    font-size: 14px;
  }

  &:before {
    content: "";
    display: inline-block;
    width: 60px;
    height: 1px;
    background-color: currentColor;
    margin-right: 20px;
  }
`;

export const CompanyName = styled.p`
  margin-bottom: 20px;
  font-size: 48px;
  font-weight: 700;
  line-height: 1.16;
  letter-spacing: 0.05em;
  color: #303030;

  @media screen and (min-width: 1024px) {
    font-size: 72px;
    line-height: 1.18;
  }
`;

export const HeaderText = styled.p`
  margin-bottom: 20px;
  font-size: 16px;
  line-height: 1.62;
  letter-spacing: 0.02em;
  color: #303030;

  @media screen and (min-width: 1024px) {
    font-size: 18px;
    line-height: 1.66;
  }
`;