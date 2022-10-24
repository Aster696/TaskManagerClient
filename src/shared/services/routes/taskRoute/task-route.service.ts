import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { routePath } from 'src/shared/lib/routePath';
import { TaskModel } from 'src/shared/models/taskModel';
import { UserRouteService } from '../userRoute/user-route.service';

@Injectable({
  providedIn: 'root'
})
export class TaskRouteService {

  constructor(
    private http: HttpClient,
    private userRouteService: UserRouteService,
  ) { }

  routeP = new routePath();

  addTask(formData: TaskModel) {
    const api_url = this.routeP.server_url+this.routeP.addTaskServer;
    return this.http.post<any>(api_url, formData);
  }

  updateTask(id: string, formData: TaskModel) {
    const api_url = this.routeP.server_url+this.routeP.updateTaskServer+id;
    return this.http.patch<any>(api_url, formData);
  }

  deleteTask(id: string) {
    const api_url = this.routeP.server_url+this.routeP.deleterTaskServer+id;
    return this.http.delete<any>(api_url);
  }

  displayTasks() {
    const api_url = this.routeP.server_url+this.routeP.displayTasksServer+this.userRouteService.getTokenId();
    return this.http.get<any>(api_url);
  }

  displayTask(id: string) {
    const api_url = this.routeP.server_url+this.routeP.displayTaskServer+id;
    return this.http.get<any>(api_url);
  }

}
