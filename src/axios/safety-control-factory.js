
import { request } from './index';
// //test
// export function geteakage(params = {}) {
//     return request(`/leakage`, params, 'get');
// }
//获取监控与告警
export function getMonitoringAndAlarming(params = {}) {
    return request(`/safety/monitoringAndAlarming`, params, 'get');
}
//获取设备安全监测
export function getDeviceSafetyInspection(params = {}) {
    return request(`/safety/deviceSafetyInspection`, params, 'get');
}
//隐患治理
export function getPotentialRiskRectification(params = {}) {
    return request(`/safety/potentialRiskRectification`, params, 'get');
}
export function geteakage(params = {}) {
    return request(`/leakage`, params, 'get');
}