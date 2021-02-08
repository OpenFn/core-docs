module.exports = {
  docs: [
    {
      type: 'doc',
      id: 'intro',
    },
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'getting-started/overview',
        // 'getting-started/use-cases',
        // 'getting-started/deployment-options',
        'getting-started/quick-start',
        'getting-started/your-technologies',
        // 'getting-started/designing-integrations',
        // 'getting-started/glossary',
        // 'getting-started/automation-inspiration',
      ],
    },
    // {
    //   type: 'category',
    //   label: 'Design',
    //   items: [
    //     'design/design-integration',
    //   ],
    // },
    {
      type: 'category',
      label: 'Build',
      items: [
        {
          type: 'category',
          label: 'Jobs',
          items: [
            'build/jobs',
            'jobs/understanding',
            'jobs/operations',
            'jobs/multiple-operations',
            { type: 'link', label: 'The Library 📖', href: '../../library' },
          ],
        },
        'build/credentials',
        'build/triggers',
        'build/inbox',
        {
          type: 'category',
          label: 'Data Sources',
          items: [
            'build/inbox',
            'apps/source-apps',
            'apps/commcare',
            'apps/godata',
            'apps/kobo-toolbox',
            'apps/salesforce',
            'for-devs',
          ],
        },
        'deploy/devtools',
        'build/adaptors',
        // 'build/messages',
        // 'build/runs',
      ],
    },
    {
      type: 'category',
      label: 'Deploy',
      items: [
        'deploy/options',
        'deploy/platform',
        'deploy/microservices',
        'deploy/core',
      ],
    },
    {
      type: 'category',
      label: 'Manage',
      items: [
        'manage/platform-mgmt',
        'trouble-shooting',
        'jobs/errors',
        // 'manage/placeholder',
        'release-notes',
        'portability',
      ],
    },
    {
      type: 'category',
      label: 'Apps',
      items: [
        'apps/intro',
        'apps/source-apps',
        'apps/commcare',
        'apps/godata',
        'apps/kobo-toolbox',
        'apps/salesforce',
        'apps/fordevs',
      ],
    },
    {
      type: 'doc',
      id: 'faqs',
    },
    {
      type: 'category',
      label: 'Contributing',
      items: [
        // 'writing-code',
        'writing-docs',
        'style-guide',
      ],
    },
    {
      type: 'doc',
      id: 'about',
    },
    {
      type: 'link',
      label: 'Community Forum', // The label that should be displayed (string).
      href: 'https://community.openfn.org', // The target URL (string).
    },
  ],
};
