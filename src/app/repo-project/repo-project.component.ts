import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MyserviceService } from 'src/services/myservice.service';
import { RepositoryService } from 'src/services/repository.service';

interface mydata
{
  foldertype:string;
  folder:string;
  id:string
}

@Component({
  selector: 'app-repo-project',
  templateUrl: './repo-project.component.html',
  styleUrls: ['./repo-project.component.css']
})
export class RepoProjectComponent {

  isvisible = true
  visible=false
  showme=true
  statuses:any[]=[]
  productDialog!:boolean
  productDialog1!:boolean
  description:any
  repodata:any[]=[]
  formdata: any;
  arrlist: any;


  constructor(private user:MyserviceService,private repo:RepositoryService){}





  ngOnInit()
  {
    this.formdata = new FormGroup({
      type: new FormControl('',Validators.required),
      Credfile: new FormControl('',Validators.required),
      folderpath: new FormControl('',Validators.required),
      appname: new FormControl('',Validators.required),
      clientid: new FormControl('',Validators.required),
      username: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required),
    })
  }

  products:mydata[] =

   [
    {foldertype:'Google',folder:'foldername',id:'index'},
    {foldertype:'OneDrive',folder:'foldername',id:'index'},
    {foldertype:'Google',folder:'foldername',id:'index'},
    {foldertype:'OneDrive',folder:'foldername',id:'index'},
  ]


  showdialogue()
  {
    this.productDialog = true;
    this.visible = false;
  }


  showtable()
  {
    this.visible = true;
    // alert("hello")
  }

  oncancel()
  {
    this.productDialog = false;
    this.visible = true;
  }

  showdialogue1()
  {
    this.productDialog = true;
    this.visible = false;
  }


  onsave()
  {
      this.user.adduser(this.formdata.value).subscribe((data:any)=>{
        console.log(data);
        
      })

      this.displaydata()
  }

  displaydata()
  {
    this.user.addalluser().subscribe((data:any)=>
    {
      console.log(data);
      this.arrlist = data
      
    })
  }

  save()
  {
    this.repo.addRepo(this.repodata.values).subscribe((data:any)=>{
      console.log(data);
      
    })
  }


  hiderepo(){
    // this.productDialog1 = true
    // this.isvisible = false
    alert("hello")
  }

  show(){
    debugger
    alert("hello")
  }
  hello()
  {
    console.log("hello print");   
  }
}
