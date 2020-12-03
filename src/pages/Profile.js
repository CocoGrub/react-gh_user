import React, { useContext, useEffect } from 'react';
import GitHubContext from '../context/gitHub/gitHubContext';
import { Link } from 'react-router-dom';
import Repos from '../Components/repos';

const Profile = ({ match }) => {
  const { getUser, getRepos, user, repos, loading } = useContext(GitHubContext);
  const url_name = match.params.id;

  useEffect(() => {
    getUser(url_name);
    getRepos(url_name);
  }, []);
  const {
    name,
    company,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
  } = user;
  // if (loading) {
  //     return <p className={"text-center"}>Loading...</p>
  // }

  return (
    <>
      <Link to={'/home'}>to home page</Link>
      <div className={'card mb-4'}>
        <div className={'card-body'}>
          <div className={'row'}>
            <div className={'col-sm-3 text-center'}>
              <img src={avatar_url} style={{ width: '250px' }} />
              <h1>{name}</h1>
              {location && <p>Location:{location}</p>}
            </div>
            <div className={'col'}>
              {bio && (
                <>
                  <h3>BIO</h3>
                  <p>{bio}</p>
                </>
              )}
              <a href={html_url} target={'_blank'} className={'btn btn-dark'}>
                Open profile
              </a>
              <ul>
                {login && (
                  <li>
                    <strong>Username:{login}</strong>
                  </li>
                )}
                {company && (
                  <li>
                    <strong>Company:{company}</strong>
                  </li>
                )}
                {blog && (
                  <li>
                    <strong>Blog:{blog}</strong>
                  </li>
                )}
              </ul>
              <div className={'badge badge-primary'}>Subscribers:{followers}</div>
              <div className={'badge badge-success'}>Subscribed:{following}</div>
              <div className={'badge badge-info'}>Public repos:{public_repos}</div>
              <div className={'badge badge-dark'}>Public gists:{public_gists}</div>
            </div>
          </div>
        </div>
      </div>
      <Repos repos={repos} />
    </>
  );
};
export default Profile;
