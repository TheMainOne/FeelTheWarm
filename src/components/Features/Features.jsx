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
            <FeaturesText>Цифри</FeaturesText>
            <FeaturesTitle>Чим ми допомагаємо?</FeaturesTitle>
            <FeaturesSecondText>
              Ми допомагаємо тим, хто цього найбільше потребує. <br />
              Кожен може долучитися і внести свій вклад в добробут країни
            </FeaturesSecondText>
          </div>
          <FeaturesList>
            <FeaturesListItem>
              <FeaturesListItemWrapper>100</FeaturesListItemWrapper>
              <FeaturesListItemText>
                тон переданих продуктів
              </FeaturesListItemText>
            </FeaturesListItem>
            <FeaturesListItem>
              <FeaturesListItemWrapper>15</FeaturesListItemWrapper>
              <FeaturesListItemText>тон переданих ліків</FeaturesListItemText>
            </FeaturesListItem>
            <FeaturesListItem>
              <FeaturesListItemWrapper>3</FeaturesListItemWrapper>
              <FeaturesListItemText>
                швидкі передано для лікарень
              </FeaturesListItemText>
            </FeaturesListItem>
            <FeaturesListItem>
              <FeaturesListItemWrapper>45</FeaturesListItemWrapper>
              <FeaturesListItemText>
                комплектів лікарського обладнання
              </FeaturesListItemText>
            </FeaturesListItem>
          </FeaturesList>
        </FeaturesWrapper>
      </Container>
    </FeaturesSection>
  );
};
