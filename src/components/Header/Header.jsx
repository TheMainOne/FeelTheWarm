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
                    Про нас
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
                    Товари
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
                    Контакты
                  </Link>
                </NavigationLargeListItem>
              </NavigationLargeList>
            </nav>
            <NavigationContactsWrapper>
              <NavigationContactsButton href="https://t.me/LendLease_Ukraine">
                Зв'язатися з нами
              </NavigationContactsButton>
              <NavigationContactsLink href="tel:+380963441810">
                +38 096 344 18 10
              </NavigationContactsLink>
            </NavigationContactsWrapper>
          </NavigationWrapper>
          <NavigationTitleInformation>
            <HeaderTitle>МАГАЗИН ДЛЯ СВОЇХ</HeaderTitle>
            <CompanyName>Ленд-ліз</CompanyName>
            <HeaderText>
              Ми допомогаємо нашим воїнам
              <br /> в підборі необхідного обладнання. <br />
              Швидко та якісно.
            </HeaderText>
          </NavigationTitleInformation>
          <ModalWindow open={open} handleClose={handleClose} />
        </Container>
      </Header>
    </>
  );
};
