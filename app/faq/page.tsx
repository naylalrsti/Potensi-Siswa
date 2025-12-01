
export default function faqPage() {
    return (
        <div className="w-full">
            <div className="w-full flex flex-col justify-center items-center mt-50">
                <div className="w-fit rounded-full bg-primary px-10 py-4">
                    <h1 className="text-white font-bold text-4xl">
                        404
                    </h1>
                </div>
                <div className="flex flex-col justify-center items-center mt-16">
                    <h2 className="text-base font-bold text-4xl">
                        Halaman Tidak Ditemukan
                    </h2>
                    <p className="text-base font-normal text-normal mt-8">
                        Harap kembali ke beranda, mohon maaf atas tidak kenyamanan ini.
                    </p>
                </div>
                <button className="mt-20">
                    <a className="bg-blue-300 rounded-full mt-20 py-4 px-6 text-normal font-bold text-white shadow" href="/">
                        Kembali ke Beranda
                    </a>
                </button>
            </div>
        </div>
    )
}