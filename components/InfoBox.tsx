import Link from "next/link";
import { ReactNode } from "react";

interface Props {
  backgroundColor: string;
  heading: string;
  buttonInfo: { text: string; link: string; backgroundColor: string };
  children: ReactNode;
}

function InfoBox({ backgroundColor, heading, buttonInfo, children }: Props) {
  return (
    <div className={`${backgroundColor} rounded-lg bg-blue-100  p-6 shadow-md`}>
      <h2 className="text-2xl font-bold text-gray-800">{heading}</h2>
      <p className="mb-4 mt-2 text-gray-800">{children}</p>
      <Link
        href={buttonInfo.link}
        className={`${buttonInfo.backgroundColor} inline-block rounded-lg  px-4 py-2 text-white `}
      >
        {buttonInfo.text}
      </Link>
    </div>
  );
}

export default InfoBox;
