import React, { useEffect } from 'react';

/**
 * Reusable Modal Component with animations and backdrop blur
 * 
 * @param {boolean} open - Whether the modal is open
 * @param {function} onClose - Callback when modal is closed
 * @param {string} title - Modal title (optional)
 * @param {React.ReactNode} children - Modal content
 * @param {object} style - Additional styles for the modal content (optional)
 */
const Modal = ({ open, onClose, title, children, style = {} }) => {
    // Prevent body scroll when modal is open
    useEffect(() => {
        if (open) {
            document.body.classList.add('modal-open');
        } else {
            document.body.classList.remove('modal-open');
        }
        return () => document.body.classList.remove('modal-open');
    }, [open]);

    // Close on escape key
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape' && open) {
                onClose();
            }
        };
        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [open, onClose]);

    if (!open) return null;

    return (
        <div
            className="modal-backdrop"
            onClick={(e) => {
                if (e.target === e.currentTarget) onClose();
            }}
        >
            <div
                className="modal-content card"
                style={{
                    minWidth: 280,
                    maxWidth: 500,
                    padding: '2rem 1.5rem',
                    position: 'relative',
                    ...style
                }}
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    style={{
                        position: 'absolute',
                        top: 12,
                        right: 18,
                        background: 'none',
                        border: 'none',
                        color: '#fff',
                        fontSize: 28,
                        cursor: 'pointer',
                        lineHeight: 1,
                        transition: 'color 0.2s ease',
                    }}
                    onMouseEnter={(e) => e.target.style.color = '#ff4ecd'}
                    onMouseLeave={(e) => e.target.style.color = '#fff'}
                    aria-label="Close modal"
                >
                    &times;
                </button>

                {title && (
                    <h2 style={{
                        color: '#a259ff',
                        marginTop: 0,
                        marginBottom: '1.5rem',
                        fontSize: '1.6rem',
                        fontWeight: 700
                    }}>
                        {title}
                    </h2>
                )}

                {children}
            </div>
        </div>
    );
};

export default Modal;
