import { style } from '@vanilla-extract/css';

export const appContainer = style({
    display: 'flex',
    flexDirection: 'row',
    height: '100vh',
    fontFamily: 'Arial, sans-serif'
});

export const boardListContainer = style({
    width: '290px',
    padding: '0',
    borderRight: '1px solid #ccc',
    backgroundColor: '#f4f5f7',
    overflowY: 'auto',
    boxSizing: 'border-box'
});

export const boardContainer = style({
    flex: 1,
    padding: '20px',
    display: 'flex',
    flexDirection: 'row',
    overflowX: 'auto',
    backgroundColor: '#e2e4e6',
    boxSizing: 'border-box'
});

export const activityLogContainer = style({
    width: '250px',
    padding: '20px',
    borderLeft: '1px solid #ccc',
    backgroundColor: '#f4f5f7',
    overflowY: 'auto',
    boxSizing: 'border-box'
});
