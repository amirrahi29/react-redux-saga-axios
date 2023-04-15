import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import { Provider } from 'react-redux';
import store from '../redux/store';
import AddProduct from '../components/AddProduct'

const App = () => {
  return (
    <>
      <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/addProduct' element={<AddProduct />} />
        </Routes>
      </BrowserRouter>
      </Provider>
    </>
  )
}

export default App;
