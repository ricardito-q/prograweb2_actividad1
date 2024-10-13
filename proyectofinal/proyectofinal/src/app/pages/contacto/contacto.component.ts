import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { ContactoModel } from '../models/contactoModel.models';
import { Scontacto } from '../../services/contacto.service';



@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule],
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  
  pacienteModel: ContactoModel = new ContactoModel();
  ContactoModel: ContactoModel | undefined;
  constructor(private scontacto: Scontacto) { }

  ngOnInit(): void { }

 
  guardar(forma: NgForm) {
   
    
    this.scontacto.addContacto(this.pacienteModel)
    .subscribe((resp) => {
      console.log('se registro ');
      Swal.fire({
        allowOutsideClick: false,
        title: 'Confirmación',
        text: 'Se registro ',
      });
      this.ContactoModel = new ContactoModel();
        forma.resetForm();
    });
  }

  abrirWhatsApp() {
    const telefono = 78183032;
    const mensaje = encodeURIComponent(`Hola, mi nombre es `);
    window.open(`https://wa.me/${telefono}?text=${mensaje}`, '_blank');
  }
  
}