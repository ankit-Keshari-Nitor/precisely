import React from 'react';
import { Button } from '@carbon/react';
import { useNavigate } from 'react-router-dom';

import './activity-dashboard.scss';
import ActivityList from '../activity-list/activity-list';

export default function ActivityDashboard() {
  let navigate = useNavigate();
  return (
    <div className="activities-container">
      <Button onClick={() => navigate('new-activity')} kind="secondary" size="md">
        New Activity
      </Button>
      <ActivityList />
    </div>
  );
}
