import index from './index';

const FEATURE_PATH = '/view_map_now';

export default [
  {
    path: `${FEATURE_PATH}`,
    component: index,
    exact: true,
  }
];