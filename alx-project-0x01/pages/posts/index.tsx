import React from 'react';
import Head from 'next/head';
import Header from "@/components/layout/Header";

// The main page to display a list of posts.
const PostsPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Posts</title>
      </Head>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold">Posts Page</h1>
        <p>This is where the posts will be listed.</p>
      </div>
    </>
  );
};

export default PostsPage;
