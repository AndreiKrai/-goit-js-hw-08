const e=document.querySelector(".feedback-form");e.addEventListener("input",(function(e){t[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(t))})),e.addEventListener("submit",(function(e){e.preventDefault(),localStorage.removeItem("feedback-form-state"),e.currentTarget.reset()})),window.addEventListener("load",(function(t){const n=localStorage.getItem("feedback-form-state");if(!n)return;const o=JSON.parse(n);console.log(o);for(const t in o)e.elements[t].value=o[t]}));let t={};
//# sourceMappingURL=03-feedback.65ce3229.js.map