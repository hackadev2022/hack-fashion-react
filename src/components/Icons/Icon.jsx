export const Icon = ({ icon, fn }) => {
  return <i className={`fa-solid ${icon}`} onClick={fn}></i>;
};
