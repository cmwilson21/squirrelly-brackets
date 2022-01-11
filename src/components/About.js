import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export const About = () => {
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "author"]{
      name,
      bio,
      "authorImage": image.asset->url
    }`
      )
      .then((data) => setAuthor(data[0]))
      .catch(console.error);
  }, []);

  if (!author) return <div>Loading...</div>;

  return (
    <div>
      <main className="relative">
        <img
          src="https://images.unsplash.com/photo-1465652044861-81e32c824058?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80"
          alt="path in the woods"
          className="absolute w-full"
        />
        <div className="p-10 lg:pt-48 container mx-auto relative">
          <section
            className=" rounded-lg shadow-2xl lg:flex p-20"
            style={{ backgroundColor: "rgb(236 252 203)" }}
          >
            <img
              src={urlFor(author.authorImage).url()}
              className="rounded w-auto h-32 lg:w-auto lg:h-64 mr-8"
              alt={author.name}
            />
            <div className="text-lg flex flex-col justify-center">
              <h1 className="architects text-6xl text-gray-500 mb-4">
                Hey there, I'm{" "}
                <span className="text-gray-700">{author.name}</span>
              </h1>
              <div className="prose lg:prose-xl text-gray-700">
                <BlockContent
                  blocks={author.bio}
                  projectId="om5lc0pj"
                  dataset="production"
                />
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};
