import { findByProps, find } from "@vendetta/metro";
import { instead } from "@vendetta/patcher";

const icons = findByProps("OFFICIAL_ALTERNATE_ICONS")
const iconsIds = findByProps("LimitedTimeAppIconIds")
const FreemiumAppIcons = iconsIds.FreemiumAppIconIds
let alternateIcons = icons.OFFICIAL_ALTERNATE_ICONS()

let patch;
export default {
    onLoad: () => {
        alternateIcons.forEach(x => x.isPremium = false)
        icons.ICONS.forEach(x => { x.isPremium = false });
        patch = instead("OFFICIAL_ALTERNATE_ICONS", icons, () => alternateIcons);
        iconsIds.FreemiumAppIconIds = iconsIds.MasterAppIconIds;
    },
    onUnload: () => {
        icons.ICONS.forEach(x => { x.isPremium = true });
        iconsIds.FreemiumAppIconIds = FreemiumAppIcons;
        patch()
    }
}
