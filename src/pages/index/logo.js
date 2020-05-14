

const logolistMap = {
    company:[
         {
            img:'logo1.jpg',
            url:'http://www.ict.ac.cn/'
        },
        {
            img:'logo2.jpg',
            url:'http://www.cambricon.com/'
        }
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
    ],
    technology:[
        // {
        //     name:'openeuler',
        //     img:'c_openeuler.jpg',
        //     url:'https://openeuler.org/zh/'
        // },
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
            name:'ApacheShardingSphere',
            img:'c_ApacheShardingSphere.jpg',
            url:'https://shardingsphere.apache.org/'
        },
        {
            name:'ApacheSkyWalking',
            img:'c_ApacheSkyWalking.jpg',
            url:'http://skywalking.apache.org/'
        },
        {
            name:'安同开源社区AOSC',
            img:'c_aosc.jpg',
            url:'https://aosc.io'

            
        },
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
            name:'elastos',
            img:'c_elastos.jpg',
            url:'https://www.elastos.org/'
        },
        {
            name:'emacs',
            img:'c_emacs.jpg',
            url:'https://www.gnu.org/software/emacs/'
        },
        {
            name:'MACE',
            img:'c_mace.jpg',
            url:'https://github.com/XiaoMi/mace'
        },
       
        {
            name:'MaskBook',
            img:'c_maskbook.jpg',
        },
        // {
        //     name:'c_markdownlab',
        //     img:'c_markdownlab.jpg',
        // },
        
        {
            name:'milvus',
            img:'c_milvus.jpg',
            url:'https://www.milvus.io/cn/'
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
            name:'Simple-XX',
            img:'c_Simple-XX.jpg',
            url:' https://github.com/Simple-XX'
        },
        {
            name:'rtthread',
            img:'c_rtthread.jpg',
            url:'https://www.rt-thread.org/'
        },
        {
            name:'泰晓',
            img:'c_taixiao.jpg',
            url:'http://tinylab.org'
        },
        {
            name:'天元矿视',
            img:'c_megengine.jpg',
            url:'https://megengine.org.cn/'
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
            name:'xlab',
            img:'c_xlab.jpg',
            url:'http://xlab.kfcoding.com/'
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
        

    ]
}



export default logolistMap