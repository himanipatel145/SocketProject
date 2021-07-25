import React from 'react';
import { BrowserRouter } from "react-router-dom";
import Routes from './route';
import configureStore from './redux/store';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react'

const store = configureStore();
const persistor = persistStore(store);

const App = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <BrowserRouter>
                    <Routes />
                </BrowserRouter >
            </PersistGate>
        </Provider>
    );
}

export default App;
