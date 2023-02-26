import React from 'react';
import Register from '../../components/getstarted/Register';
import Header from '../../components/Header';
import Righinfo from '../../components/notices/Righinfo';

const register = () => {
    return (
       <div>
        <Header menus={false}/>
        <div 
       style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

       }}
       >
         <Register/>

        <Righinfo/>
       
       </div>
       </div>
    );
};

export default register;