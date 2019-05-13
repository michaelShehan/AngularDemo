import { Component, OnInit, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-bmi-calculator',
  templateUrl: './bmi-calculator.component.html',
  styleUrls: ['./bmi-calculator.component.sass']
})
export class BmiCalculatorComponent implements OnInit {

  constructor() { }
  userBMI;
  rangeValue;
  bmiState;
  metric = true;
  bmiStates = ["under-weight", "ideal-weight", "over-weight", "obese"];
  public textClass = 'panel';
  public heightType;
  public weightType;
  public userWeight;
  public userHeightFeet;
  public userHeightInches;
  
  ngOnInit() {
  }

  calculate(){
    
    if(this.userHeightFeet == null || this.userWeight == null){
        this.userBMI = "Please enter valid values";        
    }
    else{
        var weightMCF = 0.45;
        var heightMCF = 0.025
        var inputWeight = this.userWeight;
        var inputHeight = parseInt(this.userHeightFeet) / 100;
        console.log(this.weightType);
        if(this.weightType == "imperial"){
            console.log("inside Imperial")
            inputWeight = this.userWeight * weightMCF;
        }
        if(this.heightType == "imperial"){
            console.log("inside Imperial")
            var heightInInches = (this.userHeightFeet * 12) + parseInt(this.userHeightInches);
            inputHeight = heightInInches * heightMCF;
        }

        var bmiValue = inputWeight / (inputHeight * inputHeight)
        bmiValue = parseFloat(bmiValue.toFixed(2));
        this.userBMI = bmiValue;
        //this.userBMI = inputWeight + " / " + inputHeight;
        if(bmiValue < 18.5){
            this.bmiState = this.bmiStates[0];
        }
        else if(bmiValue >= 18.5 && bmiValue < 24.9){
            this.bmiState = this.bmiStates[1];
        }
        else if(bmiValue >= 25 && bmiValue < 29.9){
            this.bmiState = this.bmiStates[2];
        }
        else{
            this.bmiState = this.bmiStates[3];
        }
        
        //bmiText.className += " " + this.bmiState;
        this.textClass = "panel " + this.bmiState;
    }
  }
  
  resetValues(){
    this.userBMI = "";
    this.textClass = "panel";
    this.userWeight = "";
    this.userHeightFeet = "";
    this.userHeightInches = "";
  }
}
