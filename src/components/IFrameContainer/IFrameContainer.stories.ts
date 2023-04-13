import type { Meta, StoryObj } from "@storybook/react";

import IFrameContainer from "./IFrameContainer";

const meta = {
    title: "IFrameContainer",
    component: IFrameContainer,
    tags: ["autodocs"],
} satisfies Meta<typeof IFrameContainer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const IFrameContainerStory: Story = {
    args: {
        title: 'We.Conect',
        url: 'https://www.we-conect.com/'
    },
};