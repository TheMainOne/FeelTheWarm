import styled from "styled-components";
import img from "../../images/hero/img3.jpg";

export const Header = styled.header`
  height: 580px;
  padding-top: 60px;
  padding-bottom: 60px;
  background-image: linear-gradient(
      rgba(47, 48, 58, 0.8),
      rgba(47, 48, 58, 0.8)
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
  color: #ffffff;
  cursor: pointer;

  &:hover,
  focus {
    color: #ff6c00;
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
  border: 1px solid #ff6c00;
  background-color: transparent;
  border-radius: 25px;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.09em;
  color: #fff;
  cursor: pointer;

  @media screen and (min-width: 1024px) {
    margin-left: 40px;
    margin-bottom: 0px;
  }

  &:hover,
  :focus {
    background-color: #ff6c00;
  }
`;

export const NavigationContactsLink = styled.a`
  font-size: 12px;
  line-height: 1.33px;
  letter-spacing: 0.1em;

  &:hover,
  focus {
    color: #ff6c00;
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
  color: rgba(157, 164, 189, 0.6);

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

  @media screen and (min-width: 1024px) {
    font-size: 18px;
    line-height: 1.66;
  }
`;
