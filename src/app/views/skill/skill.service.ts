import { Injectable } from '@angular/core';

declare const $;

@Injectable()
export class SkillService {
  // tslint:disable-next-line:variable-name
  V_Pin_Install = '1'; // 0拔下 1插上
  // tslint:disable-next-line:variable-name
  T_Pin_Install = '1';

  skill01 = {
    operator: {
      left: {
        oneTitle: [
          {
            content: '',
            id: 'oneTitle001'
          }
        ],
        twoTitle: [
          {
            content: '',
            id: 'twoTitle001',
            parentId: 'oneTitle001'
          },
          // {
          //   content: '',
          //   id: 'twoTitle002',
          //   parentId: 'oneTitle001'
          // },
          // {
          //   content: '',
          //   id: 'twoTitle003',
          //   parentId: 'oneTitle001'
          // }
        ],
        threeTitle: [
          {
            parentId: 'twoTitle001',
            content: '',
            id: 'threeTitle001'
          },
          {
            parentId: 'twoTitle001',
            content: '',
            id: 'threeTitle002'
          },
          {
            parentId: 'twoTitle001',
            content: '',
            id: 'threeTitle003'
          },
          {
            parentId: 'twoTitle001',
            content: '',
            id: 'threeTitle004'
          },
          // {
          //   parentId: 'twoTitle003',
          //   content: '',
          //   id: 'threeTitle003'
          // },
          // {
          //   parentId: 'twoTitle003',
          //   content: '',
          //   id: 'threeTitle004'
          // },
          // {
          //   parentId: 'twoTitle003',
          //   content: '',
          //   id: 'threeTitle005'
          // },
          // {
          //   parentId: 'twoTitle003',
          //   content: '',
          //   id: 'threeTitle006'
          // },
          // {
          //   parentId: 'twoTitle002',
          //   content: '',
          //   id: 'threeTitle007'
          // },
          // {
          //   parentId: 'twoTitle002',
          //   content: '',
          //   id: 'threeTitle008'
          // },
          // {
          //   parentId: 'twoTitle002',
          //   content: '',
          //   id: 'threeTitle009'
          // }
        ]
      },
      right: [
        {
          content: '电机温度传感器电路故障',
          id: 'content01'
        },
        {
          content: '电机温度传感器本体故障',
          id: 'content02'
        },
        {
          content: '电机控制器本体故障',
          id: 'content03'
        },
        {
          content: '电机温度信号线路故障',
          id: 'content04'
        },
        {
          content: '电机温度接地线路故障',
          id: 'content05'
        },
        {
          content: '仪表故障',
          id: 'content06'
        },
        {
          content: '仪表控制单元故障',
          id: 'content07'
        },
        {
          content: '仪表线束故障',
          id: 'content08'
        },
        {
          content: '驱动电机故障灯点亮，报电机温度传感器故障码',
          id: 'content09'
        }
      ]
    },
    answer: {
      left: {
        oneTitle: [
          {
            content: 'A/C请求状态数据异常，压缩机不工作（维持关)',
            id: 'oneTitle001'
          }
        ],
        twoTitle: [
          {
            content: 'A/C开关电源线路',
            id: 'twoTitle001',
            parentId: 'oneTitle001'
          },
          {
            content: 'A/C开关故障',
            id: 'twoTitle003',
            parentId: 'oneTitle001'
          },
          {
            content: 'A/C开关输出线路故障',
            id: 'twoTitle002',
            parentId: 'oneTitle001'
          }
        ],
        threeTitle: [
          {
            parentId: 'twoTitle001',
            content: '点火开关电源线路故障',
            id: 'threeTitle001'
          },
          {
            parentId: 'twoTitle001',
            content: '鼓风机未开启',
            id: 'threeTitle002'
          },
          {
            parentId: 'twoTitle001',
            content: '鼓风机开关故障',
            id: 'threeTitle003'
          },
          {
            parentId: 'twoTitle003',
            content: 'A/C开关内部触点故障',
            id: 'threeTitle004'
          },
          {
            parentId: 'twoTitle002',
            content: '输出线路开路',
            id: 'threeTitle012'
          },
          {
            parentId: 'twoTitle002',
            content: '输出线路对地短路',
            id: 'threeTitle013'
          },
          {
            parentId: 'twoTitle002',
            content: '空调模块故障',
            id: 'threeTitle014'
          }
        ]
      },
      right: [
        {
          content: '点火开关未打开',
          id: 'content01'
        },
        {
          content: '蒸发箱温度传感器故障',
          id: 'content02'
        },
        {
          content: '输出线路对电源短路',
          id: 'content03'
        }
      ]
    }
  }
  skill02 = {
    operator: {
      left: {
        oneTitle: [
          {
            content: '',
            id: 'oneTitle001'
          }
        ],
        twoTitle: [
          {
            content: '',
            id: 'twoTitle001',
            parentId: 'oneTitle001'
          },
          // {
          //   content: '',
          //   id: 'twoTitle002',
          //   parentId: 'oneTitle001'
          // },
          // {
          //   content: '',
          //   id: 'twoTitle003',
          //   parentId: 'oneTitle001'
          // }
        ],
        threeTitle: [
          {
            parentId: 'twoTitle001',
            content: '',
            id: 'threeTitle001'
          },
          {
            parentId: 'twoTitle001',
            content: '',
            id: 'threeTitle002'
          },
          {
            parentId: 'twoTitle001',
            content: '',
            id: 'threeTitle003'
          },
          {
            parentId: 'twoTitle001',
            content: '',
            id: 'threeTitle004'
          },
          // {
          //   parentId: 'twoTitle003',
          //   content: '',
          //   id: 'threeTitle003'
          // },
          // {
          //   parentId: 'twoTitle003',
          //   content: '',
          //   id: 'threeTitle004'
          // },
          // {
          //   parentId: 'twoTitle003',
          //   content: '',
          //   id: 'threeTitle005'
          // },
          // {
          //   parentId: 'twoTitle003',
          //   content: '',
          //   id: 'threeTitle006'
          // },
          // {
          //   parentId: 'twoTitle002',
          //   content: '',
          //   id: 'threeTitle007'
          // },
          // {
          //   parentId: 'twoTitle002',
          //   content: '',
          //   id: 'threeTitle008'
          // },
          // {
          //   parentId: 'twoTitle002',
          //   content: '',
          //   id: 'threeTitle009'
          // }
        ]
      },
      right: [
        {
          content: '电机温度传感器电路故障',
          id: 'content01'
        },
        {
          content: '电机温度传感器本体故障',
          id: 'content02'
        },
        {
          content: '电机控制器本体故障',
          id: 'content03'
        },
        {
          content: '电机温度信号线路故障',
          id: 'content04'
        },
        {
          content: '电机温度接地线路故障',
          id: 'content05'
        },
        {
          content: '仪表故障',
          id: 'content06'
        },
        {
          content: '仪表控制单元故障',
          id: 'content07'
        },
        {
          content: '仪表线束故障',
          id: 'content08'
        },
        {
          content: '驱动电机故障灯点亮，报电机温度传感器故障码',
          id: 'content09'
        }
      ]
    },
    answer: {
      left: {
        oneTitle: [
          {
            content: '',
            id: 'oneTitle001'
          }
        ],
        twoTitle: [
          {
            content: '',
            id: 'twoTitle001',
            parentId: 'oneTitle001'
          },
          // {
          //   content: '',
          //   id: 'twoTitle002',
          //   parentId: 'oneTitle001'
          // },
          // {
          //   content: '',
          //   id: 'twoTitle003',
          //   parentId: 'oneTitle001'
          // }
        ],
        threeTitle: [
          {
            parentId: 'twoTitle001',
            content: '',
            id: 'threeTitle001'
          },
          {
            parentId: 'twoTitle001',
            content: '',
            id: 'threeTitle002'
          },
          {
            parentId: 'twoTitle001',
            content: '',
            id: 'threeTitle003'
          },
          {
            parentId: 'twoTitle001',
            content: '',
            id: 'threeTitle004'
          },
          // {
          //   parentId: 'twoTitle002',
          //   content: '',
          //   id: 'threeTitle003'
          // },
          // {
          //   parentId: 'twoTitle002',
          //   content: '',
          //   id: 'threeTitle004'
          // },
          // {
          //   parentId: 'twoTitle002',
          //   content: '',
          //   id: 'threeTitle005'
          // },
          // {
          //   parentId: 'twoTitle002',
          //   content: '',
          //   id: 'threeTitle006'
          // },
          // {
          //   parentId: 'twoTitle002',
          //   content: '',
          //   id: 'threeTitle007'
          // },
          // {
          //   parentId: 'twoTitle002',
          //   content: '',
          //   id: 'threeTitle008'
          // },
          // {
          //   parentId: 'twoTitle002',
          //   content: '',
          //   id: 'threeTitle009'
          // },
          // {
          //   parentId: 'twoTitle002',
          //   content: '',
          //   id: 'threeTitle010'
          // },
          // {
          //   parentId: 'twoTitle003',
          //   content: '',
          //   id: 'threeTitle012'
          // },
          // {
          //   parentId: 'twoTitle003',
          //   content: '',
          //   id: 'threeTitle013'
          // },
          // {
          //   parentId: 'twoTitle003',
          //   content: '',
          //   id: 'threeTitle014'
          // }
        ]
      },
      right: [
        {
          content: '电机控制器温度传感器电路故障',
          id: 'content01'
        },
        {
          content: '跛行指示灯电亮',
          id: 'content02'
        },
        {
          content: '驱动电机温度传感器电路故障',
          id: 'content03'
        },
        {
          content: '跛行指示灯电亮',
          id: 'content04'
        },
        {
          content: '电机冷却系统故',
          id: 'content05'
        },
        {
          content: '驱动电机系统故障',
          id: 'content06'
        },
        {
          content: '跛行指示灯电亮',
          id: 'content07'
        },
        {
          content: '跛行指示灯电亮',
          id: 'content08'
        },
        {
          content: '跛行指示灯电亮',
          id: 'content09'
        },
        {
          content: '跛行指示灯电亮',
          id: 'content10'
        },
        {
          content: '跛行指示灯电亮',
          id: 'content11'
        },
        {
          content: '跛行指示灯电亮',
          id: 'content12'
        },
        {
          content: '跛行指示灯电亮',
          id: 'content13'
        },
        {
          content: '跛行指示灯电亮',
          id: 'content14'
        },
        {
          content: '跛行指示灯电亮',
          id: 'content15'
        },
        {
          content: '跛行指示灯电亮',
          id: 'content16'
        },
        {
          content: '跛行指示灯电亮',
          id: 'content17'
        },
        {
          content: '跛行指示灯电亮',
          id: 'content18'
        },
        {
          content: '跛行指示灯电亮',
          id: 'content19'
        },
        {
          content: '跛行指示灯电亮',
          id: 'content20'
        },
        {
          content: '跛行指示灯电亮',
          id: 'content21'
        },
        {
          content: '跛行指示灯电亮',
          id: 'content22'
        },
        {
          content: '跛行指示灯电亮',
          id: 'content23'
        },
        {
          content: '跛行指示灯电亮',
          id: 'content24'
        }
      ]
    }
  }
  skill03 = {
    operator: {
      left: {
        oneTitle: [
          {
            content: '',
            id: 'oneTitle001'
          }
        ],
        twoTitle: [
          {
            content: '',
            id: 'twoTitle001',
            parentId: 'oneTitle001'
          },
          // {
          //   content: '',
          //   id: 'twoTitle002',
          //   parentId: 'oneTitle001'
          // },
          // {
          //   content: '',
          //   id: 'twoTitle003',
          //   parentId: 'oneTitle001'
          // }
        ],
        threeTitle: [
          {
            parentId: 'twoTitle001',
            content: '',
            id: 'threeTitle001'
          },
          {
            parentId: 'twoTitle001',
            content: '',
            id: 'threeTitle002'
          },
          {
            parentId: 'twoTitle001',
            content: '',
            id: 'threeTitle003'
          },
          {
            parentId: 'twoTitle001',
            content: '',
            id: 'threeTitle004'
          },
          // {
          //   parentId: 'twoTitle003',
          //   content: '',
          //   id: 'threeTitle003'
          // },
          // {
          //   parentId: 'twoTitle003',
          //   content: '',
          //   id: 'threeTitle004'
          // },
          // {
          //   parentId: 'twoTitle003',
          //   content: '',
          //   id: 'threeTitle005'
          // },
          // {
          //   parentId: 'twoTitle003',
          //   content: '',
          //   id: 'threeTitle006'
          // },
          // {
          //   parentId: 'twoTitle002',
          //   content: '',
          //   id: 'threeTitle007'
          // },
          // {
          //   parentId: 'twoTitle002',
          //   content: '',
          //   id: 'threeTitle008'
          // },
          // {
          //   parentId: 'twoTitle002',
          //   content: '',
          //   id: 'threeTitle009'
          // }
        ]
      },
      right: [
        {
          content: '电机温度传感器电路故障',
          id: 'content01'
        },
        {
          content: '电机温度传感器本体故障',
          id: 'content02'
        },
        {
          content: '电机控制器本体故障',
          id: 'content03'
        },
        {
          content: '电机温度信号线路故障',
          id: 'content04'
        },
        {
          content: '电机温度接地线路故障',
          id: 'content05'
        },
        {
          content: '仪表故障',
          id: 'content06'
        },
        {
          content: '仪表控制单元故障',
          id: 'content07'
        },
        {
          content: '仪表线束故障',
          id: 'content08'
        },
        {
          content: '驱动电机故障灯点亮，报电机温度传感器故障码',
          id: 'content09'
        }
      ]
    },
    answer: {
      left: {
        oneTitle: [
          {
            content: '',
            id: 'oneTitle001'
          }
        ],
        twoTitle: [
          {
            content: '',
            id: 'twoTitle001',
            parentId: 'oneTitle001'
          },
          {
            content: '',
            id: 'twoTitle002',
            parentId: 'oneTitle001'
          },
          {
            content: '',
            id: 'twoTitle003',
            parentId: 'oneTitle001'
          }
        ],
        threeTitle: [
          {
            parentId: 'twoTitle001',
            content: '',
            id: 'threeTitle001'
          },
          {
            parentId: 'twoTitle001',
            content: '',
            id: 'threeTitle002'
          },
          {
            parentId: 'twoTitle002',
            content: '',
            id: 'threeTitle003'
          },
          {
            parentId: 'twoTitle002',
            content: '',
            id: 'threeTitle004'
          },
          {
            parentId: 'twoTitle002',
            content: '',
            id: 'threeTitle005'
          },
          {
            parentId: 'twoTitle002',
            content: '',
            id: 'threeTitle006'
          },
          {
            parentId: 'twoTitle002',
            content: '',
            id: 'threeTitle007'
          },
          {
            parentId: 'twoTitle002',
            content: '',
            id: 'threeTitle008'
          },
          {
            parentId: 'twoTitle002',
            content: '',
            id: 'threeTitle009'
          },
          {
            parentId: 'twoTitle002',
            content: '',
            id: 'threeTitle010'
          },
          {
            parentId: 'twoTitle003',
            content: '',
            id: 'threeTitle012'
          },
          {
            parentId: 'twoTitle003',
            content: '',
            id: 'threeTitle013'
          },
          {
            parentId: 'twoTitle003',
            content: '',
            id: 'threeTitle014'
          }
        ]
      },
      right: [
        {
          content: '电机控制器温度传感器电路故障',
          id: 'content01'
        },
        {
          content: '跛行指示灯电亮',
          id: 'content02'
        },
        {
          content: '驱动电机温度传感器电路故障',
          id: 'content03'
        },
        {
          content: '跛行指示灯电亮',
          id: 'content04'
        },
        {
          content: '电机冷却系统故',
          id: 'content05'
        },
        {
          content: '驱动电机系统故障',
          id: 'content06'
        },
        {
          content: '跛行指示灯电亮',
          id: 'content07'
        },
        {
          content: '跛行指示灯电亮',
          id: 'content08'
        },
        {
          content: '跛行指示灯电亮',
          id: 'content09'
        },
        {
          content: '跛行指示灯电亮',
          id: 'content10'
        },
        {
          content: '跛行指示灯电亮',
          id: 'content11'
        },
        {
          content: '跛行指示灯电亮',
          id: 'content12'
        },
        {
          content: '跛行指示灯电亮',
          id: 'content13'
        },
        {
          content: '跛行指示灯电亮',
          id: 'content14'
        },
        {
          content: '跛行指示灯电亮',
          id: 'content15'
        },
        {
          content: '跛行指示灯电亮',
          id: 'content16'
        },
        {
          content: '跛行指示灯电亮',
          id: 'content17'
        },
        {
          content: '跛行指示灯电亮',
          id: 'content18'
        },
        {
          content: '跛行指示灯电亮',
          id: 'content19'
        },
        {
          content: '跛行指示灯电亮',
          id: 'content20'
        },
        {
          content: '跛行指示灯电亮',
          id: 'content21'
        },
        {
          content: '跛行指示灯电亮',
          id: 'content22'
        },
        {
          content: '跛行指示灯电亮',
          id: 'content23'
        },
        {
          content: '跛行指示灯电亮',
          id: 'content24'
        }
      ]
    }
  }
  skill04 = {
    operator: {
      left: {
        oneTitle: [
          {
            content: '',
            id: 'oneTitle001'
          }
        ],
        twoTitle: [
          {
            content: '',
            id: 'twoTitle001',
            parentId: 'oneTitle001'
          },
          // {
          //   content: '',
          //   id: 'twoTitle002',
          //   parentId: 'oneTitle001'
          // },
          // {
          //   content: '',
          //   id: 'twoTitle003',
          //   parentId: 'oneTitle001'
          // }
        ],
        threeTitle: [
          {
            parentId: 'twoTitle001',
            content: '',
            id: 'threeTitle001'
          },
          {
            parentId: 'twoTitle001',
            content: '',
            id: 'threeTitle002'
          },
          {
            parentId: 'twoTitle001',
            content: '',
            id: 'threeTitle003'
          },
          {
            parentId: 'twoTitle001',
            content: '',
            id: 'threeTitle004'
          },
          // {
          //   parentId: 'twoTitle003',
          //   content: '',
          //   id: 'threeTitle003'
          // },
          // {
          //   parentId: 'twoTitle003',
          //   content: '',
          //   id: 'threeTitle004'
          // },
          // {
          //   parentId: 'twoTitle003',
          //   content: '',
          //   id: 'threeTitle005'
          // },
          // {
          //   parentId: 'twoTitle003',
          //   content: '',
          //   id: 'threeTitle006'
          // },
          // {
          //   parentId: 'twoTitle002',
          //   content: '',
          //   id: 'threeTitle007'
          // },
          // {
          //   parentId: 'twoTitle002',
          //   content: '',
          //   id: 'threeTitle008'
          // },
          // {
          //   parentId: 'twoTitle002',
          //   content: '',
          //   id: 'threeTitle009'
          // }
        ]
      },
      right: [
        {
          content: '电机温度传感器电路故障',
          id: 'content01'
        },
        {
          content: '电机温度传感器本体故障',
          id: 'content02'
        },
        {
          content: '电机控制器本体故障',
          id: 'content03'
        },
        {
          content: '电机温度信号线路故障',
          id: 'content04'
        },
        {
          content: '电机温度接地线路故障',
          id: 'content05'
        },
        {
          content: '仪表故障',
          id: 'content06'
        },
        {
          content: '仪表控制单元故障',
          id: 'content07'
        },
        {
          content: '仪表线束故障',
          id: 'content08'
        },
        {
          content: '驱动电机故障灯点亮，报电机温度传感器故障码',
          id: 'content09'
        }
      ]
    },
    answer: {
      left: {
        oneTitle: [
          {
            content: '',
            id: 'oneTitle001'
          }
        ],
        twoTitle: [
          {
            content: '',
            id: 'twoTitle001',
            parentId: 'oneTitle001'
          },
          {
            content: '',
            id: 'twoTitle002',
            parentId: 'oneTitle001'
          },
          {
            content: '',
            id: 'twoTitle003',
            parentId: 'oneTitle001'
          }
        ],
        threeTitle: [
          {
            parentId: 'twoTitle001',
            content: '',
            id: 'threeTitle001'
          },
          {
            parentId: 'twoTitle001',
            content: '',
            id: 'threeTitle002'
          },
          {
            parentId: 'twoTitle002',
            content: '',
            id: 'threeTitle003'
          },
          {
            parentId: 'twoTitle002',
            content: '',
            id: 'threeTitle004'
          },
          {
            parentId: 'twoTitle002',
            content: '',
            id: 'threeTitle005'
          },
          {
            parentId: 'twoTitle002',
            content: '',
            id: 'threeTitle006'
          },
          {
            parentId: 'twoTitle002',
            content: '',
            id: 'threeTitle007'
          },
          {
            parentId: 'twoTitle002',
            content: '',
            id: 'threeTitle008'
          },
          {
            parentId: 'twoTitle002',
            content: '',
            id: 'threeTitle009'
          },
          {
            parentId: 'twoTitle002',
            content: '',
            id: 'threeTitle010'
          },
          {
            parentId: 'twoTitle003',
            content: '',
            id: 'threeTitle012'
          },
          {
            parentId: 'twoTitle003',
            content: '',
            id: 'threeTitle013'
          },
          {
            parentId: 'twoTitle003',
            content: '',
            id: 'threeTitle014'
          }
        ]
      },
      right: [
        {
          content: '电机控制器温度传感器电路故障',
          id: 'content01'
        },
        {
          content: '跛行指示灯电亮',
          id: 'content02'
        },
        {
          content: '驱动电机温度传感器电路故障',
          id: 'content03'
        },
        {
          content: '跛行指示灯电亮',
          id: 'content04'
        },
        {
          content: '电机冷却系统故',
          id: 'content05'
        },
        {
          content: '驱动电机系统故障',
          id: 'content06'
        },
        {
          content: '跛行指示灯电亮',
          id: 'content07'
        },
        {
          content: '跛行指示灯电亮',
          id: 'content08'
        },
        {
          content: '跛行指示灯电亮',
          id: 'content09'
        },
        {
          content: '跛行指示灯电亮',
          id: 'content10'
        },
        {
          content: '跛行指示灯电亮',
          id: 'content11'
        },
        {
          content: '跛行指示灯电亮',
          id: 'content12'
        },
        {
          content: '跛行指示灯电亮',
          id: 'content13'
        },
        {
          content: '跛行指示灯电亮',
          id: 'content14'
        },
        {
          content: '跛行指示灯电亮',
          id: 'content15'
        },
        {
          content: '跛行指示灯电亮',
          id: 'content16'
        },
        {
          content: '跛行指示灯电亮',
          id: 'content17'
        },
        {
          content: '跛行指示灯电亮',
          id: 'content18'
        },
        {
          content: '跛行指示灯电亮',
          id: 'content19'
        },
        {
          content: '跛行指示灯电亮',
          id: 'content20'
        },
        {
          content: '跛行指示灯电亮',
          id: 'content21'
        },
        {
          content: '跛行指示灯电亮',
          id: 'content22'
        },
        {
          content: '跛行指示灯电亮',
          id: 'content23'
        },
        {
          content: '跛行指示灯电亮',
          id: 'content24'
        }
      ]
    }
  }
  skill05 = {
    operator: {
      left: {
        oneTitle: [
          {
            content: '',
            id: 'oneTitle001'
          }
        ],
        twoTitle: [
          {
            content: '',
            id: 'twoTitle001',
            parentId: 'oneTitle001'
          },
          {
            content: '',
            id: 'twoTitle002',
            parentId: 'oneTitle001'
          },
          {
            content: '',
            id: 'twoTitle003',
            parentId: 'oneTitle001'
          }
        ],
        threeTitle: [
          {
            parentId: 'twoTitle001',
            content: '',
            id: 'threeTitle001'
          },
          {
            parentId: 'twoTitle001',
            content: '',
            id: 'threeTitle002'
          },
          {
            parentId: 'twoTitle002',
            content: '',
            id: 'threeTitle003'
          },
          {
            parentId: 'twoTitle002',
            content: '',
            id: 'threeTitle004'
          },
          {
            parentId: 'twoTitle002',
            content: '',
            id: 'threeTitle005'
          },
          {
            parentId: 'twoTitle003',
            content: '',
            id: 'threeTitle006'
          },
          {
            parentId: 'twoTitle003',
            content: '',
            id: 'threeTitle007'
          },
          {
            parentId: 'twoTitle003',
            content: '',
            id: 'threeTitle008'
          },
          {
            parentId: 'twoTitle003',
            content: '',
            id: 'threeTitle009'
          },
          {
            parentId: 'twoTitle003',
            content: '',
            id: 'threeTitle010'
          },
          {
            parentId: 'twoTitle003',
            content: '',
            id: 'threeTitle011'
          },
        ]
      },
      right: [
        {
          content: '电机控制器温度传感器电路故障',
          id: 'content01'
        },
        {
          content: '驱动电机温度传感器电路故障',
          id: 'content02'
        },
        {
          content: '电机控制器温度传感器故障',
          id: 'content03'
        },
        {
          content: '加速踏板位置传感器故障',
          id: 'content04'
        },
        {
          content: '驱动电机温度传感器故障',
          id: 'content05'
        },
        {
          content: '动力电池SOC计算错误',
          id: 'content06'
        },
        {
          content: '动力电池电量不足',
          id: 'content07'
        },
        {
          content: '电机冷却系统故障',
          id: 'content08'
        },
        {
          content: '驱动电机系统故障',
          id: 'content09'
        },
        {
          content: '跛行指示灯点亮',
          id: 'content10'
        },
        {
          content: '传感器本体故障',
          id: 'content11'
        },
        {
          content: '传感器电路故障',
          id: 'content12'
        },
        {
          content: '整车控制器故障',
          id: 'content13'
        },
        {
          content: '电机控制器故障',
          id: 'content14'
        },
        {
          content: '动力电池故障',
          id: 'content15'
        },
      ]
    },
    answer: {
      left: {
        oneTitle: [
          {
            content: '',
            id: 'oneTitle001'
          }
        ],
        twoTitle: [
          {
            content: '',
            id: 'twoTitle001',
            parentId: 'oneTitle001'
          },
          {
            content: '',
            id: 'twoTitle002',
            parentId: 'oneTitle001'
          },
          {
            content: '',
            id: 'twoTitle003',
            parentId: 'oneTitle001'
          }
        ],
        threeTitle: [
          {
            parentId: 'twoTitle001',
            content: '',
            id: 'threeTitle001'
          },
          {
            parentId: 'twoTitle001',
            content: '',
            id: 'threeTitle002'
          },
          {
            parentId: 'twoTitle002',
            content: '',
            id: 'threeTitle003'
          },
          {
            parentId: 'twoTitle002',
            content: '',
            id: 'threeTitle004'
          },
          {
            parentId: 'twoTitle002',
            content: '',
            id: 'threeTitle005'
          },
          {
            parentId: 'twoTitle002',
            content: '',
            id: 'threeTitle006'
          },
          {
            parentId: 'twoTitle002',
            content: '',
            id: 'threeTitle007'
          },
          {
            parentId: 'twoTitle002',
            content: '',
            id: 'threeTitle008'
          },
          {
            parentId: 'twoTitle002',
            content: '',
            id: 'threeTitle009'
          },
          {
            parentId: 'twoTitle002',
            content: '',
            id: 'threeTitle010'
          },
          {
            parentId: 'twoTitle003',
            content: '',
            id: 'threeTitle012'
          },
          {
            parentId: 'twoTitle003',
            content: '',
            id: 'threeTitle013'
          },
          {
            parentId: 'twoTitle003',
            content: '',
            id: 'threeTitle014'
          }
        ]
      },
      right: [
        {
          content: '电机控制器温度传感器电路故障',
          id: 'content01'
        },
        {
          content: '跛行指示灯电亮',
          id: 'content02'
        },
        {
          content: '驱动电机温度传感器电路故障',
          id: 'content03'
        },
        {
          content: '跛行指示灯电亮',
          id: 'content04'
        },
        {
          content: '电机冷却系统故',
          id: 'content05'
        },
        {
          content: '驱动电机系统故障',
          id: 'content06'
        },
        {
          content: '跛行指示灯电亮',
          id: 'content07'
        },
        {
          content: '跛行指示灯电亮',
          id: 'content08'
        },
        {
          content: '跛行指示灯电亮',
          id: 'content09'
        },
        {
          content: '跛行指示灯电亮',
          id: 'content10'
        },
        {
          content: '跛行指示灯电亮',
          id: 'content11'
        },
        {
          content: '跛行指示灯电亮',
          id: 'content12'
        },
        {
          content: '跛行指示灯电亮',
          id: 'content13'
        },
        {
          content: '跛行指示灯电亮',
          id: 'content14'
        },
        {
          content: '跛行指示灯电亮',
          id: 'content15'
        },
        {
          content: '跛行指示灯电亮',
          id: 'content16'
        },
        {
          content: '跛行指示灯电亮',
          id: 'content17'
        },
        {
          content: '跛行指示灯电亮',
          id: 'content18'
        },
        {
          content: '跛行指示灯电亮',
          id: 'content19'
        },
        {
          content: '跛行指示灯电亮',
          id: 'content20'
        },
        {
          content: '跛行指示灯电亮',
          id: 'content21'
        },
        {
          content: '跛行指示灯电亮',
          id: 'content22'
        },
        {
          content: '跛行指示灯电亮',
          id: 'content23'
        },
        {
          content: '跛行指示灯电亮',
          id: 'content24'
        }
      ]
    }
  }
}
