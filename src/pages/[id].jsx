import 'react-image-gallery/styles/css/image-gallery.css';

import { Button, Layout } from 'antd';

import BaseLayout from '../components/BaseLayout';
import ImageGallery from 'react-image-gallery';
import React from 'react';
import data from '../data/data.json';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import styled from 'styled-components';
import { useTranslation } from 'next-i18next';

const { Content } = Layout;

const Wallpaper = styled.div`
  z-index: 1;
  width: 100%;
  height: 93vh;
  object-fit: cover;
  margin-bottom: -6px;
  background-image: ${(props) => `url(${props.image})`};
  background-position: center;
  background-size: cover;

  @media(max-width: 1024px) {
    height: 50vh;
  }

  @media(max-width: 1000px) {
    height: 34vh;
  }
`

const Container = styled.div`
    padding: 3rem 8rem 8rem 8rem;

    h2 {
        font-size: 2rem;
        font-weight: 300;
    }

    .image-gallery-thumbnail {
        width: 15rem;
    }

    @media(max-width: 1024px) {
      padding: 5rem;
    }

    @media(max-width: 1000px) {
      padding: 2rem;

      .image-gallery-thumbnail {
        width: 11rem;
      }
    }
`

const Wrapper = styled.div`
    display: flex;

    @media(max-width: 1582px) {
      flex-direction: column;
    }
`

const TextWrapper= styled.div`
    flex-direction: column;
    display: flex;
    max-width: 45rem;
    margin-left: 1.5rem;

    p {
        margin-bottom: 2rem;
        font-size: 1rem;
    }

    @media(max-width: 1024px) {
      flex-direction: row;
      p{
        font-size: 1.5rem;
      }
    }

    @media(max-width: 1582px) {
      margin: 0 auto;
      margin-top: 3rem;
      flex-direction: row;
      max-width: 60rem;
    }

    @media(max-width: 1000px) {
      flex-direction: column;
      p{
        font-size: 1rem;
      }
    }
`

const DescriptionWrapper = styled.section`
  margin-right: 2rem;
  @media(max-width: 1582px) {
      max-width: 39rem;
    }
`

const ButtonWrapper = styled.div`
  flex-direction: column;
  display: flex;
`

const StyledButton = styled(Button)`
    max-width: fit-content;
    border-radius: 25px;
    border: none;
    background-color:#D53B31;
    font-weight: bold;
    font-size: 1rem;
    font-family: 'Londrina Solid', cursive;
    margin-bottom: 1rem;

    &:hover {
    background-color: #D53B31;
    filter: brightness(80%);
  }

  &:focus {
    background-color: #D53B31;
    filter: brightness(80%);
  }
`

export default function Game({ game }) {
  const { t } = useTranslation();

  return (
    <BaseLayout>
      {game.map((gameData, key) => (
        <Content key={key}>
            <Wallpaper image={gameData.images.wallpaper} />
            <Container>
                <h2>{gameData.fullName}</h2>
                <Wrapper>
                    <ImageGallery
                        items={gameData.images.gallery}
                        showNav={false}
                        useBrowserFullscreen={false}
                        showFullscreenButton={false}
                        showPlayButton={false}
                        autoPlay={true}
                        slideInterval={10000}
                        thumbnailClass="gallery-thumbs"
                    />
                    <TextWrapper>
                      <DescriptionWrapper>
                        <p>{t(`${gameData.name}.description`)}<br/></p>
                        <p>{t(`${gameData.name}.subdescription`)}<br/></p>
                      </DescriptionWrapper>
                        <section>
                          <p>
                            <span>{t(`${gameData.name}.lauchInfo`)}</span> <br />
                            <span>{t(`${gameData.name}.developInfo`)}</span> <br />
                            <span>{t(`${gameData.name}.publisherInfo`)}</span>
                          </p>
                          <ButtonWrapper>
                            {gameData.presskit && <StyledButton type="primary">PRESSKIT {gameData.name}</StyledButton>}
                            <StyledButton type="primary" href={gameData.gameLink} target="_blanck" rel="noopener noreferrer">{t('access')}</StyledButton>
                          </ButtonWrapper>
                        </section>
                    </TextWrapper>
                </Wrapper>
            </Container>
        </Content>
      ))}
    </BaseLayout>
);
}

export async function getStaticProps({ params, locale }) {
  const game = data.filter((props) => props.name === params.id)
  return {
    props: { game, ...await serverSideTranslations(locale, ['common']),
  }}
  }

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          id: 'aurora',
        },
        locale: 'en'
      },
      {
        params: {
          id: 'aurora',
        },
        locale: 'pt-BR'
      },
      {
        params: {
          id: 'NotYouMaryLu',
        },
        locale: 'en'
      },
      {
        params: {
          id: 'NotYouMaryLu',
        },
        locale: 'pt-BR'
      },
      {
        params: {
          id: 'BeyondDeath',
        },
        locale: 'en'
      },
      {
        params: {
          id: 'BeyondDeath',
        },
        locale: 'pt-BR'
      },
    ],
    fallback: false,
  };
}

