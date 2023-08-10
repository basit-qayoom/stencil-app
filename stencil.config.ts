import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'stencil-pw',
  sourceMap: false,
  bundles:[
    {components:['my-app']},
    {components:['my-button']},
    {components:['my-form']},
    {components:['my-input']},
    {components:['my-timer']},
  ],
  buildEs5: true, // Enable ES5 build for broader compatibility
  minifyJs: true, // Minify JavaScript output
  minifyCss: true, // Minify CSS output
  outputTargets: [
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior:'auto-define-custom-elements',
      generateTypeDeclarations:false,
      dir: "pw/core",
      empty:true
    }, 
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      isPrimaryPackageOutputTarget:true
    },
    {
      type:'www'
    },
    {
      type:'dist-hydrate-script',
    }
  ],
  validatePrimaryPackageOutputTarget:true

};
