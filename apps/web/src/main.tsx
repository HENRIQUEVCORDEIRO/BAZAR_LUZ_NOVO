import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './app/App';
// Fontes do brandbook servidas pelo próprio app (CSP 'self': nada de CDN).
import '@fontsource-variable/lora/wght.css';
import '@fontsource-variable/nunito/wght.css';
import './styles/index.css';

createRoot(document.getElementById('root')!).render(<StrictMode><App /></StrictMode>);
