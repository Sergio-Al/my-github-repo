import React from "react";
import styled from "styled-components";
import Link from "../Link/Link";

const TitleBody = styled.span`
  color: white;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
`;

const Label = styled.span`
  font-weight: bold;
  margin-right: 1rem;
`;

const ListWrapper = styled.ul`
  list-style: none;
  text-align: left;
  padding: 0;
`;

const ListProjectWrapper = styled.div`
  margin-top: 10px;
  overflow: scroll;
  height: 100%;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    width: 5px;
  }
  /* Track */
  ::-webkit-scrollbar-track {
    background: #0b002b;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #080080;
    height: 20px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #06005c;
  }
`;

const ListItem = styled.li`
  display: flex;
  margin-bottom: 20px;
`;

const ListItemProject = styled.li`
  margin-top: 8px;
  display: flex;
  padding-bottom: 20px;
  border-bottom: 1px solid white;
`;

const WrapperProjects = styled.div`
  height: 100%;
`;

export function ListProjects({ items = [], title = "" }) {
  console.log(items);
  return (
    <WrapperProjects>
      {title ? <TitleBody>{title}</TitleBody> : ""}
      <ListProjectWrapper>
        <ListWrapper>
          {items.map((item, i) => (
            <ListItemProject key={i}>
              <Link title={item.name} url={item.html_url} />
            </ListItemProject>
          ))}
        </ListWrapper>
      </ListProjectWrapper>
    </WrapperProjects>
  );
}

export default function List({ items = [], title = "" }) {
  return (
    <div>
      {title ? <TitleBody>{title}</TitleBody> : ""}
      <ListWrapper>
        {items.map((item, i) => (
          <ListItem key={i}>
            <Label>{item.label}: </Label>
            {item.value ? item.value : "Not specified"}
          </ListItem>
        ))}
      </ListWrapper>
    </div>
  );
}
