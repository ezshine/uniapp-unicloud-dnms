<template>
	<view style="position: relative;height:100%;">
		<view style="width: 100%;position: fixed;transition: all .4s;z-index:999999;" :style="{height:statusBarHeight+'px',background:statusBackground}"></view>
		<view v-if="showNavigation" style="width:100%;position: fixed;top:0px;left: 0px;z-index:999998;" :style="{paddingTop:statusBarHeight+'px'}">
			<slot name="navigationSection">
				<eznavigationbar :hasBottomLine="navigationHasBottomLine">
					<view slot='title'>{{title}}</view>
				</eznavigationbar>
			</slot>
		</view>
		<view style="width:100%;height:100%;position: relative;" :style="{paddingTop:paddingTop+'px',paddingBottom:paddingBottom+'px'}">
			<slot name="contentSection"></slot>
		</view>
		<view style="width:100%;position: fixed;z-index: 998;bottom: 0;">
			<slot name="tabSection"></slot>
		</view>
	</view>
</template>

<script>
	import eznavigationbar from "./eznaviagtionbar.vue"
	export default {
		components:{
			eznavigationbar
		},
		data() {
			return {
				paddingTop:0,
				paddingBottom:0,
				height:"100%",
				statusBarHeight:22
			};
		},
		props:{
			title:{
				type:String,
				default:""
			},
			showNavigation:{
				type:Boolean,
				default:true
			},
			navigationHasBottomLine:{
				type:Boolean,
				default:true
			},
			statusBackground:{
				type:String,
				default:"#fff"
			}
		},
		computed:{
			
		},
		methods:{
			autoPaddingTop:function(){
				if(this.showNavigation)return 44+this.sysInfo.statusBarHeight;
				return this.sysInfo.statusBarHeight;
			},
			autoPaddingBottom:function(){
				if(this.$slots.tabSection)return 50+(this.sysInfo.safeArea?34:0);
				return 0;
			}
		},
		mounted() {
			this.sysInfo=uni.getSystemInfoSync();
			
			this.height=this.sysInfo.screenHeight+"px";
			
			this.paddingTop=this.autoPaddingTop();
			this.paddingBottom=this.autoPaddingBottom();
			// this.contentHeight=(this.sysInfo.screenHeight-this.paddingTop-this.paddingBottom)+"px";
			this.statusBarHeight=this.sysInfo.statusBarHeight;
		}
	}
</script>

<style>
	
</style>
