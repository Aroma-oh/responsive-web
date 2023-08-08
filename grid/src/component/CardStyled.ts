import { styled } from 'styled-components';

interface CardProps {
  start: number;
  end: number;
}

/**
 * Props:
 * - start: 그리드 열의 시작
 * - end: 그리드 열의 종료
 */

export const CardStyled = styled.div<CardProps>`
  grid-column: ${(props) => `${props.start} / ${props.end}`};
  min-height: 400px;
  background-color: #D4E2D4;
`