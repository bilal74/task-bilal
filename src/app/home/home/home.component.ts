import { Component, OnInit } from '@angular/core';

// To assign data type
export interface tableDataType {
  id:number;
  listName:string;
  entities:number;
  date:string;
  actions:boolean;
  details:boolean;
  listDetails:Array<string>;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //Static data for the results
  ELEMENT_DATA: tableDataType[] = [
    {id: 1, listName: 'Test1', entities: 1, actions:true, details:true, date:"Jul 23", listDetails:["One"]},
    {id: 2, listName: 'Test2', entities: 2, actions:true, details:true, date:"Jun 22", listDetails:["One", "Two"]},
    {id: 3, listName: 'Task3', entities: 3, actions:true, details:true, date:"Aug 23", listDetails:["One", "Two", "Three"]},
    {id: 4, listName: 'Task4', entities: 4, actions:true, details:true, date:"Dec 22", listDetails:["One", "Two", "Three", "Four"]},
    {id: 5, listName: 'Task5', entities: 5, actions:true, details:true, date:"Jan 22", listDetails:["One", "Two", "Three", "Four" ,"Five"]},
    {id: 6, listName: 'Task6', entities: 6, actions:true, details:true, date:"Feb 23", listDetails:["One", "Two", "Three", "Four", "Five", "Six"]},
    {id: 7, listName: 'Task7', entities: 6, actions:true, details:true, date:"Mar 23", listDetails:["One", "Two", "Three", "Four", "Five", "Six"]},
  ];
  displayedColumns: string[] = ['date', 'listName', 'entities', 'actions', "details"]; //For column
  dataSource = this.ELEMENT_DATA;   // Final data source
  
  detailData:any;   //Sending this data to child(detail comp)
  
  //If you click on btn then this fn will callled
  detailBtn(e:any){ 
    this.detailData = e;   
  }

  //To get input value and filter based on value
  onKeyInput(event:any) {
    const inputValue = event.target.value;  // To get the input value
    let data = [...this.ELEMENT_DATA];    //Copying the data because we don't want to manupulate the final data

    //For filtering and it will work for both upper and lower case
    const filteredData = data.filter(item => item.listName.toLowerCase().includes(inputValue.toLowerCase()));
    this.dataSource = filteredData; // Final data for table
  }

}


