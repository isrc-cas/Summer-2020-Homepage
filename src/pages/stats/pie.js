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

export default class PieChart extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      series: [18+16,151],
      options: {
        labels: ['未通过结项考核的项目','通过结项考核的项目'],
        fill: {
          colors: ['#546cff', '#26caff']
        },
        legend: {
          show: false
        },
        dataLabels: {
          enabled: false,
          formatter: function (val, opts) {
            return opts.w.config.labels[opts.seriesIndex]+":"+opts.w.config.series[opts.seriesIndex]
          },
          offsetX: 50
        },
      }
    };
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
      // alert("large")
      return 300;
    } else {
      return window.innerWidth * 0.35;
    }
  }

  render() {
    return (
      <div>
      {
        this.state.loading ? 
        <Spin style={{width: "100%", height: 600}} size="Large" tip="Loading..."/>
        :
        <Chart options={this.state.options} series={this.state.series} type="pie" height={this.getHeight()}/>
      }
      </div>

    )
  }
}
