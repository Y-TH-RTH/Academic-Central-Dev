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
