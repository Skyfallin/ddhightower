const POST_GRAPHQL_FIELDS = `
  slug
  title
  coverImage {
    url
  }
  date
  author {
    name
    picture {
      url
    }
  }
  excerpt
  content {
    json
    links {
      assets {
        block {
          sys {
            id
          }
          url
          description
        }
      }
    }
  }
`;

async function fetchGraphQL(query: string, preview = false): Promise<any> {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${
          preview
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.CONTENTFUL_ACCESS_TOKEN
        }`,
      },
      body: JSON.stringify({ query }),
      next: { tags: ["posts"] },
    }
  ).then((response) => response.json());
}

// Extract functions for Contenful collections. Abstracted because query fields are the same
function extractCollectionItem(fetchResponse: any, collectionKey: string): any {
  return fetchResponse?.data?.[collectionKey]?.items?.[0];
}

function extractCollectionItems(
  fetchResponse: any,
  collectionKey: string
): any[] {
  return fetchResponse?.data?.[collectionKey]?.items;
}

async function fetchCollection(
  collectionName: string,
  filters: string,
  preview: boolean,
  limit: number
): Promise<any> {
  const query = `query {
    ${collectionName}(where: { ${filters} }, preview: ${
    preview ? "true" : "false"
  }, limit: ${limit}) {
      items {
        ${POST_GRAPHQL_FIELDS}
      }
    }
  }`;
  return fetchGraphQL(query, preview);
}

export async function getPreviewItemBySlug(
  collectionName: string,
  slug: string | null,
  preview: boolean
): Promise<any> {
  const entry = await fetchCollection(
    collectionName,
    `slug: "${slug}"`,
    preview,
    1
  );
  return extractCollectionItem(entry, collectionName);
}

export async function getAllItems(
  collectionName: string,
  isDraftMode: boolean
): Promise<any[]> {
  const entries = await fetchCollection(
    collectionName,
    "slug_exists: true",
    isDraftMode,
    100
  );
  return extractCollectionItems(entries, collectionName);
}

export async function getItemAndMoreItems(
  collectionName: string,
  slug: string,
  preview: boolean
): Promise<any> {
  const entry = await fetchCollection(
    collectionName,
    `slug: "${slug}"`,
    preview,
    1
  );
  const entries = await fetchCollection(
    collectionName,
    `slug_not_in: "${slug}"`,
    preview,
    2
  );
  return {
    post: extractCollectionItem(entry, collectionName),
    morePosts: extractCollectionItems(entries, collectionName),
  };
}

// Blog Post Functions
export const getPreviewBlogPostBySlug = (slug: string | null) =>
  getPreviewItemBySlug("blogPostCollection", slug, true);

export const getAllBlogPosts = (isDraftMode: boolean) =>
  getAllItems("blogPostCollection", isDraftMode);

export const getBlogPostAndMoreBlogPosts = (slug: string, preview: boolean) =>
  getItemAndMoreItems("blogPostCollection", slug, preview);

// Post Functions
export const getPreviewPostBySlug = (slug: string | null) =>
  getPreviewItemBySlug("postCollection", slug, true);

export const getAllPosts = (isDraftMode: boolean) =>
  getAllItems("postCollection", isDraftMode);

export const getPostAndMorePosts = (slug: string, preview: boolean) =>
  getItemAndMoreItems("postCollection", slug, preview);
