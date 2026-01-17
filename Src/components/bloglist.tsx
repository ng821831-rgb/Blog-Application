import { useQuery } from "@tanstack/react-query";
import { getBlogs } from "../api/blogApi";
import { Link } from "react-router-dom";


export default function BlogList() {
const { data, isLoading, isError } = useQuery({
queryKey: ["blogs"],
queryFn: getBlogs,
});


if (isLoading) return <p>Loading blogs...</p>;
if (isError) return <p>Error loading blogs</p>;


return (
<div className="grid gap-4">
<Link to="/create" className="text-blue-600 underline">
+ Create New Blog
</Link>
{data.map((blog: any) => (
<Link
to={`/blogs/${blog.id}`}
key={blog.id}
className="bg-white p-4 rounded shadow"
>
<h2 className="font-semibold text-lg">{blog.title}</h2>
<p className="text-sm text-gray-600">{blog.description}</p>
</Link>
))}
</div>
);
}