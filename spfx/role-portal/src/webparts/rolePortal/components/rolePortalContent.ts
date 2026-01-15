import { RoleType } from '../IRolePortalWebPartProps';

export interface IPortalExternalLink {
  label: string;
  href: string;
}

export interface IPortalSection {
  id: string;
  title: string;
  body: string[];
  externalLinks: IPortalExternalLink[];
}

export interface IPortalContent {
  title: string;
  subtitle: string;
  sections: IPortalSection[];
}

const sharedSections: IPortalSection[] = [
  {
    id: 'overview',
    title: 'Overview',
    body: [
      'This portal surfaces the latest guidance, tasks, and resources tailored to your role.',
      'Use the navigation to jump between key sections without leaving the page.'
    ],
    externalLinks: [
      { label: 'Security Knowledge Base', href: 'https://contoso.sharepoint.com/sites/security' }
    ]
  },
  {
    id: 'priorities',
    title: 'Top Priorities',
    body: [
      'Review your role-specific priorities and confirm ownership of assigned actions.',
      'Track completion status using the standard reporting workflow.'
    ],
    externalLinks: []
  },
  {
    id: 'training',
    title: 'Training & Readiness',
    body: [
      'Access the recommended training modules and schedule refreshers as needed.',
      'Document completion in the training tracker for audit readiness.'
    ],
    externalLinks: [
      { label: 'Training Catalog', href: 'https://contoso.sharepoint.com/sites/training' }
    ]
  }
];

const roleOverrides: Record<RoleType, Partial<IPortalContent>> = {
  MGR: {
    title: 'Manager Portal',
    subtitle: 'Coordinate team delivery, approvals, and compliance reporting.'
  },
  SUP: {
    title: 'Supervisor Portal',
    subtitle: 'Oversee daily operations and ensure policies are enforced.'
  },
  CTR: {
    title: 'Contractor Portal',
    subtitle: 'Access onboarding, tasks, and required documentation.'
  },
  SOF: {
    title: 'Security Officer Portal',
    subtitle: 'Monitor security posture and respond to incidents.'
  },
  TRN: {
    title: 'Training Portal',
    subtitle: 'Deliver training schedules, updates, and certification status.'
  }
};

export const getRolePortalContent = (role: RoleType): IPortalContent => {
  const override = roleOverrides[role];

  return {
    title: override.title ?? 'Role Portal',
    subtitle: override.subtitle ?? 'Role-based guidance and navigation.',
    sections: sharedSections.map((section) => ({
      ...section,
      body: [
        `${override.title ?? 'Role'}: ${section.body[0]}`,
        section.body[1]
      ]
    }))
  };
};
