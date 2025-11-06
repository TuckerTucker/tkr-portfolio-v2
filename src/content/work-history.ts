import { WorkHistory } from './types'

// Company brand colors for carousel theming
// badge: WCAG 2.1 AA compliant color for text backgrounds (4.5:1 contrast minimum with white text)
export const COMPANY_COLORS = {
  'Shaw Communications': {
    primary: '#0099DD',
    accent: '#007DB8',
    badge: '#007DB8', // 4.54:1 contrast - WCAG AA compliant
  },
  'Worldplay Networks': {
    primary: '#00A3E0',
    accent: '#6B46C1',
    badge: '#00729D', // 5.39:1 contrast - WCAG AA compliant (darker cyan)
  },
  'Nutrien': {
    primary: '#76BC21', // Brand green for logo background
    accent: '#0033A0',
    badge: '#0033A0', // 10.60:1 contrast - WCAG AA compliant
  },
} as const

export const workHistory: WorkHistory = {
  summary:
    "I've spent 20 years designing systems that match how people actually think and solve problems, rather than forcing them to adapt to technical constraints. Whether the users are humans or AI agents, the core principle remains the same: understand their mental models, then design interfaces that work with those models.",

  entries: [
    {
      company: 'Nutrien',
      role: 'Lead UX Designer',
      period: 'February 2023 – September 2023',
      description: '',
      highlights: [
        'Designed intuitive two-column layout reducing accidental data loss through smart auto-save patterns',
        'Simplified multi-file upload workflows that previously frustrated field workers',
        'Identified data loss risks through usability testing, preventing critical safety information from being accidentally deleted',
      ],
      companyImage: '/images/work/nutrien-logo.svg',
      companyImageAlt: 'Nutrien company logo',
      companyColor: COMPANY_COLORS['Nutrien'].primary,
      companyColorAccent: COMPANY_COLORS['Nutrien'].accent,
    },
    {
      company: 'Worldplay Networks',
      role: 'Manager of UX Design and Lead Designer',
      period: '2017 – 2022',
      description: '',
      highlights: [
        'Reduced new customer site setup from 12 hours to 2 minutes through automated interface design',
        'Created card-based library system solving mobile usability issues for sports broadcasters managing hundreds of live events'
      ],
      companyImage: '/images/work/worldplay-logo.svg',
      companyImageAlt: 'Worldplay Networks company logo',
      companyColor: COMPANY_COLORS['Worldplay Networks'].primary,
      companyColorAccent: COMPANY_COLORS['Worldplay Networks'].accent,
    },
    {
      company: 'Shaw Communications',
      role: 'Senior UX Designer',
      period: '2005 – 2017',
      description: '',
      highlights: [
        'Led responsive phone portal redesign validated through UserTesting.com sessions',
        'Reduced support call volume by surfacing solutions to most common customer issues',
        'Coordinated visual and technical teams to deliver cohesive experiences across web properties',
      ],
      companyImage: '/images/work/shaw-logo.svg',
      companyImageAlt: 'Shaw Communications company logo',
      companyColor: COMPANY_COLORS['Shaw Communications'].primary,
      companyColorAccent: COMPANY_COLORS['Shaw Communications'].accent,
    },
  ],

  creativeBackground:
    'My creative background in songwriting and podcast production taught me to distill complexity and tell clear stories—skills that show up in every design decision.',

  bridgeSentence:
    'I design systems where people and AI agents work with the same information, each through interfaces optimized for how they think.',
}