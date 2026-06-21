document.addEventListener('DOMContentLoaded', () => {
  initThemeSwitcher();
  initMobileMenu();
  initFaqAccordion();
  initBenchmarkTabs();
  initCopyButtons();
  initStatusSimulation();
  initFlowchartPulse();
  initDocsScrollspy();
});

/* 1. Theme Switcher Logic */
function initThemeSwitcher() {
  const themeBtn = document.querySelector('.btn-theme-switcher');
  if (!themeBtn) return;

  const getTheme = () => {
    if (document.documentElement.classList.contains('dark')) return 'dark';
    return 'light';
  };

  const setTheme = (theme) => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      themeBtn.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
      `;
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      themeBtn.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-moon"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
      `;
    }
  };

  // Set initial icon on load
  setTheme(getTheme());

  themeBtn.addEventListener('click', () => {
    const currentTheme = getTheme();
    setTheme(currentTheme === 'dark' ? 'light' : 'dark');
  });
}

/* 2. Mobile Menu Toggling */
function initMobileMenu() {
  const menuBtn = document.querySelector('.btn-mobile-menu');
  const mobilePanel = document.querySelector('.mobile-nav-panel');

  if (menuBtn && mobilePanel) {
    menuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      mobilePanel.classList.toggle('open');
      const isOpen = mobilePanel.classList.contains('open');
      menuBtn.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
      menuBtn.innerHTML = isOpen 
        ? `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`
        : `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu"><path d="M4 5h16"/><path d="M4 12h16"/><path d="M4 19h16"/></svg>`;
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!mobilePanel.contains(e.target) && !menuBtn.contains(e.target)) {
        mobilePanel.classList.remove('open');
        menuBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu"><path d="M4 5h16"/><path d="M4 12h16"/><path d="M4 19h16"/></svg>`;
      }
    });
  }
}

/* 3. FAQ Accordion Dropdowns */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const trigger = item.querySelector('.faq-trigger');
    const content = item.querySelector('.faq-content');

    if (trigger && content) {
      trigger.addEventListener('click', () => {
        const isActive = item.classList.contains('active');

        // Close all other items first
        faqItems.forEach(otherItem => {
          if (otherItem !== item) {
            otherItem.classList.remove('active');
            const otherContent = otherItem.querySelector('.faq-content');
            if (otherContent) otherContent.style.maxHeight = null;
          }
        });

        // Toggle current item
        item.classList.toggle('active');
        if (!isActive) {
          // Calculate height of internal content container
          const inner = content.querySelector('.faq-content-inner');
          content.style.maxHeight = inner.offsetHeight + 'px';
        } else {
          content.style.maxHeight = null;
        }
      });
    }
  });
}

/* 4. Performance Benchmark Tab switching */
const BENCHMARK_DATA = {
  overall: [
    { label: 'UnityAI', score: 95.6, isPrimary: true },
    { label: 'Claude Opus 4.7', score: 82.0 },
    { label: 'GPT-5.5 High', score: 81.0 },
    { label: 'Gemini 3.1 Pro', score: 79.0 }
  ],
  speed: [
    { label: 'UnityAI', score: 98.4, isPrimary: true },
    { label: 'Gemini 3.1 Pro', score: 86.0 },
    { label: 'GPT-5.5 High', score: 79.0 },
    { label: 'Claude Opus 4.7', score: 51.0 }
  ],
  accuracy: [
    { label: 'UnityAI', score: 94.8, isPrimary: true },
    { label: 'Claude Opus 4.7', score: 88.0 },
    { label: 'GPT-5.5 High', score: 87.0 },
    { label: 'Gemini 3.1 Pro', score: 78.0 }
  ]
};

function initBenchmarkTabs() {
  const tabButtons = document.querySelectorAll('.bench-tab');
  const benchContainer = document.querySelector('.bench-bars');

  if (tabButtons.length > 0 && benchContainer) {
    // Render initial (overall) data
    updateBenchmarkView('overall');

    tabButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        tabButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        const category = btn.getAttribute('data-tab');
        updateBenchmarkView(category);
      });
    });
  }
}

function updateBenchmarkView(category) {
  const benchContainer = document.querySelector('.bench-bars');
  if (!benchContainer || !BENCHMARK_DATA[category]) return;

  // Clear and rebuild rows
  benchContainer.innerHTML = '';
  
  BENCHMARK_DATA[category].forEach(item => {
    const row = document.createElement('div');
    row.className = 'bench-row';
    
    const fillClass = item.isPrimary ? 'primary-fill' : 'secondary-fill';
    
    row.innerHTML = `
      <span class="bench-label">${item.label}</span>
      <div class="bench-bar-bg">
        <div class="bench-bar-fill ${fillClass}" style="width: 0%"></div>
      </div>
      <span class="bench-score">${item.score}</span>
    `;
    
    benchContainer.appendChild(row);
    
    // Trigger transition asynchronously to animate
    setTimeout(() => {
      const fillBar = row.querySelector('.bench-bar-fill');
      if (fillBar) fillBar.style.width = `${item.score}%`;
    }, 50);
  });
}

/* 5. Code Block Copy to Clipboard */
function initCopyButtons() {
  const copyButtons = document.querySelectorAll('.btn-copy');

  copyButtons.forEach(btn => {
    btn.addEventListener('click', async () => {
      const codeBlock = btn.closest('.code-block');
      if (!codeBlock) return;

      const codeElement = codeBlock.querySelector('pre');
      if (!codeElement) return;

      const codeText = codeElement.innerText;
      
      try {
        await navigator.clipboard.writeText(codeText);
        
        // Show success state
        const originalHTML = btn.innerHTML;
        btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check text-green-500"><path d="M20 6 9 17l-5-5"/></svg> Copied!`;
        btn.style.color = '#22c55e';
        
        setTimeout(() => {
          btn.innerHTML = originalHTML;
          btn.style.color = '';
        }, 2000);
      } catch (err) {
        console.error('Failed to copy text: ', err);
      }
    });
  });
}

/* 6. Server Status Simulation */
function initStatusSimulation() {
  const uptimeEl = document.getElementById('status-uptime');
  const requestsEl = document.getElementById('status-requests');
  const activeStreamsEl = document.getElementById('status-streams');
  const activityPolyline = document.getElementById('status-chart-polyline');
  const lastUpdatedEl = document.getElementById('status-last-updated');

  if (uptimeEl) uptimeEl.textContent = '99.98%';
  
  let requestCount = 14208000; // Starting simulated request count
  if (requestsEl) requestsEl.textContent = requestCount.toLocaleString();

  if (activeStreamsEl) activeStreamsEl.textContent = '14';

  if (lastUpdatedEl) {
    const now = new Date();
    lastUpdatedEl.textContent = `Last updated: ${now.toLocaleTimeString()}`;
  }

  // Update loop
  setInterval(() => {
    // Increment requests slightly
    if (requestsEl) {
      requestCount += Math.floor(Math.random() * 3) + 1;
      requestsEl.textContent = requestCount.toLocaleString();
    }

    // Shift active streams slightly
    if (activeStreamsEl) {
      let streams = parseInt(activeStreamsEl.textContent) || 14;
      streams += Math.floor(Math.random() * 5) - 2;
      if (streams < 5) streams = 5;
      activeStreamsEl.textContent = streams.toString();
    }

    // Refresh last updated time
    if (lastUpdatedEl) {
      const now = new Date();
      lastUpdatedEl.textContent = `Last updated: ${now.toLocaleTimeString()}`;
    }

    // Jitter polyline activity points on status page
    if (activityPolyline) {
      let pointsStr = activityPolyline.getAttribute('points') || '';
      if (pointsStr) {
        const points = pointsStr.split(' ');
        if (points.length > 0) {
          const lastPointIdx = points.length - 1;
          const coords = points[lastPointIdx].split(',');
          if (coords.length === 2) {
            const x = coords[0];
            let y = parseFloat(coords[1]);
            y += (Math.random() * 10 - 5);
            if (y < 20) y = 20;
            if (y > 80) y = 80;
            
            points[lastPointIdx] = `${x},${y.toFixed(1)}`;
            activityPolyline.setAttribute('points', points.join(' '));
          }
        }
      }
    }
  }, 3000);
}

/* 7. Framework Flowchart Sequential Pulse Loop */
function initFlowchartPulse() {
  const nodes = document.querySelectorAll('.flow-node');
  const arrows = document.querySelectorAll('.flow-arrow');

  if (nodes.length === 0) return;

  // Compile array of elements in sequence: Node 0 -> Arrow 0 -> Node 1 -> Arrow 1 -> Node 2
  const sequence = [];
  for (let i = 0; i < nodes.length; i++) {
    sequence.push(nodes[i]);
    if (i < arrows.length) {
      sequence.push(arrows[i]);
    }
  }

  let currentIdx = 0;

  setInterval(() => {
    // Remove active highlight from all elements
    sequence.forEach(el => el.classList.remove('pulse-highlight'));

    // Highlight current element
    sequence[currentIdx].classList.add('pulse-highlight');

    // Increment index
    currentIdx = (currentIdx + 1) % sequence.length;
  }, 1000);
}

/* 8. Active Documentation Sidebar Indicator (Intersection Observer) */
function initDocsScrollspy() {
  const sections = document.querySelectorAll('.docs-section');
  const sidebarLinks = document.querySelectorAll('.docs-nav-link');

  if (sections.length === 0 || sidebarLinks.length === 0) return;

  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -60% 0px', // Matches intersection window
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        
        sidebarLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => observer.observe(section));
}
