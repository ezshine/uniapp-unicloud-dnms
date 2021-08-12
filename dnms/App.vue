<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	@font-face {
	  font-family: 'iconfont';  /* project id 534791 */
	  src: url('//at.alicdn.com/t/font_534791_530fi78evgbhjjor.eot');
	  src: url('//at.alicdn.com/t/font_534791_530fi78evgbhjjor.eot?#iefix') format('embedded-opentype'),
	  url('//at.alicdn.com/t/font_534791_530fi78evgbhjjor.woff') format('woff'),
	  url('//at.alicdn.com/t/font_534791_530fi78evgbhjjor.ttf') format('truetype'),
	  url('//at.alicdn.com/t/font_534791_530fi78evgbhjjor.svg#iconfont') format('svg');
	}
	
	.iconfont {
	  font-family: "iconfont" !important;
	  font-size: 16px;
	  font-style: normal;
	  -webkit-font-smoothing: antialiased;
	  -moz-osx-font-smoothing: grayscale;
	}
	
	.icon-appreciate:before {
	  content: "\e644";
	}
	
	.icon-check:before {
	  content: "\e645";
	}
	
	.icon-close:before {
	  content: "\e646";
	}
	
	.icon-edit:before {
	  content: "\e649";
	}
	
	.icon-emoji:before {
	  content: "\e64a";
	}
	
	.icon-favorfill:before {
	  content: "\e64b";
	}
	
	.icon-favor:before {
	  content: "\e64c";
	}
	
	.icon-loading:before {
	  content: "\e64f";
	}
	
	.icon-locationfill:before {
	  content: "\e650";
	}
	
	.icon-location:before {
	  content: "\e651";
	}
	
	.icon-phone:before {
	  content: "\e652";
	}
	
	.icon-roundcheckfill:before {
	  content: "\e656";
	}
	
	.icon-roundcheck:before {
	  content: "\e657";
	}
	
	.icon-roundclosefill:before {
	  content: "\e658";
	}
	
	.icon-roundclose:before {
	  content: "\e659";
	}
	
	.icon-roundrightfill:before {
	  content: "\e65a";
	}
	
	.icon-roundright:before {
	  content: "\e65b";
	}
	
	.icon-search:before {
	  content: "\e65c";
	}
	
	.icon-taxi:before {
	  content: "\e65d";
	}
	
	.icon-timefill:before {
	  content: "\e65e";
	}
	
	.icon-time:before {
	  content: "\e65f";
	}
	
	.icon-unfold:before {
	  content: "\e661";
	}
	
	.icon-warnfill:before {
	  content: "\e662";
	}
	
	.icon-warn:before {
	  content: "\e663";
	}
	
	.icon-camerafill:before {
	  content: "\e664";
	}
	
	.icon-camera:before {
	  content: "\e665";
	}
	
	.icon-commentfill:before {
	  content: "\e666";
	}
	
	.icon-comment:before {
	  content: "\e667";
	}
	
	.icon-likefill:before {
	  content: "\e668";
	}
	
	.icon-like:before {
	  content: "\e669";
	}
	
	.icon-notificationfill:before {
	  content: "\e66a";
	}
	
	.icon-notification:before {
	  content: "\e66b";
	}
	
	.icon-order:before {
	  content: "\e66c";
	}
	
	.icon-samefill:before {
	  content: "\e66d";
	}
	
	.icon-same:before {
	  content: "\e66e";
	}
	
	.icon-deliver:before {
	  content: "\e671";
	}
	
	.icon-evaluate:before {
	  content: "\e672";
	}
	
	.icon-pay:before {
	  content: "\e673";
	}
	
	.icon-send:before {
	  content: "\e675";
	}
	
	.icon-shop:before {
	  content: "\e676";
	}
	
	.icon-ticket:before {
	  content: "\e677";
	}
	
	.icon-wang:before {
	  content: "\e678";
	}
	
	.icon-back:before {
	  content: "\e679";
	}
	
	.icon-cascades:before {
	  content: "\e67c";
	}
	
	.icon-discover:before {
	  content: "\e67e";
	}
	
	.icon-list:before {
	  content: "\e682";
	}
	
	.icon-more:before {
	  content: "\e684";
	}
	
	.icon-scan:before {
	  content: "\e689";
	}
	
	.icon-settings:before {
	  content: "\e68a";
	}
	
	.icon-questionfill:before {
	  content: "\e690";
	}
	
	.icon-question:before {
	  content: "\e691";
	}
	
	.icon-shopfill:before {
	  content: "\e697";
	}
	
	.icon-form:before {
	  content: "\e699";
	}
	
	.icon-wangfill:before {
	  content: "\e69a";
	}
	
	.icon-pic:before {
	  content: "\e69b";
	}
	
	.icon-filter:before {
	  content: "\e69c";
	}
	
	.icon-footprint:before {
	  content: "\e69d";
	}
	
	.icon-top:before {
	  content: "\e69e";
	}
	
	.icon-pulldown:before {
	  content: "\e69f";
	}
	
	.icon-pullup:before {
	  content: "\e6a0";
	}
	
	.icon-right:before {
	  content: "\e6a3";
	}
	
	.icon-refresh:before {
	  content: "\e6a4";
	}
	
	.icon-moreandroid:before {
	  content: "\e6a5";
	}
	
	.icon-deletefill:before {
	  content: "\e6a6";
	}
	
	.icon-refund:before {
	  content: "\e6ac";
	}
	
	.icon-cart:before {
	  content: "\e6af";
	}
	
	.icon-qrcode:before {
	  content: "\e6b0";
	}
	
	.icon-remind:before {
	  content: "\e6b2";
	}
	
	.icon-delete:before {
	  content: "\e6b4";
	}
	
	.icon-profile:before {
	  content: "\e6b7";
	}
	
	.icon-home:before {
	  content: "\e6b8";
	}
	
	.icon-cartfill:before {
	  content: "\e6b9";
	}
	
	.icon-discoverfill:before {
	  content: "\e6ba";
	}
	
	.icon-homefill:before {
	  content: "\e6bb";
	}
	
	.icon-message:before {
	  content: "\e6bc";
	}
	
	.icon-addressbook:before {
	  content: "\e6bd";
	}
	
	.icon-link:before {
	  content: "\e6bf";
	}
	
	.icon-lock:before {
	  content: "\e6c0";
	}
	
	.icon-unlock:before {
	  content: "\e6c2";
	}
	
	.icon-vip:before {
	  content: "\e6c3";
	}
	
	.icon-weibo:before {
	  content: "\e6c4";
	}
	
	.icon-activity:before {
	  content: "\e6c5";
	}
	
	.icon-big:before {
	  content: "\e6c7";
	}
	
	.icon-friendaddfill:before {
	  content: "\e6c9";
	}
	
	.icon-friendadd:before {
	  content: "\e6ca";
	}
	
	.icon-friendfamous:before {
	  content: "\e6cb";
	}
	
	.icon-friend:before {
	  content: "\e6cc";
	}
	
	.icon-goods:before {
	  content: "\e6cd";
	}
	
	.icon-selection:before {
	  content: "\e6ce";
	}
	
	.icon-tmall:before {
	  content: "\e6cf";
	}
	
	.icon-explore:before {
	  content: "\e6d2";
	}
	
	.icon-present:before {
	  content: "\e6d3";
	}
	
	.icon-squarecheckfill:before {
	  content: "\e6d4";
	}
	
	.icon-square:before {
	  content: "\e6d5";
	}
	
	.icon-squarecheck:before {
	  content: "\e6d6";
	}
	
	.icon-round:before {
	  content: "\e6d7";
	}
	
	.icon-roundaddfill:before {
	  content: "\e6d8";
	}
	
	.icon-roundadd:before {
	  content: "\e6d9";
	}
	
	.icon-add:before {
	  content: "\e6da";
	}
	
	.icon-notificationforbidfill:before {
	  content: "\e6db";
	}
	
	.icon-explorefill:before {
	  content: "\e6dd";
	}
	
	.icon-fold:before {
	  content: "\e6de";
	}
	
	.icon-game:before {
	  content: "\e6df";
	}
	
	.icon-redpacket:before {
	  content: "\e6e0";
	}
	
	.icon-selectionfill:before {
	  content: "\e6e1";
	}
	
	.icon-similar:before {
	  content: "\e6e2";
	}
	
	.icon-appreciatefill:before {
	  content: "\e6e3";
	}
	
	.icon-infofill:before {
	  content: "\e6e4";
	}
	
	.icon-info:before {
	  content: "\e6e5";
	}
	
	.icon-attachment:before {
	  content: "\e632";
	}
	
	.icon-tao:before {
	  content: "\e6e8";
	}
	
	.icon-mobiletao:before {
	  content: "\e6e9";
	}
	
	.icon-forwardfill:before {
	  content: "\e6ea";
	}
	
	.icon-forward:before {
	  content: "\e6eb";
	}
	
	.icon-rechargefill:before {
	  content: "\e6ec";
	}
	
	.icon-recharge:before {
	  content: "\e6ed";
	}
	
	.icon-vipcard:before {
	  content: "\e6ee";
	}
	
	.icon-voice:before {
	  content: "\e6ef";
	}
	
	.icon-voicefill:before {
	  content: "\e6f0";
	}
	
	.icon-friendfavor:before {
	  content: "\e6f1";
	}
	
	.icon-wifi:before {
	  content: "\e6f2";
	}
	
	.icon-share:before {
	  content: "\e6f3";
	}
	
	.icon-wefill:before {
	  content: "\e6f4";
	}
	
	.icon-we:before {
	  content: "\e6f5";
	}
	
	.icon-lightauto:before {
	  content: "\e6f6";
	}
	
	.icon-lightforbid:before {
	  content: "\e6f7";
	}
	
	.icon-lightfill:before {
	  content: "\e6f8";
	}
	
	.icon-camerarotate:before {
	  content: "\e6f9";
	}
	
	.icon-light:before {
	  content: "\e6fa";
	}
	
	.icon-barcode:before {
	  content: "\e6fb";
	}
	
	.icon-flashlightclose:before {
	  content: "\e6fc";
	}
	
	.icon-flashlightopen:before {
	  content: "\e6fd";
	}
	
	.icon-searchlist:before {
	  content: "\e6fe";
	}
	
	.icon-service:before {
	  content: "\e6ff";
	}
	
	.icon-sort:before {
	  content: "\e700";
	}
	
	.icon-1212:before {
	  content: "\e702";
	}
	
	.icon-down:before {
	  content: "\e703";
	}
	
	.icon-mobile:before {
	  content: "\e704";
	}
	
	.icon-mobilefill:before {
	  content: "\e705";
	}
	
	.icon-copy:before {
	  content: "\e706";
	}
	
	.icon-countdownfill:before {
	  content: "\e707";
	}
	
	.icon-countdown:before {
	  content: "\e708";
	}
	
	.icon-noticefill:before {
	  content: "\e709";
	}
	
	.icon-notice:before {
	  content: "\e70a";
	}
	
	.icon-qiang:before {
	  content: "\e70b";
	}
	
	.icon-upstagefill:before {
	  content: "\e70e";
	}
	
	.icon-upstage:before {
	  content: "\e70f";
	}
	
	.icon-babyfill:before {
	  content: "\e710";
	}
	
	.icon-baby:before {
	  content: "\e711";
	}
	
	.icon-brandfill:before {
	  content: "\e712";
	}
	
	.icon-brand:before {
	  content: "\e713";
	}
	
	.icon-choicenessfill:before {
	  content: "\e714";
	}
	
	.icon-choiceness:before {
	  content: "\e715";
	}
	
	.icon-clothesfill:before {
	  content: "\e716";
	}
	
	.icon-clothes:before {
	  content: "\e717";
	}
	
	.icon-creativefill:before {
	  content: "\e718";
	}
	
	.icon-creative:before {
	  content: "\e719";
	}
	
	.icon-female:before {
	  content: "\e71a";
	}
	
	.icon-keyboard:before {
	  content: "\e71b";
	}
	
	.icon-male:before {
	  content: "\e71c";
	}
	
	.icon-newfill:before {
	  content: "\e71d";
	}
	
	.icon-new:before {
	  content: "\e71e";
	}
	
	.icon-pullleft:before {
	  content: "\e71f";
	}
	
	.icon-pullright:before {
	  content: "\e720";
	}
	
	.icon-rankfill:before {
	  content: "\e721";
	}
	
	.icon-rank:before {
	  content: "\e722";
	}
	
	.icon-bad:before {
	  content: "\e723";
	}
	
	.icon-cameraadd:before {
	  content: "\e724";
	}
	
	.icon-focus:before {
	  content: "\e725";
	}
	
	.icon-friendfill:before {
	  content: "\e726";
	}
	
	.icon-cameraaddfill:before {
	  content: "\e727";
	}
	
	.icon-apps:before {
	  content: "\e729";
	}
	
	.icon-paintfill:before {
	  content: "\e72a";
	}
	
	.icon-paint:before {
	  content: "\e72b";
	}
	
	.icon-picfill:before {
	  content: "\e72c";
	}
	
	.icon-refresharrow:before {
	  content: "\e72d";
	}
	
	.icon-markfill:before {
	  content: "\e730";
	}
	
	.icon-mark:before {
	  content: "\e731";
	}
	
	.icon-presentfill:before {
	  content: "\e732";
	}
	
	.icon-repeal:before {
	  content: "\e733";
	}
	
	.icon-album:before {
	  content: "\e734";
	}
	
	.icon-peoplefill:before {
	  content: "\e735";
	}
	
	.icon-people:before {
	  content: "\e736";
	}
	
	.icon-servicefill:before {
	  content: "\e737";
	}
	
	.icon-repair:before {
	  content: "\e738";
	}
	
	.icon-file:before {
	  content: "\e739";
	}
	
	.icon-repairfill:before {
	  content: "\e73a";
	}
	
	.icon-taoxiaopu:before {
	  content: "\e73b";
	}
	
	.icon-attentionfill:before {
	  content: "\e73c";
	}
	
	.icon-attention:before {
	  content: "\e73d";
	}
	
	.icon-commandfill:before {
	  content: "\e73e";
	}
	
	.icon-command:before {
	  content: "\e73f";
	}
	
	.icon-communityfill:before {
	  content: "\e740";
	}
	
	.icon-community:before {
	  content: "\e741";
	}
	
	.icon-read:before {
	  content: "\e742";
	}
	
	.icon-tian:before {
	  content: "\e748";
	}
	
	.icon-calendar:before {
	  content: "\e74a";
	}
	
	.icon-cut:before {
	  content: "\e74b";
	}
	
	.icon-magic:before {
	  content: "\e74c";
	}
	
	.icon-backwardfill:before {
	  content: "\e74d";
	}
	
	.icon-playfill:before {
	  content: "\e74f";
	}
	
	.icon-stop:before {
	  content: "\e750";
	}
	
	.icon-tagfill:before {
	  content: "\e751";
	}
	
	.icon-tag:before {
	  content: "\e752";
	}
	
	.icon-group:before {
	  content: "\e753";
	}
	
	.icon-all:before {
	  content: "\e755";
	}
	
	.icon-backdelete:before {
	  content: "\e756";
	}
	
	.icon-hotfill:before {
	  content: "\e757";
	}
	
	.icon-hot:before {
	  content: "\e758";
	}
	
	.icon-post:before {
	  content: "\e759";
	}
	
	.icon-radiobox:before {
	  content: "\e75b";
	}
	
	.icon-rounddown:before {
	  content: "\e75c";
	}
	
	.icon-upload:before {
	  content: "\e75d";
	}
	
	.icon-writefill:before {
	  content: "\e760";
	}
	
	.icon-write:before {
	  content: "\e761";
	}
	
	.icon-radioboxfill:before {
	  content: "\e763";
	}
	
	.icon-punch:before {
	  content: "\e764";
	}
	
	.icon-shake:before {
	  content: "\e765";
	}
	
	.icon-add1:before {
	  content: "\e767";
	}
	
	.icon-move:before {
	  content: "\e768";
	}
	
	.icon-safe:before {
	  content: "\e769";
	}
	
	.icon-activityfill:before {
	  content: "\e775";
	}
	
	.icon-crownfill:before {
	  content: "\e776";
	}
	
	.icon-crown:before {
	  content: "\e777";
	}
	
	.icon-goodsfill:before {
	  content: "\e778";
	}
	
	.icon-messagefill:before {
	  content: "\e779";
	}
	
	.icon-profilefill:before {
	  content: "\e77a";
	}
	
	.icon-sound:before {
	  content: "\e77b";
	}
	
	.icon-sponsorfill:before {
	  content: "\e77c";
	}
	
	.icon-sponsor:before {
	  content: "\e77d";
	}
	
	.icon-upblock:before {
	  content: "\e77e";
	}
	
	.icon-weblock:before {
	  content: "\e77f";
	}
	
	.icon-weunblock:before {
	  content: "\e780";
	}
	
	.icon-my:before {
	  content: "\e78b";
	}
	
	.icon-myfill:before {
	  content: "\e78c";
	}
	
	.icon-emojifill:before {
	  content: "\e78d";
	}
	
	.icon-emojiflashfill:before {
	  content: "\e78e";
	}
	
	.icon-flashbuyfill-copy:before {
	  content: "\e78f";
	}
	
	.icon-text:before {
	  content: "\e791";
	}
	
	.icon-more1:before {
	  content: "\e61d";
	}
	
	.icon-goodsfavor:before {
	  content: "\e794";
	}
	
	.icon-musicfill:before {
	  content: "\e795";
	}
	
	.icon-musicforbidfill:before {
	  content: "\e796";
	}
	
	.icon-roundleftfill:before {
	  content: "\e799";
	}
	
	.icon-triangledownfill:before {
	  content: "\e79b";
	}
	
	.icon-triangleupfill:before {
	  content: "\e79c";
	}
	
	.icon-roundleftfill-copy:before {
	  content: "\e79e";
	}
	
	.icon-pulldown1:before {
	  content: "\e79f";
	}
	
	.icon-emojilight:before {
	  content: "\e7a1";
	}
	
	.icon-keyboardlight:before {
	  content: "\e7a3";
	}
	
	.icon-recordfill:before {
	  content: "\e7a4";
	}
	
	.icon-recordlight:before {
	  content: "\e7a5";
	}
	
	.icon-record:before {
	  content: "\e7a6";
	}
	
	.icon-roundaddlight:before {
	  content: "\e7a7";
	}
	
	.icon-soundlight:before {
	  content: "\e7a8";
	}
	
	.icon-formfill:before {
	  content: "\e7ab";
	}
	
	.icon-sortlight:before {
	  content: "\e7ad";
	}
	
	.icon-circlefill:before {
	  content: "\e7b0";
	}
	
	.icon-circle:before {
	  content: "\e7b1";
	}
	
	.icon-attentionforbid:before {
	  content: "\e7b2";
	}
	
	.icon-attentionforbidfill:before {
	  content: "\e7b3";
	}
	
	.icon-attentionfavorfill:before {
	  content: "\e7b4";
	}
	
	.icon-attentionfavor:before {
	  content: "\e7b5";
	}
	
	.icon-piclight:before {
	  content: "\e7b7";
	}
	
	.icon-shoplight:before {
	  content: "\e7b8";
	}
	
	.icon-voicelight:before {
	  content: "\e7b9";
	}
	
	.icon-attentionfavorfill-copy:before {
	  content: "\e7ba";
	}
	
	.icon-naiping:before {
	  content: "\e64d";
	}
	
	.icon-full:before {
	  content: "\e7bc";
	}
	
	.icon-mail:before {
	  content: "\e7bd";
	}
	
	.icon-peoplelist:before {
	  content: "\e7be";
	}
	
	.icon-goodsnewfill:before {
	  content: "\e7bf";
	}
	
	.icon-goodsnew:before {
	  content: "\e7c0";
	}
	
	.icon-medalfill:before {
	  content: "\e7c1";
	}
	
	.icon-medal:before {
	  content: "\e7c2";
	}
	
	.icon-newsfill:before {
	  content: "\e7c3";
	}
	
	.icon-newshotfill:before {
	  content: "\e7c4";
	}
	
	.icon-newshot:before {
	  content: "\e7c5";
	}
	
	.icon-news:before {
	  content: "\e7c6";
	}
	
	.icon-videofill:before {
	  content: "\e7c7";
	}
	
	.icon-video:before {
	  content: "\e7c8";
	}
	
	.icon-askfill:before {
	  content: "\e7c9";
	}
	
	.icon-ask:before {
	  content: "\e7ca";
	}
	
	.icon-exit:before {
	  content: "\e7cb";
	}
	
	.icon-skinfill:before {
	  content: "\e7cc";
	}
	
	.icon-skin:before {
	  content: "\e7cd";
	}
	
	.icon-moneybagfill:before {
	  content: "\e7ce";
	}
	
	.icon-usefullfill:before {
	  content: "\e7cf";
	}
	
	.icon-usefull:before {
	  content: "\e7d0";
	}
	
	.icon-moneybag:before {
	  content: "\e7d1";
	}
	
	.icon-redpacket_fill:before {
	  content: "\e7d3";
	}
	
	.icon-subscription:before {
	  content: "\e7d4";
	}
	
	.icon-home_light:before {
	  content: "\e7d5";
	}
	
	.icon-my_light:before {
	  content: "\e7d6";
	}
	
	.icon-community_light:before {
	  content: "\e7d7";
	}
	
	.icon-cart_light:before {
	  content: "\e7d8";
	}
	
	.icon-we_light:before {
	  content: "\e7d9";
	}
	
	.icon-home_fill_light:before {
	  content: "\e7da";
	}
	
	.icon-cart_fill_light:before {
	  content: "\e7db";
	}
	
	.icon-community_fill_light:before {
	  content: "\e7dc";
	}
	
	.icon-my_fill_light:before {
	  content: "\e7dd";
	}
	
	.icon-we_fill_light:before {
	  content: "\e7de";
	}
	
	.icon-skin_light:before {
	  content: "\e7df";
	}
	
	.icon-search_light:before {
	  content: "\e7e0";
	}
	
	.icon-scan_light:before {
	  content: "\e7e1";
	}
	
	.icon-people_list_light:before {
	  content: "\e7e2";
	}
	
	.icon-message_light:before {
	  content: "\e7e3";
	}
	
	.icon-close_light:before {
	  content: "\e7e4";
	}
	
	.icon-add_light:before {
	  content: "\e7e5";
	}
	
	.icon-profile_light:before {
	  content: "\e7e6";
	}
	
	.icon-service_light:before {
	  content: "\e7e7";
	}
	
	.icon-friend_add_light:before {
	  content: "\e7e8";
	}
	
	.icon-edit_light:before {
	  content: "\e7e9";
	}
	
	.icon-camera_light:before {
	  content: "\e7ea";
	}
	
	.icon-hot_light:before {
	  content: "\e7eb";
	}
	
	.icon-refresh_light:before {
	  content: "\e7ec";
	}
	
	.icon-back_light:before {
	  content: "\e7ed";
	}
	
	.icon-share_light:before {
	  content: "\e7ee";
	}
	
	.icon-comment_light:before {
	  content: "\e7ef";
	}
	
	.icon-appreciate_light:before {
	  content: "\e7f0";
	}
	
	.icon-favor_light:before {
	  content: "\e7f1";
	}
	
	.icon-appreciate_fill_light:before {
	  content: "\e7f2";
	}
	
	.icon-comment_fill_light:before {
	  content: "\e7f3";
	}
	
	.icon-wang_light:before {
	  content: "\e7f4";
	}
	
	.icon-more_android_light:before {
	  content: "\e7f5";
	}
	
	.icon-friend_light:before {
	  content: "\e7f6";
	}
	
	.icon-more_light:before {
	  content: "\e7f7";
	}
	
	.icon-goods_favor_light:before {
	  content: "\e7f8";
	}
	
	.icon-goods_new_fill_light:before {
	  content: "\e7f9";
	}
	
	.icon-goods_new_light:before {
	  content: "\e7fa";
	}
	
	.icon-goods_light:before {
	  content: "\e7fb";
	}
	
	.icon-medal_fill_light:before {
	  content: "\e7fc";
	}
	
	.icon-medal_light:before {
	  content: "\e7fd";
	}
	
	.icon-news_fill_light:before {
	  content: "\e7fe";
	}
	
	.icon-news_hot_fill_light:before {
	  content: "\e7ff";
	}
	
	.icon-news_hot_light:before {
	  content: "\e800";
	}
	
	.icon-news_light:before {
	  content: "\e801";
	}
	
	.icon-video_fill_light:before {
	  content: "\e802";
	}
	
	.icon-message_fill_light:before {
	  content: "\e803";
	}
	
	.icon-form_light:before {
	  content: "\e804";
	}
	
	.icon-video_light:before {
	  content: "\e805";
	}
	
	.icon-search_list_light:before {
	  content: "\e806";
	}
	
	.icon-form_fill_light:before {
	  content: "\e807";
	}
	
	.icon-global_light:before {
	  content: "\e808";
	}
	
	.icon-global:before {
	  content: "\e809";
	}
	
	.icon-favor_fill_light:before {
	  content: "\e80a";
	}
	
	.icon-delete_light:before {
	  content: "\e80b";
	}
	
	.icon-back_android:before {
	  content: "\e80c";
	}
	
	.icon-back_android_light:before {
	  content: "\e80d";
	}
	
	.icon-down_light:before {
	  content: "\e80e";
	}
	
	.icon-round_close_light:before {
	  content: "\e80f";
	}
	
	.icon-round_close_fill_light:before {
	  content: "\e810";
	}
	
	.icon-expressman:before {
	  content: "\e811";
	}
	
	.icon-punch_light:before {
	  content: "\e812";
	}
	
	.icon-evaluate_fill:before {
	  content: "\e813";
	}
	
	.icon-furniture:before {
	  content: "\e814";
	}
	
	.icon-dress:before {
	  content: "\e815";
	}
	
	.icon-coffee:before {
	  content: "\e816";
	}
	
	.icon-sports:before {
	  content: "\e817";
	}
	
	.icon-group_light:before {
	  content: "\e818";
	}
	
	.icon-location_light:before {
	  content: "\e819";
	}
	
	.icon-attention_light:before {
	  content: "\e81a";
	}
	
	.icon-group_fill_light:before {
	  content: "\e81b";
	}
	
	.icon-group_fill:before {
	  content: "\e81c";
	}
	
	.icon-play_forward_fill:before {
	  content: "\e81d";
	}
	
	.icon-subscription_light:before {
	  content: "\e81e";
	}
	
	.icon-deliver_fill:before {
	  content: "\e81f";
	}
	
	.icon-notice_forbid_fill:before {
	  content: "\e820";
	}
	
	.icon-qr_code_light:before {
	  content: "\e821";
	}
	
	.icon-settings_light:before {
	  content: "\e822";
	}
	
	.icon-female1:before {
	  content: "\e6b6";
	}
	
	.icon-xuexiao:before {
	  content: "\e76c";
	}
	
	.icon-pick:before {
	  content: "\e823";
	}
	
	.icon-form_favor_light:before {
	  content: "\e824";
	}
	
	.icon-male1:before {
	  content: "\e6e6";
	}
	
	.icon-round_comment_light:before {
	  content: "\e825";
	}
	
	.icon-phone_light:before {
	  content: "\e826";
	}
	
	.icon-round_down_light:before {
	  content: "\e827";
	}
	
	.icon-friend_settings_light:before {
	  content: "\e828";
	}
	
	App{
		background-color: #fff;
	}
	
	page{
	  width: 100%;
	  height: 100%;
	  font-family: Verdana;
	  background: #f2f2f2;
	}
	.container {
	  height: 100%;
	  display: flex;
	  flex-direction: column;
	  align-items: center;
	  justify-content: space-between;
	  padding: 200rpx 0;
	  box-sizing: border-box;
	} 
	view{
	  box-sizing: border-box;
	}
	
	.dnms-tag
	{
		font-size: 12px;
		padding: 2px 6px;
		color: #FFFFFF;
		border-radius: 4px;
	}
	.dnms-blockbutton
	{
		width: 100%;
		text-align: center;
		font-size: 18px;
		line-height: 44px;
		height: 44px;
		border-radius: 22px;
		background-color: #000000;
		color: #fff;
	}
	
	.dnms-card
	{
		width: 100%;
		background-color: #fff;
		border-radius: 8px;
		margin-bottom: 10px;
		padding:0px 10px;
	}
	
	.dnms-divider
	{
		height: 1px;
		background-color: #ccc;
		width:100%;
	}
	.dnms-cell
	{
		width: 100%;
		height: 44px;
		line-height: 44px;
		display: flex;
		justify-content: space-between;
		color: #333;
	}
	.dnms-cell>view:nth-child(1)
	{
		font-size: 16px;
		flex:1;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
</style>
