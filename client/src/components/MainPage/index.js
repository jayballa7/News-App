import React from 'react';
import '../../styles/MainPage.scss';
import '../../styles/Variables.scss';
import { Link} from "react-router-dom";
import Ticker from "../Ticker.js";
import Logo from "../Logo.js";
import Searchbox from "../Searchbox.js";
import Weather from "../Weather.js";
import NewsImg from '../../img/test-img.jpg';

function MainPage(props) {
    return(
        <div className="container">
            <div className="mainpage">
            <div className="card">
                <div className="mp-cell header">
                    <Logo />
                </div>
                <div className="mp-cell username">
                <div className="card__text">

    <h3 className="card--header">Welcome {props.email}</h3>

                    </div>
                </div>
                <div className="mp-cell weather-box">
                    <div className="card__text">
                        <Weather />
                    </div>
                </div>
                <div className="s-cell searchbox">
                        <Searchbox />
                        <h3 className="headlines-text">Latest Headlines</h3>
                </div>
                <div className="mp-cell signup">
                <div className="card__text">
                        <button className="login-btn" onClick={props.handleSignup}>Login/Signup</button>
                        <div><p className = "hasAccount"><Link to ='/settings' className = "settingsLink">Settings</Link></p></div>
                    </div>
                </div>
               
                {props.loggedInArticles.map((article,index)=>(
                <div className={"mp-cell sidebox-"+index}>
                    <div className="card--profile">
                        <img className = "img" src={article.urlToImage} alt="news-img" />
                    </div>
                       <div className="card__text">
                       <h5 className="card--header">{article.title}</h5>
                       <div className="separator"></div>
                       <div className="card--footer"><button className="btn">Read</button></div>
                   </div>
                   </div>
                ))} 
                
                {props.news.map((article,index)=>(
                <div className={"mp-cell sidebox-"+index}>
                    <div className="card--profile">
                        <img className = "img" src={article.urlToImage} alt="news-img"/>
                    </div>
                       <div className="card__text">
                       <h5 className="card--header">{article.title}</h5>
                       <div className="separator"></div>
                       <div className="card--footer"><button className="btn">Read</button></div>
                   </div>
                   </div>
                ))} 
                
                 {/* <div className="ticker-cell ticker">
                    <Ticker />
                </div> */}
            </div>

                           
            </div>

            <div className="ticker-cell ticker">
                    <Ticker />
                </div>
        </div>
    )
}


export default MainPage;