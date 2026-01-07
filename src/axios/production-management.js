import { request } from './index';
//获取生产执行计划
export function getProductionExecutionPlan(params = {}) {
    return request(`/productionManage/productionExecutionPlan`, params, 'get');
}
//获取班组状态
export function getGroupStatus(params = {}) {
    return request(`/productionManage/groupStatus`, params, 'get');
}
//获取班组状态
export function getProductionProgress(params = {}) {
    return request(`/productionManage/productionProgress`, params, 'get');
}