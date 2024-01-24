import { getDataGalery } from "@/utils/getDataApi"
import CardGalery from "../components/CardGalery"
import Image from "next/image"

const Page = async () => {
  const galery = await getDataGalery()
  return (
    <div>
      {
       galery.map(item => (
        <div key={item.id}>
          <p>{item.title}</p>
          <Image src={item.url} width={200} height={200} alt="image"/>
        </div>
       ))
      }
    </div>
  )
}

export default Page