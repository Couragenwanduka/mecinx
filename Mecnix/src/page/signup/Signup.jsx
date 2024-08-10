import Modal from 'react-modal';
import { useState } from 'react';
import SignIn from '../signin/signin'

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        width: '65%',
        transform: 'translate(-50%, -50%)',
    },
    '@media (max-width: 640px)': { // Mobile styles
        content: {
            width: '0%', // Adjust the width for mobile screens
        }
    }
};

const SignUp = ({ isOpen, openModal }) => {
    const [isSignInOpen, openSignInModal] = useState(false);

    const openSignInModalHandler = () => {
        openSignInModal(true);
    };

    const closeModalHandler = () => {
        openModal(false);
    };

    return (
        <>
            <Modal
                isOpen={isOpen}
                onRequestClose={closeModalHandler}
                style={customStyles}
                ariaHideApp={false}
            >
                <div className="h-screen md:mt-56 mt-72">
                    <h1 className="font-saira font-medium text-3xl text-center">Create an account to start writing  &#x1F60A;</h1>
                    <form className="flex flex-col mt-6 font-saira">
                        <label>First Name</label>
                        <input type="text" placeholder="First Name" className="mb-2 ml-10 border h-10 p-3 rounded-lg" />
                        <label>Last Name</label>
                        <input type="text" placeholder="Last Name" className="mb-2 ml-10 border h-10 p-3 rounded-lg" />
                        <label>Email Address</label>
                        <input type="email" placeholder="Email Address" className="mb-2 ml-10 border h-10 p-3 rounded-lg" />
                        <label>Password</label>
                        <input type="password" placeholder="Password" className="mb-2 ml-10 border h-10 p-3 rounded-lg" />
                        <button type="submit" className="bg-textColor text-white py-2 px-4 rounded mt-5">
                            Sign Up
                        </button>
                        <p className="mt-3 text-center"> Already have an account? <span onClick={openSignInModalHandler} className="text-textColor underline cursor-pointer" >Login </span></p>
                    </form>
                </div>
            </Modal>

            {/* SignIn Modal */}
            <SignIn isSignInOpen={isSignInOpen} openSignInModal={openSignInModal} />
        </>
    );
};

export default SignUp;
