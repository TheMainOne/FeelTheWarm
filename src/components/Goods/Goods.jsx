import { Container } from "components/GlobalStyles";
import { Goods, GoodsText } from "./Goods.styled";
import {
  AboutSectionSecondText,
  AboutSectionButton,
  AboutSectionWrapper,
} from "components/About/About.styled";
import { AboutSectionThirdText } from "./Goods.styled";

export const GoodsSection = () => {
  return (
    <Goods>
      <Container name="goods">
        <GoodsText>Як можна долучитися до допомоги?</GoodsText>
        <AboutSectionWrapper>
          <div>
            <AboutSectionSecondText>
              Кожен може долучитися до допомоги нашим військовим чи цивільному
              населенню шляхом перерахунку коштів на благодійний рахунок
              Благодійної організації «Благодійний фонд «Відчуй тепло» за
              наступними реквізитами: р/р (IBAN) UA793204780000026005924919779;
            </AboutSectionSecondText>
            <AboutSectionThirdText>
              Також ти можешь стати волонтером та допомагати фонду у його
              повсякденній діяльності разом з нашою чудовою командою патріотів.
            </AboutSectionThirdText>
            <AboutSectionButton href="https://t.me/FeelTheWarmCharity">
              Хочу допомогти
            </AboutSectionButton>
          </div>
        </AboutSectionWrapper>
      </Container>
    </Goods>
  );
};
