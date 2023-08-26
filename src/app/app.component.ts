import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';

// for toast
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'random-card';

  // to store the user which comes from the api response
  user: any;

  // using service
  constructor(
  private userService: UserService,
  private toastr: ToastrService
  ) {}


  ngOnInit(): void {
    this.userService.getUser().subscribe(
      (user: any) => {
        console.log(user.results[0]);
        this.user = user.results[0];
      },
      (err) => {
        // handling error here
        console.error(err);
        this.toastr.error(err.status, 'Something went wrong');
      }
    )
  }
}
