import {Clock} from './clock'
import { Game } from './game';
import { LoginControl } from './login';
import ReactDOM from 'react-dom/client';

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <div>
        <Game/>
        <Clock/>
        <LoginControl/>
    </div>
);