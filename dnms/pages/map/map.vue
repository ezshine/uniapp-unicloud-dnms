<template>
	<ezpage title="附近">
		<view slot="contentSection" style="height: 100%;">
			<map :markers="markers" @markertap="btnMarkerTap" :latitude="latitude" :longitude="longitude" :show-location="true" @regionchange="onRegionChanged" style="width: 100%;height: 100%;"></map>
		</view>
	</ezpage>
</template>

<script>
	import cloudApi from "../../common/cloudApi.js"
	import ezpage from "../../components/ezpage.vue"
	
	var shelfs;
	export default {
		components:{
			ezpage
		},
		data() {
			return {
				latitude:"",
				longitude:"",
				markers:[]
			}
		},
		onLoad() {
			uni.getLocation({
				success: (res) => {
					this.latitude=res.latitude;
					this.longitude=res.longitude;
				}
			})
		},
		methods: {
			btnMarkerTap(e){
				
				var markerId = e.markerId;
				var shelfInfo = shelfs[markerId];
				
				console.log(shelfInfo);
				
				uni.navigateTo({
					url:"../bookshelf/bookshelf?id="+shelfInfo._id
				})
				
			},
			onRegionChanged(e){
				if(e.type=="end"){
					var latitude = e.detail.centerLocation.latitude;
					var longitude = e.detail.centerLocation.longitude;
					
					cloudApi.call({
						name:"bookshelfs",
						data:{
							action:"listbygeo",
							longitude:longitude,
							latitude:latitude
						},
						success:(res)=>{
							console.log(res);
							
							shelfs = res.result;
							var markers = [];
							for(var i =0;i<shelfs.length;i++){
								var item = shelfs[i];
								markers.push({
									id:i,
									width:55,
									height:60,
									iconPath:"/static/mapmarker_shelf.png",
									latitude:item.geopoint.coordinates[1],
									longitude:item.geopoint.coordinates[0],
								});
							}
							
							this.markers = markers;
						}
					})
				}
			}
		}
	}
</script>

<style>

</style>
