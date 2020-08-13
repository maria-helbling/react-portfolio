import React from 'react'
import Card from '../components/Card'
import Projects from '../projects.json'
import covidocity from '../assets/img/covidocity.png'
import drawscape from '../assets/img/drawscape.png'
import quizgame from '../assets/img/quizgame.png'
import weather from '../assets/img/weather.png'


function Portfolio() {
    return (
        <>
            <main className="grid-container">

                <div className="grid-x">
                    <div className="cell">
                        <h2 className="mb-5">Selection of past projects</h2>
                        <p className="mb-5"> This is an overview of the more interesting projects I have been involved in.
                    Feel free to flip through.</p>
                    </div>
                </div>

                <div className="grid-x grid-margin-x grid-margin-y" >

                    
                        
                        <div className="cell medium-6 large-4 mb-4">
                            <Card proj={Projects[0]} img={drawscape}/>
                        </div>
                        <div className="cell medium-6 large-4 mb-4">
                            <Card proj={Projects[1]} img={covidocity}/>
                        </div>
                        <div className="cell medium-6 large-4 mb-4">
                            <Card proj={Projects[2]} img={quizgame}/>
                        </div>
                        <div className="cell medium-6 large-4 mb-4">
                            <Card proj={Projects[3]} img={weather}/>
                        </div>
                        
                    
                </div>
            </main>
        </>
    )
}

export default Portfolio;