import { style } from '@vanilla-extract/css';

export const boardWrapper = style({
    display: 'flex',
    alignItems: 'flex-start',
    padding: '20px',
    overflowX: 'auto'
});

export const addListContainer = style({
    minWidth: '300px',
    padding: '8px',
    backgroundColor: '#f4f5f7',
    borderRadius: '3px',
    boxSizing: 'border-box'
});

export const addListInput = style({
    width: '100%',
    padding: '8px',
    marginBottom: '5px',
    boxSizing: 'border-box',
    border: '1px solid #ccc',
    borderRadius: '3px',
    fontSize: '14px'
});

export const addListButton = style({
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
