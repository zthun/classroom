import React from 'react';
import { createRoot } from 'react-dom/client';
import { ZClassroomApp } from './app/app';

const container = createRoot(document.getElementById('zthunworks-classroom')!);

container.render(
  <React.StrictMode>
    <ZClassroomApp />
  </React.StrictMode>
);
