import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const r=document.querySelector(".feedback-form"),o=r.querySelector('textarea[name="message"]'),m=r.querySelector('input[name="email"]'),t="feedback-form-state";let a={};r.addEventListener("input",n);let e=JSON.parse(localStorage.getItem(t));e&&(m.value=e.email||"",o.value=e.message||"");function n(l){a={email:m.value.trim(),message:o.value.trim()},localStorage.setItem(t,JSON.stringify(a)),e=JSON.parse(localStorage.getItem(t))}r.addEventListener("submit",l=>{l.preventDefault(),!(!a.email.trim()||!a.message.trim())&&(localStorage.removeItem(t),m.value="",o.value="",console.log(e))});
//# sourceMappingURL=commonHelpers2.js.map
