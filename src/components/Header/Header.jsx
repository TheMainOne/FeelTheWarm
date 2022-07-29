import MenuIcon from "@mui/icons-material/Menu";
import useResizeAware from 'react-resize-aware';
import Switch from '@mui/material/Switch';
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
  LanguageSwitchWrapper
} from "./Header.styled";
import { useTranslation } from 'react-i18next';



export const SiteHeader = () => {
  const [resizeListener, { width }] = useResizeAware();
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [language, setLanguage] = useState(false);
  const handleLanguage = () => setLanguage(!language);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const tabletWidth = width > 767 && width < 1024;
  const desktopWidth = width > 1023;


  return (
    <>
      <Header>
        {resizeListener}
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
                   {t('WhoWeAre')} 
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
                    {t('HowToHelp')}
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
                    {t('HowToFindUs')}
                  </Link>
                </NavigationLargeListItem>
              </NavigationLargeList>
            </nav>
            <NavigationContactsWrapper>
              <NavigationContactsButton href="https://t.me/FeelTheWarmCharity">
                {t("ContactUs")}
              </NavigationContactsButton>
              <NavigationContactsLink href="tel:+380970031414">
                +38 097 003 14 14
              </NavigationContactsLink>
              {tabletWidth && <LanguageSwitchWrapper>
                <p>UA</p>
          {language && <Switch color="default" defaultChecked onClick={handleLanguage}/>}
          {!language && <Switch color="default" onClick={handleLanguage}/>}
          <p>EN</p>
              </LanguageSwitchWrapper>}
            </NavigationContactsWrapper>
          </NavigationWrapper>
          <NavigationTitleInformation>
            <HeaderTitle>{t('Charity')}</HeaderTitle>
            <CompanyName>{t("FoundName")}</CompanyName>
            <HeaderText>
              {t('HeaderTitle')}
            </HeaderText>
          </NavigationTitleInformation>
          <ModalWindow open={open} handleClose={handleClose} language={language} handleLanguage={handleLanguage}/>
        </Container>
      </Header>
    </>
  );
};
