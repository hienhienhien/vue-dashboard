<template>
<article class="w-100 w-75-m w-75-l ph3-m ph3-l">
        <header class="mb3">
          <h2 class="ttu mt0 mb1 f6 fw5 silver">Dashboards</h2>
          <h1 class="fw3 dark-gray mt0 mb0">Overview</h1>
          <button @click="toastMe">Toast</button>
        </header>
        <hr class="o-20">
        <div class="flex-m flex-l flex-wrap items-center justify-between nl3 nr3 pt4 mb4">
          <div class="w-100 w-50-m w-33-l ph3 tc mb4 mb0-l">
            <div class="w-50 w-50-m w-75-l center">
              <doughnut :labels="newVsReturning.labels" :data="newVsReturning.data"></doughnut>
            </div>
            <h3 class="mt3 mb1 f6 fw5 silver">Traffic</h3>
            <h4 class="dark-gray f3 fw3 mv0">New vs. Returning</h4>
          </div>
          <div class="w-100 w-50-m w-33-l ph3 tc mb4 mb0-l">
            <div class="w-50 w-50-m w-75-l center">
              <doughnut :labels="newVsRecurring.labels" :data="newVsRecurring.data"></doughnut>
            </div>
            <h3 class="mt3 mb1 f6 fw5 silver">Revenue</h3>
            <h4 class="dark-gray f3 fw3 mv0">New vs. Recurring</h4>
          </div>
          <div class="w-100 w-50-m w-33-l ph3 tc mb4 mb0-l">
            <div class="w-50 w-50-m w-75-l center">
              <doughnut :labels="directVsReferrals.labels" :data="directVsReferrals.data"></doughnut>
            </div>
            <h3 class="mt3 mb1 f6 fw5 silver">Traffic</h3>
            <h4 class="dark-gray f3 fw3 mv0">Direct vs. Referral</h4>
          </div>
        </div>
        <div class="divide tc relative">
          <h5 class="fw4 ttu mv0 dib bg-white ph3">Quick Stats</h5>
        </div>
        <div class="flex flex-wrap mt3 nl3 nr3">
          <div class="w-50 w-25-l mb4 mb0-l relative flex flex-column ph3">
            <sparkline title="Page Views" class="bg-green" value="1,293"></sparkline>
          </div>
          <div class="w-50 w-25-l mb4 mb0-l relative flex flex-column ph3">
            <sparkline title="Downloads" class="bg-red" value="758"></sparkline>
          </div>
          <div class="w-50 w-25-l mb4 mb0-l relative flex flex-column ph3">
            <sparkline title="Sign-Ups" class="bg-purple" value="1,293"></sparkline>
          </div>
          <div class="w-50 w-25-l mb4 mb0-l relative flex flex-column ph3">
            <sparkline title="Downloads" class="bg-blue" value="758"></sparkline>
          </div>
        </div>
        <hr class="o-20 mt4">
        <div class="flex flex-wrap pt3 nl3 nr3">
          <div class="w-100 w-50-l ph3 mb3 mb0-l">
            <div class="bt bl br b--black-10 br2">
              <div class="pa3 bb b--black-10">
                <h4 class="mv0">Countries</h4>
              </div>
              <metric-list-item v-for="(country, index) in countryData" :key="index" :show-bar="country.showBar" :name="country.name" :value="country.value">
              </metric-list-item>
            </div>
            <a href="#" class="no-underline fw5 mt3 br2 ph3 pv2 dib ba b--blue blue bg-white hover-bg-blue hover-white">All Countries</a>
          </div>
          <div class="w-100 w-50-l ph3 mb3 mb0-l">
            <div class="bt bl br b--black-10 br2">
              <div class="pa3 bb b--black-10">
                <h4 class="mv0">Most Visited Pages</h4>
              </div>
              <metric-list-item v-for="(page, index) in pageData" :key="index" :show-bar="page.showBar" :name="page.name" :value="page.value">
              </metric-list-item>
            </div>
            <a href="#" class="no-underline fw5 mt3 br2 ph3 pv2 dib ba b--blue blue bg-white hover-bg-blue hover-white">All Pages</a>
          </div>
        </div>
        <div class="mt4">
          <div class="w-100 mb3 mb0-l">
            <div class="bt bl br b--black-10 br2">
              <div class="pa3 bb b--black-10">
                <h4 class="mv0">Devices and Resolutions</h4>
              </div>
              <metric-list-item v-for="(device, index) in deviceData" :key="index" :show-bar="device.showBar" :name="device.name" :value="device.value">
              </metric-list-item>
            </div>
            <a href="#" class="no-underline fw5 mt3 br2 ph3 pv2 dib ba b--blue blue bg-white hover-bg-blue hover-white">All Devices</a>
          </div>
        </div>
       <social-sharing url="https://vuejs.org/"
                      title="The Progressive JavaScript Framework"
                      description="Intuitive, Fast and Composable MVVM for building interactive interfaces."
                      quote="Vue is a progressive framework for building user interfaces."
                      hashtags="vuejs,javascript,framework"
                      twitter-user="vuejs"
                      v-cloak inline-template>
        <div>
          <ul>
            <li>
              <network network="facebook" id="facebook">
                <i class="fa fa-fw fa-facebook"></i> Facebook
              </network>
            </li>
            <li>
              <network network="googleplus" id="googleplus">
                <i class="fa fa-fw fa-google-plus"></i> Google +
              </network>
            </li>
            <li>
              <network network="linkedin" id="linkedin">
                <i class="fa fa-fw fa-linkedin"></i> LinkedIn
              </network>
            </li>
            <li>
              <network network="pinterest" id="pinterest">
                <i class="fa fa-fw fa-pinterest"></i> Pinterest
              </network>
            </li>
            <li>
              <network network="reddit" id="reddit">
                <i class="fa fa-fw fa-reddit"></i> Reddit
              </network>
            </li>
            <li>
              <network network="twitter" id="twitter">
                <i class="fa fa-fw fa-twitter"></i> Twitter
              </network>
            </li>
            <li>
              <network network="vk" id="vk">
                <i class="fa fa-fw fa-vk"></i> VKontakte
              </network>
            </li>
            <li>
              <network network="weibo" id="weibo">
                <i class="fa fa-fw fa-weibo"></i> Weibo
              </network>
            </li>
            <li>
              <network network="whatsapp" id="whatsapp">
                <i class="fa fa-fw fa-whatsapp"></i> Whatsapp
              </network>
            </li>
            <li>
              <network network="telegram" id="telegram">
                <i class="fa fa-fw fa-telegram"></i> Telegram
              </network>
            </li>
            <li>
              <network network="line" id="line">
                Line
              </network>
            </li>
            <li>
              <network network="skype" id="skype">
                <i class="fa fa-fw fa-skype"></i> Skype
              </network>
            </li>
          </ul>
          <!--parallax goes here-->
           <!--<parallax>
            <img src="https://static.pexels.com/photos/60006/spring-tree-flowers-meadow-60006.jpeg" alt="very cool bg">
          </parallax>-->


        </div>
      </social-sharing>

      </article>
</template>

<script>
import Toast from 'vue-easy-toast'
import Vue from 'vue'

//import
import doughnut from './doughnut'
import metricListItem from './metric-list-item'
import sparkline from './sparkline'
import SocialSharing from 'vue-social-sharing'
 import Parallax from 'vue-parallaxy'

export default {
  components :{
    doughnut,
    metricListItem,
    sparkline,
    Parallax


  },
  data(){
    return {
      duration: 3000,
      mode: 'override',
      horizontalPosition: 'left',
      verticalPosition: 'top',
      defaultTransition: 'fade',
      defaultClass: '',
      customClass: '.et-wrapper.my-class { \n\
        background-color: red;\n}',
      message: 'How are <strong>you</strong> <i>doing</i>?',

      newVsReturning: {
      data: [130, 230],
      labels: ["New", "Returning"]
    },
    newVsRecurring: {
      data: [30, 330],
      labels: ["New", "Recurring"]
    },
    directVsReferrals: {
      data: [260, 160],
      labels: ["Direct", "Referrals"]
    },
    countryData: [{
        name: "United States",
        value: "62.4",
        showBar: true
      },
      {
        name: "India",
        value: "15",
        showBar: true
      },
      {
        name: "United Kingdom",
        value: "5",
        showBar: true
      },
      {
        name: "Canada",
        value: "5",
        showBar: true
      },
      {
        name: "Russia",
        value: "4.5",
        showBar: true
      },
      {
        name: "Mexico",
        value: "2.3",
        showBar: true
      },
      {
        name: "Spain",
        value: "1.7",
        showBar: true
      }
    ]

  }
},
methods: {
    toastMe: function() {
      this.$toast(this.message, {
        duration: this.duration,
        mode: this.mode,
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
        transition: this.defaultTransition,
        className: [ this.defaultClass, 'my-class'],
      })
    }
  },
 watch: {
    'customClass': function(val) {
      document.querySelector('#cust-style').textContent = val
    }
  },


}
</script>

<style lang="scss">

body {
  font-family: 'Roboto';
  -webkit-font-smoothing: antialiased;
}

.bg-green {
  background: #1BC98E;
}

.bg-red {
  background: #E64759;
}

.bg-purple {
  background: #9F86FF;
}


.divide:before {
  background: rgba(0, 0, 0, .1);
  content: '';
  height: 1px;
  left: 0;
  position: absolute;
  right: 0;
  top: 8px;
  width: 100%;
  z-index: -1;
}
ul {
        padding: 0;
        list-style: none;
      }
      ul i.fa {
        margin-right: 5px;
      }
</style>
