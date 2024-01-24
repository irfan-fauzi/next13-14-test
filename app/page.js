import { getDataPost } from "@/utils/getDataApi";
import Card from "./components/CardPost";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default async function Home() {
  const posts = await getDataPost();
  return (
    <>
      <Header />
      <main className="container mx-auto grid-card gap-2 px-2">
        {posts.map((item) => (
          <Card title={item.title} body={item.body} key={item.id} />
        ))}
      </main>
      <Footer />
    </>
  );
}
