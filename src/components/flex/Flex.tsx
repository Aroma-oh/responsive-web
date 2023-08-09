import styled from 'styled-components';
import { ReactNode } from 'react';

interface FlexProps {
  direction?: string;
  wrap?: string;
  children: ReactNode;

}

/**
 * Props:
 * - direction: 플렉스 디렉션 (row | column)
 * - wrap: 플렉스 랩 (nowrap | wrap | wrap-reverse)
 * - children: component
 */

export const Flex = ({ direction, wrap, children }: FlexProps) => {
  return (
    <FlexStyled direction={direction} wrap={wrap}>{children}</FlexStyled>
  )
}

const FlexStyled = styled.section<FlexProps>`
  display: flex;
  flex-direction: ${({ direction }) => direction ? `${direction}` : `row`};
  flex-wrap: ${({ wrap }) => wrap ? `${wrap}` : `wrap`};
`