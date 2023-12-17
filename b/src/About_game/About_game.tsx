import React from 'react';
import './About_game.css'

function About_game() {
    return (
        <>
            <div className="container"><div className="box_right">
                <img src="/image/rules.png" alt="logo" />
            </div>
                <div className="box_left">
<div className="left_top"> <h1>
                        Rules for tigers:    </h1>

                    <p>They can move to an adjacent free position along the lines.
                        They can capture goats during any move, and do not need to wait until all goats are placed.
                        They can capture only one goat at a time.
                        They can jump over a goat in any direction, as long as there is an open space for the tiger to complete its turn.
                        A tiger cannot jump over another tiger.</p>
                    <h1>Rules for Goats:    </h1>

                    <p>Goats cannot move until all goats have been positioned on the board.
                        They must leave the board when captured.
                        They cannot jump over tigers or other goats.</p></div>

                        <div className="result">
                        <p>The game is over when either, the tigers capture five goats, or the goats have blocked the tigers from being able to move.
                    </p></div>
                   </div>

                 





            </div>
            
        </>

    )
}

export default About_game