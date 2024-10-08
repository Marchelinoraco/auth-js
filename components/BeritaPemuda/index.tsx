"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import Config from "@/app/config/config";
import axios from "axios";

const BeritaPemuda = () => {
  const [judulBerita, setJudulBerita] = useState("");
  const [namaPembuatBerita, setNamaPembuatBerita] = useState("");
  const [isiBerita, setIsiBerita] = useState("");
  const [tanggalBerita, setTanggalBerita] = useState("");
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState("");

  const [openModal, setOpenModal] = useState(false);
  const [modalMessage, setModalMessage] = useState(""); // Untuk pesan modal
  const [isSuccess, setIsSuccess] = useState(false); // Untuk mengatur status keberhasilan

  const loadImage = (e) => {
    const image = e.target.files[0];
    setFile(image);
    setPreview(URL.createObjectURL(image));
  };

  const resetForm = () => {
    setJudulBerita("");
    setNamaPembuatBerita("");
    setIsiBerita("");
    setTanggalBerita("");
    setFile(null);
    setPreview("");
  };

  const saveBerita = async (e) => {
    e.preventDefault();

    // Validasi jika semua field harus terisi
    if (
      !judulBerita ||
      !namaPembuatBerita ||
      !isiBerita ||
      !tanggalBerita ||
      !file
    ) {
      setModalMessage("Semua field harus diisi!"); // Pesan untuk modal
      setIsSuccess(false); // Set modal untuk kegagalan (warna merah)
      setOpenModal(true);
      return;
    }

    const formData = new FormData();
    formData.append("judul_berita", judulBerita);
    formData.append("nama_pembuat_berita", namaPembuatBerita);
    formData.append("isi_berita", isiBerita);
    formData.append("tanggal_berita", tanggalBerita);
    formData.append("file", file);

    try {
      await axios.post(`${Config.ipPUBLIC}/berita`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setModalMessage("Berita berhasil ditambahkan!");
      setIsSuccess(true); // Set modal untuk keberhasilan (warna hijau)
      setOpenModal(true);
      resetForm(); // Reset form setelah berhasil
      setTimeout(() => {
        setOpenModal(false); // Sembunyikan modal setelah beberapa detik
      }, 3000); // 3 detik
    } catch (error) {
      console.error(error);
      setModalMessage("Gagal menambahkan berita!");
      setIsSuccess(false); // Set modal untuk kegagalan (warna merah)
      setOpenModal(true);
    }
  };

  return (
    <>
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
                Masukkan Berita Kategori Pemuda
              </h2>

              <form onSubmit={saveBerita} className="py-4">
                <div className="mb-7 ">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Upload Gambar (PNG, JPG, JPEG)
                  </label>
                  <input
                    type="file"
                    accept=".png, .jpg, .jpeg"
                    onChange={loadImage}
                    className="block w-full py-2 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
                  />
                  {preview && (
                    <img src={preview} alt="Preview" className="mt-4" />
                  )}
                </div>

                <div className="mb-7 flex justify-center w-full">
                  <input
                    type="text"
                    value={judulBerita}
                    onChange={(e) => setJudulBerita(e.target.value)}
                    placeholder="Judul Berita"
                    className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white "
                  />
                </div>

                <div className="mb-12 flex flex-col gap-7.5 lg:flex-row lg:justify-between lg:gap-14">
                  <input
                    type="datetime-local"
                    value={tanggalBerita}
                    onChange={(e) => setTanggalBerita(e.target.value)}
                    placeholder="Tanggal dan Waktu Berita"
                    className="w-full mb-2 border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
                  />

                  <input
                    type="text"
                    value={namaPembuatBerita}
                    onChange={(e) => setNamaPembuatBerita(e.target.value)}
                    placeholder="Author"
                    className="w-full mb-2 border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
                  />
                </div>

                <div className="mb-11 flex">
                  <textarea
                    value={isiBerita}
                    onChange={(e) => setIsiBerita(e.target.value)}
                    placeholder="Isi Berita"
                    rows={4}
                    className="w-full border-b border-stroke bg-transparent focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white"
                  ></textarea>
                </div>

                <div className="flex flex-wrap items-center gap-4 xl:justify-end">
                  <button
                    type="submit"
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

          {/* Popup Modal */}
          {openModal && (
            <>
              {/* Overlay */}
              <div className="fixed inset-0 bg-black bg-opacity-50 z-40"></div>

              {/* Modal */}
              <div
                id="popup-modal"
                tabIndex="-1"
                className="fixed inset-0 z-50 flex justify-center items-center p-4 overflow-x-hidden overflow-y-auto h-[calc(100%-1rem)] max-h-full"
              >
                <div className="relative w-full max-w-md">
                  <div className="relative bg-white rounded-lg shadow">
                    <div className="p-6 text-center">
                      <h3
                        className={`text-lg font-normal ${
                          isSuccess ? "text-green-500" : "text-red-500"
                        }`}
                      >
                        {modalMessage}
                      </h3>
                      <button
                        onClick={() => setOpenModal(false)}
                        className="mt-4 inline-flex items-center gap-2.5 rounded-full bg-black px-6 py-3 font-medium text-white hover:bg-blackho dark:bg-btndark"
                      >
                        Tutup
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default BeritaPemuda;
