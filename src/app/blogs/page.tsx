import Link from "next/link";
import blogs from "@/../blogs.json";
import {Metadata} from "next";

export const metadata: Metadata = {
  title: "Blogs",
};

export default function Blogs() {
  return (
    <main className="w-full pt-navbar">
      <div className="w-full h-screen flex pt-32">
        <div className="w-full h-full mx-auto flex flex-col max-w-8xl p-6 lg:px-8 gap-2">
          <h1 className="text-9xl text-white font-extrabold">Blogs</h1>
          <div className="w-full flex mt-20">
            <div className="container mx-auto px-4 lg:px-0">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {blogs.map(blog => (
                  <Link
                    className="md:col-span-1 lg:col-span-1"
                    key={blog.title}
                    href={`blogs/${blog.id}`}
                  >
                    <div className="bg-zinc-950 border border-zinc-900 shadow p-4 h-60 rounded-xl">
                      <h1 className="text-2xl text-white font-extrabold">
                        {blog.title}
                      </h1>
                      <p className="text-sm pt-2 text-zinc-500">{blog.date}</p>
                      <p className="text-base pt-5 text-zinc-500">
                        {blog.content.substring(
                          0,
                          blog.content.indexOf(".") + 1
                        )}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
