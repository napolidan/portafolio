import Menu from "../components/Menu"

const Curriculum = () => {

    return (
        <>
            <Menu />
            <div className="container curriculum d-flex flex-column">
                <div className="d-flex gap-4">
                    <img className="cv" src="./images/cv.jpg" />
                    <span className="yellow-square w-50 d-flex justify-content-center">
                        <h1 className="basement no-visible-responsive text-end position-absolute">Curriculum<br></br>Vitae</h1>
                        <h1 className="basement visible-responsive">CV</h1>
                        <img className="w-100 opacity-0" src="./images/design1.jpg" />
                    </span>
                </div>

                <h3 className="basement mt-auto pt-5">2023</h3>
            </div>
        </>
    )

}

export default Curriculum