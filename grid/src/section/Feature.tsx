import { Grid } from '../component/Grid';
import { CardStyled } from '../component/CardStyled';

export const Feature = () => {
  return (
    <Grid p={80}>
      <CardStyled start={1} end={4} />
      <CardStyled start={4} end={7} />
    </Grid>
  )
}
