import * as React from 'react';
import styles from './RolePortal.module.scss';
import { IRolePortalWebPartProps } from '../IRolePortalWebPartProps';
import { RolePortalNav } from './RolePortalNav';
import { CollapsibleSection } from './CollapsibleSection';
import { getRolePortalContent, IPortalSection } from './rolePortalContent';

const RolePortal: React.FC<IRolePortalWebPartProps> = ({
  role,
  compactMode,
  showExternalLinks,
  defaultExpanded
}) => {
  const content = getRolePortalContent(role);

  const handleNavigate = React.useCallback((targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  return (
    <section className={`${styles.rolePortal} ${compactMode ? styles.compact : ''}`}>
      <header className={styles.header}>
        <div>
          <p className={styles.kicker}>Role Portal</p>
          <h1 className={styles.title}>{content.title}</h1>
          <p className={styles.subtitle}>{content.subtitle}</p>
        </div>
      </header>

      <div className={styles.layout}>
        <RolePortalNav sections={content.sections} onNavigate={handleNavigate} />

        <div className={styles.sections}>
          {content.sections.map((section: IPortalSection) => (
            <CollapsibleSection
              key={section.id}
              section={section}
              defaultExpanded={defaultExpanded}
              showExternalLinks={showExternalLinks}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RolePortal;
