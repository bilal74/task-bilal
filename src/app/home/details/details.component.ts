import { Component, OnInit, Input, OnChanges  } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  @Input() detailData:any = ''; //To get data from parent
  detailDataShow:any = "";      // To store final array data
  showData:boolean = false;     //To show list of data or not

  constructor() { }

  ngOnChanges(){
   console.log("detailData ",this.detailData);
   this.detailDataShow = this.detailData?.listDetails;  //To store final data

   //It will check the length and based on that it will show the lists
   if(this.detailData?.listDetails.length > 0){
     this.showData = true;
   }
   else{
     this.showData = false;
   }   
  }

  ngOnInit(): void {
  }

}
