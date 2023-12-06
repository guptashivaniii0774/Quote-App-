import React, { useContext, useEffect, useState } from 'react';
import QuoteContext from '../Context/QuoteContext';
import { getData } from '../Context/QuoteActions';
import { FaVolumeUp, FaTwitter, FaCopy, FaQuoteRight, FaQuoteLeft } from 'react-icons/fa';

const QuoteCard = () => {
  const { quoteData, dispatch } = useContext(QuoteContext);
  const [loading, setLoading] = useState(false);

  const onNewQuote = async () => {
    setLoading(true);
    try {
      const data = await getData();
      dispatch({
        type: 'GET_QUOTE',
        payload: data,
      });
    } finally {
      setLoading(false);
    }
  };

  const speakQuote = () => {
    let utterance = new SpeechSynthesisUtterance(`${quoteData.content} By ${quoteData.author}`);
    speechSynthesis.speak(utterance);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(quoteData.content);
  };

  const tweetQuote = () => {
    let tweetUrl = `https://twitter.com/shivaniii0774?url=${quoteData.content}`;
    window.open(tweetUrl, '_blank');
  };

  useEffect(() => {
    onNewQuote();
  }, []);

  if (!quoteData) {
    return (
      <h1>
  Loading Please Wait...
     
    </h1>
    );
  }

  return (
    <div className="quote-card">
      <h1>
        {' '}
        <FaQuoteLeft className='quotes-tag' /> {quoteData.content} <FaQuoteRight className='quotes-tag tag-2' />{' '}
      </h1>
      <p>
        {' '}
        <span>__</span> {quoteData.author}
      </p>

      <div className="features">
        <span className='functions'>
          <button onClick={speakQuote}>
            {' '}
            <FaVolumeUp />
          </button>
          <button onClick={copyToClipboard}>
            <FaCopy />
          </button>
          <button onClick={tweetQuote}>
            {' '}
            <FaTwitter />
          </button>
        </span>
        <button onClick={onNewQuote} disabled={loading}>
          {loading ? 'Loading...' : 'New Quote'}
        </button>
      </div>
    </div>
  );
};

export default QuoteCard;
