<template>
    <div class="cursor-pointer w-34 h-50 lg:w-40 lg:h-60 md:relative top-10 md:-top-10 right-20 lg:right-40 bg-white rounded-lg shadow-sm dark:bg-gray-800 p-4">
      <div class="flex justify-between md:gap-2 py-0">
        <div class="gap-1">
          <h5 class="leading-none text-[10px] font-bold text-gray-900 dark:text-white">۲۰</h5>
          <p class="text-[10px] font-normal text-gray-500 dark:text-gray-400">مجموع مشتریان</p>
        </div>
        <div
          class="flex items-center px-2.5 py-0.5 text-[10px] font-semibold text-green-500 dark:text-green-500 text-center">
          ۲۵٪
          <svg class="w-3 h-3 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13V1m0 0L1 5m4-4 4 4"/>
          </svg>
        </div>
      </div>
      <div id="area-chart"></div>
      <div class="grid grid-cols-1 items-center border-gray-200 border-t dark:border-gray-700 justify-between">
        <div class="flex justify-between items-center md:pt-1">
          <!-- Button -->
          <button
            id="dropdownDefaultButton"
            data-dropdown-toggle="lastDaysdropdown"
            data-dropdown-placement="bottom"
            class="relative cursor-pointer group text-[7px] lg:text-[10px] font-medium rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 p-1 text-gray-500 dark:text-gray-400 hover:text-gray-900 text-center inline-flex items-center dark:hover:text-white"
            type="button">
            یک سال اخیر
            <svg class="w-2.5 m-2.5 mx-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
            </svg>
            <div
            class="top-10.5 left-12 md:left-16 md:top-10-5 lg:top-16 absolute invisible opacity-0 group-hover:visible group-hover:opacity-100 -translate-x-1/2 w-20 md:w-30 transition-all duration-300 ease-out transform group-hover:translate-y-0 translate-y-2"
          >
            <div
              class="rounded-b-3xl rounded-tr-3xl md:text-xs text-zinc-500 bg-stone-300 p-1 lg:p-2"
            >
                 یک سال اخیر
            </div>
          </div>
          </button>
          <!-- Dropdown menu -->
          <div id="lastDaysdropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700">
            <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
              <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Yesterday</a>
              </li>
              <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Today</a>
              </li>
              <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Last 7 days</a>
              </li>
              <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Last 30 days</a>
              </li>
              <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Last 90 days</a>
              </li>
            </ul>
          </div>
          <a
            href="#"
            class="uppercase relative group text-[7px] lg:text-[10px] font-semibold inline-flex items-center rounded-lg text-orange-400 hover:bg-gray-100 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700  px-3 py-2 lg:py-3">
            گزارش مشتریان
            <svg class="w-2.5 h-2.5 md:h-1.5 md:w-1.5 ms-1.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
            <div
            class="top-10 left-4 md:top-10 md:-left-1 lg:top-15 lg:left-1 absolute invisible opacity-0 group-hover:visible group-hover:opacity-100 -translate-x-1/2 w-20 md:w-30 transition-all duration-300 ease-out transform group-hover:translate-y-0 translate-y-2"
          >
            <div
              class="rounded-b-3xl rounded-tl-3xl md:text-xs lg:text-md text-zinc-500 bg-stone-300 p-1 lg:p-2"
            >
                گزارش مشتریان
            </div>
          </div>
          </a>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import ApexCharts from 'apexcharts';
  
  export default defineComponent({
    name: 'Chart',
    mounted() {
      const options: ApexCharts.ApexOptions = {
        chart: {
          height: '60%',
          width: '100%',
          type: 'area',
          fontFamily: 'Inter, sans-serif',
          dropShadow: {
            enabled: false,
          },
          toolbar: {
            show: false,
          },
        },
        tooltip: {
          enabled: true,
          x: {
            show: false,
          },
        },
        fill: {
          type: 'gradient',
          gradient: {
            opacityFrom: 0.55,
            opacityTo: 0,
            shade: '#fe6e26',
            gradientToColors: ['#fe6e26'],
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          width: 6,
        },
        grid: {
          show: false,
          strokeDashArray: 4,
          padding: {
            left: 2,
            right: 0,
            top: 0,
          },
        },
        series: [
          {
            name: '، مشتریان ما ',
            data: [0, 2, 1, 3, 5, 4, 5],
            color: '#fe6e26',
          },
        ],
        xaxis: {
          categories: ['05 Dey', '02 Farvardin', '03 Khordad', '14 Shahrivar', '01 Aban', '28 Aban', '07 Bahman'],
          labels: {
            show: false,
          },
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
        },
        yaxis: {
          show: false,
        },
      };
  
      if (document.getElementById('area-chart')) {
        const chart = new ApexCharts(document.getElementById('area-chart') as HTMLElement, options);
        chart.render();
      }
    },
  });
  </script>
  
  <style scoped>

  </style>
  