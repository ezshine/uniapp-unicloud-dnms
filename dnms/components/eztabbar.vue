<template>
	<view class="tabbar" :style="{height:realHeight+'px',borderTop:topline?'1px solid #f2f2f2':''}">
		<slot name="contentSection">
			<view v-for="item,index in tabs.pages" @click="onClickItem(index)" class="tabitem" 
			:class="[index==tabs.activedIndex?'actived':'']" 
			:style="{
				background:index==tabs.activedIndex?(tabs.activedBackgroundColor?tabs.activedBackgroundColor:'#fff'):(tabs.backgroundColor?tabs.backgroundColor:'#fff'),
				color:index==tabs.activedIndex?(tabs.activedTextColor?tabs.activedTextColor:'#000'):(tabs.textColor?tabs.textColor:'#000')
				}">
				<view class="itemicon" :class="[index==tabs.activedIndex?item.activedIconClass:item.iconClass]"></view>
				<view class="itemlabel">{{item.name}}</view>
			</view>
		</slot>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				safeAreaHeight:0
			};
		},
		props:{
			tabs:{
				type:Object,
				default:function(){
					return {pages:[]};
				}
			},
			height:{
				type:Number,
				default:50
			},
			safeArea:{
				type:Boolean,
				default:true
			},
			topline:{
				type:Boolean,
				default:true
			}
		},
		computed:{
			realHeight:function(){
				if(!this.safeArea)return this.height;
				return this.height+this.safeAreaHeight;
			}
		},
		methods:{
			onClickItem:function(index){
				var item=this.tabs.pages[index];
				this.$emit("onTabClick",index);
				if(!item.actived){
					if(item.page){
						uni.reLaunch({
							url:item.page
						})
					}
					this.$emit("onTabChanged",index);
				}
			}
		},
		mounted() {
			var sysInfo=uni.getSystemInfoSync();
			if(sysInfo.safeArea)this.safeAreaHeight=34;
		}
	}
</script>

<style>
	.tabbar
	{
		width:100%;
		background: #fff;
		display: flex;
		justify-content: space-between;
	}
	
	/* 正常状态 */
	.tabbar>.tabitem
	{
		flex:1;
		text-align: center;
	}
	.tabitem>.itemicon
	{
		font-size: 26px;
	}
	.tabitem>.itemlabel
	{
		font-size: 14px;
	}
</style>
