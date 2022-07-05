import { Container } from "components/GlobalStyles";
import { Goods, GoodsText } from "./Goods.styled";
import {
  AboutSectionText,
  AboutSectionSecondText,
  AboutSectionThirdText,
  AboutSectionButton,
  AboutSectionWrapper,
} from "components/About/About.styled";

export const GoodsSection = () => {
  return (
    <Goods>
      <Container>
        <GoodsText>Як можна нам допомогти?</GoodsText>
        <AboutSectionWrapper>
          <div>
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
    </Goods>
  );
};
