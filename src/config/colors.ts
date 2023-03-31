const white = '#ffffff';
const whiteHover = '#f2f2f2';

const black = '#202020';
const background = '#E5E5E5';
const grey = '#bdbdbd';
const greyDarken = '#8E8E8E';
const green = '#43b15d';
const red = '#DD2F2F';

const header = {
  textLogo: green,
};

const table = {
  border: grey,
  color: greyDarken,
};

const button = {
  delete: {
    bg: white,
    color: red,
    icon: red,
    hover: whiteHover,
    colorHover: red,
  },
  ghost: {
    bg: 'transparent',
    color: white,
    icon: 'transparent',
    hover: 'transparent',
    colorHover: whiteHover,
  },
};

export const COLORS = Object.freeze({
  grey,
  white,
  black,
  green,
  table,
  button,
  header,
  background,
});
