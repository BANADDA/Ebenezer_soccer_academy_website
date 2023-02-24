import React from "react";
import styled from "./home.module.css";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
  IconButton,
  Input,
  Textarea,
} from "@material-tailwind/react";
import { UsersIcon } from "@heroicons/react/24/solid";
import { PageTitle, Footer } from "@/widgets/layout";
import { FeatureCard, TeamCard } from "@/widgets/cards";
import { featuresData, teamData, contactData } from "@/data";
import Carousel from "@/widgets/Carousel";
import ProgramCard from "@/widgets/cards/ProgramCard";

export function Programs() {
  return (
    <>
      <div className="relative flex h-fit content-center items-center justify-center bg-[url('/img/clouds.png')] bg-cover bg-fixed pt-16 pb-32">
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center pt-10">
            <div className="opacity-300 ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography
                variant="h1"
                color="black"
                className="mb-6 text-6xl font-black"
              >
                Football <span className={styled["home-span"]}> Teams</span>{" "}
                Programs.
              </Typography>
              <a href="/contact">
                <Button
                  variant="outlined"
                  className="border-red-600  bg-red-500 text-white"
                >
                  Contact Us
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <section className="bg-gray-100 px-4 pt-20 pb-20">
        <div class="mb-10 ml-10 mr-10 flex flex-col rounded-xl bg-red-500 bg-clip-border shadow-none">
          <div class="flex">
            <div class="w-1/3">
              <img
                class="rounded-l-lg object-cover w-full h-full"
                src="/img/toto.png"
                alt="card image"
              />
            </div>
            <div className="text-secondary w-2/3 flex-1 p-6">
              <span className="font-bold uppercase text-white">
                Under 8 - Under 12 Training
              </span>
              <a href="#">
                <h3 className="mt-4 text-white">Developing the Future Stars</h3>
              </a>
              <p className="mb-5 text-white opacity-80">
                The program is designed to develop the fundamental skills of
                young players in a fun and interactive environment, with a focus
                on building confidence and a love for the game. The program is
                led by experienced and licensed coaches, and includes drills and
                exercises that aim to improve ball control, passing, dribbling,
                shooting, and other essential aspects of soccer. The training is
                open to boys and girls, and provides a great opportunity for
                young players to develop their talent and enjoy the game of
                soccer.
              </p>
            </div>
          </div>
        </div>
        <div className="mb-10 ml-10 mr-10 flex flex-col rounded-xl bg-red-500 bg-clip-border shadow-none">
          <div className="flex">
            <div className="w-1/3">
              <img class="rounded-l-lg object-cover w-full h-full" src="/img/5.png" alt="card image" />
            </div>
            <div class="text-secondary w-2/3 flex-1 p-6">
              <span class="font-bold uppercase text-white">
                Under 16 - senior team Training
              </span>
              <a href="#">
                <h3 className="mt-4 text-white">
                  Train like the pros with our Under 16 - Senior Team Training
                  Program
                </h3>
              </a>
              <p class="mb-5 text-white opacity-80">
                This program is designed to provide advanced training and
                coaching to players aged 16 and up, with the aim of preparing
                them for competitive play at the highest levels. The training
                includes both physical and mental aspects, with a focus on
                developing teamwork, communication, and leadership skills. The
                program emphasizes the importance of discipline and hard work,
                as well as sportsmanship and fair play. The coaches work closely
                with players to identify and address weaknesses, and to develop
                individualized training plans that maximize each player's
                potential.
              </p>
            </div>
          </div>
        </div>

        <div class="mb-10 ml-10 mr-10 flex flex-col rounded-xl bg-red-500 bg-clip-border shadow-none">
          <div class="flex">
            <div class="w-1/3 bg-white rounded-l-lg">
              <img class="rounded-l-lg object-cover w-full h-full" src="/img/sponsorshipStarburst.png" alt="card image" />
            </div>
            <div class="text-secondary w-2/3 flex-1 p-6">
              <span class="font-bold uppercase text-white">
                Academic Scholarships
              </span>
              <a href="#">
                <h3 className="mt-4 text-white">
                  Academic Scholarships for Talented Youth Players
                </h3>
              </a>
              <p class="mb-5 text-white opacity-80">
                At Ebenezer Soccer Academy, we understand the importance of
                education as well as sports. Therefore, we provide guidance and
                assistance to talented young players who are committed to
                excelling in both their academic and athletic pursuits. We help
                our students to explore and apply for academic scholarships that
                cover tuition fees, school supplies, and other academic expenses
                to ensure that our students can focus on their studies and excel
                in the classroom. We believe that combining academic excellence
                with soccer training is a powerful way to empower young people
                to achieve their full potential, and we are proud to support our
                students in their educational and athletic journeys.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div id="contact-us" className=" bg-black">
        <Footer />
      </div>
    </>
  );
}

export default Programs;
