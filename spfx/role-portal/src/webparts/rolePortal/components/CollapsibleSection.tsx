import * as React from 'react';
import { Icon } from '@fluentui/react/lib/Icon';
import styles from './RolePortal.module.scss';
import { IPortalSection } from './rolePortalContent';

interface ICollapsibleSectionProps {
  section: IPortalSection;
  defaultExpanded: boolean;
  showExternalLinks: boolean;
}

export const CollapsibleSection: React.FC<ICollapsibleSectionProps> = ({
  section,
  defaultExpanded,
  showExternalLinks
}) => {
  const [expanded, setExpanded] = React.useState(defaultExpanded);
  const panelId = `${section.id}-panel`;

  return (
    <article id={section.id} className={styles.section}>
      <button
        type="button"
        className={styles.sectionHeader}
        aria-expanded={expanded}
        aria-controls={panelId}
        onClick={() => setExpanded(!expanded)}
      >
        <span>{section.title}</span>
        <Icon iconName={expanded ? 'ChevronUp' : 'ChevronDown'} />
      </button>
      {expanded && (
        <div id={panelId} className={styles.sectionBody}>
          {section.body.map((paragraph, index) => (
            <p key={`${section.id}-p-${index}`} className={styles.sectionText}>
              {paragraph}
            </p>
          ))}
          {showExternalLinks && section.externalLinks.length > 0 && (
            <div className={styles.externalLinks}>
              <h3 className={styles.sectionSubTitle}>Resources</h3>
              <ul>
                {section.externalLinks.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} target="_blank" rel="noreferrer">
                      {link.label}
                      <Icon iconName="OpenInNewWindow" className={styles.externalIcon} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </article>
  );
};
