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
      description:
        "Nutrien is the world's largest crop inputs provider, serving 37,000 employees globally. I joined their six-month HomeSafe Phase 2 project—an intranet bringing safety information to every employee across the organization.",
      highlights: [
        'Redesigned Operating Standards section with intuitive two-column layout that kept context visible while browsing',
        'Created multi-file uploader that prevented accidental data loss through clear feedback and confirmation patterns',
        'Conducted usability tests with employees across different roles and locations to understand actual workflows',
        'Delivered design decisions rooted in watching real employees interact with the system',
        'Enabled employees to find safety standards faster and upload documentation confidently',
        'Usability tests revealed opportunities that shaped the product roadmap for future releases',
      ],
      companyImage: '/images/work/nutrien-logo.svg',
      companyImageAlt: 'Nutrien company logo',
      companyColor: COMPANY_COLORS['Nutrien'].primary,
      companyColorAccent: COMPANY_COLORS['Nutrien'].accent,
      projects: [
        {
          title: 'Operating Standards Redesign',
          description:
            'Redesigned the Operating Standards section of the HomeSafe intranet to help 37,000 employees find and understand safety protocols more efficiently.',
          outcomes: [
            'Implemented intuitive two-column layout that kept context visible while browsing',
            'Enabled employees to find safety standards faster and navigate documentation confidently',
            'Delivered design decisions rooted in watching real employees interact with the system across different roles and locations',
          ],
          image: '/images/placeholder/beached_balls.png',
          imageAlt: 'Operating Standards interface showing two-column layout',
        },
        {
          title: 'Document Upload System',
          description:
            'Created a multi-file uploader that prioritized preventing accidental data loss through clear feedback patterns.',
          outcomes: [
            'Prevented accidental data loss through clear feedback and confirmation patterns',
            'Enabled employees to upload documentation confidently',
            'Conducted usability tests that revealed opportunities shaping future product roadmap',
          ],
          image: '/images/placeholder/knitten.png',
          imageAlt: 'Multi-file upload interface with feedback patterns',
        },
      ],
    },
    {
      company: 'Worldplay Networks',
      role: 'Manager of UX Design and Lead Designer',
      period: '2017 – 2022',
      description:
        "Worldplay's video platform Vidflex helped businesses manage and sell live and on-demand video. Our customers included Hockey Canada, TELUS, and Indigenous communities preserving their languages and culture.",
      highlights: [
        'VFLive Dashboard: Designed Grafana dashboard that surfaced critical stream health information, turning chaotic debugging into systematic problem-solving during live events',
        'Interviewed all Customer Success team members to understand real-time debugging needs during live event crises',
        'Identified and ranked data sources by accessibility and level of effort, enabling phased implementation',
        'Library Redesign: Redesigned video library with content types as distinct sections and mobile-responsive card format',
        'Conducted usability testing that revealed hidden functionality issues, teaching valuable lessons about exposing important actions',
        'Admin Portal to SaaS: Redesigned portal around customer tasks rather than system architecture, reducing new site setup from 12 hours to 2 minutes',
        'Translated technical language into customer-focused language (e.g., "ingest endpoint" became "upload video")',
        'Indigenous Digital Sovereignty: Worked with Indigenous communities to build interfaces respecting their cultural organization models',
        'Enabled communities to preserve languages and traditions through video on their own terms, with full content sovereignty',
      ],
      companyImage: '/images/work/worldplay-logo.svg',
      companyImageAlt: 'Worldplay Networks company logo',
      companyColor: COMPANY_COLORS['Worldplay Networks'].primary,
      companyColorAccent: COMPANY_COLORS['Worldplay Networks'].accent,
      projects: [
        {
          title: 'VFLive Stream Health Dashboard',
          description:
            'Designed a Grafana dashboard that transformed chaotic live event debugging into systematic problem-solving by surfacing critical stream health information.',
          outcomes: [
            'Turned chaotic debugging into systematic problem-solving during live events',
            'Interviewed all Customer Success team members to understand real-time debugging needs during live event crises',
            'Identified and ranked data sources by accessibility and level of effort, enabling phased implementation',
          ],
          image: '/images/placeholder/rain-duck.png',
          imageAlt: 'VFLive dashboard showing stream health metrics',
        },
        {
          title: 'Video Library Redesign',
          description:
            'Redesigned the video library with content types as distinct sections and a mobile-responsive card format to improve content discoverability.',
          outcomes: [
            'Implemented content types as distinct sections with mobile-responsive card format',
            'Conducted usability testing that revealed hidden functionality issues',
            'Learned valuable lessons about exposing important actions to users',
          ],
          image: '/images/placeholder/ramoon.png',
          imageAlt: 'Redesigned video library with card-based layout',
        },
        {
          title: 'Admin Portal SaaS Transformation',
          description:
            'Redesigned the admin portal around customer tasks rather than system architecture, dramatically reducing setup time and cognitive load.',
          outcomes: [
            'Reduced new site setup time from 12 hours to 2 minutes',
            'Translated technical language into customer-focused language (e.g., "ingest endpoint" became "upload video")',
            'Reorganized portal around customer tasks rather than system architecture',
          ],
          image: '/images/placeholder/beached_balls.png',
          imageAlt: 'Admin portal interface showing task-focused design',
        },
        {
          title: 'Indigenous Digital Sovereignty',
          description:
            'Worked with Indigenous communities to build interfaces that respected their cultural organization models and enabled digital sovereignty.',
          outcomes: [
            'Built interfaces respecting Indigenous cultural organization models',
            'Enabled communities to preserve languages and traditions through video on their own terms',
            'Provided full content sovereignty to Indigenous communities',
          ],
          image: '/images/placeholder/knitten.png',
          imageAlt:
            'Indigenous community video platform interface',
        },
      ],
    },
    {
      company: 'Shaw Communications',
      role: 'Senior UX Designer',
      period: '2005 – 2017',
      description:
        'Shaw delivered cable, internet, and phone services to millions across western Canada. I led visual and technical teams in redesigning customer-facing web portals.',
      highlights: [
        'Phone Portal Redesign: Led UX, visual design, and technical teams in responsive redesign that prioritized tasks customers actually performed',
        'Analyzed call center data and conducted usability testing to understand customer mental models',
        'Reduced abandonment rates and call center volume for basic phone management questions',
        'Support Portal Rebuild: Rebuilt information architecture around customer problems rather than internal department structure',
        'Reorganized content around customer language (e.g., "my internet is slow") instead of technical categories',
        'Enabled customers to solve problems independently and come to support calls with relevant troubleshooting completed',
      ],
      companyImage: '/images/work/shaw-logo.svg',
      companyImageAlt: 'Shaw Communications company logo',
      companyColor: COMPANY_COLORS['Shaw Communications'].primary,
      companyColorAccent: COMPANY_COLORS['Shaw Communications'].accent,
      projects: [
        {
          title: 'Phone Portal Redesign',
          description:
            'Led cross-functional teams in a responsive redesign that prioritized the tasks customers actually performed, informed by call center data and usability testing.',
          outcomes: [
            'Reduced abandonment rates for phone management tasks',
            'Reduced call center volume for basic phone management questions',
            'Analyzed call center data and conducted usability testing to understand customer mental models',
          ],
          image: '/images/placeholder/rain-duck.png',
          imageAlt: 'Shaw phone portal responsive interface',
        },
        {
          title: 'Support Portal Information Architecture',
          description:
            'Rebuilt the support portal information architecture around customer problems rather than internal department structure.',
          outcomes: [
            'Reorganized content around customer language (e.g., "my internet is slow") instead of technical categories',
            'Enabled customers to solve problems independently',
            'Improved support call quality by helping customers complete relevant troubleshooting before contacting support',
          ],
          image: '/images/placeholder/ramoon.png',
          imageAlt: 'Shaw support portal showing customer-focused navigation',
        },
      ],
    },
  ],

  creativeBackground:
    'My creative background in songwriting and podcast production taught me to distill complexity and tell clear stories—skills that show up in every design decision.',

  bridgeSentence:
    'I design systems where people and AI agents work with the same information, each through interfaces optimized for how they think.',
}
