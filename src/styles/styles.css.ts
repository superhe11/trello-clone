import { style } from '@vanilla-extract/css';

export const body = style({
    margin: '0',
    padding: '0'
});

export const appStyle = style({
    display: 'flex',
    flexDirection: 'row'
});

export const boardListStyle = style({
    width: '200px',
    padding: '10px',
    borderRight: '1px solid #ccc'
});

export const boardContainerStyle = style({
    flex: 1,
    padding: '10px',
    display: 'flex',
    flexDirection: 'row',
    overflowX: 'auto'
});

export const listStyle = style({
    width: '300px',
    marginRight: '10px',
    backgroundColor: '#f4f5f7',
    borderRadius: '3px',
    padding: '10px'
});

export const taskStyle = style({
    padding: '8px',
    marginBottom: '8px',
    backgroundColor: '#fff',
    borderRadius: '3px',
    boxShadow: '0 1px 0 rgba(9,30,66,.25)',
    cursor: 'pointer'
});

export const deleteButtonStyle = style({
    backgroundColor: 'transparent',
    border: 'none',
    color: '#ff0000',
    cursor: 'pointer',
    marginLeft: '5px'
});

export const listHeaderStyle = style({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
});

export const taskListStyle = style({
    padding: '4px',
    width: '250px',
    minHeight: '100px',
    backgroundColor: 'lightgrey'
});

export const emptyListPlaceholder = style({
    padding: '10px',
    textAlign: 'center',
    color: '#999'
});
