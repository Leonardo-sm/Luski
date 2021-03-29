import 'react-image-gallery/styles/css/image-gallery.css';

import { Button, Layout } from 'antd';

import BaseLayout from '../components/BaseLayout';
import ImageGallery from 'react-image-gallery';
import React from 'react';
import styled from 'styled-components';

const { Content } = Layout;

const Wallpaper = styled.div`
  z-index: 1;
  width: 100%;
  height: 93vh;
  object-fit: cover;
  margin-bottom: -6px;
  background-image: url('images/aurora/wallpaper.png');
  background-position: center;
  background-size: cover;
`

const Container = styled.div`
    padding: 8rem;

    h2 {
        font-size: 2rem;
        font-weight: 300;
    }

    .image-gallery-thumbnail {
        width: 15rem;
    }
`

const Wrapper = styled.div`
    display: flex;
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
`

const StyledButton = styled(Button)`
    max-width: fit-content;
    border-radius: 25px;
    border: none;
    background-color:#D53B31;
    font-weight: bold;
    font-size: 1rem;
    font-family: 'Londrina Solid', cursive;

    &:hover {
    background-color: #D53B31;
    filter: brightness(80%);
  }

  &:focus {
    background-color: #D53B31;
    filter: brightness(80%);
  }
`

const images = [
    {
      original: 'images/aurora/gallery1.png',
      thumbnail: 'images/aurora/gallery1.png',
    },
    {
      original: 'images/aurora/gallery2.png',
      thumbnail: 'images/aurora/gallery2.png',
    },
    {
      original: 'images/aurora/gallery3.png',
      thumbnail: 'images/aurora/gallery3.png',
    },
    {
        original: 'images/aurora/gallery4.png',
        thumbnail: 'images/aurora/gallery4.png',
    },
  ];

function GamePage() {
    return (
        <BaseLayout>
            <Content>
                <Wallpaper />
                <Container>
                    <h2>AURORA: A CHILD'S JOURNEY</h2>
                    <Wrapper>
                        <ImageGallery
                            items={images}
                            showNav={false}
                            useBrowserFullscreen={false}
                            showFullscreenButton={false}
                            showPlayButton={false}
                            autoPlay={true}
                            slideInterval={10000}
                            thumbnailClass="gallery-thumbs"
                        />
                        <TextWrapper>
                            <p>
                                Aurora: A Child's Journey é um jogo curto e emocionante que fala sobre o impacto de um grande desastre ambiental pelos olhos e sentimentos de uma criança. Apresentando cenários deslumbrantes, lindos gráficos e trilha sonora envolvente, este jogo conta uma história simples, sincera e comovente. <br/>
                            </p>
                            <p>Determinada a ajudar o meio ambiente e sua comunidade, Aurora sai em uma aventura para descobrir o que está causando tanta destruição e como solucionar esse problema, muitas vezes misturando a realidade com sua imaginação. <br/></p>
                            <p>Data de lançamento: 15/nov/2020<br/> Desenvolvedor: Luski Game Studio<br/> Distribuidora: Prothos</p>
                            <StyledButton type="primary">PRESSKIT AURORA</StyledButton>
                        </TextWrapper>
                    </Wrapper>
                </Container>
            </Content>
        </BaseLayout>
    );
}

export default GamePage;
