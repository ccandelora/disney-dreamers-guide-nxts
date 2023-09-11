"use client";
import {
    TwitterShareButton,
    TwitterIcon,
  } from 'next-share'

  export default function TwitterShare(props) {
    const post  = props.post;
    return (
      <TwitterShareButton
        url={"https://www.disneydreamersguide.com/post/" + post.slug}
        quote={"next-share is a social share buttons for your next React apps."}
        hashtag={"#disneydreamersguide"}
        title={post.title}
        description={post.description}
        image={"https://cdn.disneydreamersguide.com/uploads/" + post.fileName}
      >
        <TwitterIcon size={32} round />
      </TwitterShareButton>
    );
  }