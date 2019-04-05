import React from "react";
import {Card, Icon, Image, Segment} from "semantic-ui-react";



const Testimonial = props => (
  <Segment style={{border: "0", boxShadow: "none"}}>
    <Card>
      <Image src={props.image} />
      <Card.Content>
        <Card.Header>{props.name}</Card.Header>
        {/* <Card.Meta>
          <span className="date">Joined in 2015</span>
        </Card.Meta> */}
        <Card.Description>{props.description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Icon name="user" />
        From
        <a> {props.from}</a>
      </Card.Content>
    </Card>
  </Segment>
);

export default Testimonial;
