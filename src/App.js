import React, { useState } from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { withStyles, } from '@material-ui/core/styles';
import MuiAlert from '@material-ui/lab/Alert';
import ConvertForm from './components/ConvertForm'
import ConversionDisplay from './components/ConversionDisplay'
import './App.css';


function App() {
  const [amount, setAmount] = useState(0);
  const [nativeCurrency, setNativeCurrency] = useState('');
  const [foreignCurrency, setForeignCurrency] = useState('');
  const [conversionDisplay, setConversionDisplay] = useState(false);
  const [errorDisplay, setErrorDisplay] = useState(false);
  const [convertedAmount, setConvertedAmount] = useState(0);

  const StyledAppBar = withStyles({
    root: {
      background: '#08402b',
    },
  })(AppBar);

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  const handleClose = (event) => {
    setErrorDisplay(false);
  };
  // Calls the Exchange Rates API upon ConvertForm submission to retrieve
  // exchange rates based on the native currency selected in form 
  const getRate = e => {
    e.preventDefault();
    if (amount === '' || nativeCurrency === '' || foreignCurrency === '') {
      setErrorDisplay(true);
    }
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
            setErrorDisplay(false);
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
          <Typography textalign="center" variant="h6">
            Currency Converter
          </Typography>
        </Toolbar>
      </StyledAppBar>
      {errorDisplay ? (
        <Alert className="alert" onClose={handleClose} severity="error">All fields in the form must be filled out!</Alert>
      ) : (
        null
      )}
      <ConversionDisplay 
        amount={amount}
        conversionDisplay={conversionDisplay}
        nativeCurrency={nativeCurrency} 
        foreignCurrency={foreignCurrency}
        convertedAmount={convertedAmount} 
      />
      <ConvertForm 
        amount={amount} 
        nativeCurrency={nativeCurrency} 
        foreignCurrency={foreignCurrency}
        setAmount={setAmount}
        setNativeCurrencyInput={setNativeCurrencyInput}
        setForeignCurrencyInput={setForeignCurrencyInput}
        getRate={getRate}
      />
    </div>
  );
}

export default App;
