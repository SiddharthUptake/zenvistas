import { FiInfo, FiImage, FiFileText, FiPhone } from "react-icons/fi";

export const LOCATION_URL = "https://vademo.uptakeinfotech.com/";
export const INTERIOR_URL = "https://saketham.visionarc.in/flat-tour";
export const INVENTORY_URL = "https://saketham.visionarc.in/";

export const railItems = [
  { label: "About", icon: <FiInfo />, action: "about" },
  { label: "Gallery", icon: <FiImage />, action: "gallery" },
  { label: "Brochure", icon: <FiFileText />, action: "brochure" },
  { label: "Contact", icon: <FiPhone />, action: "contact" },
];

export const dockItems = [
  { label: "Inventory", image: "/icon-webverse.svg" , action: "inventory"},
  { label: "Interior", image: "/icon-interior.svg", action: "interior" },
  { label: "Brochure", image: "/icon-brochure.svg" },
  { label: "Location", image: "/icon-location.svg", action: "location" },
  { label: "Enquiry", image: "/icon-enquire.svg", action: "contact" },
  { label: "Gallery", image: "/icon-gallery.svg" },
  { label: "About Project", image: "/icon-project.svg" },
  { label: "Amenities", image: "/icon-brochure.svg" },
];

