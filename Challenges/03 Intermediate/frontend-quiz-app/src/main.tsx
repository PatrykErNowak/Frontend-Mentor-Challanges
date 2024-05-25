import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { QuizProvider } from './contexts/QuizContext/QuizContext.tsx';
import { ThemeProvider } from './contexts/ThemeContext/ThemeContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <QuizProvider>
        <App />
      </QuizProvider>
    </ThemeProvider>
  </React.StrictMode>
);
