import { Button, Dropdown, Menu, Space } from 'antd';

import { Link as Anchor } from "react-scroll";
import { DownOutlined } from '@ant-design/icons'
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

const StyledMenu = styled(Menu)`
  background-color: rgba(0, 0, 0, .8);
  color: #fff;
`

const StyledButton = styled(Button)`
  display: block;
  width: 100%;
  color: #fff;
  border: none;
  outline: none;
  text-align: left;
  background-color: transparent;

  &:hover {
    color: #fff;
    background-color: #D53B31;
  }

  &:focus {
    color: #fff;
    background-color: transparent;
  }
`

function NavBar() {
  const { t } = useTranslation();
  const router = useRouter();

  const menu = (
    <StyledMenu>
        <Link href="/" locale={router.locale = 'pt-BR'}>
          <StyledButton>PROTUGUÊS</StyledButton>
        </Link>

        <Link href={router.asPath} locale={router.locale = 'en'}>
          <StyledButton>ENGLISH</StyledButton>
        </Link>
    </StyledMenu>
  );



  return(
    <>
      <img src="images/logo.png" alt="Logo Luski"  height="35px" width="240px"/>
      <Space size={60}>
        <Link href="/">
          <Button type="link">{t('header.start')}</Button>
        </Link>
        <Link href="/">
        <Anchor
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <Button type="link">{t('header.about')}</Button>
          </Anchor>
        </Link>
        <Link  href="/">
          <Anchor
            to="games"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <Button type="link">{t('header.games')}</Button>
          </Anchor>
        </Link>
        <Anchor
          to="footer"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <Button type="link">{t('header.contact')}</Button>
        </Anchor>
      </Space>
      <Dropdown overlay={menu}>
        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
        {t('header.language')} <DownOutlined />
        </a>
      </Dropdown>

    </>
  );
}

export default NavBar
