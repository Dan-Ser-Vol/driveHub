import { environment } from '../../environment';

export { environment } from '../environments';

const { BASE_API } = environment;

const auth = `${BASE_API}auth`;
const users = `${BASE_API}users`;

const urls = {
  auth: {
    register: `${auth}/register`,
    login: `${auth}/login`,
    logout: `${auth}/logout`,
  },
  users: {
    base: users,
  },
};

export { urls };
