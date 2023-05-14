import { error } from '@sveltejs/kit';
import { TELEGRAM_BOT_API_KEY } from '$env/static/private';


export const config = {
    runtime: 'edge'
};

export async function GET({ url }) {
    const id = String(url.searchParams.get('id') ?? '0');

    console.log(id)
    const getFileUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_API_KEY}/getFile?file_id=${id}`
    const file = await fetch(getFileUrl).then(r => r.json()).catch(e => {
        console.log(e)
        return error(404)
    })
    console.log(file)

    const asset = await fetch(`https://api.telegram.org/file/${TELEGRAM_BOT_API_KEY}/${file.result.file_path}
`).then(r => r.blob()).catch(e => {
        console.log(e)
        return error(404)
    })
    console.log(asset)
    return new Response(asset.stream(), {
        headers: {
            "Content-Type": asset.type ?? 'image/png',
        }
    })
}
