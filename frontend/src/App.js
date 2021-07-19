import React, { Suspense } from 'react';
import { Loading, Layout, Header, LayoutContent, Routing } from './components';
import { BrowserRouter, Switch, Redirect } from 'react-router-dom';
import numeral from 'numeral';
import 'numeral/locales'; 
import { ROUTES } from './config/routes';

import './App.less';

const Page404 = React.lazy(() => import('./pages/Page404'));
numeral.locale('pt-br');

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Layout className="App">
          <Header routes={ROUTES}/>
          <LayoutContent>
            <Switch>
              {ROUTES.map(({ path, title, component }) => (
                <Routing
                  key={path}
                  path={path}
                  exact={true}
                  component={component}
                  title={title}
                />
              ))}
              <Redirect path="/" to="/home" exact={true} />
              <Routing path="*" component={Page404} />
            </Switch>
          </LayoutContent>
        </Layout>
      </Suspense>
    </BrowserRouter>
  )
}

export default App;
