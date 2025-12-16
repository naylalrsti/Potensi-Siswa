"use client"

import { useState } from "react";

export default function Home() {
  const [show, setShow] = useState<boolean>(false)
  return (
    <div className="w-full">
      {/*Hero section start*/}
      <div className="w-full bg-linear-to-b from-white via-primary/5 to-primary/20 flex flex-col items-center justify-center">
        <nav className="fixed bg-white top-0 z-50 w-full">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="flex flex-wrap min-h-15 items-center justify-between">
              <a className="flex space-x-2">
                <span className="text-2xl md:text-[24px] font-bold">
                  Potensi Siswa
                </span>
              </a>
              <div className="flex flex-end items-center gap-8">
                <nav className="hidden md:flex gap-8">
                  <a className="text-[14px] text-base font-medium" href="/">
                    Beranda
                  </a>
                  <a className="text-[14px] text-base font-medium" href="faq">
                    FAQ
                  </a>
                  <a className="text-[14px] text-base font-medium" href="pengembang">
                    Pengembang
                  </a>
                </nav>
                <button className="hidden md:flex">
                  <a className="border-primary border-2 text-primary hover:bg-primary duration-200 hover:text-white font-bold text-[14px] rounded-full whitespace-nowrap px-5 py-2 flex" href="login">
                    Login
                  </a>
                </button>
                <button type="button" className="flex md:hidden" onClick={() => setShow(!show)}>
                  <img src="Hamburg.svg"
                    alt="Hamburg"
                  />
                </button>
              </div>
            </div>
          </div>
        </nav>

        <div className={`z-10 w-full fixed left-0 top-12 transform ease-linear duration-300 transition-transform ${show ? `` : `-translate-y-[300px]`}`}>
          <nav className="flex flex-col px-4 py-6 gap-6">
            <a className="text-[16px] text-base font-medium" href="/">
              Beranda
            </a>
            <a className="text-[16px] text-base font-medium" href="pengembang">
              Pengembang
            </a>
            <a className="text-[16px] text-base font-medium" href="faq">
              FAQ
            </a>
            <a className="bg-primary text-white font-bold text-[14px] rounded whitespace-nowrap px-5 py-3 mt-8 flex justify-center items-center" href="login">
              Masuk
            </a>
          </nav>
        </div>

        <div className="relative flex flex-col justify-center items-center mt-20 mb-60">
          <div>
            <div className="hidden md:flex w-16 h-16 rounded-full justify-center items-center bg-green-400 text-white absolute top-12 -left-5 shadow-green-300">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
              </svg>
            </div>
            <div className="hidden md:flex w-16 h-16 rounded-full justify-center items-center bg-primary text-white absolute top-28 -right-8">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
              </svg>
            </div>
            <div className="hidden md:flex w-16 h-16 rounded-full justify-center items-center bg-yellow-300 text-white absolute -bottom-20 -left-8">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
              </svg>
            </div>
            <div className="hidden md:flex w-16 h-16 rounded-full justify-center items-center bg-blue-300 text-white absolute -bottom-20 -right-8">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
              </svg>
            </div>
          </div>


          <div className="w-fit bg-blue-300 border-3 border-blue-500/20 text-white font-bold text-normal text-[14px] md:text-normal rounded-full whitespace-nowrap px-5 py-2 flex mt-20 mb-20 gap-3">
            Solusi terbaik untuk Siswa
            <div className="size-5">
              <img src="Union.svg" alt="union" />
            </div>
          </div>
          <div className="px-8">
            <h1 className="text-primary text-5xl md:text-6xl font-bold text-center">
              Potensi Siswa
            </h1>
            <h2 className="text-base text-3xl md:text-5xl font-bold mt-4 text-center">
              Bantu Mereka Tumbuh Maksimal
            </h2>
            <h3 className="text-base font-regular text-normal mt-8 text-center">
              Temukan dan kembangkan potensi terbaik setiap siswa dengan satu platform pintar.
            </h3>
          </div>
          <div>
            <button className="mt-20">
              <a className="bg-primary hover:bg-red-700 duration-200 rounded-full mt-20 py-4 px-6 text-normal font-bold text-white shadow-2xs" href="login">
                Mulai Sekarang
              </a>
            </button>
          </div>
        </div>
      </div>

      <section className="w-full bg-white flex h-fit justify-center">
        <div className="w-5/6 md:5/7 bg-white rounded-3xl text-white shadow p-10 -mt-12 mb-20">
          <div className="w-fit bg-blue-300 border-3 border-blue-500/20 text-white font-bold text-[14px] rounded-full whitespace-nowrap px-5 py-2 flex mb-20 gap-2.5">
            Tentang Kami
          </div>
          <div className="flex flex-col md:flex-row gap-5">
            <h1 className="text-base font-bold text-4xl md:text-5xl w-2/3 md:w-full">
              Apa itu <span className="text-primary">Potensi Siswa?</span>
            </h1>
            <p className="text-base font-normal text-normal w-full md:w-1/2">
              Bantu temukan serta mengembangkan potensi terbaik setiap siswa dengan satu platform yang cerdas dan mudah digunakan.
            </p>
          </div>
          <div className="flex flex-col bg-white md:flex-row justify-around items-strecth mt-20 gap-12">
            <div className="max-w-full md:max-w-60">
              <img src="Book.svg"
                alt="book"
              />
              <h1 className="text-base text-[20px] md:text-2xl font-bold mt-8">
                Potensi Akademik
              </h1>
              <p className="text-base text-normal font-normal mt-5">
                Mencakup prestasi akademik, dan gaya belajar yang bisa menjadi kekuatan utama dalam proses belajar.
              </p>
            </div>
            <div className="max-w-full md:max-w-70">
              <img src="Star.svg"
                alt="star"
              />
              <h1 className="text-base text-[20px] md:text-2xl font-bold mt-8">
                Potensi Non-Akademik
              </h1>
              <p className="text-base text-normal font-normal mt-5">
                Bakat dan minat diluar pelajaran, seperti seni, olahraga, atau kreativitas yang bisa dikembangkan.
              </p>
            </div>
          </div>
        </div>
      </section>


      <section className="w-full flex flex-col bg-primary justify-center items-center px-8">
        <div className="w-full flex flex-col justify-center items-center">
          <div className="w-fit bg-blue-300 border-3 border-blue-500/20 text-white font-bold text-[14px] rounded-full whitespace-nowrap px-5 py-2 flex mt-20 gap-2.5">
            Pihak Terlibat
          </div>
          <div className="flex flex-col justify-center items-center mt-20">
            <h1 className="text-white font-bold text-3xl md:text-4xl lg:text-5xl text-center">
              Perkembangan Siswa tak bisa <br />berjalan sendiri
            </h1>
            <p className="text-white text-normal text-center font-normal mt-8">
              Siapa saja pihak yang berperan dalam perkembangan siswa?
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row justify-center items-stretch gap-8 md:gap-20 my-20">
          <div className="max-w-full md:max-w-80 flex flex-col bg-white rounded-2xl px-8 py-8 md:px-6">
            <div className="size-14 md:size-18">
              <img src="user-group.svg"
                alt="teacher"
              />
            </div>
            <div>
              <h1 className="text-base font-bold text-[18px] mt-3">
                Guru
              </h1>
              <p className="text-base font-normal text-normal mt-3">
                Guru sebagai pengguna utama yang mengelola data potensi siswa. Mulai dari data akademik maupun non-akademik.
              </p>
            </div>
          </div>
          <div className="max-w-full md:max-w-80 flex flex-col bg-white rounded-2xl px-8 py-11 md:py-8 md:px-6">
            <div className="size-14 md:size-18">
              <img src="user.svg"
                alt="student"
              />
            </div>
            <div>
              <h1 className="text-base font-bold text-[18px] mt-3">
                Siswa
              </h1>
              <p className="text-base font-normal text-normal mt-3">
                Siswa sebagai objek data yang dianalisis untuk mengembangkan potensi yang dimilikinya.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white flex justify-center">
        <div className="w-full flex flex-col justify-center items-center">
          <div className="w-fit bg-blue-300 border-3 border-blue-500/20 text-white font-bold text-[14px] rounded-full whitespace-nowrap px-5 py-2 flex mt-20 gap-2.5">
            Mulai Sekarang
          </div>
          <div className="px-5 mt-8 md:mt-20">
            <h1 className="text-base text-3xl sm:text-4xl md:text-5xl font-bold text-center">
              Bantu <span className="text-primary">Siswa</span> berkembang maksimal <br />sekarang juga
            </h1>
            <h2 className="text-base font-normal text-normal text-center mt-5 md:mt-8">
              Bantu mereka menjadi versi terbaik dirinya.
            </h2>
          </div>
          <button className="mt-20 mb-20">
            <a className="bg-primary hover:bg-red-7 00 duration-200 text-white font-bold text-normal rounded-full px-6 py-4" href="login">
              Masuk ke Akun
            </a>
          </button>
        </div>
      </section>

      {/* Footer */}

      <footer className="w-full flex flex-col md:flex-row bg-primary justify-around py-6 px-6 text-start gap-5">
        <div className="w-full md:w-96">
          <a className="text-white font-bold text-2xl">
            Potensi Siswa
          </a>
          <h1 className="text-white font-normal text-normal mt-3">
            Bantu Mereka Tumbuh Maksimal
          </h1>
        </div>


        <div className="flex flex-col md:flex-row gap-3 md:w-[600px]">
          <div className="flex flex-col gap-3 w-full">
            <h1 className="text-white text-[18px] font-semibold mb-3">
              Navigasi
            </h1>
            <a className="text-white text-[14px] font-normal" href="/">
              Beranda
            </a>
            <a className="text-white text-[14px] font-normal" href="pengembang">
              Pengembang
            </a>
          </div>
          <div className="w-full flex flex-col gap-3">
            <h2 className="text-white text-[18px] font-semibold mb-3">
              Bantuan
            </h2>
            <a className="text-white text-[14px] font-normal" href="faq">
              FAQ
            </a>
          </div>
          <div className="w-full flex flex-col gap-3">
            <h3 className="text-white text-[18px] font-semibold mb-3">
              Kontak
            </h3>
            <div className="text-white text-[14px] font-normal">
              SMK Telkom Malang <br />
              Jl. Danau Ranau, Sawojajar <br />
              Malang, Jawa Timur <br />
              Email: info@smktelkom-mlg.sch.id
            </div>
          </div>
        </div>
      </footer>
    </div>

    /*end hero section*/
  );
}


















