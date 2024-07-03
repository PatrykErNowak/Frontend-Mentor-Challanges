import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
:root {
  --primary-color: #0079FF;
  --primary-hover-color: #60ABFF;
  --error-color: #F74646;
  --white-color: #fff;
  --grey-color: #979797;

  &.light-mode {
    --heading-color: #2B3442;
    --text-color: #4B6A9B;
    --text-light-color: rgba(75, 106, 155, 0.75);
    --strong-text-color: #697C9A;
    
    --bg-color: #F6F8FF;

    --main-container-color: #FEFEFE;
    --child-container-color: #F6F8FF;

    --theme-hover-color: #222731;
  }
  &.dark-mode {
    --heading-color: var(--white-color);
    --text-color: var(--white-color);
    --text-light-color: rgba(255,255,255,0.75);
    --strong-text-color: var(--white-color);

    --bg-color: #141D2F;

    --main-container-color: #1E2A47;
    --child-container-color: #141D2F;

    --theme-hover-color: #90A4D4;
  }
}


*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;

  transition: background-color 0.3s, border 0.3s;
}

html {
  font-size: 62.5%;
}

body {
  font-family: "Space Mono", monospace;
  font-size: 1.5rem;
  line-height: 2.5rem;
  color: var(--text-color);
  background-color: var(--bg-color);
}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
}

button:has(svg) {
  line-height: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
}

img {
  max-width: 100%;
}
`;

export default GlobalStyles;
