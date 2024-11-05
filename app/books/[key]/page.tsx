import { getUser } from "../../_helpers/api";


interface IProps {
    params: {key: number}
}

export default async function Details({params} : IProps) {
    console.log("AAAAAA", params.key);
    const user = await getUser(params.key);

    return (
      <div>
        <h1>Details</h1>
        <p>{user[0].name}</p>
        <p>{user[0].age}</p>
        <p>{user[0].salary}</p>
      </div>
    );
}