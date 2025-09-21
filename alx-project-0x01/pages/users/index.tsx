import React from 'react';
import Head from 'next/head';

// The main page to display a list of users.
const UsersPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Users</title>
      </Head>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold">Users Page</h1>
        <p>This is where the users will be listed.</p>
      </div>
    </>
  );
};

export default UsersPage;