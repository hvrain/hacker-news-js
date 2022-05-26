import { RouteInfo } from '../types'
import View from './view'

export default class Router {
  private routeTable: RouteInfo[];
  private defaultRoute: RouteInfo | null

  constructor() {
    window.addEventListener("hashchange", this.route.bind(this));
  
    this.routeTable = [];
    this.defaultRoute = null;
  }

  setDefaultPage(page: View): void {
    this.defaultRoute = { path: '', page };
  }
  addRouterPath(path: string, page: View): void {
    this.routeTable.push({ path, page })
  }

  route() {
    const routePath = location.hash;
    if (routePath === '' && this.defaultRoute) {
      this.defaultRoute.page.render();
    }

    for (const routeInfo of this.routeTable) {
      if (routePath.indexOf(routeInfo.path) >= 0 ) {
        routeInfo.page.render();
        break;
      }
    }
  }

}