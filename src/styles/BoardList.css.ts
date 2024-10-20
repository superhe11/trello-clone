import { style } from '@vanilla-extract/css';

export const boardList = style({
    backgroundColor: '#f0f0f0',
    width: '100^'
});

export const h2 = style({
    marginLeft: '25px'
});

export const ulboard = style({
    marginLeft: '-15px'
});

export const inputField = style({
    marginLeft: '25px',
    width: '220px',
    padding: '6px',
    marginBottom: '7px',
    borderRadius: '4px'
});

export const editField = style({
    width: '220px',
    padding: '6px',
    marginBottom: '7px',
    borderRadius: '4px'
});

export const addButton = style({
    marginLeft: '25px',
    width: '234px',
    padding: '6px',
    cursor: 'pointer',
    backgroundColor: '#5aac44',
    color: '#fff',
    border: 'none',
    borderRadius: '3px'
});

export const selectedBoardItem = style({
    backgroundColor: '#e0e0e0',
    fontWeight: 'bold'
});

export const boardItem = style({
    marginRight: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '5px',
    borderBottom: '1px solid #ccc'
});

export const boardTitle = style({
    cursor: 'pointer'
});

export const boardItemButtons = style({
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
