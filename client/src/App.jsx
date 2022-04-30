import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage';
import SwapPage from './pages/SwapPage';
import { Navbar } from './components/WelcomeComponents';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={WelcomePage} />
        <Route path='/swap' component={SwapPage} />
      </Switch>
    </Router>
  );
}

export default App;
