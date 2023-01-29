import Link from "next/link";
import Layout from "../components/Layout";

function error() {
  return (
    <Layout title="Page not found">
      <h2 className="text-3xl font-bold">404 - Page Not Found </h2>
      <p className="text-slate-400 mt-3">Why this happen?</p>
      <p className="text-slate-400">
        Maybe you spelled url wrong, please check the url.
      </p>
      <Link
        href="/"
        className="font-bold p-3 bg-gray-700 rounded-md inline-block mt-5"
      >
        Back to home
      </Link>
    </Layout>
  );
}

export default error;
