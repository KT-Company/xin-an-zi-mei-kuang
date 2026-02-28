import { request } from './index';
//获取环境监测
export function getEnvMonitoring(params = {}) {
    return request(`/environmentalSupervision/environmentalMonitoring`, params, 'get');
}
//获取告警列表数据
export function getAlarmList(params = {}) {
    return request(`/environmentalSupervision/alarmList`, params, 'get');
}

// 电力能耗分析
export function getPowerConsumptionAnalysis(params = {}) {
    return request(`/environmentalSupervision/powerConsumptionAnalysis`, params, 'get');
}