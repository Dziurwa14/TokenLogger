import { ReactNative } from "@vendetta/metro/common";
import { Forms } from "@vendetta/ui/components";
import { getAssetIDByName } from "@vendetta/ui/assets";
import { storage } from "@vendetta/plugin";
import { useProxy } from "@vendetta/storage";

const { FormDivider, FormIcon, FormSwitchRow } = Forms;

export default () => {
    useProxy(storage);

    return (
        <ReactNative.ScrollView>
            <FormSwitchRow
                label="Send audio files as Voice Message"
                leading={<FormIcon source={getAssetIDByName("copy")} />}
                onValueChange={(v) => (storage.sendAsVM = v)}
                value={storage.sendAsVM}
            />
            <FormDivider />
            <FormSwitchRow
                label="Show every audio file as a Voice Message"
                leading={<FormIcon source={getAssetIDByName("ic_message_copy")} />}
                onValueChange={(v) => {
                    storage.allAsVM = v;
                }}
                value={storage.allAsVM}
            />
            <FormDivider />
            <FormSwitchRow
                label="Show file names"
                subLabel="Show Voice Message files names above the message"
                leading={<FormIcon source={getAssetIDByName("copy")} />}
                onValueChange={(v) => (storage.showFileName = v)}
                value={storage.showFileName}
            />
        </ReactNative.ScrollView>
    );
};
