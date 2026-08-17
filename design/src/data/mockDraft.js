/**
 * Prototype mock for an in-progress contract draft.
 * Default: draft visible. Toggle demo via URL or HAS_DRAFT constant.
 *
 * Demo URLs:
 *   ?draft=1  — force show draft card
 *   ?draft=0  — force hide draft card
 *   (no param) — uses HAS_DRAFT below
 */
export const HAS_DRAFT = true

export const MOCK_DRAFT = {
  id: 'draft-1',
  title: 'قرارداد اجاره آپارتمان',
  lastEdited: '۱۴۰۴/۰۲/۱۵',
  progressPercent: 60,
  type: 'lease',
}

export function getMockDraft() {
  if (typeof window === 'undefined') {
    return HAS_DRAFT ? MOCK_DRAFT : null
  }

  const draftParam = new URLSearchParams(window.location.search).get('draft')

  if (draftParam === '0' || draftParam === 'false') return null
  if (draftParam === '1' || draftParam === 'true') return MOCK_DRAFT

  return HAS_DRAFT ? MOCK_DRAFT : null
}
