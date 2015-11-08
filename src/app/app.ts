import {Component} from 'angular2/angular2';
import {RouteConfig, ROUTER_DIRECTIVES, Router} from 'angular2/router';
import {Home} from './home';

@Component({
  selector: 'app',
  template: `
    <a [router-link]="['./Home']">Home</a>
    <router-outlet></router-outlet>
    `,
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  { path: '/', as: 'Home', component: Home }
])
export class App { 
  router : Router;
  
  constructor(router: Router) {
    this.router = router;
  }
}