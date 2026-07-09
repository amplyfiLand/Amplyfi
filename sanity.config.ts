import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemas } from './sanity/schemas';

export default defineConfig({
  name: 'amplify-studio',
  title: 'Amplify CMS',
  basePath: '/',
  projectId: process.env.SANITY_STUDIO_PROJECT_ID!,
  dataset: process.env.SANITY_STUDIO_DATASET ?? 'production',
  plugins: [structureTool()],
  schema: { types: schemas },
});