import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import store, { persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import ReactQueryClientProvider from './utils/react-query-client.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ReactQueryClientProvider>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <BrowserRouter>
                        <App />
                    </BrowserRouter>
                </PersistGate>
            </Provider>
        </ReactQueryClientProvider>
    </React.StrictMode>
);
