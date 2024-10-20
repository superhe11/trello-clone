import * as styles from '../styles/ActivityLog.css';
import { format } from 'timeago.js';
import { Activity } from '../types';

export const mapActivities = (activities: Activity[]) => {
    return activities.map((act) => (
        <li key={act.id} className={styles.activityItem}>
            <div className={styles.activityHeader}>
                <img
                    src="https://via.placeholder.com/40"
                    alt="Avatar"
                    className={styles.avatar}
                />
                <div>
                    <span className={styles.userName}>You</span>
                    <span className={styles.timeAgo}>
                        {format(act.timestamp)}
                    </span>
                </div>
            </div>
            <div className={styles.activityMessage}>{act.message}</div>
        </li>
    ));
};
