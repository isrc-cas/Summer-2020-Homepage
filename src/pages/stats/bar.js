/**
 * Copyright (c) 2020 Intelligent Software Research Center of ISCAS
 * Summer 2020 Homepage is licensed under Mulan PSL v2.
 * You can use this software according to the terms and conditions of the Mulan PSL v2.
 * You may obtain a copy of Mulan PSL v2 at:
 *          http://license.coscl.org.cn/MulanPSL2
 * THIS SOFTWARE IS PROVIDED ON AN "AS IS" BASIS, WITHOUT WARRANTIES OF ANY KIND,
 * EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO NON-INFRINGEMENT,
 * MERCHANTABILITY OR FIT FOR A PARTICULAR PURPOSE.
 * See the Mulan PSL v2 for more details.
 */

import Chart from 'react-apexcharts';
import React from 'react';
import data from './data.json'

export default class BarChart extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: 'stats-chart'
        },
        yaxis: {
          show: false
        },
        xaxis: {
          categories: this.getData('name'),
          labels: {
            show: true,
            style: {
              fontSize: "14px"
            },
            hideOverlappingLabels: false,
            maxHeight: undefined,
            offsetX: 14,
          },
          axisTicks: {
            show: false
          }
        },
        fill: {
          type: "gradient",
          gradient: {
            type: "vertical",
            shadeIntensity: 1,
            opacityFrom: 0.7,
            opacityTo: 0.9,
            gradientFromColors: "#a274ff",
            gradientToColors: "#5984ff",
            colorStops: [
              {
                offset: 0,
                color: "#a274ff",
                opacity: 1
              },
              {
                offset: 100,
                color: "#5984ff",
                opacity: 1
              }
            ]
          }
        },
        grid: {
          yaxis: {
            lines: {
              show: false,
            }
          }
        },
        plotOptions: {
          bar: {
            dataLabels: {
              position: 'top'
            },
            columnWidth: "50%"
          }
        },
        dataLabels: {
          enabled: true,
          offsetY: -30,
          style: {
            fontSize: '18px',
            colors: ["#a274ff"],
            fontWeight: 'light'
          }
        }
      },
      series: [{
        name: '学生申请人数',
        data: this.getData('number')
      }]
    }
  }

  getData (dataName) {
    let temp = [];
    // let data_ = data.universities.sort((a,b)=>{return a['number'] < b['number']? 1 : -1});
    data.universities.map(item => {
      temp.push(item[dataName]);
      return 0;
    });
    return temp;
  }

  getWidth () {
    if (window.innerWidth > 1200) {
      return data.universities.length*30*2 > 1200 ? data.universities.length*30*2 : 1200;
    } else {
      return data.universities.length*30*2 > window.innerWidth ? data.universities.length*30*2 : "100%";
    }
  }

  render() {
    return (
      <Chart options={this.state.options} series={this.state.series} type="bar" width={this.getWidth()} style={{overflowX: "auto", overflowY: "hidden"}} height={600}/>
    )
  }
}