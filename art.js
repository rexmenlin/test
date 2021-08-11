
let defaultDF = [
          {
			  siteNo:32790, 
			  siteName:"32\" ART 01", 
			  paints:[
				  {
					pno: 1,
					url: 'https://github.com/rexmenlin/images/blob/main/paint_demo_1.png?raw=true',
					pname: '煎餅磨坊的舞會'
				  },
				  {
					pno: 2,
					url: 'https://github.com/rexmenlin/images/blob/main/paint_demo_2.png?raw=true',
					pname: '秋天的山毛櫸'
				  },
				  {
					pno: 3,
					url: 'https://github.com/rexmenlin/images/blob/main/paint_demo_3.png?raw=true',
					pname: '時間與潮汐'
				  }
			  ]
		  },
          {
			  siteNo:32791, 
			  siteName:"32\" ART 02", 
			  paints:[
				  {
					pno: 4,
					url: 'https://github.com/rexmenlin/images/blob/main/paint_demo_4.png?raw=true',
					pname: '夏季'
				  },
				  {
					pno: 5,
					url: 'https://github.com/rexmenlin/images/blob/main/paint_demo_5.png?raw=true',
					pname: 'Bucentaur\'s return...'
				  },
				  {
					pno: 6,
					url: 'https://github.com/rexmenlin/images/blob/main/paint_demo_6.png?raw=true',
					pname: '大碗島的星期天下午'
				  }
			  ]
			}
        ];

const vm = Vue.createApp({
    data() {
      return {
        paintItems: defaultDF,
        selectedIndex: 0,
        selectedItemObj: defaultDF[0],
        loading: false
      }
    },
    methods:{ 
      sendComQiEvent(siteNo, paintNo) { 
		this.loading = true;
        const token = '6EED0649E7D3B2DB00B9359EC57824BB41E959046F098FB28D2676884168EBBE';
        let url = 'https://var.enqii.net/api/v2/site/'+siteNo+'/sendEvent';
        let mybody = {
          "params": [
            {
              "pname": "eventIdentifier",
              "pvalue": "paintNo"
            },
            { 
              "pname": "source",
              "pvalue": ""+paintNo
            }
          ],
          "name": "Server Event",
          "id": 14
        };
		
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(mybody), // string or object
            headers:{
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'APIAuth': token
            }
          })
          .then((response) => {
            console.log(response);
			this.loading = false;
            return response.text();
          }).then((jsonData) => {
            console.log(jsonData);
			this.loading = false;
          }).catch((err) => {
            console.log('Error occured:', err);
			this.loading = false;
        });
        
      },
      onDispChange(event) {
        this.selectedItemObj = defaultDF[event.target.selectedIndex];
      }
    }
  }).mount('#app');

