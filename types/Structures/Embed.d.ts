import Eris, { EmbedField } from "eris";
export declare class Embed {
    title?: string;
    description?: string;
    url?: string;
    timestamp?: string | Date;
    color?: number;
    footer?: Eris.EmbedFooterOptions;
    image?: Eris.EmbedImageOptions;
    thumbnail?: Eris.EmbedImageOptions;
    author?: Eris.EmbedAuthorOptions;
    fields: Eris.EmbedField[];
    constructor(data?: Eris.EmbedOptions);
    setTitle(title: string): this;
    setDescription(description: string): this;
    setColor(color: string | number): this;
    setURL(url: string): this;
    setTimestamp(timestamp?: Date): this;
    setFooter(iconURL: string | undefined, text: string | any[]): this;
    setImage(imageURL: string): this;
    setThumbnail(url: string): this;
    setAuthor(name: string | any[], url: string | undefined, iconURL: string | undefined): this;
    addField(name: string | any[], value: string | any[], inline?: boolean | undefined): this;
    addFields(fields: EmbedField[]): this;
}
