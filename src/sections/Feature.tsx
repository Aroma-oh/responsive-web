import { Grid } from '../components/Grid';
import { CardStyled } from '../components/CardStyled';

export const Feature = () => {
  return (
    <Grid p={80}>
      <CardStyled start={1} end={4} />
      <CardStyled start={4} end={7} />
    </Grid>
  )
}
