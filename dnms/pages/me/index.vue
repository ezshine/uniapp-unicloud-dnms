<template>
	<ezpage :navigationHasBottomLine="false">
		<view slot="contentSection">
			<view @click="updateUserProfile" style="text-align: center;background-color: #fff;padding-bottom: 20px;">
				<image :src="userInfo.avatarUrl" mode="widthFix" style="width:100px;height:100px;border-radius: 50px;background-color: #8F8F94;"></image>
				<view>{{userInfo.nickName}}</view>
				<view><text class="dnms-tag" style="background-color: #3aa64e;">同步微信信息</text></view>
			</view>
			<view style="padding: 10px;">
				<view @click="btnCreateBookShelf" class="dnms-blockbutton" style="margin-bottom: 10px;">新建书房</view>
				<view v-for="item in bookshelfs" style="margin-bottom: 10px;">
					<bookshelfcell @removeHandler="onRemoveHandler" :data="item"></bookshelfcell>
				</view>
			</view>
		</view>
	</ezpage>
</template>

<script>
	import loginUser from "../../common/currentUser.js"
	import cloudApi from "../../common/cloudApi.js"
	
	import ezpage from "../../components/ezpage.vue"
	import bookshelfcell from "../../components/dnms-ui/bookshelfcell.vue"
	
	export default {
		components:{
			ezpage,
			bookshelfcell
		},
		data() {
			return {
				userInfo:null,
				bookshelfs:[]
			}
		},
		async onLoad(options){
			this.userInfo = await loginUser.login();
			this.getBookshelfs();
			
			if(options.scene){
				var scene = unescape(options.scene);
				var params = scene.split("=");
				var key = params[0];
				
				uni.navigateTo({
					url:"../bookshelf/bookshelf?id="+params[1]
				})
			}
		},
		onShow() {
			if(this.userInfo)this.getBookshelfs();
		},
		methods: {
			btnCreateBookShelf(){
				uni.navigateTo({
					url:"../createbookshelf/createbookshelf"
				})
			},
			updateUserProfile(){
				uni.getUserProfile({
					desc: '用于完善会员资料',
					success: (res) => {
						this.userInfo = Object.assign(this.userInfo,res.userInfo);
						loginUser.updateUserInfo(this.userInfo);
					}
				})
			},
			onRemoveHandler(){
				console.log("已删除，刷新当前界面")
				this.getBookshelfs();
			},
			getBookshelfs(){
				cloudApi.call({
					name:"bookshelfs",
					data:{
						action:"listmy",
						lastId:0
					},
					success:(res)=>{
						console.log(res);
						this.bookshelfs = res.result;
					}
				})
			}
		}
	}
</script>

<style>
	
</style>
