import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-login-overlay',
  templateUrl: './login-overlay.component.html',
  styleUrls: ['./login-overlay.component.css'],
})
export class LoginOverlayComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private router: Router,
              private dialog: MatDialog,
              public dialogRef: MatDialogRef<LoginOverlayComponent>)
              { }

  ngOnInit(): void {
  }

  onLoginClick() {
    this.router.navigate(['../main'], {relativeTo: this.route});
    this.onClose();
  }

  onClose() {
    this.dialogRef.close();
  }

}
