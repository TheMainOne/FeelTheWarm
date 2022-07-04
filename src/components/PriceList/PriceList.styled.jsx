import styled from "styled-components";
import img from "../../images/hero/img1.jpg";

export const PriceListSection = styled.section`
  padding-top: 84px;
  padding-bottom: 84px;
  background-image: linear-gradient(
      rgba(47, 48, 58, 0.5),
      rgba(47, 48, 58, 0.5)
    ),
    url(${img});
  background-size: cover;
  background-position: center;

  @media screen and (min-width: 768px) {
    padding-top: 100px;
    padding-bottom: 100px;
  }

  @media screen and (min-width: 1024px) {
    padding-top: 130px;
    padding-bottom: 130px;
  }
`;

export const PriceListText = styled.p`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  font-size: 11px;
  line-height: 1.36;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #ffffff;

  &:before {
    content: "";
    display: inline-block;
    width: 60px;
    height: 1px;
    background-color: currentColor;
    margin-right: 20px;
  }
`;

export const PriceListTitle = styled.h3`
  margin-bottom: 33px;
  font-size: 42px;
  line-height: 1.16;
  font-weight: 700;
  letter-spacing: 0.05em;
`;

export const PriceContainer = styled.div`
  padding: 30px;
  background: linear-gradient(180deg, #171a24 0%, rgba(23, 26, 36, 0.2) 100%);
  color: #9da4bd;
  margin-bottom: 50px;
`;

export const PriceItem = styled.li`
  display: flex;
  justify-content: space-between;

  &:not(:last-of-type) {
    margin-bottom: 20px;
  }
`;

export const PriceItemText = styled.a`
  font-size: 14px;
  line-height: 2.14;
  letter-spacing: 0.02em;
`;

export const PriceItemUnderLine = styled.span`
  border-bottom: 1px solid rgba(157, 164, 189, 0.12);
  flex-grow: 1;
  color: #9da4bd;
  margin-left: 3px;
  margin-right: 3px;
`;

export const PriceListButton = styled.a`
  display: block;
  margin-left: auto;
  margin-right: auto;
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
  color: #ffffff;
  cursor: pointer;

  &:hover,
  :focus {
    color: #fff;
    background-color: rgba(208, 164, 137, 0.95);
  }
`;
