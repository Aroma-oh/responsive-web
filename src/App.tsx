import { Routes, Route } from 'react-router-dom';
import { HomePage } from 'pages/HomePage';
import { GridPage } from 'pages/GridPage';
import { FlexPage } from 'pages/FlexPage';

function App() {

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/grid" element={<GridPage />} />
      <Route path="/flex" element={<FlexPage />} />
    </Routes>
  )
}

export default App
