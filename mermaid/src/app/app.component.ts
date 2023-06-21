import { AfterViewInit, Component, OnInit } from '@angular/core';
import Mermaid from 'mermaid'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'mermaid';
  flowChart: any;
  stringFlowChart: any = "";

  config = {

    // 'theme': 'forest',
    // 'theme': 'default', 
    // 'theme': 'base',
    // 'theme': 'neutral',
    // 'theme': 'dark',
    // invert, darken, lighten, adjust, isDark
    // 'themeVariables': {
    //   'primaryColor': 'rgba(255,131,205,.06)',
    //   'primaryTextColor': '#ff83cd',
    //   'font-family': '-apple system, BlinkMacSystemFont, segoe ui, Oxygen, Ubuntu, Cantarell, fira sans, droid sans, helvetica neue, sans- serif',
    // }
    'themeVariables': {
      'primaryColor': '#BB2528',
      'primaryTextColor': '#fff',
      'primaryBorderColor': '#7C0000',
      'lineColor': '#F8B229',
      'secondaryColor': '#006100',
      'tertiaryColor': '#fff'
    }
  }

  constructor() {
  }

  ngOnInit(): void {
    Mermaid.initialize(this.config)
  }

  ngAfterViewInit(): void {
    this.creatediagram()
  }

  creatediagram() {
    this.flowChart = [


      "gantt",
      "title A Gantt Diagram",
      "dateFormat  YYYY-MM-DD",
      "tickInterval 3day",
      // "tickInterval 1w",
      "axisFormat %m-%d",
      "section Section",
      "A task :  2014-01-06,2014-01-15",
      "Another task : 2014-01-15 , 30d ",
      "section Another",
      "Task in sec : 2014-01-12, 12d",
      "another task : 24d"

      // FOR THE FLOW CHART

      //   // "flowchart RL",
      //   "graph TD",
      //   "start --> a[(Database)] & 3{3}",
      //   "a[(Database)] --> 1(yes) & 3{3}",
      //   "3{3} --> 1(yes)",
      //   "4 --> 1(yes)",
      //   "5 --> 1(yes)",
      //   "6 --> 1(yes)",
      //   "1{{yes}} --> 7",
      //   "7 --> 8",
      //   "8 --> a[(Database)]",
    ];
    this.stringFlowChart = this.flowChart.join("\n");
  }


}
