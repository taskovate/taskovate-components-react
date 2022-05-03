import React, { useState } from 'react';
import styled from 'styled-components';
import { colors, borderRadius, gridSize, animation } from '@theme/constants';
import { Tooltip } from '@components/core';
import { ShowcaseArea } from '.';

const FlexRow = styled.div`
  display: grid;
  grid-template-columns: 80px 80px 80px 80px 80px 80px 80px 80px 80px;
  row-gap: ${gridSize() * 3}px;
  margin-bottom: ${gridSize() * 2}px;
`;

const Color = styled.div`
  display: flex;
  height: ${gridSize() * 6}px;
  width: ${gridSize() * 6}px;
  border-radius: ${borderRadius() * 1}px;
  background-color: red;
  background-color: ${props => props.color};
  margin-top: ${gridSize() * 1}px;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  box-shadow: ${({ theme }) => theme.elevation[200]};
  transition: ${animation.slow()};
  transform: translate(0, 4px);
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  small {
    margin-top: 0;
  }

  :hover { 
    ${Color} {
      box-shadow: ${({ theme }) => theme.elevation[300]};
      transform: translate(0, 0px);
      z-index: 10;
    }
  }
`;

const initialTooltip = 'Click Color to Copy';

const ColorsShowcase = ({
  include,
}: any) => {
  const [tooltip, setTooltip] = useState(initialTooltip);

  const copyToClipboard = async (hexCode: any) => {

    navigator.clipboard.writeText(hexCode)
    .then(() => {
      setTooltip('Copied to Clipboard! 😀');
    })
    .catch(() => {
      setTooltip('Something went wrong. 😭')
    });
  };

  const colorsKeys = Object.keys(colors);

  const renderColorGrid = () => colorsKeys.filter(palette => include.includes(palette)).map(palette => {
    const paletteKeys = Object.keys((colors as any)[palette]);

    return paletteKeys.map((name, index) => {
      const hexCode = (colors as any)[palette][name];

      return (
        <Tooltip key={hexCode} label={tooltip} placement='bottom'>
          <Container onMouseEnter={() => setTooltip(initialTooltip)}>
            <small>{palette}[{name}]</small>
            <Color 
              color={hexCode}
              onClick={() => copyToClipboard(hexCode)}
            />
          </Container>
        </Tooltip>
      );
    });
  });

  return (
    <ShowcaseArea>
      <FlexRow>
        {renderColorGrid()}
      </FlexRow>
    </ShowcaseArea>
  );
};

export default ColorsShowcase;