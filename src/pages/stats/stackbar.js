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
import { Spin } from 'antd';

export default class StackChart extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      series: [{
        name: '通过结项考核的项目',
        data: [47,79,25] // 高、中、低
      }, {
        name: '未通过结项考核的项目',
        data: [8+7,8+6,2+3] // 高、中、低
      }],
      options: {
        chart: {
          stacked: true
        },
        annotations: {
          points: [{
            x: '高难度共 62',
            y: 27,
            seriesIndex: 0,
            label: {
              offsetY: window.innerWidth > 1200 ? 30:25,
              offsetX: window.innerWidth > 1200 ? 60:30,
              borderWidth: 0,
              style: {
                color: '#00aee6',
                fontSize: window.innerWidth > 1200 ? '20px':'14px',
              },
              text: '47',
            }
          },
          {
            x: '中难度共 93',
            y: 45,
            seriesIndex: 0,
            label: {
              offsetY: window.innerWidth > 1200 ? 30:25,
              offsetX: window.innerWidth > 1200 ? 60:30,
              borderWidth: 0,
              style: {
                color: '#00aee6',
                fontSize: window.innerWidth > 1200 ? '20px':'14px',
              },
              text: '79',
            }
          },
          {
            x: '低难度共 30',
            y: 14,
            seriesIndex: 0,
            label: {
              offsetY: window.innerWidth > 1200 ? 30:25,
              offsetX: window.innerWidth > 1200 ? 60:30,
              borderWidth: 0,
              style: {
                color: '#00aee6',
                fontSize: window.innerWidth > 1200 ? '20px':'14px',
              },
              text: '25',
            }
          }]
        },
        plotOptions: {
          bar: {
              horizontal: false,
              startingShape: 'flat',
              endingShape: 'flat',
              columnWidth: '20%'
          },
        },
        responsive: [{
          breakpoint: 480,
          options: {
            legend: {
              position: 'bottom',
              offsetX: -10,
              offsetY: 0
            }
          }
        }],
        xaxis: {
          categories: ['高难度共 62','中难度共 93','低难度共 30'],
          labels: {
            style: {
              fontSize: window.innerWidth > 1200 ? '20px' : '14px'
            }
          }
        },
        fill: {
          opacity: 1,
          colors: ['#26caff', '#5b72ff']
        },
        legend: {
          show: false
        },
        dataLabels: {
          enabled: false
        },
      },
    }
  }

  componentDidMount() {
    window.setTimeout(
      ()=>{this.setState({
          loading: false
        });
      },10
    );
  }

  getHeight () {
    if (window.innerWidth > 1200) {
      return 300;
    } else {
      return window.innerWidth * 0.8;
    }
  }

  render() {
    return (

      <div>

      {
        this.state.loading ? 
        <Spin style={{width: "100%", height: 600}} size="Large" tip="Loading..."/>
        :
        <Chart options={this.state.options} series={this.state.series} type="bar" height={300}/>
      }
      </div>
    )
  }
}
