import 'antd/dist/antd.css';

import { Button, Layout } from 'antd';
import { FaDiscord, FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa';
import React, { useEffect, useState } from 'react';

import Head from 'next/head'
import MobileNavBar from './MobileNavBar';
import NavBar from './NavBar';
import styled from 'styled-components';
import { useTranslation } from 'next-i18next';

const { Header, Footer } = Layout

const StyledHeader = styled(Header)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, .8);
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 2;
  padding: 0 4em 0 1.2em;

  @media(max-width: 1000px) {
  padding: 0 0.5em 0 0.5em;
  }
`

const StyledFooter = styled(Footer)`
  justify-content: center;
  align-items: center;
  flex-direction: column;
  display: flex;
  background-color: #F7F0E6;

  h3 {
    font-size: 2.5rem;
    font-weight: 400;
    margin: 0;
  }

  p {
    font-weight: bold;
  }
`

const FooterIconsWrapper = styled.div`
  display: flex;
`

const StyledButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: #D53B31;
  color: #fff;
  margin: 0 0.8rem;

  &:hover {
    background-color: #D53B31;
    filter: brightness(80%);
  }

  &:focus {
    background-color: #D53B31;
    filter: brightness(80%);
  }
`

function BaseLayout({ children }) {
  const [isMobile, setIsMobile] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    setInterval(() => {
      if (window.innerWidth <= 1000) {
        setIsMobile(true)
      } else {
        setIsMobile(false);
      }
    }, 1000);
  }, [])

    return(
        <div>
          <Head>
            <title>Luski</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <StyledHeader>
            {isMobile ?
             (<MobileNavBar />)
             :
             (<NavBar />)
            }
          </StyledHeader>
          <Layout>
            {children}
          </Layout>
          <StyledFooter>
              <h3>{t('footer')}</h3>
              <p id="footer">contato@luski.com.br</p>
              <FooterIconsWrapper>
                <StyledButton type="primary" icon={<FaFacebookF />} shape="circle" href="https://www.facebook.com/luskigamestudio" target="_blanck" rel="noopener noreferrer" />
                <StyledButton type="primary" icon={<FaInstagram />} shape="circle" href="https://www.instagram.com/luski_gamestudio/" target="_blanck" rel="noopener noreferrer" />
                <StyledButton type="primary" icon={<FaLinkedinIn />} shape="circle" href="https://www.linkedin.com/company/luskigamestudio/about/" target="_blanck" rel="noopener noreferrer" />
                <StyledButton type="primary" icon={<FaYoutube />} shape="circle" href="https://www.youtube.com/channel/UCqu05kKPBejK_6Ty9L5eOoA" target="_blanck" rel="noopener noreferrer" />
                <StyledButton type="primary" icon={<FaTwitter />} shape="circle" href="https://twitter.com/LuskiGameStudio" target="_blanck" rel="noopener noreferrer" />
                <StyledButton type="primary" icon={<FaDiscord />} shape="circle" href="https://discord.com/invite/BU5ZFBR" target="_blanck" rel="noopener noreferrer" />
              </FooterIconsWrapper>
          </StyledFooter>
        </div>
    );
}

export default BaseLayout
