import React from 'react';
import Navbar from './Navbar';
import Pic from '../Assest/free-stock-photos-03-scaled.jpeg';

const Account = () => {
  return (
    <>
      <Navbar />
      <div style={{ minHeight: '100vh', position: 'relative', backgroundColor: '#f2f2f2' }}>
        <div className='container mt-4'>
          <div className='row'>
            <div className='col-lg-4 col-md-6'>
              <img
                style={{ borderRadius: '50%', height: '200px', width: '200px', marginLeft: '20px' }}
                src={Pic}
                alt='Free Stock Photo'
                className='img-fluid m-3'
              />
            </div>
            <div className='col-lg-4 col-md-6 mt-4'>
              <h2>Marry Doe</h2>
              <p>Marry@Gmail.com</p>
            </div>
          </div>

          <div className='row mt-4'>
            <div className='col'>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
                excepturi. Dolorem voluptatibus, nemo, id doloremque voluptatum,
                repellendus aliquam numquam
              </p>
              <hr />
            </div>
          </div>

          <footer className='footer mt-0' style={{ position: 'absolute', bottom: '0', width: '100%' }}>
            <hr />
          </footer>
        </div>
      </div>
    </>
  );
};

export default Account;
