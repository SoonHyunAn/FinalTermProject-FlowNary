import { Cloudinary } from "@cloudinary/url-gen/index";

export async function UploadImage(image) {
    if (!image)
    {
        return null;
    }

    const data = new FormData();
    data.append("file", image);
    data.append(
        "upload_preset",
        process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET
    )
    data.append("cloud_name", process.env.REACT_APP_CLOUDINARY_CLOUD_NAME);
    data.append("folder", "Cloudinary-React");

    try {
        const response = await fetch(
            `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/image/upload`,
            {
                method: "POST",
                body: data,
            }
        );
        const res = await response.json();
        return res.public_id;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export function FindImage(url) {
    const cld = new Cloudinary({
        cloud: {
            cloudName: process.env.REACT_APP_CLOUDINARY_CLOUD_NAME
        }
    })

    const myimage = cld.image(url);

    return myimage
}