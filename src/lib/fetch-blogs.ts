const HASHNODE_API = "https://gql.hashnode.com/";

export type BlogPost = {
  title: string;
  brief: string;
  slug: string;
  url: string;
  readTimeInMinutes: number;
  publishedAt: string;
  tags: { name: string }[];
  coverImage?: {
    url?: string;
  } | null;
};

type FetchBlogOptions = {
  limit?: number;
  filterTag?: string;
};

// Define alternate GraphQL queries to rotate and break CDN cache
const queries = [
  `
  query PublicationA {
    publication(host: "blog.mahrabhossain.me") {
      posts(first: 20) {
        edges {
          node {
            title
            brief
            slug
            url
            readTimeInMinutes
            publishedAt
            tags {
              name
            }
            coverImage {
              url
            }
          }
        }
      }
    }
  }
  `,
  `
  query PublicationB {
    publication(host: "blog.mahrabhossain.me") {
      title
      posts(first: 20) {
        edges {
          node {
            title
            brief
            slug
            url
            readTimeInMinutes
            publishedAt
            tags {
              name
            }
            coverImage {
              url
            }
          }
        }
      }
    }
  }
  `,
];

// Local counter to rotate queries (will reset between builds)
let lastUsedIndex = 0;

/**
 * Fetches blog posts from Hashnode using a rotating query to bypass CDN cache.
 * Fully compatible with ISR/static generation on Vercel.
 */
export async function fetchBlogPosts({
  limit = 6,
  filterTag,
}: FetchBlogOptions = {}): Promise<BlogPost[]> {
  const query = queries[lastUsedIndex];
  lastUsedIndex = (lastUsedIndex + 1) % queries.length;

  try {
    const response = await fetch(HASHNODE_API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query }),
      next: { revalidate: 600 }, //  ISR
    });

    if (!response.ok) {
      console.error(`Hashnode API error: ${response.status} ${response.statusText}`);
      return [];
    }

    const data = await response.json();

    const posts: BlogPost[] = data?.data?.publication?.posts?.edges?.map(
      (edge: { node: BlogPost }) => edge.node
    ) || [];

    const filtered = filterTag
      ? posts.filter(post =>
          post.tags.some(tag => tag.name.toLowerCase() === filterTag.toLowerCase())
        )
      : posts;

    return filtered.slice(0, limit);
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return [];
  }
}
