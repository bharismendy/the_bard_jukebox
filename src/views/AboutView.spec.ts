import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import SoundpadLayout from "@/layout/SoundpadLayout.vue";
import MainTitle from "@/components/atoms/MainTitle.vue";
import SoundGrid from "@/components/molecules/SoundGrid.vue";
import AboutView from "./AboutView.vue";
import LicenceRow from "@/components/atoms/LicenceRow.vue";
import { soundLicenses } from "@/constants/LicenceList";

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

describe("AboutView.vue", () => {
  it("renders MainTitle with correct title", () => {
    const wrapper = mount(AboutView);
    const mainTitle = wrapper.findComponent(MainTitle);
    expect(mainTitle.exists()).toBe(true);
    expect(mainTitle.props()).toMatchObject({
      title: "About The Bard’s Jukebox",
    });
  });

  it("renders the author information", () => {
    const wrapper = mount(AboutView);
    expect(wrapper.text()).toContain("Brice Harismendy");
  });

  it("renders LicenceRow components for each license", () => {
    const wrapper = mount(AboutView);
    const licenceRows = wrapper.findAllComponents(LicenceRow);
    expect(licenceRows.length).toBe(soundLicenses.length);
  });
});
