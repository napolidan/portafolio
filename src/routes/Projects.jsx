import Menu from "../components/Menu"

const Projects = () => {

    return (
        <>
            <Menu />
            <div className="container projects mb-4">
                <div className="d-flex gap-4 align-items-center">
                    <h1 className="basement">Some of my web projects</h1>
                    <img src="./images/star.png" alt="" className="squaredots" />
                </div>
                <br />
                <br />
                <br />
                <div className="d-flex projects-flex flex-wrap justify-content-center gap-5">
                    <div className="d-flex flex-column gap-3 align-items-center">
                        <div className="image-cover">
                            <div>
                                <img src="./images/proj1.png" alt="" className="project" />
                            </div>
                        </div>
                        <h1 className="basement-subtitle yellow-text text-center pt-3">Solociencia</h1>
                    </div>
                    <div className="d-flex flex-column gap-3 align-items-center">
                        <div className="image-cover">
                            <div>
                                <img src="./images/proj2.png" alt="" className="project" />
                            </div>
                        </div>
                        <h1 className="basement-subtitle yellow-text text-center pt-3">CSS carousel</h1>
                    </div>
                    <div className="d-flex flex-column gap-3 align-items-center">
                        <div className="image-cover">
                            <div>
                                <img src="./images/proj1.png" alt="" className="project" />
                            </div>
                        </div>
                        <h1 className="basement-subtitle yellow-text text-center pt-3">React Navbar</h1>
                    </div>
                    <div className="d-flex flex-column gap-3 align-items-center">
                        <div className="image-cover">
                            <div>
                                <img src="./images/proj4.png" alt="" className="project" />
                            </div>
                        </div>
                        <h1 className="basement-subtitle yellow-text text-center pt-3">Framer motion modal</h1>
                    </div>
                    <div className="d-flex flex-column gap-3 align-items-center">
                        <div className="image-cover">
                            <div>
                                <img src="./images/proj5.png" alt="" className="project" />
                            </div>
                        </div>
                        <h1 className="basement-subtitle yellow-text text-center pt-3">Framer motion demo</h1>
                    </div>
                    <div className="d-flex flex-column gap-3 align-items-center">
                        <div className="image-cover">
                            <div>
                                <img src="./images/proj6.png" alt="" className="project" />
                            </div>
                        </div>
                        <h1 className="basement-subtitle yellow-text text-center pt-3">Framer motion animation</h1>
                    </div>
                    <div className="d-flex flex-column gap-3 align-items-center">
                        <div className="image-cover">
                            <div>
                                <img src="./images/proj7.png" alt="" className="project" />
                            </div>
                        </div>
                        <h1 className="basement-subtitle yellow-text text-center pt-3">Mixblend demo</h1>
                    </div>
                    <div className="d-flex flex-column gap-3 align-items-center">
                        <div className="image-cover">
                            <div>
                                <img src="./images/proj8.png" alt="" className="project" />
                            </div>
                        </div>
                        <h1 className="basement-subtitle yellow-text text-center pt-3">Page transition</h1>
                    </div>
                    <div className="d-flex flex-column gap-3 align-items-center">
                        <div className="image-cover">
                            <div>
                                <img src="./images/proj9.png" alt="" className="project" />
                            </div>
                        </div>
                        <h1 className="basement-subtitle yellow-text text-center pt-3">Music player</h1>
                    </div>
                    <div className="d-flex flex-column gap-3 align-items-center">
                        <div className="image-cover">
                            <div>
                                <img src="./images/proj10.png" alt="" className="project" />
                            </div>
                        </div>
                        <h1 className="basement-subtitle yellow-text text-center pt-3">CSS-only Navbar</h1>
                    </div>
                    

                </div>
            </div>
            <h3 className="basement date mt-5">202<span className="yellow-text">4</span></h3>
            <h3 className="basement signature">Daniel <span className="yellow-text">Napoli</span></h3>
        </>
    )

}

export default Projects