// import appConfig from '../Config/AppSetting';

// export default async function uploadImage (token, img) {
//   let response = await RNFetchBlob.fetch('POST', appConfig.URL+'/file/file', {
//     'Authorization': token,
//     'Content-Type' : 'multipart/form-data'
//   }, [
//     // append field data from file path
//     {
//       name : 'file',
//       filename : 'avatar.jpg',
//       // Change BASE64 encoded data to a file path with prefix `RNFetchBlob-file://`.
//       // Or simply wrap the file path with RNFetchBlob.wrap().
//       data: RNFetchBlob.wrap(img.uri)
//     }]);
//   return response.json();
// }
