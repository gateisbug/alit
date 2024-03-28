import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import { Loading } from '@components';
import { routes } from '@views/routes';

import RootProvider from './RootProvider';

const ErrorBoundary = lazy(async () => await import('./ErrorBoundary'));

function App() {
  return (
    <RootProvider>
      <Routes>
        <Route path='/'>
          {routes.map(({ path, Component, props = {}, Fallback = Loading }) => {
            return (
              <Route
                path={path}
                key={path}
                element={
                  <Suspense fallback={<Fallback />}>
                    <ErrorBoundary>
                      <Component {...props} />
                    </ErrorBoundary>
                  </Suspense>
                }
              ></Route>
            );
          })}
        </Route>
      </Routes>
    </RootProvider>
  );
}

export default App;
