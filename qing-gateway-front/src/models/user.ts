import { createModel } from 'ice';
import { UserInfo } from '@/api/GlobalInterface';

interface ModelState {
  currentUser: UserInfo;
}

export default createModel({
  state: {
    currentUser: {},
  } as ModelState,
  reducers: {
    updateCurrentUser(prevState: ModelState, payload) {
      prevState.currentUser = payload;
    },
  },
  effects: (dispatch) => ({
    getUserInfo() {
      dispatch.user.update({
        username: 'taobao',
        userId: '123',
      });
    },
  }),
});