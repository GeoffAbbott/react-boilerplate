// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc
// See http://blog.mxstbr.com/2016/01/react-apps-with-pages for more information
// about the code splitting business
import { getAsyncInjectors } from 'utils/asyncInjectors';

const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default);
};

export default function createRoutes(store) {

  // Create reusable async injectors using getAsyncInjectors factory

  const { injectReducer, injectSagas } = getAsyncInjectors(store); // eslint-disable-line no-unused-vars

  return [
    {
      path: '/',

      name: 'home',

      getComponent(nextState, cb) {

        const importModules = Promise.all([

          import('containers/Playlist/reducer'),

          import('containers/ShopifyProvider/reducer'),

          import('containers/Playlist/sagas'),

          import('containers/ShopifyProvider/sagas'),

          import('containers/HomePage'),

        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([playlistReducer, shopifyReducer, playlistSaga, shopifySaga, component]) => {

          injectReducer('home', playlistReducer.default);

          injectReducer('collection', shopifyReducer.default);

          injectSagas(playlistSaga.default);

          injectSagas(shopifySaga.default);

          renderRoute(component);

        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/about',
      name: 'aboutPage',
      getComponent(location, cb) {
        import('containers/AboutPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    }, {
      path: '/product/:handle',
      name: 'productPage',
      getComponent(location, cb) {
        import('containers/AboutPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    }, {

      path: '/artists/:filter',

      name: 'listArtistPage',

      getComponent(location, cb) {

        const importModules = Promise.all([

          import('containers/ListArtistPage/reducer'),

          import('containers/ListArtistPage/sagas'),

          import('containers/ListArtistPage'),

        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([listReducer, listSaga, component]) => {

          injectReducer('listArtistPage', listReducer.default);

          injectSagas(listSaga.default);

          renderRoute(component);

        });

      },
    }, {

      path: ':artistName',

      name: 'bandPage',

      getComponent(nextState, cb) {

        const importModules = Promise.all([

          import('containers/BandPage/reducer'),

          import('containers/BandPage/sagas'),

          import('containers/BandPage'),

        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([bandReducer, bandSaga, component]) => {

          injectReducer('bandPage', bandReducer.default);

          injectSagas(bandSaga.default);

          renderRoute(component);

        });

        importModules.catch(errorLoading);
      },
    },
  ];
}
