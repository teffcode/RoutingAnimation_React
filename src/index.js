import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';

const AppRender = () => (
    <Router>
        <App/>
    </Router>
);

ReactDOM.render(<AppRender />, document.getElementById('root'));
registerServiceWorker();
