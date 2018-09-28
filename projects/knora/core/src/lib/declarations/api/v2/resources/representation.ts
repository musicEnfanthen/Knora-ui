import { JsonObject, JsonProperty } from 'json2typescript';
import { StillImageRepresentation } from '../../..';


@JsonObject('Representation')
export class Representation {

    @JsonProperty('stillImage', StillImageRepresentation, true)
    public stillImage: StillImageRepresentation = undefined;

    // TODO: add more representations:
    // movingImage

    // audio

    // ddd

    // text

    // document

}
