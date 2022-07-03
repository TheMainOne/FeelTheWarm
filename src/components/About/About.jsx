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
import img2 from "../../images/about_us/img.jpg";

export const AboutSection = () => {
  return (
    <AboutSectionStyled>
      <Container name="aboutUs">
        <AboutSectionWrapper>
          <AboutSectionImageList>
            <AboutSectionImageItem>
              <img src={img1} alt="cute_image" />
            </AboutSectionImageItem>
            <AboutSectionImageItem>
              <img src={img2} alt="cute_image" />
            </AboutSectionImageItem>
          </AboutSectionImageList>
          <div>
            <AboutSectionTitle>Хто ми</AboutSectionTitle>
            <AboutSectionText>
              Ми допомагаємо тим, хто цього потребує
            </AboutSectionText>
            <AboutSectionSecondText>
              Важливим аспектом діяльності фонду є співпраця з Міністерством
              охорони здоров’я України та іншими державними органами та органами
              місцевого самоврядування.
            </AboutSectionSecondText>
            <AboutSectionThirdText>
              У тісній співпраці з державними органами та органами місцевого
              самоврядування, «Благодійний фонд «Відчуй тепло» допомагає
              цивільному населенню, Збройним силам України та силам
              територіальної оборони громад у забезпеченні першочергових
              соціальних, медичних та інших нагальних потреб в умовах воєнного
              стану.
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
