import React, { useEffect } from 'react';

function Main() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;
    document.body.appendChild(script);

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement({ pageLanguage: 'en' }, 'google_translate_element');
    };

  }, []);



  return (
    <div>
      <div id='google_translate_element'></div>
    
    </div>
  );
}

export default Main;
