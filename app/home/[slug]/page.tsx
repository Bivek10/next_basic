import React from "react";

export default function SubHome({ params }: { params: { slug: string } }) {
  return <p>Route ID: {params.slug}</p>;
}
