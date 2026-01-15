import * as React from 'react';
import styles from './RolePortal.module.scss';
import { IPortalSection } from './rolePortalContent';

interface IRolePortalNavProps {
  sections: IPortalSection[];
  onNavigate: (targetId: string) => void;
}

export const RolePortalNav: React.FC<IRolePortalNavProps> = ({ sections, onNavigate }) => (
  <nav className={styles.nav} aria-label="Role portal navigation">
    <h2 className={styles.navTitle}>Sections</h2>
    <ul className={styles.navList}>
      {sections.map((section) => (
        <li key={section.id}>
          <button
            type="button"
            className={styles.navLink}
            onClick={() => onNavigate(section.id)}
          >
            {section.title}
          </button>
        </li>
      ))}
    </ul>
  </nav>
);
