// src/models/user.ts

export default {
  // 定义 model 的初始 state
  state: {
    username: 'conghuhu',
    userId: '',
  },

  // 定义改变该模型状态的纯函数
  reducers: {
    update(prevState, payload) {
      return {
        ...prevState,
        ...payload,
      };
    },
  },

  // 定义处理该模型副作用的函数
  effects: (dispatch) => ({
    getUserInfo() {
      dispatch.user.update({
        username: 'taobao',
        userId: '123',
      });
    },
  }),
};
