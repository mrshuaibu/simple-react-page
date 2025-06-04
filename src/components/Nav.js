function Nav(props) {
    return (
        <div className="flex nav-list">
            {props.list.map(navLink => (
                <div key={navLink.index}>
                    <nav>
                        <ul>
                            <li className="nav-item"><a href={navLink.url}>{navLink.name}</a></li>
                        </ul>
                    </nav>
                </div>
            ))}
        </div>
    );
}

export default Nav;