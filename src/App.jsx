import React from 'react';
import QuoteCard from './Components/QuoteCard';
import { QuoteProvider } from './Context/QuoteContext';

 const App = () =>{
 return(<QuoteProvider>
  <div className=' Container d-flex flex-column align-items-center p-5'>
    <h1 className='display-3 text-center'> Quote Of The Day </h1>
  <QuoteCard />
  
  </div>
  </QuoteProvider>

 );
 };

export default App
