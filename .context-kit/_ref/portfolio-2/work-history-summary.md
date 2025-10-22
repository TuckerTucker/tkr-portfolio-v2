I'll craft your work history with Tucker's voice and style, following the Problem → Understanding → Solution → Impact framework.

---

## Work History

### Nutrien – Lead UX Designer
**February 2023 – September 2023**

Nutrien is the world's largest crop inputs provider, serving 37,000 employees globally. I joined their six-month HomeSafe Phase 2 project—an intranet bringing safety information to every employee across the organization.

**The Challenge**
The Operating Standards section had become difficult to navigate and maintain. Employees struggled to find safety protocols quickly, and the multi-file upload process was cumbersome and error-prone.

**My Approach**
I conducted usability tests with employees across different roles and locations, discovering that people accidentally lost data during uploads and couldn't easily distinguish between similar documents. Through collaborative design sessions with dev and product teams, I mapped out their actual workflows and pain points.

**The Solution**
I redesigned the section with an intuitive two-column layout that kept context visible while browsing. The new multi-file uploader prevented accidental data loss through clear feedback and confirmation patterns. Every design decision came from watching real employees interact with the system.

**The Impact**
Employees could now find safety standards faster and upload documentation confidently. The usability tests revealed not just immediate fixes but opportunities that shaped the product roadmap for future releases.

---

### Worldplay Networks – Manager of UX Design and Lead Designer
**2017 – 2022**

Worldplay's video platform Vidflex helped businesses manage and sell live and on-demand video. Our customers included Hockey Canada, TELUS, and Indigenous communities preserving their languages and culture.

**The Challenge: VFLive Dashboard**
Customer Success teams needed to debug live streaming issues during active events, but the information they needed was scattered across multiple systems. When a Hockey Canada game had streaming problems, our team was manually checking logs, databases, and Google Sheets to piece together what was happening.

I started with the four core questions I always ask:
1. Who is it for? (Customer Success team)
2. What's its purpose? (Debug live stream issues in real-time)
3. Is it new or building on existing? (New, but pulling from existing data sources)
4. When is it needed? (Immediately—we were moving to Sports-as-a-Service)

**Understanding the Problem**
I interviewed all five Customer Success team members about the information they actually needed during a live event crisis. Then I identified every data store where live stream information lived and grouped it by API accessibility—what was available now versus what would require developer work.

The discovery revealed that the information they needed most urgently (stream status, connection health, viewer metrics) was spread across Platform Stats, VFLive API, and Cloudwatch Logs. I worked with the dev team to rank each data source by level of effort, which let us build in phases rather than waiting for everything to be perfect.

**The Solution**
We chose Grafana because our dev resources were limited and it offered flexibility without requiring custom code. I designed a dashboard that surfaced critical information first—stream health, connection status, and viewer experience metrics—with deeper debugging details available when needed.

The interface used visual indicators (color, icons, status messages) so teams could assess situations at a glance during high-pressure moments. Every piece of information on screen answered a specific question the Customer Success team had asked during interviews.

**The Impact**
Customer Success could now see what was happening with a live stream in real-time instead of frantically checking multiple systems. The dashboard turned chaotic debugging into systematic problem-solving, which meant faster resolution times when Hockey Canada's championship games went live.

---

**The Challenge: Library Redesign**  
*(See attached PDF walkthrough for full details)*

The video library had become cluttered and difficult to use. All content types (Live Streams, VOD, Series) appeared in one overwhelming view. The Status column was always empty except during the brief processing period. The State column looked interactive but was informational only. Mobile users had to scroll horizontally because the table layout didn't adapt to smaller screens.

**My Approach**
I identified every attribute associated with a video and categorized them as filtering or sorting items. Working with the dev team, we split the work into two phases—filtering first, then sorting—so we could ship improvements iteratively rather than in one massive release.

**The Solution**
I redesigned the library with content types as distinct sections, making it immediately clear what kind of content you're viewing. The thumbnail area now communicates video status (Uploading, Processing, Video Missing, No Cover Image) at a glance. I surfaced key management functions—Publishing and Deleting—that were previously buried.

For mobile, I designed a card format that includes all the same functionality as the list view but works naturally on small screens. Users can switch between card and list views based on preference.

**What I Learned**
Usability testing revealed that the ellipses menu was hard to find. The final design exposed functionality with clear icons instead. This taught me that what seems "clean" to designers can actually hide important actions from users—a lesson I carried into future projects.

---

**The Challenge: Admin Portal to SaaS Interface**
Vidflex's internal admin portal was built for technical staff, not customers. The language was system-focused ("ingest endpoints," "transcoding queues"), the interface required deep platform knowledge, and setting up a new site took our team 12 hours of manual configuration.

**My Understanding**
I spent time with both our internal teams and customers to understand what they actually needed to accomplish. Customers didn't care about transcoding queues—they cared about uploading videos and getting them online. Our technical language was creating a barrier between people and their goals.

**The Solution**
I redesigned the portal around customer tasks rather than system architecture. "Ingest endpoint" became "Upload video." "Transcoding queue" became "Processing status." I created a site setup interface that automated configuration steps, guided users through decisions with context and examples, and provided immediate feedback.

**The Impact**
New site setup dropped from 12 hours to 2 minutes. More importantly, customers could now manage their video platform independently instead of relying on our support team for basic tasks. This freed our team to focus on complex customer needs while empowering customers to move at their own pace.

---

**The Challenge: Indigenous Digital Sovereignty**
Several Indigenous communities approached us wanting to preserve their languages and culture through video, but existing platforms forced them into Western content organization models. They needed to livestream community meetings, share videos in their languages, and maintain control over their cultural content.

**My Approach**
This required listening more than designing. I worked with community members to understand how they wanted to organize and share their content. Their mental models didn't match typical video platform categories—they thought in terms of relationships, events, and cultural context rather than "content types."

**The Solution**
I helped build a community-focused interface where Indigenous users could livestream meetings, organize content by cultural relevance rather than arbitrary categories, and control exactly who could access their videos. The system respected their sovereignty over their own content and cultural materials.

**The Impact**
Communities could now share their languages and traditions on their own terms. Elders could teach traditional practices through video. Community meetings could include remote members. The platform became a tool for cultural preservation and connection rather than just another content management system.

---

### Shaw Communications – Senior UX Designer
**2005 – 2017**

Shaw delivered cable, internet, and phone services to millions across western Canada. I led visual and technical teams in redesigning customer-facing web portals, always starting with understanding what customers actually needed rather than what we assumed they wanted.

**The Challenge: Phone Portal Redesign**
Our phone management portal was built in the early web era and hadn't kept up with how people actually used phones in 2015. Analytics showed high abandonment rates. Customer surveys indicated confusion. Usability testing revealed that people couldn't find basic features like voicemail settings.

**My Approach**
I analyzed call center data to identify the most common customer issues, then conducted both facilitated usability sessions and self-guided tests through UserTesting.com. This combination showed me not just what people struggled with, but why—their mental models didn't match our information architecture.

**The Solution**
I led the UX, visual design, and technical teams in executing a responsive redesign that prioritized the tasks customers actually performed rather than mirroring our technical system structure. We surfaced common actions, simplified navigation, and ensured the interface worked seamlessly across devices.

**The Impact**
Customers could now manage their phone service without calling support. Abandonment rates dropped. Call center volume decreased for basic phone management questions. The responsive design meant customers could make changes from any device, which was increasingly important as mobile usage grew.

---

**The Challenge: Support Portal Rebuild**
The support portal was organized by our internal department structure, not by customer problems. If your internet was slow, you had to know whether that was a "connectivity issue" or a "performance issue" or a "service quality issue"—categories that meant something to our engineers but nothing to customers.

**My Understanding**
I dove into call center data to see what customers actually called about. The top issues were clear: internet is slow, TV picture is frozen, can't connect to WiFi, forgot my password. These weren't organized by technical category—they were organized by customer impact.

**The Solution**
I rebuilt the information architecture around customer problems rather than our internal organization. "My internet is slow" became a starting point rather than "Connectivity Issues → Performance → Download Speed." Each path led customers through troubleshooting steps that actually matched how they experienced the problem.

**The Impact**
Customers could solve their own problems more often, which meant fewer support calls and faster resolutions. More importantly, when customers did need to call, they came to the conversation with relevant troubleshooting already completed, which made support conversations more efficient for everyone.

---

This work history demonstrates the consistent thread through your career: understanding how people actually think about and solve problems, then designing systems that match their mental models rather than forcing them to adapt to technical constraints. Whether the users are humans or AI agents, the core principle remains the same.

 Core Thread Across 20 Years:
  Understanding how people (or agents) actually think and
  solve problems, then designing systems that match their
  mental models rather than forcing adaptation to
  technical constraints.

  Key Examples to Weave In:
  - Shaw Support Portal: Rebuilt IA around "my internet is
   slow" (customer language) vs. "Connectivity Issues →
  Performance" (internal structure)
  - Worldplay Admin Portal: "Ingest endpoint" → "Upload
  video" (system language vs. task language)
  - Nutrien Multi-file Uploader: Usability testing
  revealed accidental data loss patterns → designed clear
  feedback/confirmation

  This Maps Directly to Your AGx Work:
  - You've been doing "user research" for 20 years
  - AI agents are just different users with different
  mental models
  - Same UX principles: match the interface to how they
  actually process information

  About Section Strategy

  Opening (2-3 sentences):
  Brief intro establishing your personality and core
  philosophy

  Journey (150-200 words):
  - Shaw (2005-2017): Learned to design for real customer
  mental models vs. internal systems
  - Worldplay (2017-2022): Applied those principles across
   diverse users (sports orgs, Indigenous communities)
  - Nutrien (2023): Brought collaborative UX to enterprise
   scale
  - Now: Same principles, new users → AI agents

  Creative Background (1-2 sentences):
  Songwriting and podcast production taught you to distill
   complexity and tell clear stories—skills that show up
  in every design decision.

  Bridge to Projects (1 sentence):
  "I design systems where people and AI agents work with
  the same information, each through interfaces optimized
  for how they think."
