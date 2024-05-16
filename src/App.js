import { ThemeProvider } from "styled-components";
import { useState,  } from "react";
import { lightTheme } from './utils/Themes.js'
import Navbar from "./components/Navbar";
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import HeroSection from "./components/HeroSection";
import Skills from "./components/Skills";
//import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import Education from "./components/Education";
import styled from "styled-components";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`

const Wrapper = styled.div`
  background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%,30% 99%, 0 100%);
`

const ZigZagWrapper = styled.div`
  background: linear-gradient(
      38.73deg,
      rgba(204, 0, 187, 0.15) 0%,
      rgba(201, 32, 184, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(0, 70, 209, 0) 50%,
      rgba(0, 70, 209, 0.15) 100%
    );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 1;
`;

const TopZigZagWrapper = styled(ZigZagWrapper)`
  transform: scaleY(-1); /* Invert the zigzag effect upwards */
`;

const BottomZigZagWrapper = styled(ZigZagWrapper)`
  bottom: auto;
  top: unset;
`;

function App() {
  // eslint-disable-next-line no-empty-pattern
  const [] = useState(true);
  const [openModal, ] = useState({ state: false, project: null });
  console.log(openModal)
  return (
    <ThemeProvider theme={lightTheme}>
      <Router >
      <TopZigZagWrapper />
        <Navbar />
        <Body>
          <HeroSection />
          <Wrapper>
            <Skills />
            <Experience />
          </Wrapper>
          {/* <Projects openModal={openModal} setOpenModal={setOpenModal} /> */}
          <Wrapper>
            <Education />
            <Contact />
          </Wrapper>
          <Footer />
          {/* {openModal.state &&
            <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
          } */}
        </Body>
        <BottomZigZagWrapper />
      </Router>
    </ThemeProvider>
  );
}

export default App;
