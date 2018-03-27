import { Component } from '@angular/core';

@Component({
  selector: 'mu-server',
  templateUrl: './server.component.html',
  styles: [`
    .online {
      color : #87d2de;
    }
  `]

})
export class ServerComponent {
  serverId: number = 10;
  serverStatus: string = 'offline';
  title = 'server mu';
  name = '';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getServerStatus() {

    return this.serverStatus;
  }

  getColor() {

    return this.serverStatus === 'online' ? 'green' : 'red';
  }
}
