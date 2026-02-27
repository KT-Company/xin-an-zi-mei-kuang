import { request } from './index';
import axios from 'axios'

// 导出模版请求
export function getExportTemplate(params = {}) {
    return request('/data/exportTemplate', params, 'GET', {
        responseType: 'blob', // 确保返回的是 blob 格式
    });
}
//导出数据
export function getExportData(params = {}) {
    return request('/data/exportData', params, 'GET', {
        responseType: 'blob', // ⭐ 关键
    })
}

// 导入数据请求
export function getImportData(file, type) {
    const formData = new FormData();
    formData.append('file', file);

    return axios.post('/data/importData', formData, {
        params: { type }
    });
}

