import { atom } from 'jotai';

export type ToastType = 'default' | 'success' | 'warning' | 'error';

export const showToastPopupAtom = atom(false, (get, set, value) => {
  set(showToastPopupAtom, value);
});

export const toastTypeAtom = atom('default', (get, set, value: ToastType) => {
  set(toastTypeAtom, value);
});

export const toastStringAtom = atom(null, (get, set, value: string | null) => {
  set(toastStringAtom, value);
});

export const toastTimerAtom = atom(3, (get, set, value: number) => {
  set(toastTimerAtom, value);
});

export const openToastPopupAtom = atom(
  null,
  (
    get,
    set,
    {
      toastType,
      toastString,
      toastTimer,
    }: { toastType?: ToastType; toastString: string; toastTimer?: number },
  ) => {
    set(showToastPopupAtom, true);
    set(toastTypeAtom, toastType ?? 'default');
    set(toastStringAtom, toastString);
    set(toastTimerAtom, toastTimer ?? 3);
  },
);

export const closeToastPopupAtom = atom(null, (get, set) => {
  set(showToastPopupAtom, false);
});
