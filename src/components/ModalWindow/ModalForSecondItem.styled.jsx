import styled from "styled-components";

export const BoxStyled = styled.div`
  margin-left: 30px;
  margin-bottom: 64px;
`;

export const BoxWrapper = styled.div`
  @media screen and (min-width: 768px) {
    width: 350px;
  }
  @media screen and (min-width: 1024px) {
    width: 450px;
  }
`;

export const ModalList = styled.ul`
  margin-left: 30px;
  margin-bottom: 20px;
`;

export const ModalListItem = styled.li`
  &:not(:last-of-type) {
    margin-bottom: 24px;
  }
`;

export const ModalPhone = styled.a`
  margin-left: 30px;
  font-size: 18px;
  line-height: 1.38px;
  letter-spacing: 0.03em;
  color: #303030;
`;

export const ModalLinkButton = styled.a`
  display: block;
  margin: 0 auto;
  margin-top: 24px;
  margin-bottom: 24px;
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
  :focus {
    color: #fff;
    background-color: #ff6c00;
  }
`;
