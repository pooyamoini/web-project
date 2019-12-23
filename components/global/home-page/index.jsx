import _ from "lodash";
import React, { Component } from "react";
import {
  Grid,
  Header,
  Image,
  Rail,
  Ref,
  Segment,
  Sticky
} from "semantic-ui-react";

const Placeholder = () => (
  <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
);

export default class StickyExamplePushing extends Component {
  render() {
    return (
      <Grid centered columns={3}>
        <Grid.Column>
          <Ref innerRef={React.createRef()}>
            <Segment>
              {_.times(10, i => (
                <Placeholder key={i} />
              ))}

              <Rail position="left">
                <Sticky context={React.createRef()} pushing>
                  <Header as="h3">Stuck Content</Header>
                  <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
                </Sticky>
              </Rail>

              <Rail position="right">
                {_.times(3, i => (
                  <Placeholder key={i} />
                ))}

                <Sticky context={React.createRef()} pushing>
                  <Header as="h3">Stuck Content</Header>
                  <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
                </Sticky>
              </Rail>
            </Segment>
          </Ref>
        </Grid.Column>
      </Grid>
    );
  }
}
