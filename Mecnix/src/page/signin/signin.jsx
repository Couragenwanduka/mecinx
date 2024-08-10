import Modal from 'react-modal';

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
};

const SignIn = ({ isSignInOpen, openSignInModal }) => {

    const closeSignInModalHandler = () => {
        openSignInModal(false);
    };

    return (
        <Modal
            isOpen={isSignInOpen}
            onRequestClose={closeSignInModalHandler}
            style={customStyles}
            ariaHideApp={false}
        >
            <div className="h-screen md:mt-56 mt-72">
                <h1 className="font-saira font-medium text-3xl text-center">Sign In to Your Account &#x1F60A;</h1>
                <form className="flex flex-col mt-6 font-saira">
                    <label>Email Address</label>
                    <input type="email" placeholder="Email Address" className="mb-2 ml-10 border h-10 p-3 rounded-lg"/>
                    <label>Password</label>
                    <input type="password" placeholder="Password" className="mb-2 ml-10 border h-10 p-3 rounded-lg" />
                    <button type="submit" className="bg-textColor text-white py-2 px-4 rounded mt-5">
                        Sign In
                    </button>
                    <p className="mt-3 text-center">
                        Don’t have an account? 
                        <span 
                            onClick={closeSignInModalHandler} 
                            className="text-textColor underline cursor-pointer"
                        >
                            Register
                        </span>
                    </p>
                </form>
            </div>
        </Modal>
    );
};

export default SignIn;
