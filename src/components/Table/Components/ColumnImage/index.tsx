/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { imageStyle } from "./styles";

interface ColumnImageProps {
  srcImage: string;
}

export const ColumnImage: React.FC<ColumnImageProps> = ({ srcImage }) => (
  <div style={{ maxHeight: "5.188rem", padding: 0 }}>
    {srcImage && <img style={imageStyle} src={srcImage} />}
  </div>
);
