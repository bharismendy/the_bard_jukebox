import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import SoundpadLayout from "./SoundpadLayout.vue";
import MainTitle from "@/components/atoms/MainTitle.vue";
import SoundGrid from "@/components/molecules/SoundGrid.vue";

describe("SoundpadLayout.vue", () => {
  it("renders MainTitle component with correct props", () => {
    const wrapper = mount(SoundpadLayout);
    const mainTitle = wrapper.findComponent(MainTitle);
    expect(mainTitle.exists()).toBe(true);
    expect(mainTitle.props()).toMatchObject({
      title: "The Bard’s Jukebox",
      description: "Enhance your adventure",
    });
  });

  it("renders SoundGrid component", () => {
    const wrapper = mount(SoundpadLayout);
    const soundGrid = wrapper.findComponent(SoundGrid);
    expect(soundGrid.exists()).toBe(true);
  });
});
