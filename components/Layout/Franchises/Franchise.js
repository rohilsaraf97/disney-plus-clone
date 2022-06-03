import React from "react";
import Link from "next/link";
import Image from "next/image";

const Franchise = ({ franchiseInfo }) => {
  return (
    <>
      {franchiseInfo && (
        <a href={franchiseInfo.href}>
          <div className="franchise" id={franchiseInfo.id}>
            <Image src={franchiseInfo.logo} />
          </div>
        </a>
      )}
    </>
  );
};

export default Franchise;
