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
import { useTranslation } from 'react-i18next';

export const Features = () => {
  const { t } = useTranslation();

  return (
    <FeaturesSection>
      <Container>
        <FeaturesWrapper>
          <div>
            <FeaturesText>{t('FeaturesTitle')}</FeaturesText>
            <FeaturesTitle>{t('FeaturesText')}</FeaturesTitle>
            <FeaturesSecondText>
             {t('FeaturesSecondText')}
            </FeaturesSecondText>
          </div>
          <FeaturesList>
            <FeaturesListItem>
              <FeaturesListItemWrapper>100</FeaturesListItemWrapper>
              <FeaturesListItemText>
                {t('FeaturesfirstItem')}
              </FeaturesListItemText>
            </FeaturesListItem>
            <FeaturesListItem>
              <FeaturesListItemWrapper>15</FeaturesListItemWrapper>
              <FeaturesListItemText>{t('FeaturesSecondItem')}</FeaturesListItemText>
            </FeaturesListItem>
            <FeaturesListItem>
              <FeaturesListItemWrapper>3</FeaturesListItemWrapper>
              <FeaturesListItemText>
                {t('FeaturesThirdItem')}
              </FeaturesListItemText>
            </FeaturesListItem>
            <FeaturesListItem>
              <FeaturesListItemWrapper>45</FeaturesListItemWrapper>
              <FeaturesListItemText>
                {t('FeaturesFourthItem')}
              </FeaturesListItemText>
            </FeaturesListItem>
          </FeaturesList>
        </FeaturesWrapper>
      </Container>
    </FeaturesSection>
  );
};
