import React from "react";
import NavBar from "../components/NavBar";
import axios from "axios";
import CountryList from "../components/CountryList";
import Footer from "../components/Footer";

class Home extends React.Component {

    state = {
        country: "",
        countryList: [],
        error: null
    }

    handleChange = (e) => {
        if(!this.state.countryList) {
            return this.setState({
                error: "Enter a valid country"
            }) 
        } 
        this.setState({
            country: e.target.value,
        })
        console.log(this.state.country)
    }

    handleSubmit = (e) => {
        e.preventDefault();
        axios.get(`https://restcountries.eu/rest/v2/name/${this.state.country}`)
            .then((res)=> {
                console.log(res.data);
                this.setState({
                    countryList:res.data
                })
                console.log(this.state.countryList)
            });
           
    }

    render() {

       
        return (
            <div>
                 <NavBar/>
                 <div className="homeContainer">
                    <div className="container">
                    <h1>DestiNation</h1>
                        <form onSubmit={this.handleSubmit}>
                            <input placeholder="search for a country" id="countryInput" type="text" onChange={this.handleChange}/>
                            <button 
                                type="submit"
                                className="btn waves-effect waves-light submitSearchButton"
                                >
                                    Submit
                                </button>
                        </form>
                        <CountryList 
                            countries={this.state.countryList} 
                            />
                    </div>
            </div> 
            <Footer/>  
            </div>
           
            
        )
    
    }
}

    

export default Home;