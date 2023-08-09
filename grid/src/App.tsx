import { Routes, Route } from 'react-router-dom';
import { HomePage } from 'pages/HomePage';
import { GridPage } from 'pages/GridPage';
import { FlexPage } from 'pages/FlexPage';

function App() {

  return (
    <Routes>
      <Route path="/" Component={HomePage} />
      <Route path="/grid" Component={GridPage} />
      <Route path="/flex" Component={FlexPage} />
    </Routes>
  )
}

export default App
