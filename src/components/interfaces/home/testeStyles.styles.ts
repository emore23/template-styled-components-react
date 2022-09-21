// Dependencies
import styled from "styled-components";

// Themes
import { P, SCREEN, THEME } from "../../../styles/theme";

export const Container = styled.div`
	// Theme paragraph
  ${P} {
    @media ${SCREEN.TABLET} {
      color: ${THEME.COLORS.CAPTION_400};
    }
  }
`;
