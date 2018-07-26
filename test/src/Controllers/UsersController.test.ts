import * as mocha from 'mocha';
import * as chai from 'chai';
import chaiHttp = require('chai-http');

import app from '../../../src/App';

chai.use(chaiHttp);
const expect = chai.expect;
const should = chai.should;

/* Put your oauth credentials here */
const client_id = '9bc84b60b92d8f21c88d';
const client_secret = 'a5f9e7db8e953c9861d2959a492d6804c744f163';

/* Mock data */

const since = 2017;  
const username = 'renandanton';

describe('Github Users Endpoints', () => {
  describe('Endpoint GET /users/since/:number', () => {
    
    it('it should return http status code 200.', () => {
      return chai.request(app).get(`/api/users/since/${since}?client_id=${client_id}&client_secret=${client_secret}`)
      .set('content-type', 'application/json')
      .then(res => {
          expect(res.status).to.equal(200);
      });
      done();
    });
    
    it('it should return an  array of users.', () => {
      return chai.request(app).get(`/api/users/since/${since}?client_id=${client_id}&client_secret=${client_secret}`)
      .set('content-type', 'application/json')
      .then(res => {
        expect(res.status).to.equal(200);
        expect(res).to.be.json;
        expect(res.body.payload).to.be.an('array');
      });
      done();
    });
    
    it('it should return a payload object.', () => {
      return chai.request(app).get(`/api/users/since/${since}?client_id=${client_id}&client_secret=${client_secret}`)
      .set('content-type', 'application/json')
      .then(res => {
        expect(res.status).to.equal(200);
        expect(res).to.be.json;
        expect(res.body.payload).to.be.an('array');
        expect(res.body.payload[0]).to.be.an('object');
        expect(res.body.payload[0]).to.have.property('login');
        expect(res.body.payload[0]).to.have.property('id');
        expect(res.body.payload[0]).to.have.property('node_id');
        expect(res.body.payload[0]).to.have.property('avatar_url');
        expect(res.body.payload[0]).to.have.property('gravatar_id');
        expect(res.body.payload[0]).to.have.property('url');
        expect(res.body.payload[0]).to.have.property('html_url');
        expect(res.body.payload[0]).to.have.property('followers_url');
        expect(res.body.payload[0]).to.have.property('following_url');
        expect(res.body.payload[0]).to.have.property('gists_url');
        expect(res.body.payload[0]).to.have.property('starred_url');
        expect(res.body.payload[0]).to.have.property('subscriptions_url');
        expect(res.body.payload[0]).to.have.property('organizations_url');
        expect(res.body.payload[0]).to.have.property('repos_url');
        expect(res.body.payload[0]).to.have.property('events_url');
        expect(res.body.payload[0]).to.have.property('received_events_url');
        expect(res.body.payload[0]).to.have.property('type');
        expect(res.body.payload[0]).to.have.property('site_admin');
      });
      done();
    });  
  });
  
  
  describe('Endpoint GET /users/:username/details', () => {
    
    it('it should return http status code 200.', () => {
      return chai.request(app).get(`/api/users/${username}/details?client_id=${client_id}&client_secret=${client_secret}`)
      .set('content-type', 'application/json')
      .then(res => {
          expect(res.status).to.equal(200);
      });
      done();
    });
    
    it('it should return an array with user details filter by username.', () => {
      return chai.request(app).get(`/api/users/${username}/details?client_id=${client_id}&client_secret=${client_secret}`)
      .set('content-type', 'application/json')
      .then(res => {
        expect(res.status).to.equal(200);
        expect(res).to.be.json;
        expect(res.body.payload).to.be.an('object');
      });
      done();
    });
    
    it('it should return a payload object user details filter by username.', () => {
      return chai.request(app).get(`/api/users/${username}/details?client_id=${client_id}&client_secret=${client_secret}`)
      .set('content-type', 'application/json')
      .then(res => {
        expect(res.status).to.equal(200);
        expect(res).to.be.json;
        expect(res.body.payload).to.be.an('object');
        expect(res.body.payload).to.have.property('login');
        expect(res.body.payload).to.have.property('id');
        expect(res.body.payload).to.have.property('node_id');
        expect(res.body.payload).to.have.property('avatar_url');
        expect(res.body.payload).to.have.property('gravatar_id');
        expect(res.body.payload).to.have.property('url');
        expect(res.body.payload).to.have.property('html_url');
        expect(res.body.payload).to.have.property('followers_url');
        expect(res.body.payload).to.have.property('following_url');
        expect(res.body.payload).to.have.property('gists_url');
        expect(res.body.payload).to.have.property('starred_url');
        expect(res.body.payload).to.have.property('subscriptions_url');
        expect(res.body.payload).to.have.property('organizations_url');
        expect(res.body.payload).to.have.property('repos_url');
        expect(res.body.payload).to.have.property('events_url');
        expect(res.body.payload).to.have.property('received_events_url');
        expect(res.body.payload).to.have.property('type');
        expect(res.body.payload).to.have.property('site_admin');
        expect(res.body.payload).to.have.property('name');
        expect(res.body.payload).to.have.property('company');
        expect(res.body.payload).to.have.property('blog');
        expect(res.body.payload).to.have.property('location');
        expect(res.body.payload).to.have.property('email');
        expect(res.body.payload).to.have.property('bio');
        expect(res.body.payload).to.have.property('public_repos');
        expect(res.body.payload).to.have.property('public_gists');
        expect(res.body.payload).to.have.property('followers');
        expect(res.body.payload).to.have.property('following');
        expect(res.body.payload).to.have.property('created_at');
        expect(res.body.payload).to.have.property('updated_at');
      });
      done();
    });  
  });

  describe('Endpoint GET /users/:username/repos', () => {
  
    it('it should return http status code 200.', () => {
      return chai.request(app).get(`/api/users/${username}/repos?client_id=${client_id}&client_secret=${client_secret}`)
      .set('content-type', 'application/json')
      .then(res => {
          expect(res.status).to.equal(200);
      });
      done();
    });
  
    it('it should return an array with user repos filter by username.', () => {
      return chai.request(app).get(`/api/users/${username}/repos?client_id=${client_id}&client_secret=${client_secret}`)
      .set('content-type', 'application/json')
      .then(res => {
        expect(res.status).to.equal(200);
        expect(res).to.be.json;
        expect(res.body.payload).to.be.an('array');
      });
      done();
    });
  
    it('it should return a payload object user repos filter by username.', () => {
      return chai.request(app).get(`/api/users/${username}/repos?client_id=${client_id}&client_secret=${client_secret}`)
      .set('content-type', 'application/json')
      .then(res => {
        expect(res.status).to.equal(200);
        expect(res).to.be.json;
        expect(res.body.payload).to.be.an('array');
        expect(res.body.payload[0]).to.be.an('object');
        expect(res.body.payload[0]).to.have.property('id');
        expect(res.body.payload[0]).to.have.property('node_id');
        expect(res.body.payload[0]).to.have.property('name');
        expect(res.body.payload[0]).to.have.property('owner');
        expect(res.body.payload[0].owner).to.be.an('object');
        expect(res.body.payload[0]).to.have.property('private');
        expect(res.body.payload[0]).to.have.property('html_url');
        expect(res.body.payload[0]).to.have.property('description');
        expect(res.body.payload[0]).to.have.property('fork');
        expect(res.body.payload[0]).to.have.property('url');
        expect(res.body.payload[0]).to.have.property('forks_url');
        expect(res.body.payload[0]).to.have.property('keys_url');
        expect(res.body.payload[0]).to.have.property('collaborators_url');
        expect(res.body.payload[0]).to.have.property('teams_url');
        expect(res.body.payload[0]).to.have.property('hooks_url');
        expect(res.body.payload[0]).to.have.property('issue_events_url');
        expect(res.body.payload[0]).to.have.property('events_url');
        expect(res.body.payload[0]).to.have.property('assignees_url');
        expect(res.body.payload[0]).to.have.property('branches_url');
        expect(res.body.payload[0]).to.have.property('tags_url');
        expect(res.body.payload[0]).to.have.property('blobs_url');
        expect(res.body.payload[0]).to.have.property('git_tags_url');
        expect(res.body.payload[0]).to.have.property('git_refs_url');
        expect(res.body.payload[0]).to.have.property('trees_url');
        expect(res.body.payload[0]).to.have.property('statuses_url');
        expect(res.body.payload[0]).to.have.property('languages_url');
        expect(res.body.payload[0]).to.have.property('stargazers_url');
        expect(res.body.payload[0]).to.have.property('contributors_url');
        expect(res.body.payload[0]).to.have.property('subscribers_url');
        expect(res.body.payload[0]).to.have.property('subscription_url');
        expect(res.body.payload[0]).to.have.property('commits_url');
        expect(res.body.payload[0]).to.have.property('git_commits_url');
        expect(res.body.payload[0]).to.have.property('comments_url');
        expect(res.body.payload[0]).to.have.property('issue_comment_url');
        expect(res.body.payload[0]).to.have.property('contents_url');
        expect(res.body.payload[0]).to.have.property('compare_url');
        expect(res.body.payload[0]).to.have.property('merges_url');
        expect(res.body.payload[0]).to.have.property('archive_url');
        expect(res.body.payload[0]).to.have.property('downloads_url');
        expect(res.body.payload[0]).to.have.property('issues_url');
        expect(res.body.payload[0]).to.have.property('pulls_url');
        expect(res.body.payload[0]).to.have.property('milestones_url');
        expect(res.body.payload[0]).to.have.property('notifications_url');
        expect(res.body.payload[0]).to.have.property('labels_url');
        expect(res.body.payload[0]).to.have.property('releases_url');
        expect(res.body.payload[0]).to.have.property('deployments_url');
        expect(res.body.payload[0]).to.have.property('created_at');
        expect(res.body.payload[0]).to.have.property('updated_at');
        expect(res.body.payload[0]).to.have.property('pushed_at');
        expect(res.body.payload[0]).to.have.property('git_url');
        expect(res.body.payload[0]).to.have.property('ssh_url');
        expect(res.body.payload[0]).to.have.property('clone_url');
        expect(res.body.payload[0]).to.have.property('svn_url');
        expect(res.body.payload[0]).to.have.property('homepage');
        expect(res.body.payload[0]).to.have.property('size');
        expect(res.body.payload[0]).to.have.property('stargazers_count');
        expect(res.body.payload[0]).to.have.property('watchers_count');
        expect(res.body.payload[0]).to.have.property('language');
        expect(res.body.payload[0]).to.have.property('has_issues');
        expect(res.body.payload[0]).to.have.property('has_projects');
        expect(res.body.payload[0]).to.have.property('has_downloads');
        expect(res.body.payload[0]).to.have.property('has_wiki');
        expect(res.body.payload[0]).to.have.property('has_pages');
        expect(res.body.payload[0]).to.have.property('forks_count');
        expect(res.body.payload[0]).to.have.property('mirror_url');
        expect(res.body.payload[0]).to.have.property('archived');
        expect(res.body.payload[0]).to.have.property('open_issues_count');
        expect(res.body.payload[0]).to.have.property('license');
        expect(res.body.payload[0]).to.have.property('forks');
        expect(res.body.payload[0]).to.have.property('open_issues');
        expect(res.body.payload[0]).to.have.property('watchers');
        expect(res.body.payload[0]).to.have.property('default_branch');
      });
      done();
    });  
  });
  
});