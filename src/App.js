import useApi from './utils/useApi';

function App() {
  const [popularGamesURL] = useApi();
  return <div className="App">{popularGamesURL}</div>;
}

export default App;
