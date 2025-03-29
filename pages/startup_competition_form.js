import React from 'react';
import Head from 'next/head';
import {
  Services, Contents, Media_Coverage, Hero, Navbar, Footer, ChatwootWidget,
} from '../components';


export default () => (
  <div>
    <Head>
      <title>ChingHub - Tech and Medicine Network</title>
      <meta name="image" property="og:image" content="./assets/illustration-2.svg" />
      <meta
        property="og:description"
        content="ChingHub is a global network accelerating research and business in Tech and Medicine"
      />
      <meta property="og:image" content="./assets/illustration-2.svg" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@CoderRocketFuel" />
      <meta name="twitter:title" content="Embed a Twitch Video into a React Website" />
      <meta name="twitter:description" content="ChingHub is a global network accelerating Tech and Medicine research and business" />
      <meta name="twitter:image" content="./assets/illustration-2.svg" />
    </Head>
    <Navbar />

    <div style={{ textAlign: 'center', padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Startup Competition - Hangzhou 2025</h1>
      <p>
        <a href="https://reyzhub.com/presentation_competition">Presentation of the Competition</a>
      </p>
      <p>Please fill out the form below. Fields marked with <span style={{ color: 'red' }}>*</span> are required.</p>

      <form
        action="https://formspree.io/f/mzzeaago"
        method="POST"
        encType="multipart/form-data"
        style={{ textAlign: 'left' }}
      >
        {/* Email */}
        <label htmlFor="email" style={{ display: 'block', margin: '10px 0 5px' }}>
          Email <span style={{ color: 'red' }}>*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          style={{ width: '100%', padding: '8px', marginBottom: '15px' }}
        />

        {/* Project Name */}
        <label htmlFor="project_name" style={{ display: 'block', margin: '10px 0 5px' }}>
          Project Name <span style={{ color: 'red' }}>*</span>
        </label>
        <input
          type="text"
          id="project_name"
          name="project_name"
          required
          style={{ width: '100%', padding: '8px', marginBottom: '15px' }}
        />

        {/* Pitch Deck */}
        <label htmlFor="pitch_deck" style={{ display: 'block', margin: '10px 0 5px' }}>
          Pitch Deck <span style={{ color: 'red' }}>*</span>
        </label>
        <input
          type="file"
          id="pitch_deck"
          name="pitch_deck"
          accept=".pdf, .ppt, .pptx"
          required
          style={{ width: '100%', padding: '8px', marginBottom: '15px' }}
        />
        <small style={{ display: 'block', color: '#555', marginTop: '5px' }}>
          Upload 1 supported file: PDF or presentation. Max 10 MB.
        </small>
        <p>
          Template for Biotech project: <a href="https://reyzhub.com/biotech_template">Biotech Template</a>
        </p>
        <p>
          Template for Tech project: <a href="https://reyzhub.com/tech_template">Tech Template</a>
        </p>

        {/* Pitch Deck Highlights */}
        <label htmlFor="pitch_highlights" style={{ display: 'block', margin: '10px 0 5px' }}>
          Pitch Deck Highlights <span style={{ color: 'red' }}>*</span>
        </label>
        <textarea
          id="pitch_highlights"
          name="pitch_highlights"
          rows="4"
          required
          style={{ width: '100%', padding: '8px', marginBottom: '15px' }}
        ></textarea>

        {/* Amount Raised */}
        <label htmlFor="amount_raised" style={{ display: 'block', margin: '10px 0 5px' }}>
          Amount Raised (in US Dollars) <span style={{ color: 'red' }}>*</span>
        </label>
        <input
          type="number"
          id="amount_raised"
          name="amount_raised"
          step="0.01"
          required
          style={{ width: '100%', padding: '8px', marginBottom: '15px' }}
        />

        {/* Project Category */}
        <label htmlFor="project_category" style={{ display: 'block', margin: '10px 0 5px' }}>
          Project Category <span style={{ color: 'red' }}>*</span>
        </label>
        <select
          id="project_category"
          name="project_category"
          required
          style={{ width: '100%', padding: '8px', marginBottom: '15px' }}
        >
          <option value="">Select a category</option>
          <option value="Biotech">Biotech</option>
          <option value="Tech">Tech</option>
          <option value="Other">Other</option>
        </select>

        {/* Stage of Development */}
        <label htmlFor="stage_development" style={{ display: 'block', margin: '10px 0 5px' }}>
          Stage of Development <span style={{ color: 'red' }}>*</span>
        </label>
        <select
          id="stage_development"
          name="stage_development"
          required
          style={{ width: '100%', padding: '8px', marginBottom: '15px' }}
        >
          <option value="">Select a stage</option>
          <option value="Idea">Idea</option>
          <option value="Prototype">Prototype</option>
          <option value="Early Stage">Early Stage</option>
          <option value="Growth">Growth</option>
        </select>

        {/* Full Name */}
        <label htmlFor="full_name" style={{ display: 'block', margin: '10px 0 5px' }}>
          Full Name of the Main Applicant <span style={{ color: 'red' }}>*</span>
        </label>
        <input
          type="text"
          id="full_name"
          name="full_name"
          required
          style={{ width: '100%', padding: '8px', marginBottom: '15px' }}
        />

        {/* Date of Birth */}
        <label htmlFor="dob" style={{ display: 'block', margin: '10px 0 5px' }}>
          Date of Birth <span style={{ color: 'red' }}>*</span>
        </label>
        <input
          type="date"
          id="dob"
          name="dob"
          required
          style={{ width: '100%', padding: '8px', marginBottom: '15px' }}
        />

        {/* Country and City of Birth */}
        <label htmlFor="birth_location" style={{ display: 'block', margin: '10px 0 5px' }}>
          Country and City of Birth <span style={{ color: 'red' }}>*</span>
        </label>
        <input
          type="text"
          id="birth_location"
          name="birth_location"
          required
          style={{ width: '100%', padding: '8px', marginBottom: '15px' }}
        />

        {/* Citizenship */}
        <label htmlFor="citizenship" style={{ display: 'block', margin: '10px 0 5px' }}>
          Citizenship <span style={{ color: 'red' }}>*</span>
        </label>
        <input
          type="text"
          id="citizenship"
          name="citizenship"
          required
          style={{ width: '100%', padding: '8px', marginBottom: '15px' }}
        />

        {/* Gender */}
        <label htmlFor="gender" style={{ display: 'block', margin: '10px 0 5px' }}>
          Gender <span style={{ color: 'red' }}>*</span>
        </label>
        <select
          id="gender"
          name="gender"
          required
          style={{ width: '100%', padding: '8px', marginBottom: '15px' }}
        >
          <option value="">Select gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
          <option value="Prefer not to say">Prefer not to say</option>
        </select>

        {/* CV or Resume */}
        <label htmlFor="cv" style={{ display: 'block', margin: '10px 0 5px' }}>
          CV or Resume <span style={{ color: 'red' }}>*</span>
        </label>
        <input
          type="file"
          id="cv"
          name="cv"
          accept=".pdf, .doc, .docx"
          required
          style={{ width: '100%', padding: '8px', marginBottom: '15px' }}
        />
        <small style={{ display: 'block', color: '#555', marginTop: '5px' }}>
          Upload 1 supported file: PDF or document. Max 10 MB.
        </small>

        {/* University Diploma */}
        <label htmlFor="diploma" style={{ display: 'block', margin: '10px 0 5px' }}>
          Copy of University Diploma <span style={{ color: 'red' }}>*</span>
        </label>
        <input
          type="file"
          id="diploma"
          name="diploma"
          accept=".pdf, .jpg, .png"
          required
          style={{ width: '100%', padding: '8px', marginBottom: '15px' }}
        />
        <small style={{ display: 'block', color: '#555', marginTop: '5px' }}>
          Upload 1 supported file: PDF or image. Max 10 MB.
        </small>

        {/* Telephone */}
        <label htmlFor="telephone" style={{ display: 'block', margin: '10px 0 5px' }}>
          Telephone (office or mobile) <span style={{ color: 'red' }}>*</span>
        </label>
        <input
          type="tel"
          id="telephone"
          name="telephone"
          required
          style={{ width: '100%', padding: '8px', marginBottom: '15px' }}
        />

        {/* Submit Button */}
        <button
          type="submit"
          style={{
            backgroundColor: '#4CAF50',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          Submit
        </button>
      </form>

      <p><small>Never submit passwords through this form.</small></p>
      <p><small>This content is neither created nor endorsed by Google. <a href="#">Terms of Service</a> - <a href="#">Privacy Policy</a></small></p>
    </div>

    <ChatwootWidget />
  </div>
);
