import { HomeStore } from './homeStore';
import { MenuStore } from './menuStore';
import { PostStore } from './postStore';
import { ThemeStore } from './themeStore';
import { UIStore } from './uiStore';

export class Store {
  homeStore: HomeStore;
  menuStore: MenuStore;
  themeStore: ThemeStore;
  postStore: PostStore;
  uiStore: UIStore;

  constructor() {
    this.homeStore = new HomeStore();
    this.menuStore = new MenuStore();
    this.themeStore = new ThemeStore();
    this.postStore = new PostStore();
    this.uiStore = new UIStore();
  }
}

let store: Store | null = null;

export function useStore() {
  if (!store) {
    store = new Store();
  }
  return store;
}
