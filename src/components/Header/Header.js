import React from 'react';
import styled from 'styled-components/macro';
import { Menu, Search, User } from 'react-feather';

import { QUERIES, COLORS } from '../../constants';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Logo from '../Logo';
import Button from '../Button';

const HeaderActions = () => {
  return (
    <ActionGroup>
      <button>
        <Search size={24} />
      </button>
      <button>
        <Menu size={24} />
      </button>
    </ActionGroup>
  )
}

const HeaderProfile = () => {
  return (
      <ActionGroup>
        <button>
          <User size={24} />
        </button>
      </ActionGroup>
  )
}

const MemberLink = styled.a`
  font-style: italic;
  text-decoration: underline;
  color: ${COLORS.gray["900"]};
`

const SubscribeActions = styled.div`
  text-align: center;
  width: max-content;
`

const Subscribe = () => {
  return (
    <SubscribeActions>
      <Button >Subscribe</Button>
      <MemberLink href="#">Already a subscriber?</MemberLink>
    </SubscribeActions>
  )
}

const HideOnMobile = styled.div`
  display: none;
  @media ${QUERIES.laptopAndUp} {
    display: block;
  }
`

const HideOnDesktop = styled.div`
  @media ${QUERIES.laptopAndUp} {
    display: none;
  }
`

const Header = () => {
  return (
    <header>
      <HideOnDesktop>
        <SuperHeader>
          <Row>
            <HeaderActions />
            <HeaderProfile />
          </Row>
        </SuperHeader>
      </HideOnDesktop>
      <MainHeader>
        <HideOnMobile>
          <HeaderActions />
        </HideOnMobile>
        <Logo />
        <HideOnMobile>
          <Subscribe />
        </HideOnMobile>
      </MainHeader>
    </header>
  );
};

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;

  @media ${QUERIES.laptopAndUp} {
    display: none;
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;
  
  grid-template-columns: 1fr;
  @media ${QUERIES.laptopAndUp} {
    grid-template-columns: 1fr auto 1fr;
    > *:first-of-type {
      justify-self: start;
    }
    > *:last-of-type {
      justify-self: end;
      align-self: end;
    }
  }
`;

export default Header;
