
import HomePage from '../pages/home.f7';
import AboutPage from '../pages/about.f7';
import FormPage from '../pages/form.f7';
import RequestAndLoad from '../pages/request-and-load.f7';
import NotFoundPage from '../pages/404.f7';
import TypeList from '../pages/type/listTypes.f7';
import FormListe from '../pages/liste/formCreateListe.f7';
import FormType from '../pages/type/formCreateType.f7';
import FormModifType from '../pages/type/formModifType.f7';
import FormModifListe from '../pages/liste/formModifListe.f7';
import TacheList from '../pages/tache/listTaches.f7';
import TacheDetail from '../pages/tache/detail.f7';
import FormTache from '../pages/tache/formCreateTache.f7';
import FormModifTache from '../pages/tache/formModifTache.f7';

var routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/type/:idListe',
    component: TypeList,
  },
  {
    path: '/tache/:idListe/:idType',
    component: TacheList,
  },
  {
    path: '/detail/:idTache',
    component: TacheDetail,
  },
  {
    path: '/formListe/',
    component: FormListe,
  },
  {
    path: '/formType/:idListe',
    component: FormType,
  },
  {
    path: '/formTache/:idListe/:idType',
    component: FormTache,
  },
  {
    path: '/formModifListe/:idListe',
    component: FormModifListe,
  },
  {
    path: '/formModifTache/:idTache',
    component: FormModifTache,
  },
  {
    path: '/formModifType/:idType',
    component: FormModifType,
  },
  {
    path: '/about/',
    component: AboutPage,
  },
  {
    path: '/form/',
    component: FormPage,
  },

  {
    path: '/request-and-load/user/:userId/',
    async: function ({ router, to, resolve }) {
      // App instance
      var app = router.app;

      // Show Preloader
      app.preloader.show();

      // User ID from request
      var userId = to.params.userId;

      // Simulate Ajax Request
      setTimeout(function () {
        // We got user data from request
        var user = {
          firstName: 'Vladimir',
          lastName: 'Kharlampidi',
          about: 'Hello, i am creator of Framework7! Hope you like it!',
          links: [
            {
              title: 'Framework7 Website',
              url: 'http://framework7.io',
            },
            {
              title: 'Framework7 Forum',
              url: 'http://forum.framework7.io',
            },
          ]
        };
        // Hide Preloader
        app.preloader.hide();

        // Resolve route to load page
        resolve(
          {
            component: RequestAndLoad,
          },
          {
            props: {
              user: user,
            }
          }
        );
      }, 1000);
    },
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];

export default routes;