/**
 * Minimal Schema.org TypeScript interfaces.
 * In a production environment, it is recommended to use the 'schema-dts' package.
 */

export interface SchemaContext {
  "@context": "https://schema.org";
}

export interface Organization extends SchemaContext {
  "@type": "Organization";
  name: string;
  url: string;
  logo?: string;
  sameAs?: string[];
  description?: string;
}

export interface Article extends SchemaContext {
  "@type": "Article";
  headline: string;
  description: string;
  image?: string;
  datePublished?: string;
  dateModified?: string;
  author?: {
    "@type": "Person" | "Organization";
    name: string;
    url?: string;
  }[];
  publisher?: {
    "@type": "Organization";
    name: string;
    logo?: {
      "@type": "ImageObject";
      url: string;
    };
  };
}

export type Schema = Organization | Article | Record<string, any>;
