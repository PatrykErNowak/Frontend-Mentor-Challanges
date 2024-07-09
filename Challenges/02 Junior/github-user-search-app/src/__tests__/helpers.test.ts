import { convertURL, formatToLocalDate } from '../utils/helpers';

describe('Helpers Functions', () => {
  describe('formatToLocalDate', () => {
    const isoDate = '2011-01-25T18:44:36Z';

    test('convert correctly to Local date string', () => {
      const result = formatToLocalDate(isoDate);
      console.log(result);
      expect(result).toMatch(/Jan/i);
      expect(result).toMatch(/25/i);
      expect(result).toMatch(/2011/i);
    });
  });

  describe('ConvertURL', () => {
    const urlWithoutHTTP = 'hostname.com';
    const urlWithHTTP = 'http://hostname.com';
    const urlWithSecureHTTP = 'https://hostname.com';

    test('without protocol to URL with secure protocol', () => {
      const result = convertURL(urlWithoutHTTP);
      expect(result).toEqual(urlWithSecureHTTP);
    });

    test('not convert if URL has a HTTP protocol', () => {
      const result = convertURL(urlWithHTTP);
      expect(result).toEqual(urlWithHTTP);
    });
    test('not convert if URL has a HTTPS protocol', () => {
      const result = convertURL(urlWithSecureHTTP);
      expect(result).toEqual(urlWithSecureHTTP);
    });
  });
});
