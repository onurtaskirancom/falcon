import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <div className="min-h-screen pt-16 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold sm:text-5xl sm:tracking-tight lg:text-6xl">
            Dünyayı Keşfeden Gezgin
          </h1>
          <p className="mt-5 text-xl">
            Merhaba! Ben Mehmet Şahin, tutkulu bir dünya gezginiyim. Her yeni yer,
            her yeni kültür benim için yeni bir macera.
          </p>
        </div>

        <div className="mt-10">
          <Image
            src="/images/mehmet-sahin.jpg"
            alt="Gezgin fotoğrafı"
            width={600}
            height={400}
            className="rounded-lg shadow-xl mx-auto"
          />
        </div>

        <div className="mt-10 space-y-10">
          <div>
            <h2 className="text-2xl font-bold">
              Son Maceralarım
            </h2>
            <ul className="mt-4 list-disc list-inside">
              <li>Inka İmparatorluğu'nun izinde: Machu Picchu'ya yolculuk</li>
              <li>Japonya'nın arka sokaklarında kaybolmak</li>
              <li>Fas çöllerinde deve sırtında gün batımı</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold">
              Gelecek Planlarım
            </h2>
            <p className="mt-4">
              Sıradaki durağım Güneydoğu Asya! Tayland'ın egzotik plajlarından
              Vietnam'ın dağlık bölgelerine uzanan bir rota planlıyorum.
            </p>
          </div>

          <div className="text-center">
            <Link
              href="/hakkimda"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700"
            >
              Daha Fazlasını Öğren
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
