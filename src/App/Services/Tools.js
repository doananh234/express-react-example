import moment from 'moment';
import _ from 'lodash';
export default {
  getDate(date) {
    return moment(date).format('MM/DD/YYYY') == moment().format('MM/DD/YYYY')?'Today' : moment(date).format('MMM DD')
  },
  sortById(list) {
    if(!list) return -1;
    list.sort( (a, b) => {
      if(!a || !b) return -1;
      if (a._id < b._id) {
      return -1;
    }
    if (a._id > b._id) {
      return 1;
    }

    // names must be equal
    return 0;
    });
  },
  sortByProps(list, props) {
    if(!list) return ([]);
    let newList = list.sort( (a, b) => {
      if(!a || !b) return -1;
      if (this.change_alias(a[props]) < this.change_alias(b[props])) {
      return -1;
    }
    if (this.change_alias(a[props]) > this.change_alias(b[props])) {
      return 1;
    }

    // names must be equal
    return 0;
    });
    return newList;
  },
  validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
  },
  UpperCaseFirstChart(str) {
    return str[0].toUpperCase()+str.substring(1).toLowerCase();
  },
  change_alias( alias ) {
    var str = alias;
    str= str.toLowerCase();
    str= str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ  |ặ|ẳ|ẵ/g,"a");
    str= str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g,"e");
    str= str.replace(/ì|í|ị|ỉ|ĩ/g,"i");
    str= str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ  |ợ|ở|ỡ/g,"o");
    str= str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,"u");
    str= str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g,"y");
    str= str.replace(/đ/g,"d");
    str= str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'| |\"|\&|\#|\[|\]|~|$|_/g,"-");
    str= str.replace(/-+-/g,"-");
    str= str.replace(/^\-+|\-+$/g,"");
    return str;
},
  validateName(name) {
	var re = /^[^0-9 *&^$#@!(){}\[\]\\//]+[^0-9*&^$#@!(){}\[\]\\//]+$/;
	return re.test(name);
  },
  userPosition () {
  return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(position => {
        resolve(position);
      }, error => {
        reject(error);
      });
  });
},
formatMoney(number, n, x) {
    var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\.' : '$') + ')';
    return Number(number).toFixed(Math.max(0, ~~n)).replace(new RegExp(re, 'g'), '$& ');
},
formatSpace(str, n, x) {
    var ret = [];
    var i;

    for(i = 0; i < str.length; i += x) {
       ret.push(str.substr(i, x))
    }

    return ret.join(' ')
},
formatLocation (location) {
  let arrayLocation = _.split(location, ',');
     if (arrayLocation.length > 4) {
      return arrayLocation.splice(arrayLocation.length - 4).join(',');
     } else {
      return location;
     }
    },
findIndexPointerByProps(list, data, props) {

    if(!list) return -1;
    return list.findIndex( ( _data, index ) => {
      if (!_data || !data[props]) return -1;
      if ( data[props].trim() == _data[props].trim() ) {
        return index>-1;
      }
    });
  },
  findPointerByProps(list, data, props) {

    if(!list) return null;
    return list.find(( _data, index ) => {
      return _data[props] == data[props];
    });
  },
 checkURLImg(url) {
    return url?(url.match(/\.(jpeg|jpg|gif|png)$/) != null):false;
},
    getUnderlayColor(hex) {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

        if (!result) return 'transparent';
        result = {
            r: (parseInt(result[1], 16)*5/7).toFixed(0),
            g: (parseInt(result[2], 16)*5/7).toFixed(0),
            b: (parseInt(result[3], 16)*5/7).toFixed(0)
        };
        return rgbToHex(result);
    }
}

function componentToHex(c) {
    var hex = Number(c).toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(result) {
    return "#" + componentToHex(result.r) + componentToHex(result.g) + componentToHex(result.b);
}
