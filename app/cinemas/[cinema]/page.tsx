export default function Page({ params }: { params: { slug: string } }) {
  if (params) console.log(params);
  return <h1>My Page</h1>;
}
