import { initializeIcons } from '@fluentui/react/lib/Icons';

let iconsInitialized = false;

export const initializePortalIcons = (): void => {
  if (iconsInitialized) {
    return;
  }

  initializeIcons();
  iconsInitialized = true;
};
