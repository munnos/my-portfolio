import React, {useState } from 'react';
import Header from './components/Header/index';
import Footer from './components/footer/index';
import Main from './components/Main';

function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  return (
    <div>
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage}/>
      <Main />
      <Footer />
    </div>
  );
}

export default App;
