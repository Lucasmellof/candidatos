import { createUseStyles } from "react-jss";
import { PropsColoredStyle } from ".";

export const useStyles = createUseStyles({
  "svg-map": (props: PropsColoredStyle) => {
    const { fill, colorLabel, bg, colorStroke, defaultFill, defaultBg } = props;
    return {
      "& svg-map-path": {
        fill: `${bg || defaultBg} !important`,
      },
      "& text": {
        fill: `${colorLabel || "#fff"}`,
        font: "12px Arial - BoldMT, sans - serif",
        cursor: "pointer",
      },
      "& a": {
        cursor: "pointer",
        "&:hover path, .circle": {
          fill: `${fill || defaultFill} !important`,
        },
        textDecoration: "none",
      },
      "& a path": {
        stroke: `${colorStroke || "#fff"}`,
        strokeWidth: 1.0404,
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
    };
  },
});
