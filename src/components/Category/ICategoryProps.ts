import { ReactNode, MouseEvent } from "react";
import CategoryContent from "../../domain/models/CategoryContent";

interface ICategoryProps {
  title: string;
  body: Array<CategoryContent>;
  handleClick(e: MouseEvent, elementId: number): void;
}

export default ICategoryProps;
