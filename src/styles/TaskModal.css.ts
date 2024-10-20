import { style } from '@vanilla-extract/css';

export const modalOverlay = style({
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000
});

export const modalContent = style({
    backgroundColor: '#fff',
    padding: '20px',
    width: '500px',
    borderRadius: '4px',
    position: 'relative',
    boxSizing: 'border-box'
});

export const closeButton = style({
    position: 'absolute',
    top: '10px',
    right: '10px',
    background: 'none',
    border: 'none',
    fontSize: '24px',
    cursor: 'pointer'
});

export const modalTitle = style({
    marginBottom: '15px',
    fontSize: '18px',
    fontWeight: 'bold'
});

export const descriptionInput = style({
    width: '100%',
    height: '150px',
    padding: '10px',
    fontSize: '14px',
    marginBottom: '15px',
    border: '1px solid #ccc',
    borderRadius: '3px',
    boxSizing: 'border-box',
    resize: 'vertical'
});

export const saveButton = style({
    backgroundColor: '#5aac44',
    color: '#fff',
    border: 'none',
    padding: '10px 15px',
    cursor: 'pointer',
    borderRadius: '3px',
    fontSize: '14px',
    selectors: {
        '&:hover': {
            backgroundColor: '#519839'
        }
    }
});
