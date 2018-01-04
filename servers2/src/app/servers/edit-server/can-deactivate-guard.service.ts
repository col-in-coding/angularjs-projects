import { Observable } from 'rxjs/Observable';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {

  // will be called by angular router, once to leave a route
  // inject component to the service
  canDeactivate(component: CanComponentDeactivate,
		        currentRoute: ActivatedRouteSnapshot,
		        currentState: RouterStateSnapshot,
		        nextState?: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
		return component.canDeactivate();
  }
}