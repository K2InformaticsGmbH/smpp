
/* Deep parsing of objects */

var result = {
	missing_from_first: [],
	missing_from_second: [],
	different_object: [],
	different_value: []
};

var path = "";
var compare = function(obj1, obj2, exclude_list) { 
	for (var p in obj1) {
		if (exclude_list.indexOf(p) == -1) {
	        	if (obj2.hasOwnProperty(p)) { // Both objects have 'p'
	        	        switch (typeof (obj1[p])) {
	        	                case 'object':
						path = path + p + ".";
						compare (obj1[p], obj2[p], exclude_list);
	        	                        result.different_object.push(path);
						break;
	        	                default:
						if (obj1[p] != obj2[p]) {
						        result.different_value.push(path + p + ":" + obj1[p] + "," + obj2[p]);
						}
						break;
				}
			} else {
	        		result.missing_from_second.push(p);
			}
		}
	}

	for (var p in obj2) {
		if (exclude_list.indexOf(p) == -1) {
	        	if (!obj1.hasOwnProperty(p)) { 
	                	result.missing_from_first.push(p);
	        	}
		}
	}
	return result;
};
