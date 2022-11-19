import React, {useState } from 'react';
import Footer from './components/Footer/Footer';
// import Header from './components/Header';
// import Footer from './components/footer';
import Main from './components/Main';

function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  return (
    <div>
      {/* <Header currentPage={currentPage} setCurrentPage={setCurrentPage}/> */}
      <Main />
      {/* <Footer /> */}
      <Footer />
    </div>
  );
}

export default App;
