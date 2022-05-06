// src/store.ts
import { createStore } from 'ice';
import user from '@/models/user';

const store = createStore(
  {
    user,
  },
  {
    // options
  },
);

export default store;