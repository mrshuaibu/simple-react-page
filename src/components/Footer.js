function Footer(props) {
    return (
        <footer>
            <div className="container flex footer">
                <ul className="social-list flex">
                    {props.socialLinks.map(link => (
                        <li key={link.index}>
                            <a href={link.url} target="_blank" rel="noreferrer">
                                <i className={link.icon}></i>
                            </a>
                        </li>
                    ))}
                </ul>
                <div className="copyright">
                    <p>&copy; 2025 all rights reserved</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;