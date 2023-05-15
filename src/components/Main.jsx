import styled from "styled-components";

import {
  DesctopRedBall,
  PurpleBall,
  PurpleLight,
  RedBall,
  RedLight,
} from "./Balls";
import { Container } from "./Container";

const MainEl = styled.main`
  max-width: 1140px;
  margin: 0 auto;
  @media (max-width: 320px) {
    background: radial-gradient(
      238.53% 189.02% at 3.2% 3.49%,
      rgba(255, 246, 233, 0.1) 0%,
      rgba(26, 29, 35, 0.1) 26.62%,
      rgba(26, 29, 35, 0.1) 52.1%,
      rgba(26, 29, 35, 0.01) 70.17%,
      rgba(26, 29, 35, 0) 100%
    );
    backdrop-filter: blur(7.5px);
  }
`;
const Wrapper = styled.div`
  margin: 45px 5px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: start;

  @media (max-width: 320px) {
    justify-content: center;
    flex-direction: column;
    max-width: 320px;
    margin: 0 14px;
  }
`;
const LeftBlog = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-width: 362px;
`;
const LBHeaderContent = styled.span`
  font-size: var(--fs-lg);
  font-weight: 400;

  @media (max-width: 320px) {
    font-size: 36px;
  }
`;
const LBNameContent = styled.span`
  font-size: var(--fs-lg);
  font-weight: 900;

  background: linear-gradient(92deg, #fcb045 27.14%, #ff3f78 121.36%), #e4e5ea;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 320px) {
    font-size: 36px;
  }
`;
const LBTextContent = styled.span`
  font-size: var(--fs-mdd);
  font-weight: 400;
  font-family: "Montserrat";
  margin-top: 30px;
  @media (max-width: 320px) {
    font-size: var(--fs-mdd);
  }
`;
const RightBlog = styled.div`
  max-width: 291px;
  text-align: right;
  @media (max-width: 320px) {
    text-align: left;
    margin-top: 45px;
    margin-bottom: 45px;
  }
`;
const RBHeaderContent = styled.span`
  font-size: var(--fs-mdd);
  font-weight: var(--fw-normal);
`;
const RBHeaderTextGradient = styled.span`
  font-size: var(--fs-mdd);
  text-transform: uppercase;
  font-weight: var(--fw-bold);
  background: linear-gradient(92deg, #fcb045 27.14%, #fd1d1d 121.36%), #e4e5ea;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  @media (max-width: 320px) {
    text-transform: none;
  }
`;
const RBContent = styled.div`
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
  @media (max-width: 320px) {
    display: none;
  }
`;
const RBContentMobile = styled.div`
  display: none;
  @media (max-width: 320px) {
    margin-top: 20px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 5px;
  }
`;
const RBContentMobileEl = styled.span`
  @media (max-width: 320px) {
    display: flex;
    justify-content: start;
    text-transform: uppercase;
    font-family: "Montserrat";
    font-weight: 400;
    font-size: 13px;
  }
`;
const GradientBr = styled.hr`
  z-index: 50;
  @media (max-width: 320px) {
    width: 10px;
    margin: auto 0;
    margin-right: 5px;
    border-width: 1px;
    border-style: solid;
    border-image: linear-gradient(to right, #fcb045, #fd1d1d) 1;
  }
`;
const RBContentEl = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row-reverse;
`;
const RBContentHeader = styled.span`
  text-transform: uppercase;
  font-weight: var(--fw-normal);
  font-size: var(--fs-mdd);
`;
const RBContentText = styled.span`
  margin-top: 6px;
  font-family: "Montserrat";
  font-weight: 400;
  font-size: var(--fs-md);
`;
const Btn = styled.button`
  border: 0;
  padding: 0;
  font-weight: var(--fw-normal);
  font-size: var(--fs-md);
  color: var(--colors-text);
  margin-top: 61px;
  width: 262px;
  height: 61px;
  background: #4077f3;
  @media (max-width: 320px) {
    display: none;
  }
`;
export const Main = () => {
  return (
    <MainEl>
      <DesctopRedBall />
      <RedBall />
      <PurpleBall />
      <RedLight />
      <PurpleLight />
      <Container>
        <Wrapper>
          <LeftBlog>
            <LBHeaderContent>Зарабатывайте больше</LBHeaderContent>
            <LBNameContent>с WELBEX</LBNameContent>
            <LBTextContent>
              Развиваем и контролируем продажи за вас
            </LBTextContent>
          </LeftBlog>
          <RightBlog>
            <RBHeaderContent>
              Вместе с{" "}
              <RBHeaderTextGradient>
                бесплатной консультацией
              </RBHeaderTextGradient>{" "}
              мы дарим:
            </RBHeaderContent>
            <RBContent>
              <RBContentEl>
                <RBContentHeader>Виджеты</RBContentHeader>
                <RBContentText>30 готовых решений</RBContentText>
              </RBContentEl>
              <RBContentEl>
                <RBContentHeader>Dashboard</RBContentHeader>
                <RBContentText>с показателями вашего бизнеса</RBContentText>
              </RBContentEl>
              <RBContentEl>
                <RBContentHeader>Skype Аудит</RBContentHeader>
                <RBContentText>отдела продаж и CRM системы</RBContentText>
              </RBContentEl>
              <RBContentEl>
                <RBContentHeader>35 дней</RBContentHeader>
                <RBContentText>использования CRM</RBContentText>
              </RBContentEl>
            </RBContent>
            <RBContentMobile>
              <RBContentMobileEl>
                <GradientBr />
                Skype аудит
              </RBContentMobileEl>
              <RBContentMobileEl>
                <GradientBr />
                30 виджетов
              </RBContentMobileEl>
              <RBContentMobileEl>
                <GradientBr />
                Dashboard
              </RBContentMobileEl>
              <RBContentMobileEl>
                <GradientBr />
                Месяц аmoCRM
              </RBContentMobileEl>
            </RBContentMobile>
            <Btn>Получить консультацию</Btn>
          </RightBlog>
        </Wrapper>
      </Container>
    </MainEl>
  );
};
