import { Container } from "components/GlobalStyles";
import {
  AboutSectionStyled,
  AboutSectionTitle,
  AboutSectionText,
  AboutSectionSecondText,
  AboutSectionThirdText,
  AboutSectionButton,
  AboutSectionImageItem,
  AboutSectionImageList,
  AboutSectionWrapper,
} from "./About.styled";
import img1 from "../../images/about_us/img7.jpg";
import { useTranslation } from 'react-i18next';
// import img2 from "../../images/about_us/img.jpg";

export const AboutSection = () => {
  const { t } = useTranslation();

  return (
    <AboutSectionStyled>
      <Container name="aboutUs">
        <AboutSectionWrapper>
          <AboutSectionImageList>
            <AboutSectionImageItem>
              <img src={img1} alt="cute_image" />
            </AboutSectionImageItem>
            <AboutSectionImageItem>
              {/* <img src={img2} alt="cute_image" /> */}
            </AboutSectionImageItem>
          </AboutSectionImageList>
          <div>
            <AboutSectionTitle>{t('WhoWeAre')}</AboutSectionTitle>
            <AboutSectionText>
              {t('AboutTitle')}
            </AboutSectionText>
            <AboutSectionSecondText>
              {t('AboutText')}
            </AboutSectionSecondText>
            <AboutSectionThirdText>
              {t('AboutSecondText')}
            </AboutSectionThirdText>
            <AboutSectionButton href="https://t.me/FeelTheWarmCharity">
             {t('ContactUsButton')} 
            </AboutSectionButton>
          </div>
        </AboutSectionWrapper>
      </Container>
    </AboutSectionStyled>
  );
};
