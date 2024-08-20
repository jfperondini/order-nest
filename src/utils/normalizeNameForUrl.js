export function normalizeNameForUrl (name) {
  if (!name) return ''

  let normalized = name.toLowerCase()

  normalized = normalized.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  normalized = normalized.replace(/[^\w\s]/g, '')
  normalized = normalized.replace(/\s+/g, '-')
  

  return normalized
}
