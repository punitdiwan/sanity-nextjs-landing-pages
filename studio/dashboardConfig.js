export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e00bbdbee2d9f34040fcdbf',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-p62ofwde',
                  apiId: 'a8097210-54e1-431d-8ca5-c9f385b35538'
                },
                {
                  buildHookId: '5e00bbdb64a22c6df59759e8',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-5ji98mbn',
                  apiId: 'eed483ef-94ba-4b2e-bb8b-fab9085e6cba'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/punitdiwan/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-5ji98mbn.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
