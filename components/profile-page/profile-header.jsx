import React from "react";
import { Responsive, Segment } from "semantic-ui-react";
import NoSSR from "react-no-ssr";
import ProfileData from "../../public/json-files/profile";
import Mobile from "./profile-header-mobile";
import Computer from "./profile-header-desktop";

const ProfileHeader = () => {
  return (
    <Segment.Group basic>
      <NoSSR>
        <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
          <Mobile data={ProfileData} type="self" />
        </Responsive>
        <Responsive
          minWidth={Responsive.onlyTablet.minWidth}
          maxWidth={Responsive.onlyTablet.maxWidth}
        >
          <Computer data={ProfileData} type="self" />
        </Responsive>
        <Responsive
          minWidth={Responsive.onlyComputer.minWidth}
          maxWidth={Responsive.onlyComputer.maxWidth}
        >
          <Computer data={ProfileData} type="self" />
        </Responsive>
      </NoSSR>
    </Segment.Group>
  );
};
export default ProfileHeader;
