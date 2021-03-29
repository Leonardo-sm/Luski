import Carousel from 'react-elastic-carousel'
import Link from 'next/link';
import React from 'react';
import data from '../data/data.json';
import styled from 'styled-components';
import { useRouter } from 'next/router';

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 3 }
  ];

  const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 17rem;
  width: 100%;
  color: #fff;
  margin: 15px;
  font-size: 4em;
  background-image: ${(props) => `url(${props.image})`};
  background-position: center;
  background-size: cover;
  transition: all ease 0.3s;

  &:hover {
    -webkit-box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0);
    box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0);
  }

  @media(max-width: 1440px) {
  height: 13rem;
  }

  @media(max-width: 1024px) {
  height: 10rem;
  }

  @media(max-width: 1000px) {
  height: 13rem;
  }

`

const StyledLink = styled.a`
  height: 100%;
  width: 100%;
`

function SlideCarousel({ isMobile, i18n }) {

  const router = useRouter();

    return (
    <Carousel itemsToShow={3} breakPoints={breakPoints} pagination={false} showArrows={!isMobile}>
      {data.map((item, key) => (
      <Item key={key} image={item.images.miniature}>
        <Link href={`${item.name}`} locale={i18n._nextI18Next.initialLocale}>
          <StyledLink />
        </Link>
      </Item>
      ))}
  </Carousel>
    );
}

export default SlideCarousel;
