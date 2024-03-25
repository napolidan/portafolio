import Menu from "../components/Menu"

const Curriculum = () => {

    return (
        <>
            <Menu />
            <div className="container curriculum d-flex flex-column mb-5">
                <h1 className="basement">Curriculum vitae</h1>
                <br />
                <div className="curriculum-container d-flex justify-content-center">
                    <img className="cv" src="./images/cv.jpg" />
                </div>
            </div>

            <h3 className="basement date mt-5">202<span className="yellow-text">4</span></h3>
            <h3 className="basement signature">Daniel <span className="yellow-text">Napoli</span></h3>
        </>
    )

}

export default Curriculum