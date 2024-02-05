//array of levels
const getNumericalLevel = function (level) {
  const difficultyLevels = {
    newbie: 1,
    junior: 2,
    intermediate: 3,
    advanced: 4,
  };

  return difficultyLevels[level];
};

const createSolutionElement = function (solution) {
  const { id, title, type, level, technologies, img, links } = solution;
  const li = document.createElement('li');

  const createTechIcons = function (tech) {
    const techItems = tech
      .map((t) => {
        const other = `          
          <li class="solution__tech-item">
            <img class="icon" aria-label="${t.name}" src="./img/tech-icons/other/${t.icon}.${t.type}">
          </li>`;
        const svg = `        
          <li class="solution__tech-item">
            <svg class="icon" aria-label="${t.name}" role="img">
            <use
            xlink:href="./img/tech-icons/sprite.svg#${t.icon}"
            ></use>
            </svg>
          </li>`;

        return t.type === 'svg' ? svg : other;
      })
      .join('\n');

    return techItems;
  };

  const html = `            
  <div class="solution" data-id="${id}">
    <img
      src="${img.src}"
      alt="${img.alt}"
      class="solution__img"
    />
    <div class="solution__content">
      <h4 class="solution__title">${title}</h4>
      <p class="solution__type">${type}</p>
        <div class="solution__level solution__level--${level}" aria-label="Difficulty level">
          <span class="numerical">${getNumericalLevel(
            level,
          )}</span><span class="lexical">${level}</span>
        </div>
      <ul class="solution__tech-list" aria-label="Technologies">
          ${createTechIcons(technologies)}
      </ul>
      <div class="solution__btns">
        <a
          href="${links.live}"
          class="solution__btn btn btn--secondary"
          >Live
          <ion-icon class="btn-icon" name="open-outline"></ion-icon
        ></a>
        <a
          href="${links.repo}"
          class="solution__btn btn btn--primary"
          >Repo
          <ion-icon class="btn-icon" name="logo-github"></ion-icon
        ></a>
      </div>
    </div>
  </div>
`;

  li.insertAdjacentHTML('afterbegin', html);

  return li;
};
