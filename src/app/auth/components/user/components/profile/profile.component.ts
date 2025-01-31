import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { User } from '@app/core/models/user.model';
import { UserEditComponent } from '../user-edit/user-edit.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  @Input() user: User | undefined; 

  countries = [
    { name: 'Argentina', code: 'AR' },
    { name: 'Bolivia', code: 'BO' },
    { name: 'Brasil', code: 'BR' },
    { name: 'Chile', code: 'CL' },
    { name: 'Colombia', code: 'CO' },
    { name: 'Costa Rica', code: 'CR' },
    { name: 'Cuba', code: 'CU' },
    { name: 'Ecuador', code: 'EC' },
    { name: 'El Salvador', code: 'SV' },
    { name: 'Guatemala', code: 'GT' },
    { name: 'Honduras', code: 'HN' },
    { name: 'México', code: 'MX' },
    { name: 'Nicaragua', code: 'NI' },
    { name: 'Panamá', code: 'PA' },
    { name: 'Paraguay', code: 'PY' },
    { name: 'Perú', code: 'PE' },
    { name: 'República Dominicana', code: 'DO' },
    { name: 'Uruguay', code: 'UY' },
    { name: 'Venezuela', code: 'VE' }
  ];

  constructor(
    private _matDialog: MatDialog,
  ) { }

  editProfile() {
        this._matDialog.open(UserEditComponent,{
          width: '1000px',
          data: this.user,
          panelClass: 'custom-dialog-container'
        });

  }



  deleteProfile() {
    console.log('Delete profile');
  }

  getFlagImage(countryName: string): string {
    const flag = this.countries.find(country => country.name == countryName);
    return `https://flagcdn.com/w320/${countryName.toLocaleLowerCase()}.png`; 
  }

  getCountrie(codeCountry: string): string{
    const value = this.countries.find(country => country.code == codeCountry);
    return value ? value.name : '';
  }





}
