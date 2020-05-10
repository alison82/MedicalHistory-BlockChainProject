import { Roles } from 'src/app/shared/models/enums.enum';

// Sidebar route metadata
export interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
  groupTitle: boolean;
  submenu: RouteInfo[];
}
