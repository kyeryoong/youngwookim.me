import { MenuStore } from './menuStore';
import { PostStore } from './postStore';
import { ThemeStore } from './themeStore';
import { UIStore } from './uiStore';

export class Store {
  menuStore: MenuStore;
  themeStore: ThemeStore;
  postStore: PostStore;
  uiStore: UIStore;

  constructor() {
    this.menuStore = new MenuStore();
    this.themeStore = new ThemeStore();
    this.postStore = new PostStore();
    this.uiStore = new UIStore();
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
