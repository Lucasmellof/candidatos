import React from "react";
import { useStyles } from "./styles";
import { PathMap } from "./PathMap";
import { cityMap } from "./cities";

export interface PropsStyle {
  fill?: string;
  bg?: string;
  defaultBg?: string
  defaultFill?: string;
}

export interface PropsColoredStyle extends PropsStyle {
  colorLabel?: string;
  colorStroke?: string;
}

export interface Props extends PropsColoredStyle {
  width?: number | string | undefined;
  height?: number | string | undefined;

  district: string;
  changeDistrict(name: string): void;
}

const MapBrazil: React.FC<Props> = ({
  width = 450,
  height = 450,
  fill,
  bg,
  colorLabel = "#121224",
  colorStroke = "#fdfdfd",
  defaultBg = "#8d8d8d",
  defaultFill = "#661AE6",
  district,
  changeDistrict,
}) => {
  const classes = useStyles({
    fill,
    bg,
    colorLabel,
    colorStroke,
    defaultFill,
    defaultBg,
  });

  return (
    <svg
      version="1.1"
      className={classes["svg-map"]}
      x="0px"
      y="0px"
      width={width}
      height={height}
      viewBox="0 0 450 460"
    >
      <g>
        {cityMap.map((map) => (
          <PathMap
            key={map.district}
            activeDistrict={district}
            changeDistrict={changeDistrict}
            defaultBg={defaultBg}
            defaultFill={defaultFill}
            {...map}
          />
        ))}
      </g>
    </svg>
  );
};

export default MapBrazil;
