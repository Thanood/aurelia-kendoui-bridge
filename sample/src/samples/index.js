import {inject} from 'aurelia-framework';
import {Registry} from 'shared/registry';

@inject(Registry)
export class Index {

  constructor(registry) {
    this.registry = registry;
  }

  configureRouter(config, router) {
    config.title = 'Samples';

    config.map([
      { name: 'default',          route: '',                    redirect: 'grid' },
      { name: 'grid',             route: 'grid',                moduleId: './grid/index',                   title: 'Grid',              settings: { pro: true } }
    ]);

    this.router = router;
  }
}
