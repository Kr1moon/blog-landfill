import Link from 'next/link';
import getPostMetadata from '@/components/getPostMetadata';
import PostPreviews from '@/components/PostPreview';


const Homepage = () => {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
<PostPreviews key={post.slug} {...post}/>
  ));
  
  return <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>{postPreviews}</div>  
}

export default Homepage;