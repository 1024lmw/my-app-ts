
import React from 'react';
import { Provider } from 'react-redux';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { store } from '../reducers';
//import Routers from './routers'
import Home from '../pages/index';


const App: React.FC = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={< Home  decrement={()=>{}} increment={()=>{}} num={1}/>} />
                </Routes>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
