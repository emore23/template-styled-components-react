//Imports
import styled from "styled-components";

// Theme
export const THEME = {
  COLORS: {
    BACKGROUND_900: "#121214",
    BACKGROUND_800: "#18181B",

    TEXT: "#FFFFFF",

    CAPTION_500: "#71717A",
    CAPTION_400: "#A1A1AA",
    CAPTION_300: "#D4D4D8",

    SHAPE: "#2A2634",

    PRIMARY: "#8B5CF6",
    SUCCESS: "#34D399",
    ALERT: "#F87171",

    FOOTER: ["rgba(0,0,0,0)", "rgba(0,0,0,0.9)"],
    OVERLAY: "rgba(0,0,0,0.6)",
  },

  FONT_FAMILY: {
    DEFAULT: "Inter" || "Sans-Serif",
  },

  FONT_SIZE: {
    SM: "14px",
    MD: "16px",
    LG: "24px",
  },
};

// Screens
export const SIZE = {
  MOBILE: "360PX",
  TABLET: "768px",
  LAPTOP: "1024px",
  LAPTOP_LARGE: "1440px",
  DESKTOP: "2560px",
};

export const SCREEN = {
  MOBILE: `(min-width: ${SIZE.MOBILE})`,
  TABLET: `(min-width: ${SIZE.TABLET})`,
  LAPTOP: `(min-width: ${SIZE.LAPTOP})`,
  LAPTOP_LARGE: `(min-width: ${SIZE.LAPTOP_LARGE})`,
  DESKTOP: `(min-width: ${SIZE.DESKTOP})`,
};

// Exemple
export const Container = styled.div`
  color: ${THEME.COLORS.CAPTION_500};
  font-size: ${THEME.FONT_SIZE.LG};
  font-family: ${THEME.FONT_FAMILY.DEFAULT};

  @media ${SCREEN.TABLET} {
    color: ${THEME.COLORS.SUCCESS};
  }
`;

export const P = styled.p`
  color: ${THEME.COLORS.ALERT};
`;
