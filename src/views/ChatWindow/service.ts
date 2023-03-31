import { getRequest } from '@/network';

export const getMessageCompletion = (params: { msg: string }) => {
	return getRequest('/v1/chat/ai/complete', params);
};
