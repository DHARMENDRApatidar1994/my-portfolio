import React from 'react'

const Certificates = () => {
  return (
    <div className='text-center text-light mt-5'>
        <h2>Certificates</h2>
        <div className='d-flex flex-column align-items-center'>
        <div className='col-lg-10 col-12 mt-5'>
                <div className='col-lg-6 col-12 d-flex flex-lg-row flex-column  justify-content-between'>
                <h4>React.js Developer</h4>
                <p className='mt-1'>Duration : 1 Months</p>
                </div>
                <img className='col-12' src="null certificate.jpeg" alt="" />
              
            </div>
            <div className='col-lg-10 col-12 mt-5'>
                <div className='col-lg-6 col-12 d-flex flex-lg-row flex-column  justify-content-between'>
                <h4>React.js Developer</h4>
                <p className='mt-1'>Duration : 3 Months</p>
                </div>
                <img className='col-12' src="boostup certificate.jpeg" alt="" />
              
            </div>
            <div className='col-lg-10 col-12 mt-3'>
          
            <div className='col-lg-5 col-12 d-flex flex-lg-row flex-column  justify-content-between '>
            <h4>MERN Stack</h4>
                <p className='mt-1'>Duration : 6 Months</p>
                </div>
                <img className='col-12' src="mern.png" alt="" />
               
            </div>
            <div className='col-lg-10 col-12 mt-5'>
            <div className='col-lg-5 col-12  d-flex flex-lg-row flex-column  justify-content-between'>
            <h4>DBMS (My sql)</h4>
                <p className='mt-1'>Duration : 1 Months</p>
                </div>
                <img className='col-12' src="dbms.png" alt="" />
                
            </div>
           
        </div>
    </div>
  )
}

export default Certificates