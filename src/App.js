import './App.css';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import Footer from './Component/Footer/Footer';
import Header2 from './Component/Header2/Header2';
import Header1 from './Component/Header1/Header1';
import ExploreRef from './Component/ExploreRef/ExploreRef';
import ExploreReducer from './Component/ExploreReducer/ExploreReducer';
import ExploreReducerCollection from './Component/ExploreReducerCollection/ExploreReducerCollection';

function App() {
  return (
    <div className="App">
     <Header />
     <Home />
     <Footer />
     <ExploreRef />
     <ExploreReducer />
     <ExploreReducerCollection />
     <Header2 />
     <Header1 />
    </div>
  );
}

export default App;
