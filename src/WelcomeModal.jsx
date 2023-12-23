import React from 'react';

const WelcomeModal = ({ isOpen, onClose }) => {
    return (
        <div className={`modal ${isOpen ? 'open' : 'closed'}`}>
            <div className="modal-content">
                <h2>Welcome to My Website</h2>
                <p>This is a welcome message. Click the button to close the modal and access the site.</p>
                <button onClick={onClose}>Close Modal</button>
            </div>
        </div>
    );
};

export default WelcomeModal;
