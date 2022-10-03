import React, {useState, useEffect} from "react";
import {PropsStyle} from ".";

export interface PropsPathMap {
    title: string;
    district: string;

    d1: string;
    d2?: string;
    transform: string;
}

export interface PropsClickablePath extends PropsPathMap, PropsStyle {
    activeDistrict: string;

    changeDistrict(district: string): void;
}

export interface PropsPathMapItem {
    coordinate: string;
    color: string;
}

export const Path: React.FC<PropsPathMapItem> = ({coordinate, color}) => (
    <path className="svg-map-path" style={{fill: color, stroke: "#121232"}} d={coordinate} />
);

export const PathMap: React.FC<PropsClickablePath> = (
    {
        title,
        d1,
        d2,
        transform,
        district,

        changeDistrict,
        activeDistrict,

        fill,
        defaultFill = "#0099ff",
        bg = "#8d8d8d",
        defaultBg = "#8d8d8d",
    }) => {
    const [color, setColor] = useState("#8d8d8d");

    function handleClick() {
        changeDistrict(district);
    }

    useEffect(() => {
        setColor(district === activeDistrict ? fill || defaultFill : bg || defaultBg);
    }, [activeDistrict]);

    return (
        <a
            id={district}
            onClick={(e) => {
                e.preventDefault();
                handleClick();
            }}
        >
            <title>{title}</title>
            <Path coordinate={d1} color={color} />
            {d2 && <Path coordinate={d2} color={color} />}
            <text transform={transform} style={{
                fill: "white"
            }}>{district}</text>
        </a>
    );
};
