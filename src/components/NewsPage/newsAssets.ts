import type { StaticImageData } from "next/image";
import type { IconType } from "react-icons";
import { FiBookOpen, FiGlobe, FiMic, FiUsers } from "react-icons/fi";
import featuredImage from "../../../puplic/caption.jpg";
import programsImage from "../../../puplic/BPEdnTBCYAABNYm.jpg";
import researchImage from "../../../puplic/2f3cdab01c9f854d96af086e7f14c25f.jpg";
import mediaImage from "../../../puplic/images.jpg";

export const newsImages: Record<string, StaticImageData> = {
  featured: featuredImage,
  programs: programsImage,
  research: researchImage,
  media: mediaImage,
};

export const newsIcons: Record<string, IconType> = {
  globe: FiGlobe,
  book: FiBookOpen,
  users: FiUsers,
  mic: FiMic,
};
