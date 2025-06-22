import { ClockLoader } from 'react-spinners';

export default function Loading() {
  return (
    <section className="font-poppins flex h-screen flex-col items-center justify-center gap-10 bg-gray-50 dark:bg-gray-900">
      <ClockLoader size={30} color="#0284c7" />
      <h1 className="from-azure-600 to-ocean-600 bg-gradient-to-r bg-clip-text text-center text-2xl font-semibold text-transparent">
        Chargement... Veuillez patienter !
      </h1>
    </section>
  );
}
