function Button(props) {
    return (
        <button className= {props.isLoggedIn ? 'red' : 'blue'}>
            {props.isLoggedIn? 'Logout': 'Login'}
        </button>
    );
}

export default Button;