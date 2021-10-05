import React, { useState } from 'react';

const AccordionContainer = (props) => {
  const [active, setActive] = useState(false);

  const handleActive = (e) => {
    e.preventDefault();
    setActive((prev) => !prev);
  };

  return (
    <div
      className={`accordion__container ${active && 'accordion__container--active'}`}
      onClick={handleActive}
    >
      {props.children}
    </div>
  );
};

export default AccordionContainer;
