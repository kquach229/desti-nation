import React from "react";

const Landing = (props) => {

    const goToHome = () => {
        props.history.push("/home")
    }
    return(
        <div className="landingContainer">
            <h1>Landing</h1>
            <button onClick={goToHome}>Explore</button>
        </div>
    )
}

export default Landing;