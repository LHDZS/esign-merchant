export function auditTransform(value) {
    const types = {
        '0': '待审核',
        '1': '审核通过',
        '2': '审核驳回'
    };
    return types[value] || '';
}

export function invoiceTransform(value) {
    const types = {
        '00': "审批中",
        '10': "审批通过",
        '20': "审批驳回",
    };
    return types[value] || '';
}


export function colorTransform(value) {
    const types = {
        '00': '#3083FF',
        '10': '#52C41A',
        '20': '#F5222D',
    };
    return types[value] || '';
}

export function timeTransform(value) {
    var temp = new Date(value);
    var t = temp.getFullYear()+"-"+(temp.getMonth()+1)+"-"+temp.getDate();
    return t;
}

export function payTransform(value) {
    const types = {
        '1': '余额支付',
        '2': '线下支付',
    };
    return types[value] || '';
}

export function tradeTransform(value) {
    const types = {
        '1': '线下充值',
        '2': '购买产品',
    };
    return types[value] || '';
}
export function chanpinsform(value) {
    const types = {
        '1': '单个产品',
        '2': '组合产品',
    };
    return types[value] || '';
}

