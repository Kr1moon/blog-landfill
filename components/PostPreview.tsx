import { PostMetadata } from "./PostMetadata";
import Link from "next/link";

const PostPreviews = (props: PostMetadata) => {
return (
    <div className="border border-violet-300 p-4 rounded-md shadow-sm bg-white">
  <Link href={`/posts/${props.slug}`}>
  
  <h2 className="font-semibold text-violet-600 hover:underline mb-4">{props.title}
  </h2>
  </Link>

  <p className="text-sm text-slate-400">{props.date}</p>

  <p className="text-slate-700">{props.subtitle}</p>    
</div>
)
}

export default PostPreviews;