import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const a=document.querySelector(".feedback-form"),o=a.querySelector('textarea[name="message"]'),r=a.querySelector('input[name="email"]'),t="feedback-form-state";let m={};a.addEventListener("input",n);let e=JSON.parse(localStorage.getItem(t));e&&(r.value=e.email||"",o.value=e.message||"");function n(l){m={email:r.value,message:o.value},localStorage.setItem(t,JSON.stringify(m)),e=JSON.parse(localStorage.getItem(t))}a.addEventListener("submit",l=>{l.preventDefault(),localStorage.removeItem(t),r.value="",o.value="",console.log(e)});
//# sourceMappingURL=commonHelpers2.js.map