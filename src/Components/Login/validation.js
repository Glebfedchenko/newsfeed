export const required = value =>
  value || typeof value === 'number' ? undefined : 'Required';
export const iSAdmin = value =>
  value !== `admin` ? `Your username is incorrect` : null;
export const isCorrectPassword = value =>
  value !== `12345` ? `Your password is incorrect` : null;
