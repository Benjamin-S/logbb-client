import superagentPromise from "superagent-promise";
import _superagent from "superagent";

const superagent = superagentPromise(_superagent, global.promise);

const API_ROOT = "http://localhost:3000/";

const responseBody = (res) => res.body;

const requests = {
  get: (url) => superagent.get(`${API_ROOT}${url}`).then(responseBody),
};

const Babies = {
  all: (page) => requests.get(`/babies`),
};

export default {
  Babies,
};
