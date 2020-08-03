import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className='landing-grid'>
                    <Cell col={12}>
                    <img
                        src="https://i.dlpng.com/static/png/6860651_preview.png"
                        alt="avater"
                        className="avater-img"
                    />
                    <div className="banner-text">
                        <h1>BlockChain and FrontEnd Devloper</h1>
                    <hr/>
                    <p>HTML/CSS | Bootstrap | JavaScript | React | ReactNative | HyperLedger | Etherelum </p>
                    
                    <div className="social-links">
                    <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                        <i class="fa fa-discord" aria-hidden="true" />
                    </a>

                    <a href="http://github.com/black9" rel="noopener noreferrer" target="_blank">
                        <i class="fa fa-github" aria-hidden="true" />
                    </a>

                    <a href="https://www.facebook.com/100002483773002" rel="noopener noreferrer" target="_blank">
                        <i class="fa fa-facebook" aria-hidden="true" />
                    </a>
                    
                    </div>
                    </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;