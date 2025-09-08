import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import AnimatedElement from '../components/common/AnimatedElement';

function PolitiquesPage() {
  const { t } = useTranslation();

  return (
    
      <div className="container mx-auto px-4 overflow-y-hidden pt-10 sm:pt-20 pb-12">
        <Helmet>
          <title>NeverNamed - {t('privacy.title')}</title>
          <meta name="description" content={t('privacy.intro')} />
        </Helmet>
        <AnimatedElement>
        <section className="relative min-h-[calc(65vh-6rem)] flex flex-col items-center justify-center">
          <div className="w-full text-center translate-y-6 sm:translate-y-10 md:translate-y-14">
            <h1 className="font-unbounded text-4xl sm:text-5xl font-bold mb-8">
              {t('privacy.title')}
            </h1>
          </div>
        </section>
        </AnimatedElement>
        <div className="max-w-3xl w-full mx-auto font-poppins">
          <h2 className="font-bold text-2xl mt-10 mb-3">{t('privacy.dataTitle')}</h2>
          <ul className="list-disc list-inside mb-5 text-base">
            <li>{t('privacy.dataForm')}</li>
            <li>{t('privacy.dataNav')}</li>
          </ul>
          <h2 className="font-bold text-2xl mt-10 mb-3">{t('privacy.useTitle')}</h2>
          <ul className="list-disc list-inside mb-5 text-base">
            <li>{t('privacy.useContact')}</li>
            <li>{t('privacy.useImprove')}</li>
            <li>{t('privacy.useStats')}</li>
          </ul>
          <h2 className="font-bold text-2xl mt-10 mb-3">{t('privacy.cookiesTitle')}</h2>
          <p className="mb-5 text-base">{t('privacy.cookiesText')}</p>
          <h2 className="font-bold text-2xl mt-10 mb-3">{t('privacy.shareTitle')}</h2>
          <p className="mb-5 text-base">{t('privacy.shareText')}</p>
          <h2 className="font-bold text-2xl mt-10 mb-3">{t('privacy.rightsTitle')}</h2>
          <p className="mb-5 text-base">
            {t('privacy.rightsText')}{' '}
            <a href="mailto:contact@nevernamed-esport.com" className="underline text-brand-accent">
              contact@thenevernamed.com
            </a>
          </p>
          <h2 className="font-bold text-2xl mt-10 mb-3">{t('privacy.contactTitle')}</h2>
          <p className="mb-5 text-base">{t('privacy.contactText')}</p>
          <p className="text-xs text-gray-400 mt-10 text-center">{t('privacy.lastUpdate')}</p>
        </div>
      </div>
    </AnimatedElement>
  );
}

export default PolitiquesPage;
