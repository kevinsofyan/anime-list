import { BrowserRouter } from 'react-router-dom';
import './App.css'
import DefaultRouter from './router/router';

function App() {
  return (
    <BrowserRouter>
      <DefaultRouter />
    </BrowserRouter>
  );
}

export default App
