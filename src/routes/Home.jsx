import Menu from "../components/Menu"

const Home = () => {

    return (
        <>
            <Menu />
            <div className="container home justify-content-center d-flex flex-row">
                <div className="d-flex flex-column align-items-center gap-5">
                    <img src="./images/profilepic.svg" className="profile-pic-image" />
                    <img src="./images/xgroup.svg" className="xgroup" />
                </div>
                <div className="d-flex flex-column gap-4">
                    <div>
                        <h1 className="basement text-end">Hello<br />I'm Daniel Napoli</h1>
                        <h1 className="basement-small text-end yellow-text">Fullstack developer</h1>
                    </div>
                    <span className="yellow-square w-100 p-5 d-flex flex-column justify-content-between">
                        <p className="aileron-black yellow-text">I’m a dedicated software engineering, super passionate
                            about Web Development and Digital Design!</p>
                            <br />
                            <br />
                        <img src="./images/3dots.svg" className="dots" />
                    </span>
                </div>
            </div>
            <h3 className="basement home-date date">202<span className="yellow-text">4</span></h3>
        </>
    )

}

export default Home