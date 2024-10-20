import { style } from '@vanilla-extract/css';

export const activityLogContainer = style({
    height: '90%'
});

export const activityList = style({
    listStyleType: 'none',
    padding: '0',
    margin: '0'
});

export const activityItem = style({
    padding: '8px',
    borderBottom: '1px solid #ccc',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column'
});

export const activityHeader = style({
    display: 'flex',
    alignItems: 'center',
    marginBottom: '5px'
});

export const avatar = style({
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    marginRight: '10px'
});

export const userName = style({
    fontWeight: 'bold'
});

export const timeAgo = style({
    display: 'block',
    fontSize: '12px',
    color: '#888'
});

export const activityMessage = style({
    marginLeft: '50px',
    fontSize: '14px'
});
