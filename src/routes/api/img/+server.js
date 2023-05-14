import { error } from '@sveltejs/kit';
import { TELEGRAM_BOT_API_KEY } from '$env/static/private';


export const config = {
    runtime: 'edge'
};

export async function GET({ url }) {
    const id = String(url.searchParams.get('id') ?? '0');

    console.log(id, TELEGRAM_BOT_API_KEY)

    const asset = await fetch(`https://drive.google.com/uc?id=1z3JNX7Gc2OfpTr1yr8rn1HAwDp6lyOLe`).then(r => r.blob()).catch(e => {
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
