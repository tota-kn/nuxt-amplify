import { defineEventHandler, readBody } from 'h3';

export default defineEventHandler(async (event) => {
    if (!event) return;
    if (event.node.req.method === 'POST') {
        const body = await readBody(event);
        event.context.body = body;
    }
});