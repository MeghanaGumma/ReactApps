import './App.css';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Shorts from './components/Shorts';
import Subscriptions from './components/Subscriptions';
import Music from './components/Music';
import Gaming from './components/Gaming';
import MoviesShows from './components/MoviesShows';
import Err404 from './components/Err404';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <div className='container-fluid'>
        <div className='row'>
          <BrowserRouter>
            <Sidebar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="*" element={<Err404 />} />
              <Route path="/Home" element={<Home />} />
              <Route path="/Shorts" element={<Shorts />} />
              <Route path="/Subscriptions" element={<Subscriptions />} />
              <Route path="/Music" element={<Music />} />
              <Route path="/Gaming" element={<Gaming />} />
              <Route path="/MoviesShows" element={<MoviesShows />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </>
  );
}

export default App;
