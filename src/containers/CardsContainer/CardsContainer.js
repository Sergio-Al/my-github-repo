import React, { useEffect, useState, useCallback } from "react";
import styled from "styled-components";
import CardProfile from "../CardProfile/CardProfile";
import CardLoader from "../../components/Skeletons/CardLoader";
import CardProjects from "../CardProjects/CardProjects";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > * {
    margin-bottom: 3rem;
  }

  @media (min-width: 992px) {
    justify-content: space-between;
    flex-direction: row;
  }
`;

export default function CardsContainer() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [listRepos, setListRepos] = useState([]);
  const [error, setError] = useState("");

  const fetchData = useCallback(async () => {
    try {
      let dataRes = await fetch("https://api.github.com/users/sergio-al");
      dataRes = await dataRes.json();
      let repos = await fetch(dataRes.repos_url);
      repos = await repos.json();
      setData(dataRes);
      setListRepos(repos);
      setLoading(false);
    } catch (e) {
      setError(e);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (loading)
    return (
      <CardContainer>
        <CardLoader />
        <CardLoader />
      </CardContainer>
    );

  if (loading || error) return <div>{loading ? "loading..." : error}</div>;

  const profileData = {
    avatar: data.avatar_url,
    bio: data.bio,
    company: data.company,
    country: data.location,
    email: data.email,
    name: data.name,
    url: data.html_url,
  };

  return (
    <CardContainer>
      <CardProfile {...profileData} />
      <CardProjects items={listRepos} />
    </CardContainer>
  );
}
