import { nanoid } from 'nanoid'
export * from './BoundsUtils'
export * from './PointUtils'
export * from './KeyUtils'
export * from './GeomUtils'

export function uniqueId() {
  return nanoid()
}