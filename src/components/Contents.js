import React, {Component} from "react";
import {Grid, Icon} from "semantic-ui-react";
// import ScrollMagic from "scrollmagic";
import Testimonial from "./Tesnti";
import WhatsApp from "./WhatsApp";
import CoursesCard from "./Courses";

const imageSrc = {
  courseOne: "./images/eng_slang.jpg",
  courseTwo: "./images/eng_phrase.jpg",
  courseThree: "./images/eng_gramm.jpg",
  testiOne: "./images/matthew.png",
  testiTwo: "./images/molly.png",
  testiThree: "./images/steve.jpg",
};

class Contents extends Component {
  render() {
    return (
      <div className="content" style={{marginBottom: 0, paddingBottom: 0}}>
        <div className="centent--top">
          <Grid>
            <div className="content--intro">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ea
                est accusantium ut rem sunt dicta quos non, omnis dolores aut
                numquam doloremque saepe praesentium expedita nesciunt accusamus
                sint autem. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Ipsa ea est accusantium ut rem sunt dicta quos non, omnis
              </p>
            </div>
            <Grid.Row column={6} style={{display: "flex"}} only="computer">
              <div className="feature" />

              <div className="feature--playmark">
                <Icon.Group
                  size="huge"
                  style={{margin: "0 auto", padding: 0, textAlign: "center"}}
                >
                  <Icon name="circle" color="pink" />
                  <Icon name="play" inverted size="tiny" />
                </Icon.Group>
              </div>
            </Grid.Row>
            <Grid.Row column={2}>
              <Grid.Column floated="right" only="computer" textAlign="center">
                <div className="feature--profile">
                  <div className="profile--intro">
                    <h1>
                      Hello <span> I'm Kallan </span>
                    </h1>
                    <div className="profile--intro--sub">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Consequuntur, vitae consequatur ullam provident tenetur
                      magnam! Nam aut atque ipsum, qui placeat repellat
                      recusandae praesentium? Id quae consectetur inventore
                      beatae obcaecati.
                    </div>
                  </div>
                  <div className="content--profile">
                    <img
                      className="profile--image"
                      src="images/kall.jpg"
                      alt="profile"
                    />
                  </div>
                  <div className="profile--bio">
                    <h5 style={{textAlign: "right"}}>{"  "}@foryourenglish</h5>
                    <p style={{visibility: "hidden"}}>...</p>
                  </div>
                </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>

          {/* Wave Svg Start */}
          <div className="feature--container">
            <div className="wave--top">
              <svg
                className="wave--color"
                preserveAspectRatio="none"
                style={{width: "100%"}}
                viewBox="0 0 500 150"
              >
                <path
                  d="M0.00,92.27 C216.83,192.92 304.30,8.39 500.00,109.03 L500.00,0.00 L0.00,0.00 Z"
                  style={{
                    stroke: "none",
                    stopColor: "rgb(255,2,2)",
                  }}
                />
              </svg>
            </div>

            <hr
              style={{
                backgroundColor: "#fff",
                margin: "0 auto",
                border: "2px solid #fff",
              }}
            />

            <div
              className="feature--middle"
              style={{
                display: "flex",
                alignContent: "center",
                justifyContent: "center",
              }}
            >
              <p className="feature--description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
                obcaecati sequi rem. Quidem illum dolores doloribus veritatis,
                tempora voluptatem doloremque! Architecto exercitationem
                obcaecati possimus ea vitae sapiente inventore facilis eos?
              </p>
              <Grid
                className="floating--center"
                padded="vertically"
                container
                centered
                columns="equal"
                computer={3}
                stretched
                floated="right"
              >
                <Grid.Row
                  reversed="mobile tablet"
                  mobile={1}
                  computer={3}
                  centered
                  stretched
                  container
                >
                  <Grid.Column textAlign="center" floated="right">
                    <CoursesCard
                      name="500+ American Slang"
                      description="Biggest and most up-to-date American slang course to sound like a native speaker."
                      image={imageSrc.courseOne}
                      level="A1-C1 Grammar"
                    />
                  </Grid.Column>
                  <Grid.Column textAlign="center">
                    <CoursesCard
                      name="300+ Phrasal verbs"
                      description="Learn the most important and common phrasal verbs in the English language."
                      image={imageSrc.courseTwo}
                      level="Vocabulary course"
                    />
                  </Grid.Column>
                  <Grid.Column textAlign="center">
                    <CoursesCard
                      name="English Grammar Pro"
                      description="The Complete Grammar course to finish studying grammar."
                      image={imageSrc.courseThree}
                      level="Vocabulary course"
                    />
                  </Grid.Column>
                </Grid.Row>
              </Grid>

              <button
                className="button"
                style={{marginTop: "20px"}}
                id="#trigger"
              >
                <a href="https://www.udemy.com/easy-english-grammar-course/?couponCode=FYESITE">
                  View courses
                </a>
              </button>

              <div className="wave--bottom">
                <svg
                  className="wave--color"
                  preserveAspectRatio="none"
                  style={{width: "100%", marginTop: 0, padding: 0}}
                  viewBox="0 0 500 150"
                >
                  <path
                    d="M0.00,92.27 C216.83,192.92 304.30,8.39 500.00,109.03 L500.00,0.00 L0.00,0.00 Z"
                    style={{
                      stroke: "none",
                      stopColor: "rgb(255,2,2)",
                    }}
                  />
                </svg>
              </div>
            </div>
          </div>

          <p>
            doloremque saepe praesentium expedita nesciunt accusamus sint autem.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ea est
            accusantium ut rem sunt dicta quos non, omnis dolores aut numquam
            doloremque saepe praesentium expedita nesciunt accusamus sint autem.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ea est
          </p>

          {/* <h1 className="testimonial">
            <Icon name="hashtag" /> Features
          </h1> */}
          <div className="feature--col--3">
            <div className="feature--sub">
              <Icon
                name="bullhorn"
                size="huge"
                color="blue"
                inverted
                circular
                fitted
              />
              <h4>Daily live resourses</h4>
            </div>
            <div className="feature--sub">
              <Icon
                name="chart line"
                size="huge"
                color="olive"
                inverted
                circular
                fitted
              />
              <h4>To be Fluence English</h4>
            </div>
            <div className="feature--sub">
              <Icon
                name="trophy"
                size="huge"
                color="pink"
                inverted
                circular
                fitted
              />
              <h4>To be Fluence English</h4>
            </div>
          </div>
          <p style={{textAlign: "center"}}>
            <button id="btn--Yellow">
              <a href="https://www.foryourenglish.com" style={{color: "white"}}>
                Learn More
              </a>
            </button>
          </p>
          <hr style={{margin: "0 auto"}} />

          <h1 className="testimonial">
            <Icon name="hashtag" /> Testimonials
          </h1>
          <div className="grid--testi">
            <Grid
              className="floating--center"
              columns="equal"
              padded
              centered
              computer={5}
              container="true"
            >
              <Grid.Row stretched>
                <Grid.Column mobile={16} computer={5}>
                  <Testimonial
                    name="Brown"
                    description="it is the best pharasal verb course you can get."
                    from="Udemy"
                    image={imageSrc.testiOne}
                  />
                </Grid.Column>
                <Grid.Column mobile={16} computer={5}>
                  <Testimonial
                    name="Sam"
                    description="Awesome coures I've ever have!"
                    from="Youtube"
                    image={imageSrc.testiTwo}
                  />
                </Grid.Column>
                <Grid.Column mobile={16} computer={5}>
                  <Testimonial
                    name="Doe"
                    description="A real world english lecture. Thank you so much!"
                    from="Instagram"
                    image={imageSrc.testiThree}
                  />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </div>
          <p>
            doloremque saepe praesentium expedita nesciunt accusamus sint autem.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ea est
            accusantium ut rem sunt dicta quos non, omnis dolores aut numquam
            doloremque saepe praesentium expedita nesciunt accusamus sint autem.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ea est
            accusantium ut rem sunt dicta quos non, omnis dolores aut numquam
            doloremque saepe praesentium expedita nesciunt accusamus sint autem.
          </p>
        </div>
        <div className="content--bottom">
          <WhatsApp />
        </div>
      </div>
    );
  }
}

export default Contents;
