import Link from "next/link";
import {notFound} from "next/navigation";
import blogs from "@/../blogs.json";
import {Metadata} from "next";

interface Props {
  params: {
    slug: string;
  };
}

export function generateMetadata(props: Props) {
  const blog = blogs.filter(blog => blog.id === props.params.slug)[0];

  if (blog == null) {
    return notFound();
  }

  return {
    title: blog.title,
  } as Metadata;
}

export default function Blog(props: Props) {
  const blog = blogs.filter(blog => blog.id === props.params.slug)[0];

  if (blog == null) {
    return notFound();
  }

  return (
    <main className="w-full pt-navbar">
      <div className="w-full h-screen flex pt-32">
        <div className="w-full h-full mx-auto flex flex-col max-w-8xl p-6 lg:px-8 gap-2">
          <Link
            href={"/blogs"}
            className="text-sm text-zinc-500 font-medium flex items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
              />
            </svg>
            Go Back
          </Link>

          <h1 className="text-4xl md:text-5xl lg:text-9xl text-white font-extrabold mt-10">
            {blog.title}
          </h1>
          <div className="w-full flex mt-20 md:pr-64">
            <p className="text-white">{blog.content}</p>
          </div>
        </div>
      </div>
    </main>
  );
}
