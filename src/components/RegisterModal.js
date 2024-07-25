import React, { useState } from 'react';

function RegisterModal() {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        document.getElementById('loginModal').style.display = 'none'; // Hide login modal if open
        setShowModal(true);
    };

    const closeModal = () => setShowModal(false);

    return (
        <>
            <a href="#" id="registerLink" onClick={openModal}>Don't have an account? Join us now</a>
            {showModal && (
                <div id="registerModal" className="modal">
                    <div className="modal-content">
                        <span className="close-register" onClick={closeModal}>&times;</span>
                        <h2>Register</h2>
                        <form action="placeholder" method="POST">
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" id="name" name="name" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" name="email" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="mobile">Mobile Number</label>
                                <input type="text" id="mobile" name="mobile" required />
                            </div>
                            <button type="submit" className="btn-register">Register</button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}

export default RegisterModal;
