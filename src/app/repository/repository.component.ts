import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { MyserviceService } from 'src/services/myservice.service';
import { RepositoryService } from 'src/services/repository.service';

interface items {
  reponame: string;
}

interface City
{
  name:string
}

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css'],
})
export class RepositoryComponent {
  // primengConfig: any;
  isvisible = true;
  visible = false;
  products: any[] = [];
  statuses: any[] = [];
  productDialog!: boolean;
  description: any;
  repodata: any[] = [];
  myform!: FormGroup;

  cities:City[]=[
    {name:'IT'},
    {name:'HR'}
  ]
selectedCity1: any;

id:any

  constructor(
    private user: MyserviceService,
    private repo: RepositoryService,
    private route:Router
  ) {}

  // items!:Drive[];

  ngOnInit() {

    this.repo.getRepo().subscribe((data: any) => {
      // console.log(data);
      this.repodata = data;
      console.log(this.repodata);
    });

    

    // this.router.params.subscribe(params => {
    //   this.id = +params['id']; // convert string to number
    // });


    this.myform = new FormGroup({
      reponame: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      manager: new FormControl('', Validators.required),
      department: new FormControl('', Validators.required),
    });
  }

  

  repoData: any;

  showtable(data: any) {
    console.log(data, 'repo data');
    this.repoData = data;
    this.visible = true;
    // alert("hello")
  }

  // hiderepo1()
  // {
  //   this.isvisible = true
  //   // alert('hello')
  // }

  hidedialogue() {}

  save() {
    this.repo.addRepo(this.myform.value).subscribe((data: any) => {
      console.log(data);
    });

    this.productDialog = false
    window.location.reload();

  }

  cancel() {
    this.productDialog = false;
    
  }

  

  hidelist()
  {
    console.log(this.repoData.id);

    this.route.navigate(['/repolist',this.repoData.id])
    
    

  }

  hiderepo() {
    this.productDialog = true;
    this.isvisible = false;
    // alert("hello")
  }

}
