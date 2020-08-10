import React from 'react'
import './style.css'

function Card() {

    return (
        <>
            <div className="flipcard">
                <div className="card__inner">
                    <div className="card__back">
                        <div className=" grid-container">
                            <div className="grid-x">
                                <div className="cell text-center details-heading">
                                    <h5>DrawScape</h5>
                                </div>
                                <div className="cell">
                                    <h6><strong>User story</strong></h6>
                                    <p>AS a person in quarantine, who is forced to socialise online with friends and
                                        relatives <br />
                                        THEY want to have interactive real time parlour games in this new online world
                                        <br />
                                        SO THAT they could spend quality time with their loved ones </p>
                                    <hr />
                                </div>
                            </div>
                            <div className="grid-x">
                                <div className="cell small-8">
                                    <h6><strong>Technical notes</strong></h6>
                                    <p>MySQL for data persistency in the game rooms. <br />
                                            CreateJS for touch responsive drawing and socket.io for web socket use</p>
                                </div>
                                <div className="cell small-4 resources p-2">
                                    <h6>Resources</h6>
                                    <ul>
                                        <li>handlebars</li>
                                        <li>Materialize</li>
                                        <li>jQuery</li>
                                        <li>Sequelize</li>
                                        <li>Express</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="grid-x">
                                <div className="cell">
                                    <hr />
                                    <h6><strong>My role</strong></h6>
                                    <p>As part of a team of 4: drawing functionality, socket.io, part of the game
                                            algorithm.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card__front">
                        <div className="grid-x">
                            <div className="cell">
                                <div className="card-section">
                                    <a href="https://drawscape.herokuapp.com" target="blank">
                                        <img src="assets/img/drawscape.png" alt="Screenshot of drawscape page" />
                                    </a>
                                </div>
                                <div className="card-section">
                                    <h3 className="card-title h4">DrawScape</h3>
                                    <p className="card-text">Live drawing and chat app utilising socket.io and createJS
                                        </p>
                                    <div className="card-divider">
                                        <a className="button mb-1" role="button">Details</a>
                                        <a className="button mb-1" onclick="event.stopPropagation();"
                                            href="https://github.com/indyminhas/DrawScape" target="blank"
                                            role="button">GitHub</a>
                                        <a className="button mb-1" onclick="event.stopPropagation();"
                                            href="https://drawscape.herokuapp.com" target="blank"
                                            role="button">WWW</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;