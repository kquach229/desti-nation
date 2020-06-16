import React from "react";


const Landing = (props) => {




    const goToHome = () => {
        props.history.push("/home")
    }

    return(
        <div>
            <div className="landingContainer">
            <h1 className="landingTitle">Desti-Nation</h1>
        
            <button className="btn" onClick={goToHome}>Explore</button>
            </div>
        </div>
        
    )
}

export default Landing;