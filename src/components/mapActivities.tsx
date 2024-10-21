import { format } from 'timeago.js';
import * as styles from '../styles/ActivityLog.css';
import { Activity as ActivityType } from '../types';

interface ActivityProps {
    activity: ActivityType;
}

export const Activity: React.FC<ActivityProps> = ({ activity }) => {
    return (
        <li className={styles.activityItem}>
            <div className={styles.activityHeader}>
                <img
                    src="https://via.placeholder.com/40"
                    alt="Avatar"
                    className={styles.avatar}
                />
                <div>
                    <span className={styles.userName}>You</span>
                    <span className={styles.timeAgo}>
                        {format(activity.timestamp)}
                    </span>
                </div>
            </div>
            <div className={styles.activityMessage}>{activity.message}</div>
        </li>
    );
};
