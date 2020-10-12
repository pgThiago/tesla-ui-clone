import React from 'react';

import { Container, Header, Logo, Burger, Footer } from './styles';

const UniqueOverlay: React.FC = () => {
  return (
    <Container>

    <Header>

      <Logo />
      <Burger />

    </Header>

    <Footer>
      <ul>
        <li>
          <a href="https://github.com/pgThiago/tesla-ui-clone">UI Clone</a>
        </li>

        <li>
          <a href="https://github.com/pgThiago/tesla-ui-clone">Made with 0 knowledge</a>
        </li>

        <li>
          <a href="https://github.com/pgThiago/tesla-ui-clone">By Thiago Silva</a>
        </li>

        <li>
          <a href="https://www.youtube.com/watch?v=Mf4Se4ZGcG8&t=841s&ab_channel=Rocketseat">Following this tutorial</a>
        </li>
      </ul>
    </Footer>

    </Container>
  );
};

export default UniqueOverlay;
