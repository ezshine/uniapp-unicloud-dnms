<template>
	<view style="height: 44px;line-height:44px;width:100%;transition:background .4s,color .4s;" :style="{background:backgroundColor,color:titleColor}">
		<view style="display: flex;width:100%;vertical-align: middle;">
			<view style="width:94px;height: 44px;line-height:44px;padding-left: 15px;font-size: 18px;">
				<slot name="leftItems">
					<text @click="btnBack" v-if="showBackButton" class="iconfont icon-back leftitem"></text>
					<text @click="btnHome" v-if="showHomeButton&&hasHomeButton" class="iconfont icon-homefill leftitem"></text>
				</slot>
			</view>
			<view class="navTitle">
				<slot name="title"></slot>
			</view>
			<view style="width:94px;height: 44px;">
				
			</view>
		</view>
		<view style="height: 1px;width: 100%;" :style="{background:bottomlineColor,display:hasBottomLine?'':'none'}"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				showBackButton:false,
				showHomeButton:false
			};
		},
		props:{
			hasHomeButton:{
				type:Boolean,
				default:true
			},
			backgroundColor:{
				type:String,
				default:"#fff"
			},
			titleColor:{
				type:String,
				default:"#000"
			},
			hasBottomLine:{
				type:Boolean,
				default:true
			},
			bottomlineColor:{
				type:String,
				default:"#F2F2F2"
			}
		},
		methods:{
			btnBack:function(){
				uni.navigateBack({})
			},
			btnHome:function(){
				uni.navigateBack({
					delta:999
				})
			}
		},
		mounted() {
			var curPages=getCurrentPages();
			var sysInfo=uni.getSystemInfoSync();
			if(curPages.length>1)this.showBackButton=true;
			if(curPages.length>2)this.showHomeButton=true;
		}
	}
</script>

<style>
	.leftitem
	{
		margin-right: 20px;
	}
	.navTitle
	{
		flex:1;
		text-align: center;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		height: 44px;
		line-height:44px;
	}
</style>
