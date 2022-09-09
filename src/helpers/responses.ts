import { camelizeKeys } from './functions';

const _corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-Methods": "*",
}

export const ok = (payload) => {
    return baseResponse(200, payload)
};

export const baseResponse = (httpStatus, payload) => {
    return {
        statusCode: httpStatus,
        headers: _corsHeaders,
        body: JSON.stringify(payload)
    }
};