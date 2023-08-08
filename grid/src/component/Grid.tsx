import { ReactNode } from 'react';
import styled from 'styled-components';

interface GridProps {
  mt?: number;
  mb?: number;
  p?: number;
  children: ReactNode;
}

/**
 * Props:
 * - mt?: margin-top
 * - mb?: margin-bottom
 * - p?: padding left & right
 * - children: component
 */

export const Grid = ({ mt, mb, p, children }: GridProps) => {
  return (
    <GridStyled mt={mt} mb={mb} p={p}>{children}</GridStyled>
  )
}

const GridStyled = styled.section<GridProps>`
  display: grid;
  gap: 25px;
  grid-template-columns: repeat(6, 1fr);
  margin-top: ${({ mt }) => mt ? `${mt}px` : `25px`};
  margin-bottom: ${({ mb }) => mb ? `${mb}px` : `25px`};
  padding: ${({ p }) => p ? `0 ${p}px` : `0 110px`};
`