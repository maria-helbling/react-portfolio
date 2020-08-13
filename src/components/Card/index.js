import React, {useState} from 'react'
import './style.css'

function Card(props) {
// transfer javascript over too for this to work and then split card content up into a json file
 const [classToggle, setClassToggle] = useState('');

const handleClassToggle = () => {
    if (classToggle === 'card--flipped') {
        setClassToggle('')
    } else {
        setClassToggle('card--flipped')
    }
}
    return (
        <>
            <div className={"flipcard " + classToggle } onClick={handleClassToggle}>
                <div className="card__inner">
                    <div className="card__back">
                        <div className=" grid-container">
                            <div className="grid-x">
                                <div className="cell text-center details-heading">
                                    <h5>{props.proj.title}</h5>
                                </div>
                                <div className="cell">
                                    <h6><strong>User story</strong></h6>
                                    <p>{props.proj.userStory[0]} 
                                    <br/>
                                    {props.proj.userStory[1]}
                                    <br />
                                    {props.proj.userStory[2]}</p>
                                    <hr />
                                </div>
                            </div>
                            <div className="grid-x">
                                <div className="cell small-8">
                                    <h6><strong>Technical notes</strong></h6>
                                    <p>{props.proj.technicalNotes[0]} <br />
                                    {props.proj.technicalNotes[1]}</p>
                                </div>
                                <div className="cell small-4 resources p-2">
                                    <h6>Resources</h6>
                                    <ul>
                                        {props.proj.resources.map(element => <li>{element}</li>)}
                                    </ul>
                                </div>
                            </div>
                            <div className="grid-x">
                                <div className="cell">
                                    <hr />
                                    <h6><strong>My role</strong></h6>
                                    <p> {props.proj.myRole} </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card__front">
                        <div className="grid-x">
                            <div className="cell">
                                <div className="card-section">
                                    <a href={props.proj.siteUrl} target="blank">
                                        <img src={props.img} alt={"Screenshot of "+props.proj.title+" page"} />
                                    </a>
                                </div>
                                <div className="card-section">
                                    <h3 className="card-title h4">{props.proj.title}</h3>
                                    <p className="card-text"> {props.proj.description} </p>
                                    <div className="card-divider">
                                        <a className="button mb-1" role="button">Details</a>
                                        <a className="button mb-1" onClick="event.stopPropagation();"
                                            href={props.proj.gitHub} target="blank"
                                            role="button">GitHub</a>
                                        <a className="button mb-1" onClick="event.stopPropagation();"
                                            href={props.proj.siteUrl} target="blank"
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