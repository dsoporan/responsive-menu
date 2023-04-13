import type { Meta, StoryObj } from "@storybook/react";
import MenuItem from "./MenuItem";

const meta = {
    title: "MenuItem",
    component: MenuItem,
    tags: ["autodocs"],
} satisfies Meta<typeof MenuItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ListItem: Story = {
    args: {
        slug: {
            slug: "example-2",
            url: "https://www.we-conect.com",
            title: "Example 2",
            children: [
                {
                    slug: "example3",
                    url: "https://www.we-conect.com",
                    title: "Example 3",
                },
            ],
        },
        onNavigation: (props) => console.log(props)
    },
};