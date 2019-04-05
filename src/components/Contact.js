import React from "react";
import {Button, Icon, Modal} from "semantic-ui-react";

const Contact = () => (
  <Modal
    size="tiny"
    dimmer="inverted"
    trigger={
      <div>
        <Button id="btn--pink">
          <Icon name="mail" style={{color: "#fff"}} />
          Contact
        </Button>
      </div>
    }
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

export default Contact;
