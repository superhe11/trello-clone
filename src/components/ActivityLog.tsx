import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import * as styles from '../styles/ActivityLog.css';
import { mapActivities } from './mapActivities';

export const ActivityLog: React.FC = () => {
    const activities = useSelector((state: RootState) => state.activity);

    return (
        <div className={styles.activityLogContainer}>
            <h3>Activity Log</h3>
            <ul className={styles.activityList}>{mapActivities(activities)}</ul>
        </div>
    );
};
