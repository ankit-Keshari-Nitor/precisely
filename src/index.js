import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.scss';

import WorkFlowDesigner from './flow-designer/src/';
import ActivityList from './activities/src/';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<ActivityList />} />
      <Route index element={<ActivityList />} />
      <Route path="new-activity" element={<WorkFlowDesigner />} />
    </Routes>
  </BrowserRouter>
);
