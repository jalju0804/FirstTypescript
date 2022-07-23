//@ts-check 
//jDoc ts를 위해 js 파일 변수에 타입을 선언
/**
 * Initializes the project
 * @param {object} config
 * @param {boolean} config.debug
 * @param {string} config.url
 * @returns boolean
 */
export function init(config) {
    return true;
}
/**
 * Exit the program
 * @param {number} code
 * @returns number
 */
export function exit(code) {
    return code + 1;
}
