import Menu from "../components/Menu"

const Home = () => {

    return (
        <>
            <Menu />
            <div className="container d-flex flex-column">
                <h1 className="basement text-end">Hello<br />I'm Daniel Napoli</h1>
                <br />
                <span className="yellow-square w-100 p-4 d-flex flex-column justify-content-between">
                    <p className="aileron-black yellow-text w-50">I am a dedicated software engineering student on the verge of graduation,</p>
                    <p className="aileron-black yellow-text w-50 text-end align-self-end">my passion for technology fuels my aspiration to contribute to the tech industry</p>
                </span>
                <br />
                <p className="aileron-black w-50 text-end align-self-end">through the creation of innovative solutions, outside of the box.</p>


                <h3 className="basement mt-auto pt-5">2023</h3>
            </div>
        </>
    )

}

export default Home