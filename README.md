# Currency Translator 
This is a simple web app with a form that accepts an amount to convert, a native currency to convert from and a foreign currency to convert to then displays the converted amount to the user.

## How to Use

## Technology Used
- React
- Material UI

## Known Issues
When using the Material UI form select for native currency and foreign currency a StrictMode. findDOMNode warning will be displayed to console. After researching further it appears that this is a known issue that Material UI is working to fix in V5 however currently the temporary options I could take is to:
- Use Material UI alpha V5
- Disable React Strict Mode
Neither option is acceptable to me given that V5 would possibly introduce breaking changes and disabling React.Strict mode would prevent me from seeing potential issues. As such - this warning is acknowledged and I am keeping my eye on finding a more permanent and safe fix for the future.

This is the related [issue thread](https://github.com/mui-org/material-ui/issues/13394).