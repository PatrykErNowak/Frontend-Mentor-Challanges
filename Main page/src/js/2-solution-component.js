const createSolutionElement = function (solution) {
  const { id, title, type, technologies, img, links } = solution;
  const li = document.createElement('li');

  const createTechItems = function (tech) {
    const techItems = tech
      .map(
        (t) => `        
    <li class="solution__tech-item">
      <svg class="icon" aria-label="${t.name}" role="img">
        <use
          xlink:href="./img/tech-icons/sprite.svg#${t.icon}"
        ></use>
      </svg>
    </li>`,
      )
      .join('\n');

    return techItems;
  };

  const html = `            
  <article class="solution" data-id="${id}">
    <img
      src="${img.src}"
      alt="${img.alt}"
      class="solution__img"
    />
    <div class="solution__content">
      <h4 class="solution__title">${title}</h4>
      <p class="solution__type">${type}</p>
      <ul class="solution__tech-list" aria-label="Technologies">
          ${createTechItems(technologies)}
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
  </article>
`;

  li.insertAdjacentHTML('afterbegin', html);

  return li;
};
