import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import MainRoutes from './routes/Routes';
import Loading from '@components/Loading/Loading';
import { ErrorBoundary } from 'react-error-boundary';
import 'primereact/resources/themes/lara-light-cyan/theme.css';
import { ErrorBoundaryComponent } from './components/ErrorBoundary';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <ErrorBoundary fallback={<ErrorBoundaryComponent />}>
      <React.Suspense fallback={<Loading />}>
        <React.Fragment>
          <MainRoutes />
          <Toaster autoClose={3000} position="top-center" />
        </React.Fragment>
      </React.Suspense>
    </ErrorBoundary>
  );
}

export default App;
