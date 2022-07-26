import React from "react";
import Head from "next/head";

import IndexPage from "../../components/common/index-page";
import Header from "../../components/common/header";
import Footer from "../../components/common/footer";
import ListPosts from "../../components/list-post";

export default function Blogs({ posts }) {
  return (
    <>
      <IndexPage />

      <Header />
      <ListPosts data={posts} />
      <Footer />
    </>
  );
}

export const getStaticProps = async (context) => {
  const response = await fetch(
    `${process.env.api_wp}/posts?per_page=${100}&_embed`
  );
  const data = await response.json();

  return {
    props: {
      posts: data,
    },
  };
};
