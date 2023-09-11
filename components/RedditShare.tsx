"use client";

import {
    RedditShareButton,
    RedditIcon,
  } from 'next-share';

  export default function RedditShare(props) {
    const post  = props.post;
    return (
      <RedditShareButton
        url={"https://www.disneydreamersguide.com/post/" + post.slug}
        quote={"next-share is a social share buttons for your next React apps."}
        hashtag={"#disneydreamersguide"}
        title={post.title}
        description={post.description}
        image={"https://cdn.disneydreamersguide.com/uploads/" + post.fileName}
      >
        <RedditIcon size={32} round />
      </RedditShareButton>
    );
  }