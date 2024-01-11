import { reactive } from "vue";
export const store = reactive ({
    app_title: "Yu-Gi-Oh! APP",
    endpoint: "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0",
    cardList: [],
    loading: true,
    endpoint_archetype: "https://db.ygoprodeck.com/api/v7/archetypes.php",
    archeList: [],
    search: ""
})