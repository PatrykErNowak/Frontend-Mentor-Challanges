function formatToLocalDate(date: string) {
  const localLang = document.documentElement.lang || navigator.language;

  const options: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  };
  return new Date(date).toLocaleDateString(localLang, options);
}

function convertURL(url: string) {
  const hasHttp = url.startsWith('https://') || url.startsWith('http://');

  if (hasHttp) return url;
  if (!hasHttp) return `https://${url}`;
}

export { formatToLocalDate, convertURL };
