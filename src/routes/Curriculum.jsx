import Menu from "../components/Menu"

const Curriculum = () => {

    return (
        <>
            <Menu />
            <div className="container curriculum d-flex flex-column">

                <div className="w-100 gap-4 d-flex">
                    <div className="w-50">
                        <img className="w-100" src="./images/cv.jpg" />
                    </div>
                    <div className="yellow-square-curriculum w-50">
                        <h1 className="basement no-visible-responsive text-end">Curriculum<br />Vitae</h1>
                        <h1 className="basement visible-responsive text-end">CV</h1>
                    </div>
                </div>

                <h3 className="basement mt-auto pt-5">2023</h3>
            </div>
        </>
    )

}

export default Curriculum