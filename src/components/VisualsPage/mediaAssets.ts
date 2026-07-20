import type { StaticImageData } from "next/image";
import mainVisual from "../../../puplic/1395849838834267800.jpg.webp";
import mosqueVisual from "../../../puplic/images.jpg";
import courtyardVisual from "../../../puplic/2f3cdab01c9f854d96af086e7f14c25f.jpg";
import panoramaVisual from "../../../puplic/caption.jpg";

export const mediaImages: Record<string, StaticImageData> = {
  main: mainVisual,
  mosque: mosqueVisual,
  courtyard: courtyardVisual,
  panorama: panoramaVisual,
};
