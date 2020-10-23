import React, {useEffect, useState} from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { withStyles, } from '@material-ui/core/styles';
import ConvertForm from './components/ConvertForm'
import ConversionDisplay from './components/ConversionDisplay'
import './App.css';


function App() {
  const [amount, setAmount] = useState(0);
  const [nativeCurrency, setNativeCurrency] = useState('');
  const [foreignCurrency, setForeignCurrency] = useState('');
  const [conversionDisplay, setConversionDisplay] = useState(false);
  const [convertedAmount, setConvertedAmount] = useState(0);

  const StyledAppBar = withStyles({
  root: {
    background: '#08402b',
  },
})(AppBar);

  // Calls the Exchange Rates API upon ConvertForm submission to retrieve
  // exchange rates based on the native currency selected in form 
  const getRate = e => {
    e.preventDefault();
    const BASE_URL = `https://api.exchangeratesapi.io/latest?base=${nativeCurrency}`
    fetch(BASE_URL, {
      method: "GET",
    })  
      .then(res => res.json())
      .then(json => {
        var rates = json.rates;
        for (var i in rates)  {
          if (i === foreignCurrency) { 
            setConvertedAmount(Math.round((amount*rates[i]) * 100)/100)
            setConversionDisplay(true);
          }
        }
      })

      .catch(err => {
        console.log(err);
      })
  }
  
  const setForeignCurrencyInput = e => {
    setConversionDisplay(false);
    setForeignCurrency(e);
  }

  const setNativeCurrencyInput = e => {
    setConversionDisplay(false);
    setNativeCurrency(e);
  }

  return (
    <div className="App">
      <StyledAppBar>
        <Toolbar>
          <Typography variant="h6">
            Currency Converter
          </Typography>
        </Toolbar>
      </StyledAppBar>
      <ConvertForm 
        amount={amount} 
        nativeCurrency={nativeCurrency} 
        foreignCurrency={foreignCurrency}
        setAmount={setAmount}
        setNativeCurrencyInput={setNativeCurrencyInput}
        setForeignCurrencyInput={setForeignCurrencyInput}
        getRate={getRate}
      />
      <ConversionDisplay 
        amount={amount}
        conversionDisplay={conversionDisplay}
        nativeCurrency={nativeCurrency} 
        foreignCurrency={foreignCurrency}
        convertedAmount={convertedAmount} 
      />
    </div>
  );
}

export default App;
