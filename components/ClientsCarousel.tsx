import React from 'react';
import { useTranslation } from 'react-i18next';

const clients = [
  { name: 'Red de Universidades Anáhuac', logo: '/clients/anahuac.svg' },
  { name: 'MultiCarrier', logo: '/clients/multicarrier.png' },
  { name: 'Colegio Mercedes', logo: '/clients/fortes.png' },
  { name: 'FESOgo', svg: 'fesogo' },
  { name: 'Distribuidora ORTHO', svg: 'ortho' },
  { name: 'Universidad Iberoamericana Puebla', logo: 'https://unavatar.io/x/IberoPuebla' },
  { name: 'S.T.P.R.M.', logo: '/clients/stprm_official.png' },
  { name: 'PEMEX', logo: '/clients/pemex.svg' },
  { name: 'Convergia', logo: '/clients/convergia.png' },
  { name: 'IPN', logo: 'https://unavatar.io/x/IPN_MX' },
  { name: 'CONAGUA', logo: 'https://unavatar.io/x/conagua_mx' },
  { name: 'WEG', logo: '/clients/weg.svg' },
  { name: 'ECOMA', svg: 'ecoma' },
  { name: 'ABInBev / Grupo Modelo', logo: '/clients/grupomodelo.png' },
  { name: 'Cinvestav', logo: 'https://unavatar.io/x/cinvestav' },
];

const ExactMatchLogos = ({ brand }: { brand: string }) => {
  if (brand === 'fesogo') return (
    <svg viewBox="0 0 300 120" className="w-auto h-full object-contain" style={{ maxHeight: '4rem' }} xmlns="http://www.w3.org/2000/svg">
      <text x="20" y="70" fill="#3B4655" fontSize="56" fontFamily="Arial, sans-serif" letterSpacing="-1">FESO</text>
      <text x="165" y="78" fill="#8BC34A" fontSize="72" fontFamily="'Brush Script MT', cursive, Marker Felt" fontWeight="bold">go</text>
      <text x="25" y="95" fill="#A0A0A0" fontSize="18" fontFamily="Arial, sans-serif" fontWeight="300">Comunicaciones</text>
    </svg>
  );

  if (brand === 'ortho') return (
    <svg viewBox="0 0 300 140" className="w-auto h-full object-contain" style={{ maxHeight: '4rem' }} xmlns="http://www.w3.org/2000/svg">
      <rect width="300" height="140" fill="#0A0A0A" rx="4"/>
      <text x="50" y="40" fill="#FFFFFF" fontSize="28" fontFamily="'Times New Roman', serif" letterSpacing="0">Distribuidora</text>
      {/* Grey interlocking Z shapes */}
      <path d="M100 120 L200 65 L220 65 L120 120 Z" fill="#666666" />
      <path d="M120 110 L220 55 L240 55 L140 110 Z" fill="#999999" />
      <text x="20" y="98" fill="#FFFFFF" fontSize="68" fontFamily="Inter, Arial, sans-serif" fontWeight="900" letterSpacing="2">ORTHO</text>
      <text x="180" y="125" fill="#FFFFFF" fontSize="15" fontFamily="Arial, sans-serif">Fundada en 1991</text>
    </svg>
  );

  if (brand === 'ecoma') return (
    <svg viewBox="0 0 300 140" className="w-auto h-full object-contain" style={{ maxHeight: '4rem' }} xmlns="http://www.w3.org/2000/svg">
      <rect width="300" height="140" fill="#000000" rx="4"/>
      <rect x="25" y="25" width="180" height="4" fill="#FFFFFF" />
      <text x="20" y="110" fill="#FFFFFF" fontSize="64" fontFamily="'Courier New', Courier, serif" fontWeight="bold" letterSpacing="3">ECOMA</text>
    </svg>
  );
  return null;
}

const ClientsCarousel: React.FC = () => {
  const { t } = useTranslation();
  // Duplicate array for infinite scroll effect
  const repeatedClients = [...clients, ...clients];

  return (
    <section className="py-20 bg-white dark:bg-[#040822] border-t border-slate-100 dark:border-slate-800 overflow-hidden relative">
      <div className="container mx-auto px-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 dark:text-white mb-4">
          {t('clients.title')} <span className="text-blue-600 dark:text-blue-400">{t('clients.titleHighlight')}</span>
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-center max-w-2xl mx-auto">
          {t('clients.subtitle')}
        </p>
      </div>

      <div className="relative w-full overflow-hidden flex flex-col group py-4">
        {/* Fading Edges */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white dark:from-[#040822] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white dark:from-[#040822] to-transparent z-10 pointer-events-none" />

        {/* Carousel Tracks */}
        <div className="flex w-fit animate-scroll hover:[animation-play-state:paused]">
          {repeatedClients.map((client, idx) => (
             <div
               key={idx}
               className="flex flex-col items-center justify-center w-56 mx-6 h-36 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300 shrink-0"
               title={client.name}
             >
              <div className="h-20 w-full flex items-center justify-center mb-3">
                 {client.svg ? (
                   <ExactMatchLogos brand={client.svg} />
                 ) : (
                   <img
                     src={client.logo}
                     alt={client.name}
                     className="w-[auto] max-w-full h-[auto] max-h-full min-w-[64px] min-h-[64px] object-contain drop-shadow-sm rounded-lg"
                     style={{ imageRendering: 'auto' }}
                     onError={(e) => {
                       (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(client.name)}&background=random&color=fff&size=256&font-size=0.33`;
                     }}
                   />
                 )}
               </div>
               <span className="text-sm font-semibold text-center text-slate-800 dark:text-slate-200 tracking-tight leading-tight px-2 w-full truncate">
                  {client.name}
               </span>
             </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsCarousel;
