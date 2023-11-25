import React, { useContext, useEffect } from 'react';
import QuoteContext from '../Context/QuoteContext';
import {getData} from '../Context/QuoteActions';



const QuoteCard = () => {

    const {quoteData , dispatch} = useContext(QuoteContext);

 const handleFetch = async()=>{
  const data = await getData();
  console.log(data);

  dispatch({ 
    type: "GET_QUOTE",
    payload : data,  
    });
 };

useEffect  (()=>{
    handleFetch();
}, []
);

 if (!quoteData){
    return <h1 className='display-5 text-center '> Loading...</h1>
 }

  return (
    <div className='card p-5 m-5 w-50   '>
      <h1 className='card-title '> {quoteData.content} </h1>
<p className="text-secondary text-end mt-5 ">  {quoteData.author }</p>
<button className=' btn btn-dark m-5  ' onClick={handleFetch} > Next </button>
    </div>
  ) 
}

export default QuoteCard;
