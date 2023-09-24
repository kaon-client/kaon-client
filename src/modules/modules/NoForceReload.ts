import { moduleDefinition } from "../moduleapi"

function preventReload() {
    window.onbeforeunload = (e) => {
        return "no"
    }
}

function enableReload() {
    window.onbeforeunload = null
}

const plugin: moduleDefinition = {
    displayName: "NoForceReload",
    id: "noforcereload",
    section: "exploit",
    onactive: preventReload,
    ondisable: enableReload
}

export default plugin;
