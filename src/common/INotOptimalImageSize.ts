import { IClientInformation } from "./IClientInformation";

export interface INotOptimalImageSize {
    imageName : string,
    requestedImageSize : string,
	clientInformation: IClientInformation
}
