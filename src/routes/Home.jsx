import Menu from "../components/Menu"

const Home = () => {

    return (
        <>
            <Menu />
            <div className="container home justify-content-center d-flex">
                <div className="d-flex flex-column align-items-center home-flex">
                    <h1 className="basement text-end mobile-only">Hello<br />I'm Daniel Napoli</h1>
                    <img src="./images/profilepic.svg" className="profile-pic-image" />
                    <img src="./images/xgroup.svg" className="xgroup" />
                </div>
                <div className="d-flex flex-column gap-4">
                    <div>
                        <h1 className="basement text-end web-only">Hello<br />I'm Daniel Napoli</h1>
                        <h1 className="basement-small text-end yellow-text">Fullstack developer</h1>
                    </div>
                    <span className="yellow-square w-100 p-5 d-flex flex-column justify-content-between">
                        <p className="aileron-black yellow-text home-description">I’m a dedicated software engineer, super passionate
                            about Web Development and Digital<br className="line-jump" /> Design!</p>
                        <br className="web-only"/>
                        <br className="web-only"/>
                        <img src="./images/3dots.svg" className="dots" />
                    </span>
                </div>
            </div>
            <h3 className="basement home-date date">202<span className="yellow-text">4</span></h3>
        </>
    )

}

export default Home