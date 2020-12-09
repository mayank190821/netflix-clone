import React from 'react';
import './homeBody.css';
import HomeData from './home_data.jsx';


// container 1 
function container_1() {
    return (
        <div className="container_1">
            <div className="navbar">
                <h1 className="site-name">NETFLIX</h1>
                <button className="sign-in">Sign In</button>
            </div>
            <div className="Header_content">
                <h1 className="Header_content_1">Unlimited movies, TV<br></br> shows and more.</h1>
                <h2 className="Header_content_2">Watch anywhere. Cancel anytime</h2>
                <h3 className="Header_content_3">
                    Ready to watch? Enter your email to create or restart your membership.
                </h3>
                <form className="email_form">
                    <input type="email" placeholder="Email Address" autoComplete="email">
                    </input>
                    <button type="submit">GET STARTED ></button>
                </form>
            </div>

        </div>
    )
}

// container 2
function container_2_a() {

    return (
        <>
            <div className="container_2_a">
                <div className="cards">
                    <div className="card_1">
                        <h1 className="card_heading">{HomeData[0].heading}</h1>
                        <p className="card_text">{HomeData[0].para_text}</p>
                    </div>
                    <div className="card_2">
                        <img src={HomeData[0].tv_image} alt="404" />
                        <video autoPlay muted loop>
                            <source src={HomeData[0].video}></source>
                        </video>

                    </div>
                </div>
            </div>
        </>
    )

}

function container_2_b() {

    return (
        <>
            <div className="container_2_a">
                <div className="card_2">
                    <img src={HomeData[1].tv_image} alt="404" />
                    <video autoPlay muted loop>
                        <source src={HomeData[1].video}></source>
                    </video>

                </div>
                <div className="cards">
                    <div className="card_1">
                        <h1 className="b_card_heading">{HomeData[1].heading}</h1>
                        <p className="b_card_text">{HomeData[1].para_text}</p>
                    </div>
                </div>
            </div>
        </>
    )

}

function container_2_c() {

    return (
        <>
            <div className="container_2_a">
                <div className="cards">
                    <div className="card_1">
                        <h1 className="card_heading">{HomeData[2].heading}</h1>
                        <p className="card_text">{HomeData[2].para_text}</p>
                    </div>
                </div>
                <div className="card_2_c">
                    <img src={HomeData[2].tv_image} alt="404" />
                    <video autoPlay muted loop>
                        <source src={HomeData[2].video}></source>
                    </video>

                </div>
            </div>
        </>
    )

}

function container_2_d() {

    return (
        <>
            <div className="container_2_a">
                <div className="faq-heading">
                    
                </div>
            </div>

        </>
    )

}

function container_2_e() {

    return (
        <>
            <div className="container_2_a">
            </div>
        </>
    )

}

function HomeBody() {

    return (
        <>
            {container_1()}
            <div className="container_2">
                <>
                    {container_2_a()}
                    {container_2_b()}
                    {container_2_c()}
                    {container_2_d()}
                    {container_2_e()}
                </>
            </div>
        </>
    );

}

export default HomeBody;
