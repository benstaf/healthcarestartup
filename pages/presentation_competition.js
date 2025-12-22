import React from 'react';
import Head from 'next/head';

import {
  Services, Contents, Media_Coverage, Hero, Navbar, Footer, ChatwootWidget, 
} from '../components';



export default () => (
  <div>
    <Head>
      <title>ReyzHub - Tech and Medicine Network</title>
<meta name="image" property="og:image" content="./assets/illustration-2.svg"/>
    <meta
          property="og:description"
          content="ReyzHub is a global network accelerating research and business in Tech and Medicine"
        />
        <meta property="og:image" content="./assets/illustration-2.svg" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:site" content="@CoderRocketFuel" />
<meta name="twitter:title" content="Embed a Twitch Video into a React Website" />
<meta name="twitter:description" content="ReyzHub is a global network accelerating Tech and Medicine research and business" />
<meta name="twitter:image" content="./assets/illustration-2.svg" />
    </Head>
    <Navbar />
  
      <div style={{ textAlign: 'center', position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
  <iframe
    src="https://docs.google.com/presentation/d/e/2PACX-1vTQkTJtxcYirpgr5PBbwYzeBMFPgG2OP61O2fkWCOVB-f6_Iw4pEgbwcFBg6FfnagVilMMfX83uHuqg/pubembed?start=false&loop=false&delayms=3000"
    frameborder="0"
    width="100%"
    height="100%"
    allowfullscreen="true"
    mozallowfullscreen="true"
    webkitallowfullscreen="true"
    style={{ position: 'absolute', top: 0, left: 0 }}
  >
    Loading…
  </iframe>
</div>

     <ChatwootWidget />
  </div>
);
