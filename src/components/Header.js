import React from 'react';

import config from '../../config';

export default function Footer() {
  return (
    <header id="header">
      <h1>{config.heading}</h1>
      <p>{config.subHeading}</p>
      <p>Next call ~ 16 June, 7pm - 8:30pm (SAST)</p>
    </header>
  );
}
