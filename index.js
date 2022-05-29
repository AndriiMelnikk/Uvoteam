/**
 * @param {Array} a
 * @param {Array} b
 * @returns {Array}
 */


module.exports = function intersection(a = [], b = []) {

    if (a === null || b === null || typeof a === typeof b && !Array.isArray(a))
        return [];

    if (Array.isArray(a) && Array.isArray(b))
        return a.filter(e => b.includes(e))


    // ---------------------------- Останній тест  ------------------------------------- // Декілька днів намагався вирішити

    // let obj_1 = {}, obj_2 = {}
    // function objNew(arr, obj, count = 1) {
    //     let obj_name = '_' + count++;
    //     obj = { ...obj, [obj_name]: [] }

    //     for (let i = 0; arr.length > i; i++) {
    //         if (Array.isArray(arr[i])) {
    //             return objNew(arr[i], obj, count)
    //         }
    //         else {
    //             obj = {
    //                 ...obj, [obj_name]: [...obj[obj_name], arr[i]]
    //             }
    //         }
    //     }

    //     return obj

    // }

    // common(objNew(a, obj_1), objNew(b, obj_2))

    // function common(arr_1, arr_2) {

    //     let count = 0;
    //     let element = 0;
    //     let arr_new = []
    //     for (key in arr_1) {
    //         let res = arr_1[key].filter(e => arr_2[key].includes(e))
    //         if (!res[0]) {
    //             arr_new.push([])
    //         }
    //         else {
    //             arr_new[count].push(res[0])
    //             count++
    //         }
    //     }

    // }
}

