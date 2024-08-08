

const Utils = {
    flattenBoxes: (boxes, parent = '') => {
        let result = [];
        for (let [key, value] of Object.entries(boxes)){
    
            let path = parent ? `${parent}/${key}`: key;
            result.push({name: key, fullPath: path})
         
            if(value.children){
                result = result.concat(Utils.flattenBoxes(value.children, path));
            }

    
        }
        return result;
    },

};

module.exports = Utils;