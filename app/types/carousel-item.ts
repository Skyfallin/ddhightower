import { PostItem } from './post-item'

export type CarouselItem = Readonly<{
  /**
   * Data of entries from Contentful collection
   */
  data: PostItem[]
  /**
   * Whether to display pagination dots.
   */
  dots: boolean
  /**
   * Whether the carousel should infinitely loop.
   */
  infinite: boolean
  /**
   * The speed of the animation.
   */
  speed: number
  /**
   * How many slides to display per page.
   */
  slidesToShow: number
  /**
   * How many slides to scroll per page.
   */
  slidesToScroll: number
}>
