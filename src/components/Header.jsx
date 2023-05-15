import styled from "styled-components";

import { Container } from "./Container";
import logo from "../assets/logo.svg";
import telegram from "../assets/telegram.svg";
import whatsapp from "../assets/whatsapp.svg";
import viber from "../assets/viber.svg";

const HeaderEl = styled.header`
  max-width: 1140px;
  margin: 0 auto;
  @media (max-width: 320px) {
    max-width: 320px;
    margin: 0 auto;
  }
`;
const Wrapper = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: start;
  @media (max-width: 320px) {
    justify-content: space-around;
    position: sticky;
    top: 0px;
    z-index: 10;
  }
`;
const MenuEl = styled.a.attrs({
  href: "/",
})`
  color: var(--colors-text);
  text-decoration: none;
  font-size: var(--fs-md);
  padding-top: 4px;
  font-weight: var(--fw-normal);
  margin: 0 15px;
  @media (max-width: 320px) {
    margin: 0 8px;
    font-size: 12px;
    ${(p) => p.$isHide && "display: none"}
  }
`;
const LogoBlog = styled.div`
  max-width: 140px;
  font-family: var(--famili-montserrat);
  font-weight: var(--fw-light);
  font-size: var(--fs-sm);
  margin-right: 38px;
  @media (max-width: 320px) {
    display: none;
  }
`;
const MenuImportant = styled.div``;
const Menu = styled.section`
  display: flex;
  @media (max-width: 320px) {
    margin-left: 8px;
    margin-right: 8px;
    position: sticky;
    top: 0;
    z-index: 10;
  }
`;
const Logo = styled.img.attrs({
  src: logo,
  alt: "logo",
})`
  margin-bottom: 10px;
`;
const ContactBlog = styled.div`
  font-weight: var(--fw-normal);
  font-size: var(--fs-md);
  @media (max-width: 320px) {
    display: none;
  }
`;
const Telegram = styled.img.attrs({
  src: telegram,
  alt: "telegram",
})`
  margin: 0 17px;
`;
const Whatsapp = styled.img.attrs({
  src: whatsapp,
  alt: "whatsapp",
})`
  margin: 0 17px;
`;
const Viber = styled.img.attrs({
  src: viber,
  alt: "viber",
})`
  margin: 0 17px;
`;

export const Header = () => {
  return (
    <HeaderEl>
      <Container>
        <Wrapper>
          <Menu>
            <LogoBlog>
              <Logo />
              крупный интегратор CRM в Росcии и ещё 8 странах
            </LogoBlog>
            <MenuImportant>
              <MenuEl>Услуги</MenuEl>
              <MenuEl>Виджеты</MenuEl>
              <MenuEl>Интеграции</MenuEl>
              <MenuEl>Кейсы</MenuEl>
              <MenuEl $isHide={true}>Сертификаты</MenuEl>
            </MenuImportant>
          </Menu>
          <ContactBlog>
            +7 555 555-55-55
            <Telegram />
            <Viber />
            <Whatsapp />
          </ContactBlog>
        </Wrapper>
      </Container>
    </HeaderEl>
  );
};
