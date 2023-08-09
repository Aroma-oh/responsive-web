import styled from 'styled-components';

interface CardProps {
  mb?: number;
  tb?: number;
  pb?: number;
}

/**
 * Props:
 * - mb: Mobile Flex Basis(number)
 * - tb: Tablet Flex Basis(number)
 * - pb: PC Flex Basis(number)
 */

export const CardStyled = styled.div<CardProps>`
    flex: ${({ pb }) => pb ? `1 1 ${pb}%` : `30%`};

    height: 130px;
    margin: 6px;
    background-color: beige;

    @media (max-width: 480px) {
      flex: ${({ mb }) => mb ? `1 1 ${mb}%` : `100%`};
    }
    @media ((min-width: 480px) and  (max-width: 900px)) {
      flex: ${({ tb }) => tb ? `1 1 ${tb}%` : `40%`};
    }
`