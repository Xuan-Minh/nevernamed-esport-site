import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import AnimatedElement from '../components/common/AnimatedElement';

function TermsPage() {
  const { t } = useTranslation();

  return (
    <AnimatedElement>
      <div className="container mx-auto px-4 overflow-y-hidden pt-10 sm:pt-20 pb-12">
        <Helmet>
          <title>NeverNamed Esport - {t('terms.title')}</title>
          <meta name="description" content={t('terms.intro')} />
        </Helmet>

        <section className="relative min-h-[calc(65vh-6rem)] flex flex-col items-center justify-center">
          <div className="w-full text-center translate-y-6 sm:translate-y-10 md:translate-y-14">
            <h1 className="font-unbounded text-4xl sm:text-5xl font-bold mb-8">
              {t('terms.title')}
            </h1>
          </div>
        </section>

        <div className="max-w-3xl w-full mx-auto font-poppins">
          <h2 className="font-bold text-2xl mt-10 mb-3">{t('terms.access')}</h2>
          <p className="mb-5 text-base">{t('terms.accessText')}</p>

          <h2 className="font-bold text-2xl mt-10 mb-3">{t('terms.usage')}</h2>
          <p className="mb-5 text-base">{t('terms.usageText')}</p>

          <h2 className="font-bold text-2xl mt-10 mb-3">{t('terms.property')}</h2>
          <p className="mb-5 text-base">{t('terms.propertyText')}</p>

          <h2 className="font-bold text-2xl mt-10 mb-3">{t('terms.liability')}</h2>
          <p className="mb-5 text-base">{t('terms.liabilityText')}</p>

          <h2 className="font-bold text-2xl mt-10 mb-3">{t('terms.modification')}</h2>
          <p className="mb-5 text-base">{t('terms.modificationText')}</p>

          <p className="text-xs text-gray-400 mt-10 text-center">{t('terms.lastUpdate')}</p>
        </div>
      </div>
    </AnimatedElement>
  );
}

export default TermsPage;
