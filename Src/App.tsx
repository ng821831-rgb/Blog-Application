import BlogDetail from "./components/BlogDetail";
import CreateBlog from "./components/CreateBlog";


export default function App() {
return (
<div className="min-h-screen bg-gray-100 p-6">
<h1 className="text-2xl font-bold mb-4">CA Monk Blog App</h1>
<Routes>
<Route path="/" element={<BlogList />} />
<Route path="/blogs/:id" element={<BlogDetail />} />
<Route path="/create" element={<CreateBlog />} />
</Routes>
</div>
);
}