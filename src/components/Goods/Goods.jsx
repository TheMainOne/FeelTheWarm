import { Container } from "components/GlobalStyles";
import { Goods, GoodsText } from "./Goods.styled";
import {
  AboutSectionSecondText,
  AboutSectionButton,
  AboutSectionWrapper,
} from "components/About/About.styled";
import { AboutSectionThirdText } from "./Goods.styled";
import { useTranslation } from 'react-i18next';

export const GoodsSection = () => {
  const { t } = useTranslation();

  return (
    <Goods>
      <Container name="goods">
        <GoodsText>{t('GoodsTitle')}</GoodsText>
        <AboutSectionWrapper>
          <div>
            <AboutSectionSecondText>
              {t('GoodsText')}
            </AboutSectionSecondText>
            <AboutSectionThirdText>
             {t('GoodsSecondText')}
            </AboutSectionThirdText>
            <AboutSectionButton href="https://t.me/FeelTheWarmCharity">
              {t('GoodsThirdText')}
            </AboutSectionButton>
          </div>
        </AboutSectionWrapper>
      </Container>
    </Goods>
  );
};
