import format from "date-fns/format";
import Link from "next/link";
import React from "react";
import { BlogPost, getPosts } from "../../utils/posts";
import { SITE_NAME } from "../../next-seo.config";

export const getStaticProps = async () => {
  const sortedPosts = getPosts().sort((a, b) => a.date.localeCompare(b.date));
  return { props: { posts: sortedPosts } };
};

const Blog = ({ posts }: { posts: BlogPost[] }) => {
  return (
    <main className="page-content" aria-label="Content">
      <div className="wrapper">
        <div className="home">
          <h1 className="page-heading">{SITE_NAME}</h1>
          <h2 className="post-list-heading">Posts</h2>
          <ul className="post-list">
            {posts.map((post) => (
              <li key={post.slug}>
                <span className="post-meta">
                  {format(new Date(post.date), "MMM d, yyyy")}
                </span>
                <h3>
                  <Link href="/blog/[slug]" as={`/blog/${post.slug}`}>
                    <a className="post-link">{post.title}</a>
                  </Link>
                </h3>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Blog;
