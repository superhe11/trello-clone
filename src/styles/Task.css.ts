import { style } from '@vanilla-extract/css';

export const taskContainer = style({
    backgroundColor: '#fff',
    padding: '8px',
    borderRadius: '3px',
    boxShadow: '0 1px 0 rgba(9,30,66,.25)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    cursor: 'pointer'
});

export const taskTitle = style({
    flexGrow: 1,
    marginRight: '10px'
});

export const taskTitleInput = style({
    flexGrow: 1,
    padding: '5px',
    fontSize: '14px',
    border: '1px solid #ccc',
    borderRadius: '3px',
    boxSizing: 'border-box'
});

export const taskButtons = style({
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
