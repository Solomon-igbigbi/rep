import { IInput } from "./input.typings";

export interface IIconInput extends IInput {
  icon: string;
  iconPosition?: "left" | "right";
}
