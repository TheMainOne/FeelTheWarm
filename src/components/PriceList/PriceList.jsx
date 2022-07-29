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
import { useTranslation } from 'react-i18next';

export const PriceList = () => {
  const { t } = useTranslation();

  return (
    <PriceListSection>
      <Container>
        <PriceListText>{t('PriceListTitle')}</PriceListText>
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
                {t('PriceListFirstItem')}
              </PriceItemText>
              <PriceItemUnderLine></PriceItemUnderLine>
              <PriceItemTextLarge
                href="https://drive.google.com/file/d/1uk3OKYVQcz7Y5uxX4BTcm1swpImM_JR6/view?usp=sharing"
                target="_blank"
                rel="noreferrer noopener"
                download={true}
              >
                {t('PriceListDownload')}
              </PriceItemTextLarge>
            </PriceItem>
            <PriceItem>
              <PriceItemText
                href="https://drive.google.com/file/d/1eECQAd5cDV_5Ruos3aJoyqKMbsGUS8Wy/view?usp=sharing"
                target="_blank"
                rel="noreferrer noopener"
                download={true}
              >
                {t('PriceListSecondItem')}
              </PriceItemText>
              <PriceItemUnderLine></PriceItemUnderLine>
              <PriceItemTextLarge
                href="https://drive.google.com/file/d/1eECQAd5cDV_5Ruos3aJoyqKMbsGUS8Wy/view?usp=sharing"
                target="_blank"
                rel="noreferrer noopener"
                download={true}
              >
               {t('PriceListDownload')}
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
                {t('PriceListThirdItem')}
              </PriceItemText>
              <PriceItemUnderLine></PriceItemUnderLine>
              <PriceItemTextLarge
                href="https://drive.google.com/file/d/10uwnYHcJmZ2QmqsZeoPD8I9u0hoBJtlz/view?usp=sharing"
                target="_blank"
                rel="noreferrer noopener"
                download={true}
              >
                {t('PriceListDownload')}
              </PriceItemTextLarge>
            </PriceItem>
          </ul>
        </PriceContainer>
        <PriceListButton href="https://t.me/FeelTheWarmCharity">
        {t('ContactUsButton')} 
        </PriceListButton>
      </Container>
    </PriceListSection>
  );
};
