import { createGlobalStyle } from 'styled-components';

export const GlobalStyled = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }

        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }

    body {
        -webkit-font-smoothing: antialiased;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
        Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    }

    h1, h2, h3, h4, h5, h6 {
    font-family: 'Londrina Solid', cursive;;
  }

    p, span {
      font-family: 'Montserrat', sans-serif;
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    .ant-dropdown-trigger,
    .ant-btn-link {
      color: #fff;

      &:hover {
        color: #fff;
        filter: brightness(80%);
      }

      &:focus {
        color: #fff;
      }
    }
    .ant-dropdown-menu-submenu-title,
    .ant-dropdown-menu-item {
      &:hover {
        background-color: #D53B31;
      }
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
`
