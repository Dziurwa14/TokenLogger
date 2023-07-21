import { before, after } from "@vendetta/patcher"
import { getAssetIDByName as getAssetId } from "@vendetta/ui/assets"
import { findByProps } from "@vendetta/metro"
import { React } from "@vendetta/metro/common"
import { Forms } from "@vendetta/ui/components"

const ActionSheet = findByProps("openLazy", "hideActionSheet")
const Icon = Forms.FormIcon
const { FormRow } = Forms

export default () => before("openLazy", ActionSheet, (ctx) => {
    const [component, args, actionMessage] = ctx
    if (args !== "MessageLongPressActionSheet") return
    component.then(instance => {
        const unpatch = after("default", instance, (_, component) => {
            React.useEffect(() => () => { unpatch() }, [])
            let [msgProps, buttons] = component.props?.children?.props?.children?.props?.children

            const message = msgProps?.props?.message ?? actionMessage?.message

            if (!buttons || !message) return

            if (message.hasFlag(8192))
                buttons.splice(5, 0,
                    <FormRow
                        label="Download Voice Message"
                        leading={<Icon source={getAssetId("ic_download_24px")} />}
                        onPress={async () => {
                            await findByProps("downloadMediaAsset").downloadMediaAsset(message.attachments[0].url, 0)
                            findByProps("hideActionSheet").hideActionSheet()
                        }}
                    />)
        })
    })
})