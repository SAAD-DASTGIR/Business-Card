import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header'
import Body  from './Body';
import Footer from './Footer';
function App()  {
    return (
    <div className='Parent'>
      <div className='background'>
        <Header />
        <Body/>
        <Footer />
      </div>   
    </div>
    );
  
}

ReactDOM.render(<App />, document.getElementById('root'));