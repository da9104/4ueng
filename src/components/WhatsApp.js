import React from "react";
import {Button, Icon, Modal} from "semantic-ui-react";

const WhatsApp = props => (
  <Modal
    trigger={
      <div style={{margin: "0 auto"}}>
        <Button id="button--modal">
          <Icon name="whatsapp" />
          Join the whats app
        </Button>
      </div>
    }
    closeIcon
  >
    <Modal.Content>
      <iframe
        src="https://gumroad.com/foryourenglish"
        title="title"
        width="850"
        height="650"
        style={{border: "0", margin: "0 auto"}}
      />
    </Modal.Content>
  </Modal>
);

export default WhatsApp;
