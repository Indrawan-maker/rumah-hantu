import path from "node:path"
import fs from "node:fs/promises"
import { getData } from "./getDta.js"

export async function addNewSighting(newSighting) {
    try {
        
        const sighting = await getData()
        sighting.push(newSighting)
        const pathJSON = path.join("data", "data.json")
        await fs.writeFile(pathJSON, JSON.stringify(sighting, null, 2),
    "utf8"
    )
    } catch (error) {
        throw new Error(err)
    }
}