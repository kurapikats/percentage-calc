// This section sets up some basic app metadata,
// the entire section is optional.
App.info({
  id: 'com.ph.simplepercentagecalc',
  name: 'Simple Percentage Calculator',
  description: 'A very simple and useful percentage calculators',
  author: 'Jesus B. Nana',
  email: 'jesus.nana@gmail.com',
  website: 'http://onin.taxicomplaints.net'
});
// Set up resources such as icons and launch screens.
// App.icons({
//   'android_xhdpi': 'icons/android-logo-xhdpi.png',
//   'android_xxhdpi': 'icons/android-logo-xxhdpi.png'
// });
// App.launchScreens({
//   'android_xhdpi_portrait': 'splash/android-splash-xhdpi.png',
//   'android_xxhdpi_portrait': 'splash/android-splash-xxhdpi.png'
// });
// Set PhoneGap/Cordova preferences
App.setPreference('HideKeyboardFormAccessoryBar', true);
App.setPreference('Orientation', 'portrait');
