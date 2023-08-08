import { styled } from 'styled-components';
import { Grid } from '../component/Grid';

interface CardProps {
  start: number;
  end: number;
}

export const Hero = () => {
  const arr = ['a', 'b', 'x'];
  console.log(arr.length)
  return (
    <Grid p={80}>
      <CarouselStyled />
      <CardStyled start={1} end={3} />
      <CardStyled start={3} end={5} />
      <CardStyled start={5} end={7} />
    </Grid>)
}

const CarouselStyled = styled.div`
  grid-column: 1 / 7;
  min-height: 300px;
  background-color: #D4E2D4;
`

const CardStyled = styled.div<CardProps>`
  grid-column: ${(props) => `${props.start} / ${props.end}`};
  min-height: 400px;
  background-color: #D4E2D4;
`