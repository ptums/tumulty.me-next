import { GTAG_TRACKING } from './constants'

export const pageview = (url) => {
  window.gtag('config', GTAG_TRACKING, {
    page_path: url,
  })
}
