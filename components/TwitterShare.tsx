"use client";
import {
    TwitterShareButton,
    TwitterIcon,
  } from 'next-share'
  import { SocialProps } from "../types/types";

  export default function TwitterShare(props: SocialProps) {
    const post  = props.post;
    return (
      <TwitterShareButton
        url={"https://www.disneydreamersguide.com/post/" + post.slug}
        title={post.title}
      >
        <TwitterIcon size={32} round />
      </TwitterShareButton>
    );
  }