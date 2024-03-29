declare module "@mui/material/styles/createPalette" {
  interface Palette {
    custom: {
      light?: string;
      dark?: string;
      main?: string;
    };
  }
  interface PaletteOptions {
    custom: {
      light?: string;
      dark?: string;
      main?: string;
    };
  }
}

// eslint-disable-next-line no-undef
export default function createPalette(palette: PaletteOptions): Palette;
