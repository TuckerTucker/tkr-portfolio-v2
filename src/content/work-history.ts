import { WorkHistory } from './types'

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
    },
  ],

  creativeBackground:
    'My creative background in songwriting and podcast production taught me to distill complexity and tell clear stories—skills that show up in every design decision.',

  bridgeSentence:
    'I design systems where people and AI agents work with the same information, each through interfaces optimized for how they think.',
}
