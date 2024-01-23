import { Routes, Route } from 'react-router-dom';
import RootProvider from './RootProvider';
import { routes } from '@views/routes';
import { Suspense } from 'react';
import ErrorBoundary from '@views/ErrorBoundary';

function Loading() {
  return <div>Loading...</div>;
}

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
