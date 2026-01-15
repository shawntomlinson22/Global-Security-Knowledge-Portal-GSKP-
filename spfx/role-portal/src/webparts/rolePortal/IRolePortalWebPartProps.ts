export type RoleType = 'MGR' | 'SUP' | 'CTR' | 'SOF' | 'TRN';

export interface IRolePortalWebPartProps {
  role: RoleType;
  compactMode: boolean;
  showExternalLinks: boolean;
  defaultExpanded: boolean;
}
