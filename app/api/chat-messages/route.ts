import { type NextRequest } from 'next/server'
import { client, getInfo } from '@/app/api/utils/common'

export async function POST(request: NextRequest) {
    const body = await request.json()
    const {
        inputs,
        files,
    } = body
    const { user } = getInfo(request)
    const query = body.query || inputs.name || "default query"
    const res = await client.createChatMessage(inputs, query, user, 'streaming', files)
    return new Response(res.data as any)
} 