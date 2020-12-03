import React, { useReducer } from 'react';
import * as axios from 'axios';
import GitHubContext from './gitHubContext';
import {
  clearUsersAC,
  getReposAC,
  getUserAC,
  gitHubReducer,
  searchUsersAC,
  SetLoadingAC,
} from './gitHubReducer';

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;

const GitHubState = ({ children }) => {
  const [state, dispatch] = useReducer(gitHubReducer, { users: [], user: {}, repos: [] });
  const { user, users, repos, loading } = state;
  const withCred = (url) => {
    return `${url}client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`;
  };

  const searchUsers = async (users) => {
    setLoading(true);
    const response = await axios.get(withCred(`https://api.github.com/search/users?q=${users}&`));
    dispatch(searchUsersAC(response.data.items));
    setLoading(false);
  };

  const getUser = async (name = 'CocoGrub') => {
    setLoading(true);
    const response = await axios.get(withCred(`https://api.github.com/users/${name}?`));
    dispatch(getUserAC(response.data));
    setLoading(false);
  };

  const getRepos = async (name) => {
    setLoading(true);
    const response = await axios.get(withCred(`https://api.github.com/users/${name}/repos?`));
    dispatch(getReposAC(response.data));
    setLoading(false);
  };

  const clearUsers = async () => {
    dispatch(clearUsersAC());
  };

  const setLoading = async (x) => {
    dispatch(SetLoadingAC(x));
  };
  return (
    <GitHubContext.Provider
      value={{
        searchUsers,
        getUser,
        getRepos,
        clearUsers,
        setLoading,
        user,
        users,
        repos,
        loading,
      }}>
      {children}
    </GitHubContext.Provider>
  );
};
export default GitHubState;
