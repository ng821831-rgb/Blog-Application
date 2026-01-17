import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createBlog } from "../api/blogApi";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


export default function CreateBlog() {
const navigate = useNavigate();
const queryClient = useQueryClient();


const [form, setForm] = useState({
title: "",
description: "",
content: "",
coverImage: "",
});


const mutation = useMutation({
mutationFn: createBlog,
onSuccess: () => {
queryClient.invalidateQueries({ queryKey: ["blogs"] });
navigate("/");
},
});


const handleSubmit = (e: any) => {
e.preventDefault();
mutation.mutate({
...form,
category: ["TECH"],
date: new Date().toISOString(),
});
};


return (
<form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow">
<h2 className="text-xl font-bold mb-4">Create Blog</h2>
<input
placeholder="Title"
className="border p-2 w-full mb-2"
onChange={(e) => setForm({ ...form, title: e.target.value })}
/>
<input
placeholder="Description"
className="border p-2 w-full mb-2"
onChange={(e) => setForm({ ...form, description: e.target.value })}
/>
<input
placeholder="Cover Image URL"
className="border p-2 w-full mb-2"
onChange={(e) => setForm({ ...form, coverImage: e.target.value })}
/>
<textarea
placeholder="Content"
className="border p-2 w-full mb-2"
rows={5}
onChange={(e) => setForm({ ...form, content: e.target.value })}
/>
<button className="bg-blue-600 text-white px-4 py-2 rounded">
Create
</button>
</form>
);
}