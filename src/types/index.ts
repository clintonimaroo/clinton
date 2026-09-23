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

/** A box inside a card, in px at the 450px design width. */
export type WorkBox = {
  left: number
  top: number
  width: number
  height: number
}

export type WorkVideo = WorkBox & {
  src: string
  /** Still shown before the clip plays, and if it fails to load. */
  poster?: string
}

/** A piece of artwork placed inside a card, in the same design space. */
export type WorkImage = WorkBox & {
  /** Path under /public. */
  src: string
}

export type WorkCard = {
  id: string
  /** Column the card keeps while nothing is filtered: 0, 1 or 2. */
  column: number
  /** Row in that column, which also orders the cards down the page. */
  row: number
  /** Height in px at the design width. Defaults to the shared card height. */
  height?: number
  /** Two-digit index shown before the name; omit to print the name alone. */
  num?: string
  /** Omit on a slot that has no work in it yet, leaving the number and label. */
  name?: string
  label: string
  /** Extra filter tags beyond the printed label. */
  tags?: string[]
  background: string
  /** Hairline colour, or false for the handful of cards that carry none. */
  border?: string | false
  /** Light caption ink, for artwork that fills the card with dark. */
  dark?: boolean
  /** Softens the light caption ink where the artwork underneath is busy. */
  cap70?: boolean
  /** Artwork inside the card, drawn in the order given. */
  art?: WorkImage[]
  /** Shown in place of the artwork while the pointer is on the card. */
  hover?: WorkImage
  /** A clip that runs in place of the artwork while the pointer is on the card. */
  hoverClip?: WorkVideo
  /** A link bar across the top of the card, for work that has a paper to read. */
  study?: {
    label: string
    href: string
    /** Mark shown at the left of the bar, as a path under /public. */
    logo?: string
    /** Its width in design px; the height follows the image. */
    logoWidth?: number
  }
  video?: WorkVideo
  /** Where a plain caption sits. Ignored when the card carries a block. */
  caption?: 'top' | 'bottom'
  /** Feature cards: description and link stacked under the caption. */
  block?: {
    description: string
    /** The part you played and when, printed under the description. */
    role?: string
    /** Turns the first run of this text in the description into a link. */
    descLink?: { text: string; href: string }
    /** The placing sentence within the description; a trophy sits before it. */
    award?: string
    link: string
    href: string
    /** A second, locked action shown beside the link, for work not yet written up. */
    locked?: string
  }
}
