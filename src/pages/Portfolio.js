import React from 'react'
import Card from '../components/Card'
import Projects from '../projects.json'


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

                    
                        {Projects.map(proj => (
                            <div className="cell medium-6 large-4 mb-4">
                        <Card proj={proj}/>
                        </div>
                        ))}
                    
                </div>
            </main>
        </>
    )
}

export default Portfolio;