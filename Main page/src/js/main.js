const listElement = document.querySelector('.js-solutions-list');

solutions.forEach((s) => {
  const solution = createSolutionElement(s);
  listElement.append(solution);
});
