import React from 'react';
import styled from 'styled-components/macro';

import { MARKET_DATA, SPORTS_STORIES } from '../../data';

import MarketCard from '../MarketCard';
import SectionTitle from '../SectionTitle';
import MiniStory from '../MiniStory';
import {COLORS, QUERIES} from "../../constants";

const SpecialtyStoryGrid = () => {
  return (
    <Wrapper>
      <MarketsSection>
        <SectionTitle
          cornerLink={{
            href: '/markets',
            content: 'Visit Markets data »',
          }}
        >
          Markets
        </SectionTitle>
        <MarketCards>
          {MARKET_DATA.map((data) => (
            <MarketCard key={data.tickerSymbol} {...data} />
          ))}
        </MarketCards>
      </MarketsSection>
      <SportsSection>
        <SectionTitle
          cornerLink={{
            href: '/sports',
            content: 'Visit Sports page »',
          }}
        >
          Sports
        </SectionTitle>
        <SportsStories>
          {SPORTS_STORIES.map((data) => (
            <SportsStoriesWrapper key={data.id}>
              <MiniStory {...data} />
            </SportsStoriesWrapper>
          ))}
        </SportsStories>
      </SportsSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  gap: 3rem;

  @media ${QUERIES.tabletAndUp} {
    gap: 4rem;
    grid-template-columns: minmax(0px, auto);
  }
  
  @media ${QUERIES.laptopAndUp} {
    grid-template-columns: minmax(0px, 1fr) minmax(0px, 1fr);
    gap: 2rem;
    
    > *:not(:last-of-type) {
      border-right: 1px solid ${COLORS.gray["300"]};
      padding-right: 1rem;
      margin-right: -1rem;
    }
  }
`;

const MarketsSection = styled.section``;

const MarketCards = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
`;

const SportsSection = styled.section``;

const SportsStories = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  overflow-x: auto;

  @media ${QUERIES.tabletAndUp} {
    display: flex;
  }
`;

const SportsStoriesWrapper = styled.div`
  min-width: 220px;
`

export default SpecialtyStoryGrid;
