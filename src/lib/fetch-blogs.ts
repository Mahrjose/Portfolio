import dotenv from 'dotenv'
// dotenv.config()

const PUBLICATION_ID = process.env.HASHNODE_PUBLICATION_ID
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

/**
 * Fetches blog posts from Hashnode with optional filtering by tag and limit.
 */
export async function fetchBlogPosts({
  limit = 6,
  filterTag,
}: FetchBlogOptions = {}): Promise<BlogPost[]> {
  const query = `
    query GetPosts($id: ObjectId!) {
      publication(id: $id) {
        posts(first: 10) {
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
  `;

  try {
    const response = await fetch(HASHNODE_API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query, variables: { id: PUBLICATION_ID } }),
      cache: "force-cache",
      next: { revalidate: 600 },
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

    // console.log(`[fetchBlogPosts] Retrieved ${filtered.length} posts`);
    // filtered.forEach((post, index) => {
    //   console.log(`- [${index + 1}] ${post.title} (slug: ${post.slug})`);
    // });

    return filtered.slice(0, limit);
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return [];
  }
}
