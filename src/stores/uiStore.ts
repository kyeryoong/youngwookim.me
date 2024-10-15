import { makeAutoObservable } from 'mobx';

type ToastType = 'default' | 'success' | 'warning' | 'error';

export class UIStore {
  toastType: ToastType = 'default';
  toastString: string | null = null;
  showToastPopup: boolean = false;
  timer: number = 3;

  constructor() {
    makeAutoObservable(this);
  }

  openToastPopup = ({
    toastString,
    toastType,
    timer,
  }: {
    toastString: string;
    toastType?: ToastType;
    timer?: number;
  }) => {
    this.toastType = toastType ?? 'default';
    this.toastString = toastString;
    this.timer = timer ?? 3;
    this.showToastPopup = true;
  };

  setShowToastPopup = (value: boolean) => {
    this.showToastPopup = value;
  };
}
