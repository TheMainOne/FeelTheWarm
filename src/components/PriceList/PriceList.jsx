import { Container } from "components/GlobalStyles";
import {
  PriceListSection,
  PriceListText,
  PriceItemTextLarge,
  PriceContainer,
  PriceItem,
  PriceItemUnderLine,
  PriceItemText,
  PriceListButton,
} from "./PriceList.styled";

export const PriceList = () => {
  return (
    <PriceListSection>
      <Container>
        <PriceListText>Співпраця з органами державної влади</PriceListText>
        {/* <PriceListTitle>
          Фонд у своїй діяльності співпрацює з різними державними інстанціями
        </PriceListTitle> */}
        <PriceContainer>
          <ul>
            <PriceItem>
              <PriceItemText
                href="https://drive.google.com/file/d/1uk3OKYVQcz7Y5uxX4BTcm1swpImM_JR6/view?usp=sharing"
                target="_blank"
                rel="noreferrer noopener"
                download={true}
              >
                лист Міністерства охорони здоров’я України щодо співпраці з
                фондом
              </PriceItemText>
              <PriceItemUnderLine></PriceItemUnderLine>
              <PriceItemTextLarge
                href="https://drive.google.com/file/d/1uk3OKYVQcz7Y5uxX4BTcm1swpImM_JR6/view?usp=sharing"
                target="_blank"
                rel="noreferrer noopener"
                download={true}
              >
                завантажити
              </PriceItemTextLarge>
            </PriceItem>
            <PriceItem>
              <PriceItemText
                href="https://drive.google.com/file/d/1eECQAd5cDV_5Ruos3aJoyqKMbsGUS8Wy/view?usp=sharing"
                target="_blank"
                rel="noreferrer noopener"
                download={true}
              >
                лист Департаменту житлово-комунальної інфраструктури виконавчого
                органу КМР (КМДА)
              </PriceItemText>
              <PriceItemUnderLine></PriceItemUnderLine>
              <PriceItemTextLarge
                href="https://drive.google.com/file/d/1eECQAd5cDV_5Ruos3aJoyqKMbsGUS8Wy/view?usp=sharing"
                target="_blank"
                rel="noreferrer noopener"
                download={true}
              >
                завантажити
              </PriceItemTextLarge>
            </PriceItem>
            <PriceItem>
              {" "}
              <PriceItemText
                href="https://drive.google.com/file/d/10uwnYHcJmZ2QmqsZeoPD8I9u0hoBJtlz/view?usp=sharing"
                target="_blank"
                rel="noreferrer noopener"
                download={true}
              >
                лист Бобровицької міської ради Чернігівської області
              </PriceItemText>
              <PriceItemUnderLine></PriceItemUnderLine>
              <PriceItemTextLarge
                href="https://drive.google.com/file/d/10uwnYHcJmZ2QmqsZeoPD8I9u0hoBJtlz/view?usp=sharing"
                target="_blank"
                rel="noreferrer noopener"
                download={true}
              >
                завантажити
              </PriceItemTextLarge>
            </PriceItem>
          </ul>
        </PriceContainer>
        <PriceListButton href="https://t.me/FeelTheWarmCharity">
          Зв'язатися з нами
        </PriceListButton>
      </Container>
    </PriceListSection>
  );
};
