import React, { useState } from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { withStyles, makeStyles} from '@material-ui/core/styles';
import MuiAlert from '@material-ui/lab/Alert';
import ConvertForm from './components/ConvertForm'
import ConversionDisplay from './components/ConversionDisplay'


function App() {
  const BASE_URL = 'https://api.exchangeratesapi.io/latest?base=';
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

  const useStyles = makeStyles(theme => ({
    App: {
      backgroundColor: '#395b4e',
      height: '100vh',
    },
    alert: {
        position: 'fixed',
        top: '95%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      },
  }));

  const Alert = (props) => {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  const handleClose = () => {
    setErrorDisplay(false);
  };

  // Calls the Exchange Rates API upon ConvertForm submission to retrieve
  // exchange rates based on the native currency selected in form 
  const getRate = (e) => {
    e.preventDefault();
    if (amount === '' || nativeCurrency === '' || foreignCurrency === '') {
      setErrorDisplay(true);
      return;
    }
    fetch(BASE_URL + nativeCurrency, {
      method: "GET",
    })  
      .then(res => res.json())
      .then(json => {
        setConvertedAmount(Math.round((amount*json.rates[foreignCurrency]) * 100)/100)
        setConversionDisplay(true);
        setErrorDisplay(false);
      })
      .catch(err => {
        console.log(err);
      })
  }
  
  const setAmountInput = (e) => {
    setConversionDisplay(false);
    setAmount(e);
  }

  const setForeignCurrencyInput = (e) => {
    setConversionDisplay(false);
    setForeignCurrency(e);
  }

  const setNativeCurrencyInput = (e) => {
    setConversionDisplay(false);
    setNativeCurrency(e);
  }
  const classes = useStyles();

  return (
    <div className={classes.App}>
      <StyledAppBar>
        <Toolbar>
          <Typography textalign="center" variant="h6">
            Currency Converter
          </Typography>
        </Toolbar>
      </StyledAppBar>
      {errorDisplay ? (
        <Alert className={classes.alert} onClose={handleClose} severity="error">All fields in the form must be filled out!</Alert>
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
        setAmountInput={setAmountInput}
        setNativeCurrencyInput={setNativeCurrencyInput}
        setForeignCurrencyInput={setForeignCurrencyInput}
        getRate={getRate}
      />
    </div>
  );
}

export default App;
