import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  name?: string;
  type?: string;
  image?: string;
  url?: string;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  name = "Dajek Network",
  type = "website",
  image = "/dajek_nobg.png",
  url = "https://dajeknetwork.com"
}) => {
  const fullTitle = `${title} | ${name}`;
  
  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      
      {/* Open Graph metadata */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {/* If the image is a relative path (e.g. from public directory), convert it to absolute URL if needed, but relative usually works fine if base is correct, though absolute is safer for OG tags. Assuming the base domain is dajeknetwork.com */}
      <meta property="og:image" content={image.startsWith('http') ? image : `${url}${image}`} />
      <meta property="og:url" content={url} />
      
      {/* Twitter metadata */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image.startsWith('http') ? image : `${url}${image}`} />
    </Helmet>
  );
};

export default SEO;
