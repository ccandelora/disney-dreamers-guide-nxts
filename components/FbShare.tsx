"use client";
import { FacebookShareButton, FacebookIcon } from "next-share";
import { SocialProps } from "../types/types";

export default function FbShare(props: SocialProps) {
  const post  = props.post;
  return (
    <FacebookShareButton
      url={"https://www.disneydreamersguide.com/post/" + post.slug}
      quote={ post.title}
      hashtag={"#disneydreamersguide"}
    >
      <FacebookIcon size={32} round />
    </FacebookShareButton>
  );
}
