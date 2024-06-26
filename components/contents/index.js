import React from 'react';
import { FiArrowDown } from 'react-icons/fi';

export default () => (
  <section className="contents" id="contents">
    <article className="providers">
      <div className="providers__draw">
        <img
          src="./assets/investments.png"
          alt="illustration"
        />
      </div>
      <div className="providers__text-box">
        <h1>Fundraise</h1>
        <div className="border" />
        <p>
          We provide the right introduction to the right investor in Asia, America, Europe, Middle East, and elsewhere in the world.
        </p>
      
      </div>
    </article>
    <div className="providers">
      <div className="providers__text-box">
        <h1>
          Business Development
        </h1>
        <div className="border" />
        <p>
          We connect companies globally. We make deals happen for clinical trials and commercialization phases.
        </p>

      </div>
      <div className="providers__draw">
        <img
          src="./assets/bisdev.jpg"
          alt="illustration"
        />
      </div>
    </div>


  </section>
);
