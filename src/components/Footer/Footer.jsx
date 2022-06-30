import { Container } from "components/GlobalStyles";
import {
  FooterSection,
  FooterTitle,
  FooterContactsList,
  FooterContactsListItem,
  FooterContactsListLink,
  FooterContactsListText,
  FooterSecondTitle,
  FooterSecondText,
  FooterWrapper,
} from "./Footer.styled";
// import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import LocalPhoneSharpIcon from "@mui/icons-material/LocalPhoneSharp";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

export const Footer = () => {
  return (
    <FooterSection>
      <Container>
        <FooterWrapper>
          <div>
            <FooterTitle name="footer">Контакти</FooterTitle>
            <div>
              <FooterContactsList>
                {/* <FooterContactsListItem>
                  <FooterContactsListLink
                    href="https://goo.gl/maps/EHh9YuX74odmkXjB8"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LocationOnOutlinedIcon />
                    <FooterContactsListText>
                      вул. Васильковська, 7А Київ, 08132
                    </FooterContactsListText>
                  </FooterContactsListLink>
                </FooterContactsListItem> */}
                <FooterContactsListItem>
                  <FooterContactsListLink href="tel:+380963441810">
                    <LocalPhoneSharpIcon />
                    <FooterContactsListText>
                      +38 096 344 18 10
                    </FooterContactsListText>
                  </FooterContactsListLink>
                </FooterContactsListItem>
                <FooterContactsListItem>
                  <FooterContactsListLink href="mailto:sales@lend-lease.com.ua">
                    <EmailOutlinedIcon />
                    <FooterContactsListText>
                      sales@lend-lease.com.ua
                    </FooterContactsListText>
                  </FooterContactsListLink>
                </FooterContactsListItem>
              </FooterContactsList>
            </div>
          </div>
          <div>
            <FooterSecondTitle>Час работи</FooterSecondTitle>
            <FooterSecondText>Кожен день з 9:00 до 22:00</FooterSecondText>
          </div>
        </FooterWrapper>
      </Container>
    </FooterSection>
  );
};
