<template>
	<ezpage :title="title">
		<view slot="contentSection" style="padding:10px;">
			<view class='dnms-card'>
				<input v-model="name" placeholder="请输入书房名称" maxlength="20" style="font-size: 18px;width:100%;height:44px;line-height: 44px;"></input>
				<view class="dnms-divider"></view>
				<view class="dnms-cell" @click="btnChooseLocation">
					<view>{{address}}</view>
					<view class="iconfont icon-right"></view>
				</view>
			</view>
			<view @click="btnSaveBookshelf" class="dnms-blockbutton">保存</view>
		</view>
	</ezpage>
</template>

<script>
	import cloudApi from "../../common/cloudApi.js"
	import ezpage from "../../components/ezpage.vue"
	export default {
		components:{
			ezpage
		},
		data() {
			return {
				title:"新建书房",
				_id:null,
				name:"",
				address:"选取书房所在地址",
				longitude:"",
				latitude:""
			}
		},
		onLoad(options) {
			if(options.id){
				this.title = "修改书房";
				this._id = options.id;
				cloudApi.call({
					name:"bookshelfs",
					data:{
						action:"get",
						_id:this._id
					},
					success:(res)=>{
						this.name = res.result.name;
						this.address = res.result.address;
						this.longitude = res.result.geopoint.coordinates[0];
						this.latitude = res.result.geopoint.coordinates[1];
					}
				})
			}
		},
		methods: {
			btnChooseLocation(){
				uni.getLocation({
					success: (res) => {
						uni.chooseLocation({
							latitude:res.latitude,
							longitude:res.longitude,
							success: (res) => {
								this.address= res.address+res.name;
								this.longitude=res.longitude;
								this.latitude=res.latitude;
							}
						})
					}
				})
			},
			btnSaveBookshelf(){
				if(this.name.length<3)return uni.showToast({
					icon:"none",
					mask:true,
					title:"书房名称至少需要3个字符"
				})
				else if(this.latitude==""||this.longitude==""||this.address=="")return uni.showToast({
					icon:"none",
					mask:true,
					title:"请选择正确的书房所在地址"
				})
				cloudApi.call({
					name:"bookshelfs",
					data:{
						action:this._id?"update":"create",
						_id:this._id,
						name:this.name,
						address:this.address,
						longitude:this.longitude,
						latitude:this.latitude
					},
					success: (res) => {
						if(res.result.err==1){
							uni.showModal({
								content:"书房名称未通过内容安全审查",
								showCancel:false
							})
						}else{
							uni.navigateBack({
								
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
