import React from "react";

export default function Post({ post }) {
  return <div>Post</div>;
}

export async function getStaticPaths() {
  // get data return array and then mapping to paths
  return {
    paths: [{ params: { id: "1" } }, { params: { id: "2" } }],
    fallback: false // can also be true or 'blocking'
  };
}

export async function getStaticProps({ params }) {
  console.log("params", params);
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  // const res = await fetch(`https://.../posts/${params.id}`)
  // const post = await res.json()

  // Pass post data to the page via props
  return { props: {} };
}
