import React from 'react';

const LangFlag = ({ lang }) => {
  if (lang === 'en') {
    return (
      <svg
        width="20px"
        height="20px"
        viewBox="0 0 36 36"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        role="img"
        className="iconify iconify--twemoji"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Your SVG paths for English language */}
      </svg>
    );
  } else if (lang === 'fr') {
    return (
      <svg
        height="20px"
        width="20px"
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        {/* Your SVG paths for French language */}
      </svg>
    );
  } else {
    return (
      <div>No flag available for this language</div>
    );
  }
};

export default LangFlag;
