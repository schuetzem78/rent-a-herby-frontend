import { IClientInformation } from "./IClientInformation";

export interface INotOptimalImageSize {
    imageName : string,
    requestedImageSize : number,
	clientInformation: IClientInformation
}
