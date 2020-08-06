import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Kim Hyeon Gu</h2>
            <img
              src="https://www.blexar.com/avatar.png"
              alt="avater"
              style={{ height: "250px" }}
            />
            <p style={{ width: "75%", margin: "auto", marginTop: "1em" }}>
              qweoijwrjiewijagijoewjgioeojojgewjogojgejogejogewjogwejogejog
              eqwljieqwijeijqwjwieqijqwjiqweijjqiwejijqiwejqwiejiqwjeiqjweijqweijqw
              qwkejiqwjeiwqjeiqjweiqjweijqwiejiqwjeiqwjeiqjweijldsjfklads/nv
              eqwrjew'kgfnmewklagmnklmge'akwrmga'lkfopawe'giwerutpw'
            </p>
          </Cell>

          <Cell col={6}>
            <h2> Contact Me </h2>
            <hr />
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize:'35px', fontFamily: 'Anton'}}> <i className="fa fa-google" aria-hidden="true"/> csu02049@naver.com </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent style={{fontSize:'35px', fontFamily: 'Anton'}}> <i className="fa fa-google" aria-hidden="true"/> none </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent style={{fontSize:'35px', fontFamily: 'Anton'}}> <i className="fa fa-google" aria-hidden="true"/> none </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
