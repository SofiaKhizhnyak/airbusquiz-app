"use client";
import Image from "next/image";

function Card({ src, alt, content, imageFirst = false }) {
  return (
    <div className="rounded-xl border-2 border-gray-100 bg-white mt-5">
      <div
        className={`flex justify-center items-center gap-3 p-4 ${
          imageFirst ? "flex-row-reverse" : ""
        }`}
      >
        <Image
          src={src}
          width={96}
          height={96}
          className="size-24 rounded-lg object-cover"
          alt={alt}
        />
        <div>
          <p className="text-sm text-gray-700 limited-lines">{content}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
