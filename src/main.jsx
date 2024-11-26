import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import {restaurants} from "./constants/mocks/mock.js";

createRoot(document.getElementById('root')).render(
    <App restaurants={restaurants}/>
)
