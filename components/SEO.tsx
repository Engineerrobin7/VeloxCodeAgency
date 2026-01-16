
import React, { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  ogType?: string;
  ogImage?: string;
}

export const SEO: React.FC<SEOProps> = ({ 
  title, 
  description, 
  ogType = 'website', 
  ogImage = 'https://picsum.photos/1200/630?grayscale' 
}) => {
  const fullTitle = `${title} | VeloxCodeAgency`;

  useEffect(() => {
    // Update Title
    document.title = fullTitle;

    // Update Meta Tags
    const updateMeta = (name: string, content: string, attr: 'name' | 'property' = 'name') => {
      let element = document.querySelector(`meta[${attr}="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attr, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    updateMeta('description', description);
    updateMeta('og:title', fullTitle, 'property');
    updateMeta('og:description', description, 'property');
    updateMeta('og:type', ogType, 'property');
    updateMeta('og:image', ogImage, 'property');
    updateMeta('twitter:card', 'summary_large_image');
    updateMeta('twitter:title', fullTitle);
    updateMeta('twitter:description', description);

  }, [fullTitle, description, ogType, ogImage]);

  return null; // This component doesn't render anything to the DOM
};
