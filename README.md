# Currency Converter
Currency Converter is a web app that converts an amount of money in a native currency into a foreign currency that is rounded to 2 decimals. 

![Currency Convertor Screenshot](/public/currency_converter.png)

## How to Run Locally
- Step 1: git clone git@github.com:kcarrel/currency_converter.git
- Step 2: cd into the local repository copy
- Step 3: npm install 
- Step 4: npm start

## Technology Used
- React
- Material UI

## Known Issues
When using the Material UI form select for native currency and foreign currency a large React StrictMode findDOMNode warning will be displayed to console. After researching further it appears that this is a known issue with React that Material UI is working to fix in V5. Currently the options I could take to remove the large warning from view is:
- Use Material UI alpha V5
- Disable React.StrictMode

Using Material UI V5 could possibly introduce breaking changes so that is not a feasible option to me. Instead, I decided to disable React.StrictMode given that the project is a small app that will not be in production and it makes it easier for the reviewers. In a production setting I would not be disabling React.StrictMode as it is useful for catching warnings about deprecated components. 

This is the related [issue thread](https://github.com/mui-org/material-ui/issues/13394).