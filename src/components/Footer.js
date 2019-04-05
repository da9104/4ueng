/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {Component} from "react";
import {Grid, Icon, Modal} from "semantic-ui-react";

const ContactModal = () => (
  <Modal
    size="tiny"
    dimmer="inverted"
    trigger={<a style={{color: "#292424"}}>Contact</a>}
    closeIcon
  >
    <Modal.Content style={{display: "flex"}}>
      <iframe
        src="https://www.foryourenglish.com/contact"
        title="title"
        width="425"
        height="900"
        style={{border: "0", margin: "0 auto"}}
      />
    </Modal.Content>
  </Modal>
);

const BlogModal = () => (
  <Modal
    size="tiny"
    dimmer="inverted"
    trigger={<a style={{color: "#292424", cursor: "pointer"}}>Blog</a>}
    closeIcon
  >
    <Modal.Content style={{display: "flex"}}>
      <iframe
        src="https://www.foryourenglish.com/blog"
        title="title"
        width="425"
        height="900"
        style={{border: "0", margin: "0 auto"}}
      />
    </Modal.Content>
  </Modal>
);

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <Grid style={{margin: 0}}>
          <Grid.Row columns={6}>
            <Grid.Column />
            <div className="grid-brand">
              <h1 className="brand">
                for your
                <span> english</span>
              </h1>
            </div>
            <div className="grid-menu">
              <div className="footer--menu">
                <p>{BlogModal()}</p>
                <p>
                  <a href="https://www.youtube.com/channel/UCMarCnGQD3s5f9oc5Icn4sw">
                    YouTube
                  </a>
                </p>
                <p>
                  <a href="https://gumroad.com/foryourenglish">whatsapp</a>
                </p>
                <p>
                  <a href="https://instagram.com/foryourenglish">instagram</a>
                </p>
                <p>
                  <a href="https://www.udemy.com/easy-english-grammar-course/?couponCode=FYESITE">
                    Courses
                  </a>
                </p>
                <p>
                  <a href="https://www.foryourenglish.com/live">daily live </a>
                </p>
              </div>
              <div className="grid-contact">
                <p>{ContactModal()}</p>
              </div>
              <div className="grid-sns">
                <p>Follow Me!</p>
                <div className="sns--icon">
                  <a href="https://www.youtube.com/channel/UCMarCnGQD3s5f9oc5Icn4sw">
                    <Icon
                      circular
                      inverted
                      name="youtube play"
                      color="teal"
                      className="sns--youtube"
                    />
                  </a>
                  <a href="http://fb.me/AskForYourEnglish">
                    <Icon
                      circular
                      inverted
                      name="facebook official"
                      color="teal"
                      className="sns--fb"
                    />
                  </a>
                  <a href="https://instagram.com/foryourenglish">
                    <Icon
                      circular
                      inverted
                      name="instagram"
                      color="teal"
                      className="sns--insta"
                    />
                  </a>
                </div>
              </div>
            </div>
            <Grid.Column />
          </Grid.Row>
          <div className="grid-copy">
            <div className="footer--copyright">
              <p>
                Copyright 2019 all reserved. <br />
                Photo Copyright (c) Unsplash.
              </p>
            </div>
          </div>
        </Grid>
      </div>
    );
  }
}

export default Footer;
