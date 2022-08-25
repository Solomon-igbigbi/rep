import { IText } from "../../atoms/texts/texts.typings";

export interface INavLinks {
  text: string;
  icon: string;
  color?:
    | "white"
    | "gold"
    | "blue"
    | "black"
    | "red"
    | "gray"
    | "green"
    | "blue2";
  onClick: any;
}
