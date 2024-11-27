import { MicroImages } from "./MicroImages";

/**
 * Images
 * @targetNSAlias `tns`
 * @targetNamespace `http://sma-promail/`
 */
export interface Images {
    /** s:boolean */
    LocalImages?: boolean;
    /** s:string */
    FullImageText?: string;
    /** s:string */
    Directory?: string;
    /** s:string */
    ThumbnailFilename?: string;
    /** s:string */
    FullImageFilename?: string;
    /** MicroImages */
    MicroImages?: MicroImages;
    /** RemovedImages */
    RemovedImages?: MicroImages;
}
