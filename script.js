// ===== Settings: change these before going live =====
const WHATSAPP_NUMBER = "97400000000"; // your WhatsApp number, digits only, with 974

// ===== Text (Arabic + English) =====
const T = {
  ar: {
    skip: "الانتقال إلى المحتوى",
    brand: "القدوة",
    navServices: "خدماتنا", navProcess: "منهجية العمل", navContact: "تواصل معنا",
    ctaQuote: "طلب عرض سعر", ctaServices: "استعراض الخدمات",
    heroTitle: "حلول رقمية ذكية لقطاع الأعمال في قطر",
    heroLead: "تقدّم القدوة حلولًا متكاملة تشمل تطوير المواقع الإلكترونية، والمساعدات الذكية لخدمة العملاء، وأتمتة واتساب للأعمال، وموظف الاستقبال الذكي.",
    towerHint: "اختر أحد الطوابق لاستعراض الخدمة",
    floorWord: "الطابق",
    floorCta: "طلب هذه الخدمة",
    servicesTitle: "خدماتنا",
    servicesLead: "يمكن طلب كل خدمة بشكل مستقل، أو دمج عدة خدمات ضمن حل متكامل يلبي احتياجات منشأتكم.",
    processTitle: "منهجية العمل",
    contactTitle: "تواصل معنا",
    contactLead: "يرجى تعبئة النموذج، وسيتواصل معكم فريقنا عبر واتساب لتقديم عرض سعر مفصّل.",
    labelWhatsapp: "واتساب", labelEmail: "البريد الإلكتروني", labelHours: "ساعات العمل",
    hours: "من الأحد إلى الخميس، من 9:00 صباحًا حتى 6:00 مساءً",
    fName: "الاسم الكامل", fPhone: "رقم الجوال", fBiz: "اسم المنشأة",
    fService: "الخدمة المطلوبة", fMsg: "تفاصيل الطلب",
    fPrivacy: 'أوافق على <a href="privacy.html">سياسة الخصوصية</a>',
    fMarketing: "أوافق على استلام العروض والمستجدات من القدوة (اختياري)",
    fSubmit: "إرسال الطلب",
    notSure: "أحتاج إلى استشارة",
    errName: "يرجى إدخال الاسم الكامل.", errPhone: "يرجى إدخال رقم جوال صحيح.", errPrivacy: "يرجى الموافقة على سياسة الخصوصية للمتابعة.",
    footerTag: "حلول رقمية ذكية للأعمال في دولة قطر.",
    crLabel: "رقم السجل التجاري", licLabel: "رقم رخصة التجارة الإلكترونية",
    linkTerms: "الشروط والأحكام", linkPrivacy: "سياسة الخصوصية",
    linkRefunds: "سياسة الإلغاء والاسترداد", linkComplaints: "تقديم شكوى",
    copyright: "© 2026 القدوة. جميع الحقوق محفوظة. الدوحة، قطر.",
    waIntro: "السلام عليكم، أرغب في الحصول على عرض سعر.",
    waName: "الاسم", waPhone: "رقم الجوال", waBiz: "المنشأة", waService: "الخدمة المطلوبة", waMsg: "التفاصيل",
    waMarketing: "الموافقة على استلام العروض", yes: "نعم", no: "لا",
    langBtn: "English",
    waOpen: "إذا لم يُفتح واتساب تلقائيًا، اضغط هنا"
  },
  en: {
    skip: "Skip to content",
    brand: "Qudwa",
    navServices: "Services", navProcess: "Our Process", navContact: "Contact Us",
    ctaQuote: "Request a Quote", ctaServices: "Explore Our Services",
    heroTitle: "Intelligent Digital Solutions for Businesses in Qatar",
    heroLead: "Qudwa delivers end-to-end digital solutions, including website development, AI customer assistants, WhatsApp Business automation and AI receptionists.",
    towerHint: "Select a floor to view the service",
    floorWord: "Floor",
    floorCta: "Request This Service",
    servicesTitle: "Our Services",
    servicesLead: "Each service is available individually or as part of an integrated solution tailored to your business.",
    processTitle: "Our Process",
    contactTitle: "Contact Us",
    contactLead: "Please complete the form and our team will contact you on WhatsApp with a detailed proposal.",
    labelWhatsapp: "WhatsApp", labelEmail: "Email", labelHours: "Business Hours",
    hours: "Sunday to Thursday, 9:00 AM to 6:00 PM",
    fName: "Full Name", fPhone: "Mobile Number", fBiz: "Company Name",
    fService: "Service Required", fMsg: "Project Details",
    fPrivacy: 'I agree to the <a href="privacy.html">Privacy Policy</a>',
    fMarketing: "I agree to receive offers and updates from Qudwa (optional)",
    fSubmit: "Submit Request",
    notSure: "I need a consultation",
    errName: "Please enter your full name.", errPhone: "Please enter a valid mobile number.", errPrivacy: "Please accept the Privacy Policy to continue.",
    footerTag: "Intelligent digital solutions for businesses in Qatar.",
    crLabel: "Commercial Registration No.", licLabel: "E-Commerce Licence No.",
    linkTerms: "Terms and Conditions", linkPrivacy: "Privacy Policy",
    linkRefunds: "Cancellation and Refund Policy", linkComplaints: "Submit a Complaint",
    copyright: "© 2026 Qudwa. All rights reserved. Doha, Qatar.",
    waIntro: "Hello, I would like to request a quotation.",
    waName: "Name", waPhone: "Mobile", waBiz: "Company", waService: "Service Required", waMsg: "Details",
    waMarketing: "Consent to receive offers", yes: "Yes", no: "No",
    langBtn: "العربية",
    waOpen: "If WhatsApp did not open automatically, click here"
  }
};

// Bottom floor first: websites are the foundation.
const SERVICES = [
  {
    id: "web",
    icon: '<rect x="4" y="6" width="32" height="26" rx="3"/><path d="M4 13h32"/><circle cx="9" cy="9.5" r="1"/><circle cx="13" cy="9.5" r="1"/>',
    ar: { t: "تطوير المواقع الإلكترونية", d: "مواقع احترافية ثنائية اللغة، متوافقة مع جميع الأجهزة، ومرتبطة بنطاق ⁦.qa⁩ خاص بمنشأتكم، بما في ذلك العروض العقارية التفاعلية ثلاثية الأبعاد للمطورين والوسطاء.",
          b: ["تصميم مخصص للهوية التجارية", "عروض عقارية ثلاثية الأبعاد", "إعداد النطاق والاستضافة", "دعم فني بعد الإطلاق"] },
    en: { t: "Website Development", d: "Professional bilingual websites, optimised for every device and hosted on your own .qa domain, including interactive 3D property showcases for developers and brokers.",
          b: ["Custom design aligned with your brand", "Interactive 3D property showcases", "Domain and hosting setup", "Post-launch technical support"] }
  },
  {
    id: "chat",
    icon: '<path d="M6 8h28v18H16l-7 6v-6H6z"/><circle cx="14" cy="17" r="1.3"/><circle cx="20" cy="17" r="1.3"/><circle cx="26" cy="17" r="1.3"/>',
    ar: { t: "المساعد الذكي لخدمة العملاء", d: "مساعد ذكي يجيب عن استفسارات الزوار بدقة استنادًا إلى معلومات منشأتكم، ويسجّل بيانات العملاء المحتملين.",
          b: ["دعم اللغتين العربية والإنجليزية", "إلمام كامل بخدماتكم وأسعاركم", "تحويل العملاء المهتمين إلى فريق المبيعات"] },
    en: { t: "AI Customer Assistant", d: "An AI assistant that answers visitor enquiries accurately using your business information and captures qualified leads.",
          b: ["Arabic and English support", "Trained on your services and pricing", "Qualified leads routed to your sales team"] }
  },
  {
    id: "whatsapp",
    icon: '<path d="M20 5a14 14 0 0 0-12 21l-2 8 8-2A14 14 0 1 0 20 5z"/><path d="M14 20l4 4 8-8"/>',
    ar: { t: "أتمتة واتساب للأعمال", d: "ردود آلية، وقوائم خدمات تفاعلية، وتأكيد الطلبات عبر واتساب، مع إمكانية التحويل إلى أحد الموظفين عند الحاجة.",
          b: ["استجابة فورية على مدار الساعة", "قوائم وأزرار تفاعلية", "تحويل سلس إلى فريق العمل"] },
    en: { t: "WhatsApp Business Automation", d: "Automated responses, interactive service menus and order confirmations on WhatsApp, with seamless escalation to your staff.",
          b: ["24/7 instant response", "Interactive menus and buttons", "Seamless handover to your team"] }
  },
  {
    id: "receptionist",
    icon: '<path d="M8 22v-4a12 12 0 0 1 24 0v4"/><rect x="5" y="21" width="6" height="9" rx="2"/><rect x="29" y="21" width="6" height="9" rx="2"/><path d="M32 30c0 3-3 5-8 5"/>',
    ar: { t: "موظف الاستقبال الذكي", d: "يتولى الرد على المكالمات والرسائل، وجدولة المواعيد، ويزوّدكم بملخص لكل محادثة.",
          b: ["جدولة المواعيد", "الرد على المكالمات", "تقارير يومية"] },
    en: { t: "AI Receptionist", d: "Handles calls and messages, schedules appointments and provides you with a summary of every conversation.",
          b: ["Appointment scheduling", "Call handling", "Daily reports"] }
  }
];

const STEPS = {
  ar: [
    ["الاستشارة", "جلسة استشارية مجانية لفهم متطلبات منشأتكم وأهدافها."],
    ["عرض السعر", "عرض سعر ثابت يتضمن نطاق العمل والجدول الزمني للتسليم."],
    ["التنفيذ والمراجعة", "تنفيذ المشروع على مراحل، مع اطلاعكم على سير العمل واعتماد التعديلات."],
    ["الإطلاق", "ربط النطاق، وإجراء اختبار شامل للأداء، ثم الإطلاق الرسمي."],
    ["الدعم والمتابعة", "دعم فني مستمر وتحديثات دورية بعد الإطلاق."]
  ],
  en: [
    ["Consultation", "A complimentary session to understand your requirements and objectives."],
    ["Proposal", "A fixed-price proposal outlining the scope of work and delivery timeline."],
    ["Development and Review", "Phased development with regular progress updates and review rounds."],
    ["Launch", "Domain configuration, comprehensive quality testing and official go-live."],
    ["Ongoing Support", "Continued technical support and regular updates after launch."]
  ]
};

let lang = "ar";
let activeFloor = 0;

// ===== Storage (safe) =====
function loadLang() { try { return localStorage.getItem("qudwa-lang"); } catch (e) { return null; } }
function saveLang(v) { try { localStorage.setItem("qudwa-lang", v); } catch (e) {} }

// ===== Tower =====
const SVGNS = "http://www.w3.org/2000/svg";
const CX = 200, A = 150, B = 62, H = 70, TOP = 44;

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
  const baseY = TOP + (SERVICES.length - 1) * H + B + H; // center of bottom footprint
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
