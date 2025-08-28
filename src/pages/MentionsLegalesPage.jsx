import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';

function MentionsLegalesPage() {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto px-4 overflow-y-hidden pt-10 sm:pt-20 pb-12">
      <Helmet>
        <title>NeverNamed Esport - {t('legal.title')}</title>
        <meta name="description" content={t('legal.intro')} />
      </Helmet>

      <section className="relative min-h-[calc(65vh-6rem)] flex flex-col items-center justify-center">
        <div className="w-full text-center translate-y-6 sm:translate-y-10 md:translate-y-14">
          <h1 className="font-unbounded text-4xl sm:text-5xl font-bold mb-8">{t('legal.title')}</h1>
          <p className="mb-8 text-lg">{t('legal.intro')}</p>
        </div>
      </section>

      <div className="max-w-3xl w-full mx-auto">
        <h2 className="font-bold text-2xl mt-10 mb-3">{t('legal.editor')}</h2>
        <ul className="list-disc list-inside mb-5 text-base">
          <li>{t('legal.association')}</li>
          <li>{t('legal.address')}</li>
          <li>{t('legal.responsible')}</li>
          <li>{t('legal.email')}</li>
          <li>{t('legal.siren')}</li>
        </ul>
        <h2 className="font-bold text-2xl mt-10 mb-3">{t('legal.hosting')}</h2>
        <ul className="list-disc list-inside mb-5 text-base">
          <li>{t('legal.host')}</li>
          <li>{t('legal.hostAddress')}</li>
          <li>{t('legal.hostPhone')}</li>
        </ul>
        <h2 className="font-bold text-2xl mt-10 mb-3">{t('legal.intellectual')}</h2>
        <p className="mb-5 text-base">{t('legal.intellectualText')}</p>
        <h2 className="font-bold text-2xl mt-10 mb-3">{t('legal.contact')}</h2>
        <p className="mb-5 text-base">{t('legal.contact')}</p>
        <p className="text-xs text-gray-400 mt-10 text-center">{t('legal.lastUpdate')}</p>
      </div>
    </div>
  );
}

export default MentionsLegalesPage;