import { style } from '@vanilla-extract/css';

export const listContainer = style({
    backgroundColor: '#f4f5f7',
    padding: '8px',
    marginRight: '10px',
    width: '300px',
    borderRadius: '3px',
    display: 'flex',
    flexDirection: 'column',
    boxSizing: 'border-box'
});

export const listHeader = style({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
});

export const listTitle = style({
    fontSize: '16px',
    fontWeight: 'bold',
    flexGrow: 1
});

export const listTitleInput = style({
    fontSize: '16px',
    padding: '5px',
    flexGrow: 1,
    border: '1px solid #ccc',
    borderRadius: '3px',
    boxSizing: 'border-box'
});

export const listHeaderButtons = style({
    display: 'flex',
    alignItems: 'center'
});

export const iconButton = style({
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '5px',
    marginLeft: '5px'
});

export const taskList = style({
    marginTop: '10px',
    flexGrow: 1,
    overflowY: 'auto'
});

export const taskContainer = style({
    marginBottom: '5px'
});

export const addTaskContainer = style({
    marginTop: '10px'
});

export const addTaskInput = style({
    width: '100%',
    padding: '8px',
    marginBottom: '5px',
    boxSizing: 'border-box',
    border: '1px solid #ccc',
    borderRadius: '3px',
    fontSize: '14px'
});

export const addTaskButton = style({
    width: '100%',
    padding: '8px',
    backgroundColor: '#5aac44',
    color: '#fff',
    border: 'none',
    borderRadius: '3px',
    cursor: 'pointer',
    fontSize: '14px',
    selectors: {
        '&:hover': {
            backgroundColor: '#519839'
        }
    }
});
