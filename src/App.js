import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { Weather } from './component/ReactEvent/Weather';
import { Yupform } from './component/Form/Yupform';
import { Params } from './component/ParamsDemo/ParamsDemo';

function App() {
  return (
    <div className="App container-fluid">
      <BrowserRouter>
        <header className='d-flex justify-content-between border border-3 p-3 mt-5 mx-4 bg-secondary'>
          <div className='fs-2 text-white'>Shopper.</div>
          <nav className='d-flex bg-success align-items-center '>
            <span ><Link className='btn btn-success' to="Home">Home</Link></span>
            <span className='mx-4'><Link className='btn btn-success' to="Men">Men</Link></span>
            <span className=''><Link className='btn btn-success' to="Women">Women</Link></span>
            <span className='mx-4'><Link className='btn btn-success' to="Kid">Kid</Link></span>
          </nav>
          <div className='d-flex align-items-center'>
            <Link to='Weather'><span className='btn text-white  bi bi-cloud-drizzle-fill fs-5'></span></Link>
            <Link to='login'><span className='btn text-white bi bi-person-fill mx-3 fs-5'></span></Link>
            <span className='btn text-white bi bi-cart3 fs-5'></span>
          </div>
        </header>
        <div className='mt-4 mx-4'>
          <Routes>
            <Route path='/'  element={<div><div>There is Offer is running</div><code>Flat 40% Off</code></div>}/>
            <Route path='Home' element={<div><div>There is Offer is running</div><code>Flat 40% Off</code></div>} />
            <Route path='Men' element={<div><h3 text-center>Men's Clothing</h3><img src="Men-shopping.jpg" width='400' height='500' alt='Men' /> </div>} />
            <Route path='Women' element={<div><h3>Women's Clothing</h3><img src="Women-shopping.jpg" width='400' height='500' alt='Women' /> </div>} />
            <Route path='Kid' element={<div><h3>Kid's Clothing</h3><img src='kid-shopping.jpg' width='400' height='500' alt='Kid' /></div>} />
            <Route path='Weather' element={<Weather/>}/>
            <Route path='login' element={<Yupform/>}/>
            <Route path='Products/:Product/:category/:brand' element={<Params/>}/>
            <Route path='*' element={<div className='fs-1 fw-bold text-danger'>404-Not Found</div>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

