function Gallery(props) {
    return (
        <section className="gallery-section">
            <div className="container subsection">
                <h3 className="section-title">Very nice pictures</h3>
                <div className="gallery-grid">
                    {props.images.map((url, index) => (
                        <img key={index} src={url} alt={`Gallery item ${index}`} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Gallery;
