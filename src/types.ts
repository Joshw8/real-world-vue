export interface EventItem {
  id: number
  category: string
  title: string
  description: string
  location: string
  date: string
  time: string
  petsAllowed: boolean
  organizer: string
}
export interface NewEventItem {
  category: string
  title: string
  description: string
  location: string
  pets: number
  extras: {
    catering: boolean,
    music: boolean
  }
}
