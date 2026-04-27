import React from 'react';
import { Schema } from '@/types/schema';

/**
 * Reusable JsonLd component to safely inject Schema.org markup into the <head>.
 * This implementation avoids React hydration errors by using dangerouslySetInnerHTML
 * on a script tag with type "application/ld+json".
 */
interface JsonLdProps {
  schema: Schema;
}

const JsonLd: React.FC<JsonLdProps> = ({ schema }) => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default JsonLd;
