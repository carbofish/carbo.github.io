function homePageHandler(){const{post_datetime:e,post_datetime_format:t,announcement:o}=KEEP.theme_config?.home||{},n=KEEP.theme_config?.first_screen||{};(()=>{if("updated"===e&&t){document.querySelectorAll(".post-meta-info .home-post-history").forEach((e=>{const o=new Date(e.dataset.updated).getTime(),n=t||KEEP.themeInfo.defaultDatetimeFormat;e.innerHTML=KEEP.utils.formatDatetime(n,o)}))}})(),(()=>{if(t&&"ago"!==t)return;document.querySelectorAll(".post-meta-info .home-post-history").forEach((e=>{const t=Date.now(),o=new Date(e.dataset.updated).getTime();e.innerHTML=KEEP.utils.getHowLongAgo(Math.floor((t-o)/1e3))}))})(),(()=>{if(o){const e=document.querySelector(".home-content-container .website-announcement");if(e){e.querySelector(".close").addEventListener("click",(()=>{e.style.display="none"}))}}})(),(()=>{const e=!0===n?.hitokoto;if(!0!==n?.enable)return;if(!0===n?.enable&&!e&&!n?.description)return;const t=document.querySelector(".first-screen-content .description");t&&(t.style.opacity="0",setTimeout((()=>{t.style.opacity="1";t.querySelectorAll(".desc-item").forEach((e=>{const t=e.querySelector(".desc"),o=e.querySelector(".cursor"),n=t.innerHTML;t.innerHTML="";let r=0;if(n){const e=()=>{r<n.length?(t.textContent+=n.charAt(r),r++,setTimeout(e,100)):o.style.display="none"};e()}}))}),e?400:300))})()}!0===KEEP.theme_config?.pjax?.enable&&KEEP.utils?homePageHandler():window.addEventListener("DOMContentLoaded",homePageHandler);