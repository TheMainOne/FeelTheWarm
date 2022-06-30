import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import {
  ModalList,
  ModalListItem,
  ModalLinkButton,
  BoxWrapper,
} from "./ModalForFirstItem.styled";
import image1small from "../../images/modalFirst/image1small.webp";
import image1 from "../../images/modalFirst/image1.webp";
import image2small from "../../images/modalFirst/image2small.webp";
import image2 from "../../images/modalFirst/image2.webp";
import image3small from "../../images/modalFirst/image3small.webp";
import image3 from "../../images/modalFirst/image3.webp";

export const ModalWindowForFirstItem = ({ openFirstModal, handleClose }) => {
  const TabletMediaWidth = useMediaQuery("(min-width:768px)");
  const DesktopMediaWidth = useMediaQuery("(min-width:1024px)");

  const images = [
    {
      original: image1,
      thumbnail: image1small,
    },
    {
      original: image2,
      thumbnail: image2small,
    },
    {
      original: image3,
      thumbnail: image3small,
    },
  ];

  return (
    <Modal
      open={openFirstModal}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={[
          {
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 350,
            bgcolor: "#ffffff",
            outline: "none",
            padding: "25px",
            color: "#303030",
          },
          TabletMediaWidth && {
            width: 700,
            display: "flex",
            alignItems: "center",
          },
          DesktopMediaWidth && {
            width: 1000,
          },
        ]}
      >
        <BoxWrapper>
          <CloseIcon
            fontSize="large"
            sx={[
              {
                cursor: "pointer",
                color: "#000000",
                marginLeft: "300px",
                marginTop: "10px",
                marginBottom: "15px",
              },
              TabletMediaWidth && {
                marginLeft: "675px",
                marginTop: "0px",
              },
              DesktopMediaWidth && {
                marginLeft: "480px",
                marginBottom: "28px",
                width: 1000,
              },
            ]}
            onClick={handleClose}
          />
          <ModalList>
            <ModalListItem>
              <Typography
                variant="body1"
                sx={[
                  {
                    fontFamily: "inherit",
                    fontSize: "12px",
                    letterSpacing: "0.03em",
                  },
                  TabletMediaWidth && {
                    fontSize: "14px",
                  },
                  DesktopMediaWidth && {
                    fontSize: "16px",
                  },
                ]}
              >
                Активні тактичні навушники (колір: олива, чорний)
                <br />
                Ціна: 2700 грн.
                <br />
                <br />
                Характеристики:
                <br />- Шумопоглинання: 22db
                <br />
                - AUX вихід та перехідник
                <br />- Тип батарейки ААА
                <br />- Маса: 380гр.
                <br />
                <br /> Доставка:
                <br /> Новою Поштою по Україні, або самовивіз зі складу в Києві.
              </Typography>
            </ModalListItem>
            <ModalListItem>
              <Typography
                variant="body1"
                sx={[
                  {
                    fontFamily: "inherit",
                    fontSize: "12px",
                    letterSpacing: "0.03em",
                    color: "#ff6c00",
                  },
                  TabletMediaWidth && {
                    fontSize: "14px",
                  },
                  DesktopMediaWidth && {
                    fontSize: "16px",
                  },
                ]}
              >
                Активні навушники для стрільби з шумопоглинанням до 22db.
                Навушники оснащені двома всеспрямованими мікрофонами з
                динамічним діапазоном, регулятором гучності, аудіовходом і
                звукоізоляційним корпусом. Звуковий стиск забезпечує 2
                мілісекундний час реакції.
                <br />
                Для роботи використовує 2 батарейки типу ААА
              </Typography>
            </ModalListItem>
          </ModalList>
          <ModalLinkButton href="https://t.me/LendLease_Ukraine">
            Купити
          </ModalLinkButton>
        </BoxWrapper>
        <Box
          sx={[
            {
              display: "none",
            },
            TabletMediaWidth && {
              display: "block",
              marginLeft: "30px",
            },
          ]}
        >
          {" "}
          <ImageGallery
            showPlayButton={false}
            showBullets={true}
            showThumbnails={false}
            items={images}
          />
        </Box>
      </Box>
    </Modal>
  );
};
