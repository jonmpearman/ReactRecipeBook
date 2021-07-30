import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@emotion/react';
import { Button, BaseTheme, Paragraph } from 'warlock-ui';

const App = () => {
    const [ visible, setVisible ] = useState(false);
    
    return (<ThemeProvider theme={BaseTheme}>
        <Button onClick={() => setVisible(true)}>Recipebook</Button>
        { visible ? <Paragraph>This will show once the button is clicked!</Paragraph> : null }
    </ThemeProvider>);
};

ReactDOM.render(<App />, document.getElementById('app-root'));