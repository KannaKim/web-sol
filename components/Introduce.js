import React from 'react';
import Image from 'next/image'
const Introduce = () => {
  return (
  <article className='container' id="Introduce">
      <div className='my-5 justify-content-around align-items-center row m-auto g-5'>
            <img className='col-lg-5 col-sm-10' src='/img/bookholding.svg'/>
            <div className='col-lg-5'>
                <h1 className="mb-5">
                    Ever got Stressed on launching Websites?
                </h1>
                <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea 
                </p>
            </div>
        </div>
        <div className='my-5 justify-content-around align-items-center row flex-row-reverse m-auto g-5'>
            <img className='col-lg-5 col-sm-10' src='/img/computer.svg'/>
            <div className='col-lg-5'>
                <h1 className="mb-5">
                    Talk to our expert!
                </h1>
                <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea 
                </p>
            </div>
        </div>
  </article>
  );
};

export default Introduce;
