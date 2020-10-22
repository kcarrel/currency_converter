import React, {useEffect, useState} from 'react';
import ConvertForm from './components/ConvertForm'
import ConversionDisplay from './components/ConversionDisplay'
import './App.css';


function App() {
  const [amount, setAmount] = useState(0);
  const [nativeCurrency, setNativeCurrency] = useState('');
  const [foreignCurrency, setForeignCurrency] = useState('');
  const [rate, setRate] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);


  // Calls the Exchange Rates API upon ConvertForm submission to retrieve
  // exchange rates based on the native currency selected in form 
  const getRate = e => {
    e.preventDefault()
    const BASE_URL = `https://api.exchangeratesapi.io/latest?base=${nativeCurrency}`
    fetch(BASE_URL, {
      method: "GET",
    })  
      .then(res => res.json())
      .then(json => {
        var rates = json.rates;
        for (var i in rates)  {
          if (i === foreignCurrency) { 
            setRate(rates[i]); 
          }
        }
      })
      .catch(err => {
        console.log(err);
      })
  }

  useEffect(() => {
    setConvertedAmount(amount*rate)
  }, [amount,rate])


  return (
    <div className="App">
      <ConvertForm 
        amount={amount} 
        nativeCurrency={nativeCurrency} 
        foreignCurrency={foreignCurrency}
        setAmount={setAmount}
        setNativeCurrency={setNativeCurrency}
        setForeignCurrency={setForeignCurrency}
        getRate={getRate}
      />
      <ConversionDisplay 
        amount={amount}
        nativeCurrency={nativeCurrency} 
        foreignCurrency={foreignCurrency}
        convertedAmount={convertedAmount} 
      />
    </div>
  );
}

export default App;
