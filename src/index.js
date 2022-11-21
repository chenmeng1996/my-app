import { Pane, WelcomeDialog, WelcomeDialogWithChildren } from './layout';

import {Clock} from './clock'
import { ContextDemo } from './context';
import { Example } from './hook/useEffectDemo';
import { Game } from './game';
import { LoginControl } from './login';
import { NameForm } from './form';
import { NumberList } from './list';
import ReactDOM from 'react-dom/client';
import { themes } from './theme-context';

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    // <Pane />
    <div>
        <Game/>
        <Clock/>
        <LoginControl/>
        <NumberList numbers={[1, 2, 3]}/>
        <NameForm/>
        <WelcomeDialog />
        <WelcomeDialogWithChildren />
        <ContextDemo theme={themes.dark}/>
        <Example/>
    </div>
);