import MenuIcon from "@mui/icons-material/Menu";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import { useState } from "react";
import { ModalWindow } from "components/ModalWindow/ModalWindow";
import { Container } from "components/GlobalStyles";
import { Link } from "react-scroll/modules";
import {
  Header,
  Navigation,
  HeaderTitle,
  CompanyName,
  NavigationWrapper,
  NavigationLargeList,
  NavigationLargeListItem,
  NavigationContactsWrapper,
  NavigationContactsButton,
  NavigationContactsLink,
  NavigationTitleInformation,
  HeaderText,
} from "./Header.styled";

export const SiteHeader = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Header>
        <Container>
          <Navigation>
            <StarBorderRoundedIcon
              fontSize="large"
              sx={{ color: "transparent" }}
            />
            <MenuIcon fontSize="large" onClick={handleOpen} />
          </Navigation>
          <NavigationWrapper>
            <nav>
              <NavigationLargeList>
                <NavigationLargeListItem>
                  <Link
                    activeClass="active"
                    to="aboutUs"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    Хто ми
                  </Link>
                </NavigationLargeListItem>
                <NavigationLargeListItem>
                  <Link
                    activeClass="active"
                    to="goods"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    Як допомогти
                  </Link>
                </NavigationLargeListItem>
                <NavigationLargeListItem>
                  <Link
                    activeClass="active"
                    to="footer"
                    spy={true}
                    smooth={true}
                    offset={-30}
                    duration={500}
                  >
                    Як нас знайти
                  </Link>
                </NavigationLargeListItem>
              </NavigationLargeList>
            </nav>
            <NavigationContactsWrapper>
              <NavigationContactsButton href="https://t.me/FeelTheWarmCharity">
                Написати нам
              </NavigationContactsButton>
              <NavigationContactsLink href="tel:+380970031414">
                +38 097 003 14 14
              </NavigationContactsLink>
            </NavigationContactsWrapper>
          </NavigationWrapper>
          <NavigationTitleInformation>
            <HeaderTitle>Благодійний фонд</HeaderTitle>
            <CompanyName>"Відчуй тепло"</CompanyName>
            <HeaderText>
              Об'єднання небайдужих людей,
              <br /> які поєднали свої зусилля <br />
              задля допомоги Україні
            </HeaderText>
          </NavigationTitleInformation>
          <ModalWindow open={open} handleClose={handleClose} />
        </Container>
      </Header>
    </>
  );
};
