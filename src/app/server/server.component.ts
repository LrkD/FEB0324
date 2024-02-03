import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrl: '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
})
export class ServerComponent {
    serverName="Server name";
    disabledButton: boolean = false;
    serverStatus: string = "";
    resetServerName(){
      this.serverName="";
      this.disabledButton = true;
    }

    setServerName(event: Event){
      this.disabledButton = false;
      this.serverName = (<HTMLInputElement>event.target).value;
    }

    addServer(){
      this.serverStatus = "A server with a name " + this.serverName + " has been added";
    }

    addButtonCSSStyles(){
      let CssStyles = {
        'color': 'red',
        'font-weight': 'bold',
        'font-size.px': 20
      };
      return CssStyles;
    }
}
