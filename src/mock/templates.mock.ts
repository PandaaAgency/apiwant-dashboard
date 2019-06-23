import {Template} from "../models/template";
import {Periodicity} from "../types/periodicity.enum";


export const TEMPLATES_LIST: Template[] = [
  {id: "1a5", periodicity: Periodicity.DAILY, url: "https://www.google.fr"},
  {id: "1a6", periodicity: Periodicity.MONTHLY, url: "https://www.google.com"},
  {id: "1a7", periodicity: Periodicity.MONTHLY, url: "https://www.facebook.fr"},
  {id: "1a8", periodicity: Periodicity.WEEKLY, url: "https://www.angularjs.fr"},
  {id: "1a9", periodicity: Periodicity.DAILY, url: "https://www.pandaa.fr"},
  {id: "1a9", periodicity: Periodicity.WEEKLY, url: "https://pandaa-dev.com"},
];
