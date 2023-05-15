import styled from "styled-components";

import { Container } from "./Container";
import telegram from "../assets/telegram.svg";
import whatsapp from "../assets/whatsapp.svg";
import viber from "../assets/viber.svg";

const Telegram = styled.img.attrs({
  src: telegram,
  alt: "telegram",
})`
  margin: 0 6px;
`;
const Whatsapp = styled.img.attrs({
  src: whatsapp,
  alt: "whatsapp",
})`
  margin: 0 6px;
`;
const Viber = styled.img.attrs({
  src: viber,
  alt: "viber",
})`
  margin: 0 6px;
`;
const FooterEl = styled.footer`
  max-width: 1140px;
  margin: 0 auto;
  @media (max-width: 320px) {
    max-width: 320px;
    margin: 0 16px;
  }
`;
const Wrapper = styled.div`
  margin-top: 45px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: start;
  @media (max-width: 320px) {
    justify-content: start;
    flex-direction: column;
  }
`;
const Menu = styled.div`
  display: flex;
  @media (max-width: 320px) {
    flex-direction: column;
  }
`;
const Contact = styled.div`
  margin-right: 5px;
  display: flex;
  text-align: right;
  //flex-wrap: wrap;
  flex-direction: column;
  max-width: 277px;
  @media (max-width: 320px) {
    margin-top: 30px;
    text-align: left;
  }
`;
const SmallHeader = styled.span`
  text-transform: uppercase;
  font-weight: var(--fw-bold);
  font-size: 14px;
  color: #656566;
  @media (max-width: 320px) {
    font-size: 12px;
  }
`;
const Content = styled.span`
  margin-top: 20px;
  font-weight: 400;
  font-size: var(--fs-md);
  @media (max-width: 320px) {
    font-size: 14px;
    margin-top: 10px;
    max-width: 110px;
  }
`;
const HeadingRights = styled.span`
  font-family: "Montserrat";
  text-decoration: none;
  text-align: right;
  font-weight: 400;
  font-size: 12px;
  @media (max-width: 320px) {
    text-align: left;
  }
`;
const MenuEl = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  max-height: 220px;
  @media (max-width: 320px) {
    max-height: 145px;
    margin-top: 30px;
  }
`;
const WrMenuEl = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  max-height: 220px;
  @media (max-width: 320px) {
    max-height: 145px;
  }
`;

export const Footer = () => (
  <FooterEl>
    <Container>
      <Wrapper>
        <Menu>
          <MenuEl style={{ marginRight: 98 }}>
            <SmallHeader>О компании</SmallHeader>
            {["Партнёрская программа", "Вакансии"].map((el) => (
              <Content key={el}>{el}</Content>
            ))}
          </MenuEl>
          <MenuEl>
            <SmallHeader>Меню</SmallHeader>
            <WrMenuEl>
              {[
                "Расчёт стоимости",
                "Услуги",
                "Виджеты",
                "Интеграции",
                "Наши клиенты",
                "Кейсы",
                "Благодарственные письма", //Благодарность клиентов
                "Сертификаты",
                "Блог на Youtube",
                "Вопрос / Ответ",
              ].map((el) => (
                <Content style={{ marginRight: 52 }} key={el}>
                  {el}
                </Content>
              ))}
            </WrMenuEl>
          </MenuEl>
        </Menu>
        <Contact>
          <SmallHeader>Контакты</SmallHeader>
          <Content style={{ fontWeight: 500, maxWidth: "100%" }}>
            +7 555 555-55-55
          </Content>
          <Content>
            <Telegram />
            <Whatsapp />
            <Viber />
          </Content>
          <Content style={{ maxWidth: "100%" }}>
            Москва, Путевой проезд 3с1, к 902
          </Content>
          <HeadingRights style={{ marginTop: 70 }}>
            ©WELBEX 2022. Все права защищены.
          </HeadingRights>
          <HeadingRights style={{ textDecoration: "underline" }}>
            Политика конфиденциальности
          </HeadingRights>
        </Contact>
      </Wrapper>
    </Container>
  </FooterEl>
);
