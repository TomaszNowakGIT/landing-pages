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
                  buildHookId: '5d95bbb66c144bc040736719',
                  title: 'Sanity Studio',
                  name: 'landing-pages-studio',
                  apiId: 'd492c194-cdbb-4572-8b10-b884da3fc94f'
                },
                {
                  buildHookId: '5d95bbb628b476d1d990ddaa',
                  title: 'Landing pages Website',
                  name: 'landing-pages',
                  apiId: '1a33e17d-2889-4c33-8af1-7a942193ae1c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/TomaszNowakGIT/landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://landing-pages.netlify.com', category: 'apps'}
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
