function formatToLocalDate(date: string) {
  const localLang = document.documentElement.lang || navigator.language;

  const options: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  };
  return new Date(date).toLocaleDateString(localLang, options);
}

export { formatToLocalDate };
