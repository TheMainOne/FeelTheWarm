import { Container } from "components/GlobalStyles";
import {
  PriceListSection,
  PriceListText,
  PriceListTitle,
  PriceContainer,
  PriceItem,
  PriceItemUnderLine,
  PriceItemText,
  PriceListButton,
} from "./PriceList.styled";

export const PriceList = () => {
  return (
    <PriceListSection>
      <Container>
        <PriceListText>Підбери найкраще спорядження</PriceListText>
        <PriceListTitle>Послуги та ціни</PriceListTitle>
        <PriceContainer>
          <ul>
            <PriceItem>
              <PriceItemText>Консультація спеціаліста</PriceItemText>
              <PriceItemUnderLine></PriceItemUnderLine>
              <PriceItemText>от 300 грн.</PriceItemText>
            </PriceItem>
            <PriceItem>
              <PriceItemText>Підбір спорядження</PriceItemText>
              <PriceItemUnderLine></PriceItemUnderLine>
              <PriceItemText>от 200 грн.</PriceItemText>
            </PriceItem>
            <PriceItem>
              {" "}
              <PriceItemText>Доставка замовлення</PriceItemText>
              <PriceItemUnderLine></PriceItemUnderLine>
              <PriceItemText>от 200 грн.</PriceItemText>
            </PriceItem>
            <PriceItem>
              {" "}
              <PriceItemText>Огляд екіпірування</PriceItemText>
              <PriceItemUnderLine></PriceItemUnderLine>
              <PriceItemText>от 200 грн.</PriceItemText>
            </PriceItem>
          </ul>
        </PriceContainer>
        <PriceListButton href="https://t.me/LendLease_Ukraine">
          Зв'язатися з нами
        </PriceListButton>
      </Container>
    </PriceListSection>
  );
};
