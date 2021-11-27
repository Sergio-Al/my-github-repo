import React from "react";
import styled from "styled-components";
import { ListProjects } from "../../components/List/List";

const GlassContent = styled.div`
  background: rgba(196, 196, 196, 0.055);
  backdrop-filter: blur(82.044px);
  box-sizing: border-box;
  box-shadow: inset 31.8px -31.8px 31.8px rgba(149, 149, 149, 0.055),
    inset -31.8px 31.8px 31.8px rgba(255, 255, 255, 0.055);
  border-radius: 20px;
  color: white;
  height: 512px;
  padding: 50px 40px;
  width: 440px;
`;

const ContentWrapper = styled.div`
  overflow: hidden;
  height: 100%;
`;

export default function CardProjects({ items = [] }) {
  return (
    <GlassContent>
      <ContentWrapper>
        <ListProjects items={items} title="Projects" />
      </ContentWrapper>
    </GlassContent>
  );
}
