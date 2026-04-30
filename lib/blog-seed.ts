import type { BlogPost } from './strapi'

export const seedPosts: BlogPost[] = [
  {
    id: '1',
    title: 'What Is Claude Code? A Plain-English Guide for Business Owners',
    slug: 'what-is-claude-code',
    category: 'claude-code',
    date: '2026-04-30',
    readTime: 7,
    coverImage: '/images/blog/claude-code-cover.jpg',
    excerpt:
      "Claude Code is Anthropic's AI coding assistant that works directly inside your terminal. Here is what it actually does, and whether a business owner should care.",
    content: `
## What Is Claude Code?

Claude Code is a command-line AI coding assistant built by Anthropic, the company behind the Claude family of AI models. Unlike ChatGPT, which you use through a web browser, Claude Code lives in your terminal: the text-based interface developers use to control their computers directly.

When you open Claude Code, you are not typing into a chat window. You are working with an AI that can read your files, write and edit code, run commands, connect to your GitHub repositories, and execute tasks across your entire project. It is closer to having a junior developer sitting at your machine than it is to having a chat assistant you copy-paste answers from.

This distinction matters for business owners. Claude Code is not a tool for asking questions. It is a tool for building things.

## How Is Claude Code Different From ChatGPT?

The simplest way to understand the difference: ChatGPT talks about code. Claude Code writes, edits, and runs it.

If you ask ChatGPT to build a customer database tool, it will write code in a text window. You then need to figure out how to turn that text into a working programme. If you ask Claude Code to build the same thing, it opens your project folder, creates the necessary files, writes the code, installs the dependencies, and tells you when it is done. You test it. If something needs fixing, you tell it, and it fixes it.

For business owners who want to build internal tools, automate repetitive tasks, or reduce their dependency on expensive developers for small jobs, this is a meaningful difference.

## What Can Claude Code Actually Do for a Business?

Here are practical things business owners are using Claude Code for right now.

## Building Internal Tools

Client portals, reporting dashboards, lead tracking systems. Work that would cost between £5,000 and £15,000 to commission from a developer can often be completed in a weekend with Claude Code. Kongwa Tech built a complete revenue engine for an e-commerce client using Claude Code in four days. The same scope from a London agency would have taken six weeks and cost more than £20,000.

## Automating Repetitive Workflows

If someone on your team is manually copying data between systems, formatting reports, or sending templated emails, Claude Code can write a script to handle it automatically. The script runs unattended. Your team stops doing the manual work.

## Connecting Software That Does Not Talk to Each Other

Many businesses use tools that were not designed to integrate. Claude Code can build custom connectors between your CRM, your email platform, your accounting software, and your website. These bespoke integrations are not available off the shelf and would typically require a developer to commission.

## Maintaining Existing Code

If you inherited code from a previous developer or agency, Claude Code can read it, explain what it does, and make targeted changes without you needing to understand every line. This is particularly useful for businesses that paid for a custom tool and then lost contact with the person who built it.

## What Does Claude Code Cost?

Claude Code is included with an Anthropic Claude Pro subscription at approximately $20 per month. For heavier usage, the Claude Max plan at $100 per month includes significantly more capacity. That is the realistic starting point for consultants and business owners using it regularly.

Compare that against the day rate of a freelance developer in the UK, typically between £400 and £800 per day, and the economics are straightforward.

## Is Claude Code Right for You?

Claude Code is not right for every business owner. The tool lives in the terminal, which requires some basic familiarity with how to navigate files and run commands. There is a learning curve.

However, for business owners willing to invest a few days in the basics, or who work alongside a technical co-founder or consultant, Claude Code unlocks a level of software capability that was simply not accessible to small businesses before.

If you are considering this seriously, the fastest path is a structured session with someone who uses Claude Code daily. A single morning of guidance will compress weeks of trial and error into a clear, productive starting point.

## Frequently Asked Questions

## Does Claude Code require coding experience?

Some basic comfort with a command line is helpful, but Claude Code is designed to be used by people who are not professional developers. Many users learn as they go, with the tool explaining each step.

## Can Claude Code access my business data?

Only what you give it access to. It works within your local files and any external services you explicitly connect. It does not have background access to anything.

## Is Claude Code the same as Claude on claude.ai?

No. Claude on claude.ai is a web-based chat interface. Claude Code is a separate, more powerful tool designed for working directly with code and files on your computer.

## How does Claude Code compare to hiring a developer?

It is not a replacement for a skilled developer on complex projects. It is an alternative for small to medium internal tools, automations, and scripts: the kind of work that costs £500 to £3,000 to commission and takes weeks to get on a developer's schedule.
    `.trim(),
  },
  {
    id: '2',
    title: 'Claude Code vs Cursor: Which AI Coding Tool Is Right for You?',
    slug: 'claude-code-vs-cursor',
    category: 'claude-code',
    date: '2026-04-28',
    readTime: 6,
    coverImage: '/images/blog/cursor-claude-cover.jpeg',
    excerpt:
      'Two of the most talked-about AI coding tools in 2026. One is a terminal-based assistant. The other is a full IDE replacement. Here is how to choose.',
    content: `
## The Two Tools Everyone Is Comparing

Claude Code and Cursor are the two AI coding tools that come up most often in conversations with business owners and technical founders in 2026. They are both excellent. They are also fundamentally different in what they are and who they are for.

This comparison comes from direct experience using both in client projects across Southeast England and internationally.

## What Cursor Is

Cursor is an AI-first code editor. It looks and feels like VS Code because it is built on VS Code, but with AI deeply integrated into the interface. You write code inside Cursor the way a developer writes code in any editor. You open files, write in the editor window, and the AI assists you inline as you type.

Cursor's strength is the development experience for people who are already comfortable in an IDE. The AI can autocomplete code, explain functions, refactor sections, and answer questions about your codebase, all within a familiar visual interface.

## What Claude Code Is

Claude Code is a terminal-based tool. You run it from the command line and it operates as an autonomous agent across your entire project. Rather than assisting you as you write, Claude Code reads your codebase, plans what needs to happen, and executes tasks from start to finish.

You describe what you want. Claude Code builds it. You review the result. You iterate. This is a fundamentally different workflow. You are directing, not typing.

## A Direct Comparison

The key differences come down to interface, user type, and workflow.

Cursor requires you to write code. It makes that writing faster and smarter, but the assumption is that you are a developer who already knows what you are building and how to build it. Cursor accelerates the craft.

Claude Code does not require you to write code at all. You describe the outcome, and Claude Code handles the implementation. The skill required is knowing how to give clear instructions and how to evaluate the result. This is a different skill set from programming, and it is accessible to non-developers.

## Which One Should You Use?

Use Cursor if you are a developer who wants an AI-enhanced IDE. You already write code daily and want something that makes that process faster and smarter. Cursor is exceptional for this use case.

Use Claude Code if you are a business owner, consultant, or non-developer who wants to build things using AI as the primary builder. You are giving instructions, reviewing outputs, and iterating. You are not writing code yourself. Claude Code is built for this workflow.

Use both if you have a technical background and want the autonomous task completion of Claude Code for larger builds, with Cursor for detailed editing and refinement. This is how most serious practitioners work in 2026.

## The Honest Verdict

For most business owners reading this, Claude Code is the more immediately useful tool. Cursor assumes you can write code. Claude Code assumes you can describe what you want built.

Neither tool is plug-and-play if you have no technical background at all. Claude Code requires some comfort with the terminal, and learning how to give it clear, structured instructions is a skill in itself.

If you want to get up and running without weeks of trial and error, a structured session with someone who uses both tools daily is the fastest path. One morning of the right guidance compresses weeks of self-teaching.

Get in touch to discuss which tool is the right starting point for your specific situation.
    `.trim(),
  },
  {
    id: '3',
    title: 'What Is Vibe Coding? The Complete 2026 Guide',
    slug: 'what-is-vibe-coding',
    category: 'vibe-coding',
    date: '2026-04-25',
    readTime: 8,
    coverImage: '/images/blog/vibe-coding-cover.jpg',
    excerpt:
      'Vibe coding is building software by describing what you want in plain English, letting an AI write the code. Here is what it is, what people are building with it, and what it means for UK businesses.',
    content: `
## Where the Term Came From

The phrase "vibe coding" was coined by Andrej Karpathy in early 2025. Karpathy is one of the most respected figures in AI: a founding member of OpenAI and former head of AI at Tesla. When he described his approach to building software by fully giving in to the AI and not worrying too much about the code itself, the term spread immediately across the developer community.

The core idea: you describe what you want. The AI writes it. You test it. You describe what needs to change. You repeat until it works. You may never read a single line of the underlying code.

## What Makes It Different From Traditional Software Development

Traditional software development requires learning a programming language, understanding data structures, knowing how to use development tools, and accumulating years of practice. It is a skilled profession.

Vibe coding does not replace that profession. But it opens a new path for people who want to build functional software without becoming a developer. The trade-off is that you sacrifice deep control and understanding of the code in exchange for speed and accessibility.

For many business use cases, this trade-off is entirely acceptable.

## Tools You Can Use for Vibe Coding

Several tools have emerged specifically designed for this workflow.

Claude Code is Anthropic's terminal-based assistant. It handles complex, multi-file projects and produces professional-grade outputs. It requires some comfort with the command line.

Cursor is an AI-first IDE. More visual than Claude Code. Better for developers who want AI assistance while writing, rather than full delegation.

v0 by Vercel is designed specifically for building web interfaces. Describe a UI component and it generates ready-to-use code. Excellent for non-developers building websites or web applications.

Bolt.new is a browser-based vibe coding environment. No installation required. Good for getting started quickly without any technical setup.

Replit is a cloud-based development environment with strong AI features. Useful for beginners because it handles the infrastructure for you.

## What People Are Actually Building in 2026

The range of what is being built with vibe coding is wider than most people expect.

Business owners are building internal tools: client portals, inventory trackers, reporting dashboards. These would previously have cost £5,000 to £15,000 to commission and taken months to deliver.

Marketers are building landing page variants, email sequence managers, and social media scheduling tools without touching a developer's calendar.

Consultants are building proposal generators, client onboarding workflows, and project tracking systems in an afternoon.

Small businesses in Kent and across Southeast England are using vibe coding to build things that give them genuine competitive advantages over competitors who are still waiting six weeks for a developer quote.

At Kongwa Tech, every client-facing tool we build starts with a vibe coding session to rapidly prototype the core functionality. The prototype informs the architecture. The architecture guides the build. The cycle from idea to testable product is measured in hours, not weeks.

## Is Vibe Coding Bad for Professional Developers?

This is the question that generates the most debate in technical communities. The honest answer is nuanced.

Vibe coding produces code that works but that a senior developer would often critique. It can be verbose, inconsistently structured, and sometimes takes roundabout approaches to problems. For production systems at scale, with security requirements, or with complex performance needs, professional development remains essential.

But the majority of internal business tools do not require production-grade code. They need to work reliably for ten to fifty users. They need to be maintainable enough for someone to update when requirements change. Vibe coding is more than sufficient for this level of requirement.

Developers who view vibe coding as a threat are thinking about it wrong. Developers who learn to use AI tools to accelerate their own work, and who position themselves to review and refine AI-generated code, will be more productive and more valuable than ever.

## What This Means for UK Businesses

The practical implication for business owners in Kent, Surrey, and across Southeast England is this: the cost of building software has dropped dramatically. Tools that were previously only accessible to businesses with development budgets are now within reach.

The constraint is no longer money or time. It is knowing what to build, how to structure the problem, and how to guide the AI toward a result that is genuinely useful for your business.

This is where strategic AI consulting adds the most value. Not in writing the code, but in defining the right problem and ensuring the output solves it.

If you want to explore what vibe coding could build for your business, start with a 15-minute discovery call. We will identify two or three specific tools that could meaningfully improve your operations, and you will leave with a clear picture of what is possible.
    `.trim(),
  },
]
