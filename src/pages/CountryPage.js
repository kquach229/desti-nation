import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import axios from "axios";
import NavBar from "../components/NavBar";
import AOS from 'aos';

const Access_Key = '0InqypeOVs3S3e3UvXqyzgloNgC1pScmHmATq8zeHDs';
const Secret_Key = 'kkqnG2MvkCW9H0-tzidQ3nYsxMbWDzNjE3dTeMFDCYE';

class CountryPage extends React.Component{

    

    state = {
        country: null,
        photos: null
    }

    
    componentDidMount() {
        axios.get(`https://restcountries.eu/rest/v2/name/${this.props.match.params.name}`)
            .then(response=> {
                this.setState({
                    country: response.data[0]
                })
                console.log(this.state.country)
            })
            axios.get(`https://api.unsplash.com/search/photos?client_id=${Access_Key}&query=${this.props.match.params.name}`)
            .then(response=> {
                this.setState({
                    photos: response.data
                })
                console.log(this.state.photos)
               
            })
            AOS.init({
                duration: 1000
            });
    }

    


    render() {
        
        if(!this.state.country){
            return <p>Loading</p>
         }

         if(!this.state.photos){
            return <p>Loading</p>
         }

       
        return(
            <div className="countryPageBack">
                <NavBar/>
                 <div className="countryContainer">
                     <div className="countryAndFlag animate__bounceIn">
                        <h1 className="countryPageTitle">{`${this.props.match.params.name} - (${this.state.country.nativeName})`}</h1>
                        <img className="countryPageFlag" src={this.state.country.flag}/>
                    </div>
                    <div data-aos="fade-left" className="countryBasics">
                        <h3 className="sectionTitle">Basic Info</h3>
                        <div className="basicDesc">{`Located in ${this.state.country.region}, ${this.state.country.name} has a population of ${this.state.country.population} people`}</div>
                        <div className="propertyName">Currency: <span className="propertyValue">{this.state.country.currencies[0].name} - {`${this.state.country.currencies[0].symbol}`}</span></div>
                        <div className="propertyName">Langauges Spoken: <span className="propertyValue">{this.state.country.languages[0].name}</span></div>
                        <div className="propertyName">Capitols: <span className="propertyValue">{this.state.country.capital}</span></div>
                    </div>
                    <div data-aos="fade-right" className="countryRegion">
                        <h3 className="sectionTitle">Regional Info</h3>
                        <div className="propertyName">Region: <span className="propertyValue">{this.state.country.region}</span></div>
                        <div className="propertyName">Subregion: <span className="propertyValue">{this.state.country.subregion}</span></div>
                        <div className="propertyName">Timezones: <span className="propertyValue">{this.state.country.timezones}</span></div>
                        <div className="propertyName">Area: <span className="propertyValue">{this.state.country.area}</span></div>
                    </div>
                    <div data-aos="fade-left" className="countryOthers">
                        <h3 className="sectionTitle">Other Info</h3>
                        <div className="propertyName">Calling Code: <span className="propertyValue">{this.state.country.callingCodes}</span></div> 
                        <div className="propertyName">Country Code: <span className="propertyValue">{this.state.country.alpha3Code}</span></div>
                        <div className="propertyName">Main Domain: <span className="propertyValue">{this.state.country.topLevelDomain}</span></div>
                    </div>
                   <div data-aos="zoom-in" className="galleryContainer">
                       <img className="imageItem1" src={this.state.photos.results[0].urls.small}/>
                       <img className="imageItem2" src={this.state.photos.results[1].urls.small}/>
                       <img className="imageItem3" src={this.state.photos.results[2].urls.small}/>
                       <img className="imageItem4" src={this.state.photos.results[3].urls.small}/>
                       <img className="imageItem5" src={this.state.photos.results[4].urls.small}/>
                       <img className="imageItem6" src={this.state.photos.results[6].urls.small}/>
                       <img className="imageItem7" src={this.state.photos.results[7].urls.small}/>
                       <img className="imageItem8" src={this.state.photos.results[8].urls.small}/>
                   </div>
            </div>
            <Footer/>
            </div>
           
        )
    }
}

export default CountryPage;