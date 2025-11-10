"use client"

import { useState } from "react";

export default function Home() {
  const [show, setShow] = useState<boolean>(false)
  return (
    <div className="w-full">
      {/*Hero section start*/}
      <div className="w-full flex flex-col bg-linear-to-b from-white to bg-primary/18 items-center justify-center">
        <nav className="sticky top-0 z-50 w-full bg-white">
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
                  <a className="text-[14px] text-base font-medium" href="/">
                    Tentang
                  </a>
                  <a className="text-[14px] text-base font-medium" href="/">
                    FAQ
                  </a>
                  <a className="text-[14px] text-base font-medium" href="/">
                    Pengembang
                  </a>
                </nav>
                <button className="hidden md:flex">
                  <a className="bg-blue-300 text-white font-bold text-[14px] rounded-full whitespace-nowrap px-5 py-2 flex" href="/">
                    Login
                  </a>
                </button>
                <button type="button" className="flex md:hidden" onClick={() => setShow(!show)}>
                  <img src="Hamburg.svg"
                    alt="Hamburg"
                  />
                </button>
                <div className={`w-full bg-white fixed left-0 top-20 transform ease-linear transition-transform ${show ? `` : `-translate-y-[300px]`}`}>
                  <nav className="flex flex-col px-4 py-4 gap-4">
                    <a className="text-[14px] text-base font-medium" href="/">
                      Beranda
                    </a>
                    <a className="text-[14px] text-base font-medium" href="/">
                      Tentang
                    </a>
                    <a className="text-[14px] text-base font-medium" href="/">
                      FAQ
                    </a>
                    <a className="text-[14px] text-base font-medium" href="/">
                      Pengembang
                    </a>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </nav>
       
        <div className="flex flex-col justify-center items-center mt-20 mb-60">
          <div className="w-fit bg-blue-300 text-white font-bold text-normal md:text-[14px] rounded-full whitespace-nowrap px-5 py-3 flex mb-20 gap-3">
            Solusi terbaik untuk Siswa
            <div className="size-5">
              <img src="Union.svg" alt="union" />
            </div>
          </div>
          <div className="px-5">
            <h1 className="text-primary text-5xl md:text-6xl font-bold text-center">
              Potensi Siswa
            </h1>
            <h2 className="text-base text-4xl md:text-5xl font-bold mt-4 text-center">
              Bantu Mereka Tumbuh Maksimal
            </h2>
            <h3 className="text-base font-regular text-normal mt-8 text-center">
              Temukan dan kembangkan potensi terbaik setiap siswa dengan satu platform pintar.
            </h3>
          </div>
          <div>
            <button className="mt-20">
              <a className="bg-linear-to-t from-primary to-red-100/34 rounded-full mt-20 py-3 px-6 text-normal font-bold text-white shadow-2xs" href="/">
                Mulai Sekarang
              </a>
            </button>
          </div>
        </div>
      </div>

      <section className="w-full bg-white flex h-fit justify-center">
        <div className="w-5/6 bg-white rounded-3xl text-white shadow py-8 px-8 -mt-12 mb-20">
          <div className="w-fit bg-blue-300 text-white font-bold text-[14px] rounded-full whitespace-nowrap px-5 py-3 flex mb-20 gap-2.5">
            Tentang Kami
          </div>
          <div className="flex flex-col md:flex-row gap-6">
            <h1 className="text-base font-bold text-4xl md:text-5xl w-full md:w-2/3">
              Apa itu <span className="text-primary">Potensi Siswa?</span>
            </h1>
            <p className="text-base font-normal text-normal w-full md:w-1/2">
              Bantu temukan dan mengembangkan potensi terbaik setiap siswa dengan satu platform yang cerdas dan mudah digunakan.
            </p>
          </div>
          <div className="flex flex-col bg-white md:flex-row justify-around items-strecth mt-20 gap-8">
            <div className="max-w-full md:max-w-60">
              <img src="Book.svg"
                alt="book"
              />
              <h1 className="text-base text-2xl font-bold mt-8">
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
              <h1 className="text-base text-2xl font-bold mt-8">
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
          <div className="w-fit bg-blue-300 text-white font-bold text-[14px] rounded-full whitespace-nowrap px-5 py-3 flex mt-20 gap-2.5">
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
          <div className="w-fit bg-blue-300 text-white font-bold text-[14px] rounded-full whitespace-nowrap px-5 py-2 md:py-3 flex mt-20 gap-2.5">
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
            <a className="bg-primary text-white font-bold text-normal rounded-full px-6 py-3" href="/">
              Masuk ke Akun
            </a>
          </button>
        </div>
      </section>


      <footer className="w-full flex flex-col md:flex-row bg-primary justify-around py-4 px-8 md:px-12 text-start gap-5">
        <div className="w-full md:w-965">
          <a className="text-white font-bold text-2xl">
            Potensi Siswa
          </a>
          <h1 className="text-white font-normal text-normal mt-2 md:mt-3 gap-3">
            Bantu Mereka Tumbuh Maksimal
          </h1>
        </div>
        <div className="flex flex-col md:flex-row gap-5">
          <div className="flex flex-col gap-3 w-full md:w-60">
            <h1 className="text-white text-[18px] font-semibold mb-3">
              Navigasi
            </h1>
            <a className="text-white text-[14px] font-normal">
              Beranda
            </a>
            <a className="text-white text-[14px] font-normal">
              Tentang
            </a>
            <a className="text-white text-[14px] font-normal">
              Pengembang
            </a>
          </div>
          <div className="w-full md:w-60 flex flex-col gap-3">
            <h2 className="text-white text-[18px] font-semibold mb-3">
              Bantuan
            </h2>
            <a className="text-white text-[14px] font-normal">
              FAQ
            </a>
          </div>
          <div className="w-full md:w-60 flex flex-col gap-3">
            <h3 className="text-white text-[18px] font-semibold mb-3">
              Kontak
            </h3>
            <a className="text-white text-[14px] font-normal">
              SMK Telkom Malang <br />
              Jl. Danau Ranau, Sawojajar <br />
              Malang, Jawa Timur <br />
              Email: info@smktelkom-mlg.sch.id
            </a>
          </div>
        </div>
      </footer>
    </div>

    /*end hero section*/
  );
}


















