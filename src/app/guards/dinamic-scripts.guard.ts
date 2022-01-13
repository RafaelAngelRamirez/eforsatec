import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  Route,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import {
  DinamicScriptsService,
  ScriptStore,
} from '../services/dinamic-scripts.service';

@Injectable({
  providedIn: 'root',
})
export class DinamicScriptsGuard implements CanLoad, CanActivate {
  constructor(private scriptsService: DinamicScriptsService) {}
  canLoad(
    route: Route,
    segments: UrlSegment[]
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    return new Promise<boolean>((resolve, reject) => {
      this.scriptsService
        .load(...ScriptStore.map((x) => x.name))
        .then((data) => {
          console.log(data);
          resolve(true);
        })
        .catch((err) => {
          console.error(err);

          reject(err);
        });
    });
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return new Promise<boolean>((resolve, reject) => {
      this.scriptsService
        .load(...ScriptStore.map((x) => x.name))
        .then((data) => {
          console.log(data);
          resolve(true);
        })
        .catch((err) => {
          console.error(err);

          reject(err);
        });
    });
  }
}
