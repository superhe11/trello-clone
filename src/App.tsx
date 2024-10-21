import { Board } from './components/Board';
import { ActivityLog } from './components/ActivityLog';
import { BoardList } from './components/BoardList';
import * as styles from './styles/App.css';

export const App: React.FC = () => {
    return (
        <div className={styles.appContainer}>
            <div className={styles.boardListContainer}>
                <BoardList />
            </div>
            <div className={styles.boardContainer}>
                <Board />
            </div>
            <div className={styles.activityLogContainer}>
                <ActivityLog />
            </div>
        </div>
    );
};
