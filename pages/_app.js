import '@styles/defaultStyles.css';
import { useState } from 'react';
import { Context } from '../context';

export default function MyApp({ Component, pageProps }) 
{ 
  const [filterTransactions, setFilterTransactions] = useState()
  
  return (
    <Context.Provider value={[filterTransactions, setFilterTransactions]}>
      <Component {...pageProps} />
    </Context.Provider>
)}