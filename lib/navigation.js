const isValidAnchor = (value) => /^[a-zA-Z0-9_-]+$/.test(value)

export const LAST_PATH_KEY = 'bw:lastPath'
export const PREVIOUS_PATH_KEY = 'bw:previousPath'

export const buildHomeHref = (searchParams) => {
  const rawFrom = searchParams?.from
  const from = Array.isArray(rawFrom) ? rawFrom[0] : rawFrom
  if (typeof from !== 'string') return '/'
  const trimmed = from.trim()
  if (!trimmed || !isValidAnchor(trimmed)) return '/'
  const encoded = encodeURIComponent(trimmed)
  return `/?from=${encoded}#${encoded}`
}
