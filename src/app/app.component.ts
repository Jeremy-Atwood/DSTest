import { Component, OnInit } from '@angular/core';
import { UsersService } from './services/users.service';
import { Users } from './models/users';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class AppComponent implements OnInit {
  public users: Users[];
  public dataSource;
  public displayedColumns: string[] = ['id', 'name', 'username', 'email'];
  public expandElement: Users | null;
  
  constructor (
    private usersService: UsersService
  ){}

  ngOnInit() {
    this.getUsers();
  }

  private getUsers () {
    this.usersService.getUsersList().subscribe(
      data => {
        this.users = data;
        this.dataSource = new MatTableDataSource(this.users);
      }
    )
  }

  public applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
