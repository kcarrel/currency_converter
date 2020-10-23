import React from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles, withStyles } from '@material-ui/core/styles';
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

const StyledCard = withStyles({
  root: {
    padding: '50px',
    "&:last-child": {
        paddingTop: 50,
        paddingBottom: 50
    },
  },
})(CardContent);


function ConversionDisplay(props) {
    const classes = useStyles();
    return(
        <div className="classes.root">
            <div className="conversion_display">
                {props.conversionDisplay ? (
                    <Card className={classes.card} elevation={3}> 
                        <StyledCard>
                            {props.amount} {props.nativeCurrency} can be converted to {props.convertedAmount} {props.foreignCurrency}!
                        </StyledCard>
                    </Card>
                    ) : (
                    <Card className={classes.card} elevation={3}> 
                        <StyledCard>
                            Enter the amount of money you would like converted then select the native currency and foreign currency! 
                        </StyledCard>
                    </Card>
                )}       
            </div>
        </div>
    );
};

export default ConversionDisplay;