const getThemeColor = function () {
  const isDark = window.matchMedia(`(prefers-color-scheme: dark)`).matches;
  const isLight = window.matchMedia(`(prefers-color-scheme: light)`).matches;
  return (isDark && 'Dark') || (isLight && 'Light');
};

export const setTheme = function () {
  const radioDefault = document.querySelector('#th-default') as HTMLInputElement;
  const radioLight = document.querySelector('#th-light') as HTMLInputElement;
  const radioDark = document.querySelector('#th-dark') as HTMLInputElement;

  const preferredTheme = getThemeColor();

  radioDefault.checked = true;
  if (preferredTheme === 'Dark') radioDark.checked = true;
  if (preferredTheme === 'Light') radioLight.checked = true;
};
