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
  },
  conversionDisplay: {
    position: 'fixed',
    top: '20%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
}));

const StyledCard = withStyles({
  root: {
    padding: 50,
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
            <div className={classes.conversionDisplay}>
                {props.conversionDisplay ? (
                    <Card className={classes.card} elevation={3}> 
                        <StyledCard>
                            {props.amount} {props.nativeCurrency} converts to {props.convertedAmount} {props.foreignCurrency}!
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