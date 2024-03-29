import Menu from "../components/Menu"

const Contact = () => {

    return (
        <>
            <Menu />
            <div className="container contact">
                <h1 className="basement">Contact me!</h1>
                <br />
                <div className="d-flex contact-flex">
                    <div className="yellow-square p-3 d-flex justify-content-end align-items-end">
                        <img src="./images/arrows.svg" className="arrows" />
                    </div>
                    <div>
                        <div className="d-flex gap-5 flex-wrap">
                            <div>
                                <h1 className="basement-subtitle">Email</h1>
                                <p className="aileron-black">daniel.napolip@gmail.com</p>
                            </div>
                            <div>
                                <h1 className="basement-subtitle">Phone number</h1>
                                <p className="aileron-black">+507 6115-6670</p>
                            </div>
                        </div>
                        <br />
                        <br />
                        <h1 className="basement-subtitle">My accounts</h1>
                        <div>
                            <a className="marked d-flex align-items-center gap-1" target="_blank" href="https://linkedin.com/in/napolidan"><p className="aileron-black">LinkedIn</p><span className="instagram-sans"> -></span></a>
                        </div>
                        <div>
                            <a className="marked d-flex align-items-center gap-1" target="_blank" href="https://github.com/napolidan"><p className="aileron-black">Github</p><span className="instagram-sans"> -></span></a>
                        </div>
                        <div>
                            <a className="marked d-flex align-items-center gap-1" target="_blank" href="https://codepen.io/napolidan"><p className="aileron-black">Codepen</p><span className="instagram-sans"> -></span></a>
                        </div>
                    </div>
                </div>
            </div>
            <h3 className="basement contact-date date">202<span className="yellow-text">4</span></h3>
            <h3 className="basement signature web-only">Daniel <span className="yellow-text">Napoli</span></h3>
        </>
    )

}

export default Contact