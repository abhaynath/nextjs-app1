import Axios from "axios";
import Link from "next/link";
import Layout from "../components/Layout";

const callApi = async () => {
  console.log("--call api --");
  let resp = await Axios.post("/user");
  console.log("--response : ", resp.data);
};
const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js 👋</h1>
    <button onClick={callApi}>API call</button>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  </Layout>
);

export default IndexPage;
