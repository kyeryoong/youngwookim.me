import ReadPageSSRWrapper from '@/components/Pages/Post/ReadPageSSRWrapper';

interface Params {
  id: string;
}

const ReadPostPage = ({ params }: { params: Params }) => {
  return <ReadPageSSRWrapper _id={params.id} />;
};

export default ReadPostPage;
