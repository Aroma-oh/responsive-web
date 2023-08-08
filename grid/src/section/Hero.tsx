import { Grid } from '../component/Grid';
import { CarouselStyled } from '../component/CarouselStyled';
import { CardStyled } from '../component/CardStyled';

export const Hero = () => {
  return (
    <Grid p={80}>
      <CarouselStyled />
      <CardStyled start={1} end={3} />
      <CardStyled start={3} end={5} />
      <CardStyled start={5} end={7} />
    </Grid>)
}

