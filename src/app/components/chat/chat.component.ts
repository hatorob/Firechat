import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styles: [
  ]
})
export class ChatComponent {

  mensaje: string = "";

  constructor( public cs: ChatService ) { 
    this.cs.cargarMensajes()
          .subscribe();
   }

  enviar_mensaje() {
    console.log(this.mensaje);

    if( this.mensaje.length === 0) {
      return;
    } 
    this.cs.agregarMensaje( this.mensaje )
            .then( () => this.mensaje = "")
            .catch( (err) => console.error("Error al enviar..", err));
  }

}
