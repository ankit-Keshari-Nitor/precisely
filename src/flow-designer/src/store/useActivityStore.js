import { create } from 'zustand';

const activityStore = (set, get) => ({
  activities: [{ id: '1', dialogNodes: null, dialogEdges: null, taskNodes: null, taskEdges: null }],
  addActivity: (activity) => {
    set((state) => ({
      activities: [...state.activities, { ...activity, status: 'available' }]
    }));
  },
  issueActivity: (id) => {
    const activities = get().activities;
    const updatedActivities = activities?.map((activity) => {
      if (activity.id === id) {
        return {
          ...activity,
          status: 'issued'
        };
      } else {
        return activity;
      }
    });
    set((state) => ({
      activities: updatedActivities
    }));
  },
  returnActivity: (id) => {
    const activities = get().activities;
    const updatedActivities = activities?.map((activity) => {
      if (activity.id === id) {
        return {
          ...activity,
          status: 'available'
        };
      } else {
        return activity;
      }
    });
    set((state) => ({
      activities: updatedActivities
    }));
  },
  reset: () => {
    set({
      activities: []
    });
  }
});

const useActivityStore = create(activityStore);

export default useActivityStore;
