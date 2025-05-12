import type { UniAppQueryBound, UniAppScrollEvent } from '../modelTypes/events'
import type {
  Creation,
  Education,
  Experience,
  Social,
} from '../modelTypes/profile'

export interface Position {
  x: number
  y: number
}

export interface Dimensions {
  w: number
  h: number
}

export enum GridContentType {
  'Social',
  'Photo',
  'Friend',
  'Text',
  'Heading',
  'Creation',
  'Experience',
  'Education',
}

export type SocialGrid = {
  type: GridContentType.Social
} & (
  | {
      isPlaceholder: undefined
      social: Social
    }
  | {
      isPlaceholder: true
      social: Social | undefined
    }
)

export interface CreationGrid extends Creation {
  type: GridContentType.Creation
  isPlaceholder?: true
}

export interface EducationGrid extends Education {
  type: GridContentType.Education
  isPlaceholder?: true
}

export interface ExperienceGrid extends Experience {
  type: GridContentType.Experience
  isPlaceholder?: true
}

export interface PhotoGrid {
  type: GridContentType.Photo
  url: string
  alt?: string
  href?: string
  isPlaceholder?: true
}

export interface FriendGrid {
  type: GridContentType.Friend
  profile_link: string
  alias?: string
  isPlaceholder?: true
}

export interface TextGrid {
  type: GridContentType.Text
  content: string
  level: number
  alignment?: 'left' | 'center' | 'right'
  color?: string
  link?: string
  style?: {
    bold?: boolean
    italic?: boolean
    underline?: boolean
  }
  isPlaceholder?: true
}

export interface HeadingGrid {
  type: GridContentType.Heading
  content: string
  level: number
  isPlaceholder?: true
}

export type GridContent =
  | SocialGrid
  | PhotoGrid
  | FriendGrid
  | TextGrid
  | HeadingGrid
  | CreationGrid
  | EducationGrid
  | ExperienceGrid

export interface GridItem {
  id: string
  content: GridContent
  sizeIndex: number // Index into GRID_SIZES array
  position: Position
}

export type RenderedGridItem = GridItem & {
  renderPosition: Position
  dimensions: Dimensions
}

export interface GridSize {
  w: number
  h: number
}

export enum DragInteractionType {
  Move,
  Resize,
  Delete,
}

export interface DragState {
  isDragging: boolean
  startX: number
  startY: number
  currentX: number
  currentY: number
  itemId: string | null
  type: DragInteractionType | null
  edge: 'corner' | null
  totalDeltaX: number
  totalDeltaY: number
  initialDimensions: Dimensions | null
  tempDimensions: Dimensions | null
  tempPosition: Position | null
  touchStartTime: number
  touchStartPosition: { x: number; y: number } | null
  holdTimer: number | null
}

export enum ExtensionType {
  Creation,
  Education,
  Experience,
  Text,
  Picture,
  Social,
  Heading,
}

export type ParsedSections = { title: string; id: string; items: GridItem[] }[]

type ExtensionMap = { [key in GridContentType]: ExtensionType | null }

export const extensionMap: ExtensionMap = {
  [GridContentType.Text]: ExtensionType.Text,
  [GridContentType.Heading]: ExtensionType.Heading,
  [GridContentType.Photo]: ExtensionType.Picture,
  [GridContentType.Creation]: ExtensionType.Creation,
  [GridContentType.Social]: ExtensionType.Social,
  [GridContentType.Friend]: null,
  [GridContentType.Education]: ExtensionType.Education,
  [GridContentType.Experience]: ExtensionType.Experience,
}

export type FocusItem =
  | 'name'
  | 'description'
  | 'current_doing'
  | 'region'
  | 'role'
  | null

export type TOCController = {
  showTOC: boolean
  showContactSelector: boolean
  prominent: string | undefined
  prominentScrollPosition: number | undefined
  lastScrollingState: UniAppScrollEvent | undefined
  gridWrapperScrollPosition: UniAppQueryBound | undefined
}
