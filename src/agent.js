import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';

const superagent = superagentPromise(_superagent, global.Promise);

const API_ROOT = 'http://localhost:3000/api';

const responseBody = (res) => res.body;

const requests = {
  get: (url) => superagent.get(`${API_ROOT}${url}`).then(responseBody),
  post: (url, body) =>
  superagent.post(`${API_ROOT}${url}`, body).then(responseBody);
};

const Babies = {
  all: (page) => requests.get(`/babies`),
};

const Auth = {
  login: (email, password) => requests.post('/users/login', {user: {email, password}})
}

export default {
  Auth,
  Babies,
};
