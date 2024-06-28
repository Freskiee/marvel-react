import 'semantic-ui-css/semantic.min.css';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Series from './pages/Series';
import Comics from './pages/Comics';
import Error404 from './pages/Error404';
import Header from './components/Header';
import useFetch from './hooks/useFetch';

function App() {
  const exampleApi = useFetch('http://gateway.marvel.com/v1/public/comics?ts=1&apikey=b28a39a4cedf58fa622e122165448d21&hash=b5429bd28fcc797f0eb1b0de1b715413');
  console.log(exampleApi);
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/inicio' element={<Home />} />
          <Route path='/series' element={<Series />} />
          <Route path='/comics' element={<Comics />} />
          <Route path='*' element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
