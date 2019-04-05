import React from "react";
import {Fab, FabButtons, Link, Icon, FabButton} from "framework7-react";

const Fabtn = () => (
  <Fab position="right-bottom" slot="fixed" color="orange">
    <Icon ios="f7:add" aurora="f7:add" md="material:add" />
    <Icon ios="f7:close" aurora="f7:close" md="material:close" />
    <FabButtons position="top">
      <FabButton label="Action 1">1</FabButton>
      <FabButton label="Action 2">2</FabButton>
    </FabButtons>
  </Fab>
);

export default Fabtn;
