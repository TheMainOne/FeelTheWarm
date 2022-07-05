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
                Тон переданих продуктів
              </FeaturesListItemText>
            </FeaturesListItem>
            <FeaturesListItem>
              <FeaturesListItemWrapper>15</FeaturesListItemWrapper>
              <FeaturesListItemText>Тон переданих ліків</FeaturesListItemText>
            </FeaturesListItem>
            <FeaturesListItem>
              <FeaturesListItemWrapper>2</FeaturesListItemWrapper>
              <FeaturesListItemText>
                автомобілі для військових
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
