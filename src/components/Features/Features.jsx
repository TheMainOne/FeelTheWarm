import { Container } from "components/GlobalStyles";
import {
  FeaturesSection,
  FeaturesText,
  FeaturesTitle,
  FeaturesSecondText,
  FeaturesList,
  FeaturesListItem,
  FeaturesListItemWrapper,
  FeaturesListItemText,
  FeaturesWrapper,
} from "./Features.styled";

export const Features = () => {
  return (
    <FeaturesSection>
      <Container>
        <FeaturesWrapper>
          <div>
            <FeaturesText>Найкращі постачальники</FeaturesText>
            <FeaturesTitle>Чому звертаються до нас?</FeaturesTitle>
            <FeaturesSecondText>
              Про нас говорять тільки найкраще. <br />
              Проте краще 1 раз побачити, ніж 10 разів почути.
            </FeaturesSecondText>
          </div>
          <FeaturesList>
            <FeaturesListItem>
              <FeaturesListItemWrapper>100</FeaturesListItemWrapper>
              <FeaturesListItemText>
                Задоволених клієнтів на день
              </FeaturesListItemText>
            </FeaturesListItem>
            <FeaturesListItem>
              <FeaturesListItemWrapper>15</FeaturesListItemWrapper>
              <FeaturesListItemText>
                Нагород за чудовий сервіс
              </FeaturesListItemText>
            </FeaturesListItem>
            <FeaturesListItem>
              <FeaturesListItemWrapper>10</FeaturesListItemWrapper>
              <FeaturesListItemText>Найкращих товарів</FeaturesListItemText>
            </FeaturesListItem>
            <FeaturesListItem>
              <FeaturesListItemWrapper>100</FeaturesListItemWrapper>
              <FeaturesListItemText>
                Подарунків постійним клієнтам
              </FeaturesListItemText>
            </FeaturesListItem>
          </FeaturesList>
        </FeaturesWrapper>
      </Container>
    </FeaturesSection>
  );
};
