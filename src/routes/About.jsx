import Menu from "../components/Menu"


const About = () => {

    return (
        <>
            <Menu />
            <div className="container about">
                <h1 className="basement">Something about myself</h1>
                <br />
                <div className="d-flex gap-5">
                    <div className="yellow-square p-3 d-flex justify-content-end align-items-end">
                        <img src="./images/arrows.svg" className="arrows" />
                    </div>
                    <p className="aileron-black">I’m a Software Engineer and also a self-taught Digital Designer. Based in <span className="yellow-text">Venezuela</span>.</p>
                </div>
            </div>
            <div className="container z-3 bg-transparent">
                <h1 className="basement bg-transparent">Digital design</h1>
                <h1 className="basement-small yellow-text bg-transparent">feat my friend Illustrator</h1>
            </div>
            <div className="dark d-flex flex-column align-items-center">
                <img src="./images/designs.png" className="bg-transparent designs-collage" />
                <img src="./images/napzzz.jpg" alt="" className="align-self-end napzzz" />
            </div>
            <div className="container mb-4">
                <div className="d-flex justify-content-between">
                    <h1 className="basement">3D Art</h1>
                    <img src="./images/squaredots.png" alt="" className="squaredots" />
                </div>
                <br />
                <div className="d-flex gap-5">
                    <p className="aileron-black pb-4 art-description">As someone who taught myself the art of 3D modeling, this gallery represents my progression over time.</p>
                </div>
                <div className="d-flex flex-wrap art-gallery">
                    <img src="./images/art1.jpg" alt="" className="art" />
                    <img src="./images/art2.jpg" alt="" className="art" />
                    <img src="./images/art3.jpg" alt="" className="art" />
                    <img src="./images/art4.jpg" alt="" className="art" />
                    <img src="./images/art5.jpg" alt="" className="art" />
                    <img src="./images/art6.jpg" alt="" className="art" />
                    <img src="./images/art7.jpg" alt="" className="art" />
                    <img src="./images/art8.jpg" alt="" className="art" />
                    <img src="./images/art9.jpg" alt="" className="art" />
                    <img src="./images/art10.jpg" alt="" className="art" />
                    <img src="./images/art11.jpg" alt="" className="art" />
                </div>
            </div>
            <div className="container">
                <h1 className="basement pb-4">My hobbies</h1>
                <div className="d-flex justify-content-between">
                    <div className="d-flex gap-5">
                        <p className="aileron-black w-75 pb-4">As much as I like staying inside programming I also spend time at the gym, going out with friends, on a hike, and also attend to E-sports tournaments.</p>
                    </div>
                    <img src="./images/flash.png" alt="" className="flash" />
                </div>
                <br />
                <div className="d-flex myself-gallery">
                    <div className="d-flex flex-column myself-gallery">
                        <img src="./images/pic1.jpeg" alt="" className="pic" />
                        <img src="./images/pic2.jpeg" alt="" className="pic" />
                    </div>
                    <div>
                        <img src="./images/pic3.jpeg" alt="" className="pic" />
                    </div>
                </div>
            </div>
            <div className="container mb-5">
                <h1 className="basement bg-transparent">Check out my projects!</h1>
                <div className="d-flex gap-2 align-items-center">
                    <h1 className="basement-small yellow-text bg-transparent">...nothing left to say</h1>
                    <img src="./images/arrow.png" alt="" className="arrow pb-1" />
                </div>
            </div>
            <h3 className="basement date mt-5">202<span className="yellow-text">4</span></h3>
            <h3 className="basement signature web-only">Daniel <span className="yellow-text">Napoli</span></h3>
        </>
    )

}

export default About