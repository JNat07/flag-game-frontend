import { createAvatar } from "@dicebear/avatars";
import * as style from "@dicebear/pixel-art";

const avatarGenerator = (seed: string): string => {
    return createAvatar(style, {
        dataUri: true,
        seed: seed,
    });
};

export default avatarGenerator;
