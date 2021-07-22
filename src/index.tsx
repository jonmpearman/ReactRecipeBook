import React from 'react';
import ReactDOM from 'react-dom';
import Warlock from 'warlock-ui';

const App = () => {
    return (<div>
        <Warlock.Button>Recipebook</Warlock.Button>
    </div>);
};

ReactDOM.render(<App />, document.getElementById('app-root'));