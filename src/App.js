import './App.css';
import Header from './components/Header/Header';
import SearchBar from './components/Search/SearchBar';
import Card from './components/Card/Card';
function App() {
  return (
    <div className="container">
      <Header />
      <SearchBar />
      <Card />
    </div>
  );
}

export default App;
