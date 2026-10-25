/* ==========================================================================
   Academic Central — shared sitewide tooltip ("i" icon) helper.
   Include this file on every page, then call addInfoTips({ id: "text" }).
   Hover/focus on the little "i" shows a description bubble; it disappears
   the instant the cursor leaves, since it's driven by plain CSS :hover
   (see the "Info tooltips" section of style.css) — no JS needed for that
   part, which also means it can never get "stuck" open.
   ========================================================================== */

function makeInfoIcon(text, corner) {
  const icon = document.createElement('span');
  icon.className = 'info-icon' + (corner ? ' corner' : '');
  icon.setAttribute('data-tip', text);
  icon.setAttribute('tabindex', '0');
  icon.setAttribute('role', 'note');
  icon.setAttribute('aria-label', text);
  icon.textContent = 'i';
  return icon;
}

/**
 * addInfoTips({ elementId: "explanation", ... })
 * For each id:
 *  - If the element is a <button> or an <a class="btn">, the icon is pinned
 *    to its top-right corner (so it never disturbs the button's label).
 *  - Otherwise (text/password/number/date inputs, selects, textareas), the
 *    icon is appended right after the associated <label for="id">, or after
 *    the element itself if no such label exists.
 * Safe to call with ids that don't exist on the current page (they're
 * just skipped), so the same descriptions object can be reused loosely.
 */
function addInfoTips(map) {
  Object.entries(map).forEach(([id, text]) => {
    const el = document.getElementById(id);
    if (!el) return;
    if (el.tagName === 'BUTTON' || (el.tagName === 'A' && el.classList.contains('btn'))) {
      if (!el.style.position) el.style.position = 'relative';
      el.appendChild(makeInfoIcon(text, true));
      return;
    }
    let label = document.querySelector(`label[for="${id}"]`);
    if (!label) label = el.closest('label');
    if (label) {
      label.appendChild(makeInfoIcon(text, false));
    } else if (el.parentNode) {
      el.insertAdjacentElement('afterend', makeInfoIcon(text, false));
    }
  });
}
