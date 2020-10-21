import React, {useState} from 'react';
import ConvertForm from './components/ConvertForm'
import { useAsync } from 'react-async';
import './App.css';


// function displayConversion() {
  
// };

function App() {
  const [amount, setAmount] = useState(0);
  const [nativeCurrency, setNativeCurrency] = useState('');
  const [foreignCurrency, setForeignCurrency] = useState('');
  // const [convertedAmount, setConvertedAmount] = useState(0);
  

  const convertAmount = async () => {
    console.log({amount})
    console.log({nativeCurrency})
    console.log({foreignCurrency})
    const BASE_URL = `https://api.exchangeratesapi.io/latest?base=${nativeCurrency}`
    fetch(BASE_URL, {
      method: "GET",
    })  
      .then(res => (res.json())
      .then(res => {
        console.log(res)
      })
    );

    // var exchangeRate = 0;
  
    // setConvertedAmount(amount/= exchangeRate);

    if(!amount || !nativeCurrency || !foreignCurrency) return
  }


  return (
    <div className="App">
      <ConvertForm 
        amount={amount} 
        nativeCurrency={nativeCurrency} 
        foreignCurrency={foreignCurrency}
        setAmount={setAmount}
        setNativeCurrency={setNativeCurrency}
        setForeignCurrency={setForeignCurrency}
        convertAmount={convertAmount}
      />
    </div>
  );
}

export default App;
