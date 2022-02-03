import React from 'react';

const Service = () => {
  return (
  <article className='container-small py-5 px-5 mx-auto' id="Service">
    <h1 className='mt-5 text-lg-start text-sm-center fw-bold'>Service we offer</h1>
    
    <div className='row justify-content-lg-between justify-content-sm-center my-5 g-5'>
        <div className='col-lg-5 col-sm-8'>
            <img className='w-100' src='/img/consult1_1800_1080.jpg'></img>
            <h4 className='my-5 fw-bold'>Consulting</h4>
            <p className=''>
                we can help you decide which type of websites you 
                want depending on your budget. Our experts will 
                give you various of options to choose from.
            </p>
        </div>
        <div className='col-lg-5 col-sm-8'>
            <img className='w-100' src='/img/coding_1800_1080.jpg'></img>
            <h4 className='my-5 fw-bold'>Customizing</h4>
            <p className=''>
                we can help you create the website on your liking, if you
                want to make some change, let us know and we 
                will be your assistant.
            </p>
        </div>
    </div>
    <div className='row justify-content-lg-between justify-content-sm-center my-5 g-5'>
        <div className='col-lg-5 col-sm-8'>
            <img className='w-100' src='/img/stat_1800_1080.jpg'></img>
            <h4 className='my-5 fw-bold'>Traffic analysis</h4>
            <p className=''>
                To help your website further grow, we track all the 
                incoming traffic to your websites and tell you the
                demographic.
            </p>
        </div>
        <div className='col-lg-5 col-sm-8'>
            <img className='w-100' src='/img/audit_1800_1080.jpg'></img>
            <h4 className='my-5 fw-bold'>Audit</h4>
            <p className=''>
                we go on for a full security check on your website 
                to keep the bad guy away. We hire our best 
                security expert so that your website stay strong.
            </p>
        </div>
    </div>
    
  </article>
  );
};

export default Service;
