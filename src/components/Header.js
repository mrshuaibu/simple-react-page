import Nav from './Nav';
import Button from './Button';

function Header(props) {
    return (
        <header>
            <div className="container">
                <div className='flex nav'>
                    <div>
                        <h1>{props.title}</h1>
                    </div>
                    <div className='flex right-nav'>
                        <Nav list={props.list}/>
                        <Button isLoggedIn={props.isLoggedIn}/>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;