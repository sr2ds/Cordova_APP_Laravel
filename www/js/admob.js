var isAppForeground = true;
  
    function initAds() {
      if (admob) {
        var adPublisherIds = {
          ios : {
            banner: "ca-app-pub-4298730028172354/6546899824",
            interstitial: "ca-app-pub-4298730028172354/7260080221"
          },
          android : {
            banner: "ca-app-pub-4298730028172354/6546899824",
            interstitial: "ca-app-pub-4298730028172354/1622426225"
          }
        };
        var admobid = (/(android)/i.test(navigator.userAgent)) ? adPublisherIds.android : adPublisherIds.ios;

        admob.setOptions({
          publisherId:      admobid.banner,
          interstitialAdId: admobid.interstitial,
          tappxIdiOS:       "/XXXXXXXXX/Pub-XXXX-iOS-IIII",
          tappxIdAndroid:   "/XXXXXXXXX/Pub-XXXX-Android-AAAA",
          tappxShare:       0.5,
          autoShowBanner:   true,
          overlap: true,
        });

        registerAdEvents();

      } else {
        alert('AdMobAds plugin not ready');
      }
    }

    function onAdLoaded(e) {
      var storage = window.localStorage;
      storage.setItem('AdLoad', 1);
      
      if (isAppForeground) {
        if (e.adType === admob.AD_TYPE.INTERSTITIAL) {
          console.log("An interstitial has been loaded and autoshown. If you want to load the interstitial first and show it later, set 'autoShowInterstitial: false' in admob.setOptions() and call 'admob.showInterstitialAd();' here");
        } else if (e.adType === admob.AD_TYPE_BANNER) {
          console.log("New banner received");
        }
      }
    }

    function onPause() {
      if (isAppForeground) {}
    }

    function onResume() {
      if (!isAppForeground) {}
    }

  // optional, in case respond to events
  function registerAdEvents() {
    document.addEventListener(admob.events.onAdLoaded, onAdLoaded);
    document.addEventListener(admob.events.onAdFailedToLoad, function (e) {});
    document.addEventListener(admob.events.onAdOpened, function (e) {});
    document.addEventListener(admob.events.onAdClosed, function (e) {});
    document.addEventListener(admob.events.onAdLeftApplication, function (e) {});
    document.addEventListener(admob.events.onInAppPurchaseRequested, function (e) {});

    document.addEventListener("pause", onPause, false);
    document.addEventListener("resume", onResume, false);
  }