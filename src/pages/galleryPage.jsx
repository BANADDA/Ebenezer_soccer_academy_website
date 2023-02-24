import React from "react";
import styled from "./home.module.css";
import { Footer } from "@/widgets/layout";

import {
  Typography,
} from "@material-tailwind/react";
import GalleryImages from "@/widgets/layout/gallery";

export function galleryPage() {
  return (
    <>
      <div className="relative flex h-fit content-center items-center justify-center bg-blue-200 bg-cover bg-fixed pt-16 pb-32">
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center pt-10">
            <div className="opacity-300 ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography
                variant="h1"
                color="black"
                className="mb-6 text-6xl font-black"
              >
                Our <span className={styled["home-span"]}> Gallery.</span>
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <section className="px-10 pb-0 mb-0 pt-3 bg-gray-200">
        <GalleryImages/>
      </section>
      <div id="contact-us" className=" bg-black">
        <Footer />
      </div>
    </>
  );
}

export default galleryPage;
