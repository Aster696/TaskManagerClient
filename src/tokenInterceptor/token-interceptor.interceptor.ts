import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserRouteService } from 'src/shared/services/routes/userRoute/user-route.service';

@Injectable()
export class TokenInterceptorInterceptor implements HttpInterceptor {

  constructor(
    private userRouteService: UserRouteService
  ) {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const tokenizedreq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${this.userRouteService.getToken()}` 
      }
    });
    return next.handle(tokenizedreq);
  }
}
