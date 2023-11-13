import React from 'react';

import GymThumbnail from '../../assets/images/Gym.jpg';
import RenovationThumbnail from '../../assets/images/Renovation.jpg';
import TemplateThumbnail from '../../assets/images/Template.jpg';
import RecipeThumbnail from '../../assets/images/Recipe.jpg';

import { FiArrowUpRight } from 'react-icons/fi';

import PortfolioSection from './PortfolioSection';
import Header from '../reusable/Header';

import styled from 'styled-components';

const Portfolio = ({ portfolioRef }) => {
  return (
    <Container>
      <Inner>
        <Header title="Projects" headerRef={portfolioRef} />
        <TopDivider />
        <Feed>
          <PortfolioSection
            header="Gym"
            sub="Gym Clone"
            desc="A local gym with a front-end built using React, React Router, and CSS. This application enables users to access information about the gym's features, pricing, and details of the coaches."
            src={GymThumbnail}
            codeLink="https://github.com/AminRsh/Gym"
            demoLink="https://gym-lovers.netlify.app/"
            tech="React, React Router, and SASS"
            date="2023"
          />
          <PortfolioSection
            header="Renovation"
            sub="React Renovation Company"
            desc="A renovation company with a front-end built using React, React Router, and CSS. The application enables users to make in-person appointments with company staff and access information about the company's services. Additionally, customers can provide feedback on the website."
            src={RenovationThumbnail}
            demoLink="https://renovation2.netlify.app/"
            codeLink="https://github.com/AminRsh/Renovation"
            tech="React.js, React Router, Tailwind"
            date="2023"
          />
          <PortfolioSection
            header="React Template"
            sub="Template"
            desc="Built using React and CSS. This app provides some information about a new software and product and its features. There are some spots for download the software for different platforms. Also, applicant can join to receive newsletters."
            src={TemplateThumbnail}
            demoLink="https://amin-rsh-template.netlify.app/"
            codeLink="https://github.com/AminRsh/Template"
            tech="React.js, React Router, CSS"
            date="2023"
          />
          <PortfolioSection
            header="Next.js Template"
            sub="Template"
            desc="Built using Next js and React. This app provide some information about diffrent kinds of dishes"
            src={RecipeThumbnail}
            demoLink="https://amin-rsh-template.netlify.app/"
            codeLink="https://github.com/AminRsh/Template"
            tech="React.js, Next.js"
            date="2023"
          />
        </Feed>
        <ButtonContainer
          rel="noreferrer"
          target="_blank"
          href="https://github.com/AminRsh"
        >
          <Button>View More</Button>
          <ArrowIcon size={47} />
        </ButtonContainer>
        <Divider />
      </Inner>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 100vh;
  position: relative;
  z-index: 7;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 150px 40px 0 40px;
  @media only screen and (max-width: 1050px) {
    margin-top: 0vh;
    padding: 0 40px;
  }
`;

const Inner = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.maxWidth};
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  border-bottom: 1px solid ${({ theme }) => theme.portfolio.line};
  margin: 60px 0 0px 0;
`;

const TopDivider = styled(Divider)`
  margin: 60px 0 60px 0;
`;

const Feed = styled.div`
  display: flex;
  flex-direction: column;
  gap: 55px;
  align-items: center;
`;

const ArrowIcon = styled(FiArrowUpRight)`
  transform: translateY(0px);
  transition: transform 0.75s;
`;

const ButtonContainer = styled.a`
  padding-top: 60px;
  display: flex;
  align-items: center;
  width: fit-content;
  gap: 20px;
  &:hover {
    p {
      text-shadow: 0px 0px 10px rgba(255, 255, 255, 0.664);
      &::after {
        transform: scaleX(1) translateY(50px);
        transform-origin: left;
      }
    }
    img {
      transform: translateX(20px);
    }
  }
`;

const Button = styled.p`
  position: relative;
  width: fit-content;
  color: ${({ theme }) => theme.main.fonts.primary};
  font-size: 3.6rem;
  font-family: ${({ theme }) => theme.main.fontFamily.med};
  cursor: pointer;
  transition: text-shadow 0.5s;
  &::after {
    position: absolute;
    content: ' ';
    top: 0;
    left: 0;
    width: 100%;
    transform: scaleX(0) translateY(50px);
    transform-origin: right;
    transition: transform 0.5s;
    height: 3px;
    background-color: rgb(255, 255, 255, 0.64);
  }
`;

export default Portfolio;
