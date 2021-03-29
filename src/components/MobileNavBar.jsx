import { Button, Drawer, Dropdown, Menu, message } from 'antd';
import { DownOutlined, MenuOutlined } from '@ant-design/icons'
import React, { useState } from 'react';

import { Link as Anchor } from "react-scroll";
import Link from 'next/link';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

const StyledButton = styled(Button)`
    margin-top: 10px;
`

const MenuButton = styled(Button)`
    background: transparent;
    outline: none;
    border: none;
    color: white;
`

const StyledDrawer = styled(Drawer)`
    .ant-drawer-header {
        text-align: center;
    }

    .ant-drawer-body {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .ant-drawer-header,
    .ant-drawer-body {
        background-color: #000000CC;
    }
`

const StyledButtonDrop = styled(Button)`
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

const StyledDropdown = styled(Dropdown)`
  font-size: 0.9rem;
`

const StyledMenu = styled(Menu)`
  background-color: rgba(0, 0, 0, .8);
  color: #fff;
`
const Item = styled(Menu.Item)`
  color: #fff;
`


function MobileNavBar() {
    const { t } = useTranslation();
    const [visible, setVisible] = useState(false);

    const router = useRouter();

    const menu = (
      <StyledMenu>
          <Link href="/" locale={router.locale = 'pt-BR'}>
            <StyledButtonDrop>PROTUGUÊS</StyledButtonDrop>
          </Link>

          <Link href={router.asPath} locale={router.locale = 'en'}>
            <StyledButtonDrop>ENGLISH</StyledButtonDrop>
          </Link>
      </StyledMenu>
    );

    const showDrawer = () => {
      setVisible(true);
    };

    const onClose = () => {
      setVisible(false);
    };
  return(
    <>
      <MenuButton icon={<MenuOutlined />} onClick={showDrawer}></MenuButton>
      <img src="images/logo.png" alt="Logo Luski"  height="35px" width="240px"/>
      <StyledDrawer
        placement="left"
        closable={false}
        onClose={onClose}
        visible={visible}
      >
        <Link href="/">
          <StyledButton onClick={onClose} type="link">{t('header.start')}</StyledButton>
        </Link>

        <Link href="/">
        <Anchor
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <StyledButton onClick={onClose} type="link">{t('header.about')}</StyledButton>
          </Anchor>
        </Link>

        <Link href="/">
        <Anchor
            to="games"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <StyledButton onClick={onClose} type="link">{t('header.games')}</StyledButton>
          </Anchor>
        </Link>

        <Link href="/">
        <Anchor
            to="footer"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <StyledButton onClick={onClose} type="link">{t('header.contact')}</StyledButton>
          </Anchor>
        </Link>
      </StyledDrawer>
      <StyledDropdown overlay={menu}>
        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
        {t('header.language')} <DownOutlined />
        </a>
      </StyledDropdown>

    </>
  );
}

export default MobileNavBar
