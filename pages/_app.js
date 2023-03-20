import '@styles/defaultStyles.css';
import { useState } from 'react';
import { Context } from '../context';
import Modal from 'react-modal';

Modal.setAppElement('#modal');

export default function MyApp({ Component, pageProps }) 
{ 
  const [filterTransactions, setFilterTransactions] = useState();
  const [categoriesContext, setCategoriesContext] = useState();

  
  return (
    <Context.Provider value={{
        filterTransactions, setFilterTransactions,
        categoriesContext, setCategoriesContext, Modal
      }}>
      <Component {...pageProps} />
    </Context.Provider>
)}