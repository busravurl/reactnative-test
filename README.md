# RN_test


#### Usage
- Installation: 
npm install
- Run on Android: 
npx react-native run-android
#### Tasks
 - Create an App with 2 screens
 - Strcuture the files and folders as you want
 - the first screen with a map which will show following stations on it http://dati.retecivica.bz.it/services/meteo/v1/stations
 - the second screen will show a list of following data https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2014-01-01&endtime=2014-01-02

Description for Earthquake List screen:
(see https://earthquake.usgs.gov/data/comcat/index.php#code)
- Place: Textual description of named geographic region near to the event.
- Type: Type of seismic event.(“earthquake”, “quarry”)
- Status: Indicates whether the event has been reviewed by a human.(“automatic”, “reviewed”, “deleted”)
- Sig: A number describing how significant the event is. Larger numbers indicate a more significant event. This value is determined on a number of factors, including: magnitude, maximum MMI, felt reports, and estimated impact.

![Rn_test](https://user-images.githubusercontent.com/48842851/139716541-d41a47ec-0673-41f4-a010-77b043a20254.PNG)
