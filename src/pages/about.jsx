import React from "react";
import styled from "./home.module.css";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
} from "@material-tailwind/react";
import { UsersIcon } from "@heroicons/react/24/solid";
import { PageTitle, Footer } from "@/widgets/layout";
import { FeatureCard, TeamCard } from "@/widgets/cards";
import { featuresData, teamData, contactData } from "@/data";

export function About() {
  return (
    <>
      <div className="relative flex h-fit bg-cover content-center items-center justify-center bg-[url('/img/field.png')] pt-16 pb-32 ">
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center pt-10">
            <div className="opacity-300 ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography
                variant="h1"
                color="black"
                className="mb-6 font-black text-6xl"
              >
                ABOUT <span className={styled["home-span"]}>US.</span>
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <section className="-mt-32 bg-gray-200 px-4 pb-20 pt-20">
        <div className="container mx-auto">
          <div
            id="about-us"
            className="mt-32 flex flex-wrap items-center pb-20"
          >
            <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-red-600 p-3 text-center shadow-lg">
                <UsersIcon className="h-6 w-6 text-white" />
              </div>
              <Typography
                variant="h2"
                className=" mb-3 text-4xl font-bold"
                color="blue-gray"
              >
                ABOUT <span className={styled["home-span"]}>US</span>
              </Typography>
              <Typography className="mb-8 font-semibold text-blue-gray-700">
                Ebenezer Soccer Academy was born in 2017 out of a desire to
                unite and empower the youth in the Musita community, located in
                the Mayuge District. A collaborative effort by Ebenezer
                Community Hospital, the academy was founded with the aim of
                mobilizing young talent, raising health awareness, and providing
                youth counseling and career guidance.
                <br />
                <br />
                At Ebenezer Soccer Academy, we believe that soccer is more than
                just a game - it's a vehicle for positive change. We seek to
                create a community of young people who are not just skilled
                soccer players but also compassionate and socially responsible
                leaders. With a focus on health, education, and career
                development, we aim to build a new generation of champions who
                will succeed both on and off the field. Join us on this journey
                to inspire, empower, and transform the lives of young people in
                the Musita community and beyond.
              </Typography>
              <a href="/contact">
              <Button
                variant="outlined"
                className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white focus:ring-gray-200"
              >
                Join Team
              </Button>
              </a>
            </div>
            <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-5/12 lg:mt-0">
              <Card className="shadow-gray-1000/10 shadow-lg">
                <CardHeader className="relative h-56">
                  <img
                    alt="Card Image"
                    src="/img/team1.png"
                    className=" h-30 w-full"
                  />
                </CardHeader>
                <CardBody>
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="mb-3 font-bold"
                  >
                    Top <span className={styled["home-span"]}>Talent</span>{" "}
                    Development
                  </Typography>
                  <Typography className="font-sans font-bold text-blue-gray-800">
                    At Ebenezer Soccer Academy, we are committed to developing
                    the top talent of our young athletes. Through our rigorous
                    training programs and individualized coaching, we strive to
                    ensure that our most gifted players receive the support they
                    need to become true champions both on and off the field.
                  </Typography>
                  <a href="/galleryPage">
                    <Button
                      variant="text"
                      className="text-red-500 hover:bg-red-500/10 active:bg-red-500/30"
                    >
                      View Gallery
                    </Button>
                  </a>
                </CardBody>
              </Card>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map(({ color, title, icon, description }) => (
              <FeatureCard
                key={title}
                color={color}
                title={title}
                icon={React.createElement(icon, {
                  className: "w-5 h-5 text-white",
                })}
                description={description}
              />
            ))}
          </div>
        </div>
      </section>
      <div id="contact-us" className=" bg-black">
        <Footer />
      </div>
    </>
  );
}

export default About;