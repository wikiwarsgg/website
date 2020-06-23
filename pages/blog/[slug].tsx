import React from "react";
import Link from "next/link";
import { ArticleJsonLd, NextSeo } from "next-seo";
import format from "date-fns/format";
import hl from "highlight.js";
import marked from "marked";

import { getPosts } from "../../utils/posts";
import { ROOT_URL } from "../../next-seo.config";

type PostProps = {
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  html: string;
};

export const getStaticPaths = () => ({
  paths: getPosts().map((p) => `/blog/${p.slug}`),
  fallback: false,
});

export function getStaticProps({
  params,
}: {
  params: { slug: string };
}): { props: PostProps } {
  const { slug } = params;

  const post = getPosts().find((p) => p.slug === slug)!;
  const { title, date, author, excerpt, content } = post;
  return {
    props: {
      slug,
      title,
      date,
      author,
      excerpt,
      html: marked(content, {
        highlight: function (code, lang) {
          return hl.highlight(lang, code).value;
        },
      }),
    },
  };
}

export default function Post(props: PostProps) {
  const { slug, title, excerpt, author, date, html } = props;
  return (
    <main className="page-content" aria-label="Content">
      <div className="wrapper">
        <article className="post h-entry">
          <header className="post-header">
            <NextSeo title={title} />
            <ArticleJsonLd
              url={`${ROOT_URL}/blog/${slug}`}
              title={title}
              images={[]}
              datePublished={date}
              dateModified={date}
              authorName={author}
              publisherName="Lourd"
              publisherLogo="https://www.example.com/photos/logo.jpg"
              description={excerpt}
            />
            <Link href="/">
              <a>&laquo; Back</a>
            </Link>
            <h1 className="post-title p-name" itemProp="name headline">
              {title}
            </h1>
            <p className="post-meta">
              <time
                className="dt-published"
                dateTime={date}
                itemProp="datePublished"
              >
                {format(new Date(date), "MMM d, yyyy")}
              </time>
            </p>
          </header>

          <div
            className="post-content e-content"
            itemProp="articleBody"
            dangerouslySetInnerHTML={{ __html: html }}
          ></div>

          <a className="u-url" href={`/blog/${slug}`} hidden></a>

          <footer className="site-footer">
            <Link href="/">
              <a>&laquo; Back</a>
            </Link>
          </footer>
        </article>
      </div>
    </main>
  );
}
