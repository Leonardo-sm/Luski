import { BackTop, Layout } from 'antd';
import React, { useEffect, useState } from 'react'

import { AiOutlineArrowUp } from 'react-icons/ai';
import { BaseLayout } from '../components';
import CarouselSlide from '../components/Carousel';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import styled from 'styled-components';
import { useTranslation } from 'next-i18next';

const { Content } = Layout;

const Video = styled.video`
  z-index: 1;
  width: 100%;
  height: 93vh;
  object-fit: cover;
  margin-bottom: -6px;

  @media(max-width: 1024px) {
    height:50vh;
    margin-bottom: -6.8px;
  }

  @media(max-width: 1000px) {
    height:38vh;
  }
`

const AbaoutWrapper = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  padding: 5rem;
  background-image: url('images/sobre-luski.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`

const SliderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem 0;
`

const TextAboutWrapper = styled.div`
  h1 {
    color: #F7F0E6;
    font-size: 5rem;
    max-width: 300px;
    line-height: 1.3em;
    font-weight: 300;
  }

  h4 {
    color: #F7F0E6;
    font-size:1.2rem;
    max-width: 420px;
    font-weight: 300;
  }

`

const AboutImageBox = styled.div`
  width: 450px;
  height: 600px;
  margin-left: 10rem;
  background-image: url('images/about.png');
  background-position: center;
  background-size: cover;

  @media(max-width: 1024px) {
      height: 500px;
    }
`

const GameWrapper = styled.div`
  flex-direction: column;
  display: flex;
  max-width: 100rem;
  margin: 0 auto;
  padding: 3rem 0;
`

const GameTextWrapper = styled.div`
  margin: 0 auto;
  max-width: 25rem;
  text-align: center;
  h1 {
    font-size: 4rem;
    font-weight: 300;
    font-weight: 500;
    margin: 0;
  }
`

const style = {
  height: 40,
  width: 40,
  lineHeight: '40px',
  borderRadius: '50%',
  backgroundColor: '#D53B31',
  color: '#fff',
  textAlign: 'center',
  fontSize: '1.5rem',
  marginLeft: '2rem',
};

function Home(props) {
  const { t } = useTranslation();
  const [isMobile, setIsMobile] = useState(false);

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
    <BaseLayout>
    <Content>
      <Video autoPlay={true} loop={true} muted={true}>
        <source src="videos/Aurora_Official_Trailer.mp4" type="video/mp4" />
      </Video>
      <AbaoutWrapper>
        <TextAboutWrapper>
          <h1 id="about">{t('about.title')}</h1>
          <h4>{t('about.description')}</h4>
        </TextAboutWrapper>
        {!isMobile && <AboutImageBox />}
      </AbaoutWrapper>
      <GameWrapper>
        <GameTextWrapper>
          <h1>{t('games.title')}</h1>
          <p>{t('games.description')}</p>
        </GameTextWrapper>
        <SliderWrapper id="games">
          <CarouselSlide isMobile={isMobile} i18n={props} />
        </SliderWrapper>
      </GameWrapper>
    </Content>
      {!isMobile && <BackTop>
        <div style={style}><AiOutlineArrowUp /></div>
      </BackTop>}
    </BaseLayout>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common']),
  }
})

export default Home;
