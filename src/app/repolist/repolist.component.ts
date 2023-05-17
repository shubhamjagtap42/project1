import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MyserviceService } from 'src/services/myservice.service';
import { RepositoryService } from 'src/services/repository.service';

interface City {
  name: string;
}


@Component({
  selector: 'app-repolist',
  templateUrl: './repolist.component.html',
  styleUrls: ['./repolist.component.css'],
})
export class RepolistComponent implements OnInit {



  productDialog!: boolean;
  isvisible = true;
  formdata!: FormGroup;
  arrlist: any[] = [];
  repodata: any[] = [];
  products: any[] = [];
  arrlist1: any[] = [];
  arrlist2: any[] = [];
  cities: City[] = [
    {name:'OneDrive'},
    {name:'GoogleDrive'}
  ];


 
  objarray: any[] = [];

  selectedCity1!: City[];
  id: any;
  repoId: any;

  // repoId:any;
  


  constructor(
    private user: MyserviceService,
    private repo: RepositoryService,
    private route: Router,
    private  router:ActivatedRoute,

  ) {
    
  }

  ngOnInit() {


    this.user.addalluser().subscribe((data: any) => {
      console.log(data);
      this.products = data;
      console.log(this.products);
    });

    this.router.params.subscribe(params => {
      this.id = +params['${this.repoId}']; 

      console.log(params);
      
    });
   

    this.formdata = new FormGroup({
      type: new FormControl('', Validators.required),
      Credfile: new FormControl('', Validators.required),
      foldername: new FormControl('', Validators.required),
      appname: new FormControl('', Validators.required),
      clientid: new FormControl('', Validators.required),
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      repoId:new FormControl(this.id, Validators.required)
    });
  }

  showdialogue() {
    this.productDialog = true;
  }

  repoData: any;
  showtable(data: any) {
    console.log(data, 'repo data');
    this.repoData = data;
    // alert("hello")
  } 

  oncancel() {
    this.productDialog = false;

  }
  showdialogue1() {
    this.productDialog = true;
  }

  onsave() {

    
    
    // this.formdata.value.repoId=this.repoData.id;

    console.log(this.formdata.value);
    console.log(this.formdata.value.repoId);
    console.log(this.repoData);
    // console.log(this.repoData.id);
    
    // console.log(obj,"obj");

    this.user.adduser(this.formdata.value).subscribe((data: any) => {
      console.log(data);
    });

    

        // const repoId = this.formdata.value.repoId;


    // this.router.navigate(['/repo',repoId])

   
    // console.log(repoId);

    // const repodata = this.repoData.id
    // console.log(repodata);
    
    

    window.location.reload()
  }

  

  hiderepo() {
    this.productDialog = true;
    this.isvisible = false;
    // alert("hello")
  }

  dircreate()
  {
    this.productDialog = true
  }

  
}
