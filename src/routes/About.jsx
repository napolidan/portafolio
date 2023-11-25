import Menu from "../components/Menu"


const About = () => {

    return (
        <>
            <Menu />
            <div className="container about d-flex flex-column">
                <h1 className="basement">Some things<br />about me</h1>
                <br />

                <section className="d-flex gap-5">
                    <span className="yellow-square"></span>
                    <div>
                        <p className="aileron-black">I’m currently finishing my degree on Software engineer at Universidad Tecnológica de Panamá, Panamá.</p>
                        <p className="aileron-black">I discovered web development to be a passion of mine during my studies, and I’ve been learning since then.</p>
                    </div>
                </section>
                <br />

                <section className="personal d-flex gap-5">
                    <div>
                        <h1 className="basement sub-title">Personal life</h1>
                        <br />
                        <p className="aileron-black">I hit the gym (almost) once per day to keep my life healthy.</p>
                        <br />
                        <p className="aileron-black">Balancing that, I'm a video game enthusiast; there is something special about bugs and glitches in software, so that eventually I worked as a beta tester for a mobile games company.</p>
                        <br />
                        <p className="aileron-black">At some point I held an honorable 23th position in the Smash Ultimate Panamá Rankings during the 2022 season. I’m still proud of that.</p>
                        <br />
                        <img className="no-visible-responsive w-100" src="./images/smash.jpg" />
                    </div>
                    <img className="flex-grow-1" src="./images/gym.jpg" />
                </section>
                <br />
                <br />

                <p className="aileron-black w-75 text-end align-self-end">I acquired my graphic design skills through self-directed learning, exploring the creative landscape on my own terms</p>
                <br />
                <p className="aileron-black w-75 text-end align-self-end">I watched a lot of videos off course. A lot.</p>
                <br />
                <br />
                <section className="designs d-flex gap-5 no-visible-responsive">
                    <div className="text">
                        <h1 className="basement sub-title">Designs</h1>
                        <br />
                        <p className="aileron-black">I create graphic designs both for personal expression and as a professional pursuit in my work.</p>
                        <br />
                        <p className="aileron-black">I hold a special affection for Illustrator.</p>
                        <br />
                        <p className="aileron-black">I have designed logos, creative art using different techniques, power rankings, posters... </p>
                        <br />
                        <p className="aileron-black">I have a little galery that I update time to time on instagram.</p>
                    </div>
                    <div className="images d-flex flex-column flex-grow-1 gap-4">
                        <div className="d-flex w-100 gap-4 flex-shrink-1">
                            <div className="flex-grow-1 d-flex flex-column justify-content-between gap-4">
                                <img src="./images/design1.jpg" />
                                <img src="./images/design2.jpg" />
                                <img src="./images/design3.jpg" />
                            </div>
                            <img className="flex-grow-1" src="./images/insta.jpg" />
                        </div>
                        <div className="d-flex w-100 gap-4">
                            <img className="flex-grow-1" src="./images/design4.jpg" />
                            <div className="flex-grow-1 w-50 power-ranks d-flex flex-column justify-content-between">
                                <img className="power-rank " src="./images/design5.jpg" />
                                <img className="power-rank " src="./images/design6.jpg" />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="visible-responsive d-flex mb-4">
                    <div className="">
                        <h1 className="basement sub-title">Designs</h1>
                        <br />
                        <p className="aileron-black">I create graphic designs both for personal expression and as a professional pursuit in my work.</p>
                        <br />
                        <p className="aileron-black">I hold a special affection for Illustrator.</p>
                        <br />
                        <p className="aileron-black">I have designed logos, creative art using different techniques, power rankings, posters... </p>
                        <br />
                    </div>
                    <div>
                        <img src="./images/design1.jpg" />
                    </div>
                    <div>
                        <img src="./images/design2.jpg" />
                    </div>
                    <div>
                        <img src="./images/design3.jpg" />
                    </div>
                </section>
                <div className="visible-responsive">
                    <br />
                    <p className="aileron-black">I have a little galery that I update time to time on instagram.</p>
                    <br />
                    <div>
                        <img className="w-100" src="./images/insta.jpg" />
                    </div>
                </div>
                <br />
                <br />
                <h3 className="basement mt-auto pt-5">2023</h3>
            </div>
        </>
    )

}

export default About