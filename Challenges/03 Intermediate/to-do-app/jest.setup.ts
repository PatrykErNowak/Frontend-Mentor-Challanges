import '@testing-library/jest-dom';
import { randomUUID } from 'node:crypto';
window.crypto.randomUUID = randomUUID;
window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {},
    };
  };
