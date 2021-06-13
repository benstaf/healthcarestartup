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
        <h1>Funding</h1>
        <div className="border" />
        <p>
          We provide the right introduction to the right investor in China (Qiming, Hony Capital...) the United States (A16Z, ARCH Ventures...), Europe (BPI France, HTGF...), Middle East (IBF, Mubadala...) and elsewhere in the world.
        </p>
      
      </div>
    </article>
    <div className="providers">
      <div className="providers__text-box">
        <h1>
          Data and Artificial Intelligence
        </h1>
        <div className="border" />
        <p>
          We accelerate sharing of clinical and pre-clinical data, and deepen their analysis with relevant machine learning algorithms. When providing data, you are invited to get involved in the corresponding project.
        </p>

      </div>
      <div className="providers__draw">
        <img
          src="./assets/aiml.png"
          alt="illustration"
        />
      </div>
    </div>

    <article className="providers">
      <div className="providers__draw">
        <img
          src="./assets/illustration-2.svg"
          alt="illustration"
        />
      </div>
      <div className="providers__text-box">
        <h1>Business Development</h1>
        <div className="border" />
        <p>
We connect companies across continents and oceans. We make deals happen in late-stage clinical trials and commercialization phases. Precision medicine requires precision partnerships.
        </p>

      </div>
    </article>


  </section>
);
