import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-client-data-with-parameter',
  templateUrl: './client-data-with-parameter.component.html',
  styleUrls: ['./client-data-with-parameter.component.scss']
})
export class ClientDataWithParameterComponent implements OnInit {

  constructor(private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.queryParams.subscribe(
      (params)=>console.log(params)
    )

    this.router.queryParamMap.subscribe(
      (params)=>console.log(params)
    )

    this.router.params.subscribe(
      (params)=>console.log(params)
    )
  }



}
