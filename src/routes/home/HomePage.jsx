import { Link } from "react-router-dom"
import "./homePage.css"

const HomePage = () => {
    return (
        <div className='homepage'>
            <img src="/orbital.png" alt="" className="orbital" />
            <div className="left">
                <h1>GOKU AI</h1>
                <h2>Supercharge your prdouctivity and creativity.</h2>
                <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum impedit modi facere repellendus illum voluptatibus similique.</h3>
                <Link to="/dashboard">Get Started</Link>
            </div>
            <div className="right">
                <div className="imgContainer">
                    <div className="bgContainer">
                        <div className="bg"></div>
                    </div>
                    <img src="/bot.png" alt="" className="bot" />
                </div>
            </div>
        </div>
    )
}

export default HomePage