"use client";

import { useState } from "react";
import Image from "next/image";
import Modal from "./modal";

const RoundedImage = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Image
        alt={props.alt}
        className="rounded-lg cursor-pointer"
        {...props}
        onClick={handleImageClick}
      />

      {isModalOpen && (
        <Modal
          src={props.src}
          alt={props.alt}
          onClose={handleCloseModal}
          isModalOpen={isModalOpen}
        />
      )}
    </>
  );
};

export default RoundedImage;
