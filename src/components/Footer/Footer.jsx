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
                  <FooterContactsListLink href="tel:+380970031414">
                    <LocalPhoneSharpIcon />
                    <FooterContactsListText>
                      +38 097 003 14 14
                    </FooterContactsListText>
                  </FooterContactsListLink>
                </FooterContactsListItem>
                <FooterContactsListItem>
                  <FooterContactsListLink href="mailto:Feel.the.warm.ua@gmail.com">
                    <EmailOutlinedIcon />
                    <FooterContactsListText>
                      Feel.the.warm.ua@gmail.com
                    </FooterContactsListText>
                  </FooterContactsListLink>
                </FooterContactsListItem>
              </FooterContactsList>
            </div>
          </div>
          <div>
            <FooterSecondTitle>Час работи</FooterSecondTitle>
            <FooterSecondText>Кожен день з 10:00 до 20:00</FooterSecondText>
          </div>
        </FooterWrapper>
      </Container>
    </FooterSection>
  );
};
