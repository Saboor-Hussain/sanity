import Image from "next/image";
import { client } from "../../sanity/lib/client";
import { PortableText } from "@portabletext/react";
import { urlForImage } from "../../sanity/lib/image";

async function getData() {
  const data = await client.fetch(
    `*[_type == "products"]`,
    {},
    { cache: "no-store" }
  );
  console.log(data);
  return data;
}

export default async function Home() {
  const products = await getData();
  return (
    <div className="flex gap-2 justify-center items-center h-screen">
      <div className="grid grid-rows-2 p-4 border border-black">
        {products.map((product: any, index: number) => {
          return (
            <div key={index}>
              <div>
                <Image
                  src={urlForImage(product.image).url()}
                  width={80}
                  height={80}
                  alt="image"
                />
              </div>
              <div className="flex">
                <h1>Title: </h1>
                <h1>{product.product_name}</h1>
              </div>
              <div className="flex">
                <h1>price: </h1>
                <h1>{product.price}</h1>
              </div>
              <div>
                <h1>Description: </h1>
                <PortableText value={product.description} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
