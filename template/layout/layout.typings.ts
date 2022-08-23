import React from "react";

export interface ILayout {
  children: React.ReactElement;
  active: string;
  head: string;
  error?: string;
}
