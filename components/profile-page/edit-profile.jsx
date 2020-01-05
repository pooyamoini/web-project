import React from "react";
import { Responsive, Segment } from "semantic-ui-react";
import NoSSR from "react-no-ssr";
import ProfileData from "../../public/json-files/profile";
import Mobile from "./edit-profile-mobile";
import Computer from "./edit-profile-desktop";

const EditProfile = (props) => {
  return (
    <Segment.Group basic>
      <NoSSR>
        <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
          <Mobile data={ProfileData} />
        </Responsive>
        <Responsive
          minWidth={Responsive.onlyTablet.minWidth}
          maxWidth={Responsive.onlyTablet.maxWidth}
        >
          <Computer data={ProfileData} />
        </Responsive>
        <Responsive
          minWidth={Responsive.onlyComputer.minWidth}
          maxWidth={Responsive.onlyComputer.maxWidth}
        >
          <Computer data={ProfileData} />
        </Responsive>
      </NoSSR>
    </Segment.Group>
  );
};
export default EditProfile;
