import { reg } from 'services/home';
export default {
  namespace: 'home',
  state: {
    'list':{
      'productList': '',
      'bannerList': ''
    }
  },
  effects: {
    
  },
  reducers: {
    setData(state, { payload }) {
      return {
        ...state,
        list: payload,
      }
    }
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, search }) => {
        if (pathname == '/home'||pathname == '/') {
          dispatch({
            type: 'reg',
          });
        }
      });
    },
  },
};
