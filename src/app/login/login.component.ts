import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {SessionService} from "../shared";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private sessionService: SessionService,
              private router: Router) { }

  public ngOnInit(): void {
  }

  public async submit(form: NgForm, data: {identifier: string, password: string}) {
    if(!form.valid) {
      return;
    }
    await this.sessionService.login(data);
    return this.router.navigate(['/profile']);
  }

}
