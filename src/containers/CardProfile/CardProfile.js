import React from "react";
import styled from "styled-components";
import ProfileCard from "../../assets/images/profile-card.png";
import List from "../../components/List/List";
import GithbuIcon from "../../assets/images/github-icon.svg";
import Link from "../../components/Link/Link";

const Profile = styled.div`
  background: url(${ProfileCard});
  max-width: 512px;
  height: 512px;
  border-radius: 20px;
  color: white;
  padding: 50px 40px;
  box-sizing: border-box;
`;

const HeaderCard = styled.div`
  display: flex;
  margin-bottom: 38px;
`;

const HeaderAvatar = styled.img`
  vertical-align: middle;
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background: white;
`;

const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 28px;
  > * {
    margin: 0 0 12px 0;
  }
`;

const GithubDiv = styled.img`
  position: relative;
  left: 80%;
  top: 10%;
  display: none;

  @media (min-width: 470px) {
    display: block;
  }
`;

export default function CardProfile({
  avatar,
  bio = "",
  company = "",
  country = "",
  email = "",
  name = "",
  url = "",
}) {
  const bodyData = [
    {
      label: "Company",
      value: company,
    },
    {
      label: "Email",
      value: email,
    },
    {
      label: "Bio",
      value: bio,
    },
  ];
  return (
    <Profile>
      <HeaderCard>
        <HeaderAvatar src={avatar} />
        <HeaderContent>
          <h3>Profile Info</h3>
          <Link title={name} url={url} />
          <p>{country}</p>
        </HeaderContent>
      </HeaderCard>
      <List items={bodyData} />
      <GithubDiv src={GithbuIcon} />
    </Profile>
  );
}
