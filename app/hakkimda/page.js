import Image from "next/image";

export default function Hakkimda() {
  return (
    <div className="min-h-screen pt-16 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-12">
          <div className="w-80 h-72 relative overflow-hidden rounded-3xl">
            <Image
              src="/images/mehmet-sahin-hakkimda.jpg"
              alt="Mehmet Şahin Profil fotoğrafı"
              layout="fill"
              objectFit="cover"
              className="rounded-3xl"
            />
          </div>
          <div className="flex-1">
            <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl sm:tracking-tight lg:text-6xl mb-6">
              Hakkımda
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-6">
              Merhaba! Ben Mehmet Şahin, 28 yaşında tutkulu bir dünya gezginiyim. İstanbul'da doğup büyüdüm, ancak kalbim her zaman yeni yerler keşfetmek, farklı kültürleri tanımak ve unutulmaz anılar biriktirmek için attı.
            </p>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-6">
              Seyahat etmek benim için sadece bir hobi değil, aynı zamanda bir yaşam tarzı. Şimdiye kadar 30'dan fazla ülke gezdim ve her biri bana benzersiz deneyimler, ilham verici hikayeler ve hayat boyu sürecek dostluklar kazandırdı. Yerel mutfakları keşfetmekten, tarihi yerleri ziyaret etmeye, doğa harikalarını görmeye kadar her anın tadını çıkarıyorum.
            </p>
            <p className="text-xl text-gray-700 dark:text-gray-300">
              Bu blog, seyahatlerimde yaşadığım maceraları, keşfettiğim gizli kalmış yerleri, tanıştığım ilginç insanları ve tattığım lezzetleri sizlerle paylaşmak için oluşturduğum bir platform. Amacım, deneyimlerimle size ilham vermek, pratik seyahat ipuçları sunmak ve belki de sizi kendi seyahat maceranızı planlamaya teşvik etmek. Benimle birlikte dünyanın güzelliklerini keşfetmeye hazır mısınız?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
