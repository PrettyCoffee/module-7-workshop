import React from 'react';
import styled, { css } from 'styled-components/macro';

import {
  MAIN_STORY,
  OPINION_STORIES,
  SECONDARY_STORIES,
} from '../../data';

import SectionTitle from '../SectionTitle';
import MainStory from '../MainStory';
import SecondaryStory from '../SecondaryStory';
import OpinionStory from '../OpinionStory';
import Advertisement from '../Advertisement';
import { COLORS, QUERIES } from "../../constants";

const MainStoryGrid = () => {
  return (
    <Wrapper>
      <MainStorySection>
        <MainStory {...MAIN_STORY} />
      </MainStorySection>

      <SecondaryStorySection>
        <SecondaryStoryList>
          {SECONDARY_STORIES.map((story, index) => (
            <SecondaryStory key={story.id} {...story} />
          ))}
        </SecondaryStoryList>
      </SecondaryStorySection>

      <OpinionSection>
        <SectionTitle>Opinion</SectionTitle>
        <OpinionList>
          {OPINION_STORIES.map((story, index) => (
            <OpinionStory key={story.id} {...story} />
          ))}
        </OpinionList>
      </OpinionSection>

      <AdvertisementSection>
        <Advertisement />
      </AdvertisementSection>
    </Wrapper>
  );
};

const gridBorder = ({ side, offset, reset }) =>
  reset
    ? css`
      border-${side}: none;
      padding-${side}: 0;
      margin-${side}: 0;
    `
    : css`
      border-${side}: 1px solid ${COLORS.gray["300"]};
      padding-${side}: ${offset};
      margin-${side}: calc(-1 * ${offset});
    `

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    'main-story'
    'secondary-stories'
    'opinion-stories'
    'advertisement';
  gap: 3rem;
  margin-bottom: 48px;
  
  @media ${QUERIES.tabletAndUp} {
    grid-template-areas:
    'main-story secondary-stories'
    'advertisement advertisement'
    'opinion-stories opinion-stories';
    grid-template-columns: 2fr 1fr;
  }

  @media ${QUERIES.laptopAndUp} {
    grid-template-areas:
    'main-story secondary-stories opinion-stories'
    'main-story advertisement advertisement';
    grid-template-columns: 2fr 1.5fr 1fr;
  }
`;

const MainStorySection = styled.section`
  grid-area: main-story;

  @media ${QUERIES.tabletAndUp} {
    ${gridBorder({side: "right", offset: "1.5rem"})}
  }
`;

const SecondaryStorySection = styled.section`
  grid-area: secondary-stories;
`;

const StoryList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  
  > *:not(:last-of-type) {
    ${gridBorder({ side: "bottom", offset: "1rem" })}
  }
`;

const SecondaryStoryList = styled(StoryList)`
  @media ${QUERIES.laptopAndUp} {
    ${gridBorder({ side: "right", offset: "1.5rem" })}
  }
`;

const OpinionList = styled(StoryList)`
  @media ${QUERIES.tabletOnly} {
    flex-direction: row;
    > * {
      flex: 1;
    }
    > *:not(:last-of-type) {
      ${gridBorder({ side: "bottom", reset: true })}
      ${gridBorder({ side: "right", offset: "1rem" })}
    }
  }
`;

const OpinionSection = styled.section`
  grid-area: opinion-stories;
`;

const AdvertisementSection = styled.section`
  grid-area: advertisement;

  @media ${QUERIES.laptopAndUp} {
    ${gridBorder({ side: "top", offset: "1.5rem" })}
  }
`;

export default MainStoryGrid;
