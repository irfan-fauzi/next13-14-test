import { getDataGalery } from "@/utils/getDataApi";

import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Page = async () => {
  const galery = await getDataGalery();
  return (
    <>
      <Header />
      <div className="container mx-auto">
        <div className="grid-card gap-5">
          {galery.map((item) => (
            <div
              key={item.id}
              className="bg-orange-300 flex items-center justify-center flex-col rounded-xl py-10"
            >
              <Image src={item.url} width={200} height={200} alt="image" />
              <p className="text-center mt-5">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Page;
