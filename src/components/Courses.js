import React from "react";
import {Card, Icon, Image} from "semantic-ui-react";

class CoursesCard extends React.Component {
  // state = { image: null };
  render() {
    return (
      <Card>
        <Image src={this.props.image} />
        <Card.Content>
          <Card.Header>{this.props.name}</Card.Header>
          <Card.Meta>Created in {this.props.date}</Card.Meta>
          <Card.Description>{this.props.description}</Card.Description>
        </Card.Content>
        <Card.Content extra className="">
          <Icon name="tag" color="grey" />
          Skill level:
          <span style={{ color: '#333333'}}> {this.props.level}</span>
        </Card.Content>
      </Card>
    );
  }
}

export default CoursesCard;
