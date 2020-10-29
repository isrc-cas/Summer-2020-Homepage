

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
const logolistMap = {
    company:[
         {
            img:'logo1.jpg',
            url:'http://www.ict.ac.cn/'
        },
        {
            img:'zhongguodianzijishu.jpg',
            url:'http://www.cesi.cn/page/basicinfo.jsp?catalog=/001/001-001'
        },
        {
            img:'logo2.jpg',
            url:'http://www.cambricon.com/'
        },
        {
            img:'mulan.jpg',
            url:'https://mulanos.oschina.net/'
        },
        {
            img:'kaiyuanlianmeng.jpg',
            url:'http://www.coscl.org.cn/'
        },
        {
            name:'xlab',
            img:'c_xlab.jpg',
            url:'http://xlab.kfcoding.com/'
        },
       
    ],
    opencommunity:[
        {
            name:'开源社',
            img:'logo4.jpg',
            url:'https://kaiyuanshe.cn/',
        },
        {
            name:'oschina',
            img:'logo5.jpg',
            url:'https://www.oschina.net/',
        },
        {
            name:'思否',
            img:'logo6.jpg',
            url:'https://segmentfault.com/',
        },
        {
            name:'wuhan2020',
            img:'wuhan2020.jpg',
            url:'https://community.wuhan2020.org.cn/'
        },
        {
            name:'芽木科技',
            img:'c_yamukeji.jpg',
            url:''
        },
    ],
    technology:[
        {
            name:'安同开源社区AOSC',
            img:'c_aosc.jpg',
            url:'https://aosc.io'

            
        },
        {
            name:'ApacheAPISIX',
            img:'c_ApacheAPISIX.jpg',
            url:'https://apisix.apache.org/'
        },
        {
            name:'ApacheDolphinScheduler',
            img:'c_ApacheDolphinScheduler.jpg',
            url:'https://dolphinscheduler.apache.org/zh-cn/'
        },
        {
            name:'ApachePulsar',
            img:'c_ApachePulsar.jpg',
            url:'https://pulsar.apache.org/',
        },
        {
            name:'Apache ServiceComb',
            img:'c_ApacheServiceComb.jpg',
            url:'http://servicecomb.apache.org',
        },
       
        {
            name:'ApacheShardingSphere',
            img:'c_ApacheShardingSphere.jpg',
            url:'https://shardingsphere.apache.org/'
        },
        {
            name:'ApacheSkyWalking',
            img:'c_ApacheSkyWalking.jpg',
            url:'http://skywalking.apache.org/'
        },
        // {
        //     name:'Arctern',
        //     img:'c_Arctern.jpg',
        //     url:'https://arctern.io/'

            
        // },
       
        {
            name:'casbin',
            img:'c_casbin.jpg',
            url:'https://casbin.org/'

            
        },
        {
            name:'ceph',
            img:'c_ceph.jpg',
            url:'http://ceph.org.cn/'
        },
        {
            name:'ChubaoFS社区',
            img:'c_ChubaoFS.jpg',
            url:' https://www.chubao.io/'
        },
        {
            name:'Claps',
            img:'c_Claps.jpg',
            url:'https://github.com/lyricat/claps.dev'
        },
        {
            name:'春松客服',
            img:'c_chunsong.jpg',
            url:'https://github.com/chatopera/cosin'
        },
        {
            name:'elastos',
            img:'c_elastos.jpg',
            url:'https://www.elastos.org/'
        },
        {
            name:'GitCourse',
            img:'c_gitcourse.jpg',
            url:'http://gitcourse-io.kfcoding.com'
        },
        {
            name:'emacs',
            img:'c_emacs.jpg',
            url:'https://www.gnu.org/software/emacs/'
        },
       
        {
            name:'Huawei LiteOS',
            img:'c_HuaweiLiteOS.jpg',
            url:'http://liteos.org'
        },
        {
            name:'Hypertrons',
            img:'c_Hypertrons.jpg',
            url:'http://hypertrons.io'
        },
        {
            name:'鹏城汇智社区（iHub）',
            img:'c_iHub.jpg',
            url:'https://www.ihub.org.cn/'
        },
        {
            name:'KubeEdge',
            img:'c_KubeEdge.jpg',
            url:'https://kubeedge.io'
        },
        {
            name:'Linux内核之旅开源社区',
            img:'c_Linux.jpg',
            url:'http://kerneltravel.net/'
        },
        {
            name:'MACE',
            img:'c_mace.jpg',
            url:'https://github.com/XiaoMi/mace'
        },
       
        {
            name:'MaskBook',
            img:'c_maskbook.jpg',
            url:'https://maskbook.com',
        },
        {
            name:'天元矿视 megengine',
            img:'c_megengine.jpg',
            url:'https://megengine.org.cn/'
        },

        {
            name:'milvus',
            img:'c_milvus.jpg',
            url:'https://www.milvus.io/cn/'
        },

        {
            name:'MindSpore',
            img:'c_MindSpore.jpg',
            url:'https://www.mindspore.cn',
        },
        {
            name:'MiniGUI',
            img:'c_MiniGUI.jpg',
            url:' http://www.minigui.com/',
        },
        
        

        {
            name:'oiwiki',
            img:'c_oiwiki.jpg',
            url:' https://oi-wiki.org'
        },
        {
            name:'opencv',
            img:'c_opencvchina.jpg',
            url:' http://www.opencv.org.cn'
        },
        {
            img:'PostgreSQL.jpg',
            url:'https://www.postgresqlchina.com/'
        },
        {
            name:'rcore-os',
            img:'c_rcoreos.jpg',
            url:'https://github.com/rcore-os'
        },
       
        {
            name:'ROS',
            img:'c_ROS.jpg',
            url:'https://navigation.ros.org/'
        },
        {
            name:'RT-Thread',
            img:'c_rtthread.jpg',
            url:'https://www.rt-thread.org/'
        },
        {
            name:'Simple-XX',
            img:'c_Simple-XX.jpg',
            url:' https://github.com/Simple-XX'
        },
        {
            name:'SODA Foundation',
            img:'c_SODAFoundation.jpg',
            url:' https://sodafoundation.io/'
        },
        {
            name:'泰晓',
            img:'c_taixiao.jpg',
            url:'http://tinylab.org'
        },
        {
            name:'TDengine社区',
            img:'c_taos.jpg',
            url:'https://www.taosdata.com/cn/'
        },
        {
            name:'tuna',
            img:'c_tuna.jpg',
            url:'https://tuna.moe/'
        },
        {
            name:'UniversalOJ',
            img:'c_UniversalOJ.jpg',
            url:'http://uoj.ac/'
        },
        {
            name:'lugustc',
            img:'c_lugustc.jpg',
            url:'https://lug.ustc.edu.cn/wiki/'
        },
        {
            name:'volcano',
            img:'c_volcano.jpg',
            url:'https://volcano.sh'
        },
        {
            name:'Wechaty',
            img:'c_Wechaty.jpg',
            url:'https://github.com/wechaty/'
        },
        {
            name:'feijiang',
            img:'c_feijiang.jpg',
            url:'https://www.paddlepaddle.org.cn/'
        },
        
        
        
      
        
        
        
       
    ],
    university:[
       
        {
            name:'北京大学',
            img:'logo8.jpg',
            url:'https://www.pku.edu.cn/'
        },
        {
            name:'中国人民大学',
            img:'logo29.jpg',
            url:'https://www.ruc.edu.cn/'
        },
        {
            name:'清华大学',
            img:'logo20.jpg',
            url:"https://www.tsinghua.edu.cn/index.htm"
        },
        {
            name:'北京交通大学',
            img:'beijingjiaotong.jpg',
            url:'https://www.bjtu.edu.cn/'
        },
        {
            name:'北京工业大学',
            img:'logo9.jpg',
            url:'http://www.bjut.edu.cn/'
        },
        {
            name:'北京航空航天大学',
            img:'beijinghangkonghangtian.jpg',
            url:'https://www.buaa.edu.cn/'
        },
        {
            name:'北京理工大学',
            img:'logo11.jpg',
            url:'http://www.bit.edu.cn/'
        },
        {
            name:'北京邮电大学',
            img:'beijingyoudian.jpg',
            url:'https://www.bupt.edu.cn/'
        },
        {
            name:'北京林业大学',
            img:'logo_beijinglinye.jpg',
            url:'http://www.bjfu.edu.cn/'
        },
        {
            name:'中央财经大学',
            img:'zhongyangcaijin.jpg',
            url:'http://www.cufe.edu.cn/'
        },
        {
            name:'北京信息科技大学',
            img:'logo12.jpg',
            url:'https://www.bistu.edu.cn/'
        },
        {
            name:'中国科学院大学',
            img:'logo28.jpg',
            url:'https://www.ucas.ac.cn/'
        }, 
        {
            name:'南开大学',
            img:'logo19.jpg',
            url:'https://www.nankai.edu.cn/main.htm'
        }, 
        {
            name:'天津大学',
            img:'logo23.jpg',
            url:'http://www.tju.edu.cn/index.htm'
        }, 
        {
            name:'大连理工大学',
            img:'dalianligong.jpg',
            url:'https://www.dlut.edu.cn/'
        }, 
        {
            name:'哈尔滨工业大学',
            img:'logo32.jpg',
            url:'http://www.hit.edu.cn/'
        },
        {
            name:'复旦大学',
            img:'logo14.jpg',
            url:'http://www.gs.fudan.edu.cn/'
        },
        {
            name:'同济大学',
            img:'logo24.jpg',
            url:'https://www.tongji.edu.cn/'
        },
        {
            name:'上海交通大学',
            img:'logo21.jpg',
            url:'https://www.sjtu.edu.cn/'
        },
        {
            name:'华东师范大学',
            img:'logo16.jpg',
            url:'https://www.ecnu.edu.cn/'
        },
        {
            name:'上海科技大学',
            img:'logo22.jpg',
            url:'http://www.shanghaitech.edu.cn/'
        },
        {
            name:'南京大学',
            img:'nanjingdaxue.jpg',
            url:'https://www.nju.edu.cn/'
        },
        {
            name:'东南大学',
            img:'dongnan.jpg',
            url:'https://www.seu.edu.cn/'
        },
        {
            name:'浙江大学',
            img:'zhejiang.jpg',
            url:'http://www.zju.edu.cn/'
        },
        {
            name:'中国科学技术大学',
            img:'logo27.jpg',
            url:'https://www.ustc.edu.cn/'
        },
        {
            name:'厦门大学',
            img:'xiamen.jpg',
            url:'https://www.xmu.edu.cn/'
        },
        // {
        //     name:'武汉大学',
        //     img:'wuhan.jpg',
        //     url:'http://www.whu.edu.cn/'
        // },
        {
            name:'华中科技大学',
            img:'logo17.jpg',
            url:'https://www.hust.edu.cn/'
        }, 
        {
            name:'武汉理工大学',
            img:'wuhanligong.jpg',
            url:'http://whut.edu.cn/'
        }, 
        
        {
            name:'广州大学',
            img:'logo31.jpg',
            url:'http://www.gzhu.edu.cn/'
        },
        {
            name:'海南大学',
            img:'hainan.jpg',
            url:'https://www.hainanu.edu.cn/index.shtml'
        },
        {
            name:'电子科技大学',
            img:'dianzikeji.jpg',
            url:'https://www.uestc.edu.cn/'
        },
        {
            name:'西安交通大学',
            img:'logo26.jpg',
            url:'http://www.xjtu.edu.cn/'
        },
        {
            name:'西安电子科技大学',
            img:'logo25.jpg',
            url:'https://www.xidian.edu.cn/'
        },
        {
            name:'西安邮电大学',
            img:'logo_xianyoudian.jpg',
            url:'http://www.xiyou.edu.cn/'
        },
        

    ],

}

var holderlist = {
    bannerfourdata:["操作系统&编译器","虚拟化&云原生","人工智能","大数据","分布式系统","开源文化&开源商业","开源&教育"],
    holder: [
        {
            img:'iscaslogo.jpg',
            url:'http://www.iscas.ac.cn'
        },
        {
            img:'openeuler.jpg',
            url:'https://openeuler.org/zh/'
        }
    ],
    cooperation: [
        {
            img:'huawei.jpg',
            url:'https://www.huawei.com/cn/'
        },
        {
            img:'zhongkeruan.jpg',
            url:'http://www.sinosoft.com.cn/'
        },
        {
            img:'huaruijinrong.jpg',
            url:'http://www.archforce.cn'
        },  
    ]
}



export {
    holderlist,
    logolistMap
} 