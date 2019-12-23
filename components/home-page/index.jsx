import React from "react";
import { Grid, Image } from "semantic-ui-react";

const GridExampleColumnWidth = () => (
  <Grid centered style={{ marginTop: "5rem", width: '85%', marginLeft: '7.5%', marginRight: '7.5%', }} >
    <Grid.Column width={10}>
      <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" style={{minWidth: '100%'}}/>
    </Grid.Column>
    <Grid.Column width={4}>
      <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
    </Grid.Column>
  </Grid>
);

export default GridExampleColumnWidth;
