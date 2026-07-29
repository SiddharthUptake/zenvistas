import { FiInfo, FiImage, FiFileText, FiPhone } from "react-icons/fi";

export const LOCATION_URL = "https://vademo.uptakeinfotech.com/";
export const INTERIOR_URL = "https://saketham.visionarc.in/flat-tour";

export const railItems = [
  { label: "About", icon: <FiInfo />, action: "about" },
  { label: "Gallery", icon: <FiImage />, action: "gallery" },
  { label: "Brochure", icon: <FiFileText />, action: "brochure" },
  { label: "Contact", icon: <FiPhone />, action: "contact" },
];

export const dockItems = [
  { label: "Webverse", image: "/icon-webverse.gif" },
  { label: "Interior", image: "/icon-interior.gif", action: "interior" },
  { label: "Projects", image: "/icon-projects.gif" },
  { label: "Amenities", image: "/icon-amenities.gif" },
  { label: "Gallery", image: "/icon-gallery.gif" },
  { label: "Brochure", image: "/icon-brochure.gif" },
  { label: "Location", image: "/location.gif", action: "location" },
  { label: "Enquiry", image: "/icon-enquire.gif", action: "contact" },
];
