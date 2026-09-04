/**
 * TARUN JOSEPH - EXECUTIVE PORTFOLIO INTERACTION ENGINE
 * Interactive Systems Simulator, Authentic Logos, and Digital Twin
 */

// Global State Variables
var currentPerspective = 'strategic';
var currentSimScenario = 0;
var currentQuery = '';
var simParamValues = {};
var inspectedStageIdx = 0;
var isSimRunning = false;
var activeProjectFilter = 'all';

function initApp() {
  initHero();
  initInstitutions();
  initSimulator();
  initPerspectiveSwitcher();
  initProjects();
  initExperience();
  initCredentials();
  initContactHub();
  initDigitalTwin();
  initModal();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}

/**
 * Hero Initialization
 */
function initHero() {
  const p = PORTFOLIO_DATA.personal;

  const photoEl = document.getElementById('hero-portrait-img');
  if (photoEl) {
    photoEl.src = p.photo;
    photoEl.alt = `${p.name} - ${p.title}`;
  }

  const roleEl = document.getElementById('hero-subhead');
  if (roleEl) roleEl.textContent = p.title;

  const bioEl = document.getElementById('hero-narrative');
  if (bioEl) bioEl.textContent = p.tagline;

  const resumeBtns = document.querySelectorAll('.resume-link-trigger');
  resumeBtns.forEach(btn => {
    btn.href = p.resumes.industry;
  });
}

/**
 * Institutional Provenance (Official SVG Logos)
 */
function initInstitutions() {
  const container = document.getElementById('trust-logos-row');
  if (!container) return;

  container.innerHTML = PORTFOLIO_DATA.institutions.map(inst => `
    <div class="institutional-card">
      <div class="inst-logo-container">
        <img src="${inst.logo}" alt="${inst.name} Logo" class="inst-logo-img">
      </div>
      <div>
        <div class="inst-role-badge">${inst.role}</div>
        <p class="inst-focus-text">${inst.focus}</p>
      </div>
    </div>
  `).join('');
}

/**
 * ============================================================================
 * INTERACTIVE SYSTEMS WORKBENCH (Live Engineering Console)
 * ============================================================================
 */
function initSimulator() {
  const tabsContainer = document.getElementById('sim-tabs-bar');
  if (!tabsContainer) return;

  tabsContainer.innerHTML = PORTFOLIO_DATA.simulatorScenarios.map((scen, idx) => `
    <button class="sim-tab-btn ${idx === 0 ? 'active' : ''}" onclick="selectSimScenario(${idx})">
      ${scen.tabLabel}
    </button>
  `).join('');

  // Custom query input listener
  const customInput = document.getElementById('sim-custom-input');
  if (customInput) {
    customInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        applyCustomSimQuery();
      }
    });
  }

  selectSimScenario(0);
}

function selectSimScenario(idx) {
  if (isSimRunning) return;
  currentSimScenario = idx;

  const tabs = document.querySelectorAll('.sim-tab-btn');
  tabs.forEach((t, i) => {
    t.classList.toggle('active', i === idx);
  });

  const scen = PORTFOLIO_DATA.simulatorScenarios[idx];
  if (!scen) return;

  // Initialize hyperparameter state
  simParamValues = {};
  scen.parameters.forEach(p => {
    simParamValues[p.id] = p.value;
  });

  // Overview titles
  const titleEl = document.getElementById('sim-system-name');
  if (titleEl) titleEl.textContent = scen.systemName;

  const clientEl = document.getElementById('sim-client-name');
  if (clientEl) clientEl.textContent = scen.client;

  const roiEl = document.getElementById('sim-metric-callout');
  if (roiEl) roiEl.textContent = scen.roi;

  // Query state
  currentQuery = scen.sampleQueries[0] || '';
  const customInput = document.getElementById('sim-custom-input');
  if (customInput) customInput.value = currentQuery;

  // Render query chips
  const chipsContainer = document.getElementById('sim-query-chips');
  if (chipsContainer) {
    chipsContainer.innerHTML = scen.sampleQueries.map((q, qIdx) => `
      <button class="sim-query-chip ${qIdx === 0 ? 'active' : ''}" onclick="selectSimQuery(${qIdx})">
        "${q}"
      </button>
    `).join('');
  }

  // Render hyperparameter sliders
  const slidersContainer = document.getElementById('sim-sliders-container');
  if (slidersContainer) {
    slidersContainer.innerHTML = scen.parameters.map(p => `
      <div class="sim-slider-group">
        <div class="sim-slider-header">
          <span class="sim-slider-label">${p.label}</span>
          <span class="sim-slider-badge" id="badge-${p.id}">${p.value}${p.unit}</span>
        </div>
        <input 
          type="range" 
          id="slider-${p.id}" 
          class="sim-range-input" 
          min="${p.min}" 
          max="${p.max}" 
          step="${p.step}" 
          value="${p.value}" 
          oninput="onSimSliderChange('${p.id}', this.value)"
        />
      </div>
    `).join('');
  }

  // Render interactive clickable pipeline stages
  const stagesContainer = document.getElementById('sim-pipeline-stages');
  if (stagesContainer) {
    stagesContainer.innerHTML = scen.stages.map((st, sIdx) => `
      <div class="sim-stage-node ${sIdx === 0 ? 'inspected' : ''}" id="sim-stage-${sIdx}" onclick="inspectSimStage(${sIdx})">
        <div class="stage-node-top">
          <div class="stage-node-title-group">
            <span class="stage-num-badge">${sIdx + 1}</span>
            <span class="stage-node-title">${st.name}</span>
          </div>
          <span class="stage-node-latency">${st.latencyMs}</span>
        </div>
        <div class="stage-node-desc">${st.description}</div>
        <div class="stage-node-hint"><span>🔍</span> Click to inspect tensors & design tradeoffs</div>
        <div class="stage-progress-bar" id="stage-bar-${sIdx}"></div>
      </div>
    `).join('');
  }

  inspectSimStage(0);
  updateSimMetrics();

  const termEl = document.getElementById('sim-terminal-logs');
  if (termEl) {
    termEl.innerHTML = `
      <div class="terminal-line sys">> System Workbench initialized for [${scen.systemName}].</div>
      <div class="terminal-line">> Architecture verified for ${scen.client}.</div>
      <div class="terminal-line">> Active Query: "${currentQuery}"</div>
      <div class="terminal-line">> Tune hyperparameters above or click "▶ Execute Pipeline" to simulate live tensors.</div>
    `;
  }
}

function selectSimQuery(qIdx) {
  const scen = PORTFOLIO_DATA.simulatorScenarios[currentSimScenario];
  if (!scen || !scen.sampleQueries[qIdx]) return;

  currentQuery = scen.sampleQueries[qIdx];

  const chips = document.querySelectorAll('.sim-query-chip');
  chips.forEach((c, i) => c.classList.toggle('active', i === qIdx));

  const customInput = document.getElementById('sim-custom-input');
  if (customInput) customInput.value = currentQuery;

  appendTerminalLog(`> Active query switched: "${currentQuery}"`, 'sys');
}

function applyCustomSimQuery() {
  const customInput = document.getElementById('sim-custom-input');
  if (!customInput || !customInput.value.trim()) return;

  currentQuery = customInput.value.trim();
  document.querySelectorAll('.sim-query-chip').forEach(c => c.classList.remove('active'));

  appendTerminalLog(`> Custom input applied: "${currentQuery}"`, 'sys');
  showToast('Applied custom pipeline query');
}

function onSimSliderChange(paramId, value) {
  simParamValues[paramId] = parseFloat(value);

  const scen = PORTFOLIO_DATA.simulatorScenarios[currentSimScenario];
  if (!scen) return;

  const paramDef = scen.parameters.find(p => p.id === paramId);
  const badge = document.getElementById(`badge-${paramId}`);
  if (badge && paramDef) {
    badge.textContent = `${value}${paramDef.unit}`;
  }

  updateSimMetrics();
}

function updateSimMetrics() {
  const scen = PORTFOLIO_DATA.simulatorScenarios[currentSimScenario];
  if (!scen) return;

  let calculatedLatency = scen.defaultLatency;
  let calculatedThroughput = scen.defaultTokensPerSec;

  if (scen.id === 'rag') {
    const topK = simParamValues['topK'] || 4;
    const bm25 = simParamValues['bm25Weight'] || 0.3;
    const simThresh = simParamValues['similarityThreshold'] || 0.80;

    calculatedLatency = Math.round(scen.defaultLatency + (topK - 4) * 4.5 + (bm25 - 0.3) * 12 - (simThresh - 0.80) * 15);
    calculatedThroughput = Math.round(185 - (topK - 4) * 6);
  } else if (scen.id === 'asl') {
    const fps = simParamValues['fpsTarget'] || 30;
    const beam = simParamValues['beamWidth'] || 4;

    calculatedLatency = Math.round((1000 / fps) + (beam - 4) * 2.5);
    calculatedThroughput = fps;
  } else if (scen.id === 'agent') {
    const toolCalls = simParamValues['maxToolCalls'] || 4;
    const temp = simParamValues['temperature'] || 0.1;

    calculatedLatency = Math.round(toolCalls * 1100 + temp * 400);
    calculatedThroughput = Math.round(95 + (temp - 0.1) * 20);
  } else if (scen.id === 'churn') {
    const volume = simParamValues['subscribersScored'] || 100000;
    calculatedLatency = Math.round((volume / 100000) * 120);
    calculatedThroughput = Math.round((volume / (calculatedLatency / 1000)));
  }

  const latEl = document.getElementById('sim-metric-latency');
  if (latEl) latEl.textContent = `${calculatedLatency} ms`;

  const tpsEl = document.getElementById('sim-metric-throughput');
  if (tpsEl) {
    if (scen.id === 'asl') {
      tpsEl.textContent = `${calculatedThroughput} FPS`;
    } else if (scen.id === 'churn') {
      tpsEl.textContent = `${calculatedThroughput.toLocaleString()} records/s`;
    } else {
      tpsEl.textContent = `${calculatedThroughput} tok/s`;
    }
  }
}

function inspectSimStage(sIdx) {
  inspectedStageIdx = sIdx;
  const scen = PORTFOLIO_DATA.simulatorScenarios[currentSimScenario];
  if (!scen || !scen.stages[sIdx]) return;

  const stage = scen.stages[sIdx];

  document.querySelectorAll('.sim-stage-node').forEach((node, i) => {
    node.classList.toggle('inspected', i === sIdx);
  });

  const badgeEl = document.getElementById('insp-stage-badge');
  if (badgeEl) badgeEl.textContent = `Stage ${sIdx + 1} of ${scen.stages.length} • [${stage.status}]`;

  const nameEl = document.getElementById('insp-stage-name');
  if (nameEl) nameEl.textContent = stage.name;

  const slaEl = document.getElementById('insp-stage-sla');
  if (slaEl) slaEl.textContent = `Latency SLA: ${stage.latencyMs}`;

  const tensorEl = document.getElementById('insp-tensor-val');
  if (tensorEl) tensorEl.textContent = stage.tensorShape;

  const descEl = document.getElementById('insp-stage-desc');
  if (descEl) descEl.textContent = stage.description;

  const detailsEl = document.getElementById('insp-stage-details');
  if (detailsEl) detailsEl.textContent = stage.details;
}

function executeInteractivePipeline() {
  if (isSimRunning) return;
  isSimRunning = true;

  const scen = PORTFOLIO_DATA.simulatorScenarios[currentSimScenario];
  const runBtn = document.getElementById('sim-run-btn');
  const statusIndicator = document.getElementById('term-status-indicator');
  const liveStatusPill = document.getElementById('sim-live-status-pill');

  if (runBtn) {
    runBtn.disabled = true;
    runBtn.innerHTML = `<span>⏳ Executing...</span>`;
  }
  if (statusIndicator) {
    statusIndicator.className = 'terminal-status-running';
    statusIndicator.textContent = '● Executing Pipeline';
  }
  if (liveStatusPill) {
    liveStatusPill.textContent = 'Streaming Tensors';
    liveStatusPill.style.color = '#f59e0b';
  }

  appendTerminalLog(`------------------------------------------------------------`, 'sys');
  appendTerminalLog(`> EXECUTION TRIGGERED: ${scen.systemName}`, 'sys');
  appendTerminalLog(`> Input Payload: "${currentQuery}"`, 'sys');

  let stageIndex = 0;
  const totalStages = scen.stages.length;

  function runNextStage() {
    if (stageIndex < totalStages) {
      const st = scen.stages[stageIndex];

      document.querySelectorAll('.sim-stage-node').forEach((node, i) => {
        node.classList.toggle('active-executing', i === stageIndex);
      });

      const bar = document.getElementById(`stage-bar-${stageIndex}`);
      if (bar) bar.style.width = '100%';

      inspectSimStage(stageIndex);

      appendTerminalLog(`[STAGE ${stageIndex + 1}/${totalStages}] ${st.name}`, 'sys');
      appendTerminalLog(`  ↳ Tensor Shape: ${st.tensorShape} | Status: ${st.status}`, 'sys');
      appendTerminalLog(`  ↳ Telemetry: ${st.details}`, 'success');

      stageIndex++;
      setTimeout(runNextStage, 650);
    } else {
      const latVal = document.getElementById('sim-metric-latency')?.textContent || `${scen.defaultLatency} ms`;
      appendTerminalLog(`[COMPLETE] End-to-end inference finished in ${latVal}.`, 'success');
      appendTerminalLog(`[VERIFICATION] Zero hallucinations detected. Compliance policy satisfied.`, 'success');
      appendTerminalLog(`------------------------------------------------------------`, 'sys');

      document.querySelectorAll('.sim-stage-node').forEach(node => {
        node.classList.remove('active-executing');
      });

      if (runBtn) {
        runBtn.disabled = false;
        runBtn.innerHTML = `<span>▶ Execute Pipeline</span>`;
      }
      if (statusIndicator) {
        statusIndicator.className = 'terminal-status-ok';
        statusIndicator.textContent = '● Idle';
      }
      if (liveStatusPill) {
        liveStatusPill.textContent = 'Interactive Ready';
        liveStatusPill.style.color = '#34d399';
      }

      isSimRunning = false;
      showToast(`Pipeline execution completed (${latVal})`);
    }
  }

  runNextStage();
}

function resetSimToDefaults() {
  if (isSimRunning) return;
  document.querySelectorAll('.stage-progress-bar').forEach(b => b.style.width = '0%');
  selectSimScenario(currentSimScenario);
  showToast('Reset pipeline parameters to baseline');
}

// Global browser window exports
if (typeof window !== 'undefined') {
  window.selectSimScenario = selectSimScenario;
  window.selectSimQuery = selectSimQuery;
  window.applyCustomSimQuery = applyCustomSimQuery;
  window.onSimSliderChange = onSimSliderChange;
  window.inspectSimStage = inspectSimStage;
  window.executeInteractivePipeline = executeInteractivePipeline;
  window.resetSimToDefaults = resetSimToDefaults;
}

function appendTerminalLog(msg, type = '') {
  const termEl = document.getElementById('sim-terminal-logs');
  if (!termEl) return;

  const line = document.createElement('div');
  line.className = `terminal-line ${type}`;
  line.textContent = msg;
  termEl.appendChild(line);
  termEl.scrollTop = termEl.scrollHeight;
}

/**
 * Dual-Lens Perspective Switcher
 */
function initPerspectiveSwitcher() {
  const btns = document.querySelectorAll('.perspective-btn');
  btns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      btns.forEach(b => b.classList.remove('active'));
      e.currentTarget.classList.add('active');
      currentPerspective = e.currentTarget.dataset.perspective;
      renderPerspective();
      renderProjects();
    });
  });

  renderPerspective();
}

function renderPerspective() {
  const data = PORTFOLIO_DATA.perspectives[currentPerspective];
  if (!data) return;

  const tagEl = document.getElementById('p-tag');
  const titleEl = document.getElementById('p-lead-title');
  const descEl = document.getElementById('p-lead-desc');
  const metricsEl = document.getElementById('p-metrics-grid');
  const strengthsEl = document.getElementById('p-strengths-grid');

  if (tagEl) tagEl.textContent = data.badge;
  if (titleEl) titleEl.textContent = data.leadTitle;
  if (descEl) descEl.textContent = data.leadDesc;

  if (metricsEl) {
    metricsEl.innerHTML = data.metrics.map(m => `
      <div class="p-metric-card">
        <div class="p-metric-num">${m.value}</div>
        <div class="p-metric-title">${m.label}</div>
        <div class="p-metric-desc">${m.detail}</div>
      </div>
    `).join('');
  }

  if (strengthsEl) {
    strengthsEl.innerHTML = data.coreStrengths.map(s => `
      <div class="p-strength-card">
        <h4>${s.title}</h4>
        <p>${s.desc}</p>
      </div>
    `).join('');
  }
}

/**
 * Projects & Case Studies (with Category Filter Tabs)
 */
function initProjects() {
  const filterBtns = document.querySelectorAll('.project-filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      filterBtns.forEach(b => b.classList.remove('active'));
      e.currentTarget.classList.add('active');
      activeProjectFilter = e.currentTarget.dataset.filter;
      renderProjects();
    });
  });

  renderProjects();
}

function renderProjects() {
  const container = document.getElementById('projects-grid');
  if (!container) return;

  const filtered = PORTFOLIO_DATA.projects.filter(proj => {
    if (activeProjectFilter === 'all') return true;
    return proj.category === activeProjectFilter;
  });

  container.innerHTML = filtered.map(proj => {
    const focusText = currentPerspective === 'strategic' 
      ? proj.strategicFocus 
      : proj.technicalFocus;

    return `
      <article class="case-card">
        <div>
          <div class="case-meta-top">
            <span class="case-tag">${proj.tag}</span>
            <span class="case-client">${proj.client} • ${proj.year}</span>
          </div>

          <h3 class="case-title">${proj.title}</h3>
          <p class="case-subtitle">${proj.subtitle}</p>

          <div class="case-impact-strip">
            <span>✓</span>
            <span>${proj.impactMetric}</span>
          </div>

          <p class="case-body-text">${focusText}</p>

          <div class="case-tech-pills">
            ${proj.techStack.map(t => `<span class="case-tech-pill">${t}</span>`).join('')}
          </div>
        </div>

        <div class="case-footer">
          <button class="btn-case-action" onclick="openCaseDialog('${proj.id}')">
            <span>View Architecture & Scope</span>
            <span>→</span>
          </button>
          <div style="display:flex; gap:10px;">
            ${proj.githubUrl ? `
              <a href="${proj.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn-pill-subtle" style="padding:4px 10px; font-size:0.75rem;">
                GitHub ↗
              </a>
            ` : ''}
          </div>
        </div>
      </article>
    `;
  }).join('');
}

/**
 * Career Milestones (with Authentic Logos)
 */
function initExperience() {
  const container = document.getElementById('experience-list');
  if (!container) return;

  container.innerHTML = PORTFOLIO_DATA.experience.map(exp => `
    <div class="exp-card">
      <div class="exp-header">
        <div class="exp-brand-row">
          ${exp.logo ? `<img src="${exp.logo}" alt="${exp.organization} Logo" class="exp-logo-img">` : ''}
          <div>
            <h3 class="exp-role">${exp.role}</h3>
            <div class="exp-org">${exp.organization} • <span style="color:var(--text-muted); font-size:0.85rem;">${exp.location}</span></div>
          </div>
        </div>
        <span class="exp-period">${exp.period}</span>
      </div>
      <ul class="exp-bullets">
        ${exp.strategicPoints.map(pt => `<li class="exp-bullet-item">${pt}</li>`).join('')}
      </ul>
    </div>
  `).join('');
}

/**
 * Education & Credentials (Zero Emojis, Real Logos)
 */
function initCredentials() {
  const eduContainer = document.getElementById('education-list');
  if (eduContainer) {
    eduContainer.innerHTML = PORTFOLIO_DATA.education.map(edu => `
      <div class="edu-item-box">
        ${edu.logo ? `
          <div class="edu-logo-strip">
            <img src="${edu.logo}" alt="${edu.institution} Logo" style="height:34px; max-width:160px; object-fit:contain;">
          </div>
        ` : ''}
        <h4 class="edu-degree-title">${edu.degree}</h4>
        <div class="edu-school-name">${edu.institution}</div>
        <div class="edu-meta-strip">${edu.period} • ${edu.location} • <strong style="color:var(--text-primary);">${edu.status}</strong></div>
        <div class="edu-course-pills">
          ${edu.courses.map(c => `
            <div class="edu-course-pill">
              <span>${c.name}</span>
              <span class="edu-course-grade">${c.grade}</span>
            </div>
          `).join('')}
        </div>
      </div>
    `).join('');
  }

  const certContainer = document.getElementById('certifications-list');
  if (certContainer) {
    certContainer.innerHTML = PORTFOLIO_DATA.certifications.map(c => `
      <div class="cert-item-row">
        <div style="display:flex; align-items:center; gap:14px;">
          ${c.logo ? `
            <div class="cert-logo-wrapper">
              <img src="${c.logo}" alt="${c.issuer} Logo" class="cert-logo-img">
            </div>
          ` : ''}
          <div class="cert-main-info">
            <span class="cert-name">${c.title}</span>
            <span class="cert-org-date">${c.issuer} • ${c.date}</span>
          </div>
        </div>
        ${c.verifyUrl ? `
          <a href="${c.verifyUrl}" target="_blank" rel="noopener noreferrer" class="btn-pill-subtle" style="padding:4px 10px; font-size:0.75rem;">
            Verify ↗
          </a>
        ` : `
          <span class="case-tag" style="font-size:0.7rem;">${c.badge}</span>
        `}
      </div>
    `).join('');
  }
}

/**
 * Direct Contact Hub
 */
function initContactHub() {
  const p = PORTFOLIO_DATA.personal;

  const emailEl = document.getElementById('contact-email-val');
  if (emailEl) emailEl.textContent = p.email;

  const phoneEl = document.getElementById('contact-phone-val');
  if (phoneEl) phoneEl.textContent = p.phone;

  const locEl = document.getElementById('contact-loc-val');
  if (locEl) locEl.textContent = p.location;

  const rInd = document.getElementById('dl-ind-resume');
  if (rInd) rInd.href = p.resumes.industry;

  const rAcad = document.getElementById('dl-acad-resume');
  if (rAcad) rAcad.href = p.resumes.academic;

  const rDos = document.getElementById('dl-full-dossier');
  if (rDos) rDos.href = p.resumes.dossier;
}

/**
 * Digital Twin ("Tarun.AI") Interactive Component
 */
function initDigitalTwin() {
  const trigger = document.getElementById('twin-trigger');
  const drawer = document.getElementById('twin-drawer');
  const closeBtn = document.getElementById('twin-close-btn');
  const promptsContainer = document.getElementById('twin-prompts-container');
  const responseBox = document.getElementById('twin-response-box');

  if (!trigger || !drawer) return;

  trigger.addEventListener('click', () => {
    drawer.classList.toggle('open');
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      drawer.classList.remove('open');
    });
  }

  if (promptsContainer) {
    const twinData = PORTFOLIO_DATA.digitalTwin;
    promptsContainer.innerHTML = twinData.samplePrompts.map((item, idx) => `
      <button class="twin-prompt-pill" onclick="handleTwinPrompt(${idx})">
        💬 "${item.q}"
      </button>
    `).join('');
  }
}

window.handleTwinPrompt = function(index) {
  const item = PORTFOLIO_DATA.digitalTwin.samplePrompts[index];
  const responseBox = document.getElementById('twin-response-box');
  if (!item || !responseBox) return;

  responseBox.style.display = 'block';
  responseBox.innerHTML = `
    <div style="font-weight:700; margin-bottom:4px; color:#15803d;">Tarun.AI:</div>
    <div>${item.a}</div>
  `;
};

/**
 * Case Dialog Modal
 */
function initModal() {
  const modal = document.getElementById('case-dialog');
  if (!modal) return;

  modal.addEventListener('click', (e) => {
    const rect = modal.getBoundingClientRect();
    const inBox = (rect.top <= e.clientY && e.clientY <= rect.top + rect.height
      && rect.left <= e.clientX && e.clientX <= rect.left + rect.width);
    if (!inBox) modal.close();
  });

  const closeBtn = document.getElementById('dialog-close-btn');
  if (closeBtn) closeBtn.addEventListener('click', () => modal.close());
}

window.openCaseDialog = function(projectId) {
  const proj = PORTFOLIO_DATA.projects.find(p => p.id === projectId);
  const modal = document.getElementById('case-dialog');
  if (!proj || !modal) return;

  document.getElementById('dialog-title').textContent = proj.title;
  document.getElementById('dialog-client').textContent = `${proj.client} • ${proj.year}`;
  
  const strategicBox = document.getElementById('dialog-strategic');
  if (strategicBox) strategicBox.textContent = proj.strategicFocus;

  const techBox = document.getElementById('dialog-tech');
  if (techBox) techBox.textContent = proj.technicalFocus;

  const stepsBox = document.getElementById('dialog-steps');
  if (stepsBox) {
    stepsBox.innerHTML = proj.architectureSteps.map((step, idx) => `
      <div class="flow-step-item">
        <span class="flow-step-num">${idx + 1}</span>
        <span>${step}</span>
      </div>
    `).join('');
  }

  const pillsBox = document.getElementById('dialog-tech-pills');
  if (pillsBox) {
    pillsBox.innerHTML = proj.techStack.map(t => `<span class="case-tech-pill">${t}</span>`).join('');
  }

  modal.showModal();
};

/**
 * Clipboard & Toast Utility
 */
window.copyToClipboard = function(text, label) {
  navigator.clipboard.writeText(text).then(() => {
    showToast(`Copied ${label} to clipboard`);
  }).catch(() => {
    showToast(`Failed to copy`);
  });
};

function showToast(msg) {
  let toast = document.getElementById('site-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'site-toast';
    toast.className = 'toast-alert';
    document.body.appendChild(toast);
  }
  toast.innerHTML = `<span>✓</span> <span>${msg}</span>`;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2800);
}
