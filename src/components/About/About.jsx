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
// import img2 from "../../images/about_us/img.jpg";

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
              {/* <img src={img2} alt="cute_image" /> */}
            </AboutSectionImageItem>
          </AboutSectionImageList>
          <div>
            <AboutSectionTitle>Хто ми</AboutSectionTitle>
            <AboutSectionText>
              Об'єднання людей, яке допомагає тим, хто цього потребує
            </AboutSectionText>
            <AboutSectionSecondText>
              Важливим аспектом діяльності нашого фонду є офіційна співпраця з
              Міністерством охорони здоров’я України та іншими державними
              органами та органами місцевого самоврядування.
            </AboutSectionSecondText>
            <AboutSectionThirdText>
              У тісній співпраці з вищевказаними органами, «Благодійний фонд
              «Відчуй тепло» допомагає цивільному населенню, Збройним силам
              України та силам територіальної оборони громад у забезпеченні
              першочергових соціальних, медичних та інших нагальних потреб в
              умовах воєнного стану.
            </AboutSectionThirdText>
            <AboutSectionButton href="https://t.me/FeelTheWarmCharity">
              Зв'язатися з нами
            </AboutSectionButton>
          </div>
        </AboutSectionWrapper>
      </Container>
    </AboutSectionStyled>
  );
};
