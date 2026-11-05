// ===== Settings: change these before going live =====
const WHATSAPP_NUMBER = "97400000000"; // your WhatsApp number, digits only, with 974

// ===== Text (Arabic + English) =====
const T = {
  ar: {
    skip: "تخطَّ إلى المحتوى",
    brand: "القدوة",
    navServices: "خدماتنا", navProcess: "طريقة العمل", navContact: "تواصل معنا",
    ctaQuote: "اطلب عرض سعر", ctaServices: "تصفح الخدمات",
    heroTitle: "مواقع وأنظمة ذكية تعمل لنشاطك، حتى بعد الدوام",
    heroLead: "من قطر، نبني مواقع فيها مساعد ذكي يرد على عملائك، ونربطها بواتساب، ونصمم عروضًا تفاعلية للمشاريع العقارية.",
    towerHint: "اضغط على أي طابق لترى الخدمة",
    floorWord: "الطابق",
    floorCta: "اطلب هذه الخدمة",
    servicesTitle: "ماذا نبني لك",
    servicesLead: "كل خدمة تُطلب لوحدها، أو نجمعها لك في نظام واحد.",
    processTitle: "كيف نعمل معك",
    contactTitle: "لنبدأ مشروعك",
    contactLead: "املأ النموذج، وسنكمل معك على واتساب بعرض سعر واضح.",
    labelWhatsapp: "واتساب", labelEmail: "البريد الإلكتروني", labelHours: "ساعات العمل",
    hours: "الأحد إلى الخميس، 9 صباحًا حتى 6 مساءً",
    fName: "الاسم", fPhone: "رقم الجوال", fBiz: "اسم النشاط التجاري",
    fService: "الخدمة", fMsg: "تفاصيل مختصرة",
    fPrivacy: 'أوافق على <a href="privacy.html">سياسة الخصوصية</a>',
    fMarketing: "أرغب في استلام العروض والأخبار من القدوة (اختياري)",
    fSubmit: "إرسال عبر واتساب",
    notSure: "لست متأكدًا بعد",
    errName: "اكتب اسمك.", errPhone: "اكتب رقم جوال صحيح.", errPrivacy: "وافق على سياسة الخصوصية للمتابعة.",
    footerTag: "مواقع وأنظمة ذكية للأعمال في قطر.",
    crLabel: "رقم السجل التجاري", licLabel: "رقم رخصة التجارة الإلكترونية",
    linkTerms: "الشروط والأحكام", linkPrivacy: "سياسة الخصوصية",
    linkRefunds: "سياسة الإلغاء والاسترجاع", linkComplaints: "تقديم شكوى",
    copyright: "© 2026 القدوة. الدوحة، قطر.",
    waIntro: "مرحبًا القدوة، أرغب في عرض سعر.",
    waName: "الاسم", waPhone: "الجوال", waBiz: "النشاط", waService: "الخدمة", waMsg: "التفاصيل",
    waMarketing: "الموافقة على استلام العروض", yes: "نعم", no: "لا",
    langBtn: "English",
    waOpen: "لم يفتح واتساب؟ اضغط هنا"
  },
  en: {
    skip: "Skip to content",
    brand: "Qudwa",
    navServices: "Services", navProcess: "How we work", navContact: "Contact",
    ctaQuote: "Request a quote", ctaServices: "Browse services",
    heroTitle: "Websites and AI systems that work for your business, even after hours",
    heroLead: "Based in Qatar, we build websites with an AI assistant that answers your customers, connect them to WhatsApp, and create interactive showcases for real estate projects.",
    towerHint: "Tap any floor to see the service",
    floorWord: "Floor",
    floorCta: "Request this service",
    servicesTitle: "What we build for you",
    servicesLead: "Order any service on its own, or we combine them into one system.",
    processTitle: "How we work with you",
    contactTitle: "Start your project",
    contactLead: "Fill in the form and we'll continue on WhatsApp with a clear quote.",
    labelWhatsapp: "WhatsApp", labelEmail: "Email", labelHours: "Working hours",
    hours: "Sunday to Thursday, 9am to 6pm",
    fName: "Name", fPhone: "Mobile number", fBiz: "Business name",
    fService: "Service", fMsg: "Short details",
    fPrivacy: 'I agree to the <a href="privacy.html">privacy policy</a>',
    fMarketing: "Send me offers and news from Qudwa (optional)",
    fSubmit: "Send via WhatsApp",
    notSure: "Not sure yet",
    errName: "Enter your name.", errPhone: "Enter a valid mobile number.", errPrivacy: "Agree to the privacy policy to continue.",
    footerTag: "Websites and AI systems for businesses in Qatar.",
    crLabel: "Commercial Registration no.", licLabel: "E-commerce licence no.",
    linkTerms: "Terms and conditions", linkPrivacy: "Privacy policy",
    linkRefunds: "Cancellation and refund policy", linkComplaints: "Submit a complaint",
    copyright: "© 2026 Qudwa. Doha, Qatar.",
    waIntro: "Hi Qudwa, I'd like a quote.",
    waName: "Name", waPhone: "Mobile", waBiz: "Business", waService: "Service", waMsg: "Details",
    waMarketing: "Agrees to receive offers", yes: "Yes", no: "No",
    langBtn: "العربية",
    waOpen: "WhatsApp didn't open? Tap here"
  }
};

// Bottom floor first: websites are the foundation, 3D showcases on top.
const SERVICES = [
  {
    id: "web",
    icon: '<rect x="4" y="6" width="32" height="26" rx="3"/><path d="M4 13h32"/><circle cx="9" cy="9.5" r="1"/><circle cx="13" cy="9.5" r="1"/>',
    ar: { t: "مواقع الأعمال", d: "موقع سريع بالعربي والإنجليزي، يعمل بشكل صحيح على الجوال، مع دومين ⁦.qa⁩ خاص بنشاطك.",
          b: ["تصميم خاص بنشاطك", "ربط الدومين والاستضافة", "تعديلات بعد الإطلاق"] },
    en: { t: "Business websites", d: "A fast Arabic and English site that works properly on phones, with your own .qa domain.",
          b: ["Design made for your business", "Domain and hosting set up", "Edits after launch"] }
  },
  {
    id: "chat",
    icon: '<path d="M6 8h28v18H16l-7 6v-6H6z"/><circle cx="14" cy="17" r="1.3"/><circle cx="20" cy="17" r="1.3"/><circle cx="26" cy="17" r="1.3"/>',
    ar: { t: "مساعد دردشة ذكي", d: "يرد على أسئلة الزوار من معلومات نشاطك، ويجمع بيانات العملاء المهتمين بدل أن تضيع.",
          b: ["يتحدث العربية والإنجليزية", "يعرف خدماتك وأسعارك", "يحوّل العميل الجاد إليك"] },
    en: { t: "AI chat assistant", d: "Answers visitor questions from your business info and captures interested customers so they don't slip away.",
          b: ["Speaks Arabic and English", "Knows your services and prices", "Passes serious leads to you"] }
  },
  {
    id: "whatsapp",
    icon: '<path d="M20 5a14 14 0 0 0-12 21l-2 8 8-2A14 14 0 1 0 20 5z"/><path d="M14 20l4 4 8-8"/>',
    ar: { t: "أتمتة واتساب للأعمال", d: "ردود تلقائية، قوائم خدمات، وتأكيد طلبات على واتساب، ويتحول العميل إلى موظف عند الحاجة.",
          b: ["ردود فورية على مدار الساعة", "قوائم وأزرار جاهزة", "تحويل لموظف بشري"] },
    en: { t: "WhatsApp Business automation", d: "Automatic replies, service menus and order confirmations on WhatsApp, with a handoff to your staff when needed.",
          b: ["Instant replies, any hour", "Ready-made menus and buttons", "Handoff to a real person"] }
  },
  {
    id: "receptionist",
    icon: '<path d="M8 22v-4a12 12 0 0 1 24 0v4"/><rect x="5" y="21" width="6" height="9" rx="2"/><rect x="29" y="21" width="6" height="9" rx="2"/><path d="M32 30c0 3-3 5-8 5"/>',
    ar: { t: "موظف استقبال ذكي", d: "يرد على المكالمات والرسائل، يحجز المواعيد، ويرسل لك ملخص كل محادثة.",
          b: ["حجز المواعيد", "رد على المكالمات", "ملخص يومي لك"] },
    en: { t: "AI receptionist", d: "Answers calls and messages, books appointments and sends you a summary of every conversation.",
          b: ["Appointment booking", "Answers calls", "Daily summary for you"] }
  },
  {
    id: "3d",
    icon: '<path d="M20 4l12 6v24l-12 4-12-4V10z"/><path d="M8 10l12 5 12-5M20 15v23"/><path d="M8 18l12 5 12-5M8 26l12 5 12-5"/>',
    ar: { t: "عروض المباني التفاعلية", d: "نموذج ثلاثي الأبعاد لمشروعك، يضغط المشتري على أي طابق ويرى مخططه وصوره، مثل المبنى أعلى هذه الصفحة.",
          b: ["نموذج ثلاثي الأبعاد", "مخطط وصور لكل طابق", "مناسب للمطورين والوسطاء"] },
    en: { t: "Interactive building showcases", d: "A 3D model of your project. Buyers click any floor to see its floor plan and photos, like the building at the top of this page.",
          b: ["3D model", "Plan and photos per floor", "Built for developers and agents"] }
  }
];

const STEPS = {
  ar: [
    ["نسمع منك", "مكالمة قصيرة نفهم فيها نشاطك وما تحتاجه. مجانية."],
    ["عرض سعر واضح", "سعر ثابت وموعد تسليم مكتوب قبل أن نبدأ."],
    ["نبني وتراجع معنا", "ترى التقدم أولًا بأول وتطلب تعديلاتك."],
    ["الإطلاق", "نربط الدومين، نختبر كل شيء، ونطلق."],
    ["دعم بعد الإطلاق", "نبقى معك للتعديلات والمتابعة."]
  ],
  en: [
    ["We talk", "A short call to understand your business and what you need. Free."],
    ["Clear quote", "A fixed price and a written delivery date before we start."],
    ["We build, you review", "You see progress as we go and ask for changes."],
    ["Launch", "We connect the domain, test everything and go live."],
    ["Support after launch", "We stay with you for edits and follow-up."]
  ]
};

let lang = "ar";
let activeFloor = 0;

// ===== Storage (safe) =====
function loadLang() { try { return localStorage.getItem("qudwa-lang"); } catch (e) { return null; } }
function saveLang(v) { try { localStorage.setItem("qudwa-lang", v); } catch (e) {} }

// ===== Tower =====
const SVGNS = "http://www.w3.org/2000/svg";
const CX = 200, A = 150, B = 62, H = 56, TOP = 44;

function poly(pts, cls) {
  const p = document.createElementNS(SVGNS, "polygon");
  p.setAttribute("points", pts.map(q => q.join(",")).join(" "));
  if (cls) p.setAttribute("class", cls);
  return p;
}

function buildTower() {
  const svg = document.getElementById("tower");
  svg.innerHTML = "";
  svg.setAttribute("viewBox", "0 0 400 470");

  // ground
  const baseY = TOP + 4 * H + B + H; // center of bottom footprint
  svg.appendChild(poly([[CX, baseY - B - 22], [CX + A + 40, baseY], [CX, baseY + B + 22], [CX - A - 40, baseY]], "ground"));

  for (let i = 0; i < SERVICES.length; i++) {
    const y = TOP + (SERVICES.length - 1 - i) * H;
    const g = document.createElementNS(SVGNS, "g");
    g.setAttribute("class", "floor");
    g.setAttribute("tabindex", "0");
    g.setAttribute("role", "button");
    g.dataset.index = i;
    g.style.setProperty("--i", i);

    const pL = (x, t) => [x, y + B + (x - (CX - A)) * B / A + t];
    const pR = (x, t) => [x, y + 2 * B - (x - CX) * B / A + t];

    g.appendChild(poly([[CX - A, y + B], [CX, y + 2 * B], [CX, y + 2 * B + H], [CX - A, y + B + H]], "f-left"));
    g.appendChild(poly([[CX, y + 2 * B], [CX + A, y + B], [CX + A, y + B + H], [CX, y + 2 * B + H]], "f-right"));
    g.appendChild(poly([pL(CX - A + 12, 15), pL(CX - 12, 15), pL(CX - 12, H - 15), pL(CX - A + 12, H - 15)], "f-glass"));
    g.appendChild(poly([pR(CX + 12, 15), pR(CX + A - 12, 15), pR(CX + A - 12, H - 15), pR(CX + 12, H - 15)], "f-glass-r"));
    g.appendChild(poly([[CX, y], [CX + A, y + B], [CX, y + 2 * B], [CX - A, y + B]], "f-top"));

    const title = document.createElementNS(SVGNS, "title");
    g.appendChild(title);

    g.addEventListener("click", () => setFloor(i));
    g.addEventListener("keydown", e => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setFloor(i); }
      if (e.key === "ArrowUp" && i < SERVICES.length - 1) { e.preventDefault(); focusFloor(i + 1); }
      if (e.key === "ArrowDown" && i > 0) { e.preventDefault(); focusFloor(i - 1); }
    });
    svg.appendChild(g);
  }

  // roof slab
  const ra = A - 18, rb = B - 7.5, ry = TOP + B - 14 - rb; // sits centered on the top floor
  const roof = document.createElementNS(SVGNS, "g");
  roof.setAttribute("class", "roof");
  roof.style.setProperty("--i", SERVICES.length);
  roof.appendChild(poly([[CX - ra, ry + rb], [CX, ry + 2 * rb], [CX, ry + 2 * rb + 14], [CX - ra, ry + rb + 14]], "f-left"));
  roof.appendChild(poly([[CX, ry + 2 * rb], [CX + ra, ry + rb], [CX + ra, ry + rb + 14], [CX, ry + 2 * rb + 14]], "f-right"));
  roof.appendChild(poly([[CX, ry], [CX + ra, ry + rb], [CX, ry + 2 * rb], [CX - ra, ry + rb]], "f-top"));
  svg.appendChild(roof);

  svg.classList.add("is-building");
  document.getElementById("floorPanel").classList.add("is-entering");
}

function focusFloor(i) {
  const g = document.querySelector(`.floor[data-index="${i}"]`);
  if (g) { g.focus(); setFloor(i); }
}

function setFloor(i) {
  activeFloor = i;
  document.querySelectorAll(".floor").forEach(g => {
    const on = Number(g.dataset.index) === i;
    g.classList.toggle("is-active", on);
    g.setAttribute("aria-pressed", on ? "true" : "false");
  });
  const s = SERVICES[i][lang];
  document.getElementById("floorNum").textContent = `${T[lang].floorWord} ${i + 1}`;
  document.getElementById("floorTitle").textContent = s.t;
  document.getElementById("floorText").textContent = s.d;
}

// ===== Render language-dependent parts =====
function renderServices() {
  const list = document.getElementById("serviceList");
  list.innerHTML = SERVICES.map((s, i) => {
    const c = s[lang];
    return `<article class="service" id="svc-${s.id}">
      <svg class="service-icon" viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${s.icon}</svg>
      <h3>${c.t}<span class="service-floor">${T[lang].floorWord} ${i + 1}</span></h3>
      <div class="service-body"><p>${c.d}</p><ul>${c.b.map(x => `<li>${x}</li>`).join("")}</ul></div>
    </article>`;
  }).join("");

  const sel = document.getElementById("fService");
  const prev = sel.value;
  sel.innerHTML = SERVICES.map(s => `<option value="${s.id}">${s[lang].t}</option>`).join("") +
    `<option value="unsure">${T[lang].notSure}</option>`;
  if (prev) sel.value = prev;

  document.querySelectorAll(".floor").forEach((g, i) => {
    const t = g.querySelector("title");
    if (t) t.textContent = SERVICES[i][lang].t;
    g.setAttribute("aria-label", `${T[lang].floorWord} ${i + 1}: ${SERVICES[i][lang].t}`);
  });
}

function renderSteps() {
  document.getElementById("steps").innerHTML = STEPS[lang].map((s, i) =>
    `<li class="step"><span class="step-n" aria-hidden="true">${i + 1}</span><h3>${s[0]}</h3><p>${s[1]}</p></li>`
  ).join("");
}

function applyLang(next) {
  lang = next;
  const html = document.documentElement;
  html.lang = lang;
  html.dir = lang === "ar" ? "rtl" : "ltr";
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const k = el.dataset.i18n;
    if (T[lang][k] !== undefined) el.textContent = T[lang][k];
  });
  document.querySelectorAll("[data-i18n-html]").forEach(el => {
    el.innerHTML = T[lang][el.dataset.i18nHtml];
  });
  const btn = document.getElementById("langBtn");
  btn.textContent = T[lang].langBtn;
  btn.lang = lang === "ar" ? "en" : "ar";
  document.title = lang === "ar" ? "القدوة | Qudwa" : "Qudwa | القدوة";
  renderServices();
  renderSteps();
  setFloor(activeFloor);
  document.getElementById("formError").textContent = "";
  document.getElementById("waOpen").hidden = true;
  saveLang(lang);
}

// ===== Quote form -> WhatsApp =====
function setupForm() {
  const form = document.getElementById("quoteForm");
  const err = document.getElementById("formError");

  document.getElementById("floorLink").addEventListener("click", () => {
    document.getElementById("fService").value = SERVICES[activeFloor].id;
  });

  form.addEventListener("submit", e => {
    e.preventDefault();
    const name = form.fName.value.trim();
    const phone = form.fPhone.value.trim();
    form.fName.removeAttribute("aria-invalid");
    form.fPhone.removeAttribute("aria-invalid");

    if (!name) { err.textContent = T[lang].errName; form.fName.setAttribute("aria-invalid", "true"); form.fName.focus(); return; }
    if (phone.replace(/\D/g, "").length < 8) { err.textContent = T[lang].errPhone; form.fPhone.setAttribute("aria-invalid", "true"); form.fPhone.focus(); return; }
    if (!form.fPrivacy.checked) { err.textContent = T[lang].errPrivacy; form.fPrivacy.focus(); return; }
    err.textContent = "";

    const sel = form.fService;
    const t = T[lang];
    const lines = [
      t.waIntro,
      `${t.waName}: ${name}`,
      `${t.waPhone}: ${phone}`,
      form.fBiz.value.trim() ? `${t.waBiz}: ${form.fBiz.value.trim()}` : null,
      `${t.waService}: ${sel.options[sel.selectedIndex].text}`,
      form.fMsg.value.trim() ? `${t.waMsg}: ${form.fMsg.value.trim()}` : null,
      `${t.waMarketing}: ${form.fMarketing.checked ? t.yes : t.no}`
    ].filter(Boolean);

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;
    const link = document.getElementById("waOpen");
    link.href = url;
    link.textContent = T[lang].waOpen;
    link.hidden = false;
    link.click();
  });

  document.querySelectorAll(".js-wa-link").forEach(a => {
    a.href = `https://wa.me/${WHATSAPP_NUMBER}`;
    a.target = "_blank";
    a.rel = "noopener";
  });
}

// form fields by id for convenience
function bindFormAliases() {
  const f = document.getElementById("quoteForm");
  ["fName", "fPhone", "fBiz", "fService", "fMsg", "fPrivacy", "fMarketing"].forEach(id => { f[id] = document.getElementById(id); });
}

// ===== Init =====
document.getElementById("langBtn").addEventListener("click", () => applyLang(lang === "ar" ? "en" : "ar"));
buildTower();
bindFormAliases();
setupForm();
applyLang(loadLang() === "en" ? "en" : "ar");
setFloor(0);
