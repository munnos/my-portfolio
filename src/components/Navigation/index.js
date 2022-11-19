import { useState } from 'react';

const Gimp = () => {
    const [projects, setProjects] = useState([
        {title: 'Hope you get canc', body: 'Lorem', author: 'Mariiio', id:1},
    ])
}

const  Navbar = () => {
    return (  
        <div className="Navbar">
            Placeholder navbar
            {projects.map((projects) => (
                <h2> </h2>
                
            )}
        </div>
    );
}
 
export default Navbar;