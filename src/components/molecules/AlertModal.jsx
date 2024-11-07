import React from 'react';
import './AlertModal.css';

function AlertModal({ message, onClose }) {
  return (
    <div className="alert-modal-overlay" onClick={onClose}>
      <div className="alert-modal">
        <p>{message}</p>
        <button onClick={onClose}>Kapat</button>
      </div>
    </div>
  );
}

export default AlertModal;
