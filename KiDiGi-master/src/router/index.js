import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect: '/'
    }, {
      path: '/',
      name: 'Logo',
      component: resolve => require(['@/view/Logo'], resolve),
      children: [
        {
          path: '/',
          redirect: '/home'
        }, {
          path: '/home',
          name: 'home',
          component: resolve => require(['@/view/HomePage'], resolve),
          meta: {
            title: 'Home'
          }

        },
         {
          path: '/product',
          name: 'product',
          component: resolve => require(['@/view/Product'], resolve),
          meta: {
            title: 'Product'
          },
          children: [
            {
              path: '/product/product1',
              name: 'product1',
              component: resolve => require(['@/view/Product/product1'], resolve),
              meta: {
                title: 'product1'
              }
            },
            {
              path: '/product/product2',
              name: 'product2',
              component: resolve => require(['@/view/Product/product2'], resolve),
              meta: {
                title: 'product2'
              }
            },
            ,
            {
              path: '/product/product3',
              name: 'product3',
              component: resolve => require(['@/view/Product/product3'], resolve),
              meta: {
                title: 'product13'
              }
            },
            ,
            {
              path: '/product/product4',
              name: 'product4',
              component: resolve => require(['@/view/Product/product4'], resolve),
              meta: {
                title: 'product14'
              }
            },
            ,
            {
              path: '/product/product5',
              name: 'product5',
              component: resolve => require(['@/view/Product/product5'], resolve),
              meta: {
                title: 'product5'
              }
            },
            ,
            {
              path: '/product/product6',
              name: 'product6',
              component: resolve => require(['@/view/Product/product6'], resolve),
              meta: {
                title: 'product6'
              }
            },


            // 产品详情1
            {
              path: '/product/product1/soho',
              name: 'soho',
              component: resolve => require(['@/view/Product/product1/soho'], resolve),
              meta: {
                title: 'soho'
              }
            },
            {
              path: '/product/product1/2',
              name: 'soho',
              component: resolve => require(['@/view/Product/product1/2'], resolve),
              meta: {
                title: 'soho'
              }
            },
            {
              path: '/product/product1/3',
              name: 'soho',
              component: resolve => require(['@/view/Product/product1/3'], resolve),
              meta: {
                title: 'soho'
              }
            },
            {
              path: '/product/product1/4',
              name: 'soho',
              component: resolve => require(['@/view/Product/product1/4'], resolve),
              meta: {
                title: 'soho'
              }
            },
            {
              path: '/product/product1/5',
              name: 'soho',
              component: resolve => require(['@/view/Product/product1/5'], resolve),
              meta: {
                title: 'soho'
              }
            },
            // 2
            {
              path: '/product/product2/1',
              name: '1',
              component: resolve => require(['@/view/Product/product2/1'], resolve),
              meta: {
                title: '1'
              }
            }, {
              path: '/product/product2/2',
              name: '2',
              component: resolve => require(['@/view/Product/product2/2'], resolve),
              meta: {
                title: '2'
              }
            }, {
              path: '/product/product2/3',
              name: '3',
              component: resolve => require(['@/view/Product/product2/3'], resolve),
              meta: {
                title: '3'
              }
            }, {
              path: '/product/product2/4',
              name: '4',
              component: resolve => require(['@/view/Product/product2/4'], resolve),
              meta: {
                title: '4'
              }
            }, 
            {
              path: '/product/product2/5',
              name: '5',
              component: resolve => require(['@/view/Product/product2/5'], resolve),
              meta: {
                title: '5'
              }
            },
            {
              path: '/product/product2/6',
              name: '6',
              component: resolve => require(['@/view/Product/product2/6'], resolve),
              meta: {
                title: '6'
              }
            },
            {
              path: '/product/product2/7',
              name: '7',
              component: resolve => require(['@/view/Product/product2/7'], resolve),
              meta: {
                title: '7'
              }
            },
            {
              path: '/product/product2/8',
              name: '8',
              component: resolve => require(['@/view/Product/product2/8'], resolve),
              meta: {
                title: '8'
              }
            },
            {
              path: '/product/product2/9',
              name: '9',
              component: resolve => require(['@/view/Product/product2/9'], resolve),
              meta: {
                title: '9'
              }
            },
            {
              path: '/product/product2/10',
              name: '10',
              component: resolve => require(['@/view/Product/product2/10'], resolve),
              meta: {
                title: '10'
              }
            },
            {
              path: '/product/product2/11',
              name: '11',
              component: resolve => require(['@/view/Product/product2/11'], resolve),
              meta: {
                title: '11'
              }
            },
            {
              path: '/product/product2/12',
              name: '12',
              component: resolve => require(['@/view/Product/product2/12'], resolve),
              meta: {
                title: '12'
              }
            },
            {
              path: '/product/product2/13',
              name: '13',
              component: resolve => require(['@/view/Product/product2/13'], resolve),
              meta: {
                title: '13'
              }
            },
            // 3
            {
              path: '/product/product3/1',
              name: '1',
              component: resolve => require(['@/view/Product/product3/1'], resolve),
              meta: {
                title: '1'
              }
            }, {
              path: '/product/product3/2',
              name: '2',
              component: resolve => require(['@/view/Product/product3/2'], resolve),
              meta: {
                title: '2'
              }
            }, {
              path: '/product/product3/3',
              name: '3',
              component: resolve => require(['@/view/Product/product3/3'], resolve),
              meta: {
                title: '3'
              }
            }, {
              path: '/product/product3/4',
              name: '4',
              component: resolve => require(['@/view/Product/product3/4'], resolve),
              meta: {
                title: '4'
              }
            }, {
              path: '/product/product3/5',
              name: '5',
              component: resolve => require(['@/view/Product/product3/5'], resolve),
              meta: {
                title: '5'
              }
            }, {
              path: '/product/product3/6',
              name: '6',
              component: resolve => require(['@/view/Product/product3/6'], resolve),
              meta: {
                title: '6'
              }
            }, {
              path: '/product/product3/7',
              name: '7',
              component: resolve => require(['@/view/Product/product3/7'], resolve),
              meta: {
                title: '7'
              }
            }, {
              path: '/product/product3/8',
              name: '8',
              component: resolve => require(['@/view/Product/product3/8'], resolve),
              meta: {
                title: '8'
              }
            },
            // 4
            {
              path: '/product/product4/1',
              name: '1',
              component: resolve => require(['@/view/Product/product4/1'], resolve),
              meta: {
                title: '1'
              }
            }, {
              path: '/product/product4/2',
              name: '2',
              component: resolve => require(['@/view/Product/product4/2'], resolve),
              meta: {
                title: '2'
              }
            }, {
              path: '/product/product4/3',
              name: '3',
              component: resolve => require(['@/view/Product/product4/3'], resolve),
              meta: {
                title: '3'
              }
            }, {
              path: '/product/product4/4',
              name: '4',
              component: resolve => require(['@/view/Product/product4/4'], resolve),
              meta: {
                title: '4'
              }
            },
            // 5
            {
              path: '/product/product5/1',
              name: '1',
              component: resolve => require(['@/view/Product/product5/1'], resolve),
              meta: {
                title: '1'
              }
            }, {
              path: '/product/product5/2',
              name: '2',
              component: resolve => require(['@/view/Product/product5/2'], resolve),
              meta: {
                title: '2'
              }
            }, {
              path: '/product/product5/3',
              name: '3',
              component: resolve => require(['@/view/Product/product5/3'], resolve),
              meta: {
                title: '3'
              }
            }, {
              path: '/product/product5/4',
              name: '4',
              component: resolve => require(['@/view/Product/product5/4'], resolve),
              meta: {
                title: '4'
              }
            },
            // 6
            {
              path: '/product/product6/1',
              name: '1',
              component: resolve => require(['@/view/Product/product6/1'], resolve),
              meta: {
                title: '1'
              }
            }, {
              path: '/product/product6/2',
              name: '2',
              component: resolve => require(['@/view/Product/product6/2'], resolve),
              meta: {
                title: '2'
              }
            },
          ]
        },
     
        // instr3按钮链接
        {
          path: '/internet',
          name: 'internet',
          component: resolve => require(['@/view/internet'], resolve),
          meta: {
            title: 'internet'
          },
          children: [
            {
              path: '/internet/getstarted',
              name: 'getstarted',
              component: resolve => require(['@/view/internet/getstarted'], resolve),
              meta: {
                title: 'getstarted'
              }
            }, 
            {
              path: '/internet/instruction',
              name: 'instruction',
              component: resolve => require(['@/view/internet/instruction'], resolve),
              meta: {
                title: 'instruction'
              }
            },
            {
              path: '/internet/download',
              name: 'download',
              component: resolve => require(['@/view/internet/download'], resolve),
              meta: {
                title: 'download'
              }
            },
            // 6个子
            {
              path: '/internet/internet1',
              name: 'internet1',
              component: resolve => require(['@/view/internet/internet1'], resolve),
              meta: {
                title: 'internet1'
              }
            }, 
            {
              path: '/internet/internet2',
              name: 'internet2',
              component: resolve => require(['@/view/internet/internet2'], resolve),
              meta: {
                title: 'internet2'
              }
            },
            {
              path: '/internet/internet3',
              name: 'internet3',
              component: resolve => require(['@/view/internet/internet3'], resolve),
              meta: {
                title: 'internet3'
              }
            },
            {
              path: '/internet/internet4',
              name: 'internet4',
              component: resolve => require(['@/view/internet/internet4'], resolve),
              meta: {
                title: 'internet4'
              }
            }, 
            {
              path: '/internet/internet5',
              name: 'internet5',
              component: resolve => require(['@/view/internet/internet5'], resolve),
              meta: {
                title: 'internet5'
              }
            },
            {
              path: '/internet/internet6',
              name: 'internet6',
              component: resolve => require(['@/view/internet/internet6'], resolve),
              meta: {
                title: 'internet6'
              }
            },

          ]
        },


// 视频
        {
          path: '/shiping',
          name: 'shiping',
          component: resolve => require(['@/view/shiping'], resolve),
          meta: {
            title: 'shiping'
          },
          children: [
            {
              path: '/shiping/ship',
              name: 'ship',
              component: resolve => require(['@/view/shiping/ship'], resolve),
              meta: {
                title: 'ship'
              }
            },
          ]
          },
//图片详情
              {
                path: '/threeProducts',
                name: 'threeProducts',
                component: resolve => require(['@/view/threeProducts'], resolve),
                meta: {
                  title: 'ThreeProducts'
                },
                children: [
                  {
                  path: '/threeProducts/one',
                  name: 'one',
                  component: resolve => require(['@/view/ThreeProducts/one'], resolve),
                  meta: {
                    title: 'one'
                  }
                },
                  {
                  path: '/threeProducts/two',
                  name: 'two',
                  component: resolve => require(['@/view/ThreeProducts/two'], resolve),
                  meta: {
                    title: 'two'
                  }
                },
                  {
                  path: '/threeProducts/three',
                  name: 'three',
                  component: resolve => require(['@/view/ThreeProducts/three'], resolve),
                  meta: {
                    title: 'three'
                  }
                },
               ]
              },
// 轮播
        {
          path: '/OurCompany',
          name: 'OurCompany',
          component: resolve => require(['@/view/OurCompany'], resolve),
          meta: {
            title: 'OurCompany'
          },
          children: [
            {
              path: '/OurCompany/aboutKiDiGi',
              name: 'AboutKiDiGi',
              component: resolve => require(['@/view/OurCompany/aboutKiDiGi'], resolve),
              meta: {
                title: 'AboutKiDiGi'
              }
            },
            {
              path: '/OurCompany/contact',
              name: 'Contact',
              component: resolve => require(['@/view/OurCompany/contact'], resolve),
              meta: {
                title: 'Contact'
              },
            },
          ]
        },
        {
          path: '/lunbo',
          name: 'lunbo',
          component: resolve => require(['@/view/lunbo'], resolve),
          meta: {
            title: 'lunbo'
          },
          children: [
            {
              path: '/lunbo/lunbo1',
              name: 'lunbo1',
              component: resolve => require(['@/view/lunbo/lunbo1'], resolve),
              meta: {
                title: 'lunbo1'
              }
            },
            {
              path: '/lunbo/lunbo2',
              name: 'lunbo2',
              component: resolve => require(['@/view/lunbo/lunbo2'], resolve),
              meta: {
                title: 'lunbo2'
              }
            },
            {
              path: '/lunbo/lunbo3',
              name: 'lunbo3',
              component: resolve => require(['@/view/lunbo/lunbo3'], resolve),
              meta: {
                title: 'lunbo3'
              }
            },
            
          ]
        }


      ]
    }
  ]
})
