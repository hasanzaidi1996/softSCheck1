export const subscriptionData = [
  {
    _id: '66e077ad8e3c2638bdf82484',
    name: 'Free',
    price: 0,
    uploadLimit: 1,
    userCreationLimit: 1,
    apiAccess: false,
    addOns: false,
    validity: 'infinite',
    plugins: ['logs', 'dashboard', 'app-whitelisting'],
    __v: 0,
    type: 'free',
    features: []
  },
  {
    _id: '66e078708e3c2638bdf82486',
    name: 'Basic',
    price: 550,
    uploadLimit: 4,
    userCreationLimit: 2,
    apiAccess: true,
    addOns: true,
    validity: 'monthly',
    plugins: [
      'logs',
      'dashboard',
      'app-whitelisting',
      'patch-app',
      'ms-macro',
      'app-hardening',
      'mfa',
      'patch-os',
      'restrict-priviledges',
      'daily-backup'
    ],
    __v: 0,
    type: 'paid',
    features: [
      'Essential vulnerability Asessments',
      'AI compliance reporting for one framework (e.g Essential 8, ISO 27001 etc.)',
      ' Access to cybersecurity dashboard'
    ]
  },
  {
    _id: '66e078868e3c2638bdf82488',
    name: 'Basic',
    price: 5500,
    uploadLimit: 4,
    userCreationLimit: 2,
    apiAccess: true,
    addOns: true,
    validity: 'yearly',
    plugins: [
      'logs',
      'dashboard',
      'app-whitelisting',
      'patch-app',
      'ms-macro',
      'app-hardening',
      'mfa',
      'patch-os',
      'restrict-priviledges',
      'daily-backup'
    ],
    __v: 0,
    type: 'paid',
    features: [
      'Essential vulnerability Asessments',
      'AI compliance reporting for one framework (e.g Essential 8, ISO 27001 etc.)',
      ' Access to cybersecurity dashboard'
    ]
  },
  {
    _id: '66e078bd8e3c2638bdf8248a',
    name: 'Standard',
    price: 950,
    uploadLimit: 8,
    userCreationLimit: 6,
    apiAccess: true,
    addOns: true,
    validity: 'monthly',
    plugins: [
      'logs',
      'dashboard',
      'app-whitelisting',
      'patch-app',
      'ms-macro',
      'app-hardening',
      'mfa',
      'patch-os',
      'restrict-priviledges',
      'daily-backup'
    ],
    type: 'paid',
    __v: 0,
    features: [
      'Enhanced vulnerability Asessments',
      'AI compliance tracking for 2 framework (e.g Essential 8, ISO 27001, NIST  etc.)',
      'Customizable Dashboard framework'
    ]
  },
  {
    features: [],
    _id: '66e078c68e3c2638bdf8248c',
    name: 'Standard',
    price: 9500,
    uploadLimit: 8,
    userCreationLimit: 6,
    apiAccess: true,
    addOns: true,
    validity: 'yearly',
    plugins: [
      'logs',
      'dashboard',
      'app-whitelisting',
      'patch-app',
      'ms-macro',
      'app-hardening',
      'mfa',
      'patch-os',
      'restrict-priviledges',
      'daily-backup'
    ],
    __v: 0,
    type: 'paid'
  },
  {
    _id: '66e079bc8e3c2638bdf8248e',
    name: 'Premium',
    price: -1,
    uploadLimit: -1,
    userCreationLimit: -1,
    apiAccess: true,
    addOns: false,
    validity: 'yearly',
    plugins: [
      'logs',
      'dashboard',
      'app-whitelisting',
      'patch-app',
      'ms-macro',
      'app-hardening',
      'mfa',
      'patch-os',
      'restrict-priviledges',
      'daily-backup'
    ],
    __v: 0,
    type: 'custom',
    features: [
      'Comprehensive vulnerability assessments',
      'Full feature access and customizations',
      'Advanced compliance tracking and realtime alerts',
      'Full access to Easy Audit and Secure Cohort integrations',
      'A Policy Maker'
    ]
  }
];
