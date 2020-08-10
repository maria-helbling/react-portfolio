import React from 'react'
import Card from '../components/Card'


function Portfolio() {
    return (
        <>
            <main class="grid-container">

                <div class="grid-x">
                    <div class="cell">
                        <h2 class="mb-5">Selection of past projects</h2>
                        <p class="mb-5"> This is an overview of the more interesting projects I have been involved in.
                    Feel free to flip through.</p>
                    </div>
                </div>

                <div class="grid-x grid-margin-x grid-margin-y" >

                    <div class="cell medium-6 large-4 mb-4">
                        <Card/>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Portfolio;