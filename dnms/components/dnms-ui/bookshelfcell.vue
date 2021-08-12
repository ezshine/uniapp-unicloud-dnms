<template>
	<view style="width: 100%;background-color: #fff;border-radius: 8px;border: 1px solid #ccc;overflow: hidden;">
		<view style="height:30px;line-height: 30px;font-size: 18px;padding:0px 10px;display: flex;justify-content: space-between;">
			<view @click="btnEnter" style="flex:1;text-overflow: ellipsis;white-space: nowrap;overflow: hidden;">{{data.name}}<text style="color:#999;font-size: 12px;margin-left: 5px;">({{data.totalbook}}本藏书)</text></view>
			<view @click="btnMore" class="iconfont icon-more" style="color: #666;"></view>
		</view>
		<view @click="btnEnter">
			<image mode="aspectFill" :src="'http://api.map.baidu.com/staticimage/v2?ak=6ae2e0c384df712820d0a2fa4ddcffc6&zoom=17&coordtype=gcj02ll&center='+data.geopoint.coordinates[0]+','+data.geopoint.coordinates[1]" style="width:100%;height:80px;vertical-align: middle;"></image>
		</view>
		<view style="height:30px;line-height: 30px;font-size: 14px;color:#666;padding:0px 10px;text-overflow: ellipsis;white-space: nowrap;overflow: hidden;">
			{{data.address}}
		</view>
	</view>
</template>

<script>
	import cloudApi from "../../common/cloudApi.js"
	export default{
		props:{
			data:{
				type:Object
			}
		},
		mounted() {
			
		},
		methods:{
			btnEnter(){
				uni.navigateTo({
					url:"../../pages/bookshelf/bookshelf?id="+this.data._id
				})
			},
			btnMore(){
				uni.showActionSheet({
					itemList:["修改","删除"],
					success: (res) => {
						if(res.tapIndex==0){
							uni.navigateTo({
								url:"../../pages/createbookshelf/createbookshelf?id="+this.data._id
							})
						}else if(res.tapIndex==1){
							uni.showModal({
								content:"确定要删除此书房吗？",
								success: (res) => {
									if(res.confirm){
										cloudApi.call({
											name:"bookshelfs",
											data:{
												action:"delete",
												_id:this.data._id
											},
											success:()=>{
												this.$emit("removeHandler")
											}
										})
									}
								}
							})
						}
					}
				})
			}
		}
	}
</script>

<style>
</style>
