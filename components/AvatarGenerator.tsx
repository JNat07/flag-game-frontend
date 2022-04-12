import { createAvatar } from "@dicebear/avatars";
import * as style from "@dicebear/pixel-art";

const avatarGenerator = (seed: string, sad?: boolean): string => {
    return createAvatar(style, {
        dataUri: true,
        seed: seed,
        mouth: sad ? ["sad02"] : ["happy04"],
        eyes: sad ? ["variant01"] : ["variant12"],
        eyebrows: sad ? ["variant05"] : ["variant01"],
        accessoriesProbability: sad ? 0 : 50,
    });
};

export default avatarGenerator;
