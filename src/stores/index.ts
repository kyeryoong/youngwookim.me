import { MenuStore } from './menuStore';
import { PostStore } from './postStore';

export class Store {
  menuStore: MenuStore;
  postStore: PostStore;

  constructor() {
    this.menuStore = new MenuStore();
    this.postStore = new PostStore();
  }
}

let store: Store;

const useStore = () => {
  if (!store) {
    store = new Store();
  }

  return store;
};

export default useStore;
