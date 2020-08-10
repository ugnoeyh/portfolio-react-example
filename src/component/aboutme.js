import React, { Component } from 'react';
import { Grid, Cell} from "react-mdl";

class Aboutme extends Component {
    render() {
        return(
            <div> 
                <Grid>
                <Cell col={4}>
                    <div style={{textAlign: 'center'}}>
                        <img
                        src="https://www.blexar.com/avatar.png"
                        alt="avater"
                        style={{height: '200px'}}
                        />
                    </div>

                <h2 style={{paddingTop : '2em'}}> Kim Hyeon Gu </h2>
                <h4 style={{color: 'grey'}}> Programmer </h4>
                <hr style={{borderTop: '3px soild #833fb2', width: '50%'}}></hr>
                <p> 
                </p>
                <hr style={{borderTop: '3px soild #833fb2', width: '50%'}}></hr>
                <h5>Address</h5>
                <p>Korea</p>
                <h5>Phone</h5>
                <p>none</p>
                </Cell>
                <Cell className="resume-right-col" col={8}> 
                    <h2>Right side</h2>
                 </Cell>

                </Grid> 
                </div>
        )
    }
}

export default Aboutme;