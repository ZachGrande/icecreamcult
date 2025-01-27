import Image from "next/image";

export default function Biography() {

  return (
    <>
      <p className="text-center">Ice Cream Cult (often stylized as Icecreamcult) is the solo musical project of DJ/Producer/Multi-instrumentalist Riley Adair. Icecreamcult is inspired by late night bumps and jams made by artists like Flying Lotus, Robohands, Nujabes, Madlib and Daft Punk.</p>

      <Image
        className="mx-auto"
        src="/water.jpg"
        alt="Standing near water"
        width={200}
        height={200}
      />

      <p className="text-center">Icecreamcult was created in 2017 when Adair heard a comment from his partner about them both eating excessive ice cream and having matching necklaces. Adair would spend many nights up in his rudimentary home studio and eventually friends encouraged him to officially release his works.</p>

      <p className="text-center">Icecreamcult has played around the Pacific Northwest with shows that blend DJing, solo piano and remixed works all together. He has officially released a ridiculous amount of music, including 8 albums, 2 EPs and 19 singles and even more unofficial releases on websites like Soundcloud and Bandcamp.</p>

      <p className="text-center mx-auto">His newest project, currently titled &quot;Sunset Hills&quot; is set to release Summer 2025.</p>
    </>
  );
}