import React, {useState} from 'react';
import Home from '../../pages/home';
import About from '../../pages/about';
import Resume from '../../pages/resume';
import Projects from '../../pages/Projects';
import Contact from '../../pages/contact';
import Navigation from '../../components/Navigation';

    export default function Main () {
        const [currentPage, setCurrentPage] = useState('Home')
        function renderPage() {
          if (currentPage === 'about') {
            return <About />;
          }
          if (currentPage === 'portfolio') {
            return <Projects />;
          }
          if (currentPage === 'contact') {
            return <Contact />;
          }
          if (currentPage === 'resume') {
            return <Resume />;
          }
          return <Home />;
        };

        const handlePageChange = (page) => setCurrentPage(page);
        return (
            <div>
              {/* We are passing the currentPage from state and the function to update it */}
              <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
              {/* Here we are calling the renderPage method which will return a component  */}
              {renderPage()}
            </div>
          );
        }
        
      
    

