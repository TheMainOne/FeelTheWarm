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
import img1 from "../../images/about_us/img1.jpg";
import img2 from "../../images/about_us/img2.jpg";

export const AboutSection = () => {
  return (
    <AboutSectionStyled>
      <Container name="aboutUs">
        <AboutSectionWrapper>
          <AboutSectionImageList>
            <AboutSectionImageItem>
              <img src={img1} alt="Barber" />
            </AboutSectionImageItem>
            <AboutSectionImageItem>
              <img src={img2} alt="Barber" />
            </AboutSectionImageItem>
          </AboutSectionImageList>
          <div>
            <AboutSectionTitle>Про нас</AboutSectionTitle>
            <AboutSectionText>Найкращі військові аксесуари</AboutSectionText>
            <AboutSectionSecondText>
              Якщо ви бажаєтє купити військові товари належної якості - тоді вам
              точно до нас.
            </AboutSectionSecondText>
            <AboutSectionThirdText>
              Ми команда, яка не бажає йти на копроміси у підборі військового
              спорядження та завжди шукає найкращі варіанти з усіх можливих. Ми
              "на одній хвилі"" з нашими клієнтами. Тому, ми завжди готові
              удосконалити спорядження кожного, хто до нас завітає!
            </AboutSectionThirdText>
            <AboutSectionButton href="https://t.me/LendLease_Ukraine">
              Зв'язатися з нами
            </AboutSectionButton>
          </div>
        </AboutSectionWrapper>
      </Container>
    </AboutSectionStyled>
  );
};
