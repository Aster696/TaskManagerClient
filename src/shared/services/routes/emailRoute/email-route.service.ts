import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { routePath } from 'src/shared/lib/routePath';
import { UserModel } from 'src/shared/models/userModel';

@Injectable({
  providedIn: 'root'
})
export class EmailRouteService {

  constructor(
    private http: HttpClient,
  ) { }

  private routeP = new routePath();

  public feedback(formData: UserModel) {
    const api_url = this.routeP.server_url+this.routeP.getFeedbackServer;
    return this.http.post<any>(api_url, formData);
  }

  public sendResetPasswordOtpEmail(formData: UserModel) {
    const api_url = this.routeP.server_url+this.routeP.sendResetPasswordOtpEmailServer;
    return this.http.post<any>(api_url, formData);
  }

  public sendPasswordUpdatedSuccessEmail(id: string) {
    const api_url = this.routeP.server_url+this.routeP.sendPasswordUpdatedSuccessEmailServer+id;
    return this.http.get<any>(api_url);
  }

}
