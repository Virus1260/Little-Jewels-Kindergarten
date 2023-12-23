import React from 'react';
import Popup from 'reactjs-popup';
// import 'reactjs-popup/dist/index.css';

const closeButtonStyle = {
    position: 'absolute',
    top: '20px',
    right: '20px',
    background: '#ff3366', // Add a background color for highlighting
    color: '#fff',
    fontSize: '2.5em',
    cursor: 'pointer',
    fontWeight: 'bold', // Make the text bold
    border: 'none',
    borderRadius: '5px', // Add border-radius for a rounded look
    padding: '5px 10px', // Add padding for more clickable area
};

export default () => (
    <Popup modal open position="right center" closeOnDocumentClick>
        {close => (
            <div>
                <button style={closeButtonStyle} onClick={close}>
                    &times;
                </button>
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <img
                        src="/Home_Images/addmition_open2023.jpg"
                        alt="Home_Image"
                        style={{ width: '100%', height: '100%', objectFit: 'cover', cursor: 'pointer' }}
                        onClick={() => window.location.href = '#'}
                    />
                </a>
            </div>
        )}
    </Popup>
);
