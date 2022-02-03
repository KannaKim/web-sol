import React from 'react';
import Script from 'next/script'
const DefaultLayout = () => {
  return (
  <>

    <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin="anonymous"/>
  
    <nav className='navbar bg-light navbar-light navbar-expand-lg  shadow fixed-top'>
      <div className='container-fluid'>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav_content" aria-controls="#nav_content" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className='collapse navbar-collapse justify-content-center' id='nav_content'>
          <ul className='navbar-nav'>
            <li className='nav-item'><a className='nav-link px-5' href='#Introduce'>About</a></li>
            <li className='nav-item'><a className='nav-link px-5' href='#Service'>What we offer</a></li>
            <li className='nav-item'><a className='nav-link px-5' href='#MeetOurPeople'>Meet our people</a></li>
            <li className='nav-item'><a className='nav-link px-5' href='#Contact'>Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  </>
  );
};

export default DefaultLayout;
