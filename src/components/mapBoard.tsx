import * as styles from '../styles/BoardList.css';

interface Board {
    id: string;
    title: string;
}

export const renderBoardList = (
    boards: Board[],
    selectedBoardId: string | null,
    editingBoardId: string | null,
    editedBoardTitle: string,
    handleSelectBoard: (id: string) => void,
    handleEditBoard: (id: string, title: string) => void,
    handleDeleteBoard: (id: string, title: string) => void,
    setEditedBoardTitle: (title: string) => void,
    handleSaveBoardTitle: (id: string) => void
) =>
    boards.map((board) => (
        <li
            key={board.id}
            className={`${styles.boardItem} ${
                board.id === selectedBoardId ? styles.selectedBoardItem : ''
            }`}
        >
            {editingBoardId === board.id ? (
                <input
                    type="text"
                    value={editedBoardTitle}
                    onChange={(e) => setEditedBoardTitle(e.target.value)}
                    onBlur={() => handleSaveBoardTitle(board.id)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            handleSaveBoardTitle(board.id);
                        }
                    }}
                    className={styles.editField}
                    autoFocus
                />
            ) : (
                <span
                    className={styles.boardTitle}
                    onClick={() => handleSelectBoard(board.id)}
                >
                    {board.title}
                </span>
            )}
            <div className={styles.boardItemButtons}>
                <button
                    className={styles.iconButton}
                    onClick={() => handleEditBoard(board.id, board.title)}
                >
                    <i className="fas fa-edit"></i>
                </button>
                <button
                    className={styles.iconButton}
                    onClick={() => handleDeleteBoard(board.id, board.title)}
                >
                    <i className="fas fa-trash"></i>
                </button>
            </div>
        </li>
    ));
