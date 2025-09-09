export async function parseJSONBody(req) {
    let body = ''

    for await (const chunck of req) {
        body += chunck
    }

    try {
        return JSON.parse(body)
    } catch (error) {
        throw new Error(`invalid JSON format: ${error}`)
    }
    
}