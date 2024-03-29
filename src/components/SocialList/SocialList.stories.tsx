import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { SocialList } from ".";
import { StoryContainer } from "@/stories/StoryContainer";

export default {
  title: "components/SocialList",
  component: SocialList,
} as ComponentMeta<typeof SocialList>;

const Template: ComponentStory<typeof SocialList> = () => (
  <StoryContainer>
    <SocialList />
  </StoryContainer>
);

export const Main = Template.bind({});
Main.args = {
  className: "text-white",
};
