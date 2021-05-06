//Components & Pages
import Home from './pages/Home';
import GlobalStyles from './utils/globalStyles';
import { Route } from 'react-router-dom';
import Nav from './components/Nav/index';

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <Route path={['/game/:id', '/']}>
        <Home />
      </Route>
    </div>
  );
}

export default App;
