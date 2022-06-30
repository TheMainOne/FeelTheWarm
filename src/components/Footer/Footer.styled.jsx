import styled from "styled-components";
import img from "../../images/contacts/footer.jpg";

export const FooterSection = styled.footer`
  padding-top: 84px;
  padding-bottom: 84px;
  background-image: linear-gradient(
      rgba(47, 48, 58, 0.9),
      rgba(47, 48, 58, 0.9)
    ),
    url(${img});
  background-position: center;
  background-color: #191c26;

  @media screen and (min-width: 768px) {
    padding-top: 100px;
    padding-bottom: 100px;
  }

  @media screen and (min-width: 1024px) {
    padding-top: 130px;
    padding-bottom: 130px;
  }
`;

export const FooterWrapper = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`;

export const FooterTitle = styled.h3`
  margin-bottom: 40px;
  font-size: 42px;
  line-height: 1.16;
  font-weight: 700;
  letter-spacing: 0.05em;
`;

export const FooterContactsList = styled.ul`
  margin-bottom: 44px;
`;

export const FooterContactsListItem = styled.li`
  &:not(:last-of-type) {
    margin-bottom: 20px;
  }
`;

export const FooterContactsListLink = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
  color: #9da4bd;
`;

export const FooterContactsListText = styled.p`
  margin-left: 16px;
`;

export const FooterSecondTitle = styled.p`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  font-size: 11px;
  line-height: 1.36;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;

  &:before {
    content: "";
    display: inline-block;
    width: 60px;
    height: 1px;
    background-color: rgba(157, 164, 189, 0.4);
    margin-right: 20px;
  }
`;

export const FooterSecondText = styled.p`
  font-size: 18px;
  line-height: 1.66;
  letter-spacing: 0.1em;
  color: #9da4bd;
`;
