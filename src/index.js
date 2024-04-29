import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.scss';

import WorkFlowDesigner from './flow-designer/src/';
import ActivityDashboard from './activities/src';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<ActivityDashboard />} />
      <Route index element={<ActivityDashboard />} />
      <Route path="new-activity" element={<WorkFlowDesigner />} />
    </Routes>
  </BrowserRouter>
);
