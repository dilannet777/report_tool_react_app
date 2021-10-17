import { Route, Switch } from 'react-router-dom';

import TurnoverReportsPage from './pages/Reports/TurnOverReports';
import AllReportPage from './pages/AllReports';

import Layout from './components/layout/Layout';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <AllReportPage />
        </Route>
        <Route path='/report/turnover'>
          <TurnoverReportsPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;