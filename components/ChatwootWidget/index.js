import React from 'react';

class ChatwootWidget extends React.Component {
  componentDidMount () {
    // Add Chatwoot Settings
    window.chatwootSettings = {
      hideMessageBubble: false,
      position: 'right', // This can be left or right
      locale: 'en', // Language to be set
      type: 'expanded_bubble', // [standard, expanded_bubble]
      launcherTitle: 'Chat with us',
    };

    // Paste the script from inbox settings except the <script> tag
    (function(d,t) {
      var BASE_URL="https://app.chatwoot.com";
      var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
      g.src=BASE_URL+"/packs/js/sdk.js";
      s.parentNode.insertBefore(g,s);
      g.async=!0;
      g.onload=function(){
        window.chatwootSDK.run({
          websiteToken: 'F7sg7HKe8a2mBuSmhAW8SNPB',
          baseUrl: BASE_URL
        })
      }
    })(document,"script");
  }

  render () {
    return null;
  }
}

export default ChatwootWidget
