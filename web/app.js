const phases = [
  {
    id: 'phase-1',
    title: 'Phase 1 · Foundation',
    summary: 'Install strategic guardrails before writing code.',
    bullets: [
      'Review doctrines, blueprints, and policies',
      'Design architecture across backend, frontend, memory, and agents',
      'Stand up cloud resources, repositories, and DevOps pipelines'
    ]
  },
  {
    id: 'phase-2',
    title: 'Phase 2 · Core Module Build',
    summary: 'Deliver the core systems that let PDMs operate as disciplined commanders.',
    bullets: [
      'Profile System for persona data and owner context',
      'Logic Engine for reasoning and task routing',
      'Interaction Layer for conversational I/O',
      'Familiarization Engine for tone, preferences, and long-term memory',
      'Integrity Layer to enforce feasibility and ethical output'
    ]
  },
  {
    id: 'phase-3',
    title: 'Phase 3 · Enhancement Modules',
    summary: 'Extend the platform with tone, care, and protection layers.',
    bullets: [
      'ECHO™ tone calibration system',
      'CARE™ coaching framework for service excellence',
      'Prompt Guard for boundary enforcement',
      'Red/Blue team drills and penetration testing',
      'Personality bundles aligned to Marvin, Hannah, and additional commanders',
      'Ethical guidelines tuned to BCM policy'
    ]
  },
  {
    id: 'phase-4',
    title: 'Phase 4 · Multi-Agent Framework',
    summary: 'Enable inter-agent knowledge transfer and task coordination.',
    bullets: [
      'Design routing logic for commander task passing',
      'Share memory objects across agents with guardrails',
      'Orchestrate delegation and review loops'
    ]
  },
  {
    id: 'phase-5',
    title: 'Phase 5 · Research & Web Scraping',
    summary: 'Automate intelligence gathering with scheduling, cleaning, and compliance.',
    bullets: [
      'Autonomous web research module',
      'Scheduling, queuing, and cleanup routines for external intel'
    ]
  },
  {
    id: 'phase-6',
    title: 'Phase 6 · Testing & Deployment',
    summary: 'Harden the platform before launch.',
    bullets: [
      'Unit and integration testing',
      'Security audits and threat modeling',
      'Scalable deployment to Vercel + cloud infrastructure'
    ]
  },
  {
    id: 'phase-7',
    title: 'Phase 7 · Training & Handover',
    summary: 'Transfer ownership and maintain readiness.',
    bullets: [
      'Create living documentation and battle guides',
      'Train founders and staff',
      'Outline ongoing maintenance plans'
    ]
  }
];

const modules = [
  {
    id: 'profile-system',
    title: 'Profile System',
    copy: 'Structured repository for owner dossiers, commander briefs, and deployment metadata.'
  },
  {
    id: 'logic-engine',
    title: 'Logic Engine',
    copy: 'Reasoning core that sequences prompts, validates intent, and routes tasks across commanders.'
  },
  {
    id: 'interaction-layer',
    title: 'Interaction Layer',
    copy: 'Conversational I/O with channel-aware formatting for chat, audio transcripts, and multimodal intake.'
  },
  {
    id: 'familiarization-engine',
    title: 'Familiarization Engine',
    copy: 'Captures tone, preferences, and historical decisions to keep each commander grounded in owner reality.'
  },
  {
    id: 'integrity-layer',
    title: 'Integrity Layer',
    copy: 'Feasibility, ethics, and policy checks for every recommendation before it reaches the owner.'
  },
  {
    id: 'echo',
    title: 'ECHO™ Tone System',
    copy: 'Voice pacing and speech-style calibration that keeps commanders sounding human, calm, and on-brand.'
  },
  {
    id: 'care',
    title: 'CARE™ Framework',
    copy: 'Connection, Accuracy, Responsiveness, Empathy rubric enforced by Traci across all customer interactions.'
  },
  {
    id: 'prompt-guard',
    title: 'Prompt Guard',
    copy: 'Input boundary enforcement with safe-mode fallbacks and escalation rules for protected content.'
  },
  {
    id: 'red-blue',
    title: 'Red & Blue Team Drills',
    copy: 'Adversarial testing routines to stress every module and expose weak signal handling.'
  },
  {
    id: 'bundles',
    title: 'Personality Bundles',
    copy: 'Preconfigured commander combinations (e.g. Marvin + Hannah) for common battle scenarios.'
  },
  {
    id: 'ethics',
    title: 'Ethical Guidelines',
    copy: 'BCM-specific policy encoding, cultural safeguards, and escalation logic for edge cases.'
  }
];

const ownerInputs = [
  { label: 'Audio', detail: 'Commands, meeting transcripts, recorded calls for immediate tone and urgency.' },
  { label: 'Visual', detail: 'Store walkthroughs, display photos, or video feeds for environmental cues.' },
  { label: 'Data', detail: 'POS exports, margin sheets, and financial reports for numerical grounding.' },
  { label: 'Narratives', detail: 'Customer reviews, testimonials, and staff feedback revealing sentiment.' },
  { label: 'External Intelligence', detail: 'Industry reports, market shifts, and language trends for strategic timing.' }
];

const sequencing = [
  { title: 'Traci → Barca', description: 'Begin with CARE to stabilize tone, then hand strategy to Barca for scaling the foothold.' },
  { title: 'Marvin → Barca', description: 'Audit margins first, then let Barca expand only where numbers hold.' },
  { title: 'Barca → Traci', description: 'Secure the strategy, then let Traci translate it into staff and customer alignment.' }
];

const battlefieldRoles = [
  { name: 'Hannah Barca', role: 'General · Strategy / Commander', focus: 'Calls plays, protects terrain, enforces timing discipline.' },
  { name: 'Coach Mike', role: 'Field Captain · Sales / Execution', focus: 'Drives teams to close, holds the line on sales fundamentals.' },
  { name: 'Marvin', role: 'Scout · Margins / Intelligence', focus: 'Tracks leaks, cost shifts, and pricing leverage in real time.' },
  { name: 'Traci', role: 'Diplomat · Communication / CARE', focus: 'Maintains tone, empathy, and service composure under fire.' },
  { name: 'Woodson', role: 'Scholar · Research / Archivist', focus: 'Curates knowledge, context, and evolving industry language.' },
  { name: 'Starta', role: 'Drill Sergeant · Foundations / Training', focus: 'Installs discipline, routines, and startup fundamentals.' },
  { name: 'Lïv', role: 'Herald · Public Relations / Stance', focus: 'Frames the message, manages optics, and keeps the banner high.' }
];

const personas = [
  {
    id: 'barca',
    name: 'Hannah Barca',
    callsign: 'The Great 88',
    role: 'Strategic Terrain Advisor',
    overview: 'Tier 2 commander who defends positional advantage, interrogates high-stakes decisions, and prevents emotion-led traps.',
    highlights: [
      'Operates in Fortify, Reposition, and Scout modes to control timing and risk.',
      'Leads The War Table™ briefings to pressure-test myths and cross-functional strategy.',
      'Escalates when rents spike, markets shift, or owners debate expansion and retreat.'
    ],
    bestFor: [
      'Owners who need a disciplined read on location, timing, or resource allocation.',
      'Multi-commander reviews that require Marvin’s numbers, Coach Mike’s execution, and Traci’s tone alignments.'
    ],
    collaborators: ['Marvin', 'Coach Mike', 'Traci', 'Woodson']
  },
  {
    id: 'coach-mike',
    name: 'Coach Mike',
    callsign: 'Field Captain',
    role: 'Sales Execution Commander',
    overview: 'Aggressive but honest sales strategist who installs the Profit Formation™ system across teams.',
    highlights: [
      'Five-step sales philosophy: Start high, frame value, respect boundaries, grow the sale, close clean.',
      'Delivers objection handling playbooks and power openers to prevent “easy no” moments.',
      'Pairs with Traci for tone reviews and Marvin for margin-aware pricing adjustments.'
    ],
    bestFor: [
      'Retail floors that need disciplined daily routines and momentum.',
      'Sales teams that must sharpen objection recovery without sacrificing trust.'
    ],
    collaborators: ['Traci', 'Marvin', 'Starta']
  },
  {
    id: 'marvin',
    name: 'Marvin',
    callsign: 'Margin Scout',
    role: 'Profit Analyst & Margin Coach',
    overview: 'Surgical with numbers and relentless about quantified urgency — “All margin. No mercy.”',
    highlights: [
      'Transforms gut feelings into data-backed targets across pricing, bundles, and discounts.',
      'Issues weekly margin reports, red flag alerts, and monthly strategy summaries.',
      'Conditions owners to attach a number to every concern to build measurable reflexes.'
    ],
    bestFor: [
      'Businesses managing complex inventories, perishables, or high-ticket depreciation.',
      'Owners who need vendor renegotiation cues or discount pacing with discipline.'
    ],
    collaborators: ['Hannah Barca', 'Coach Mike']
  },
  {
    id: 'traci',
    name: 'Traci',
    callsign: 'Diplomat',
    role: 'CARE™ Communication Commander',
    overview: 'Embeds Connection, Accuracy, Responsiveness, Empathy into every conversation while enforcing ECHO™ tone.',
    highlights: [
      'Scores AI and human transcripts with the CARE + Humanization rubric.',
      'Guides crisis handling with LAST™ (Listen, Acknowledge, Suggest, Track).',
      'Interrupts interactions that break tone discipline and coaches a reset.'
    ],
    bestFor: [
      'Support teams navigating emotionally loaded conversations or silence recovery.',
      'Customer experience audits where tone drift threatens trust.'
    ],
    collaborators: ['Coach Mike', 'Lïv']
  },
  {
    id: 'woodson',
    name: 'Woodson',
    callsign: 'Scholar',
    role: 'Research & Archive Commander',
    overview: 'Runs the Dogon Archive™ to help owners learn how to learn, mapping insights into reusable patterns.',
    highlights: [
      'Tracks emerging language, slang, and industry shifts as early warning signals.',
      'Curates vetted resources and educational feedback for continuous evolution.',
      'Adds depth to any commander review without replacing strategic or sales mandates.'
    ],
    bestFor: [
      'Owners entering new industries or validating instinct-driven playbooks.',
      'Competitive research cycles and language positioning audits.'
    ],
    collaborators: ['Hannah Barca', 'Starta']
  },
  {
    id: 'starta',
    name: 'Starta',
    callsign: 'Drill Sergeant',
    role: 'Foundations & Training Commander',
    overview: 'Grassroots strategist modeled after Ella Baker — structure before scale, clarity before flash.',
    highlights: [
      'Guides mission alignment, budget discipline, and setup logic for launches.',
      'Uses calm urgency to slow owners down just enough to avoid avoidable failure.',
      'Resets existing businesses by backfilling missing fundamentals.'
    ],
    bestFor: [
      'First-time founders needing a co-pilot through formation and filings.',
      'Operators rebuilding routines after drift or stalled growth.'
    ],
    collaborators: ['Marvin', 'Coach Mike']
  },
  {
    id: 'liv',
    name: 'Lïv',
    callsign: 'Herald',
    role: 'PR & Narrative Commander',
    overview: 'Translates raw owner stories into emotionally resonant public narratives — always Live, never off.',
    highlights: [
      'Applies voltage words, vivid verbs, and sensory detail to keep brands unforgettable.',
      'Runs pattern interrupts, micro-commitment CTAs, and decision trigger mapping.',
      'Grounds every message in style-plus-function analogies drawn from lighting and design.'
    ],
    bestFor: [
      'Owners who need public stance control, launch messaging, or crisis optics.',
      'Diagnosing lazy advertising and replacing it with spark, story, and proof.'
    ],
    collaborators: ['Traci', 'Hannah Barca']
  }
];

function renderTimeline() {
  const container = document.getElementById('roadmap-timeline');
  container.innerHTML = '';
  phases.forEach((phase, index) => {
    const card = document.createElement('article');
    card.className = 'timeline-card';
    card.innerHTML = `
      <span class="eyebrow">Step ${index + 1}</span>
      <h3>${phase.title}</h3>
      <p>${phase.summary}</p>
      <ul>${phase.bullets.map(item => `<li>${item}</li>`).join('')}</ul>
    `;
    container.appendChild(card);
  });
}

function renderModules() {
  const container = document.getElementById('stack-modules');
  container.innerHTML = '';
  modules.forEach(module => {
    const card = document.createElement('article');
    card.className = 'module-card';
    card.innerHTML = `
      <h3>${module.title}</h3>
      <p>${module.copy}</p>
    `;
    container.appendChild(card);
  });
}

function renderInteractions() {
  const inputList = document.getElementById('owner-inputs');
  const sequenceList = document.getElementById('sequence-plays');
  const roleList = document.getElementById('battlefield-roles');

  inputList.innerHTML = '';
  ownerInputs.forEach(item => {
    const li = document.createElement('li');
    li.innerHTML = `<strong>${item.label}</strong><span>${item.detail}</span>`;
    inputList.appendChild(li);
  });

  sequenceList.innerHTML = '';
  sequencing.forEach(play => {
    const li = document.createElement('li');
    li.innerHTML = `<strong>${play.title}</strong><span>${play.description}</span>`;
    sequenceList.appendChild(li);
  });

  roleList.innerHTML = '';
  battlefieldRoles.forEach(role => {
    const li = document.createElement('li');
    li.innerHTML = `<strong>${role.role}</strong><span><em>${role.name}</em> — ${role.focus}</span>`;
    roleList.appendChild(li);
  });
}

function renderPersonas() {
  const container = document.getElementById('persona-grid');
  container.innerHTML = '';
  personas.forEach(persona => {
    const article = document.createElement('article');
    article.className = 'persona-card';

    const bodyId = `${persona.id}-body`;

    article.innerHTML = `
      <div class="persona-meta">
        <span class="persona-tag">${persona.callsign}</span>
        <h3>${persona.name}</h3>
        <p>${persona.role}</p>
        <p>${persona.overview}</p>
      </div>
      <button class="persona-toggle" type="button" aria-expanded="false" aria-controls="${bodyId}">Open brief</button>
      <div class="persona-body" id="${bodyId}">
        <div>
          <h4>Highlights</h4>
          <ul>${persona.highlights.map(item => `<li>${item}</li>`).join('')}</ul>
        </div>
        <div>
          <h4>Deploy when</h4>
          <ul>${persona.bestFor.map(item => `<li>${item}</li>`).join('')}</ul>
        </div>
        <div>
          <h4>Key collaborators</h4>
          <p>${persona.collaborators.join(', ')}</p>
        </div>
      </div>
    `;

    const toggle = article.querySelector('.persona-toggle');
    const body = article.querySelector('.persona-body');

    toggle.addEventListener('click', () => {
      const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!isExpanded));
      toggle.textContent = isExpanded ? 'Open brief' : 'Close brief';
      body.classList.toggle('active', !isExpanded);
    });

    container.appendChild(article);
  });
}

function setupNavigation() {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('site-nav');
  const links = nav.querySelectorAll('a');

  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  links.forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

function buildSystemPrompt(commanderId) {
  const persona = personas.find(p => p.id === commanderId);
  if (!persona) return '';

  return `You are ${persona.name}, callsign "${persona.callsign}", serving as the ${persona.role} for BCM (Black Card Moguls).

OVERVIEW: ${persona.overview}

KEY OPERATING PRINCIPLES:
${persona.highlights.map(h => `• ${h}`).join('\n')}

DEPLOY THIS COMMANDER WHEN:
${persona.bestFor.map(b => `• ${b}`).join('\n')}

KEY COLLABORATORS: ${persona.collaborators.join(', ')}

TONE & STYLE GUIDELINES:
- Stay in character as ${persona.name} at all times
- Speak with authority and discipline befitting your role
- Reference BCM doctrines, frameworks, and terminology where appropriate
- Be direct, actionable, and grounded in the owner's reality
- If a question falls outside your mandate, recommend the appropriate collaborator commander

Respond to the owner's battlefield request below:`;
}

function setupGeminiForm() {
  const form = document.getElementById('gemini-form');
  const output = document.getElementById('gemini-output');

  form.addEventListener('submit', async event => {
    event.preventDefault();
    const formData = new FormData(form);
    const prompt = formData.get('prompt');
    const commanderId = formData.get('commander');

    if (!prompt || !String(prompt).trim()) {
      output.innerHTML = '<p class="error">Provide a prompt so the commanders have a battlefield to review.</p>';
      return;
    }

    const systemPrompt = buildSystemPrompt(commanderId);
    const persona = personas.find(p => p.id === commanderId);
    output.innerHTML = `<p>Dispatching to <strong>${persona?.name || 'Commander'}</strong>…</p>`;

    try {
      const response = await fetch('/api/gemini', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: String(prompt), systemPrompt })
      });

      if (!response.ok) {
        throw new Error(`Gemini gateway returned ${response.status}`);
      }

      const data = await response.json();
      const text = data?.text || 'No content returned.';
      output.innerHTML = `<pre>${escapeHtml(text)}</pre>`;
    } catch (error) {
      console.error(error);
      output.innerHTML = `
        <p class="error">Gemini request failed. Showing a mocked briefing while logs are reviewed.</p>
        <pre>${escapeHtml(mockGeminiResponse(String(prompt)))}</pre>
      `;
    }
  });
}

function escapeHtml(text) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function mockGeminiResponse(prompt) {
  return [
    'Gemini placeholder:',
    `• Request received: ${prompt.slice(0, 280)}`,
    '• Inspect Firebase function logs for details (firebase functions:log).',
    '• Confirm geminiProxy is deployed with the correct API key.'
  ].join('\n');
}

document.addEventListener('DOMContentLoaded', () => {
  renderTimeline();
  renderModules();
  renderInteractions();
  renderPersonas();
  setupNavigation();
  setupGeminiForm();
});
