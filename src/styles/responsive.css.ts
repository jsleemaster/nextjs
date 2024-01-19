export const responsiveStyle = ({ tablet, desktop }) => ({
  "@media": {
    "screen and (min-width: 768px)": tablet,
    "screen and (min-width: 1024px)": desktop,
  },
});
