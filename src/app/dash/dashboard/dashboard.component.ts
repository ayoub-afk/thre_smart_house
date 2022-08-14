import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ProfileUser } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { HouseService } from 'src/app/services/house.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  user$ = this.usersService.currentUserProfile$;

  userData: any;

  constructor(public authService: AuthService,private router:Router,public usersService: UsersService, public houseService: HouseService){
  }

  logout() {
    this.authService.logout().subscribe(() => {
      this.router.navigate(['/']);
    });
  }

  ngOnInit(): void {
   this.usersService.currentUserProfile$.subscribe(user=>{
      if(user){
        console.log(user)
        this.userData = user
      }

    })
  }
  onHouseChange(){

        this.usersService.updateUser(this.userData).subscribe((data)=>{
          console.log(data)
        })




  }

}
