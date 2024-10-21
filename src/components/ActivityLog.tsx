import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import * as styles from '../styles/ActivityLog.css';
import { Activity as ActivityComponent } from './mapActivities';
import { Activity as ActivityType } from '../types';

export const ActivityLog: React.FC = () => {
    const activities = useSelector((state: RootState) => state.activity);

    return (
        <div className={styles.activityLogContainer}>
            <h3>Activity Log</h3>
            <ul className={styles.activityList}>
                {activities.map((activity: ActivityType) => (
                    <ActivityComponent key={activity.id} activity={activity} />
                ))}
            </ul>
        </div>
    );
};
