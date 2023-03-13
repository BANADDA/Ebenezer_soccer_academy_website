import { Home, Programs, SignIn, About} from "@/pages";
import Contact from "./pages/contact";
import GalleryPage from "./pages/galleryPage";
import { PhoneIcon, UsersIcon } from "@heroicons/react/24/outline";
import {
  HomeIcon,
  ArrowRightOnRectangleIcon,
  PhotoIcon,
} from "@heroicons/react/24/solid";

export const routes = [
  {
    icon: HomeIcon,
    name: "home",
    path: "/",
    element: <Home />,
  },
  {
    icon: UsersIcon,
    name: "About Us",
    path: "/about-us",
    element: <About />,
  },
  {
    icon: PhotoIcon,
    name: "gallery",
    path: "gallery",
    element: <GalleryPage />,
  },
  {
    icon: ArrowRightOnRectangleIcon,
    name: "Programs",
    path: "/programs",
    element: <Programs/>,
  },
  {
    icon: PhoneIcon,
    name: "Contact Us",
    path: "/contact",
    element: <Contact />,
  },
];


export default routes;
