import { useState } from "react";
import { Container } from "components/GlobalStyles";
import {
  Goods,
  GoodsWrapper,
  GoodsText,
  GoodsTitle,
  GoodsThumb,
  GoodsItemTitle,
  GoodsItemText,
  GoodsList,
  GoodsButton,
} from "./Goods.styled";
import img1 from "../../images/masters/img_1.jpg";
import img2 from "../../images/masters/img_2.jpg";
import img3 from "../../images/masters/img3.jpg";
import { ModalWindowForFirstItem } from "components/ModalWindow/ModalForFirstItem";
import { ModalWindowForSecondItem } from "components/ModalWindow/ModalForSecondItem";
import { ModalWindowForThirdItem } from "components/ModalWindow/ModalForThirdItem";

export const GoodsSection = () => {
  const [openFirstModal, setOpenFirstModal] = useState(false);
  const handleOpen = () => setOpenFirstModal(true);
  const handleClose = () => setOpenFirstModal(false);

  const [openSecondModal, setOpenSecondModal] = useState(false);
  const handleOpenSecondModal = () => setOpenSecondModal(true);
  const handleCloseSecondModal = () => setOpenSecondModal(false);

  const [openThirdModal, setOpenThirdModal] = useState(false);
  const handleOpenThirdModal = () => setOpenThirdModal(true);
  const handleCloseThirdModal = () => setOpenThirdModal(false);

  return (
    <Goods>
      <Container>
        <GoodsText>для справжніх поціновувачів</GoodsText>
        <GoodsTitle name="goods">Наші товари</GoodsTitle>
        <GoodsList>
          <GoodsWrapper>
            <img
              src={img1}
              alt="Goods"
              onClick={handleOpen}
              style={{ cursor: "pointer" }}
            />
            <GoodsThumb onClick={handleOpen}>
              <GoodsItemTitle>Активні тактичні навушники</GoodsItemTitle>
              <GoodsItemText>2 700 грн</GoodsItemText>
            </GoodsThumb>
            <GoodsButton href="https://t.me/LendLease_Ukraine">
              Купити
            </GoodsButton>
          </GoodsWrapper>
          <GoodsWrapper>
            <img
              src={img2}
              alt="Goods"
              style={{ cursor: "pointer" }}
              onClick={handleOpenSecondModal}
            />
            <GoodsThumb onClick={handleOpenSecondModal}>
              <GoodsItemTitle>Активні тактичні навушники</GoodsItemTitle>
              <GoodsItemText>2 700 грн</GoodsItemText>
            </GoodsThumb>
            <GoodsButton href="https://t.me/LendLease_Ukraine">
              Купити
            </GoodsButton>
          </GoodsWrapper>
          <GoodsWrapper>
            <img
              src={img3}
              alt="Goods"
              style={{ cursor: "pointer" }}
              onClick={handleOpenThirdModal}
            />
            <GoodsThumb onClick={handleOpenThirdModal}>
              <GoodsItemTitle>Навігатор GARMIN ETREX 32X</GoodsItemTitle>
              <GoodsItemText>11 000 грн</GoodsItemText>
            </GoodsThumb>
            <GoodsButton href="https://t.me/LendLease_Ukraine">
              Купити
            </GoodsButton>
          </GoodsWrapper>
        </GoodsList>
        <ModalWindowForFirstItem
          openFirstModal={openFirstModal}
          handleClose={handleClose}
        />
        <ModalWindowForSecondItem
          openSecondModal={openSecondModal}
          handleCloseSecondModal={handleCloseSecondModal}
        />
        <ModalWindowForThirdItem
          openThirdModal={openThirdModal}
          handleCloseThirdModal={handleCloseThirdModal}
        />
      </Container>
    </Goods>
  );
};
