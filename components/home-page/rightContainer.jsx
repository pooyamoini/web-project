import React from "react";
import { Advertisement as Ad } from "semantic-ui-react";
import styled from "styled-components";

const Advertisement = styled(Ad)`
  background: #fff !important;
  border: 1px solid #e6e6e6;
  border-radius: 4px;
  width: 100% !important;
  margin-bottom: 1rem !important;
  margin-top: ${props => props.marginTop} !important;
`;

const AdvertisementExampleAdvertisement = props => (
  <Advertisement unit="medium rectangle" marginTop={props.marginTop} />
);

export default AdvertisementExampleAdvertisement;
