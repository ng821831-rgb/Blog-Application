


import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getBlogById } from "../api/blogApi";


export default function BlogDetail() {
const { id } = useParams();


const { data, isLoading, isError } = useQuery({
queryKey: ["blog", id],
queryFn: () => getBlogById(id!),
});


if (isLoading) return <p>Loading blog...</p>;
if (isError) return <p>Error loading blog</p>;


return (
<div className="bg-white p-6 rounded shadow">
<Link to="/" className="text-blue-600 underline">Back</Link>
<img src={data.coverImage} className="w-full h-60 object-cover mt-4" />
<h1 className="text-2xl font-bold mt-4">{data.title}</h1>
<p className="text-gray-600 mt-2">{data.content}</p>
</div>
);
}