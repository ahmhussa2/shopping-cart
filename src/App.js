import React from 'react';
import  { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux';
import Header from './components/header/header';
import './App.scss';
import Homepage from './pages/homepage/homepage';
import Products from './pages/products/products';
import SignIn from './pages/signin/signin';
import Register from './pages/register/register';
import Footer from '../src/components/footer/footer';
import store from './redux/store';

export const CategoriesContext = React.createContext();

const  App = () => {
  const [categoriesData, setCategoriesData] = useState([]);
  useEffect(() => {
    fetch('http://localhost:9000/categories')
      .then(response => response.json())
      .then(data => {
        setCategoriesData(data.categories);
      })
      .catch(err => console.error(err));
  },[]);

  return (
    <Provider store={store}>
      <div className="App">
        <Header />
          <Switch>
            <CategoriesContext.Provider value={categoriesData}>
              <Route exact path="/" component={Homepage} />
              <Route path="/products" component={Products} />
              <Route path="/signin" component={SignIn} />
              <Route path="/register" component={Register} />
            </CategoriesContext.Provider>
          </Switch>
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
