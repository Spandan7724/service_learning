import React from 'react';

function LoginModal({ setShowLogin }) {
    const closeModal = () => {
        setShowLogin(false);
    };

    return (
        <div className="modal" onClick={closeModal}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <span className="close" onClick={closeModal}>&times;</span>
                <h2>Login</h2>
                <form action="placeholder" method="POST">
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" name="username" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" required />
                    </div>
                    <button type="submit" className="btn-login">Login</button>
                </form>
            </div>
        </div>
    );
}

export default LoginModal;
