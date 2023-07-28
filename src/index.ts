import './index.html';
import "./assets/index.scss";
import { Social } from './components/social/Social';
import { Toolbar } from './components/toolbar/Toolbar';

const social = new Social('#app', {
    components: [Toolbar],
});

social.render();