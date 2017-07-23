import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import grid from '@/components/grid/grid'
import Markdown from '@/components/Markdown'
import carousel from '@/components/carousel'
import upload from '@/components/fileupload/upload'
import kanban from '@/components/kanban'
import medium from '@/components/medium/medium'
import videoplayer from '@/components/videoplayer/videoplayer'
import pdf from '@/components/pdf/pdf'
import qrcode from '@/components/qrcode/qrcode'
import qart from '@/components/qart/qart'
import chartme from '@/components/chartme/chartme'
import todos from '@/components/todos'
import editor from '@/components/editor'
import map from '@/components/map/map'
import overview from '@/components/overview'
import book from '@/components/book'
import main from '@/components/product/main'
import product from '@/components/product/product'
import productList from '@/components/product/product-list'
import productEdit from '@/components/product/product-edit'
import productDelete from '@/components/product/product-delete'
import addProduct from '@/components/product/add-product'
//memo import componetns
import Index from '@/components/memo/Index'
import Editor  from '@/components/memo/Editor'
import Viewer from '@/components/memo/Viewer'
import table from '@/components/table/table'
Vue.use(Router)

export default new Router({
  mode:'history',
  saveScrollPosition: true,
  routes: [
    {

      path: '/',
      name: 'overview',
      component: overview
    },
    {

      path: '/chartme',
      name: 'chartme',
      component: chartme
    },
    {
      path: '/carousel',
      name: 'carousel',
      component: carousel
    },
    {
      path: '/upload',
      name: 'upload',
      component: upload
    },
    {
      path: '/table',
      name: 'table',
      component: table
    },
    {
      path: '/qart',
      name: 'qart',
      component: qart
    },
    {
      path: '/todos',
      name: 'todos',
      component: todos
    },
    {
      path: '/qrcode',
      name: 'qrcode',
      component: qrcode
    },
    {
      path: '/editor',
      name: 'editor',
      component: editor
    },
    {
      path: '/videoplayer',
      name: 'videoplayer',
      component: videoplayer
    },
     {
      path: '/pdf',
      name: 'pdf',
      component: pdf
    },
     {
      path: '/medium',
      name: 'medium',
      component: medium
    },
    {
      path: '/hello',
      name: 'hello',
      component: Hello
    },
     {
      path: '/grid',
      name: 'grid',
      component: grid
    },
    {
      path: '/map',
      name: 'map',
      component: map
    },
    {
      path: '/markdown',
      name: 'Markdown',
      component: Markdown
    },
    {
      path: '/book',
      name: 'book',
      component: book
    },
      {
      path: '/kanban',
      name: 'kanban',
      component: kanban
    },
    {
      path: '/memo',
      name: 'index',
      component: Index
    },
     {
      path: '/editor',
      name: 'newEditor',
      component: Editor
    },
    {
      path: '/editor/:id',
      name: 'updateEditor',
      component: Editor
    },
     {
      path: '/viewer/:id',
      name: 'viewer',
      component: Viewer
    },

    {
      path: '/main',

      component:productList,
      children:[
        {

          path: ':product_id',
          component: product,
          name:'product',
          children:[
            {
              path: '/edit',
              component:productEdit,
              name:'product-edit'

            },
            {
              path: '/delete',
              component: productDelete,
              name:'product-delete',

            }
          ]
        },
        {

          path: '/add-product',
          component: addProduct
        }
      ]
    }
  ]
})
