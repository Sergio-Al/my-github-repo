import React from "react";
import styled from "styled-components";

const LinkCustom = styled.a`
  color: white;
  text-decoration: none;
  transition: all 0.4s ease-in;

  &:hover {
    color: #00bcf5;
    text-decoration: underline;
  }
`;

export default function Link({ title = "", url = "https://google.com" }) {
  return (
    <LinkCustom href={url} target="_blank" rel="noopener noreferrer">
      {title}
    </LinkCustom>
  );
}
