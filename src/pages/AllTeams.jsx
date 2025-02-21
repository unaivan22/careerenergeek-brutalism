import React, { useState, useEffect } from "react";
import NavbarPublic from "./utils/NavbarPublic";
import { Button } from "@/components/ui/button";
import Footer from "./utils/Footer";
import { motion } from "framer-motion";
import { BsCursorFill } from "react-icons/bs";
import { ArrowUpRight } from "lucide-react";
import ScrollToTop from "./ScrollToTop";
import { ModeToggle } from "@/components/mode-toggle";

const getRandomValue = (range) => Math.random() * range;

const getRandomTranslation = () => ({
  x: getRandomValue(3) - getRandomValue(20),
  y: getRandomValue(3) - getRandomValue(20),
  z: getRandomValue(3) - getRandomValue(20),
});

export default function AllTeams() {
  const [tanjungTranslation, setTanjungTranslation] = useState(
    getRandomTranslation()
  );
  const [zulmiTranslation, setZulmiTranslation] = useState(
    getRandomTranslation()
  );
  const [hanifTranslation, setHanifTranslation] = useState(
    getRandomTranslation()
  );
  const [ikkeTranslation, setIkkeTranslation] = useState(
    getRandomTranslation()
  );
  const [fahmiTranslation, setFahmiTranslation] = useState(
    getRandomTranslation()
  );

  const [jokoTranslation, setJokoTranslation] = useState(
    getRandomTranslation()
  );
  const [bakhrulTranslation, setBakhrulTranslation] = useState(
    getRandomTranslation()
  );
  const [rifanTranslation, setRifanTranslation] = useState(
    getRandomTranslation()
  );
  const [ariaTranslation, setAriaTranslation] = useState(
    getRandomTranslation()
  );
  const [fentiTranslation, setFentiTranslation] = useState(
    getRandomTranslation()
  );
  const [algiantTranslation, setAlgiantTranslation] = useState(
    getRandomTranslation()
  );
  const [evanTranslation, setEvanTranslation] = useState(
    getRandomTranslation()
  );
  const [ardyTranslation, setArdyTranslation] = useState(
    getRandomTranslation()
  );
  const [ricoTranslation, setRicoTranslation] = useState(
    getRandomTranslation()
  );
  const [fatchurTranslation, setFatchurTranslation] = useState(
    getRandomTranslation()
  );

  const [veldiTranslation, setVeldiTranslation] = useState(
    getRandomTranslation()
  );
  const [aidaTranslation, setAidaTranslation] = useState(
    getRandomTranslation()
  );
  const [silviaTranslation, setSilviaTranslation] = useState(
    getRandomTranslation()
  );

  const [wisnuTranslation, setWisnuTranslation] = useState(
    getRandomTranslation()
  );
  const [thesaTranslation, setThesaTranslation] = useState(
    getRandomTranslation()
  );

  const [ivanTranslation, setIvanTranslation] = useState(
    getRandomTranslation()
  );
  const [drajatTranslation, setDrajatTranslation] = useState(
    getRandomTranslation()
  );

  useEffect(() => {
    const tanjungInterval = setInterval(() => {
      setTanjungTranslation(getRandomTranslation());
    }, 1500); // Set an interval for tanjung

    return () => clearInterval(tanjungInterval);
  }, []);

  useEffect(() => {
    const zulmiInterval = setInterval(() => {
      setZulmiTranslation(getRandomTranslation());
    }, 2500); // Set a different interval for zulmi

    return () => clearInterval(zulmiInterval);
  }, []);

  useEffect(() => {
    const hanifInterval = setInterval(() => {
      setHanifTranslation(getRandomTranslation());
    }, 1200); // Set a different interval for sella

    return () => clearInterval(hanifInterval);
  }, []);

  useEffect(() => {
    const jokoInterval = setInterval(() => {
      setJokoTranslation(getRandomTranslation());
    }, 2200); // Set a different interval for sella

    return () => clearInterval(jokoInterval);
  }, []);

  useEffect(() => {
    const veldiInterval = setInterval(() => {
      setVeldiTranslation(getRandomTranslation());
    }, 2700); // Set a different interval for sella

    return () => clearInterval(veldiInterval);
  }, []);

  useEffect(() => {
    const wisnuInterval = setInterval(() => {
      setWisnuTranslation(getRandomTranslation());
    }, 1800); // Set a different interval for sella

    return () => clearInterval(wisnuInterval);
  }, []);

  useEffect(() => {
    const ivanInterval = setInterval(() => {
      setIvanTranslation(getRandomTranslation());
    }, 2000); // Set a different interval for sella

    return () => clearInterval(ivanInterval);
  }, []);

  useEffect(() => {
    const aidaInterval = setInterval(() => {
      setAidaTranslation(getRandomTranslation());
    }, 1800); // Set a different interval for sella

    return () => clearInterval(aidaInterval);
  }, []);

  useEffect(() => {
    const silviaInterval = setInterval(() => {
      setSilviaTranslation(getRandomTranslation());
    }, 1500); // Set a different interval for sella

    return () => clearInterval(silviaInterval);
  }, []);

  useEffect(() => {
    const thesaInterval = setInterval(() => {
      setThesaTranslation(getRandomTranslation());
    }, 1400); // Set a different interval for sella

    return () => clearInterval(thesaInterval);
  }, []);

  useEffect(() => {
    const drajatInterval = setInterval(() => {
      setDrajatTranslation(getRandomTranslation());
    }, 1900); // Set a different interval for sella

    return () => clearInterval(drajatInterval);
  }, []);

  useEffect(() => {
    const ikkeInterval = setInterval(() => {
      setIkkeTranslation(getRandomTranslation());
    }, 2100); // Set a different interval for sella

    return () => clearInterval(ikkeInterval);
  }, []);

  useEffect(() => {
    const fahmiInterval = setInterval(() => {
      setFahmiTranslation(getRandomTranslation());
    }, 2100); // Set a different interval for sella

    return () => clearInterval(fahmiInterval);
  }, []);

  useEffect(() => {
    const bakhrulInterval = setInterval(() => {
      setBakhrulTranslation(getRandomTranslation());
    }, 2000); // Set a different interval for sella

    return () => clearInterval(bakhrulInterval);
  }, []);

  useEffect(() => {
    const rifanInterval = setInterval(() => {
      setRifanTranslation(getRandomTranslation());
    }, 2200); // Set a different interval for sella

    return () => clearInterval(rifanInterval);
  }, []);

  useEffect(() => {
    const ariaInterval = setInterval(() => {
      setAriaTranslation(getRandomTranslation());
    }, 1800); // Set a different interval for sella

    return () => clearInterval(ariaInterval);
  }, []);

  useEffect(() => {
    const fentiInterval = setInterval(() => {
      setFentiTranslation(getRandomTranslation());
    }, 2200); // Set a different interval for sella

    return () => clearInterval(fentiInterval);
  }, []);

  useEffect(() => {
    const algiantInterval = setInterval(() => {
      setAlgiantTranslation(getRandomTranslation());
    }, 1700); // Set a different interval for sella

    return () => clearInterval(algiantInterval);
  }, []);

  useEffect(() => {
    const evanInterval = setInterval(() => {
      setEvanTranslation(getRandomTranslation());
    }, 2200); // Set a different interval for sella

    return () => clearInterval(evanInterval);
  }, []);

  useEffect(() => {
    const ardyInterval = setInterval(() => {
      setArdyTranslation(getRandomTranslation());
    }, 2200); // Set a different interval for sella

    return () => clearInterval(ardyInterval);
  }, []);

  useEffect(() => {
    const ricoInterval = setInterval(() => {
      setRicoTranslation(getRandomTranslation());
    }, 2200); // Set a different interval for sella

    return () => clearInterval(ricoInterval);
  }, []);

  useEffect(() => {
    const fatchurInterval = setInterval(() => {
      setFatchurTranslation(getRandomTranslation());
    }, 2200); // Set a different interval for sella

    return () => clearInterval(fatchurInterval);
  }, []);

  return (
    <div id="home" className="bg-lime-300">
      <NavbarPublic />
      <ScrollToTop />
      <div className="container pt-32">
        <div className="h-[70vh] w-full">


            <div class="grid h-full w-full place-items-center">
                <div className="flex flex-col gap-1 text-center items-center justify-center px-[6vw] md:px-[20vw] xl:px-[12vw] translate-y-[2vh]">
                    <h1 className="font-semibold text-3xl">Be Part of Our Journey!</h1>
                    <p className="text-sm opacity-60 md:px-24 mb-4">We’re a dynamic team from diverse disciplines, redefining the web’s future. Sound like your kind of adventure? Take a look at our current openings!</p>
                    <a href="/">
                        <Button className='w-fit rounded-xl'>Career <ArrowUpRight className="ml-1 h-4 w-4" /> </Button>
                    </a>
                </div>
            </div>

          <motion.div
            className="absolute top-[42vh] left-[26vw]"
            animate={{
              x: tanjungTranslation.x,
              y: tanjungTranslation.y,
              z: tanjungTranslation.z,
            }}
            transition={{
              type: "spring",
              stiffness: 50,
            }}
          >
            <div className="hidden lg:flex gap-x-1">
              <div className="mt-4 -mr-2 py-1 px-2 bg-purple-600 rounded-md flex items-center gap-x-2 w-fit">
                <p className="text-white text-[.6rem] capitalize">tanjung</p>
              </div>
              <BsCursorFill className="h-4 w-4 text-purple-600" />
            </div>
          </motion.div>

          <motion.div
            className="absolute top-[37vh] left-[30vw]"
            animate={{
              x: zulmiTranslation.x,
              y: zulmiTranslation.y,
              z: zulmiTranslation.z,
            }}
            transition={{
              type: "spring",
              stiffness: 50,
            }}
          >
            <div className="hidden lg:flex gap-x-1">
              <div className="mt-4 -mr-2 py-1 px-2 bg-lime-600 rounded-md flex items-center gap-x-2 w-fit">
                <p className="text-white text-[.6rem] capitalize">zulmi</p>
              </div>
              <BsCursorFill className="h-4 w-4 text-lime-600" />
            </div>
          </motion.div>

          <motion.div
            className="absolute top-[32vh] left-[40vw]"
            animate={{
              x: hanifTranslation.x,
              y: hanifTranslation.y,
              z: hanifTranslation.z,
            }}
            transition={{
              type: "spring",
              stiffness: 50,
            }}
          >
            <div className="hidden lg:flex gap-x-1">
              <div className="mt-4 -mr-2 py-1 px-2 bg-orange-600 rounded-md flex items-center gap-x-2 w-fit">
                <p className="text-white text-[.6rem] capitalize">hanif</p>
              </div>
              <BsCursorFill className="h-4 w-4 text-orange-600" />
            </div>
          </motion.div>

          <motion.div
            className="absolute top-[33vh] right-[44vw]"
            animate={{
              x: jokoTranslation.x,
              y: jokoTranslation.y,
              z: jokoTranslation.z,
            }}
            transition={{
              type: "spring",
              stiffness: 50,
            }}
          >
            <div className="hidden lg:flex gap-x-1">
              <BsCursorFill className="scale-x-[-1] h-4 w-4 text-sky-600" />
              <div className="mt-4 -ml-2 py-1 px-2 bg-sky-600 rounded-md flex items-center gap-x-2 w-fit">
                <p className="text-white text-[.6rem] capitalize">joko</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="absolute top-[38vh] right-[32vw]"
            animate={{
              x: veldiTranslation.x,
              y: veldiTranslation.y,
              z: veldiTranslation.z,
            }}
            transition={{
              type: "spring",
              stiffness: 50,
            }}
          >
            <div className="hidden lg:flex gap-x-1">
              <BsCursorFill className="scale-x-[-1] h-4 w-4 text-red-600" />
              <div className="mt-4 -ml-2 py-1 px-2 bg-red-600 rounded-md flex items-center gap-x-2 w-fit">
                <p className="text-white text-[.6rem] capitalize">veldi</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="absolute top-[50vh] right-[23vw]"
            animate={{
              x: wisnuTranslation.x,
              y: wisnuTranslation.y,
              z: wisnuTranslation.z,
            }}
            transition={{
              type: "spring",
              stiffness: 50,
            }}
          >
            <div className="hidden lg:flex gap-x-1">
              <BsCursorFill className="scale-x-[-1] h-4 w-4 text-amber-500" />
              <div className="mt-4 -ml-2 py-1 px-2 bg-amber-500 rounded-md flex items-center gap-x-2 w-fit">
                <p className="text-white text-[.6rem] capitalize">wisnu</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="absolute top-[65vh] right-[26vw]"
            animate={{
              x: ivanTranslation.x,
              y: ivanTranslation.y,
              z: ivanTranslation.z,
            }}
            transition={{
              type: "spring",
              stiffness: 50,
            }}
          >
            <div className="hidden lg:flex gap-x-1">
              <BsCursorFill className="scale-x-[-1] h-4 w-4 text-lime-500" />
              <div className="mt-4 -ml-2 py-1 px-2 bg-lime-500 rounded-md flex items-center gap-x-2 w-fit">
                <p className="text-white text-[.6rem] capitalize">ivan</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="absolute top-[70vh] right-[35vw]"
            animate={{
              x: aidaTranslation.x,
              y: aidaTranslation.y,
              z: aidaTranslation.z,
            }}
            transition={{
              type: "spring",
              stiffness: 50,
            }}
          >
            <div className="hidden lg:flex gap-x-1">
              <BsCursorFill className="scale-x-[-1] h-4 w-4 text-pink-500" />
              <div className="mt-4 -ml-2 py-1 px-2 bg-pink-500 rounded-md flex items-center gap-x-2 w-fit">
                <p className="text-white text-[.6rem] capitalize">aida</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="absolute top-[72vh] right-[47vw]"
            animate={{
              x: silviaTranslation.x,
              y: silviaTranslation.y,
              z: silviaTranslation.z,
            }}
            transition={{
              type: "spring",
              stiffness: 50,
            }}
          >
            <div className="hidden lg:flex gap-x-1">
              <BsCursorFill className="scale-x-[-1] h-4 w-4 text-pink-500" />
              <div className="mt-4 -ml-2 py-1 px-2 bg-pink-500 rounded-md flex items-center gap-x-2 w-fit">
                <p className="text-white text-[.6rem] capitalize">silvia</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="absolute top-[72vh] left-[42vw]"
            animate={{
              x: thesaTranslation.x,
              y: thesaTranslation.y,
              z: thesaTranslation.z,
            }}
            transition={{
              type: "spring",
              stiffness: 50,
            }}
          >
            <div className="hidden lg:flex gap-x-1 text-violet-500">
              <div className="mt-4 -mr-2 py-1 px-2 bg-violet-500 rounded-md flex items-center gap-x-2 w-fit">
                <p className="text-white text-[.6rem] capitalize">thesa</p>
              </div>
              <BsCursorFill className="h-4 w-4" />
            </div>
          </motion.div>

          <motion.div
            className="absolute top-[70vh] left-[35vw]"
            animate={{
              x: drajatTranslation.x,
              y: drajatTranslation.y,
              z: drajatTranslation.z,
            }}
            transition={{
              type: "spring",
              stiffness: 50,
            }}
          >
            <div className="hidden lg:flex gap-x-1">
              <div className="mt-4 -mr-2 py-1 px-2 bg-sky-500 rounded-md flex items-center gap-x-2 w-fit">
                <p className="text-white text-[.6rem] capitalize">drajat</p>
              </div>
              <BsCursorFill className="h-4 w-4 text-sky-500" />
            </div>
          </motion.div>

          <motion.div
            className="absolute top-[65vh] left-[27vw]"
            animate={{
              x: ikkeTranslation.x,
              y: ikkeTranslation.y,
              z: ikkeTranslation.z,
            }}
            transition={{
              type: "spring",
              stiffness: 50,
            }}
          >
            <div className="hidden lg:flex gap-x-1">
              <div className="mt-4 -mr-2 py-1 px-2 bg-violet-500 rounded-md flex items-center gap-x-2 w-fit">
                <p className="text-white text-[.6rem] capitalize">ikke</p>
              </div>
              <BsCursorFill className="h-4 w-4 text-violet-500" />
            </div>
          </motion.div>

          <motion.div
            className="absolute top-[68vh] left-[31vw]"
            animate={{
              x: ricoTranslation.x,
              y: ricoTranslation.y,
              z: ricoTranslation.z,
            }}
            transition={{
              type: "spring",
              stiffness: 50,
            }}
          >
            <div className="hidden lg:flex gap-x-1">
              <div className="mt-4 -mr-2 py-1 px-2 bg-rose-500 rounded-md flex items-center gap-x-2 w-fit">
                <p className="text-white text-[.6rem] capitalize">rico</p>
              </div>
              <BsCursorFill className="h-4 w-4 text-rose-500" />
            </div>
          </motion.div>

          <motion.div
            className="absolute top-[57vh] left-[24vw]"
            animate={{
              x: fahmiTranslation.x,
              y: fahmiTranslation.y,
              z: fahmiTranslation.z,
            }}
            transition={{
              type: "spring",
              stiffness: 50,
            }}
          >
            <div className="hidden lg:flex gap-x-1">
              <div className="mt-4 -mr-2 py-1 px-2 bg-orange-500 rounded-md flex items-center gap-x-2 w-fit">
                <p className="text-white text-[.6rem] capitalize">fahmi</p>
              </div>
              <BsCursorFill className="h-4 w-4 text-orange-500" />
            </div>
          </motion.div>

          <motion.div
            className="absolute top-[50vh] left-[24vw]"
            animate={{
              x: bakhrulTranslation.x,
              y: bakhrulTranslation.y,
              z: bakhrulTranslation.z,
            }}
            transition={{
              type: "spring",
              stiffness: 50,
            }}
          >
            <div className="hidden lg:flex gap-x-1">
              <div className="mt-4 -mr-2 py-1 px-2 bg-fuchsia-500 rounded-md flex items-center gap-x-2 w-fit">
                <p className="text-white text-[.6rem] capitalize">bakhrul</p>
              </div>
              <BsCursorFill className="h-4 w-4 text-fuchsia-500" />
            </div>
          </motion.div>

          <motion.div
            className="absolute top-[33vh] left-[45vw]"
            animate={{
              x: rifanTranslation.x,
              y: rifanTranslation.y,
              z: rifanTranslation.z,
            }}
            transition={{
              type: "spring",
              stiffness: 50,
            }}
          >
            <div className="hidden lg:flex gap-x-1">
              <div className="mt-4 -mr-2 py-1 px-2 bg-fuchsia-500 rounded-md flex items-center gap-x-2 w-fit">
                <p className="text-white text-[.6rem] capitalize">rifan</p>
              </div>
              <BsCursorFill className="h-4 w-4 text-fuchsia-500" />
            </div>
          </motion.div>

          <motion.div
            className="absolute top-[33vh] right-[39vw]"
            animate={{
              x: ariaTranslation.x,
              y: ariaTranslation.y,
              z: ariaTranslation.z,
            }}
            transition={{
              type: "spring",
              stiffness: 50,
            }}
          >
            <div className="hidden lg:flex gap-x-1">
              <BsCursorFill className="scale-x-[-1] h-4 w-4 text-indigo-600" />
              <div className="mt-4 -ml-2 py-1 px-2 bg-indigo-600 rounded-md flex items-center gap-x-2 w-fit">
                <p className="text-white text-[.6rem] capitalize">aria</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="absolute top-[43vh] right-[26vw]"
            animate={{
              x: fentiTranslation.x,
              y: fentiTranslation.y,
              z: fentiTranslation.z,
            }}
            transition={{
              type: "spring",
              stiffness: 50,
            }}
          >
            <div className="hidden lg:flex gap-x-1">
              <BsCursorFill className="scale-x-[-1] h-4 w-4 text-pink-600" />
              <div className="mt-4 -ml-2 py-1 px-2 bg-pink-600 rounded-md flex items-center gap-x-2 w-fit">
                <p className="text-white text-[.6rem] capitalize">fenti</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="absolute top-[73vh] right-[40vw]"
            animate={{
              x: algiantTranslation.x,
              y: algiantTranslation.y,
              z: algiantTranslation.z,
            }}
            transition={{
              type: "spring",
              stiffness: 50,
            }}
          >
            <div className="hidden lg:flex gap-x-1">
              <BsCursorFill className="scale-x-[-1] h-4 w-4 text-rose-600" />
              <div className="mt-4 -ml-2 py-1 px-2 bg-rose-600 rounded-md flex items-center gap-x-2 w-fit">
                <p className="text-white text-[.6rem] capitalize">algiant</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="absolute top-[68vh] right-[30vw]"
            animate={{
              x: evanTranslation.x,
              y: evanTranslation.y,
              z: evanTranslation.z,
            }}
            transition={{
              type: "spring",
              stiffness: 50,
            }}
          >
            <div className="hidden lg:flex gap-x-1">
              <BsCursorFill className="scale-x-[-1] h-4 w-4 text-purple-600" />
              <div className="mt-4 -ml-2 py-1 px-2 bg-purple-600 rounded-md flex items-center gap-x-2 w-fit">
                <p className="text-white text-[.6rem] capitalize">evan</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            className="absolute top-[57vh] right-[25vw]"
            animate={{
              x: ardyTranslation.x,
              y: ardyTranslation.y,
              z: ardyTranslation.z,
            }}
            transition={{
              type: "spring",
              stiffness: 50,
            }}
          >
            <div className="hidden lg:flex gap-x-1">
              <BsCursorFill className="scale-x-[-1] h-4 w-4 text-orange-500" />
              <div className="mt-4 -ml-2 py-1 px-2 bg-orange-500 rounded-md flex items-center gap-x-2 w-fit">
                <p className="text-white text-[.6rem] capitalize">ardy</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="absolute top-[33vh] left-[34vw]"
            animate={{
              x: fatchurTranslation.x,
              y: fatchurTranslation.y,
              z: fatchurTranslation.z,
            }}
            transition={{
              type: "spring",
              stiffness: 50,
            }}
          >
            <div className="hidden lg:flex gap-x-1">
              <div className="mt-4 -mr-2 py-1 px-2 bg-yellow-500 rounded-md flex items-center gap-x-2 w-fit">
                <p className="text-white text-[.6rem] capitalize">fatchur</p>
              </div>
              <BsCursorFill className="h-4 w-4 text-yellow-500" />
            </div>
          </motion.div>

        </div>

        <div className="md:mx-[12vw] mt-24 mb-12">
          <div className="flex flex-col items-center justify-center bg-black dark:bg-stone-900 py-12 md:py-24 w-full gap-4 rounded-2xl">
            <h1 className="text-white text-center text-xl md:text-4xl">
              We Can't Wait To Join Out Teams
            </h1>
            <p className="text-white text-xs md:text-xl font-light text-center">
              Let's connect with you and hear your story. <br /> Let's work
              together to achieve amazing things!
            </p>
            <a href="https://energeek.co.id/#bt_contact" target="blank">
              <Button>Contact Us</Button>
            </a>
          </div>
        </div>
      </div>
      <div className="bg-stone-50 dark:bg-black">
        <div className="container">
          <Footer />
        </div>
      </div>
      {/* <div className='fixed bottom-8 right-8'>
        <ModeToggle />
      </div> */}
    </div>
  );
}
