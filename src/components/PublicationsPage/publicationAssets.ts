import type { StaticImageData } from "next/image";
import cooperationBook from "../../../puplic/Group-29-360x504.png";
import terminologyBook from "../../../puplic/Group-20-360x504.png";
import preservationBook from "../../../puplic/Group-28-360x504.png";
import mahdiBook from "../../../puplic/Group-36-360x504.png";

export const publicationImages: Record<string, StaticImageData> = {
  cooperation: cooperationBook,
  terminology: terminologyBook,
  preservation: preservationBook,
  mahdi: mahdiBook,
};
