import React from 'react';
import { Button, Select, FormControl, Paper, MenuItem, InputLabel, TextField } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
      width: 500,
      height: 400,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      backgroundColor: "#eee",
      '& form': {
        padding: 50,
      },
  },
  currencyForm: {
    position: 'fixed',
    top: '60%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  textField: {
      backgroundColor: "#fff"
  }
}));

const StyledButton = withStyles({
  root: {
    background: '#08402b',
    borderRadius: 3,
    border: 0,
    fontSize: '18px',
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0',
    '&:hover': {
      background: '#218961',
      color:'#FFF'
    }
  },
})(Button);

function ConvertForm(props) {
  const classes = useStyles();
  const currencyAbb = ["AUD", "BGN", "BRL", "CAD", "CHF", "CNY", "CZK", "DKK", "EUR", 
  "GBP", "HKD", "HRK", "HUF", "IDR", "ILS", "INR", "ISK", "JPY", "KRW", "MXN", "MYR", 
  "NOK", "NZD", "PHP", "PLN", "RON", "RUB", "SEK", "SGD", "THB", "TRY", "USD", "ZAR"];

  return (
    <div className={classes.root}>
      <div className={classes.currencyForm}>
        <Paper className={classes.paper} elevation={3}>
          <form>
            <TextField
              margin="normal"
              name='amount'
              required
              fullWidth
              label="Amount to Convert"
              type="number"
              variant="outlined"
              id="amount-text-field"
              onChange={e => props.setAmountInput(e.target.value)}
              value={props.amount}
            />
            <FormControl required margin="normal" fullWidth>
              <InputLabel id="nativeCurrency">Native Currency</InputLabel>
              <Select 
                name='nativeCurrency'
                labelId="nativeCurrency"
                transition="false" 
                id="native-currency-select"
                onChange={e => props.setNativeCurrencyInput(e.target.value)}
                value={props.nativeCurrency}
              >
                {currencyAbb.map((code, index) => (
                    <MenuItem 
                      key={`nativeCurrency ${index}`} 
                      id={`nativeCurrency ${code}`}
                      value={code}>{code}
                    </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl transition="false" required margin="normal" fullWidth>
              <InputLabel id="foreignCurrency"> Foreign Currency</InputLabel>
              <Select
                name='foreignCurrency'
                labelId="foreignCurrency"
                id="foreign-currency-select"
                onChange={e => props.setForeignCurrencyInput(e.target.value)}
                value={props.foreignCurrency}
              >
                {currencyAbb.map((code, index) => (
                    <MenuItem 
                      key={`foreignCurrency ${index}`} 
                      id={`foreignCurrency ${code}`} 
                      value={code}>{code}
                    </MenuItem>
                ))}
              </Select>
            </FormControl>
            <StyledButton 
              fullWidth 
              margin="normal"
              onClick={props.getRate} 
              variant="contained">
              Convert
            </StyledButton>
          </form>
        </Paper>
      </div>
    </div>
  );
};

export default ConvertForm;