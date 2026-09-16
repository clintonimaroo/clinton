// TypeScript type definitions

export type TimelineLogo = {
  src: string
  href: string
  /** Company name, used to build the link's accessible label. */
  name: string
}

export type TimelineCase = {
  title: string
  description: string
  href: string
  /** Preview images, shown as a fanned stack. Any number works. */
  shots?: string[]
}

export type ExperienceEntry = {
  id: string
  company: string
  href?: string
  role: string
  description: string
  badge?: string
  logos?: TimelineLogo[]
  cases?: TimelineCase[]
}

export type WorkArt = {
  src: string
  /** Position and size inside the tile, in px at the tile's base scale. */
  left: number
  top: number
  width: number
  height: number
}

export type WorkTile = {
  id: string
  /** Two-digit index shown before the name, e.g. "01". */
  num: string
  name: string
  label: string
  description: string
  href?: string
  art?: WorkArt[]
}
