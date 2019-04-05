import React, {Component} from "react";
import {Icon} from "semantic-ui-react";
import styled from "styled-components";
import {Controller, Scene} from "react-scrollmagic";
import {Tween, Timeline} from "react-gsap";
import Contact from "./Contact";

const Sticky2Styled = styled.div`
  overflow: hidden;
  .section {
    .sticky {
      width: 100%;
      height: 100%;
      opacity: 1;
    }

    #animation {
      position: fixed;
    }

    #headeing {
      position: fixed;
      opacity: 0;
    }
  }
`;

class App extends Component {
  render() {
    return (
      <div>
        <Sticky2Styled>
          <div className="section">
            <Controller>
              <header>
                <Scene triggerHook="onLeave" duration={600} pin>
                  {progress => (
                    <div className="sticky">
                      <Timeline totalProgress={progress} paused>
                        <Tween
                          from={{x: "0", top: "0"}}
                          to={{x: "60%", top: "10%"}}
                        >
                          <p className="subtitle--small" id="animation">
                            #1 Ranked Best Seller English Course
                          </p>
                        </Tween>
                        {/* <Timeline totalProgress={progress} paused> */}

                        <Tween
                          from={{x: "0", top: "5%"}}
                          to={{x: "20", top: "10%", opacity: 1}}
                          stagger={0.1}
                        >
                          <h1 id="heading">
                            <span>for your</span> english
                          </h1>
                        </Tween>
                      </Timeline>
                    </div>
                  )}
                </Scene>
                <div className="subtitle">
                  <div className="bottom">
                    <p>
                      <Icon name="asterisk" color="grey" size="large" />
                      Your fluency English here.
                    </p>
                    <h2>Daily your english!</h2>
                    <Contact style={{padding: "0 2.5rem"}} />
                    <p
                      style={{marginTop: "10px", fontSize: "0.9rem"}}
                      id="trigger"
                    >
                      <i className="youtube icon medium pink inverted" /> Watch
                      videos
                    </p>
                  </div>
                </div>
                {/* <img src="/images/1482753-unsplash.png" alt="" /> */}
                <img src="./images/unsplash.png" alt="" />
              </header>
            </Controller>
          </div>
        </Sticky2Styled>
        <div className="section" />
      </div>
    );
  }
}

export default App;
