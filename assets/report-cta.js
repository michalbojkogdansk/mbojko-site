// Shared end-of-report CTA. Included via <script src="/assets/report-cta.js" defer></script>
// on every bi-weekly report page. Edit the copy/link here to update all reports at once.
(function () {
  var style = document.createElement('style');
  style.textContent =
    '.report-cta{margin-top:2.5rem;padding-top:2rem;border-top:1px solid var(--border)}' +
    '.report-cta p{font-size:14px;color:var(--muted2);line-height:1.7;max-width:520px;margin-bottom:.6rem}' +
    '.report-cta a{font-size:13px;color:var(--yellow);text-decoration:none;font-weight:700;letter-spacing:.02em}' +
    '.report-cta a:hover{text-decoration:underline}' +
    '@media print{.report-cta{display:none}}';
  document.head.appendChild(style);

  var mount = document.querySelector('.article-actions');
  if (!mount) return;

  var topic = encodeURIComponent('Corporate training / workshop');
  var html =
    '<div class="report-cta">' +
    '<p>Looking for analysis like this for your organisation, or a workshop for your team? Get in touch.</p>' +
    '<a href="/contact/?topic=' + topic + '">Contact me &rarr;</a>' +
    '</div>';
  mount.insertAdjacentHTML('beforebegin', html);
})();
