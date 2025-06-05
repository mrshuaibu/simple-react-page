function Banner(props) {
    return (
        <section className="hero">
            <div className="hero-content container">
                <h2>{props.title}</h2>
                <p>{props.text}</p>
                <a href="#services" className={props.primaryBtnType}>{props.primaryBtnText}</a>
                <a href="#services" className={props.secondaryBtnType}>{props.secondaryBtnText}</a>
            </div>
        </section>
    );
}

export default Banner;
