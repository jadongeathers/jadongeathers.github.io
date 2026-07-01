import React from 'react';
import { IconArt, PixelIcon, ICONS } from './PixelIcon';

/* ---------- Welcome (readme) ---------- */

export const WelcomeContent = ({ profileData, onOpen }) => (
  <>
    <div className="welcome-banner">
      readme.txt — please read first :)
      <small>Double-click an icon on the desktop to open it. You can drag windows around.</small>
    </div>
    <div style={{ padding: '18px 20px' }}>
      <h2>Hi, I&apos;m Jadon.</h2>
      <p>
        Welcome to my little corner of the web. I&apos;m an Information Science PhD student at Cornell University,
        and I build AI conversational agents that help people learn — especially in situations where students
        need a safe, low-stakes place to practice.
      </p>
      <p>
        Have a look around. Each icon opens a window:
      </p>
      <ul style={{ paddingLeft: 22, margin: '8px 0 14px' }}>
        <li><strong>About Me</strong> — who I am, the short version</li>
        <li><strong>Research</strong> — projects and publications</li>
        <li><strong>ChitterChatter</strong> — my flagship project</li>
        <li><strong>Highlights</strong> — awards and features</li>
        <li><strong>CV</strong> — the full document</li>
        <li><strong>Contact</strong> — say hi</li>
      </ul>
      <div className="about-grid actions" style={{ marginTop: 4 }}>
        <button className="btn-90 primary" onClick={() => onOpen('about')}>Start with About</button>
        <button className="btn-90 blue" onClick={() => onOpen('chitterchatter')}>See ChitterChatter</button>
      </div>
    </div>
  </>
);

/* ---------- About ---------- */

export const AboutContent = ({ profileData, onOpen }) => (
  <div className="about-page">
    <header className="about-greeting">
      <h1>Hi there! I&apos;m Jadon Geathers.</h1>
    </header>

    <div className="about-body">
      <aside className="about-sidebar">
        <img
          src="images/headshot.jpg"
          alt={profileData.name}
          className="about-photo"
          onError={(e) => { e.currentTarget.src = 'images/professional-headshot-cropped.png'; }}
        />

        <dl className="about-meta">
          <div className="about-meta-row">
            <dt>Roles</dt>
            <ul className="about-meta-list">
              <li>PhD Student, Cornell</li>
              <li>Co-founder &amp; CEO, ChitterChatter</li>
              <li>Classical Pianist</li>
            </ul>
          </div>
          <div className="about-meta-row">
            <dt>Education</dt>
            <ul className="about-meta-list">
              <li>MS Computer Science, Stanford</li>
              <li>BS Mathematics, Stanford</li>
            </ul>
          </div>
          <div className="about-meta-row">
            <dt>Location</dt>
            <dd>Ithaca, NY</dd>
          </div>
        </dl>

      </aside>

      <div className="about-text">
        <p>
          I&apos;m an Information Science PhD student at Cornell University and the Co-founder &amp; CEO of{' '}
          <strong>ChitterChatter</strong>, an AI platform that helps language instructors give every
          student authentic speaking practice.
        </p>
        <p>
          My research develops AI-powered conversational agents that enhance learning through
          personalized, low-stakes interactions. Grounded in learning sciences principles, I focus on
          educational technologies that provide immediate, adaptive feedback — and expand the kind of
          deliberate practice that has traditionally been limited by instructor time.
        </p>
        <p>
          At Cornell I&apos;m a member of the Future of Learning Lab, advised by Professor René Kizilcec.
          As a Graduate School Dean&apos;s Scholar, my research is supported by the Bowers CIS Dean&apos;s
          Excellence and Hopper-Dean Fellowship.
        </p>

        <div className="about-actions">
          <span className="sprout-wrap">
            <img className="sprout-plant" src="images/plant3.gif" alt="" aria-hidden="true" />
            <button className="btn-90 primary" onClick={() => onOpen('chitterchatter')}>See ChitterChatter</button>
          </span>
          <button className="btn-90" onClick={() => onOpen('research')}>See My Research</button>
          <a className="btn-90" href={`mailto:${profileData.email}`}>Say Hi</a>
        </div>
      </div>
    </div>
  </div>
);

/* ---------- Research ---------- */

const publications = [
  {
    title: 'MedSimAI: Simulation and Formative Feedback Generation to Enhance Deliberate Practice in Medical Education',
    venue: 'LAK \'26',
    authors: 'Yann Hicke, Jadon Geathers, Kellen Vu, Justin Sewell, Claire Cardie, Jaideep Talwalkar, Dennis Shung, Anyanate Gwendolyne Jack, Susannah Cornes, MacKenzi Preston, René F. Kizilcec',
    abstract:
      'MedSimAI provides an AI-powered platform for medical students to engage in repeated, deliberate practice of clinical communication through realistic patient simulations. It pairs simulated cases with formative feedback generated by large language models, expanding access to practice opportunities that have traditionally been limited by faculty time and standardized-patient availability.',
    image: 'images/medsimai.jpg',
    links: { paper: 'https://dl.acm.org/doi/10.1145/3785022.3785092' },
  },
  {
    title: 'ChitterChatter: Curriculum-Aligned AI Speaking Partners for Language Learning Classrooms',
    venue: 'L@S \'25',
    authors: 'Jadon Geathers, AJ Alvero, René F. Kizilcec',
    abstract:
      'ChitterChatter addresses the challenge of limited speaking practice in language learning by providing an AI-powered tool that enables instructors to create curriculum-aligned, voice-enabled conversation activities for students. Built on OpenAI\'s Realtime API and designed through iterative feedback with language education experts.',
    image: 'images/l@s2025_chitterchatter.png',
    links: {
      paper: 'https://dl.acm.org/doi/10.1145/3698205.3733953',
    },
  },
  {
    title: 'What Medical Students Need from Simulation: Insights to Guide Scalable Learning Design',
    venue: 'L@S \'25',
    authors: 'Jadon Geathers*, Yann Hicke*, Naphasjutha Kongsonthana, Justin Sewell, Anyanate Gwendolyne Jack, Dennis Shung, MacKenzi Preston, Susannah Cornes, René F. Kizilcec',
    abstract:
      'Through semi-structured interviews with ten medical students across three U.S. institutions, we examine how students engage with simulation-based learning within their broader learning contexts and identify learner-centered design insights for scalable solutions.',
    image: 'images/l@s2025_medical.png',
    links: { paper: 'https://dl.acm.org/doi/10.1145/3698205.3733954' },
  },
  {
    title: 'Benchmarking Generative AI for Scoring Medical Student Interviews in OSCEs',
    venue: 'AIED \'25',
    authors: 'Jadon Geathers*, Yann Hicke*, Colleen Chan, Niroop Rajashekar, Sarah Young, Justin Sewell, Susannah Cornes, René F. Kizilcec, Dennis Shung',
    abstract:
      'We compare four state-of-the-art LLMs (GPT-4o, Claude 3.5, Llama 3.1, Gemini 1.5 Pro) on evaluating OSCE transcripts across all 28 items of the Master Interview Rating Scale, establishing a baseline for automated assessment of clinical communication skills.',
    image: 'images/aied2025.png',
    links: { paper: 'https://dl.acm.org/doi/10.1007/978-3-031-98420-4_17' },
  },
  {
    title: 'Grading and Clustering Student Programs That Produce Probabilistic Output',
    venue: 'EDM \'24',
    authors: 'Yunsung Kim*, Jadon Geathers*, Chris Piech',
    abstract:
      'StochasticGrade is an open-source framework for automatically grading stochastic programs. Compared to standard two-sample hypothesis testing it offers significant gains in accuracy and exponential improvements in speed, with clustering of student programs by error type.',
    image: 'images/edm2024.png',
    links: {
      paper: 'https://educationaldatamining.org/edm2024/proceedings/2024.EDM-long-papers.4/',
      github: 'https://github.com/yunsungkim0908/stochasticgrade',
    },
  },
];

const PublicationCard = ({ pub }) => (
  <article className="publication">
    {pub.image && (
      <div className="publication-thumb">
        <img src={pub.image} alt={pub.title} />
      </div>
    )}
    <div className="publication-body">
      <div className="publication-meta">
        <span className="venue">{pub.venue}</span>
      </div>
      <h3>{pub.title}</h3>
      <div className="authors">{pub.authors}</div>
      <p className="abstract">{pub.abstract}</p>
      <div className="links">
        {pub.links.paper && (
          <a className="btn-90" href={pub.links.paper} target="_blank" rel="noopener noreferrer">Paper</a>
        )}
        {pub.links.github && (
          <a className="btn-90" href={pub.links.github} target="_blank" rel="noopener noreferrer">Code</a>
        )}
      </div>
    </div>
  </article>
);

export const ResearchContent = ({ onOpen }) => (
  <div className="research-page">
    <header className="page-header">
      <h1>Research</h1>
      <p className="page-intro">
        My research develops AI-powered conversational agents that enhance learning through authentic,
        personalized interactions. Grounded in learning sciences principles, I focus on educational
        technologies that give students immediate, adaptive feedback and create safe spaces for repeated,
        deliberate practice.
      </p>
    </header>

    <section className="page-section">
      <h2>Publications</h2>
      <p className="footnote">* indicates equal contribution</p>
      {publications.map((pub) => <PublicationCard key={pub.title} pub={pub} />)}
    </section>

    <section className="page-section">
      <h2>Let&apos;s Collaborate</h2>
      <p>
        I&apos;m actively seeking collaborations with learning scientists, educators, and technologists
        working on feedback systems, conversational AI for education, or scalable learning technologies.
      </p>
      <div className="research-tags">
        <span className="tag-90">Learning Sciences</span>
        <span className="tag-90">Feedback Systems</span>
        <span className="tag-90">Educational AI</span>
        <span className="tag-90">Formative Assessment</span>
        <span className="tag-90">Conversation Design</span>
        <span className="tag-90">User Studies</span>
      </div>
      <a className="btn-90 primary" href="mailto:jag569@cornell.edu">Start a conversation</a>
    </section>
  </div>
);

/* ---------- ChitterChatter ---------- */

const CC_STEPS = [
  { id: 1, label: 'Create an Activity', src: 'images/cc-steps/1-create.mp4',       poster: 'images/cc-steps/1-create.png' },
  { id: 2, label: 'Have a Conversation', src: 'images/cc-steps/2-conversation.mp4', poster: 'images/cc-steps/2-conversation.png' },
  { id: 3, label: 'Get Feedback',       src: 'images/cc-steps/3-feedback.mp4',     poster: 'images/cc-steps/3-feedback.png' },
];

const CCStepCycle = () => {
  const [stepIdx, setStepIdx] = React.useState(0);
  const [switching, setSwitching] = React.useState(false);
  const videoRef = React.useRef(null);

  const handleEnded = () => setStepIdx((i) => (i + 1) % CC_STEPS.length);

  // Two-phase swap: fade out → swap src while invisible → fade back in once
  // the new video can play. Keeps the layout stable and avoids any flash.
  React.useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const step = CC_STEPS[stepIdx];
    setSwitching(true);

    const swap = setTimeout(() => {
      v.pause();
      v.src = step.src;
      v.poster = step.poster;
      v.load();
      const onCanPlay = () => {
        v.play().catch(() => {});
        setSwitching(false);
        v.removeEventListener('canplay', onCanPlay);
      };
      v.addEventListener('canplay', onCanPlay);
    }, 220); // matches the fade-out duration below

    return () => clearTimeout(swap);
  }, [stepIdx]);

  return (
    <div className={`cc-cycle ${switching ? 'switching' : ''}`}>
      <div className="cc-video-frame">
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          preload="metadata"
          onEnded={handleEnded}
          src={CC_STEPS[0].src}
          poster={CC_STEPS[0].poster}
        />
      </div>
      <div className="cc-cycle-steps">
        {CC_STEPS.map((s, i) => (
          <button
            key={s.id}
            type="button"
            className={`cc-step ${i === stepIdx ? 'active' : ''}`}
            onClick={() => setStepIdx(i)}
          >
            <span className="cc-step-num">{s.id}</span>
            <span className="cc-step-label">{s.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export const ChitterChatterContent = () => (
  <div className="cc-page">
    <div className="cc-hero">
      <IconArt icon="images/icons/chitterchatter.png" size={72} className="cc-icon" alt="ChitterChatter" />
      <div>
        <h1>ChitterChatter</h1>
        <div className="cc-tag">AI speaking partners for language learning classrooms</div>
      </div>
    </div>

    <div className="cc-section">
      <p className="cc-lead">
        ChitterChatter is an AI speaking-practice platform for language classrooms. Instructors
        create voice-enabled conversation activities aligned with their curriculum; students get
        realistic, low-stakes practice with real-time feedback. Built on OpenAI&apos;s Realtime API
        and designed alongside language educators.
      </p>

      <CCStepCycle />

      <h2>Recognition &amp; Press</h2>
      <p>
        Winner of Cornell&apos;s 2025 <strong>Bits On Our Minds (BOOM)</strong> award, judged by the Bowers
        College of Computing and Information Science faculty. Published at L@S &apos;25.
      </p>

      <ul className="cc-press">
        <li>
          <a href="https://news.cornell.edu/stories/2025/07/ai-tool-helps-students-build-confidence-speaking-foreign-languages" target="_blank" rel="noopener noreferrer">
            Cornell Chronicle — &ldquo;AI tool helps students build confidence speaking foreign languages&rdquo;
          </a>
        </li>
        <li>
          <a href="https://gradschool.cornell.edu/spotlights/student-spotlight-jadon-geathers/" target="_blank" rel="noopener noreferrer">
            Cornell Graduate School — Student Spotlight: Jadon Geathers
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/watch?v=KVzfQVb-ZnM" target="_blank" rel="noopener noreferrer">
            Speaking of Languages podcast — Cornell LRC
          </a>
        </li>
        <li>
          <a href="https://dl.acm.org/doi/10.1145/3698205.3733953" target="_blank" rel="noopener noreferrer">
            ChitterChatter at L@S &apos;25 (ACM)
          </a>
        </li>
      </ul>

      <div className="cc-features">
        <span className="tag-90">Generative AI</span>
        <span className="tag-90">S2S Technology</span>
        <span className="tag-90">Conversational Agents</span>
        <span className="tag-90">Real-time Feedback</span>
        <span className="tag-90">Adaptive Practice</span>
      </div>

      <div className="cc-cta">
        <a className="btn-90 primary" href="https://chitterchatter.app" target="_blank" rel="noopener noreferrer">
          Visit ChitterChatter →
        </a>
      </div>
    </div>
  </div>
);

/* ---------- Highlights ---------- */

const highlights = [
  {
    title: 'Student Spotlight: Jadon Geathers',
    date: 'December 2025 · Cornell Graduate School',
    image: 'images/news-gradschool.jpg',
    description:
      'Cornell\'s Graduate School profiles Jadon\'s path from Stanford math major to Information Science PhD, his work in the Future of Learning Lab, and how ChitterChatter helps language learners practice speaking in a low-anxiety environment.',
    link: 'https://gradschool.cornell.edu/spotlights/student-spotlight-jadon-geathers/',
    linkText: 'Read More',
  },
  {
    title: 'Speaking of Languages — Cornell LRC Podcast',
    date: 'November 2025 · Cornell Language Resource Center',
    image: 'https://img.youtube.com/vi/KVzfQVb-ZnM/hqdefault.jpg',
    description:
      'Jadon joins Cornell\'s Language Resource Center for an episode of the Speaking of Languages podcast to talk about AI conversation partners, classroom integration, and the design behind ChitterChatter.',
    link: 'https://www.youtube.com/watch?v=KVzfQVb-ZnM',
    linkText: 'Watch Episode',
  },
  {
    title: 'AI Tool Helps Students Build Confidence Speaking Foreign Languages',
    date: 'July 2025 · Cornell Chronicle',
    image: 'images/news-cornell.jpg',
    description:
      'The Cornell Chronicle (by Patricia Waldron) covers ChitterChatter — the AI-powered language-learning tool Jadon built to give students realistic, low-stakes speaking practice with feedback.',
    link: 'https://news.cornell.edu/stories/2025/07/ai-tool-helps-students-build-confidence-speaking-foreign-languages',
    linkText: 'Read More',
  },
  {
    title: 'BOOM Contest Winner',
    date: 'April 2025 · Cornell University',
    image: 'images/boom_25.jpg',
    description:
      'The Bits On Our Minds (BOOM) Award, judged by the Bowers CIS faculty and the BOOM Committee, recognized ChitterChatter as the standout project of the year ($1000).',
    link: 'https://cis.cornell.edu/about/outreach-events/boom-bits-our-minds/awards/boom-2025-award-recipients',
    linkText: 'Read More',
  },
  {
    title: 'A Musical Moment at Stanford',
    date: 'December 2024 · Stanford University',
    image: 'https://img.youtube.com/vi/pr_37VwDFJU/hqdefault.jpg',
    description:
      'A musical moment with math and computer science major Jadon Geathers, playing his rendition of \'Silent Night\' on the piano.',
    link: 'https://www.youtube.com/watch?v=pr_37VwDFJU',
    linkText: 'Watch Video',
  },
  {
    title: 'Stanford: Meet Jadon Geathers',
    date: '2023 · Stanford University',
    image: 'images/stanford_feature2.jpg',
    description:
      'As a kid, Jadon Geathers, \'24, realized that competing in taekwondo wasn\'t a good fit for him, and instead took up piano. At Stanford, he had a similar revelation about his initial major of physics.',
    link: 'https://youtu.be/8E-havdtCRM?si=vsREdc-pH2Pvtr1q',
    linkText: 'Watch Video',
  },
];

export const HighlightsContent = () => (
  <div className="news-page">
    <header className="page-header">
      <h1>News</h1>
      <p className="page-intro">Awards, features, and moments worth keeping around.</p>
    </header>

    <div className="news-list">
      {highlights.map((h) => (
        <article key={h.title} className="highlight-card">
          <img className="thumb" src={h.image} alt={h.title} />
          <div className="body">
            <h3>{h.title}</h3>
            <div className="meta">{h.date}</div>
            <p>{h.description}</p>
            <a className="btn-90" href={h.link} target="_blank" rel="noopener noreferrer">
              {h.linkText}
            </a>
          </div>
        </article>
      ))}
    </div>
  </div>
);

/* ---------- CV ---------- */

export const CVContent = () => {
  const cvEmbedUrl =
    'https://docs.google.com/document/d/14VqLZ8Ljj4cNjYYUkUf3jQHc5wiS2uF03aIAbE0Hz-0/preview';
  const cvDirectUrl =
    'https://docs.google.com/document/d/14VqLZ8Ljj4cNjYYUkUf3jQHc5wiS2uF03aIAbE0Hz-0/edit?usp=sharing';

  return (
    <div className="cv-page">
      <header className="page-header with-icon">
        <IconArt icon="images/icons/cv.png" size={56} className="page-header-icon" alt="" />
        <div className="page-header-text">
          <h1>Curriculum Vitae</h1>
          <p className="page-intro">A live document — updated regularly.</p>
        </div>
        <a className="btn-90 primary cv-open-btn" href={cvDirectUrl} target="_blank" rel="noopener noreferrer">
          Open in New Tab
        </a>
      </header>

      <iframe className="cv-iframe" src={cvEmbedUrl} title="Jadon Geathers' Curriculum Vitae" />
    </div>
  );
};

/* ---------- Visitors window content ---------- */

// The mapmyvisitors widget is mounted once at site load into a persistent
// hidden host node (see Desktop.jsx) so the view registers on every visit.
// When the Visitors window opens, we move the host node into the visible
// slot via appendChild — moving DOM nodes preserves the rendered map and
// doesn't trigger a reload (which would double-count the visit).
const VISITOR_HOST_ID = 'visitor-map-host';

export const VisitorsContent = () => {
  const slotRef = React.useRef(null);

  React.useEffect(() => {
    const slot = slotRef.current;
    const host = document.getElementById(VISITOR_HOST_ID);
    if (!slot || !host) return;

    const originalParent = host.parentNode;
    const originalNextSibling = host.nextSibling;

    host.classList.add('visitor-map-host--exposed');
    slot.appendChild(host);

    // The mapmyvisitors widget renders at a fixed native size: a raster world
    // map with a separate SVG dot overlay on top. The dots only line up with the
    // map at that native scale, so rather than resizing the pieces (which slid
    // the dots off the map), zoom the whole widget uniformly to fit the window.
    // `zoom` scales the map image and the dot overlay together — keeping them
    // aligned — and, unlike a transform, shrinks the layout box too so the
    // widget stays centered without leaving a gap.
    const getControl = () => host.querySelector('.mapmyvisitors-map-control');
    const fit = () => {
      const el = getControl();
      if (!el) return;
      el.style.zoom = '';
      const nativeW = el.offsetWidth;
      if (!nativeW) return;
      const cs = getComputedStyle(slot);
      const availW = slot.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight);
      el.style.zoom = Math.min(1, availW / nativeW);
    };

    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(slot);
    // The widget renders asynchronously; keep watching until it appears, fit it
    // once, then stop (its internal live-dot animation shouldn't re-trigger us).
    const mo = new MutationObserver(() => { if (getControl()) { fit(); mo.disconnect(); } });
    mo.observe(host, { childList: true, subtree: true });

    return () => {
      ro.disconnect();
      mo.disconnect();
      const el = getControl();
      if (el) el.style.zoom = '';
      host.classList.remove('visitor-map-host--exposed');
      if (originalParent) {
        originalParent.insertBefore(host, originalNextSibling);
      }
    };
  }, []);

  return (
    <div className="visitors-page">
      <header className="page-header">
        <h1>Visitors</h1>
        <p className="page-intro">A live map of where folks visiting this site have dropped in from.</p>
      </header>
      <div className="vmap-canvas in-window" ref={slotRef}>
        <div className="vmap-loading">connecting…</div>
      </div>
    </div>
  );
};

/* ---------- Desktop plant (always-on corner element, draggable) ---------- */

export const DesktopPlant = () => {
  const elRef = React.useRef(null);

  React.useEffect(() => {
    const el = elRef.current;
    if (!el) return;
    let dragging = false;
    let startX = 0, startY = 0, startLeft = 0, startTop = 0;

    const onDown = (e) => {
      dragging = true;
      const rect = el.getBoundingClientRect();
      startX = e.clientX;
      startY = e.clientY;
      startLeft = rect.left;
      startTop = rect.top;
      el.classList.add('grabbing');
      e.preventDefault();
    };
    const onMove = (e) => {
      if (!dragging) return;
      const nx = startLeft + (e.clientX - startX);
      const ny = startTop + (e.clientY - startY);
      el.style.left = `${Math.max(8, Math.min(window.innerWidth - el.offsetWidth - 8, nx))}px`;
      el.style.top = `${Math.max(38, Math.min(window.innerHeight - el.offsetHeight - 44, ny))}px`;
      el.style.right = 'auto';
      el.style.bottom = 'auto';
    };
    const onUp = () => {
      dragging = false;
      el.classList.remove('grabbing');
      try { localStorage.setItem('plant-pos', JSON.stringify({ left: el.style.left, top: el.style.top })); } catch {}
    };

    try {
      const saved = JSON.parse(localStorage.getItem('plant-pos') || 'null');
      if (saved?.left && saved?.top) {
        el.style.left = saved.left;
        el.style.top = saved.top;
        el.style.right = 'auto';
        el.style.bottom = 'auto';
      }
    } catch {}

    el.addEventListener('mousedown', onDown);
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
    return () => {
      el.removeEventListener('mousedown', onDown);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
    };
  }, []);

  return (
    <div className="desktop-plant" ref={elRef} title="It's a plant.">
      <img src="images/plant1.gif" alt="" draggable={false} />
    </div>
  );
};

/* ---------- Desktop photo (single framed photo on the desktop) ---------- */

export const DesktopPhotos = () => {
  const elRef = React.useRef(null);

  React.useEffect(() => {
    const el = elRef.current;
    if (!el) return;
    let dragging = false;
    let startX = 0, startY = 0, startLeft = 0, startTop = 0;

    const onDown = (e) => {
      dragging = true;
      const rect = el.getBoundingClientRect();
      startX = e.clientX;
      startY = e.clientY;
      startLeft = rect.left;
      startTop = rect.top;
      el.classList.add('grabbing');
      e.preventDefault();
    };
    const onMove = (e) => {
      if (!dragging) return;
      const nx = startLeft + (e.clientX - startX);
      const ny = startTop + (e.clientY - startY);
      el.style.left = `${Math.max(8, Math.min(window.innerWidth - el.offsetWidth - 8, nx))}px`;
      el.style.top = `${Math.max(38, Math.min(window.innerHeight - el.offsetHeight - 44, ny))}px`;
      el.style.right = 'auto';
      el.style.bottom = 'auto';
    };
    const onUp = () => {
      if (!dragging) return;
      dragging = false;
      el.classList.remove('grabbing');
      try { localStorage.setItem('photos-pos', JSON.stringify({ left: el.style.left, top: el.style.top })); } catch {}
    };

    // Keep the photo on-screen. A position saved on a larger window — or one
    // that becomes invalid after the window is resized smaller — can place the
    // photo off-screen, making it seem to "disappear". Only nudge it when it's
    // actually out of bounds, so the default corner placement is left alone on
    // normal loads.
    const ensureInView = () => {
      const rect = el.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      const maxLeft = window.innerWidth - rect.width - 8;
      const maxTop = window.innerHeight - rect.height - 44;
      const outOfBounds =
        rect.left < 4 || rect.top < 34 || rect.left > maxLeft + 4 || rect.top > maxTop + 4;
      if (!outOfBounds) return;
      el.style.left = `${Math.max(8, Math.min(maxLeft, rect.left))}px`;
      el.style.top = `${Math.max(38, Math.min(maxTop, rect.top))}px`;
      el.style.right = 'auto';
      el.style.bottom = 'auto';
    };

    try {
      const saved = JSON.parse(localStorage.getItem('photos-pos') || 'null');
      if (saved?.left && saved?.top) {
        el.style.left = saved.left;
        el.style.top = saved.top;
        el.style.right = 'auto';
        el.style.bottom = 'auto';
      }
    } catch {}

    requestAnimationFrame(ensureInView);

    el.addEventListener('mousedown', onDown);
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
    window.addEventListener('resize', ensureInView);
    return () => {
      el.removeEventListener('mousedown', onDown);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
      window.removeEventListener('resize', ensureInView);
    };
  }, []);

  return (
    <div className="desktop-photos" ref={elRef} title="My best friend">
      <div className="photo-frame">
        <div className="photo-image-wrap">
          <img src="images/dog.jpg" alt="My best friend" draggable={false} />
          <PixelIcon pixels={ICONS.heart} size={28} className="heart-on-photo" />
        </div>
      </div>
    </div>
  );
};

/* ---------- Desktop polaroid (corner element, not a window) ---------- */

export const DesktopPolaroid = () => {
  const polaroidRef = React.useRef(null);

  React.useEffect(() => {
    const el = polaroidRef.current;
    if (!el) return;
    let dragging = false;
    let startX = 0, startY = 0, startLeft = 0, startTop = 0;

    const onDown = (e) => {
      if (e.target.closest('a, button')) return;
      dragging = true;
      const rect = el.getBoundingClientRect();
      startX = e.clientX;
      startY = e.clientY;
      startLeft = rect.left;
      startTop = rect.top;
      el.style.transition = 'none';
      el.classList.add('grabbing');
      e.preventDefault();
    };
    const onMove = (e) => {
      if (!dragging) return;
      const nx = startLeft + (e.clientX - startX);
      const ny = startTop + (e.clientY - startY);
      el.style.left = `${Math.max(8, Math.min(window.innerWidth - el.offsetWidth - 8, nx))}px`;
      el.style.top = `${Math.max(38, Math.min(window.innerHeight - el.offsetHeight - 44, ny))}px`;
      el.style.right = 'auto';
      el.style.bottom = 'auto';
    };
    const onUp = () => {
      dragging = false;
      el.classList.remove('grabbing');
      try { localStorage.setItem('polaroid-pos', JSON.stringify({ left: el.style.left, top: el.style.top })); } catch {}
    };

    try {
      const saved = JSON.parse(localStorage.getItem('polaroid-pos') || 'null');
      if (saved?.left && saved?.top) {
        el.style.left = saved.left;
        el.style.top = saved.top;
        el.style.right = 'auto';
        el.style.bottom = 'auto';
      }
    } catch {}

    el.addEventListener('mousedown', onDown);
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
    return () => {
      el.removeEventListener('mousedown', onDown);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
    };
  }, []);

  return (
    <div className="desktop-polaroid" ref={polaroidRef}>
      <div className="polaroid mini">
        <div className="photo-wrap">
          <img
            src="images/dog.jpg"
            alt="Jadon and his dog"
            onError={(e) => { e.currentTarget.style.opacity = 0; }}
          />
          <PixelIcon pixels={ICONS.heart} size={28} className="heart-on-photo" />
        </div>
      </div>
    </div>
  );
};

/* ---------- Best Friend (dog) ---------- */

export const BestFriendContent = () => (
  <div className="polaroid-stage">
    <div className="polaroid">
      <div className="photo-wrap">
        <img
          src="images/dog.jpg"
          alt="Jadon and his dog"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
            const fallback = e.currentTarget.parentElement.querySelector('.photo-missing');
            if (fallback) fallback.style.display = 'flex';
          }}
        />
        <div className="photo-missing" style={{ display: 'none' }}>
          Save the photo to<br />public/images/dog.jpg
        </div>
      </div>
      <PixelIcon pixels={ICONS.heart} size={64} className="heart-overlay" />
      <div className="caption">my best friend</div>
    </div>

    <div className="ekg-track" aria-hidden="true">
      <svg viewBox="0 0 400 100" preserveAspectRatio="none">
        <polyline
          points="0,50 40,50 50,50 55,20 60,80 65,30 70,50 110,50 150,50 155,20 160,80 165,30 170,50 200,50 240,50 245,20 250,80 255,30 260,50 300,50 340,50 345,20 350,80 355,30 360,50 400,50"
          fill="none"
          stroke="#F54E00"
          strokeWidth="3"
          shapeRendering="crispEdges"
        />
      </svg>
    </div>

    <div style={{
      marginTop: 14,
      fontFamily: 'var(--font-mono)',
      fontSize: 17,
      color: 'var(--ink)',
      textAlign: 'center',
    }}>
      ♥ heartbeat: rock solid
    </div>
  </div>
);

/* ---------- Contact ---------- */

export const ContactContent = ({ profileData }) => (
  <div className="contact-page">
    <header className="page-header">
      <h1>Contact</h1>
      <p className="page-intro">
        The fastest way to reach me is email. I&apos;m also active on the other places below.
      </p>
    </header>

    <div className="contact-list">
      <a className="contact-row" href={`mailto:${profileData.email}`}>
        <i className="contact-icon fa-solid fa-envelope" aria-hidden="true" />
        <span className="row-label">Email</span>
        <span>{profileData.email}</span>
      </a>
      <a className="contact-row" href={profileData.links.linkedin} target="_blank" rel="noopener noreferrer">
        <i className="contact-icon fa-brands fa-linkedin-in" aria-hidden="true" />
        <span className="row-label">LinkedIn</span>
        <span>linkedin.com/in/jadongeathers</span>
      </a>
      <a className="contact-row" href={profileData.links.github} target="_blank" rel="noopener noreferrer">
        <i className="contact-icon fa-brands fa-github" aria-hidden="true" />
        <span className="row-label">GitHub</span>
        <span>github.com/jadongeathers</span>
      </a>
      <a className="contact-row" href={profileData.links.scholar} target="_blank" rel="noopener noreferrer">
        <i className="contact-icon fa-solid fa-graduation-cap" aria-hidden="true" />
        <span className="row-label">Scholar</span>
        <span>Google Scholar profile</span>
      </a>
    </div>
  </div>
);
