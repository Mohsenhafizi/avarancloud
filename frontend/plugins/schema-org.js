// Plugin for structured data (Schema.org)
export default defineNuxtPlugin(() => {
  const schemaOrgMarkup = {
    // Standard schema for website
    generateWebsiteSchema() {
      return {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'ابرآوران',
        url: 'https://avarancloud.ir',
        description: 'ابرآوران ارائه دهنده خدمات طراحی سایت و سایت ساز حرفه‌ای با امکانات کامل مدیریتی',
        inLanguage: 'fa-IR',
        potentialAction: {
          '@type': 'SearchAction',
          target: 'https://avarancloud.ir/search?q={search_term_string}',
          'query-input': 'required name=search_term_string'
        }
      };
    },

    // Organization schema
    generateOrganizationSchema() {
      return {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'ابرآوران',
        alternateName: ['Avaran Cloud', 'ابر آوران', 'آوران کلاود', 'طراحی سایت ابرآوران', 'سایت ساز ابرآوران'],
        url: 'https://avarancloud.ir',
        logo: {
          '@type': 'ImageObject',
          url: 'https://avarancloud.ir/assets/photos/logo-avarancloud.png',
          width: '180',
          height: '60'
        },
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+98-XXX-XXX-XXXX',
          contactType: 'customer service',
          availableLanguage: 'Persian'
        },
        sameAs: [
          'https://www.instagram.com/avarancloud',
          'https://www.linkedin.com/company/avarancloud',
          'https://t.me/avarancloud'
        ]
      };
    },

    // Generate Service schema
    generateServiceSchema() {
      return {
        '@context': 'https://schema.org',
        '@type': 'Service',
        serviceType: 'طراحی سایت',
        provider: {
          '@type': 'Organization',
          name: 'ابرآوران',
          url: 'https://avarancloud.ir'
        },
        description: 'طراحی و توسعه انواع وب‌سایت‌های شخصی، شرکتی و فروشگاهی با جدیدترین تکنولوژی‌ها و بهینه‌سازی کامل برای موتورهای جستجو',
        areaServed: 'ایران',
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'خدمات طراحی سایت',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'طراحی سایت فروشگاهی'
              }
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'طراحی سایت شرکتی'
              }
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'سایت ساز حرفه‌ای'
              }
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'خدمات سئو'
              }
            }
          ]
        }
      };
    },

    // Generate webpage schema
    generateWebPageSchema(title, description, url = 'https://avarancloud.ir') {
      return {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: title || 'ابرآوران | طراحی سایت و سایت ساز حرفه‌ای',
        description: description || 'ابرآوران ارائه دهنده خدمات طراحی سایت و سایت ساز حرفه‌ای با امکانات کامل مدیریتی',
        url: url,
        inLanguage: 'fa-IR',
        lastReviewed: new Date().toISOString(),
        mainContentOfPage: {
          '@type': 'WebPageElement',
          cssSelector: '.main-content'
        },
        speakable: {
          '@type': 'SpeakableSpecification',
          cssSelector: ['header', 'main', 'footer']
        }
      };
    },

    // Add breadcrumb schema for SEO
    generateBreadcrumbSchema(items) {
      return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items || [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'خانه',
            item: 'https://avarancloud.ir/'
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'سایت ساز',
            item: 'https://avarancloud.ir/site-builder'
          }
        ]
      };
    },

    // Add FAQ schema
    generateFAQSchema(questions) {
      return {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: questions || [
          {
            '@type': 'Question',
            name: 'هزینه طراحی سایت توسط ابرآوران چقدر است؟',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'هزینه طراحی سایت در ابرآوران بسته به نیازهای شما و نوع پروژه متفاوت است. ما پکیج‌های مختلفی با قیمت‌های مناسب برای کسب و کارهای کوچک تا بزرگ ارائه می‌دهیم.'
            }
          }
        ]
      };
    }
  };

  // Add schema to page
  const addJsonLdSchema = (schema) => {
    // Only run on client-side
    if (process.server) return;
    
    // Create script element
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
  };

  // Create and return a utility for injecting schema markup
  return {
    provide: {
      schemaOrg: {
        ...schemaOrgMarkup,
        addJsonLdSchema
      }
    }
  };
}); 