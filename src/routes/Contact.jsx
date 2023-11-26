import Menu from "../components/Menu"

const Contact = () => {

    return (
        <>
            <Menu />
            <div className="container contact d-flex flex-column">
                <h1 className="basement">Contact<br></br>me</h1>
                <br />
                <section className="d-flex gap-5">
                    <span className="yellow-square">
                        <img className="w-100 opacity-0" src="./images/design1.jpg" />
                    </span>
                    <div>
                        <div className="d-flex gap-5 flex-wrap">
                            <div>
                                <h1 className="basement sub-title">Email</h1>
                                <p className="aileron-black">daniel.napolip@gmail.com</p>
                            </div>
                            <div>
                                <h1 className="basement sub-title">Phone number</h1>
                                <p className="aileron-black">+507 6115-6670</p>
                            </div>
                        </div>
                        <br />
                        <br />
                        <h1 className="basement sub-title">My accounts</h1>
                        <br />
                        <p className="aileron-black"><a className="marked" href="https://linkedin.com/in/napolidan" target="_blank">LinkedIn<span className="instagram-sans"> -></span></a></p>
                        <p className="aileron-black"><a className="marked" href="https://github.com/napolidan" target="_blank">Github<span className="instagram-sans"> -></span></a></p>
                        <p className="aileron-black"><a className="marked" href="https://codepen.io/napolidan" target="_blank">Codepen<span className="instagram-sans"> -></span></a></p>

                    </div>
                </section>
                
                <h3 className="basement mt-auto pt-5">2023</h3>
            </div>
        </>
    )

}

export default Contact