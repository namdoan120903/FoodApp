const upload_preset = "food-app"
const could_name = "dvt1lfyzh"
const api_url = `https://api.cloudinary.com/v1_1/${could_name}/image/upload`

export const uploadImageToCloudinary = async (file)=>{
    const data = new FormData()
    data.append("file", file)
    data.append("upload_preset", upload_preset)
    data.append("could_name", could_name)

    const response = await fetch(api_url, {
        method:"post",
        body: data
    })
    const fileData = await response.json()
    return fileData.url
}