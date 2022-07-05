import styled from "styled-components";

export const ModalList = styled.ul`
  margin-left: 30px;
  margin-bottom: 64px;
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
  color: #000000;
  margin-top: 24px;
  margin-left: 30px;
  width: 160px;
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

  &:hover,
  :focus {
    color: #fff;
    background-color: rgba(208, 164, 137, 0.95);
  }
`;
