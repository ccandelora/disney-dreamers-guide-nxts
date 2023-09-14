"use client";

import {
    RedditShareButton,
    RedditIcon,
  } from 'next-share';
import { SocialProps } from "../types/types";

  export default function RedditShare(props: SocialProps) {
    const post  = props.post;
    return (
      <RedditShareButton
        url={"https://www.disneydreamersguide.com/post/" + post.slug}
        title={post.title}
      >
        <RedditIcon size={32} round />
      </RedditShareButton>
    );
  }