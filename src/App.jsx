import React from 'react';
import QuoteCard from './Components/QuoteCard';
import { QuoteProvider } from './Context/QuoteContext';

 const App = () =>{
 return(<QuoteProvider>
  <div className='container'>
    <h1 > Quote Of The Day </h1>
  <QuoteCard />
  
  </div>
  </QuoteProvider>

 );
 };

export default App
