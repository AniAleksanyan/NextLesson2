import { getUsers } from "../_helpers/api";

export default async function Books() {
  const List = await getUsers();
  return (
    <div>
      <h1>Books</h1>
    </div>
  );
}
