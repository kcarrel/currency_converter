import React from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import { CardContent } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  card: {
      width: 500,
      height: 100,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      textAlign: 'center',
      margin: 'auto',
      backgroundColor: "#eee",
  }
}));

function ConversionDisplay(props) {
    const classes = useStyles();
    return(
        <div className="classes.root">
            <div className="conversion_display">
                {props.convertedAmount !== 0 ? (
                    <Card className={classes.card} elevation={3}> 
                        <CardContent>
                            {props.amount} {props.nativeCurrency} can be converted to {props.convertedAmount} {props.foreignCurrency}!
                        </CardContent>
                    </Card>
                    ) : (
                    <Card className={classes.card} elevation={3}> 
                        <CardContent>
                            Enter the amount of money you would like converted then select the native currency and foreign currency! 
                        </CardContent>
                    </Card>
                )}       
            </div>
        </div>
    );
};

export default ConversionDisplay;