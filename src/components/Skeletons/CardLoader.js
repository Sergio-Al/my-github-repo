import React from "react";
import ContentLoader from "react-content-loader";
import styled from "styled-components";

const DefaultCard = styled.div`
  padding: 30px;
  width: 400px;
  height: 512px;
`;

const BaseCard = () => (
  <ContentLoader
    speed={2}
    width={363}
    height={237}
    backgroundColor={"#1f1a40"}
    foregroundColor={"#2f2e38"}
    viewBox="0 0 363 237"
  >
    {/* Only SVG shapes */}
    <circle cx="53" cy="53" r="50" />
    <rect x="129" y="0" rx="10" ry="10" width="234" height="20" />
    <rect x="129" y="37" rx="10" ry="10" width="234" height="20" />
    <rect x="129" y="67" rx="10" ry="10" width="164" height="20" />
    <rect x="0" y="143" rx="10" ry="10" width="73" height="20" />
    <rect x="0" y="180" rx="10" ry="10" width="73" height="20" />
    <rect x="0" y="217" rx="10" ry="10" width="73" height="20" />
    <rect x="78" y="143" rx="10" ry="10" width="149" height="20" />
    <rect x="78" y="180" rx="10" ry="10" width="149" height="20" />
    <rect x="78" y="217" rx="10" ry="10" width="149" height="20" />
  </ContentLoader>
);

const CardLoader = () => (
  <DefaultCard>
    <BaseCard />
  </DefaultCard>
);

export default CardLoader;
