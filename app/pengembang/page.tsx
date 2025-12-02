"use client"
import { useState } from "react"

export default function developerPage() {
  const [show, setShow] = useState<boolean>(false)
  return (
    <div className="w-full">
      <div className="w-full flex flex-col items-center justify-center">
        <nav className="sticky top-0 z-50 w-full bg-white shadow">
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
                    FAQ
                  </a>
                  <a className="text-[14px] text-base font-medium" href=" /">
                    Pengembang
                  </a>
                </nav>
                <button className="hidden md:flex">
                  <a className="bg-primary text-white font-bold text-[14px] rounded-full whitespace-nowrap px-5 py-2 flex" href="/">
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
      </div>

      <div className={`z-10 w-full bg-white fixed left-0 top-16 shadow transform ease-linear duration-300 transition-transform ${show ? `` : `-translate-y-[300px]`}`}>
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

      <div className="w-full flex flex-col justify-center items-center">
        <div className="w-full flex flex-col justify-center items-center mt-15 mb-70 px-3 md:px-5">
          <h1 className="text-base text-3xl md:text-5xl font-bold text-center">
            Development Team
          </h1>
          <p className="text-base text-normal font-normal mt-8">
            Tim pengembangan website ini.
          </p>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-40">
            <div className="flex flex-col justify-center items-center">
              <div className="w-fit flex flex-col rounded-full justify-center items-center bg-primary text-white px-8 py-8 mt-30">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="size-30">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
              </div>
              <div className="mt-8">
                <h1 className="text-[24px] font-semibold text-base text-center">
                  Muhammad Chusni Agus, M.Pd., Gr.
                </h1>
                <p className="text-normal text-base font-normal text-center mt-5">
                  General Manager
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="w-fit flex flex-col rounded-full justify-center items-center bg-primary text-white px-8 py-8 mt-30">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="size-30">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
              </div>
              <div className="mt-8">
                <h1 className="text-[24px] font-semibold text-base text-center">
                  Nayla Larasati
                </h1>
                <p className="text-normal text-base font-normal text-center mt-5">
                  Fullstack Developer
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

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
  )
}
