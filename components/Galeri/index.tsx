"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { auth } from "@/auth";

const Galeri = () => {
  const [hasMounted, setHasMounted] = React.useState(false);
  React.useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }

  return (
    <>
      {/* <!-- ===== Galeri Start ===== --> */}
      <section id="support" className="px-4 md:px-8 2xl:px-0">
        <div className="">
          <div className="">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top w-full rounded-lg bg-white p-4 shadow-solid-8 dark:border dark:border-strokedark xl:p-15"
            >
              <h2 className="mb-15 text-3xl font-semibold text-black xl:text-sectiontitle2">
                Masukkan Gambar Dokumentasi Dinas
              </h2>

              <form
                action="https://formbold.com/s/unique_form_id"
                method="POST"
                className="py-4"
              >
                <div className="mb-7 ">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Upload Gambar (PNG, JPG, JPEG)
                  </label>
                  <input
                    type="file"
                    accept=".png, .jpg, .jpeg"
                    className="block w-full py-2 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
                  />
                </div>

                <div className="flex flex-wrap items-center gap-4 xl:justify-end">
                  <button
                    aria-label="send message"
                    className="inline-flex items-center gap-2.5 rounded-full bg-black px-6 py-3 font-medium text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark"
                  >
                    Kirim
                    <svg
                      className="fill-white"
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.4767 6.16664L6.00668 1.69664L7.18501 0.518311L13.6667 6.99998L7.18501 13.4816L6.00668 12.3033L10.4767 7.83331H0.333344V6.16664H10.4767Z"
                        fill=""
                      />
                    </svg>
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== Galeri End ===== --> */}
    </>
  );
};

export default Galeri;
