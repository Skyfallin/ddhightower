export const EXAMPLE_PATH = "cms-contentful";
export const CMS_NAME = "Contentful";
export const CMS_URL = "https://www.contentful.com";

/**
 * HOME_PAGE_ENABLED toggles visibility of the home page. Set
 * NEXT_PUBLIC_ENABLE_HOME to 'false' to disable the home page and
 * redirect users to sample chapters instead.
 */
export const HOME_PAGE_ENABLED =
  process.env.NEXT_PUBLIC_ENABLE_HOME !== 'false';
