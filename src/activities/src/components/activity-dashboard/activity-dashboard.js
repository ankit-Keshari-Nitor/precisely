import React from 'react';


import './activity-dashboard.scss';
import ActivityList from '../activity-list/activity-list';

export default function ActivityDashboard() {
  return (
    <div className="activities-container">
      <ActivityList />
    </div>
  );
}
