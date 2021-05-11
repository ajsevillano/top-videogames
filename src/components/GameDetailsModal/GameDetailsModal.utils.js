//Handle closing modal on click outside of it
const overflowAuto = (history) => {
  history.push('/');
  return (document.body.style.overflow = 'auto');
};
export const exitDetailHandler = (e, history) => {
  e.target.classList.contains('shadow') && overflowAuto(history);
};
