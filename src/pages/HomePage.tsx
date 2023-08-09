import { Link } from 'react-router-dom';

export const HomePage = () => {
  return (
    <>
      <Link to='/grid'>Grid</Link>
      <Link to='/flex'>Flex</Link>
    </>
  )
}