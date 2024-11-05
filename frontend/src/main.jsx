import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { SingIn } from './app/SingIn.jsx';
import { SingUp } from './app/SIngUp.jsx';
import { Home } from './app/Home.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SingIn />
  </StrictMode>,
)
