import { getUser } from "../../_helpers/api";

interface IProps {
    params: {key: number}
}

export default async function Details({params} : IProps) {
    const user = await getUser(params.key);
    return (
      <div>
        <h1>Details</h1>
        <p>{user?.name}</p>
        <p>{user?.age}</p>
        <p>{user?.salary}</p>
      </div>
    );
}