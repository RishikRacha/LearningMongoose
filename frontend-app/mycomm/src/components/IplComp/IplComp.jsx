import { useState } from "react";
import "./IplComp.css";


function IplComp() {
    let mi = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4iJZ10qdXePf6d62Ch0dhdBuptoxljUhbWQ&s"
    let csk = "https://upload.wikimedia.org/wikipedia/en/thumb/2/2b/Chennai_Super_Kings_Logo.svg/1200px-Chennai_Super_Kings_Logo.svg.png"
    let [logo, setLogo] = useState(mi);

    function changeLogo() {
        (logo == mi) ? setLogo(csk) : setLogo(mi);
    }


    return (
        <>
            <img src={logo} alt="iplLogo" className="logo" /> <br />
            <button onClick={changeLogo}>Change Team</button>
        </>
    )
}

export default IplComp