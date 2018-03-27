import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mu-servers',
  // selector: '[mu-servers]', pasa usar con div u otro elemento   .mu-sercers para invocarlo <div class = mu-services
  templateUrl: './servers.component.html',
  // template: `
  //  <mu-server></mu-server>
  //  <mu-server></mu-server>
  // `,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverName = '';
  serverCreationStatus = 'No server was created!';
  serverCreated = false;
  servers = ['Test server', 'Test server II'];
  constructor() {
    setTimeout(() => {
      this.allowNewServer = !this.allowNewServer;

    }, 2000);

  }
  ngOnInit() {
  }

  switchAllowServer() {
    this.allowNewServer = !this.allowNewServer;

  }

  onCreateServer() {
    this.servers.push(this.serverName);
    this.serverCreated = true;
    this.serverCreationStatus = 'Server has been created! Name is: ' + this.serverName;
  }

  // onUpdateServerName(event: Event) {
  //   console.log(event);
  //   this.serverName = (<HTMLInputElement>event.target).value;
  // }
}
