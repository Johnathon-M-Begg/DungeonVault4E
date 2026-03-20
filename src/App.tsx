import { Box } from '@mui/material';
import AppHeader from './AppHeader/AppHeader.tsx';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import NewCharacterBase from './AppHeader/newCharacter/NewCharacterBase.tsx';

function Home() {
  const navigate = useNavigate();
  return (
    <Box className="h-screen flex flex-col justify-center items-center">
      <AppHeader
        title="Vite + React"
        subtitle="Starter App"
      />
      <button
        className="mt-8 px-4 py-2 bg-blue-500 text-white rounded"
        onClick={() => navigate('/new')}
      >
        Go to New Page
      </button>
    </Box>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<NewCharacterBase />} />
      </Routes>
    </BrowserRouter>
  );
}
