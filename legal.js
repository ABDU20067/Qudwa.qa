// Language switch + WhatsApp links for the legal pages (shares the main site's saved language)
const WHATSAPP_NUMBER = "97455897286";

function getLang() { try { return localStorage.getItem("qudwa-lang") === "en" ? "en" : "ar"; } catch (e) { return "ar"; } }
function setLang(l) {
  try { localStorage.setItem("qudwa-lang", l); } catch (e) {}
  document.documentElement.lang = l;
  document.documentElement.dir = l === "ar" ? "rtl" : "ltr";
  document.querySelectorAll(".lang-block").forEach(b => { b.hidden = b.dataset.lang !== l; });
  document.title = document.body.dataset["title" + (l === "ar" ? "Ar" : "En")];
}

document.querySelectorAll(".js-lang").forEach(b => b.addEventListener("click", () => setLang(getLang() === "ar" ? "en" : "ar")));
document.querySelectorAll(".js-wa-link").forEach(a => { a.href = `https://wa.me/${WHATSAPP_NUMBER}`; a.target = "_blank"; a.rel = "noopener"; });

const ERR = {
  ar: { name: "يرجى إدخال الاسم الكامل.", phone: "يرجى إدخال رقم جوال صحيح.", msg: "يرجى كتابة تفاصيل الشكوى.", intro: "السلام عليكم، أرغب في تقديم شكوى." ,
        f: ["الاسم", "رقم الجوال", "المشروع", "نوع الشكوى", "التفاصيل"] },
  en: { name: "Please enter your full name.", phone: "Please enter a valid mobile number.", msg: "Please describe your complaint.", intro: "Hello, I would like to submit a complaint.",
        f: ["Name", "Mobile", "Project", "Complaint type", "Details"] }
};

document.querySelectorAll(".complaint-form").forEach(form => {
  const l = form.closest(".lang-block").dataset.lang;
  const err = form.querySelector(".form-error");
  form.addEventListener("submit", e => {
    e.preventDefault();
    const v = n => form.elements[n].value.trim();
    form.querySelectorAll("[aria-invalid]").forEach(x => x.removeAttribute("aria-invalid"));
    const bad = (n, m) => { err.textContent = ERR[l][m]; form.elements[n].setAttribute("aria-invalid", "true"); form.elements[n].focus(); };
    if (!v("name")) return bad("name", "name");
    if (v("phone").replace(/\D/g, "").length < 8) return bad("phone", "phone");
    if (!v("message")) return bad("message", "msg");
    err.textContent = "";
    const f = ERR[l].f;
    const lines = [ERR[l].intro, `${f[0]}: ${v("name")}`, `${f[1]}: ${v("phone")}`,
      v("project") ? `${f[2]}: ${v("project")}` : null, `${f[3]}: ${v("type")}`, `${f[4]}: ${v("message")}`].filter(Boolean);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`, "_blank", "noopener");
  });
});

setLang(getLang());
