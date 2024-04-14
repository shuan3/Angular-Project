import { Component,OnInit } from '@angular/core';



@Component({
  selector: 'app-my-route',
  templateUrl: './my-route.component.html',
  styleUrls: ['./my-route.component.css']
})
export class MyRouteComponent implements OnInit {
  constructor(){}
  ngOnInit() {}
}


  // loadData(): void {
  //   <powerbi-report
  //   [embedConfig] = {
  //     {
  //       type: "report",
  //         id: "<Report Id>",
  //           embedUrl: "<Embed Url>",
  //             accessToken: "<Access Token>",
  //               tokenType: models.TokenType.Embed,
  //                 settings: {
  //         panes: {
  //           filters: {
  //             expanded: false,
  //               visible: false
  //           }
  //         },
  //         background: models.BackgroundType.Transparent,
  //       }
  //     }
  //   }

  //   [cssClassName] = { "reportClass" }

  //   [phasedEmbedding] = { false }

  //   [eventHandlers] = {
  //     new Map([
  //       ['loaded', () => console.log('Report loaded');],
  //     ['rendered', () => console.log('Report rendered');],
  //     ['error', (event) => console.log(event.detail);]
  //       ])
  //   }
  //     >
  //     </powerbi-report>
  // }

