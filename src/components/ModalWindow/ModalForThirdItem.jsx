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
import image1 from "../../images/modalThird/image.jpg";
import image2 from "../../images/modalThird/image1.jpg";
import image3 from "../../images/modalThird/image2.jpg";
import image4 from "../../images/modalThird/image3.jpg";

export const ModalWindowForThirdItem = ({
  openThirdModal,
  handleCloseThirdModal,
}) => {
  const TabletMediaWidth = useMediaQuery("(min-width:768px)");
  const DesktopMediaWidth = useMediaQuery("(min-width:1024px)");

  const images = [
    {
      original: image1,
    },
    {
      original: image2,
    },
    {
      original: image3,
    },
    {
      original: image4,
    },
  ];

  return (
    <Modal
      open={openThirdModal}
      onClose={handleCloseThirdModal}
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
            onClick={handleCloseThirdModal}
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
                Портативний навігатор GARMIN ETREX 32X
                <br />
                Ціна: 11 000 грн.
                <br />
                <br />
                Характеристики:
                <br />- 2,2-дюймовий кольоровий дисплей с роздільною здатністю
                240 x 320 пікселів яким зручно користуватися при будь-яких
                умовах освітленості.
                <br />
                - Попередньо завантажені карти TopoActive з функцією створення
                маршрутів під час велосипедних та піших прогулянок.
                <br />- Підтримка супутникових систем GPS та ГЛОНАСС дозволяє
                вести спостереження в більш складних умовах, ніж один лише GPS.
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
                Портативний навігатор Garmin eTrex 32x з попередньо
                завантаженими картами TopoActive. Висока роздільна здатність
                дисплея та розширена пам'ять для зберігання карт, використання
                супутникових систем GPS та GLONASS вдало поєднуються з простотою
                експлуатації, тривалістю роботи та доступністю. Модель eTrex 32x
                включає 3-осьовий компас та барометричний альтиметр.
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

// export const ModalWindowForThirdItem = ({
//   openThirdModal,
//   handleCloseThirdModal,
// }) => {
//   const TabletMediaWidth = useMediaQuery("(min-width:768px)");

//   return (
//     <Modal
//       open={openThirdModal}
//       onClose={handleCloseThirdModal}
//       aria-labelledby="modal-modal-title"
//       aria-describedby="modal-modal-description"
//     >
//       <Box
//         sx={[
//           {
//             position: "absolute",
//             top: "50%",
//             left: "50%",
//             transform: "translate(-50%, -50%)",
//             width: 350,
//             bgcolor: "#ffffff",
//             outline: "none",
//             padding: "15px",
//             color: "#303030",
//           },
//           TabletMediaWidth && {
//             width: 500,
//           },
//         ]}
//       >
//         <CloseIcon
//           fontSize="large"
//           sx={[
//             {
//               cursor: "pointer",
//               color: "#000000",
//               marginLeft: "300px",
//               marginTop: "10px",
//               marginBottom: "15px",
//             },
//             TabletMediaWidth && {
//               marginLeft: "460px",
//               marginTop: "0px",
//             },
//           ]}
//           onClick={handleCloseThirdModal}
//         />
//         <ModalList>
//           <ModalListItem>
//             <Typography
//               variant="body1"
//               sx={{
//                 fontFamily: "inherit",
//                 fontSize: "16px",
//                 letterSpacing: "0.03em",
//               }}
//             >
//               Тактичні окуляри (Олива колір) <br />
//               Ціна: 5200грн <br /> Характеристика товару: <br /> - матеріал:
//               Полікарбонат <br />
//               - Розміри: 200х240 мм Вага: 60 г <br />
//               - Дві лінзи
//               <br />- секретна застежка
//             </Typography>
//           </ModalListItem>
//           <ModalListItem>
//             <Typography
//               variant="body1"
//               sx={{
//                 fontFamily: "inherit",
//                 fontSize: "14px",
//                 letterSpacing: "0.03em",
//                 color: "#ff6c00",
//               }}
//             >
//               Окуляри поляризаційні Select — це поєднання сучасного стилю й
//               захисту від сонця. Завдяки лінзам із коефіцієнтом UV 400 очі
//               будуть повністю захищені від шкідливого ультрафіолетового
//               випромінювання, а їхні противідблискові властивості допоможуть
//               чіткіше розгледіти все, що є під поверхнею води.
//             </Typography>
//           </ModalListItem>
//         </ModalList>
//         <ModalLinkButton href="https://t.me/mr_hyde880">Купити</ModalLinkButton>
//       </Box>
//     </Modal>
//   );
// };
