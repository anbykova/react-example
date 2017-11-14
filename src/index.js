import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore';  
import { Provider } from 'react-redux';

import { AppContainer } from 'react-hot-loader';
import Root from './root';

const store = configureStore();
    
ReactDOM.render(
    <AppContainer>
        <Root
            store={ store }
        />
    </AppContainer>,
    document.getElementById('root')
);

if (module.hot) {
    module.hot.accept('./root', () => {
    const RootContainer = require('./root').default;
    render(
        <AppContainer>
            <RootContainer
                store={ store }
            />
        </AppContainer>,
        document.getElementById('root')
    );
    });
}
registerServiceWorker();
