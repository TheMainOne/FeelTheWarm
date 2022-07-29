import { useEffect } from "react";
import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Link } from "react-scroll";
import {
  ModalList,
  ModalListItem,
  ModalPhone,
  ModalLinkButton,
} from "./ModalWindow.styled";
import { useTranslation } from 'react-i18next';
import Switch from '@mui/material/Switch';
import i18next from "i18next";



export const ModalWindow = ({ open, handleClose, language, handleLanguage }) => {
  const { t } = useTranslation();

  useEffect(() => {
    if(language === false) {
      i18next
      .changeLanguage('ua')
      document.title = `Відчуй тепло || Благодійний фонд`;
    } else {
      i18next
      .changeLanguage('en')
      document.title = `Feel the warm || Charity foundation`;
    }

  }, [language]);


  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "60%",
          transform: "translate(-50%, -50%)",
          width: 350,
          height: "100vh",
          bgcolor: "#ffffff",
          outline: "none",
          padding: "15px",
          color: "#303030",
        }}
      >
        <CloseIcon
          fontSize="large"
          sx={{
            cursor: "pointer",
            color: "#000000",
            marginLeft: "280px",
            marginTop: "85px",
            marginBottom: "30px",
          }}
          onClick={handleClose}
        />
        <ModalList>
          <ModalListItem>
            <Typography
              variant="span"
              sx={{
                fontFamily: "inherit",
                fontSize: "18px",
                letterSpacing: "0.03em",
                "&:hover": {
                  color: "#ff6c00",
                },
              }}
            >
              <Link
                activeClass="active"
                to="aboutUs"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={handleClose}
              >
                {t('WhoWeAre')}
              </Link>
            </Typography>
          </ModalListItem>
          <ModalListItem>
            <Typography
              variant="span"
              sx={{
                fontFamily: "inherit",
                fontSize: "18px",
                letterSpacing: "0.03em",
                "&:hover": {
                  color: "#ff6c00",
                },
              }}
            >
              <Link
                activeClass="active"
                to="goods"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={handleClose}
              >
                {t('HowToHelp')}
              </Link>
            </Typography>
          </ModalListItem>
          <ModalListItem>
            <Typography
              variant="span"
              sx={{
                fontFamily: "inherit",
                fontSize: "18px",
                letterSpacing: "0.03em",
                "&:hover": {
                  color: "#ff6c00",
                },
              }}
            >
              <Link
                activeClass="active"
                to="footer"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={handleClose}
              >
                {t('HowToFindUs')}
              </Link>
            </Typography>
          </ModalListItem>
          <ModalListItem>
          <p>UA</p>
          {language && <Switch color="default" defaultChecked onClick={handleLanguage}/>}
          {!language && <Switch color="default" onClick={handleLanguage}/>}
          <p>EN</p>
          </ModalListItem>
        </ModalList>
        <ModalPhone href="tel:+380970031414">+38 097 003 14 14</ModalPhone>
        <ModalLinkButton href="https://t.me/FeelTheWarmCharity">
          {t('ContactUsButton')}
        </ModalLinkButton>


      </Box>
    </Modal>
  );
};
