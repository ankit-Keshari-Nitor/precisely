import React from 'react';
import { Button } from '@carbon/react';
import { useNavigate } from 'react-router-dom';
import './activity-list.scss';
export default function ActivityList() {
  let navigate = useNavigate();
  return (
    <div className="activities-container">
      <Button onClick={() => navigate('new-activity')}>New Activity</Button>
      <div className="activities-list-container">
        <p>Activity List table will come here</p>
      </div>
    </div>
  );
}
