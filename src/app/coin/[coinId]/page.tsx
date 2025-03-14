// TODO: here we need dynamic generated metadata,
// to be implemented once I've set up the action that will fetch the API data

export default async function TaskDetail({
  params,
}: {
  params: Promise<{ coinId: string }>;
}) {
  const { coinId } = await params;

  return <div className="text-black">This is the {coinId} page</div>;
}
