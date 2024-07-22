import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { IUser } from '../../types/user/IUser';

const ELEMENT_DATA: IUser[] = [];

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.css'
})
export class UsersListComponent implements OnInit{
  displayedColumns: string[] = ['id', 'name', 'email', 'symbol'];
  dataSource = ELEMENT_DATA;

  constructor(private readonly _userService: UserService){}
  
  ngOnInit(): void {
    this.findAll()
  }
  
  findAll(){
    this._userService.findAll().subscribe(response =>{
      this.dataSource = response
    })
  }
}
