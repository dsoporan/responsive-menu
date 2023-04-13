import express from "express";
import cors from "cors";

const PORT = 4000;
const app = express();

app.use(cors());

export interface IBaseMenu {
    slug: string;
    title: string;
    url: string;
}

export interface IMenu extends IBaseMenu {
    children?: IBaseMenu[];
}

export const mockMenuData: IMenu[] = [
    {
        "slug":"we-conect",
        "title":"We-Conect Home page",
        "url":"https://www.we-conect.com/",
        "children": [
            {
                "slug":"live-events",
                "title":"Live Event",
                "url":"https://www.we-conect.com/liveevents",
            } ,
            {
                "slug":"digital-managed-events",
                "title":"Digital Managed Events",
                "url":"https://www.we-conect.com/digital-managed-events",
            }
        ]
    },
    {
        "slug":"google",
        "title":"Google",
        "url":"https://www.google.com"
    }
]

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

app.get("/", (_, res) => res.send("Api running successfully."));

app.get("/api/v1/menu", (_, res) => res.json(mockMenuData));