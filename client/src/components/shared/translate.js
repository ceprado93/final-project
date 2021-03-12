import translate from "translate"

export const transEs = async text => {
    const translated = await translate(text, { to: "es", engine: "libre" })
    console.log(translated)
    return translated
}